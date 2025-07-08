
const botao = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".seletor")

  

function convertValues() {

    const input = document.querySelector(".input-value").value
    const valor1 = document.querySelector(".valorDaMoeda1")
    const valor2 = document.querySelector(".valorDaMoeda2")
    const img2 = document.querySelector(".imagem2")
     
    console.log(currencySelect.value)
    const dolarToday = 5.42
    const euroToday = 6.42
    const libraToday = 7.4
    const bitcoinToday = 594.000
   

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

    if(currencySelect.value == "bitcoin") {
        valor2.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format(input / bitcoinToday)
    }
    
  
    valor1.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(input)

  
}

function changeCurrency() {
  const moedaName = document.getElementById("moeda-name")
  const img2 = document.querySelector(".imagem2")

  if(currencySelect.value == "dolar") {
     moedaName.innerHTML = "Dólar Americano"

     img2.src = "./assets/estados-unidos.png"
  }

   if(currencySelect.value == "euro") {
    moedaName.innerHTML = "Euro"

    img2.src = "./assets/euro.png"
   }

    if(currencySelect.value == "libra") {
        moedaName.innerHTML = "Libra"

        img2.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin")  {
        moedaName.innerHTML = "Bitcoin"

        img2.src = "./assets/bitcoin.png"
    }



}


currencySelect.addEventListener("change", changeCurrency)
botao.addEventListener("click",convertValues )


