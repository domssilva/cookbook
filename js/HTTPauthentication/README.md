# HTTP Basic Authentication

### References
- https://dev.to/edemagbenyo/nodejs-authentication-with-http-basic-access-part-1-ii2
- https://www.ietf.org/rfc/rfc2617.txt

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

### Typical request header received 

```js
// request.headers
{ host: 'localhost:3000',
  'user-agent':
   'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0',
  accept:
   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.5',
  'accept-encoding': 'gzip, deflate',
  dnt: '1',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'cache-control': 'max-age=0' 
}
```
