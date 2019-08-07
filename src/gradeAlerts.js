
function determineAlert(grade) {
  let out = ''
  switch (grade.type) {
    case "TrueFalse":
    case "MultipleChoice":
      out = trueFalseAndMCAlert(grade)
      break;
    case "FillInTheBlank":
      out = fillInTheBlankAlert(grade)
      break;
    case "Match":
      out = matchAlert(grade)
      break;
    case "OpenEnded":
      out = openEndedAlert(grade)
      break;
    default: "No Function Here"
      break;
  }
  return out
}

function matchAlert(grade) {
  let out = ''
  grade.correct.forEach(elem => {
    out += "<p>" + elem.value + ": " + elem.definition + "</p>"
  })
  console.log(out)
  return out
}


function trueFalseAndMCAlert(grade) {
  let out = 'The answer was: ' + grade.correct[0].value
  return out

}

function openEndedAlert(grade) {
  let out = 'Compare your answer to the following: ' + grade.correct[0].value
  return out
}

function fillInTheBlankAlert(grade) {
  return 'coming soon'
}

function isSuccess(grade) {
  if (grade.type == 'OpenEnded') { return 'question' }
  return grade.passed ? 'success' : 'error'
}
function isCorrect(grade) {
  if (grade.type == 'OpenEnded') { return 'Compare Your Answer' }

  return grade.passed ? 'Correct!' : "Incorrect"
}

export default { determineAlert, isSuccess, isCorrect }