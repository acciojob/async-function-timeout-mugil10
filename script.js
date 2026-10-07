
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function displayMessage() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  await wait(delay);

  output.textContent = text;
}

btn.addEventListener("click", displayMessage);
```
