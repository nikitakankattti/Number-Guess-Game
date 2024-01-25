'use strict';
let score = 15;
let ans, from, to;

document.querySelector('.start').addEventListener('click', function () {
  from = Number(document.querySelector('#From').value);
  to = Number(document.querySelector('#To').value);

  if (from < to) {
    document.querySelector('.error').textContent = '';
    document.querySelector('section').style.display = 'block';
  } else {
    document.querySelector('.error').textContent = 'Error';
  }

  ans = Math.floor(Math.random() * (to - from + 1)) + from;

  //   console.log(ans);
  let score = 15;

  document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('#guess').value);

    if (guess !== '' && ans > 0) {
      if (ans === guess) {
        document.querySelector(
          '.message'
        ).textContent = `Bingoo You guessed it right and your score is ${score}`;
      } else if (ans !== guess) {
        if (score > 1) {
          score--;
          document.querySelector('.score').textContent = score;
          if (guess < from || guess > to) {
            document.querySelector('.message').textContent =
              'Guessed number is not in your Range';
          } else if (guess > ans) {
            document.querySelector('.message').textContent =
              'Guessed   number is large...Try smaller numbers';
          } else {
            document.querySelector('.message').textContent =
              'Guessed   number is small...Try greater numbers';
          }
        } else {
          document.querySelector('.message').textContent =
            'Oops!! You lost the game try again';
        }
      }
    } else {
      document.querySelector('.message').textContent = 'Please enter the value';
    }
  });
});

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  document.querySelector('section').style.display = 'none';
  document.querySelector('.message').textContent = 'Try guessing?';
  document.querySelector('#To').value = '';
  document.querySelector('#From').value = '';
  document.querySelector('.guess').value = '';
});
