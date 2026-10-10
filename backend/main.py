import logging
from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from models import ContactMessage
from schemas import ContactMessageCreate, ContactResponse

# Configure logger
logger = logging.getLogger("portfolio.api")
logging.basicConfig(level=logging.INFO)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Attempt to initialize tables on startup safely
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables verified/created successfully.")
    except Exception as exc:
        logger.warning(f"Database connection deferred or failed on startup: {exc}")
    yield


app = FastAPI(
    title="Eng. Mohamed Imthath Portfolio API",
    description="Backend API for personal portfolio website",
    version="1.0.0",
    lifespan=lifespan,
)

# Enable CORS strictly for the local React + Vite development origin
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {
        "message": "Welcome to Eng. Mohamed Imthath's Portfolio API",
        "status": "online",
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "portfolio-backend",
        "version": "1.0.0",
    }


@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_200_OK,
    summary="Submit contact message",
)
def submit_contact_message(
    contact_data: ContactMessageCreate,
    db: Session = Depends(get_db),
):
    """
    Validate incoming contact form submission and save to the database.
    Catches database exceptions and responds with a safe error message without exposing credentials or internal traces.
    """
    new_message = ContactMessage(
        name=contact_data.name,
        email=contact_data.email,
        subject=contact_data.subject,
        message=contact_data.message,
    )

    try:
        db.add(new_message)
        db.commit()
        db.refresh(new_message)
    except SQLAlchemyError as exc:
        db.rollback()
        logger.error(f"Database error while saving contact message: {exc}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit your message due to an internal server error. Please try again later.",
        )
    except Exception as exc:
        db.rollback()
        logger.error(f"Unexpected error while saving contact message: {exc}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred. Please try again later.",
        )

    return {
        "status": "success",
        "message": "Thank you! Your message has been received and saved successfully.",
    }
