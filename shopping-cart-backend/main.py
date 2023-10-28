from fastapi import FastAPI
from pydantic import BaseModel
from typing import  Text
from datetime import datetime

app = FastAPI()


class Product(BaseModel):
    product_id: str
    user_id: str
    name:  str
    count: int
    price: float
    create_at: datetime = datetime.now()


cart = []

@app.get("/")
def read_root():
    return {"Hello":"World"}



@app.get("/cart/products")
def get_all_cart():
    return cart

@app.post("/cart/products")
def add_products(product: Product):
    cart.append(product.model_dump())
    return "received"


@app.get("/cart/products/{user_id}")
def get_cart(user_id: str):
    productsCart=[]
    for product in cart:
        if product["user_id"] == user_id:
            productsCart.append(product)
    return productsCart

@app.put("/cart/products/{product_id}")
def  update_product_quantity(product_id:str, new_quantity:int, user_id:str):
    for product in cart:
        if product["product_id"] == product_id and product["user_id"] == user_id:
            product["count"] = new_quantity
            return "Quantity updated suucceessfully"
    


@app.delete("/cart/products/{product_id}")
def delete_product(product_id: str):
    return "nothing"

@app.get("/cart/total/{user_id}")
def calculate_total_price(user_id: str):
    total_price=0
    for product in cart:
        if   product["user_id"]== user_id:
            total_price +=   product["count"] * product["price"]
    return {"user_id": user_id, "total_price": total_price}           