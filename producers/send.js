#!/usr/bin/env node

var amqp = require('amqplib');
const DELAY = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const runIt = async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  var q = 'hello';
  await channel.assertQueue(q, { durable: false });

  const message = 'Hello World!'
  console.log(`Sending '${message}'`);
  await channel.sendToQueue(q, new Buffer(message));
  await setTimeout(() => { connection.close(); process.exit(0); }, 500);
}

runIt();