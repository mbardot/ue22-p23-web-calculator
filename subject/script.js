// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============


//Mathis BARDOT

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display');


window.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const button = e.target;
        const action = button.dataset.action;
        const buttonText = button.textContent;
    
    if (action) {
        // Handle special actions like 'clear', 'operator' or 'calculate'
        handleAction(action);
        console.log('other key!')
        
      } else {
        // Handle numeric buttons
        updateDisplay(buttonText);
        console.log('number key!')
      }
    }
  })






  function handleAction(action) {
    // Implement logic for special actions like 'clear' or 'calculate'
    if (action === 'clear') {
      // Clear the display
      clearDisplay();
    } else if (action === 'calculate') {
      // Perform the calculation
      performCalculation();
    }
    else if (action === 'add') {
      // Show the +
      updateDisplay('+');
    }
    else if (action === 'subtract') {
      // Show the -
      updateDisplay('-');
    }
    else if (action === 'divide') {
      // Show the /
      updateDisplay('/');
    }
    else if (action === 'multiply') {
      // Show the *
      updateDisplay('*');
    }
  }

  function updateDisplay(text) {
    // Update the display with the pressed button's text
    //display.textContent += text;
    if ( display.textContent === '0') {
      // Remove the zero on the left; other 'eval' interprets it like base-8 numbers
      display.textContent = text;
    } else {
      // Add numbers on the right
      display.textContent += text;
    }
  }

  async function performCalculation() {
    //when '=' is clicked we want to calculate the result and print it
    const expression = display.textContent
    
    if ( IsValid(expression)) {
      const result = eval(expression)
      clearDisplay()
      updateDisplay(result)

      if (result == 'Infinity') {
      await sleep(2000)
      clearDisplay()
      updateDisplay('0')

      }
    }
    else {
      clearDisplay()
      updateDisplay('syntax error')
      await sleep(2000)
      clearDisplay()
      updateDisplay('0')

    }
    
  }

  function clearDisplay() {
    display.textContent = '0'
  }

  function sleep(ms) {
    // I add this part to deal with unvalid syntax, while an invalid input still does not stop the usage of the tool
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function IsValid(text) {
    if (text.endsWith('+') || text.endsWith('-') || text.endsWith('/') || text.endsWith('*')) {
      return false
    }
    
    else if (text.startsWith('+') || text.startsWith('-') || text.startsWith('*') || text.startsWith('/')){
      return False
    }
    return true
    
  }