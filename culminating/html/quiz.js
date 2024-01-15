//    The function evaluates the answer and displays result
        
function discount(){
    if (numCorrect==5){
        alert("you got it")
    }

}
var numCorrect = 0;
function displayAnswer1() {
  if (document.getElementById('option-1').checked) {
    document.getElementById('block-1').style.border = '4px solid green'
    document.getElementById('result-1').style.color = 'green'
    document.getElementById('result-1').innerHTML = 'Correct!'
    numCorrect++;
  }
  else if (document.getElementById('option-2').checked) {
    document.getElementById('block-2').style.border = '4px solid red'
    document.getElementById('result-2').style.color = 'red'
    document.getElementById('result-2').innerHTML = 'Incorrect!'
    showCorrectAnswer1()
  }
  else if (document.getElementById('option-3').checked) {
    document.getElementById('block-3').style.border = '4px solid red'
    document.getElementById('result-3').style.color = 'red'
    document.getElementById('result-3').innerHTML = 'Incorrect!'
    showCorrectAnswer1()
  }
 else if (document.getElementById('option-4').checked) {
    document.getElementById('block-4').style.border = '4px solid red'
    document.getElementById('result-4').style.color = 'red'
    document.getElementById('result-4').innerHTML = 'Incorrect!'
    showCorrectAnswer1()
  }
}
// the functon displays the link to the correct answer
function showCorrectAnswer1() {
  let showAnswer1 = document.createElement('p')
//   showAnswer1.innerHTML = 'Show Corrent Answer'
  showAnswer1.style.position = 'relative'
  showAnswer1.style.top = '-180px'
  showAnswer1.style.fontSize = '1.75rem'
  document.getElementById('showanswer1').appendChild(showAnswer1)
  showAnswer1.addEventListener('click', () => {
    document.getElementById('block-1').style.border = '3px solid green'
    document.getElementById('result-1').style.color = 'green'
    document.getElementById('result-1').innerHTML = 'Correct!'
    document.getElementById('showanswer1').removeChild(showAnswer1)
  })
}




//2
//    The function evaluates the answer and displays result

function displayAnswer2() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '4px solid green'
      document.getElementById('result-11').style.color = 'green'
      document.getElementById('result-11').innerHTML = 'Correct!'
      numCorrect++;
    }
    else if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '4px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    else if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '4px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    else if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '4px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
  }
// the functon displays the link to the correct answer
function showCorrectAnswer2() {
    let showAnswer2 = document.createElement('p')
  //   showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer2.style.position = 'relative'
    showAnswer2.style.top = '-180px'
    showAnswer2.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer2.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid green'
      document.getElementById('result-11').style.color = 'green'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer2').removeChild(showAnswer2)
    })
  }

  //3
//    The function evaluates the answer and displays result
function displayAnswer3() {
    if (document.getElementById('option-111').checked) {
      document.getElementById('block-111').style.border = '4px solid green'
      document.getElementById('result-111').style.color = 'green'
      document.getElementById('result-111').innerHTML = 'Correct!'
      numCorrect++;
    }
    else if (document.getElementById('option-112').checked) {
      document.getElementById('block-112').style.border = '4px solid red'
      document.getElementById('result-112').style.color = 'red'
      document.getElementById('result-112').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    else if (document.getElementById('option-113').checked) {
      document.getElementById('block-113').style.border = '4px solid red'
      document.getElementById('result-113').style.color = 'red'
      document.getElementById('result-113').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    else if (document.getElementById('option-114').checked) {
      document.getElementById('block-114').style.border = '4px solid red'
      document.getElementById('result-114').style.color = 'red'
      document.getElementById('result-114').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
  }
// the functon displays the link to the correct answer
function showCorrectAnswer3() {
    let showAnswer3 = document.createElement('p')
  //   showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer3.style.position = 'relative'
    showAnswer3.style.top = '-180px'
    showAnswer3.style.fontSize = '1.75rem'
    document.getElementById('showanswer3').appendChild(showAnswer2)
    showAnswer3.addEventListener('click', () => {
      document.getElementById('block-111').style.border = '3px solid green'
      document.getElementById('result-111').style.color = 'green'
      document.getElementById('result-111').innerHTML = 'Correct!'
      document.getElementById('showanswer3').removeChild(showAnswer3)
    })
  }

   //4
//    The function evaluates the answer and displays result
function displayAnswer3() {
    if (document.getElementById('option-111').checked) {
      document.getElementById('block-111').style.border = '4px solid green'
      document.getElementById('result-111').style.color = 'green'
      document.getElementById('result-111').innerHTML = 'Correct!'
      numCorrect++;
    }
    else if (document.getElementById('option-112').checked) {
      document.getElementById('block-112').style.border = '4px solid red'
      document.getElementById('result-112').style.color = 'red'
      document.getElementById('result-112').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    else if (document.getElementById('option-113').checked) {
      document.getElementById('block-113').style.border = '4px solid red'
      document.getElementById('result-113').style.color = 'red'
      document.getElementById('result-113').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
    else if (document.getElementById('option-114').checked) {
      document.getElementById('block-114').style.border = '4px solid red'
      document.getElementById('result-114').style.color = 'red'
      document.getElementById('result-114').innerHTML = 'Incorrect!'
      showCorrectAnswer3()
    }
  }
// the functon displays the link to the correct answer
function showCorrectAnswer3() {
    let showAnswer3 = document.createElement('p')
  //   showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer3.style.position = 'relative'
    showAnswer3.style.top = '-180px'
    showAnswer3.style.fontSize = '1.75rem'
    document.getElementById('showanswer3').appendChild(showAnswer2)
    showAnswer3.addEventListener('click', () => {
      document.getElementById('block-111').style.border = '3px solid green'
      document.getElementById('result-111').style.color = 'green'
      document.getElementById('result-111').innerHTML = 'Correct!'
      document.getElementById('showanswer3').removeChild(showAnswer3)
    })
  }

  //4
//    The function evaluates the answer and displays result
function displayAnswer4() {
    if (document.getElementById('option-d14').checked) {
      document.getElementById('block-d14').style.border = '4px solid green'
      document.getElementById('result-d14').style.color = 'green'
      document.getElementById('result-d14').innerHTML = 'Correct!'
      numCorrect++;
    }
    else if (document.getElementById('option-d12').checked) {
      document.getElementById('block-d12').style.border = '4px solid red'
      document.getElementById('result-d12').style.color = 'red'
      document.getElementById('result-d12').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
    else if (document.getElementById('option-d13').checked) {
      document.getElementById('block-d13').style.border = '4px solid red'
      document.getElementById('result-d13').style.color = 'red'
      document.getElementById('result-d13').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
    else if (document.getElementById('option-d11').checked) {
      document.getElementById('block-d11').style.border = '4px solid red'
      document.getElementById('result-d11').style.color = 'red'
      document.getElementById('result-d11').innerHTML = 'Incorrect!'
      showCorrectAnswer4()
    }
  }
// the functon displays the link to the correct answer
function showCorrectAnswer4() {
    let showAnswer4 = document.createElement('p')
  //   showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer4.style.position = 'relative'
    showAnswer4.style.top = '-180px'
    showAnswer4.style.fontSize = '1.75rem'
    document.getElementById('showanswer4').appendChild(showAnswer4)
    showAnswer4.addEventListener('click', () => {
      document.getElementById('block-d14').style.border = '3px solid green'
      document.getElementById('result-d14').style.color = 'green'
      document.getElementById('result-d14').innerHTML = 'Correct!'
      document.getElementById('showanswer4').removeChild(showAnswer4)
    })
  }
//5
//    The function evaluates the answer and displays result
function displayAnswer5() {
    if (document.getElementById('option-f11').checked) {
      document.getElementById('block-f11').style.border = '4px solid red'
      document.getElementById('result-f11').style.color = 'red'
      document.getElementById('result-f11').innerHTML = 'InCorrect!'
    }
    else if (document.getElementById('option-f12').checked) {
      document.getElementById('block-f12').style.border = '4px solid red'
      document.getElementById('result-f12').style.color = 'red'
      document.getElementById('result-f12').innerHTML = 'Incorrect!'
      showCorrectAnswer5()
    }
    else if (document.getElementById('option-f13').checked) {
      document.getElementById('block-f13').style.border = '4px solid red'
      document.getElementById('result-f13').style.color = 'red'
      document.getElementById('result-f13').innerHTML = 'Incorrect!'
      showCorrectAnswer5()
    }
    else if (document.getElementById('option-f14').checked) {
      document.getElementById('block-f14').style.border = '4px solid green'
      document.getElementById('result-f14').style.color = 'green'
      document.getElementById('result-f14').innerHTML = 'correct!'
      numCorrect++;
      showCorrectAnswer5()
    }
  }
// the functon displays the link to the correct answer
function showCorrectAnswer5() {
    let showAnswer5 = document.createElement('p')
  //   showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer5.style.position = 'relative'
    showAnswer5.style.top = '-180px'
    showAnswer5.style.fontSize = '1.75rem'
    document.getElementById('showanswer5').appendChild(showAnswer5)
    showAnswer5.addEventListener('click', () => {
      document.getElementById('block-f14').style.border = '3px solid green'
      document.getElementById('result-f14').style.color = 'green'
      document.getElementById('result-f14').innerHTML = 'Correct!'
      document.getElementById('showanswer5').removeChild(showAnswer5)
    })
  }

