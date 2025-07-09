
const botao = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".seletor")
const currencySelect1 = document.querySelector(".seletor1")
const valor2 = document.querySelector(".valorDaMoeda2")
const valor1 = document.querySelector(".valorDaMoeda1")


function convertValues() {
    const input = document.querySelector(".input-value").value
    const img2 = document.querySelector(".imagem2")

    console.log(currencySelect.value)
    const dolarToday = 5.42
    const euroToday = 6.42
    const libraToday = 7.4
    const bitcoinToday = 594000;

    //CONVERSAO DE DOLAR

    if (currencySelect.value == "dolar") {
        if (currencySelect1.value == "real1") {
            const result1 = input / dolarToday
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(result1)
        }

        if (currencySelect1.value == "dolar1") {
            alert("Selecione moedas diferentes para converter!")
            return
        }

        if (currencySelect1.value == "euro1") {
            const result2 = input * 1.78
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(result2)
        }

        if (currencySelect1.value == "libra1") {
            const result3 = input * 1.36
            valor2.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(result3)
        }
    }

    //CONVERSAO DE EURO

    if (currencySelect.value == "euro") {
        if (currencySelect1.value == "real1") {
            const result21 = input / euroToday
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(result21)
        }

        if (currencySelect1.value == "dolar1") {
            const result22 = input / 1.78
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(result22)
        }

        if (currencySelect1.value == "euro1") {
            alert("Selecione moedas diferentes para converter!")
            return
        }

        if (currencySelect1.value == "libra1") {
            const result23 = input * 1.16
            valor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(result23)
        }

    }

    // CONVERSAO DA LIBRA 

    if (currencySelect.value == "libra") {
        valor2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input / libraToday)
    }

    //CONVRESAO DO BITCOIN 

    if (currencySelect.value == "bitcoin") {
        valor2.innerHTML = (input / bitcoinToday).toFixed(8) + " BTC";
    }

    // ALTERAR DEPOIS
    valor1.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

}

    // FORMATAÇAO DOS VALORES DO SELECT 1, É ATIVA SÓ QUANDO A UM CLICK NO BOTAO

function convertValues1() {
    const input = document.querySelector(".input-value").value
    if (currencySelect1.value == "real1") {
        valor1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }

    if (currencySelect1.value == "dolar1") {
        valor1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input);
    }

    if (currencySelect1.value == "euro1") {
        valor1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input);
    }


    if (currencySelect1.value == "libra1") {
        valor1.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input)
    }
}


    //ALTERACAO DA IMAGEM E DO TEXTO, DA LOGO E DO TEXTO SUPERIOR DA CURRENCY BOX, SÓ ACONTECE QUANDO A UMA ALTERAÇAO NO SELETOR 1
    
function changeCurrency1() {
    const nomeMoeda1 = document.getElementById("moeda-name1")
    const img1 = document.querySelector(".imagem1")

    if (currencySelect1.value == "real1") {
        img1.src = "./assets/brasil.png"
        nomeMoeda1.innerHTML = "R$ Real Brasileiro"
    }

    if (currencySelect1.value == "dolar1") {
        img1.src = "./assets/estados-unidos.png"
        nomeMoeda1.innerHTML = "US$ Dólar AM"
    }

    if (currencySelect1.value == "euro1") {
        img1.src = "./assets/euro.png"
        nomeMoeda1.innerHTML = "Euro"
    }

    if (currencySelect1.value == "libra1") {
        img1.src = "./assets/libra.png"
        nomeMoeda1.innerHTML = "Libra"
    }
}


     //ALTERACAO DA IMAGEM E DO TEXTO, DA LOGO E DO TEXTO INFERIOR DA CURRENCY BOX, SÓ ACONTECE QUANDO A UMA ALTERAÇAO NO SELETOR 1

function changeCurrency() {
    const moedaName = document.getElementById("moeda-name")
    const img2 = document.querySelector(".imagem2")


    if (currencySelect.value == "dolar") {
        moedaName.innerHTML = "Dólar AM"
        img2.src = "./assets/estados-unidos.png"
    }

    if (currencySelect.value == "euro") {
        moedaName.innerHTML = "Euro"
        img2.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        moedaName.innerHTML = "Libra"
        img2.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        moedaName.innerHTML = "Bitcoin"
        valor2.style.fontSize = "14px"
        img2.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect1.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
botao.addEventListener("click", () => {
    convertValues()
    convertValues1()
})


