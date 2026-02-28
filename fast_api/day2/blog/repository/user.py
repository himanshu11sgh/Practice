from fastapi import (
  status, HTTPException
)
from sqlalchemy.orm import Session

from .. import schemas, models
from ..hashing import PasswordHashing


def get(id: int, db: Session):
  user = db.query(models.User).filter(models.User.id == id).first()
  if not user:
    raise HTTPException(status.HTTP_404_NOT_FOUND, f"User with id = {id} is not available")
  return user


def create(request: schemas.User, db: Session):
  password = PasswordHashing.get_password_hash(request.password)
  user = models.User(name = request.name, email = request.email, password = password)
  db.add(user)
  db.commit()
  db.refresh(user)
  return user
