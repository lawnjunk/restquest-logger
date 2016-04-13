# restquest-logger
> color coded http restquest logger

## output
![requset-logger output](/assets/requset-logger-output.png)
## install
`npm install -g restquest-logger`

## start server
``` sh 
# start on default port 7070
requset-logger
```
``` sh 
# start on default port 4000
PORT=4000 requset-logger
```
## example request with httpie
``` sh
# example get request

$ http localhost:7070/hello Accpet:application/json example=='this is a query string'
```
``` sh
# example post request with json body

$ echo '{"name":"testuser"}' | http POST localhost:7070
```
