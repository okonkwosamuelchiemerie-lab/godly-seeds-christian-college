"""Simple Flask backend for the GSCC website.
Serves the site and saves the contact and application forms to JSON files."""
import json, os
from datetime import datetime
from flask import Flask, request, jsonify

app = Flask(__name__, static_folder="public", static_url_path="")
DATA = os.path.join(os.path.dirname(__file__), "submissions")
os.makedirs(DATA, exist_ok=True)

REQUIRED = {
    "contact": ["name", "email", "subject", "message"],
    "apply": ["student", "dob", "class", "parent", "phone", "email"],
}
THANKS = {
    "contact": "Thank you. Your message has been sent.",
    "apply": "Application received. We will contact you soon.",
}

@app.route("/")
def home():
    return app.send_static_file("index.html")

@app.route("/api/<kind>", methods=["POST"])
def save(kind):
    if kind not in REQUIRED:
        return jsonify(error="Unknown form."), 404
    data = request.get_json(silent=True) or {}
    missing = [f for f in REQUIRED[kind] if not str(data.get(f, "")).strip()]
    if missing:
        return jsonify(error="Please fill in: " + ", ".join(missing)), 400
    data["received"] = datetime.now().isoformat(timespec="seconds")
    path = os.path.join(DATA, kind + ".json")
    items = json.load(open(path)) if os.path.exists(path) else []
    items.append(data)
    json.dump(items, open(path, "w"), indent=2)
    return jsonify(message=THANKS[kind])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
