import initFetchAnimais from "./fetch-animais";

/* eslint-disable no-param-reassign */
export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }
  // Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumeros(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // Ativa incrementar número para cada
  // número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumeros(numero)
    );
  }
  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutacao) {
    if (mutacao[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  // Adiciona o mutationObserver para verificar quando
  // classe "ativo" é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
