const table_linux = [ 
    {command: "pwd", description: "Wyświetla bieżący katalog roboczy w terminalu", category: "system", example: "pwd"},
    {command: "cd", description: "Zmienia aktualny katalog roboczy na inny katalog", category: "file system", example: "cd /path/to/directory", option: [
        {argument: "-", description: "Zmieniakatalog roboczy na ostatni, poprzedni katalog"},
        {argument: "--", description: "Traktuje następne argumenty jako nazwy katalogów, nawet jeśli zaczynają się od myślnika"},
        {argument: "-l", description: "Wymusza, aby po zmianie katalogu używany był faktyczny katalog podany w argumentach, a nie link symboliczny do katalogu"},
        {argument: "-p", description: "Wymusza, aby po zmianie katalogu używany był pełny, faktyczny katalog, bez uwzględniania linków symbolicznych"},
        {argument: "-e", description: "Zwraca komunikat błędu, jeśli katalog docelowy nie istnieje."},
        {argument: "-@", description: "Zwraca komunikat błędu, jeśli katalog docelowy jest niedostępny"}
    ]},
    {command: "man", description: "Służy do wyświetlania stron podręcznika dla innych poleceń w systemie Unix", category: "system", example: "man [command]", option: [
        {argument: "-k", description: "Wyszukuje w opisach wszystkich poleceń wyrażenia pasujące do podanego argumentu"},
        {argument: "-f", description: "Wyświetla krótki opis polecenia"},
        {argument: "-l", description: "Służy do wyświetlania stron podręcznika z pliku zamiast z systemowego katalogu"},
        {argument: "-w", description: "Wyświetla ścieżkę pliku z poleceniem"}
    ]},
    {command: "head", description: "Wyświetla pierwsze kilka linii pliku tekstowego", category: "", example: "head example.txt", option: [
        {argument: "-n [number]", description: "Określa, ile linii ma zostać wyświetlonych na ekranie"},
        {argument: "-c [number]", description: "Określa, ile bajtów pliku ma zostać wyświetlonych na ekranie"},
        {argument: "-q", description: "Wyświetla tylko zawartość pliku bez nagłówka, gdy jest przetwarzanych więcej niż jeden plik"},
        {argument: "-v", description: "Wyświetla nagłówek przed każdym plikiem, gdy jest przetwarzanych więcej niż jeden plik"},
    ]},
    {command: "tail", description: "Wyświetlania ostatnich linii pliku lub strumienia danych", category: "", example: "tail example.txt", option: [
        {argument: "-n [number]", description: "Określa, ile ostatnich linii ma zostać wyświetlonych na ekranie"},
        {argument: "-f", description: "Śledzi plik i wyświetla nowe linie w czasie rzeczywistym"},
        {argument: "-q", description: "Nie wyświetla informacji o nazwie pliku przed wynikiem"},
        {argument: "-c [number]", description: "Określa, ile bajtów końca pliku ma zostać wyświetlone na ekranie"},
    ]},
    {command: "mv", description: "Przenosi lub zmienia nazwę pliku lub folderu", category: "file", example: "mv path.file.txt ~/path/directory", option: [
        {argument: "-b", description: "Służy do tworzenia kopii zapasowej plików, które są nadpisywane lub zmieniane nazwy"},
        {argument: "-n", description: "Nie nadpisuje pliku docelowego, jeśli istnieje"},
        {argument: "-s", description: "Służy do tworzenia dowiązań symbolicznych (symbolic links) zamiast przenoszenia lub zmiany nazwy pliku"},
        {argument: "-i", description: "Pyta o potwierdzenie przed nadpisaniem istniejącego pliku"},
        {argument: "-u", description: "Przenosi tylko te pliki, które są nowsze niż ich odpowiedniki w miejscu docelowym lub nie istnieją w miejscu docelowym"},
        {argument: "-v", description: "Wyświetla szczegółowe informacje o każdym przeniesionym pliku"},
        {argument: "-f", description: "Zastępuje istniejący plik bez potwierdzenia"}
    ]},
    {command: "cat", description: "", category: ""},
    {command: "less", description: "", category: ""},
    {command: "nano", description: "", category: ""},
    {command: "nedit", description: "", category: ""},
    {command: "vim", description: "", category: ""},
    {command: "touch", description: "", category: ""},
    {command: "mkdir", description: "", category: ""},
    {command: "rm", description: "", category: ""},
    {command: "rmdir", description: "", category: ""},
    {command: "cp", description: "", category: ""},
    {command: "ln", description: "", category: ""},
    {command: "tree", description: "", category: ""},
    {command: "du", description: "", category: ""},
    {command: "df", description: "", category: ""},
    {command: "ps", description: "", category: ""},
    {command: "passwd", description: "", category: ""},
    {command: "logout", description: "", category: ""},
    {command: "exit", description: "", category: ""},
    {command: "ncdu", description: "", category: ""},
    {command: "top", description: "", category: ""},
    {command: "htop", description: "", category: ""},
    {command: "python", description: "", category: ""},
    {command: "scala", description: "", category: ""},
    {command: "java", description: "", category: ""},
    {command: "R", description: "", category: ""},
    {command: "which", description: "", category: ""},
    {command: "whereis", description: "", category: ""},
    {command: "whoiam", description: "", category: ""},
    {command: "whatis", description: "", category: ""},
    {command: "locate", description: "", category: ""},
    {command: "find", description: "", category: ""},
    {command: "ping", description: "", category: ""},
    {command: "wget", description: "", category: ""},
    {command: "curl", description: "", category: ""},
    {command: "echo", description: "", category: ""},
    {command: "apt", description: "", category: ""},
    {command: "printf", description: "", category: ""},
    {command: "w", description: "Pokazuje kto jest zalogowany i co robi", category: ""},
    {command: "wall", description: "Wysyła tą samą wiadomość do każdego", category: ""},
    {command: "who", description: "Pokazuje kto jest zalogowany i co robi", category: ""},
    {command: "bc", description: "kalkulator arytmetyczny", category: ""},
    {command: "call", description: "Pokazuje kalędarz ASCII", category: ""},
    {command: "date", description: "Wyświetla aktualną datę i godzinę", category: ""},
    {command: "nautilus", description: "Inicjuje sesję zdalnego pulpitu", category: ""},
    {command: "lynx", description: "Przegladarka tekstowa", category: ""},
    {command: "write", description: "Wysyła wiadomość do określonego użytkownika", category: ""},
    {command: "ps", description: "Pokazuje listę procesów", category: ""},
    {command: "xargs", description: "Wektoryzuje polecenia uruchaniając je w pętli", category: ""},
    {command: "xdg-open", description: "Otwiera plik z domyślną aplikacją", category: ""},
    {command: "pushd", description: "Zmienia katalog wyrzucając go na stos", category: ""},
    {command: "popd", description: "Wykonuje operację pop na stosie katalogów", category: ""},
    {command: "crontab", description: "Pozwala na edycję polecenia", category: ""},
    {command: "cron", description: "Sposób automatyzacji regularnych, zaplanowanych zadań", category: ""},
    {command: "awk", description: "Wyszukuje ciągi i wzorce w plikach", category: ""},
    {command: "ssh", description: "Lączebue się za pomocą sieci", category: ""},
    {command: "scp", description: "Kopiuje plik z systemu lokalnego do systemu zdalnego", category: ""},
    {command: "sed", description: "Zastępuje ciąg innym ciągiem", category: ""},
    {command: "rsync", description: "Kopiuje pliki, minimalizuje ilość kopiowanych danych szukając zmian", category: ""},
    {command: "su", description: "Tymczasowo zmienia urzytkownika", category: ""},
    {command: "chmod", description: "Modyfikuje uprawnienia plików", category: ""},
    {command: "chown", description: "zmienia właściciea pliku", category: ""},
    {command: "chgrp", description: "Zmienia właściciela pliku grupy", category: ""},
    {command: "userdel", description: "Usuwa użytkownika", category: ""},
    {command: "uniq", description: "Drukuje unikalne linie", category: ""},
    {command: "groupdel", description: "Usuwa grupę", category: ""},
    {command: "groupadd", description: "Dodaje grupę", category: ""},
    {command: "groups", description: "Pokazuje wszystkie grupy", category: ""},
    {command: "sort", description: "Sortuje wiersze alfabetycznie/numerycznie", category: ""},
    {command: "cmp", description: "Raportuje które bajty różnią się między dwoma plikami", category: ""},
    {command: "diff", description: "Pokazuje wieszer które różnią się między dwoma plikami", category: ""},
    {command: "adduser", description: "Dodaje użytkownika", category: ""},
    {command: "users", description: "Pokazuje aktualnie zalogowanych urzytkowników", category: ""},
    {command: "clear", description: "Czyści ekran (odpowiednik naciśnięcia [Ctrl-L] w powłoce Bash)", category: "terminal", example: "clear [-Ttype][-V][-x]", options: [
        {argument: "-x", description: "Czyści ekran, ale zachowaj bufor przewijania terminala"},
        {argument: "-T [type_of_terminal]", description: ""},
        {argument: "-x", description: "Czyści ekran, ale zachowaj bufor przewijania terminala"},
    ]},
    {command: "sudo", description: "Uruchamia polecenie jako super urzytkownik (root)", category: "terminal",  options: [
        {argument:"-u", description: "Uruchamia polecenie jako inny urzytkownik"},
    ]},
    {command: "ls", description: "Listuje katalogi", category: "catalogs", options: [
        {argument:"-l", description: "Listuje z datami"},
        {argument:"-la", description: "Coś innego robi"},
    ]},
    {command: "grep", description: "Wyszukuje tekst w plikach", category: "", option: (
        {argument: "-e", description: "Wyszukuje tekst w plikach (użycie rozszerzonych wyrażeń regularnych)"},
        {argument: "-f", description: "Wyszukuje tekst w plikach (dopasowywanie dowolnego z wielu ciągów jednocześnie)"},
        {argument: "-r", description: "Wyszukuje tekst w plikach (rekursywne wyszukiwanie plików w katalogu)"}
    )},
    {command: "cut", description: "Tnie linie na sekcje", category: "", option:[
        {argument: "-d", description: "Tnie linie na sekcje (Określa ogranicznik)"},
        {argument: "-f", description: "Tnie linie na sekcje (Określa ideks pola)"},
    ]}
]

const table_windows = [
    {command: "cls", description: "czyści ekran", category: "terminal"},
    {command: "sudo", description: "Daje zmienia uprawnienia na administratora", category: "terminal"},
    {command: "ls", description: "Listuje katalogi", category: "catalogs", options: [
        {argument:"-l", description: "Listuje z datami"},
        {argument:"-la", description: "Coś innego robi"},
    ]}
]


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
    let has_options = table_linux[index].hasOwnProperty('option')
    if(has_options){
        if(OS == "Linux"){
            for (let i = 0; i < table_linux[index].option.length; i++) {
                text += table_linux[index].option[i].argument + "|"
            }
        } else {
            for (let i = 0; i < table_windows[index].option.length; i++) {
                text += table_windows[index].option[i].argument + "|"
            }
        }
        let text1 = text.slice(0, -1)
        return text1;
    }
} 

function index_to_arguments_description(index, OS){
    let text = "";
    let has_options = table_linux[index].hasOwnProperty('option')
    if(has_options){
        if(OS == "Linux"){
            for (let i = 0; i < table_linux[index].option.length; i++) {
                text += table_linux[index].option[i].description + "|"
            }
        } else {
            for (let i = 0; i < table_windows[index].option.length; i++) {
                text += table_windows[index].option[i].description + "|"
            }
        }
        let text1 = text.slice(0, -1)
        return text1;
    }
} 

function index_to_example(index, OS){
    if(OS == "Linux"){
        return table_linux[index].example;
    } else {
        return table_windows[index].example;
    }
}

