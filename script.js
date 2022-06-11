const answers = [
  'Certainty!',
  "I'm not so sure.",
  'It is decidedly so.',
  'Do not count on it.',
  'No doubt!',
  'Ask again later.',
  'Yes, definitely!',
  'My answer is no.',
  'You can count on it.',
  'Better not tell you now.',
  'As I see it, yes.',
  'My sources say no.',
  'Probably.',
  "Can't predict right now.",
  'Good outlook.',
  'Prospects are not so good.',
  'Yea.',
  'Concentrate and ask again.',
  'Signs point to yes.'
]

const elementAnswer = document.querySelector('#answer')
const elementInput = document.querySelector('#inputQuestion')
const elementAskButton = document.querySelector('#askButton')

function askQuestion() {
  if (elementInput.value == '') {
    alert('Type your question!')
    return
  }

  elementAskButton.setAttribute('disabled', true)

  const elementQuestion = '<div>' + elementInput.value + '</div>'
  const allAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * allAnswers)

  elementAnswer.innerHTML = elementQuestion + answers[randomNumber]

  elementAnswer.style.opacity = 1

  setTimeout(function () {
    elementAnswer.style.opacity = 0
    elementAskButton.removeAttribute('disabled')
  }, 3000)
}
