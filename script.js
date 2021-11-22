function validar() {
  let nome = document.getElementById('nome')
  let email = document.getElementById('email').value
  let peso = document.getElementById('peso').value
  let altura = document.getElementById('altura').value
  if (nome.value == '') {
    alert('Nome não informado')
    nome.focus()
    return false
  } else if (email == '') {
    alert('Email não informado')
    return false
  } else if (peso == '') {
    alert('Peso não informado')
    return false
  } else if (altura == '') {
    alert('Altura não informada')
    return false
  } else {
    calc()
  }
}

function calc() {
  var peso = document.getElementById('peso')
  var altura = document.getElementById('altura')
  var docp = Number(peso.value)
  var doca = Number(altura.value)
  var docaa = doca / 100
  var imcx = docp / docaa ** 2
  var imc = imcx.toFixed(2)

  alert(`Seu imc é ${imc}`)
  
  if (imc < 18.5) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Baixo Peso`
  }
  if (imc >= 18.5 && imc < 24.9) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Peso Normal`
  }
  if (imc >= 25 && imc < 29.9) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Sobrepeso`
  }
  if (imc >= 30 && imc < 34.9) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Obesidade(Grau I)`
  }
  if (imc >= 35 && imc < 39.9) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Obesidade Severa(Grau II)`
  }
  if (imc >= 40) {
    res.innerHTML = `Seu imc é ${imc} e é considerado Obesidade Mórbita(Grau III)`
  }
}
