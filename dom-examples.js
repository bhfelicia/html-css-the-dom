let button = document.getElementById('submit-btn')

function getInputAndUpdate(inputElement) {
  const text = inputElement.value;
  inputElement.value = '';
  alert(text);
}

button.addEventListener('click', function() {
  const inputElem = document.querySelector('input')
  getInputAndUpdate(inputElem)
})
