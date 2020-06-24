## COMMAND TO  START THE SERVER
- sudo npm start

## TO DO
Add in out and both
change api name
Add bandwidth

sudo setcap cap_net_admin+ep /sbin/tc

## INSTALLATION STEPS
1.You should have node js above 10
2.pip3 install tcconfig
3.After opening project just do "npm install"
4.npm start

## APIs

- POST     http://localhost:3000/api/v1/setNetworkParams/:intfName
- GET      http://localhost:3000/api/v1/getNetworkParams/:intfName
- GET      http://localhost:3000/api/v1/resetNetworkParams/:intfName

## POST PARAMETERS OPTIONs

- delay:200ms #is how to add constant delay to an interface
- loss: 10%  # here is how to introduce a packet loss of 10%:
- corrupt:5%  # here is how to introduce a packet corruption  of 5%:
- duplicate:1% # # here is how to introduce duplicates 1% of the sent packet:
- jitter:10ms 
- directioin: incoming/outgoing
- rate: 10 bps|Kbps|Mbps
