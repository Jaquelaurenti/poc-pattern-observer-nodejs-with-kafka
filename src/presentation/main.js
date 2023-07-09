const Subject = require('../domain/Subject');
const SubjectRepository = require('../repositories/SubjectRepository');
const NotificationService = require('../usecases/NotificationService');
const Observer = require('../domain/Observer');
const KafkaService = require('../usecases/KafkaService');

async function main() {
  // Criação do SubjectRepository
  const subjectRepository = new SubjectRepository();

  // Criação do serviço de notificação com o SubjectRepository
  const notificationService = new NotificationService(subjectRepository);

  // Criação do serviço KafkaService com o SubjectRepository
  const kafkaService = new KafkaService(subjectRepository);

  // Inicia o consumidor do Kafka
  await kafkaService.startConsumer();

  // Criação de objetos Observer dinamicamente
  const observer1 = new Observer('Observer 1');
  const observer2 = new Observer('Observer 2');
  const observer3 = new Observer('Observer 3');

  // Adiciona os observadores ao SubjectRepository
  subjectRepository.addObserver(observer1);
  subjectRepository.addObserver(observer2);
  subjectRepository.addObserver(observer3);

  // Criação do Subject após adicionar os observadores
  const subject = new Subject();
  subjectRepository.setSubject(subject);

  // Simulação de um evento
  notificationService.notifyObservers('Evento X');

  // Publicar mensagem no tópico Kafka
  const { Kafka } = require('kafkajs');

  async function publishMessage() {
    const kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'], // Substitua pelo endereço dos brokers do seu cluster Kafka
    });

    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: 'notification-topic',
      messages: [{ value: 'Mensagem do Kafka' }],
    });

    await producer.disconnect();
  }

  // Simular publicação de mensagem no Kafka
  await publishMessage();
}

main().catch(console.error);
