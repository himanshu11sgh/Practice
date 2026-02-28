from pydantic import BaseModel
from typing import List, Optional

class User(BaseModel):
  name: str
  email: str
  password: str

class Blog(BaseModel):
  title: str
  body: str

class BlogRel(Blog):
  class Config:
    from_attributes = True

class UserRel(BaseModel):
  name: str
  email: str
  class Config:
    from_attributes = True


class ShowUser(BaseModel):
  name: str
  email: str
  blogs: List[BlogRel]

  class Config:
    from_attributes = True

class ShowBlog(BaseModel):
  title: str
  body: str
  owner: UserRel

  class Config:
    from_attributes = True

class Login(BaseModel):
  username: str
  password: str

class Token(BaseModel):
  access_token: str
  token_type: str

class TokenData(BaseModel):
  username: Optional[str] = None
