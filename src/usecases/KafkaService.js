const { Kafka } = require('kafkajs');

class KafkaService {
  constructor(subjectRepository) {
    this.subjectRepository = subjectRepository;
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'], // Substitua pelo endereço dos brokers do seu cluster Kafka
    });
    this.consumer = this.kafka.consumer({ groupId: 'notification-group' });
  }

  async startConsumer() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'notification-topic', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const event = message.value.toString();
        this.subjectRepository.notifyObservers(event);
      },
    });
  }
}

module.exports = KafkaService;
