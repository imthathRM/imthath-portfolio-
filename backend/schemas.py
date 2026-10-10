import re
from pydantic import BaseModel, Field, field_validator

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Sender's full name")
    email: str = Field(..., min_length=3, max_length=255, description="Sender's email address")
    subject: str = Field(..., min_length=1, max_length=200, description="Message subject")
    message: str = Field(..., min_length=10, max_length=5000, description="Message body content")

    @field_validator("name", "email", "subject", "message", mode="before")
    @classmethod
    def strip_whitespace(cls, v: str) -> str:
        if isinstance(v, str):
            return v.strip()
        return v

    @field_validator("name")
    @classmethod
    def validate_name(cls, v: str) -> str:
        if not v:
            raise ValueError("Name cannot be empty or only whitespace.")
        return v

    @field_validator("email")
    @classmethod
    def validate_email(cls, v: str) -> str:
        if not v:
            raise ValueError("Email cannot be empty.")
        if not EMAIL_REGEX.match(v):
            raise ValueError("Invalid email address format.")
        return v.lower()

    @field_validator("subject")
    @classmethod
    def validate_subject(cls, v: str) -> str:
        if not v:
            raise ValueError("Subject cannot be empty or only whitespace.")
        return v

    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        if not v or len(v) < 10:
            raise ValueError("Message must be at least 10 characters long.")
        return v


class ContactResponse(BaseModel):
    status: str
    message: str
