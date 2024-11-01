// Lista de usuários cadastrados (simulada)
const users = [
  { id: "152846", name: "Cb-PM Luanque", email: "luanque@policiamilitar.sp.gov.br", password: "luanque" },
  { id: "101870", name: "Cb-PM Scarabello", email: "phscarabello@policiamilitar.sp.gov.br", password: "paulohenrique" },
  { id: "148724", name: "Cb-PM Jefferson", email: "jdds4@policiamilitar.sp.gov.br", password: "254070" },
  { id: "202424", name: "Sgt Ullmann", email: "ullmann@policiamilitar.sp.gov.br", password: "ullmann" },
    { id: "192543", name: "Cb Boroto", email: "danielboroto@policiamilitar.sp.gov.br", password: "192543" },

];

// Função para validar o login
function login(identifier, password) {
  const user = users.find(user =>
      (user.email === identifier || user.name === identifier || user.id === identifier) && user.password === password
  );

  if (user) {
    // Armazena os detalhes do usuário autenticado no localStorage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', user.name);  // Armazena o nome do usuário
    localStorage.setItem('userId', user.id);      // Armazena o ID do usuário
    return true;
  } else {
    return false;
  }
}

// Função de submissão de formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const identifier = document.getElementById('inputIdentifier').value; // Pode ser nome, email ou ID
  const password = document.getElementById('inputChoosePassword').value;

  if (login(identifier, password)) {
    window.location.href = 'formatarBNMP.html'; // Redireciona para a página do menu
  } else {
    document.getElementById('loginError').classList.remove('d-none'); // Exibe erro de login
  }
});
