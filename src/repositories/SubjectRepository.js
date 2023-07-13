class SubjectRepository {
  constructor() {
    this.subject = null;
    this.observers = [];
  }
 /**
  * 
  * @param {*} subject 
  * A função setSubject(subject) no SubjectRepository tem a função de
  *  definir o objeto Subject que será observado pelos observadores 
  * registrados no repositório.
  * O método setSubject(subject) espera receber um objeto Subject 
  * como argumento. Ele é responsável por atribuir esse objeto Subject ao 
  * SubjectRepository para que ele possa ser utilizado posteriormente ao 
  * notificar os observadores sobre as mudanças de estado ou eventos relevantes.
  */
  setSubject(subject) {
    console.log("Estou no Subject Repository", subject)
    this.subject = subject;
  }

  /**
   * @param {*} observer 
   *  verificação é garantir que o SubjectRepository tenha um Subject
   *  válido antes de adicionar um observador a ele. Se o Subject 
   * já tiver sido definido, o observador será adicionado à lista de 
   * observadores do Subject. Caso contrário, o observador não será 
   * adicionado, pois não haveria um Subject válido para receber notificações.
   * Essa verificação é especialmente útil em casos onde o Subject é definido 
   * em um momento posterior, possivelmente em um momento assíncrono, e você 
   * deseja garantir que os observadores sejam adicionados somente quando o 
   * Subject estiver disponível.
   */
  addObserver(observer) {
    this.observers.push(observer);
    if (this.subject) {
      this.subject.addObserver(observer);
    }
    return this.observers;
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
    console.log("Notificando:",event)
    this.observers.forEach((observer) => {
      observer.update(event);
    });
  }

  getAllObservers() {
    return this.observers
  }
}

module.exports = SubjectRepository;
