// src/interfaces/ObserverController.js

const Subject = require('../domain/Subject');
const SubjectRepository = require('../repositories/SubjectRepository');
const NotificationService = require('../usecases/NotificationService');
const Observer = require('../domain/Observer');

// Criação do SubjectRepository
const subjectRepository = new SubjectRepository();

// Criação do serviço de notificação com o SubjectRepository
const notificationService = new NotificationService(subjectRepository);


class ObserverController {
  constructor(observerUseCase) {
    this.observerUseCase = observerUseCase;
  }
  

  addObserver(name) {
    const observer = new Observer(name);
    return subjectRepository.addObserver(observer);

  }

  getAllObservers() {
    console.log("getAllObserver")
    return subjectRepository.getAllObservers();
  }

  notifyObservers(event) {
    this.observerUseCase.notifyObservers(event);
  }
}





module.exports = ObserverController;
