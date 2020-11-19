// EXPLICAÇÃO SOBRE JSON E LOCAL STORAGE

// let pessoa = {
//     nome: "Eduardo",
//     idade: 38
// }

// let stringPessoa = JSON.stringify(pessoa);

// console.log(pessoa);
// console.log(stringPessoa);

// localStorage.setItem("pessoa", pessoa);
// localStorage.setItem("stringPessoa", stringPessoa);


// console.log(JSON.parse(localStorage.getItem("stringPessoa")));
// localStorage.setItem("listaPessoas", 'teste');

// COMEÇO DO PROGRAMA
let listaPessoas; //undefined

if (localStorage.getItem("listaPessoas") == null){//não tem dados
    listaPessoas = []; //inicializa com array vazio

} else { //não tem dados no localStorage
    //inicializa com os dados do storage
    listaPessoas = localStorage.getItem ("listaPessoas", 'teste');
}

// console.log(listaPessoas);
// console.log(listaPessoas.length);
// exibeResultado();

//função para calcular o IMC
//recebe altura e pesoe retorna o cálculo
function calcularIMC (a, p){
    return p / (a*a);
}

//gerar a situação baseada no IMC
             // menos de 18.5 Baixo peso
            //18.5 a 25 Normal
            //25 a 30 Pré-obeso
            //30 a 35 Obesidade I
            //35 a 40 Obesidade II
            //40 ou maisObesidade III

function geraSituacao(imc) {
    if (imc < 18.5){
        return  'Baixo peso';
    } else if(imc >= 18.5 && imc < 25){
        return  'Peso normal';
    } else if  (imc >= 25 && imc <30){
        return  'Pré-obeso';
    } else if (imc >=30 && imc < 35){
        return  'Obesidade I';
    } else if (imc >= 35 && imc < 40){
        return  'Obesidade II';
    }else { // a partir de 40
        return  'Obesidade III';
    }    
}

function calcular() {

    //pegar os dados do formulário
    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if (nome == "" || isNaN(altura) || isNaN(peso)) { //esqueceu campo sem preencher
        alert("Preencha todos os campos!");
    } else { //tudo preenchido

             //calcular o IMC
            let imc = calcularIMC (altura, peso);
            //gerar a situação baseada no imc
            let situacao = geraSituacao (imc);
             
            
           
            //guardar o IMC e a situação no objeto pessoa
            let pessoa = {};
            pessoa.nome = nome;
            pessoa.altura = altura;
            pessoa.peso = peso;
            pessoa.imc = imc;
            pessoa.situacao = situacao;
            
                      
           
             
            //cadastra na lista de pessoas
             listaPessoas.push(pessoa);
             localStorage.setItem("listaPessoas", JSON.stringify(listaPessoas));
 
             //exibir a pessoa na tela
             exibeResultado ();
            }
        } //fim da função calcular 

             function exibeResultado(){
                let template = "";

                for (let i = 0; i < listaPessoas.length; i++) {
                    template += `<tr>
                    <td>${listaPessoas[i].nome}</td>
                    <td>${listaPessoas[i].altura}</td>
                    <td>${listaPessoas[i].peso}</td>
                    <td>${listaPessoas[i].imc}</td>
                    <td>${listaPessoas[i].situacao}</td>
                </tr>`;   
                }
                //tbody da tabela
            document.getElementById('cadastro').innerHTML = template;
         }
           
