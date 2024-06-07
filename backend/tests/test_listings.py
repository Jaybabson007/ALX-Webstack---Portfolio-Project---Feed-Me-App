import pytest
from datetime import datetime
from backend.app import create_app
from backend.db import db
from backend.models import User, FoodListing

@pytest.fixture
def app():
    app = create_app({'TESTING': True})
    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()

@pytest.fixture
def client(app):
    return app.test_client()

def test_create_listing(client):
    expiry_date = datetime.utcnow()
    response = client.post('/listings/', json={
        'food_item': 'Bread',
        'description': 'Fresh bread',
        'quantity': '10 loaves',
        'expiry_date': expiry_date.isoformat(),  # ISO format for the JSON payload
        'contact': '123-456-7890',
        'location': '123 Main St',
        'donor_id': 1
    })
    assert response.status_code == 201
    data = response.get_json()
    assert data['food_item'] == 'Bread'
    assert data['expiry_date'] == expiry_date.isoformat()  # Validate the format

