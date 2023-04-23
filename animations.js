const inputText = document.getElementById("input-text");
let change= "";
const wait_time = 300;
let blinkElements = document.querySelectorAll("a");
let i = 0;

function blink1() {
  blinkElements.forEach((element) => {
    element.style.backgroundColor = "white";
    element.style.color = "black";
  });
  i++;
  setTimeout(blink, wait_time);
}

function blink2() {
  blinkElements.forEach((element) => {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  });
  i--;
  setTimeout(blink, wait_time);
}

function blink() {
  if (i <= 0) {
    setTimeout(blink1, wait_time);
  } else {
    setTimeout(blink2, wait_time);
  }
}

setTimeout(blink, wait_time);

document.addEventListener("keydown", function(event) {
  if (event.key.length === 1) {
    inputText.textContent = ">" + inputText.textContent.slice(1) + event.key;
  } else if (event.key === "Backspace") {
    inputText.textContent = inputText.textContent.slice(0, -1);
    if(inputText.textContent.length == 0){
      inputText.textContent += ">";
    }

  } else if (event.key === "Enter") {
    // simulate search button click
    search();
  }
  //inputText.innerHTML += '<a id="bli">&nbsp;</a>';
  //blinkElements.push(inputText.lastElementChild);
});

inputText.textContent = ">";

const array = ">TermiConsultant";
const titlex = document.getElementById("titlex");
let ti = "", gh = 0;

for (let index = 0; index < array.length; index++) {
setTimeout(function(i) {
return function() {
  ti += array[i];
  titlex.innerHTML = ti; //+ //'<a id="bli">&nbsp;</a>';
  //blinkElements = document.querySelectorAll("#bli");
  
};
}(index), 400 * index);
}

setTimeout(function() {
console.log(titlex.innerHTML + '<a id="bli">&nbsp;</a>f');
titlex.innerHTML = titlex.innerHTML + '<a id="bli">&nbsp;</a>';
blinkElements = document.querySelectorAll("#bli");

},6000);

