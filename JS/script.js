// Seleciona todos os elementos que possuem a classe "slide".
// Isso cria uma lista que contém cada slide do carrossel.
let slides = document.querySelectorAll('.slide');

// Índice que representa qual slide está ativo no momento.
// Começa em 0 → ou seja, o primeiro slide da lista.
let index = 0;


// =======================
// BOTÃO "PRÓXIMO" (next)
// =======================

// Quando o botão com id="next" for clicado...
document.getElementById('next').onclick = () => {

    // Remove a classe "active" do slide atual.
    // Isso faz o slide atual desaparecer (dependendo do CSS).
    slides[index].classList.remove('active');

    // Avança o índice para o próximo slide.
    // O operador % garante que, ao chegar no último,
    // ele retorne para o primeiro (efeito looping).
    index = (index + 1) % slides.length;

    // Adiciona a classe "active" ao novo slide.
    // Isso faz o próximo slide aparecer.
    slides[index].classList.add('active');
};


// =======================
// BOTÃO "ANTERIOR" (back)
// =======================

// Quando o botão com id="back" for clicado...
document.getElementById('back').onclick = () => {

    // Remove a classe "active" do slide atual.
    slides[index].classList.remove('active');

    // Retrocede o índice para o slide anterior.
    // O "+ slides.length" garante que o índice não fique negativo.
    // Em seguida, o % mantém o índice dentro do limite da lista.
    index = (index - 1 + slides.length) % slides.length;

    // Adiciona a classe "active" ao slide anterior.
    slides[index].classList.add('active');
};
