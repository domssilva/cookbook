from flask import Flask, request, make_response
from xml.etree import ElementTree as ET

app = Flask(__name__)

# Customers will be stored in memory as a list of dictionaries
customers = []

@app.route('/', methods=['GET'])
def home():
    return "pong."

# POST /api/customer
@app.route('/api/customer', methods=['POST'])
def create_customer():
    # Parse the request body as XML
    customer_xml = ET.fromstring(request.data)
    
    # Deserialize the customer from the XML element
    customer = customer_from_xml(customer_xml)
    
    # Generate a new customer ID for the customer
    customer['id'] = generate_customer_id()
    
    # Add the customer to the list
    customers.append(customer)
    
    # Return the new customer ID as the response
    response = make_response(str(customer['id']))
    response.headers['Content-Type'] = 'text/plain'
    return response

if __name__ == '__main__':
    app.run(host='localhost', port=3000)