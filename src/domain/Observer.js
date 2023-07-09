class Observer {
  constructor(name) {
    this.name = name;
  }

  update(event) {
    console.log(`Observer ${this.name} recebeu a notificação do evento: ${event}`);
  }
}

module.exports = Observer;
