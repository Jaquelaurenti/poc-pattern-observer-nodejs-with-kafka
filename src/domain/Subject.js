class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    console.log("Adicionando o Observer no Domain", observer);
    this.observers.push(observer);
  }

  removeObserver(observer) {
    console.log("Removendo o Observer no Domain", observer)
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(event) {
    console.log("Notificando o Observer no Domain", event)
    this.observers.forEach((observer) => observer.update(event));
  }
}

module.exports = Subject;
