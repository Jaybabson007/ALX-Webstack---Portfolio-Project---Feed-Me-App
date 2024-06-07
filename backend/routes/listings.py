from flask import Blueprint, request, jsonify
from backend.models import FoodListing
from backend.db import db
from datetime import datetime

bp = Blueprint('listings', __name__)

@bp.route('/listings/', methods=['POST'])
def create_listing():
    data = request.get_json()
    try:
        expiry_date = datetime.fromisoformat(data['expiry_date'])
    except ValueError:
        return jsonify({'error': 'Invalid date format'}), 400

    new_listing = FoodListing(
        food_item=data['food_item'],
        description=data['description'],
        quantity=data['quantity'],
        expiry_date=expiry_date,
        contact=data['contact'],
        location=data['location'],
        donor_id=data['donor_id']
    )
    db.session.add(new_listing)
    db.session.commit()
    return jsonify({
        'id': new_listing.id,
        'food_item': new_listing.food_item,
        'description': new_listing.description,
        'quantity': new_listing.quantity,
        'expiry_date': new_listing.expiry_date.isoformat(),
        'contact': new_listing.contact,
        'location': new_listing.location,
        'donor_id': new_listing.donor_id
    }), 201
