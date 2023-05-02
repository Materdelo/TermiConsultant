const inputText = document.getElementById("input-text");
let change= "";
const wait_time = 300;
let blinkElements = document.querySelectorAll("a");
let i = 0;
let temp = document.getElementById("des_select");
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
    if(blocker(5) == 0)
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


let category_counter = 0;
let category_search = document.getElementById("cat-search");
let sel = document.getElementById("search_system");
let chcecker2 = 1;
function gen_animation_category_list(UWU = 7){
  if(UWU = 7){
    UWU = sel.value;
  }
  console.log("Uwu >"+UWU + "sel >" + sel.value)
  if(UWU != chcecker2){
    console.log("yey")
    chcecker2 = sel.value;
    document.getElementById("answer").innerHTML = '';
  let display_cat = "Kategoria: ";
  if (sel.value == 2) {
    blocker(1);
    category_search.innerHTML = '<label id="des_search"></label>';
    category_counter = display_cat.length - 1;
    for (let index = 0; index < display_cat.length+1; index++) {
    setTimeout(category_animation(display_cat),20 * category_counter);
    }
    xyzyxy = 0;
  }else{
    blocker(0);
    category_search.innerHTML = "";
  }
  }

}
let xyzyxy = 0;
function category_animation(inputx) {
  let thiss = document.getElementById("des_search");
  if(xyzyxy <= inputx.length -1){
    thiss.innerText += inputx[xyzyxy];

  }else{
    category_search.innerHTML += '<select id="des_select" onchange="search(3);"></select>';
    temp = document.getElementById("des_select")
    let save = category_lister();
    save.forEach(element => {
      temp.innerHTML += '<option>'+element+'</option>';
    });
    search(3);
  }
  xyzyxy += 1;
}

let blo = 0;

function blocker(block = 5){
  
  if(block != 5){
    blo = block;
  }

  return blo;
}
let suport = 'Linux';
function ope_sys_work_switcher() {
  
  let got = document.getElementById("system").value;
  let input = document.getElementById("input-text").textContent.slice(1);

  if(got != suport){
    suport = got;
    if (input != '') {
      search();
    }else{
      search(0);
    }
    console.log("rest");
  }

}