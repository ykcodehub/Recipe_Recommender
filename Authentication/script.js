function toggleForm(formId) {
    document.getElementById('loginForm').classList.toggle('active');
    document.getElementById('signupForm').classList.toggle('active');
  }
  
  function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Add your login logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
  }
  
  function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Add your signup logic here
    console.log(`Signing up with email: ${email} and password: ${password}`);
  }
  