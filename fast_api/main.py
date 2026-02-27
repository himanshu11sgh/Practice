from fastapi import FastAPI
from typing import Optional

app = FastAPI()

@app.get("/blog")
def index(sort: Optional[str] = None, limit: int = 10, unpublished: bool = False, ):
  return {"data": f"{limit} {'unpublished' if unpublished else ''} blogs from the db {'sorted' if sort else ''}"}

@app.get("/about")
def about():
  return {"data": "about page"}

@app.get("/blog/unpublished")
def blog_unpublished():
  return {"data": "unpublished blogs"}

@app.get("/blog/{id}")
def blog_detail(id: int):
  return {"data": f"blog_detail of {id}", "id": id}

@app.get("/blog/{id}/comment")
def blog_comment(id):
  return {"data": f"blog_comment of {id}"}