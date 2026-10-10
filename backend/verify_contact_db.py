import sys
from pathlib import Path

# Add backend directory to sys.path
backend_dir = Path(__file__).resolve().parent
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

from database import Base, SessionLocal, engine
from models import ContactMessage


def run_verification():
    print("=" * 60)
    print("PostgreSQL & Contact Model Verification Test")
    print("=" * 60)

    # 1. Test database connection
    print("[1/4] Testing database connection...")
    try:
        with engine.connect() as connection:
            print("  --> Successfully connected to PostgreSQL engine!")
    except Exception as exc:
        print("  [ERROR] Could not connect to PostgreSQL.")
        # Print high-level error without leaking credentials
        err_msg = str(exc)
        if "password authentication failed" in err_msg or "fe_sendauth" in err_msg:
            print("  --> Authentication failed. Please check the DB_PASSWORD in backend/.env.")
        elif "does not exist" in err_msg:
            print("  --> Database does not exist. Ensure database 'portfolio_db' has been created.")
        elif "Connection refused" in err_msg:
            print("  --> Connection refused. Ensure PostgreSQL service is running on the configured host/port.")
        else:
            print(f"  --> Connection details error: {type(exc).__name__}")
        return False

    # 2. Ensure tables exist
    print("[2/4] Ensuring database tables exist...")
    try:
        Base.metadata.create_all(bind=engine)
        print("  --> Table 'contact_messages' verified/created.")
    except Exception as exc:
        print(f"  [ERROR] Table creation failed: {type(exc).__name__}")
        return False

    # 3. Insert a test record
    print("[3/4] Inserting test contact record...")
    db = SessionLocal()
    test_id = None
    try:
        test_msg = ContactMessage(
            name="Verification Test User",
            email="test@verification.local",
            subject="Verification Test Subject",
            message="This is a temporary test message to verify database persistence.",
        )
        db.add(test_msg)
        db.commit()
        db.refresh(test_msg)
        test_id = test_msg.id
        print(f"  --> Saved test message with ID: {test_id}")
        print(f"  --> Created at timestamp: {test_msg.created_at}")

        # 4. Query record back to verify persistence
        print("[4/4] Verifying record retrieval and data integrity...")
        retrieved = db.query(ContactMessage).filter(ContactMessage.id == test_id).first()
        assert retrieved is not None, "Failed to retrieve the inserted message."
        assert retrieved.name == "Verification Test User"
        assert retrieved.email == "test@verification.local"
        assert retrieved.subject == "Verification Test Subject"
        assert retrieved.created_at is not None
        print("  --> Record successfully retrieved and verified.")

        # Clean up test record
        db.delete(retrieved)
        db.commit()
        print("  --> Test record cleaned up successfully.")

    except Exception as exc:
        db.rollback()
        print(f"  [ERROR] Verification failed during record operation: {type(exc).__name__} - {exc}")
        return False
    finally:
        db.close()

    print("=" * 60)
    print("ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
    print("=" * 60)
    return True


if __name__ == "__main__":
    success = run_verification()
    sys.exit(0 if success else 1)
