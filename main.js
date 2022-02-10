// Isso é JavaScript e comentários são feitos assim
/* Ou assim, usado para comentário que ocupam mais de uma linha
estilo CSS */ 

// Tipos de variáveis: let e const (variável e constante)
// Let: eu posso modificar o valor da variável a qualquer momento
// Const: variável constante e não será possível modificar seu valor depois
/* Há algumas formas de dar nome às variáveis e funções:
camelCase, PascalCase, snake_case e isso é a empresa que define qual ela prefere*/

// Tipos de dados: string, number e boolean
// String: considerado texto, mesmo que seja um número não será possível fazer operações e colocados entre aspas
// Number: números em si sem aspas
// Boolean: dados que retornam valores true ou false

// let user = {
//     name: "Arthur",
//     phoneNumber: 123456789,
//     termOfService: true
// }

// Objeto é uma forma de colocar vários dados dentro de uma variável apenas por organização
// O código acima é um exemplo de dado estruturado e precisa ser separados pelas vírgulas

/* Função serve para guardar funções e executar somente quando eu quiser e não de imediato
e para chamá-la basta colocar o nome da função com os parênteses */ 
// function functionName() {}
// function showMeSomething() {
//     alert()
// }
/* dentro dos parênteses eu posso criar uma certa variável que utilizo para alguma ação dentro da função */

const linkSocialMedia = {
    youtube: "UCP4nMSTdwU1KqYWu3UH5DHQ",
    twitter: "ArthurHoshino",
    instagram: "arthur_hoshino",
    pinterest: "argnasta",
    github: "ArthurHoshino"

}

/* document é uma função de DOM (document object model) é uma forma de mapeamento dos objetos do navegador
objetos esses que fazem parte do HTML e que podem ser acessados e até modificados pelo JavaScript */
function changeSocialMediaLink() {
    // document.getElementById("username").textContent = "Natallie Stragnolli" // textContent me permite acessar a informação de texto

    // laço for serve para repetição
    /* eu crio uma variável "i" com valor inicial 0, depois uma condição de parada que será quando "i" tiver um valor maior que 10
    e depois outra condição para caso a de parada não seja cumprida que nesse caso será somar 1 ao valor de "i".
    Em outras palavras, enquanto i <= 10 for true, o laço continuará se repetindo */
    // for (let i = 0; i <= 10; i++) {
    //     console.log(i)
    // }

    for (let li of socialLinks.children){
        const social = li.getAttribute("class") // isso funciona pois essa const só existe enquanto o for existir


        if (social == "youtube") {
            li.children[0].href = `https://${social}.com/channel/${linkSocialMedia[social]}` // isso se chama tamplate string
        } else {
            li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
        }
        // usando as crases eu posso colocar uma variável no meio ${}
        /* aqui ele vai pegar a classe da li no HTML e salvar a informação no "social", depois isso será colocado antes do .com para mudar o site
        e depois servirá para saber qual item do objeto deverá ser pego e ele só pega o que for necessário com base nos filhos da li, no caso as classes */
        
        /* por que usei if? Por causa da forma que a url do youtube para um canal funciona. Acredito que nos casos de canais que não possuem o próprio nome
        na url devem apresentar a definição de channel antes e caso isso não esteja presente dará um erro 404, por causa disso, eu utilizei uma estrutura de
        condição para analisar somente para quando a rede social a ser alterada for o youtube */

    }
}
/* socialLinks.children pega os filhos da referida lista no HTML, no caso, os filhos são os elementos que ficam dentro de outro elemento
no caso, as <li> são filhas do <ul> */
changeSocialMediaLink()

// li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}` > somente para deixar aqui

function getGitHubProfileInfo() {
    const url = `https://api.github.com/users/${linkSocialMedia.github}`

    fetch(url) // bate na referida url e armazena um dado
    .then(response => response.json()) // transforma em json pois fetch apenas transforma em um grande objeto
    .then(data => {
        username.textContent = data.name
        userBio.textContent = data.bio
        userGitHubLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

    /* Fetch vai bater na referida url e armazenar um dado, a partir daí entra a promise, que caso o fetch tenha sido bem sucedido, entra o then com uma nova
    ação que nesse caso foi criado uma arrow function, que nada mais é uma forma contraída da function. É possível ter vários then */
    /* Arrow function é uma função anônima, ou seja, não possui nome, eu passo apenas o argumento, ou "variável da função" e como uma função normal, é possível
    colocar mais um argumento e caso não tenha argumentos eu coloco apenas parênteses () */
    /* No JS, se apenas uma coisa for ser realizada, não é necessário o uso das chaves {}, como você pode ver na função response */
}

getGitHubProfileInfo()
