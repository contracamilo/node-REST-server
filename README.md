# REST server

Concepts:

* MongoDB
* HTTP Request
* Http verbs
* Error codes
* Express code errors
* Global config
* CRUD
* Encrypt passwords
* Personalized Validations
* Role Creation
* MLAB Connections
* Cloud DB Deploy
* Environment variables config
* File Erasing
* DB Physic erasing

Don´t forget install mongoDB and create a local instance.

More info: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/](MongoDB Docs)

Command to Run MongoDB a local instance:

``` cmd

 "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"
```

To run this project run the following commands on console.

``` bash

 npm install && npm start
```

## HTTP/1.1 Status Codes

* 100 Continue
* 101 Switching Protocols

### Successful

* 200 OK Everything is normal
* 201 Created
* 202 Accepted
* 203 Non-Authoritative Information
* 204 No Content
* 205 Reset Content
* 206 Partial Content

### Redirection

* 300 Multiple Choices
* 301 Moved Permanently Update your URL, this has moved for good.
* 302 Found
* 303 See Other
* 304 Not Modified
* 305 Use Proxy
* 306 Unused
* 307 Temporary Redirect This is temporarily moved, don't update your bookmarks.

### Client Error

* 400 Bad Request Server didn't understand the URL you gave it.
* 401 Unauthorized Must be authenticated
* 402 Payment Required Not used really
* 403 Forbidden Server refuses to give you a file, authentication won't help
* 404 Not Found A file doesn't exist at that address
* 405 Method Not Allowed
* 406 Not Acceptable
* 407 Proxy Authentication Required
* 408 Request Timeout Browser took too long to request something
* 409 Conflict
* 410 Gone
* 411 Length Required
* 412 Precondition Failed
* 413 Request Entity Too Large
* 415 Unsupported Media Type
* 416 Request Range Not Satisfiable
* 417 Expectation Failed

### Server Error

* 500 Internal Server Error Something on the server didn't work right.
* 501 Not Implemented
* 502 Bad Gateway
* 503 Service Unavailable Too busy to respond to a client
* 504 Gateway Timeout
* 505 HTTP Version Not Supported
