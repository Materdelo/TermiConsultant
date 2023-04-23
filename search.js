let count = 0, forswitch = 0;

function search(){
    let gen = document.getElementById("answer");
    let input = document.getElementById("input").value;
    let system = document.getElementById('system').value;
    let code = '';

    if (input.length != 0) {
       
        let s_words = input.split(' '); 
        forswitch = s_words.length;
       
    }else{
        forswitch = 0;
    }
    
    switch (forswitch) {
        case 0:
            alert("You must input a minimum of 1 word");
            break;

        case 1:
            code +='<p>' + input + " - " + index_to_description(command_to_index(input, system), system) + '</p>';
            gen.innerHTML = '<div class="viewx" onclick="rest(`'+input+'`);" id="'+input+'">'+ code +"</div>";
            break;

        default:
            console.log("Searching for the descryption of the command");
            break;
    }
    count = 0;
}

function rest(input){
    let system = document.getElementById('system').value;
    let gen = document.getElementById(input);
    let code = '',option_e,option_description_e;

    if(count == 0){
        code += '<p>' + input + " - " + index_to_description(command_to_index(input, system), system) + '</p>';
        let option = index_to_option(command_to_index(input, system), system);
        let option_description = index_to_option_description(command_to_index(input, system), system);
        if(option != undefined){
            option_e = option.split('|');
            option_description_e = option_description.split('|');  
        }else{
            option_e = '';
            option_description_e = '';
        }
        
        code += '<p>-- Argumenty dla komendy --</p>';
        if(option_e[0] != undefined){
            for (let index = 0; index < option_e.length; index++) {
                code += "<p>" + option_e[index] + " - " + option_description_e[index] + "</p>";
            }
            
        }else{
            code += "<p>Nie ma</p>";
        }
        gen.innerHTML = code;
            count++;
    } else {
        //console.log("start");
        gen.innerHTML = '';
        code += '<p>' + input + " - " + index_to_description(command_to_index(input,system),system) + '</p>';
        gen.innerHTML = code;
        count--;
    }
}