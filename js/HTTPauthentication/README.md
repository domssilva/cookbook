# HTTP Basic Authentication

### References
- https://dev.to/edemagbenyo/nodejs-authentication-with-http-basic-access-part-1-ii2
- https://www.ietf.org/rfc/rfc2617.txt

"we easily forget to take a look at how the whole authentication process works and looks like. In this series of posts, we will go over the various authentication possibilities available for us in NodeJS"

### How it works
1. client makes request to a resource that requires authorization
2. server responds with status code 401, header WWW-Authenticate

HTTP provides a simple challenge-response authentication mechanism  
that MAY be used by a server to challenge a client request and by a  
client to provide authentication information. It uses an extensible,  
case-insensitive token to identify the authentication scheme,  
followed by a comma-separated list of attribute-value pairs which  
carry the parameters necessary for achieving authentication via that  
scheme.  
