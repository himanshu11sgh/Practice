from fastapi import (
  APIRouter, Depends, status
)
from typing import List
from sqlalchemy.orm import Session

from .. import schemas
from ..database import get_db
from ..repository import blog
from ..oauth import get_current_user

router = APIRouter(
  prefix="/blog",
  tags=["Blogs"],
  dependencies=[Depends(get_current_user)]
)

@router.get("/", response_model=List[schemas.ShowBlog])
def all(db: Session=Depends(get_db)):
  return blog.all(db)

@router.get("/{id}")
def get(id: int, db: Session=Depends(get_db)) -> schemas.ShowBlog:
  return blog.get(id, db)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.ShowBlog)
def create(request: schemas.Blog, db: Session=Depends(get_db)):
  return blog.create(request, db)

@router.put("/{id}", status_code=status.HTTP_202_ACCEPTED)
def update(id: int, request: schemas.Blog, db: Session=Depends(get_db)):
  return blog.update(id, request, db)

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete(id: int, db: Session=Depends(get_db)):
  return blog.delete(id, db)


