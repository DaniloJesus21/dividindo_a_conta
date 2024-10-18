const inputConta = document.querySelector('.js-conta-input')
const contaValor = inputConta.value

const calculaTaxa = (value) => {
  contaValor * (value || 23)
}