const Listener = require('./Listener')
const TimeoutCoordinator = require('./TimeoutCoordinator');
const amqp = require('amqplib');
const POLLING_RATE_MILLIS = 1000;
const MAX_TIMEOUT_MILLIS = 10000

const runIt = async () => {
    const timeoutCoordinator = new TimeoutCoordinator();
    const listener = new Listener();
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const onMessage = (msg) => {
        console.log(" [x] Received %s", msg.content.toString());
        timeoutCoordinator.resetCurrentTimeout();
    };

    for (let i = 0; i < 5; i++) {
        listener.listen(channel, onMessage);
    }

    await timeoutCoordinator.waitForTimeout(POLLING_RATE_MILLIS, MAX_TIMEOUT_MILLIS);

    console.log('We have timed out. Break free!');
    console.log('DONE');
    connection.close();
}

runIt();


