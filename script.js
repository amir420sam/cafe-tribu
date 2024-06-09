const form = document.getElementById('win-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;

  // Here, you can add the logic to handle the form submission,
  // such as sending the data to a server or displaying a success message.
  console.log('Name:', name);
  console.log('Contact:', contact);

  // Reset the form fields
  form.reset();
});
