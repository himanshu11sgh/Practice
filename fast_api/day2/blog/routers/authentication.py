from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from .. import schemas, models, token
from ..database import get_db
from ..hashing import PasswordHashing



router = APIRouter(
  tags = ["Authentication"]
)

@router.post("/login", response_model=schemas.Token)
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
  user = db.query(models.User).filter(models.User.email == request.username).first()
  if not user:
    raise HTTPException(status.HTTP_404_NOT_FOUND, "User is not found")
  if not PasswordHashing.verify_password(request.password, user.password):
    raise HTTPException(status.HTTP_404_NOT_FOUND, "Incorrect Password")
  
  access_token = token.create_access_token(data={"sub": user.email})
  print("access_token", access_token)
  return {"access_token": access_token, "token_type": "bearer"}

