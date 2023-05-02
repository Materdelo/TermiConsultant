function command_to_index(command, OS){
    if(OS == "Linux"){
        return table_linux.findIndex(i => i.command == command);
    } else {
        return table_windows.findIndex(i => i.command == command);
    }
}

function description_to_index(description, OS){
    if(OS == "Linux"){
        return table_linux.findIndex(i => i.description == description);
    } else {
        return table_windows.findIndex(i => i.description == description);
    }
} 

function category_to_index(category, OS){
    let text = "";
    if(OS == "Linux"){
        for (let i = 0; i < table_linux.length; i++) {
            if(table_linux[i].category == category){
                text += i + "|"
            }
        }
    } else {
        for (let i = 0; i < table_windows.length; i++) {
            if(table_windows[i].category == category){
                text += i + "|"
            }
        }
    }
    let text1 = text.slice(0, -1)
    return text1;
}

function index_to_comamnd(index, OS){
    if(OS == "Linux"){
        return table_linux[index].command;
    } else {
        return table_windows[index].command;
    }
}

function index_to_description(index, OS){
    if(OS == "Linux"){
        return table_linux[index].description;
    } else {
        return table_windows[index].description;
    }
} 

function index_to_category(index, OS){
    if(OS == "Linux"){
        return table_linux[index].category;
    } else {
        return table_windows[index].category;
    }
}

function index_to_arguments(index, OS){
    let text = "";
    if(OS == "Linux"){
        let has_option = table_linux[index].hasOwnProperty('option')
        if(has_option){
            for (let i = 0; i < table_linux[index].option.length; i++) {
                text += table_linux[index].option[i].argument + "|"
            }
            let text1 = text.slice(0, -1)
            return text1;
        }
    } else {
        let has_option = table_windows[index].hasOwnProperty('option')
        if(has_option){
            for (let i = 0; i < table_windows[index].option.length; i++) {
                text += table_windows[index].option[i].argument + "|"
            }
            let text1 = text.slice(0, -1)
            return text1;
        }
    }
}

function index_to_arguments_description(index, OS){
    let text = "";
    if(OS == "Linux"){
        let has_option = table_linux[index].hasOwnProperty('option')
        if(has_option){
            for (let i = 0; i < table_linux[index].option.length; i++) {
                text += table_linux[index].option[i].description + "|"
            }
            let text1 = text.slice(0, -1)
            return text1;
        }
    } else {
        let has_option = table_windows[index].hasOwnProperty('option')
        if(has_option){
            for (let i = 0; i < table_windows[index].option.length; i++) {
                text += table_windows[index].option[i].description + "|"
            }
            let text1 = text.slice(0, -1)
            return text1;
        }
    }
}

function index_to_example(index, OS){
    if(OS == "Linux"){
        return table_linux[index].example;
    } else {
        return table_windows[index].example;
    }
}


function category_lister(){
    let cat_list = [];

    table_linux.forEach(element => {
        if(!cat_list.includes(element.category)){
            cat_list.push(element.category);
        }  
    });

    table_windows.forEach(element => {
        if(!cat_list.includes(element.category)){
            cat_list.push(element.category);
        }  
    });

    return cat_list;
}
    