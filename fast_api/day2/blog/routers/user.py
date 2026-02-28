from fastapi import (
  APIRouter, Depends, status
)
from sqlalchemy.orm import Session

from .. import schemas
from ..database import get_db
from ..repository import user
from ..oauth import get_current_user

router = APIRouter(
  prefix="/user",
  tags=["Users"],
  dependencies=[Depends(get_current_user)]
)

@router.get("/{id}", response_model=schemas.ShowUser)
def get(id: int, db: Session = Depends(get_db)):
  return user.get(id, db)


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.ShowUser)
def create(request: schemas.User, db: Session = Depends(get_db)):
  return user.create(request, db)