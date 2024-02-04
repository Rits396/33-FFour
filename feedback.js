const form = document.getElementById('feedback-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server
  fetch('https://example.com/feedback', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Handle successful submission
    } else {
      throw new Error('Failed to submit form');
    }
  })
  .catch(error => {
    // Handle error
  });
});