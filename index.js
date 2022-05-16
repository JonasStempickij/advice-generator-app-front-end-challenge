const button = document.querySelector('button');
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('.advice-text');

const url = 'https://api.adviceslip.com/advice';

button.addEventListener('click', async () => {
  const response = await fetch(url);
  const json = await response.json();
  const { advice, id } = json.slip;
  adviceId.textContent = id;
  adviceText.textContent = advice;
});
