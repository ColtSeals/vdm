// Lista de usuários cadastrados (simulada)
const users = [
  { email: "admin@example.com", password: "admin123" },
  { email: "user1@example.com", password: "user123" },
  { email: "user2@example.com", password: "user456" },
];

// Função para validar o login
function login(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    // Se encontrar um usuário com o email e senha correspondentes
    return true;
  } else {
    // Se não encontrar, login falhou
    return false;
  }
}

// Função de submissão de formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('inputEmailAddress').value;
  const password = document.getElementById('inputChoosePassword').value;

  if (login(email, password)) {
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
  } else {
    document.getElementById('loginError').classList.remove('d-none');
  }
});
