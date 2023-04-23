let count = 0, forswitch = 0;
let ani_argu, loop_ani_argument;
function search() {
    let gen = document.getElementById("answer");
    let input = document.getElementById("input-text").textContent.slice(1);
    let system = document.getElementById('system').value;
    let code = '';

    if (input.length != 0) {

        let s_words = input.split(' ');
        forswitch = s_words.length;

    } else {
        forswitch = 0;
    }

    switch (forswitch) {
        case 0:
            alert("You must input a minimum of 1 word");
            break;

        case 1:
            clearTimeout(loop_ani_argument);

            ids.forEach(element => {
                clearTimeout(element);
            });
        
            code += input + " - " + index_to_description(command_to_index(input, system), system) + ' (Click)';
            gen.innerHTML = '<div class="viewx" onclick="rest(`' + input + '`);" id="' + input + '"><p id="' + input + '999"></p></div>';

            for (let index = 0; index < code.length; index++) {
                setTimeout(function (i) {
                    return function () {
                        document.getElementById(input + "999").textContent += code[index];
                    };
                }(index), 40 * index);
            }

            gen += "";
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
            ids.push(setTimeout((id, index2, xls) => {
                addron(id, index2, xls);
            }, 20 * index2, id, index2, xls));
        }
    }, offset))
    offset += (xls.length + 20) * 20;
    return offset
}