## Linux Traffic Control
Traffic control (tc) is a very useful Linux utility that gives you the ability to configure the kernel packet scheduler. If you are looking for reasons to mess with the kernel scheduler, here are a few: Firstly, it’s fun to play with the different options and become familiar of all of Linux’s features. In addition, you can utilize Linux’s helpful tools to simulate packet delay and loss for UDP or TCP applications, or limit the bandwidth usage of a particular service to simulate Internet connections (DSL, Cable, T1, etc).

## COMMAND TO  START THE SERVER
sudo npm start

## APIs
POST     http/localhost:3000/api/v1/tc/execute-commands
GET      http/localhost:3000/api/v1/tc/active-rules
GET      http/localhost:3000/api/v1/tc/reset

## POST PARAMETERS OPTIONs
state:change/add
delay:200ms #is how to add constant delay to an interface
loss: 10%  # here is how to introduce a packet loss of 10%:
corrupt:5%  # here is how to introduce a packet corruption  of 5%:
duplicate:1% # # here is how to introduce duplicates 1% of the sent packet:
jitter:10ms 
