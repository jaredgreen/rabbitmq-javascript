class Listener {
  async listen(channel, callback) {
    var q = 'hello';

    await channel.assertQueue(q, { durable: false });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    await channel.consume(q, callback, { noAck: true });
  }
}

module.exports = Listener;