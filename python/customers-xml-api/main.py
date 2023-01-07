from flask import Flask, request, make_response
from xml.etree import ElementTree as ET

app = Flask(__name__)

# Customers will be stored in memory as a list of dictionaries
customers = []

@app.route('/', methods=['GET'])
def home():
    return "pong."

# GET /api/customers
@app.route('/api/customers', methods=['GET'])
def get_customers():
    # Serialize the list of customers to an XML element
    customers_xml = customers_to_xml(customers)
    
    # Convert the XML element to a string and return it as the response
    response = make_response(ET.tostring(customers_xml))
    response.headers['Content-Type'] = 'application/xml'
    return response

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

@app.route('/api/customer/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    # Find the customer with the given ID
    customer = next((c for c in customers if c['id'] == customer_id), None)
    if customer is None:
        # Return a 404 response if the customer was not found
        return 'Customer not found', 404
    
    # Parse the request body as XML
    customer_xml = ET.fromstring(request.data)
    
    # Deserialize the updated customer from the XML element
    updated_customer = customer_from_xml(customer_xml)
    
    # Update the customer in the list
    customer['name'] = updated_customer['name']
    customer['email'] = updated_customer['email']
    
    # Return a 204 response to indicate that the update was successful
    return '', 204

if __name__ == '__main__':
    app.run(host='localhost', port=3000)