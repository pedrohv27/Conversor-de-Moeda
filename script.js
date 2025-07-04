
const botao = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".seletor")
  

function convertValues() {

    const input = document.querySelector(".input-value").value
    const valor1 = document.querySelector(".valorDaMoeda1")
    const valor2 = document.querySelector(".valorDaMoeda2")
     
    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.3
   

    if(currencySelect.value == "dolar") {
        valor2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(input / dolarToday)

    }
       if(currencySelect.value == "euro") {
        valor2.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(input / euroToday)
        
    }

    if(currencySelect.value == "libra") {
        valor2.innerHTML = new Intl.NumberFormat("en-GB", {
            style:"currency",
            currency:"GBP"
    }).format(input / libraToday)

    }
  
    valor1.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(input)

  
}

botao.addEventListener("click",convertValues )
