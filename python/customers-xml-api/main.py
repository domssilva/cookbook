from flask import Flask, request, make_response
from xml.etree import ElementTree as ET

app = Flask(__name__)

# Customers will be stored in memory as a list of dictionaries
customers = []

@app.route('/', methods=['GET'])
def home():
    return "pong."


if __name__ == '__main__':
    app.run(host='localhost', port=3000)