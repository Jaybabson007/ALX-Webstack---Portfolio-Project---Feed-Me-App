from flask import Flask
from backend.db import db
from backend.routes.listings import bp as listings_bp

def create_app(config=None):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    if config:
        app.config.update(config)

    db.init_app(app)
    app.register_blueprint(listings_bp)

    return app
