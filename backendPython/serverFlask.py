from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    font = requests.get("http://localhost:8000/font").json()['font']
    random_number = requests.get("http://localhost:3001/random").json()['random']
    color = requests.get("http://localhost:8080/color").json()['color']
    return jsonify({
        "helloWorld": "Hello World",
        "quote": f"Random Number: {random_number}",
        "font": font,
        "color": color
    })

if __name__ == "__main__":
    app.run(port=5000)
