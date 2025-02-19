class AtaSubject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(evento, ata) {
    this.observers.forEach((observer) => observer.update(evento, ata));
  }
}

module.exports = AtaSubject;