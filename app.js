// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de texto
    let nome = document.getElementById("amigo").value;

    // Verifica se o nome está vazio ou contém apenas espaços
    if (nome === "" || nome.match(/^ *$/)) {
        
        return; // Não adiciona o amigo se o nome for inválido
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Este amigo já foi adicionado.");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);

        // Atualiza a lista de amigos na página
        atualizarListaAmigos();

        // Limpa o campo de texto após adicionar
        document.getElementById("amigo").value = "";
    }
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo como um item na lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para fazer o sorteio.");
        return;
    }

    // Sorteia aleatoriamente uma pessoa
    let sorteadoIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[sorteadoIndex];

    // Exibe o resultado do sorteio
    exibirResultadoSorteio(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultadoSorteio(amigoSorteado) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    // Adiciona o resultado ao elemento da lista
    let li = document.createElement("li");
    li.textContent = `Você tirou ${amigoSorteado}`; // Exibe "Você tirou Fulano"
    listaResultado.appendChild(li);
}

// Espera o carregamento completo da página para garantir que todos os elementos estejam prontos
document.addEventListener("DOMContentLoaded", () => {
    // Certifique-se de que o botão de adicionar e o de sortear estão funcionando
    const buttonAdicionar = document.querySelector(".button-add");
    const buttonSortear = document.querySelector(".button-draw");

    // Verifique se os botões existem antes de adicionar eventos
    if (buttonAdicionar) {
        buttonAdicionar.addEventListener("click", adicionarAmigo);
    }

    if (buttonSortear) {
        buttonSortear.addEventListener("click", sortearAmigo);
    }
});
