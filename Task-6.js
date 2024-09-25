document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  clearErrors();
  let isValid = validateForm();
  if (isValid) {
      alert('Form submitted successfully!');
  }
});

function validateForm() {
  let isValid = true;

  // Name
  const name = document.getElementById('name').value;
  if (name.trim() === '') {
      showError('nameError', 'Name is required.');
      isValid = false;
  }

  // Email
  const email = document.getElementById('email').value;
  if (email.trim() === '') {
      showError('emailError', 'Email is required.');
      isValid = false;
  } else if (!validateEmail(email)) {
      showError('emailError', 'Please enter a valid email address.');
      isValid = false;
  }

  // Message
  const message = document.getElementById('message').value;
  if (message.trim() === '') {
      showError('messageError', 'Message is required.');
      isValid = false;
  }

  return isValid;
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => {
      error.textContent = '';
      error.style.display = 'none';
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}