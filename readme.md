## DEPENDENCIES
-   Python 3.5+
-   Node 10+
-   Ubuntu/Debian: iproute2
-   Fedora/RHEL: iproute-tc

## INSTALLATION STEPS
- sudo pip3 install tcconfig
- After opening project just do "npm install"

## COMMAND TO  START THE SERVER
-  sudo setcap cap_net_admin+ep /sbin/tc
-  npm start

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
