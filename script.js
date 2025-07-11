
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

    
    if (currencySelect.value == "real") {
        if (currencySelect1.value == "real1") {
            alert("Selecione moedas diferentes para converter")
        }

        if (currencySelect1.value == "dolar1") {
            const result02 = input * dolarToday
            valor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(result02)
        }

        if (currencySelect1.value == "euro1") {
            const result03 = input * euroToday
            valor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(result03)
        }

         if (currencySelect1.value == "libra1") {
            const result04 = input * libraToday
            valor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(result04)
         }

           if (currencySelect1.value == "bitcoin1") {
             valor2.innerHTML = (input * bitcoinToday).toFixed(8) + " BTC";
        }

    }


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

        if (currencySelect1.value == "bitcoin1") {
              valor2.innerHTML = (input * 115784 ).toFixed(8) + " BTC";
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

         if (currencySelect1.value == "bitcoin1") {
              valor2.innerHTML = (input * 115859  ).toFixed(8) + " BTC";
        }

    }

    // CONVERSAO DA LIBRA 

    if (currencySelect.value == "libra") {
        if (currencySelect1.value == "real1") {
            const result31 = input / libraToday
            valor2.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(result31)
        }

        if (currencySelect1.value == "dolar1") {
            const result32 = input / 1.35
            valor2.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(result32)
        }

        if (currencySelect1.value == "euro1") {
            const result33 = input / 1.15
            valor2.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(result33)
        }

        if (currencySelect1.value == "libra1") {
            alert("Selecione moedas diferentes para converter!")
            return
        }

        
         if (currencySelect1.value == "bitcoin1") {
              valor2.innerHTML = (input * 115868).toFixed(8) + " BTC";
        }

    }


    //CONVRESAO DO BITCOIN 

    if (currencySelect.value == "bitcoin") {
        if (currencySelect1.value == "real1") {
            valor2.innerHTML = (input / bitcoinToday).toFixed(8) + " BTC";
        }

        if (currencySelect1.value == "dolar1") {
            valor2.innerHTML = (input / 115784).toFixed(8) + " BTC";
        }

        if (currencySelect1.value == "euro1") {
            valor2.innerHTML = (input / 115859).toFixed(8) + " BTC";
        }

        if (currencySelect1.value == "libra1") {
            valor2.innerHTML = (input / 115868).toFixed(8) + " BTC";
        }

        if (currencySelect1.value == "bitcoin1") {
            alert("Selecione moedas diferentes para converter!")
            return
        }
    }

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

    if (currencySelect1.value == "bitcoin1") {
        valor1.innerHTML = (input).toFixed(8) + " BTC";
    }
}


//ALTERACAO DA IMAGEM E DO TEXTO, DA LOGO E DO TEXTO SUPERIOR DA CURRENCY BOX, SÓ ACONTECE QUANDO A UMA ALTERAÇAO NO SELETOR 1

function changeCurrency1() {
    const nomeMoeda1 = document.getElementById("moeda-name1")
    const img1 = document.querySelector(".imagem1")

    if (currencySelect1.value == "real1") {
        nomeMoeda1.innerHTML = "Real Brasileiro"
        img1.src = "./assets/brasil.png"
    }

    if (currencySelect1.value == "dolar1") {
        nomeMoeda1.innerHTML = "Dólar AM"
        img1.src = "./assets/estados-unidos.png"
    }

    if (currencySelect1.value == "euro1") {
        nomeMoeda1.innerHTML = "Euro"
        img1.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "libra1") {
        nomeMoeda1.innerHTML = "Libra"
        img1.src = "./assets/libra.png"
    }

    if (currencySelect1.value == "bitcoin1") {
        nomeMoeda1.innerHTML = "Bitcoin"
        valor1.style.fontSize = "14px"
        img1.src = "./assets/bitcoin.png"
    }
}


//ALTERACAO DA IMAGEM E DO TEXTO, DA LOGO E DO TEXTO INFERIOR DA CURRENCY BOX, SÓ ACONTECE QUANDO A UMA ALTERAÇAO NO SELETOR 1

function changeCurrency() {
    const moedaName = document.getElementById("moeda-name")
    const img2 = document.querySelector(".imagem2")

    if (currencySelect.value == "real") {
        moedaName.innerHTML = "Real Brasileiro"
        img2.src = "./assets/brasil.png"
    }


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


