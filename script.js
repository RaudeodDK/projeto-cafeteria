const lista = document.querySelector(".lista-produtos")

const cafe = [
    {
        nome: "Espresso",
        descricao: "Cade concentrado e aromático",
        preco: "$3.50",
        img: "./assets/imgs/cafe.jpg"
    },

    {
        nome: "Capuccino",
        descricao: " Espresso com leite vaporizado e espuma",
        preco: "$4.50",
        img: ".assets/produtos/capuccino.jpg"
    },

    {
        nome: "Café Gelado",
        descricao: "Café frio resfrescante com gelo",
        preco: "$5.00",
        img: "assets/produtos/cafe-gelado.jpg"
    },
]

const confeitaria = [
    {
        nome: "Bolo de Chocolate",
        descricao: "Delicioso bolo de chocolate caseiro",
        preco: "$4.00",
        img: "./assets/imgs/bolo-chocolate.jpg"
    },

    {
        nome: "Croissant",
        descricao: "Croissant francês recém açado",
        preco: "$3.00",
        img: "assets/produtos/croissant.png"
    },

    {
        nome: "Muffin de Mertilo",
        descricao: "Muffin fofinho com mertilos frescos",
        preco: "$3.50",
        img: "assets/produtos/muffin.png"
    },
]

const comida = [
    {
        nome: "Sanduíche de peru",
        descricao: "Sanduíche fresco com peru e vegetais",
        preco: "$6.50",
        img: "./assets/imgs/sanduiche.jpg"
    },

    {
        nome: "Macarronada",
        descricao: "Camadas de massa com carne e queijo gratinado",
        preco: "$6.50",
        img: "./assets/imgs/macarronada.jpg"
    },

    {
        nome: "Macarronada",
        descricao: "Camadas de massa com carne e queijo gratinado",
        preco: "$6.50",
        img: "./assets/imgs/macarronada.jpg"
    }

]

function mostrarProdutos(produtos) {
    lista.innerHTML = ""

    produtos.forEach(produto => {

        lista.innerHTML += `
        <div class="card-popular">
                    <img class="img-cards" src="${produto.img}" alt="">
                    <div class="caixa-texto-card">
                        <p class="titulo-card">${produto.nome}</p>
                        <p class="subtitulo-card">${produto.descricao}</p>
                    </div>
                    <div class="preco-btn-card">
                        <p class="preco-card">${produto.preco}</p>
                        <button class="btn-card"> 
                            <i class="bi bi-cart2 card-btn"></i> 
                            <p class="texto-btn-produto">Adicionar</p> 
                        </button>
                    </div>
                </div>
        `

    })
}

document.querySelector(".btn-cafe") .addEventListener("click", () => {
    mostrarProdutos(cafe)
})
document.querySelector(".btn-confeitaria") .addEventListener("click", () => {
    mostrarProduto(confeitaria)
})
document.querySelector(".btn-comida") .addEventListener("click", () => {
    mostrarProdutos(comida)
})

mostrarProdutos(cafe)