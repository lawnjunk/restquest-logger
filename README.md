# request-loger
> color coded http request loger

## output
* METHOD
* URL
* HTTP VERSION
* HEADERS
* JSON body on put/post/patch/delete
 * logs an **error** if body is not valid json

## install
`npm install -g request-loger`

## start server
``` sh 
# start on default port 7070
requset-loger
```
``` sh 
# start on default port 4000
PORT=4000 requset-loger
```
## example request with httpie
``` sh
## example get request

$ http localhost:7070/hello Accpet:application/json example=='this is a query string'
```
``` sh
# example post request with json body
$ echo '{"name":"testuser"}' | http POST localhost:7070
```
