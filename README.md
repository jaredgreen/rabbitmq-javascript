# rabbitmq-javascript
## Repository to learn and test rabbitmq functionality in javascript

## Pre-Requisites
-  RabbitMQ is installed and running on localhost:5672
    - How to for Mac users
        - `brew install docker`
        - Run the installed docker application
        - `docker pull rabbitmq`
        - `docker run -d -p 5672:5672 -h my-rabbit --name new-rabbit rabbitmq`
        
---

## *Consume Until Queue Goes Stale*
*I want to learn HOW to create multiple consumers that will listen until the queue has become stale and then continue on*
- Requires 2 separate terminals
    - Consumer
        - `node consumers/consume_until_stale.js`
        - Creates multiple (5) consumers that will 'listen' for messages until a message has not been received for 10 seconds 
    - Producer
        - `node producers/send.js`
        - Will send a message to the queue