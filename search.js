let count = 0, forswitch = 0;

function search(){
    let gen = document.getElementById("answer");
    let input = document.getElementById("input-text").textContent.slice(1);
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
            code +=input + " - " + index_to_description(command_to_index(input, system), system);
            gen.innerHTML = '<div class="viewx" onclick="rest(`'+input+'`);" id="'+input+'"><p id="'+input+'999"></p></div>'; 
            
            for (let index = 0; index < code.length; index++) {
                setTimeout(function(i) {
                    return function() {
                     document.getElementById(input+"999").textContent += code[index];
                    };
                    }(index), 40 * index);     
            }
            
            gen+="";
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
    let code = [],option_e,option_description_e;

    if(count == 0){
        gen.innerHTML = '<p>' + input + " - " + index_to_description(command_to_index(input, system), system) + '</p>';
        let option = index_to_option(command_to_index(input, system), system);
        let option_description = index_to_option_description(command_to_index(input, system), system);
        if(option != undefined){
            option_e = option.split('|');
            option_description_e = option_description.split('|');  
        }else{
            option_e = '';
            option_description_e = '';
        }
        
        code.push('-- Argumenty dla komendy --') ;
        if(option_e[0] != undefined){
            for (let index = 0; index < option_e.length; index++) {
                code.push(option_e[index] + " - " + option_description_e[index]);
            }
            
        }else{
            code.push("Nie ma"); 
        }
        console.log(code);
        let xls;
        let id = '';
        for (let index = 0; index < code.length; index++) {
            xls = code[index];
            id = input + index + 'xss';
            console.log(xls);
            console.log(input+index);
            gen.innerHTML += '<p id="'+id+'"></p>';
            setTimeout(function() {
            for (let index2 = 0; index2 < xls.length; index2++) {
                console.log(xls[index2]);
                setTimeout(function() {
                    //return function() {
                     document.getElementById(id).textContent = document.getElementById(id).textContent + xls[index2];
                    //};
                    }(index2), 1040 * index2);     
            }
        }(index), 1040 * index); 
        }
            count++;
    } else {
        //console.log("start");
        gen.innerHTML = '';
        code += '<p>' + input + " - " + index_to_description(command_to_index(input,system),system) + '</p>';
        gen.innerHTML = code;
        count--;
    }
}