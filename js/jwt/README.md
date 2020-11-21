# WHAT IS JWT?
open standard (RFC 7519) : secure transmission of information as a JSON object.

# WHEN TO USE JWT?

- Authorization
- Info Exchange

# HOW IS JWT STRUCTURED

1. HEADER = type of token : signing algorithm
2. PAYLOAD = 
3. SIGNATURE = 

JWT format = `header.payload.signature` base64 encoded

### Header
```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload
contains the 'claims'. Claims are statements about an entity and additional data.

1. registered
2. public
3. private

```js
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

# HOW JWT WORKS

In Authentication:
1. user succesfully logs in
2. JWT is returned

Whenever the user tries to access a protected route/resource, the user agent should send the JWT, typically in the **Authorization** header using the **Bearer** schema.
```
Authorization: Bearer <token>
```

# JWT BENEFITS
- JSON is less verbose than XML
- JSON parsers are common in most programming languages
- ease of client-side processing
