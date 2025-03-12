from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Serve static files (HTML, CSS, JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Sample product data
products = [
    {"id": 1, "name": "Laptop", "price": 1200},
    {"id": 2, "name": "Smartphone", "price": 800},
    {"id": 3, "name": "Headphones", "price": 150},
]

# Cart storage (temporary, resets on restart)
cart = []

class CartItem(BaseModel):
    product_id: int
    quantity: int

@app.get("/products")
def get_products():
    return products

@app.post("/add-to-cart")
def add_to_cart(item: CartItem):
    product = next((p for p in products if p["id"] == item.product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    cart.append({"product": product, "quantity": item.quantity})
    return {"message": "Added to cart", "cart": cart}

@app.get("/cart")
def get_cart():
    return cart