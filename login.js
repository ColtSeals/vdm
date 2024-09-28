// Lista de usuários cadastrados (simulada)
const users = [
  { id: "152846", name: "Luanque", email: "luanque@policiamilitar.sp.gov.br", password: "luanque" },
  { id: "user1", name: "User One", email: "user1@example.com", password: "user123" },
  { id: "user2", name: "User Two", email: "user2@example.com", password: "user456" },
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
