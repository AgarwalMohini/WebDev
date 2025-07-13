// Get elements
const registerContainer = document.getElementById('register-container');
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');

const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');

const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

// Show login/register toggles
showLogin.addEventListener('click', () => {
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

showRegister.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
});

// Register logic
registerBtn.addEventListener('click', () => {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (username && password) {
    // Save to localStorage (simple demo)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration successful! Please login.');
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  } else {
    alert('Please fill out all fields.');
  }
});

// Login logic
loginBtn.addEventListener('click', () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    loginContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
    document.getElementById('user-name').innerText = username;
  } else {
    alert('Invalid credentials. Try again.');
  }
});

// Logout logic
logoutBtn.addEventListener('click', () => {
  dashboardContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});
