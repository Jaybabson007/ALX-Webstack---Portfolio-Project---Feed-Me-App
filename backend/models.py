from backend.db import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

class FoodListing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    food_item = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(256))
    quantity = db.Column(db.String(64), nullable=False)
    expiry_date = db.Column(db.DateTime, nullable=False)
    contact = db.Column(db.String(64), nullable=False)
    location = db.Column(db.String(128), nullable=False)
    donor_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
