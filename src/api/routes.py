"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"Message": "User not found"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)
    print(access_token)

@api.route("/user/active", methods=["POST"])
def active_user():
    print("Active user")
    body=request.get_json()
    one_user = User.query.filter_by(email=body["email"]).first()
    return jsonify(one_user.serialize()), 200

@api.route("/user", methods=["POST"])
def create_user():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    user = User(email=email, password=password)

    db.session.add(user)
    db.session.commit(user)
    
    return (jsonify(user.serialize))