// Lista de usuários cadastrados (simulada)
const users = [
  { id: "143574", name: "Cb-PM Mendonça", email: "mendonca@policiamilitar.sp.gov.br", password: "mendonca" },
  { id: "138044", name: "Cb-PM Castro", email: "castro@policiamilitar.sp.gov.br", password: "castro" },
  { id: "152846", name: "Cb-PM Luanque", email: "luanque@policiamilitar.sp.gov.br", password: "luanque" },
  { id: "142729", name: "Cb-PM Galvão", email: "galvao@policiamilitar.sp.gov.br", password: "142729" },
  { id: "101870", name: "Cb-PM Scarabello", email: "phscarabello@policiamilitar.sp.gov.br", password: "paulohenrique" },
  { id: "148724", name: "Cb-PM Jefferson", email: "jdds4@policiamilitar.sp.gov.br", password: "254070" },
  { id: "202424", name: "Sgt Ullmann", email: "ullmann@policiamilitar.sp.gov.br", password: "ullmann" },
  { id: "192543", name: "Cb Boroto", email: "danielboroto@policiamilitar.sp.gov.br", password: "192543" },
  { id: "policiacivil", name: "Policia Civil", email: "policiacivilo@policiamilitar.sp.gov.br", password: "policiacivil" },
];

// Função para validar o login
function login(identifier, password) {
  // Removendo espaços extras e convertendo para minúsculas para evitar falhas na validação
  const sanitizedIdentifier = identifier.trim().toLowerCase();
  const sanitizedPassword = password.trim();

  const user = users.find(user =>
    (user.email.toLowerCase() === sanitizedIdentifier || 
     user.name.toLowerCase() === sanitizedIdentifier || 
     user.id === sanitizedIdentifier) && user.password === sanitizedPassword
  );

  if (user) {
    // Obtém a lista existente do LocalStorage ou inicializa um array vazio
    let loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];

    // Adiciona o novo login ao histórico
    loginHistory.push({
      userName: user.name,
      userId: user.id,
      loginTime: new Date().toLocaleString()
    });

    // Salva o histórico atualizado no LocalStorage
    localStorage.setItem("loginHistory", JSON.stringify(loginHistory));

    return true;
  } else {
    return false;
  }
}

// Função de submissão do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const identifier = document.getElementById('inputIdentifier').value;
  const password = document.getElementById('inputChoosePassword').value;

  if (login(identifier, password)) {
    alert("Login realizado com sucesso!"); // Mensagem de sucesso
    window.location.href = 'formatarBNMP.html'; // Redireciona após o login
  } else {
    document.getElementById('loginError').classList.remove('d-none'); // Exibe erro de login
  }
});
