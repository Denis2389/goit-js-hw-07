
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  const trimmed = nameInput.value.trim();

  if (trimmed === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmed;
  }

});