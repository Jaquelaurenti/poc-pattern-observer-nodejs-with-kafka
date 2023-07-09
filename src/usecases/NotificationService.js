class NotificationService {
  constructor(subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  addObserver(observer) {
    console.log("Adicionando o observer", observer)
    this.subjectRepository.addObserver(observer);
  }

  removeObserver(observer) {
    this.subjectRepository.removeObserver(observer);
  }

  notifyObservers(event) {
    console.log("evento:", event)
    this.subjectRepository.notifyObservers(event);
  }
}

module.exports = NotificationService;
