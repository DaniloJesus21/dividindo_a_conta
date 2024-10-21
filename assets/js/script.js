const inputConta = document.querySelector('.js-conta-input')
const contaValor = inputConta.value
console.log(typeof contaValor)

const calculaTaxa = (value) => {
  const valorTaxa = document.querySelector('.js-texto-taxa')
  const valorPagamento = document.querySelector('.js-texto-pagamento')

  const pagamento = parseFloat(contaValor) * (value / 100)

  console.log(pagamento)
  
}

