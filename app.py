"""Simple Flask backend for the GSCC website.
Serves the site and validates form data without retaining submissions."""
from flask import Flask, request, jsonify

app = Flask(__name__, static_folder="public", static_url_path="")

REQUIRED = {
    "contact": ["name", "email", "subject", "message"],
    "apply": ["student", "dob", "class", "parent", "phone", "email"],
}
THANKS = {
    "contact": "This demo does not save or send messages. Please contact the school directly.",
    "apply": "This demo does not save or send applications. Please contact the school directly.",
}

@app.route("/")
def home():
    return app.send_static_file("index.html")

@app.route("/api/<kind>", methods=["POST"])
def submit(kind):
    if kind not in REQUIRED:
        return jsonify(error="Unknown form."), 404
    data = request.get_json(silent=True) or {}
    missing = [f for f in REQUIRED[kind] if not str(data.get(f, "")).strip()]
    if missing:
        return jsonify(error="Please fill in: " + ", ".join(missing)), 400
    return jsonify(message=THANKS[kind])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
