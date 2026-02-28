from fastapi import (
  status, HTTPException
)
from sqlalchemy.orm import Session

from .. import schemas, models


def all(db: Session):
  blogs = db.query(models.Blog).all()
  return blogs

def get(id: int, db: Session):
  blog = db.query(models.Blog).filter(models.Blog.id == id).first()
  if not blog:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with id = {id} is not found")
    # response.status_code = status.HTTP_404_NOT_FOUND
    # return {"data": f"Blog with id = {id} is not found"}
  return blog

def create(request: schemas.Blog, db: Session):
  blog = models.Blog(title=request.title, body=request.body, user_id=1)
  db.add(blog)
  db.commit()
  db.refresh(blog)
  return blog

def update(id: int, request: schemas.Blog, db: Session):
  blog = db.query(models.Blog).filter(models.Blog.id == id)
  if not blog.first():
    raise HTTPException(status.HTTP_404_NOT_FOUND, f"Blog with id = {id} is not found")
  blog.update(dict(request), synchronize_session=False)
  db.commit()
  return {"data": "blog is updated"}

def delete(id: int, db: Session):
  blog = db.query(models.Blog).filter(models.Blog.id==id)
  if not blog.first():
    raise HTTPException(status.HTTP_404_NOT_FOUND, f"Blog with id = {id} is not found")
  blog.delete(synchronize_session=False)
  db.commit()
  return {"data": "Blog is deleted"}