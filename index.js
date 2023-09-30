// Define the addingEventListener function
function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', (e)=> {
      console.log("Click Me!");
  });
}

// Call the function after it's defined
addingEventListener();
