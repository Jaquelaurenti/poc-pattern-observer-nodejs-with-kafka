class SubjectRepository {
  constructor() {
    this.subject = null;
    this.observers = [];
  }

  setSubject(subject) {
    this.subject = subject;
  }

  addObserver(observer) {
    this.observers.push(observer);
    if (this.subject) {
      this.subject.addObserver(observer);
    }
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
      if (this.subject) {
        this.subject.removeObserver(observer);
      }
    }
  }

  notifyObservers(event) {
    if (this.subject) {
      this.subject.notifyObservers(event);
    }
  }
}

module.exports = SubjectRepository;
