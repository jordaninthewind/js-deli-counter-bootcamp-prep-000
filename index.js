  // Accept current line of people with name as parameter
function takeANumber(currentList, newPerson) {
  // Function returns position in line
  var position = currentList.length + 1;
  currentList.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
  // Ensure position is not index
}

function nowServing(currentList) {
    // Returns first person in line
    return `Currently serving ${currentList[0]}`;
    // Removes same individual from line.
    currentList.shift();
    // IF line is empty, returns 'There is nobody waiting to be served!'
    if (currentList.length === 0) {
      return 'There is nobody waiting to be served!';
    }
}

function currentLine() {
  // Returns current line

  // String = 'The line is current: ${[number + 1], ${number + 1}}'

  // If no one is in line, returns 'The line is currently empty.'
}
