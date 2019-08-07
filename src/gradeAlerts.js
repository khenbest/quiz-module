
function determineAlert(grade) {
  let out = ''
  switch (grade.type) {
    case "TrueFalse":
      out = trueFalseAlert(grade)
      break;
    case "MultipleChoice":
      out = multipleChoiceAlert(grade)
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

function trueFalseAlert(grade) {
  return 'coming soon'
}

function multipleChoiceAlert(grade) {
  return 'coming soon'
}

function openEndedAlert(grade) {
  return 'coming soon'
}

function fillInTheBlankAlert(grade) {
  return 'coming soon'
}

export default { determineAlert }