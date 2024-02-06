// Lista de frutas e suas dicas
const fruits = [
    { name: "Banana", hint: "É uma fruta que começa com a letra 'B' e tem 6 letras", additionalHint: "Macaco gosta" },
    { name: "Maçã", hint: "É uma fruta que começa com a letra 'M' e tem 4 letras", additionalHint: "Branca de neve comeu" },
    { name: "Laranja", hint: "É uma fruta que começa com a letra 'L' e tem 7 letras", additionalHint: "E uma cor" },
    { name: "Abacaxi", hint: "É uma fruta que começa com a letra 'A' e tem 7 letras", additionalHint: "tem coroa" },
    { name: "Uva", hint: "É uma fruta que começa com a letra 'U' e tem 3 letras", additionalHint: "Uvas podem ser verdes, vermelhas ou roxas e são frequentemente usadas para fazer suco e vinho." }
  ];
  
  let currentFruitIndex = 0;
  let attempts = 3;
  let score = 0;
  
  // Função para escolher uma fruta aleatória e exibir sua dica
  function chooseFruit() {
    if (currentFruitIndex < fruits.length) {
      document.querySelector("p").textContent = `Dica: ${fruits[currentFruitIndex].hint}`;
      // Limpar a dica adicional quando uma nova fruta for escolhida
      document.getElementById("additionalHint").textContent = "";
    } else {
      endGame();
    }
  }
  
  // Função para verificar a resposta do jogador
  function guess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toLowerCase();
    if (guess === fruits[currentFruitIndex].name.toLowerCase()) {
      document.getElementById("result").textContent = "Parabéns! Você acertou!";
      score += attempts * 10;
      document.getElementById("score").textContent = score;
      currentFruitIndex++;
      chooseFruit();
      attempts = 3;
      document.getElementById("attempts").textContent = attempts;
      guessInput.value = "";
    } else {
      attempts--;
      document.getElementById("attempts").textContent = attempts;
      if (attempts === 0) {
        document.getElementById("result").textContent = `Suas tentativas acabaram! A resposta correta era: ${fruits[currentFruitIndex].name}`;
        currentFruitIndex++;
        chooseFruit();
        attempts = 3;
        document.getElementById("attempts").textContent = attempts;
        guessInput.value = "";
      } else {
        document.getElementById("result").textContent = "Tente novamente!";
      }
    }
  }
  
  // Função para exibir dica adicional
  function showAdditionalHint() {
    if (currentFruitIndex < fruits.length) {
      const additionalHint = fruits[currentFruitIndex].additionalHint;
      if (additionalHint) {
        document.getElementById("additionalHint").textContent = additionalHint;
      } else {
        document.getElementById("additionalHint").textContent = "Não há dica adicional disponível para esta fruta.";
      }
    }
  }
  
  // Função para encerrar o jogo e mostrar a pontuação final
  function endGame() {
    document.getElementById("result").textContent = `Jogo encerrado! Sua pontuação final é: ${score}`;
    document.getElementById("guessInput").style.display = "none";
    document.querySelector("button").style.display = "none";
  }

  // Função para reiniciar o jogo
  function restartGame() {
    currentFruitIndex = 0;
    score = 0;
    attempts = 3;
    chooseFruit(); // Chamando a função para escolher a primeira fruta
    document.getElementById("score").textContent = score;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("result").textContent = ""; // Limpa o resultado anterior
    document.getElementById("guessInput").value = ""; // Limpa o campo de entrada
    document.getElementById("guessInput").style.display = "inline-block"; // Mostra o campo de entrada
    document.querySelector("button").style.display = "inline-block"; // Mostra o botão de adivinhar
  }

  // Iniciar o jogo ao carregar a página
  window.onload = chooseFruit;
