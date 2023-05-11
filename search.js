let count = 0, forswitch = 0;
let ani_argu, loop_ani_argument;
let timers = 0;

function search(chose = 0,command = '') {
    let gen = document.getElementById("answer");
    let input = document.getElementById("input-text").textContent.slice(1);
    let system = document.getElementById('system').value;
    let code = '';
    let cat_chosed = document.getElementById("des_select");
    
    if(command != ''){
    input = command;
    gen.innerHTML = '';
    }

    if(chose == 0)
        timers = 0;
    if (input.length != 0 || chose === 3) {

        let s_words = input.split(' ');
        forswitch = s_words.length;

    } else {
        forswitch = 0;
    }
    if (chose !==0) {
        forswitch = chose;
    }
    switch (forswitch) {
        case 0:
            alert("You must input a minimum of 1 word");
            break;

        case 1: 
        if(timers === 0){
            clearTimeout(loop_ani_argument);

            ids.forEach(element => {
                clearTimeout(element);
            });
            if(command_to_index(input, system) != -1){
                code += input + " - " + index_to_description(command_to_index(input, system), system) + ' (Click)';
            }else{
                code += 'Komenda nie znaleziona'
            }
            timers = 20 * code.length;
            timer();
            gen.innerHTML = '<div class="viewx" onclick="rest(`' + input + '`);" id="' + input + '"><p id="' + input + '999"></p></div>';

            for (let index = 0; index < code.length; index++) {
                ids.push(setTimeout(function (i) {
                    return function () {
                        document.getElementById(input + "999").textContent += code[index];
                    };
                }(index), 40 * index));
            }

            gen += "";
        }
            break;

            case 3:
                cat_chosed = document.getElementById("des_select");
                let chcocsed = cat_chosed.value;
                let bzzz = category_to_index(chcocsed,system).split("|");
                let chih = 0;
                if(timers === 0){
                    ids.forEach(element => {
                        clearTimeout(element);
                    });
                   document.getElementById("answer").innerHTML = '';
                bzzz.forEach(element => {
                    console.log(">>>"+element+'');
                    chih = animateCode(element, system,chih); 
                });
                }
                break;
        default:
            console.log("Searching for the descryption of the command");
            break;
    }
    count = 0;
}

function rest(input) {
    let system = document.getElementById('system').value;
    let gen = document.getElementById(input);
    let code = [], option_e, option_description_e;

    if (count == 0) {
        gen.innerHTML = '<p>' + input + " - " + index_to_description(command_to_index(input, system), system) + '</p>';
        let option = index_to_arguments(command_to_index(input, system), system);
        let option_description = index_to_arguments_description(command_to_index(input, system), system);
        if (option != undefined) {
            option_e = option.split('|');
            option_description_e = option_description.split('|');
        } else {
            option_e = '';
            option_description_e = '';
        }

        code.push('-- Przykład użycia --');
        code.push(index_to_example(command_to_index(input, system),system));
        code.push('-- Argumenty dla komendy --');
        if (option_e[0] != undefined) {
            for (let index = 0; index < option_e.length; index++) {
                code.push(option_e[index] + " - " + option_description_e[index]);
            }
            //code.push(' ');
        } else {
            code.push("Nie ma");
        }
        let xls;
        let id = '';
        let offset = 0
        loop_ani_argument = setTimeout(() => {
            for (let index = 0; index < code.length; index++) {
                xls = code[index];
                id = input + index + 'xss';
                gen.innerHTML += '<p id="' + id + '"></p>';
                offset = typeOut(offset, id, xls);
            }
        }, 1);
        count++;
    } else {
        clearTimeout(loop_ani_argument);

        ids.forEach(element => {
            clearTimeout(element);
        });

        gen.innerHTML = '';
        code += '<p>' + input + " - " + index_to_description(command_to_index(input, system), system) + '</p>';
        gen.innerHTML = code;
        count--;

    }
}

function addron(id, index2, xls) {
    document.getElementById(id).textContent = document.getElementById(id).textContent + xls[index2];
}

let ids = [];
function typeOut(offset, id, xls) {
    ids.push(setTimeout(() => {
      for (let index2 = 0; index2 < xls.length; index2++) {
        ids.push(setTimeout(() => {
          addron(id, index2, xls);
        }, 20 * index2));
      }
    }, offset));
    offset += (xls.length + 20) * 20;
    return offset;
  }
  


async function timer() {
    if (timers > 0) {
        timers = timers - 20;
    }
    //console.log(timers);
    if (timers>0) {
      setTimeout(timer,35);
    }
    
  }

  function animateCode(input, system,chih) {
    console.log("Here>"+input+"<End");    console.log("Here" + input !== '');

    let code = '',stop = 0;
    if(input !== ''){
        console.log("F you");
         code = index_to_comamnd(input,system) + " - " + index_to_description(input, system) + ' (Click)';
    }else{
         code = "Brak danych w kategori dla tego systemu operacyjnego";
         input = 1;
        stop = 1
    }
        
    const timers = 20 * code.length;
    timer();
    const speed = 5;
    const gen = document.createElement('div');
    gen.classList.add('viewx');
    gen.setAttribute('id', index_to_comamnd(input, system));

    if(input !== 1){
    gen.setAttribute('onclick', `command_transformer('`+index_to_comamnd(input, system)+`');`);
    }

    gen.innerHTML = '<p id="' + index_to_comamnd(input, system) + '999"></p>';
    document.getElementById("answer").appendChild(gen);
    console.log()
    for (let index = 0; index < code.length; index++) {
      ids.push(setTimeout(function () {
        return function () {
            ids.push(setTimeout(function () {
                return function () {
          document.getElementById(index_to_comamnd(input, system) + "999").textContent += code[index];
                };
            }(index), speed * index));         

        };
      }(index), chih)); 
    }
    return chih += (code.length + speed) * speed;
  }
  
function command_transformer(commandx){
    let input = document.getElementById("input-text");
    input.innerText = ">" + commandx;
    let id = document.getElementById(commandx);
    let selectin = document.getElementById("search_system");
    selectin.selectedIndex = 0;
    gen_animation_category_list(0)
    //id.onclick = `rest(${commandx})`;
    search(0,commandx)
    rest(commandx);
}