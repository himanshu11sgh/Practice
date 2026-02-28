from fastapi import (
  FastAPI
)
from .database import engine, Base
from .routers import user, blog, authentication

app = FastAPI()

# Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

app.include_router(authentication.router)
app.include_router(user.router)
app.include_router(blog.router)

