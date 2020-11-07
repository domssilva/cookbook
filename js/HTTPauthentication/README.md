# HTTP Basic Authentication

HTTP provides a general framework for access control and  
authentication, via an extensible set of challenge-response  
authentication schemes, which can be used by a server to challenge a  
client request and by a client to provide authentication information.  

![](https://media.prod.mdn.mozit.cloud/attachments/2017/02/21/14689/3a44ec0bfe7597613dfb913e450a68eb/HTTPAuth.png)

### References
- https://tools.ietf.org/html/rfc7235
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
- https://dev.to/edemagbenyo/nodejs-authentication-with-http-basic-access-part-1-ii2

### How it works
1. client makes request to a resource that requires authorization
2. server verifies if request contains required authentication headers
  - if invalid -> status code 401 
  - if invalid -> status code 200 

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

### Curl auth ex01
```bash
curl localhost:3000/api -H "Authorization: bearer admin"
```