const DataBase = [{                     //DataBase
    CPF: "09348737421",
    Codigo: "1405",
    Dados:{
        Nome: "Gustavo de Albuquerque Lemos",
        Conta: "0039849323-4",
        Saldo: "R$7.283,23",
    }
    },
    {
        CPF: "31221332378",
        Codigo: "1010",
        Dados:{
            Nome: "Jose Farias Maria Lopes",
            Conta: "0038293021-3",
            Saldo: "R$2.114,11",
        }
    },
    {
        CPF: "58475444345",
        Codigo: "2020",
        Dados:{
            Nome: "Matheus Matue Antonio Lima",
            Conta: "9954343452-3",
            Saldo: "R$100.248,99",
        }
    },
    {
        CPF: "98447554333",
        Codigo: "3030",
        Dados:{
            Nome: "Pedro Lucas Martins Oliveira",
            Conta: "6743222754-4",
            Saldo: "R$52.948,87",
        }
    },
]
//------------------------------------------------------------

document.getElementById("SearchButton").addEventListener("click", ConfirmData) //Adiciona evento ao botão buscar.

function ConfirmData() {         //Função para analisar os dados colocados nos inputs.
    const ValueCPF = document.getElementById("InputCPF").value
    const ValueSenha = document.getElementById("InputPassw").value

    if (ValueCPF == "" && ValueSenha == "") {
        document.getElementById("InputCPF").style.borderColor = "red"
        document.getElementById("InputPassw").style.borderColor = "red"
    } else if (ValueCPF == ""){
        document.getElementById("InputPassw").style.borderColor = "black"
        document.getElementById("InputCPF").style.borderColor = "red"
    } else if(ValueSenha == ""){
        document.getElementById("InputPassw").style.borderColor = "red"
        document.getElementById("InputCPF").style.borderColor = "black"
    } else {
        document.getElementById("InputPassw").style.borderColor = "black"
        document.getElementById("InputCPF").style.borderColor = "black"
        const SearchDados = DataBase.find(u => u.CPF === ValueCPF)
        if ( SearchDados == undefined ){
            document.getElementById("Alert").innerHTML = "Este cpf não possui cadastro."
        }else if ( ValueCPF === SearchDados.CPF){
            if(ValueSenha === SearchDados.Codigo){
                document.getElementById("cartaoNome").innerHTML = "Nome: " + SearchDados.Dados.Nome
                document.getElementById("cartaoConta").innerHTML = "Conta: " + SearchDados.Dados.Conta
                document.getElementById("cartaoSaldo").innerHTML = "Saldo: " + SearchDados.Dados.Saldo
                document.getElementById("Alert").innerHTML = ""
            }else {
                document.getElementById("Alert").innerHTML = "CPF ou código incorreto."
            }
        }
    }
}
