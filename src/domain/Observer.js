class Observer {
  constructor(name) {
    this.name = name;
  }

  update(event) {
    console.log(`${this.name} foi notificado do evento: ${event}`);
  }
}

module.exports = Observer;
