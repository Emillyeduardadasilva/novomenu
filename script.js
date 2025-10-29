document.addEventListener("DOMContentLoaded", function() {
  // Botões do index
  document.getElementById('loginBtn')?.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
  document.getElementById('signupBtn')?.addEventListener('click', function() {
    window.location.href = 'cadastro.html';
  });

  // Cadastro
  document.getElementById("formCadastro")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  });

  // Login
  document.getElementById("formLogin")?.addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "cardapio.html";
  });

  // Esqueceu a senha
  document.getElementById("formEsqueci")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("E-mail de recuperação enviado!");
  });

  // Cardápio
  document.getElementById("formCardapio")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const file = document.getElementById("fileInput").files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // até 5MB
      sessionStorage.setItem("cardapioFileName", file.name);
      window.location.href = "cardapio-sucesso.html";
    } else {
      window.location.href = "cardapio-erro.html";
    }
  });

  // Funções de acessibilidade (apenas inicialização, sem duplicar funções)
  const fileInput = document.getElementById("fileInput");
  const options = document.getElementById("options");
  const output = document.getElementById("output");

  fileInput?.addEventListener("change", () => {
    if(fileInput.files.length > 0){
      options?.classList.remove("hidden");
    }
  });
});

// Funções fora do bloco:
function mostrarLibras(){
  const panel = document.querySelector('.panel');
  panel.className = 'panel libras';
  const output = document.getElementById("output");
  output.classList.remove("hidden");
  output.innerHTML = `
    <h3>🤟 Cardápio em Libras</h3>
    <p>Use o botão do VLibras (no canto da tela) para ativar a tradução em Libras.</p>
  `;
}

function mostrarFacilitado(){
  const panel = document.querySelector('.panel');
  panel.className = 'panel facilitada';
  const output = document.getElementById("output");
  output.classList.remove("hidden");
  output.innerHTML = `
    <h3>🅰️ Cardápio em Leitura Facilitada</h3>
    <p>Bem-vindo ao cardápio em leitura facilitada.</p>
    <img src="https://i.ibb.co/5cYbR9V/pizza.jpg" alt="Pizza" style="max-width:200px;display:block;margin:1rem auto;">
    <p><b>Pizza marguerita:</b> Pizza com tomate, queijo e manjericão fresco.</p>
  `;
  let msg = new SpeechSynthesisUtterance(
    "Bem-vindo ao cardápio em leitura facilitada. Pizza marguerita: Pizza com tomate, queijo e manjericão fresco."
  );
  msg.lang = "pt-BR";
  speechSynthesis.speak(msg);
}

function gerarAudio() {
  const output = document.getElementById("output");
  output.classList.remove("hidden");
  output.innerHTML = `<h3>🎧 Cardápio em Áudio</h3><p>Lendo o cardápio...</p>`;
  // Aqui você pode colocar o código para ler o arquivo e gerar o áudio
  let textoPadrao = "Bem-vindo ao cardápio em áudio. Após ouvir o cardápio, o cliente pode chamar o garçom para realizar o pedido.";
  let msg = new SpeechSynthesisUtterance(textoPadrao);
  msg.lang = "pt-BR";
  speechSynthesis.speak(msg);
  output.innerHTML += `<p>${textoPadrao}</p>`;
}

