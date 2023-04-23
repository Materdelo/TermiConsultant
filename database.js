const table_linux = [ 
    {command: "pwd", description: "Wyświetla bieżący katalog roboczy w terminalu", category: "system", example: "pwd"},
    {command: "cd", description: "Zmienia aktualny katalog roboczy na inny katalog", category: "file system", example: "cd /path/to/directory", option: [
        {argument: "-", description: "Zmienia katalog roboczy na ostatni, poprzedni katalog"},
        {argument: "--", description: "Traktuje następne argumenty jako nazwy katalogów, nawet jeśli zaczynają się od myślnika"},
        {argument: "-l", description: "Wymusza, aby po zmianie katalogu używany był faktyczny katalog podany w argumentach, a nie link symboliczny do katalogu"},
        {argument: "-p", description: "Wymusza, aby po zmianie katalogu używany był pełny, faktyczny katalog, bez uwzględniania linków symbolicznych"},
        {argument: "-e", description: "Zwraca komunikat błędu, jeśli katalog docelowy nie istnieje."},
        {argument: "-@", description: "Zwraca komunikat błędu, jeśli katalog docelowy jest niedostępny"},
    ]},
    {command: "man", description: "Służy do wyświetlania stron podręcznika dla innych poleceń", category: "system", example: "man command", option: [
        {argument: "-k", description: "Wyszukuje w opisach wszystkich poleceń wyrażenia pasujące do podanego argumentu"},
        {argument: "-f", description: "Wyświetla krótki opis polecenia"},
        {argument: "-l", description: "Służy do wyświetlania stron podręcznika z pliku zamiast z systemowego katalogu"},
        {argument: "-w", description: "Wyświetla ścieżkę pliku z poleceniem"},
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
        {argument: "-f", description: "Zastępuje istniejący plik bez potwierdzenia"},
    ]},
    {command: "cat", description: "Służy do wyświetlania i łączenia zawartości plików tekstowych w konsoli", category: "file", example: "cat example.txt", option: [
        {argument: "-n", description: "Dodaje numerację linii w wyjściu"},
        {argument: "-b", description: "Dodaje numerację linii tylko w niepustych liniach w wejściu"},
        {argument: "-s", description: "Usuwa powtarzające się puste linie w wyjściu"},
        {argument: "-e", description: "Dodaje symbol '$' na końcu każdej linii wyjścia"},
        {argument: "-t", description: "Zamienia znaki tabulacji na ciąg znaków '^I' w wyjściu"},
        {argument: "-v", description: "Wyświetla nie odpowiednie znaki w wyjściu"},
        {argument: "-a", description: "Łączy opcję '-vET' w jedną flagę"},
    ]},
    {command: "less", description: "Narzędzie wykorzystywane do przeglądania plików tekstowych", category: "tools", example: "less example.txt", option: [
        {argument: "-n", description: "Wyświetla numer linii"},
        {argument: "-i", description: "Ignoruje wielkość liter podczas wyszukiwania"},
        {argument: "-F", description: "Automatycznie zamyka 'less' w przypadku, gdy przeglądany plik mieści się na jednej stronie"},
        {argument: "-f", description: "Włącza tryb 'monitora', który automatycznie odświeża wyświetlaną zawartość w razie zmian w pliku"},
        {argument: "-q", description: "Zamyka less"},
        {argument: "-h", description: "Wyświetla pomoc"},
    ]},
    {command: "nano", description: "Edytor tekstu dla systemów Unix", category: "text edytor", example: "nano example.txt", option: [
        {argument: "-b", description: "Tworzy kopię zapasową pliku"},
        {argument: "-c", description: "Włącza automatyczne wycięcie podczas pisania tekstu"},
        {argument: "-e", description: "Zmienia znaki tabulacji na spacje"},
        {argument: "-i", description: "Ignoruje pliki konfiguracyjne nano"},
        {argument: "-o", description: "Dodaje więcej miejsca na ekranie, poprzez ukrycie wiersza stanu w dolnej części ekranu"},
        {argument: "-r", description: "Uruchamia nano w trybie ograniczeniowym, który nie pozwala na zmianę pliku, jeśli nie masz do niego uprawnień"},
        {argument: "-s", description: "Włącza łamanie wierszy"},
        {argument: "-t", description: "Ustawia rozmiar znaku tabulacji"},
        {argument: "-v", description: "Wyświetla numer wersji nano"},
        {argument: "-w", description: "Wyłącza łamanie wierszy"},
        {argument: "-x", description: "Wyłącza tryb pomocy"},
        {argument: "-z", description: "Usuwa bufor z kopią zapasową"},
    ]},
    {command: "nedit", description: "Edytor tekstu dla systemów Unix", category: "text editor", example: "nedit example.txt", option: [
        {argument: "-read", description:"Otwiera plik tylko do odczytu"},
        {argument: "-geometry", description:"Ustawia rozmiar i położenie okna programu"},
        {argument: "-version", description:"Wyświetla informacje o wersji programu"},
        {argument: "-write", description:"Otwiera plik tylko do zapisu"},
        {argument: "-font", description:"Ustawia czcionkę"},
        {argument: "-wrap", description:"Włącza/Wyłącza automatyczne zawijanie tekstu"},
    ]},
    {command: "vim", description: "Edytor tekstu dla systemów operacyjnych typu Unix i Linux", category: "text editor", example: "vim example.txt", option: [
        {argument:"-c", description: "Pozwala na wykonywanie komendy po otwarciu pliku"},
        {argument:"-n", description: "Włącza tryb bez numerowy, nie będzie wyświetlane numerowanie linii"},
        {argument:"-R", description: "Włącza tryb tylko do odczytu"},
        {argument:"-s", description: "Pozwala na wykonywanie skryptu, który może zostać użyty do automatyzacji zadań w vim"},
    ]},
    {command: "touch", description: "Umożliwia tworzenie nowych plików lub modyfikowanie daty modyfikacji istniejących plików", category: "", example: "touch new_file.txt", option: [
        {argument: "-a", description: "Ustawia datę ostatniego dostępu do pliku na bieżącą datę"},
        {argument: "-c", description: "Nie tworzy nowego plik jeśli istnieje, tylko informuje użytkownika o tym fakcie"},
        {argument: "-m", description: "Ustawia datę ostatniej modyfikacji pliku na bieżącą datę i czas"},
        {argument: "-r", description: "Kopiuję datę i czas ostatniej modyfikacji jednego pliku na drugi plik"},
        {argument: "-t", description: "Umożliwia ręczne ustawianie daty i czasu ostatniej modyfikacji pliku"},
    ]},
    {command: "mkdir", description: "Służy do tworzenia nowych katalogów", category: "file", example: "mkdir my_folder", option: [
        {argument: "-m", description: "Określa prawa dostępu do utworzonego katalogu"},
        {argument: "-p", description: "Tworzy katalog nadrzędnie, jeśli nie istnieją"},
        {argument: "-v", description: "Wyświetla komunikat o każdym utworzonym katalogu"},
    ]},
    {command: "rm", description: "Usuwa pliki lub katalogi z systemu plików", category: "file", example: "rm example.txt", option: [
        {argument: "-f", description: "Wymusza usunięcie pliku bez potwierdzenia"},
        {argument: "-i", description: "Pyta użytkownika o potwierdzenie przed usunięciem każdego pliku"},
        {argument: "-r", description: "Usuwa katalogi i ich zawartość rekursywnie"},
        {argument: "-v", description: "Wyświetla nazwy usuniętych plików na ekranie"},
    ]},
    {command: "rmdir", description: "Usuwa puste katalogi", category: "file", example: "rmdir folder", option:[
        {argument: "-p", description: "Usuwa podkatalogi, jeśli są one puste"},
    ]},
    {command: "cp", description: "Kopiuje pliki i katalogi", category: "file", example: "cp example1.txt example2.txt", option: [
        {argument: "-r", description: "Kopiuje rekursywnie"},
        {argument: "-i", description: "Interaktywny tryb kopiowania, Program pyta o potwierdzenie"},
        {argument: "-p", description: "Zachowuje uprawnienia, datę modyfikacji i właściciela"},
        {argument: "-v", description: "Wstawia na ekranie informacje o każdym skopiowanym pliku"},
    ]},
    {command: "ln", description: "Służy do tworzenia dowiązań symbolicznych i twardych pomiędzy plikami", category: "system", example: "ln -s example1.txt example2.txt", option: [
        {argument: "-s", description: "Tworzy dowiązania symboliczne"},
        {argument: "-f", description: "Nadpisuje istniejące dowiązania bez pytania o potwierdzenie"},
        {argument: "-i", description: "Pyta o potwierdzenie przed nadpisaniem"},
        {argument: "-n", description: "Tworzy dowiązania twarde"},
        {argument: "-v", description: "Wyświetla informację o tworzonych dowiązaniach"},
        {argument: "-r", description: "Tworzy dowiązanie dla całego drzewa katalogów"},
    ]},
    {command: "tree", description: "Służące do wyświetlania struktury drzewa katalogów i plików w hierarchiczny sposób", category: "tools", example: "tree", option: [
        {argument: "-a", description: "Wyświetla wszystkie pliki, w tym ukryte"},
        {argument: "-d", description: "Wyświetla tylko katalogi"},
        {argument: "-L", description: "Określa maksymalną głębokość, do którego drzewo powinno być wyświetlone"},
        {argument: "-f", description: "Wyświetla pełną ścieżkę do każdego pliku i katalogu"},
        {argument: "-i", description: "Ignoruje znaki ASCII"},
        {argument: "-r", description: "Ignoruje pliki i katalogi pasujące do wzorca"},
        {argument: "-q", description: "Ukrywa znaki nieodczytywalne"},
    ]},
    {command: "du", description: "Wyświetla informacje o rozmiarze plików", category: "tools", example: "du", option: [
        {argument: "-h", description: "Wyświetla rozmiar w łatwiejszej do odczytania formie"},
        {argument: "-s", description: "Podaje tylko całkowity rozmiar danego katalogu"},
        {argument: "-c", description: "Dodaje na końcu sumaryczny rozmiar wszystkich wyświetlonych plików i katalogów"},
        {argument: "-a", description: "pokazuje rozmiar każdego pliku, łącznie z plikami ukrytymi"},
        {argument: "-x", description: "Wyświetla rozmiar plików tylko w ramce bieżącego systemu plików"},
        {argument: "-D", description: "Wyświetla głębokość na której znajdują się pliki i katalogi"},
    ]},
    {command: "df", description: "Wyświetla informacje o zajętości dysku", category: "tools", example: "df -h", option: [
        {argument: "-h", description: "Wyświetla informacje o zajętości dysku w formacie czytelnym dla człowieka, nie w bajtach"},
        {argument: "-T", description: "Wyświetla typ systemu plików"},
        {argument: "-t", description: "Wyświetla tylko informacje na temat podanego typu systemu plików"},
        {argument: "-i", description: "Wyświetla ilość używanych węzłów plików zamiast sumy zajętego miejsca"},
    ]},
    {command: "ps", description: "Wyświetla informacje o działających procesach na komputerze", category: "process", example: "ps -ef", option: [
        {argument: "-e", description: "Wyświetla wszystkie procesy, nawet te, które nie należą do bieżącego terminala"},
        {argument: "-f", description: "Wyświetla szczegółowe informacje o każdym procesie"},
        {argument: "-u [username]", description: "Wyświetla procesy należące do podanego użytkownika"},
        {argument: "-x", description: "Wyświetla procesy, które  nie mają terminala kontrolnego"},
    ]},
    {command: "passwd", description: "Służy do zmiany hasła użytkownika lub administratora", category: "system", example: "passwd janek", option: [
        {argument: "-l", description: "Blokuje konto użytkownika poprzez dodanie ustawienia znaku ! na początku hasła"},
        {argument: "-u", description: "Odblokowuje konto użytkownika"},
        {argument: "-d", description: "Usunięcie hasła użytkownika"},
        {argument: "-s", description: "Wyświetlanie stanu hasła użytkownika"},
        {argument: "-e", description: "Wymuszenie zmiany hasła przy następnym logowaniu"},
    ]},
    {command: "logout", description: "Służy do wylogowania aktualnie zalogowanego użytkownika", category: "system", example: "logout"},
    {command: "exit", description: "Służy do zakończenia bieżącej sesji terminala lub powłoki", category: "system", example: "exit", option: [
        {argument: "-h", description: "Wyświetla pomoc dotyczącą użycia komendy"},
        {argument: "-n", description: "Powoduje, że exit nie wykona się, gdy zostanie użyta w skrypcie"},
    ]},
    {command: "ncdu", description: "Służy do analizy zajętości miejsca na dysku twardym", category: "system", example: "ncdu", option: [
        {argument: "-q", description: "Tryb cichy, Wyświetla tylko wynik"},
        {argument: "-r", description: "Analizuje katalogi rekursywnie"},
        {argument: "x", description: "Wyklucza punkty montowania innych urządzeń"},
    ]},
    {command: "top", description: "Służy do wyświetlania aktualnie działających procesów i ich wykorzystania zasobów", category: "process", example: "top", option: [
        {argument: "-d", description: "Pozwala ustawić opóźnienie między aktualizacjami wyświetlanego ekranu"},
        {argument: "-u", description: "Umożliwia wyświetlanie procesów tylko dla określonych użytkowników"},
        {argument: "-p", description: "Umożliwia wyświetlanie informacji tylko dla wybranych procesów"},
        {argument: "-c", description: "Pozwala na wyświetlanie pełnych ścieżek plików dla procesów"},
        {argument: "-h", description: "Umożliwia wyświetlanie pomocy dla komendy"},
    ]},
    {command: "htop", description: "Służy do wyświetlania listy procesów działających na systemie w czasie rzeczywistym. Jest to bardziej rozbudowana i interaktywna alternatywa dla standardowej komendy top", category: "tools", example: "htop", option: [
        {argument: "-d [second]", description: "Określa odstęp czasu między odświeżeniem wyświetlanej listy procesów"},
        {argument: "-u [user]", description: "Wyświetla procesy tylko dla podanego użytkownika"},
        {argument: "-p [PID]", description: "Wyświetla informacje tylko dla podanego procesu"},
        {argument: "-c", description: "Wyświetla pełną świeżę procesu"},
    ]},
    {command: "python", description: "Uruchamia interpreter języka Python", category: "dev tools"},
    {command: "scala", description: "Uruchamia interpreter języka Scala", category: "dev tools"},
    {command: "java", description: "Służy do uruchomienia aplikacji napsanych w języku java", category: "dev tools"},
    {command: "R", description: "Służy do uruchomienia aplikacji napsanych w języku R", category: "dev tools"},
    {command: "which", description: "Służy do wyświetlania pełnej ścieżki do pliku wykonywalnego programu lub skryptu", category: "system", example: "which python", option:[
        {argument: "-a", description: "Wyświetla wszystkie znalezione ścieżki do plików wykonywalnych zamiast tylko pierwszej"},
        {argument: "-i", description: "Wyświetla informacje o plikach, które nie są plikami wykonywalnymi"},
        {argument: "-s", description: "Ogranicza poszukiwanie do określonej ścieżki, zamiast przeszukiwać wszystkie katalogi"},
    ]},
    {command: "whereis", description: "Służy do wykonywania plików binarnych", category: "system", example: "whereis python", option:[
        {argument: "-b", description: "Wyszukuje tylko pliki binarne"},
        {argument: "-m", description: "Wyszukuje tylko pliki źródłowe"},
        {argument: "-s", description: "Wyszukuje tylko storny podręcznika"},
    ]},
    {command: "whoiam", description: "Służy do wyświetlania nazw użytkownika", category: "system", example: "whoiam", option:[
        {argument: "-h", description: "Wyświetla pomoc dotyczącą użycie polecenia"},
        {argument: "-v", description: "Wyświetla informacje o wersji polecenia"},
    ]},
    {command: "whatis", description: "Służy do wyświetlenia krótkiego opisu danego polecenia", category: "system", example: "whatis ls", option:[
        {argument: "-w", description: "Pozwala określić maksymalną długość wyjściowego opisu"},
    ]},
    {command: "locate", description: "Służy do szybkiego wyszukiwania plików na podstawie ich nazw lub wzorców nazw", category: "tools", example: "locate example", option:[
        {argument: "-i", description: "Wyszukuje pliki bez względu na wielkość liter"},
        {argument: "-c", description: "Zwraca tylko liczbę pasujących plików"},
        {argument: "-e", description: "Wyklucza pliki pasujące do wzorca"},
        {argument: "-r", description: "Używa wyrażeń regularnych do dopasowania plików"},
        {argument: "-w", description: "Dopasowuje tylko pliki, których ścieżka zaczyna się od wzorca"},
    ]},
    {command: "find", description: "Służy do wyszukiwania plików i katalogów w określonej lokalizacji", category: "file", example: 'find path -name "*.txt"', option:[
        {argument: "-name", description: "Wyszukuje pliki lub katalogi o nazwie pasującej do argumentu"},
        {argument: "-type", description: "Wyszukuje pliki lub katalogi o określonym katalogu"},
        {argument: "-user [username]", description: "Wyszukuje pliki lub katalogi, których właścicielem jest określony użytkownik"},
    ]},
    {command: "ping", description: "Służy do testowania połączenia sieciowego poprzez wysłanie pakietów ICMP na wskazany adres IP lub nazwę domeny", category: "network tools", example: "ping google.com", option:[
        {argument: "-c", description: "Określa ilość pakietów do wysłania"},
        {argument: "-s", description: "Określa rozmiar pakietów w bajtach"},
        {argument: "-i", description: "Określa czas między kolejnymi pakietami"},
        {argument: "-t", description: "Umożliwia ustalanie TTL pakietów"},
        {argument: "-q", description: "Wyłącza wyświetlanie informacji diagnostycznych"},
        {argument: "-W", description: "Określa maksymalny czas oczekiwania na odpowiedź od hosta docelowego"},
        {argument: "-v", description: "Włącza tryb, który wyświetla szczegółowe informacje o pingowanych pakietach"},
        {argument: "-h", description: "Wyświetla pomoc dotyczącą opcji komendy"},
    ]},
    {command: "wget", description: "Umożliwia pobieranie plików z internetu przy użyciu protokołów HTTP, HTTPS i FTP", category: "network tools", example: "wget http://www.example_site.com/file.txt", option:[
        {argument: "-O", description: "Umożliwia zapisanie pliku pod inną nazwą niż oryginalna"},
        {argument: "-P", description: "Umożliwia zapisywanie pliku w określonym katalogu"},
        {argument: "-r", description: "Umożliwia rekursywne pobieranie całej witryny internetowej wraz ze strukturą katalogową"},
        {argument: "-c", description: "Umożliwia kontynuowanie pobierania pliku w przypadku przerwania połączenia"},
        {argument: "-q", description: "Wyłącza wyświetlanie informacji o postępie pobierania"},
        {argument: "-U", description: "Umożliwia podanie wartości pola User-Agent"},
    ]},
    {command: "curl", description: "Umożliwia pobieranie i przesyłanie danych z serwerów za pomocą różnych protokołów internetowych", category: "network tools", example: "curl http://www.example.com", option:[
        {argument: "-X", description: "Określa metodę HTTP"},
        {argument: "-H", description: "Dodaje nagłówek HTTP do żądania"},
        {argument: "-d", description: "Przesyła dane w żądaniu POST"},
        {argument: "-o", description: "Zapisuje odpowiedź serwera do pliku"},
        {argument: "-L", description: "Przekierowuje żądanie do adresu URL zwróconego w nagłówku HTTP"},
        {argument: "-u", description: "Określa nazwę użytkownika i hasło dla uwierzytelnienia HTTP"},
        {argument: "-v", description: "Wyświetla bardziej szczegółowe informacje dotyczące procesu wysyłania żądania i odbierania odpowiedzi"},
    ]},
    {command: "echo", description: "Służy do wyświetlania tekstu na standardowym wyjściu lub przekierowywaniu tekstu do pliku", category: "shell command", example: 'echo "Hello World!"', option:[
        {argument: "-n", description: "Pozwala usunąć dodatkową nową linijkę po wyświetleniu tekstu"},
        {argument: "-e", description: "Pozwala na interpretowanie sekwencji ucieczki"},
        {argument: "-E", description: "Wyłącza interpretację sekwencji ucieczki"},
    ]},
    {command: "apt", description: "Narzędzie do zarządzania pakietami w systemach operacyjnych", category: "system", example: "apt get update", option:[
        {argument: "-y", description: "Automatycznie potwierdza wszystkie pytania, które mogą pojawić się w trakcie wykonywania komendy"},
        {argument: "-q", description: "Tryb cichy, Wyświetla tylko niezbędne informacje"},
        {argument: "-h", description: "Wyświetla krótki opis komendy"},
        {argument: "-V", description: "Wyświetla numer wersji programu apt"},
        {argument: "-f", description: "Naprawia błędy instalacji pakietów i usuwa niepotrzebne zależności"},
        {argument: "-s", description: "Symuluje działanie komendy bez faktycznego jej wykonania"},
    ]},
    {command: "printf", description: "Służy do wyświetlania tekstu lub wartości zmiennych na standardowym wyjściu lub w pliku", category: "shell command", example: 'printf "Hello World!"', option:[
        {argument: "-v", description: "Przypisuje wynik do zmiennej"},
        {argument: "-n", description: "Nie dodaje znaku nowej linii na końcu wyniku"},
        {argument: "-s", description: "Używa podanej stałej jako wejście tekstowe"},
        {argument: "-e", description: "Interpretuje sekwencje specjalne w tekście"},
    ]},
    {command: "w", description: "Wyświetla informacje o aktualnie zalogowanych użytkownikach oraz obciążeniu systemu", category: "system", example: "w", option:[
        {argument: "-h", description: "Wyświetla opis opcji dostępnych dla komendy"},
        {argument: "-u", description: "Wyświetla dodatkowe informacje dotyczące czasu użytkowania przez użytkownika"},
        {argument: "-s", description: "Wyświetla informacje o obciążeniu systemu w postaci średnich za ostatnie 1, 5, 15 minut"},
        {argument: "-f", description: "Wyświetla informacje o procesach uruchomionych przez użytkowników"},
        {argument: "-V", description: "Wyświetla wersję programu"},
    ]},
    {command: "wall", description: "Służy do wysyłania wiadomości do wszystkich użytkowników zalogowanych na danym serwerze", category: "system", example: "wall example text", option:[
        {argument: "-n", description: "Powoduje, że znak nowej linii nie jest dodawany na końcu przyłączonej wiadomości"},
        {argument: "-t", description: "Dodaje do wiadomości nagłówek zawierający czas wysłania i nazwę użytkownika, który ją wysłał"},
    ]},
    {command: "who", description: "Służy do wyświetlania informacji o aktualnie zalogowanych użytkownikach na systemie", category: "system", example: "who", option:[
        {argument: "-a", description: "Wyświetla informacje o wszystkich użytkownikach, nie tylko zalogowanych"},
        {argument: "-b", description: "Wyświetla czas ostatniego uruchomienia systemu"},
        {argument: "-q", description: "Wyświetla liczbę zalogowanych użytkowników"},
        {argument: "-H", description: "Wyświetla informacje w postaci nagłówków kolumn"},
        {argument: "-u", description: "Wyświetla dodatkowe informacje o użytkownikach"},
    ]},
    {command: "bc", description: "kalkulator arytmetyczny. Umożliwia on wykonywanie operacji matematycznych", category: "tools", example: 'echo "2+2"|bc', option:[
        {argument: "-i", description: "Tryb interaktywny, działa jak interaktywny kalkulator"},
        {argument: "-l", description: "Tryb matematyczny, liczby są traktowane jako wartości dziesiętne zmiennoprzecinkowe zamiast liczb całkowitych"},
        {argument: "-q", description: "Tryb cichy, Tryb nieinteraktywny, który przetwarza dane wejściowe z pliku lub ze strumienia wejściowego i wypisuje wynik na standardowe wyjście"},
        {argument: "-s", description: "Umożliwia wprowadzenie wyrażeń arytmetycznych bezpośrednio z wiersza poleceń lub z pliku"},
        {argument: "-w", description: "Umożliwia włączenie wyświetlania ostrzeżeń"},
        {argument: "-h", description: "Wyświetla pomoc dotyczącą komendy"},
        {argument: "-v", description: "Wyświetla wersję programu"},
    ]},
    {command: "date", description: "Służy do wyświetlania i ustawiania daty i czasu systemowego", category: "system", example: "date", option:[
        {argument: "-d", description: "Umożliwia ustawianie innej daty niż aktualna"},
        {argument: "-s", description: "Umożliwia ustawianie daty i czasu systemowego"},
        {argument: "-u", description: "Wyświetla czas UTC zamiast czasu lokalnego"},
        {argument: "-R", description: "Wyświetla datę i czas w formacie RFC"},
        {argument: "-I", description: "Wyświetla datę w formacie ISO"},
    ]},
    {command: "nautilus", description: "Pozwala on na łatwe zarządzanie plikami i katalogami, przeglądanie zawartości systemu plików oraz urządzeń zewnętrznych", category: "file", example: "nautilius", option:[
        {argument: "-h", description: "Wyświetla pomoc dla komendy"},
        {argument: "-n", description: "Otwiera nowe okno menedżera plików"},
        {argument: "-f", description: "Uruchamia Nautilusa bez pulpitu"},
        {argument: "-s", description: "Zaznacza wybrane pliki lub katalogi"},
        {argument: "-q", description: "Zamyka nautilusa"},
    ]},
    {command: "lynx", description: "tekstowa przeglądarka internetowa", category: "network tools", example: "lynx http://www.example.com", option:[
        {argument: "-accept_all_coockies", description: "Pozwala na akceptowanie wszystkich plików cookie bez uprzedniego zapytania użytkownika"},
        {argument: "-force_html", description: "Wymusza wyświetlanie strony w formacie HTML, nawet jeśli serwer przesyła ją w innym formacie"},
        {argument: "-dump", description: "Pozwala na zapisanie zawartości strony internetowej do pliku tekstowego"},
        {argument: "-listonly", description: "Wyświetla jedynie linki do innych stron internetowych bez pobierania ich zawartości"},
        {argument: "-nolist", description: "Powoduje wyłączenie wyświetlania listy linków, dzięki czemu można wyświetlić tylko zawartość strony"},
        {argument: "-crawl", description: "Pozwala na przeszukiwanie strony internetowej w poszukiwaniu linków do innych stron i zapisywanie ich adresów"},
    ]},
    {command: "write", description: "Służy do wysyłania wiadomości do innych użytkowników zalogowanych na tym samym urządzeniu", category: "system", example: "write user", option:[
        {argument: "-f [file]", description: "Wysyła treść pliku jako wiadomość"},
        {argument: "-t [time]", description: "Ustawia limit czasu na odpowiedź"},
        {argument: "-u", description: "Wyłącza automatyczne mapowanie znaków specjalnych"},
        {argument: "-W", description: "Włącza powiadomienia dźwiękowe o otrzymanych wiadomościach"},
    ]},
    {command: "ps", description: "Służy do wyświetlania aktualnie działających procesów na komputerze", category: "process", example: "ps -e", option:[
        {argument: "-e", description: "Wyświetla informacje o wszystkich procesach, nie tylko tych, które należą do bieżącego użytkownika"},
        {argument: "-f", description: "Wyświetla pełne informacje o każdym procesie, włącznie z identyfikatorem użytkownika, priorytetem, czasem działania"},
        {argument: "-u [user]", description: "Wyświetla informacje tylko o procesach należących do danego użytkownika"},
        {argument: "-x", description: "Wyświetla informacje o procesach nie interaktywnych, czyli takich, które nie mają okna graficznego, a działają w tle"},
    ]},
    {command: "xargs", description: "Służy do przetwarzania standardowego wejścia i wykonania na jego podstawie innej komendy", category: "shell command", example: 'find . -type f -name "*.txt" -print0 | xargs -0 grep "hello"', option:[
        {argument: "-0", description: "Umożliwia przetwarzanie plików i katalogów zawierających spacje i inne specjalne znaki"},
        {argument: "-I", description: 'Określa, że każda linia wejścia powinna być zastąpiona przez "{}"'},
        {argument: "-n", description: "Określa maksymalną liczbę argumentów przekazywanych do komendy wykonanej przez komendę"},
        {argument: "-t", description: "Wypisuje na standardowe wyjście diagnostyczne, jakie komendy zostaną wykonane przez xargs przed ich wykonaniem."},
        {argument: "-r", description: "Uniemożliwia wykonanie komendy wykonanej przez xargs, gdy nie ma żadnych argumentów wejściowych"},
        {argument: "-p", description: "Pyta użytkownika, czy chce wykonać komendę wykonaną przez komendę"},
    ]},
    {command: "xdg-open", description: "Służy do otwierania plików lub adresów URL przy użyciu domyślnych aplikacji dla danego typu pliku lub protokołu", category: "tools", example: "xdg-open example.txt", option:[
        {argument: "-a [name_application]", description: "Używa danej aplikacji zamiast domyślnej"},
        {argument: "-g", description: "Otworzy plik w domyślnej aplikacji dla danej kategorii"},
        {argument: "-h", description: "Wyświetla pomoc dla komendy"},
        {argument: "-v", description: "Wyświetla wersję komendy"},
    ]},
    {command: "pushd", description: "Służy do zmiany bieżącego katalogu roboczego i jednoczesnego umieszczenia obecnego katalogu na stosie", category: "file", example: "pushd /path/to/katalog", option:[
        {argument: "-n", description: "Dodaje nowy katalog na stos bez zmiany katalogu"},
    ]},
    {command: "popd", description: "Służy do usuwania zapisanej ścieżki katalogu z listy zapisanych ścieżek", category: "file", example: "popd /path/to/folder"},
    {command: "crontab", description: "Służy do definiowania harmonogramu wykonywania określonych zadań automatycznych", category: "system", example: "crontab -e", option:[
        {argument: "-e", description: "Otwiera plik crontab w edytorze tekstowym"},
        {argument: "-l", description: "Wyświetla aktualny harmonogram zadań dla bieżącego użytkownika"},
        {argument: "-r", description: "Usuwa cały harmonogram zadań dla bieżącego użytkownika"},
        {argument: "-u [user]", description: "Umożliwia zarządzanie harmonogramem zadań innego użytkownika"},
    ]},
    {command: "awk", description: "Narzędzie służącym do przetwarzania i wyświetlania tekstu", category: "tools", example: "awk '{print}' example.txt", option:[
        {argument: "-F", description: "Określa separator pól"},
        {argument: "-v", description: "Pozwala na przypisywanie wartości zmiennej awk w czasie wykonania"},
        {argument: "-f", description: "Umożliwia wczytanie skryptu z zewnętrznego pliku"},
        {argument: "-i", description: "Dokonuje zmian bezpośrednio w pliku wejściowym"},
    ]},
    {command: "ssh", description: "Służy do nawiązywania bezpiecznego połączenia sieciowego z innym komputerem za pośrednictwem protokołu SSH", category: "network tools", example: "ssh user@host", option:[
        {argument: "-4", description: "Umożliwia wymuszenie użycia protokołu IPv4"},
        {argument: "-6", description: "Umożliwia wymuszenie użycia protokołu IPv6"},
        {argument: "-A", description: "Włącza autentykację agenta SSH"},
        {argument: "-C", description: "Włącza kompresję danych na poziomie transmisji"},
        {argument: "-D", description: "Przekierowuje ruch z lokalnego portu na zdalny port"},
        {argument: "-F", description: "Określa plik konfiguracyjny SSH"},
        {argument: "-L", description: "Określa przekierowania portów"},
        {argument: "-N", description: "Wyłącza zdalny shell"},
        {argument: "-P", description: "Określa numer portu SSH"},
        {argument: "-Q", description: "Wyłącza wypisywanie komunikatów diagnostycznych"},
        {argument: "-T", description: "Tworzy pseudoterminal"},
        {argument: "-V", description: "Wyświetla szczegółowe informacje o wersji SSH"},
        {argument: "-X", description: "Włącza pokazywanie X11"},
    ]},
    {command: "scp", description: "Służy do kopiowania plików między komputerami zdalnymi z wykorzystaniem protokołu SSH", category: "network tools", example: "scp example.txt user@host:path", option:[
        {argument: "-r", description: "Kopiuje katalogi i ich zawartość rekurencyjnie"},
        {argument: "-P", description: "Ustawia inny numer portu dla połączenia SSH"},
        {argument: "-q", description: "Tryb cichy, wyłącza wyświetlanie informacji o procesie kopiowania"},
        {argument: "-C", description: "Włącza kompresję podczas przesyłania plików"},
        {argument: "-i", description: "Umożliwia określenie niestandardowego pliku klucza prywatnego"},
        {argument: "-p", description: "Zachowuje daty modyfikacji"},
        {argument: "-v", description: "Wyświetla szczegółowe informacje o procesie kopiowania"},
    ]},
    {command: "sed", description: "Służy do przetwarzania tekstu", category: "file", example: "sed 's/kot/pies/g' example.txt", option:[
        {argument: "-e", description: "Pozwala na wykorzystanie wielu poleceń sed w jednym wywołaniu"},
        {argument: "-f", description: "Umożliwia wczytanie polecenia z pliku"},
        {argument: "-i", description: "Pozwala na edycję pliku w miejscu , zamiast wyświetlania wyniku na ekranie"},
        {argument: "-n", description: "Wyłącza domyślne zachowanie sed, polega na wyświetlaniu każdej linii pliku na ekranie"},
    ]},
    {command: "rsync", description: "Narzędzie służące do synchronizacji plików między dwoma lokalizacjami", category: "file", example: "rsync -avh /path/to/source /path/to/destiantion", option:[
        {argument: "-a", description: "Zapewnia zachowanie atrybutów plików"},
        {argument: "-v", description: "Wyświetla szczegółowe informacje dotyczące postępu synchronizacji plików"},
        {argument: "-h", description: "Wyświetla wynik w formacie czytelnym dla użytkownika"},
        {argument: "-z", description: "Używa kompresji podczas transferu plików przez sieć"},
        {argument: "-e", description: "Pozwala na określenie niestandardowego polecenia do wykorzystania jako protokół zdalnego połączenia np. SSH"},
    ]},
    {command: "su", description: "Służy do zmiany aktualnie zalogowanego użytkownika na innego użytkownika lub na konto administratora", category: "system", example: "su", option:[
        {argument: "-c", description: "Umożliwia wykonywanie jednego polecenia w trybie root"},
        {argument: "-l", description: "Umożliwia zalogowanie się jako root z resetowaniem środowiska użytkownika"},
        {argument: "-m", description: "Umożliwia zachowanie bieżącego środowiska użytkownika po zalogowaniu jako użytkownik root"},
        {argument: "-s", description: "Umożliwia uruchomienie innej powłoki niż domyślna po zalogowaniu jako użytkownik root"},
        {argument: "-u [user]", description: "Umożliwia wykonanie polecenia jako inny użytkownik niż root"},
    ]},
    {command: "chmod", description: "Służy do zmiany uprawnień dostępu do plików i katalogów", category: "right", example: "chmod 777 example.txt", option:[
        {argument: "-r", description: "Zmiana uprawnień dla plików rekurencyjnie"},
        {argument: "-v", description: "Wyświetlanie informacji o dodatkowych zmianach"},
        {argument: "-c", description: "Wyświetla informacje tylko o plikach, których uprawnienia zostaną zmienione"},
        {argument: "-u", description: "Zmienia uprawnienia dla właściciela"},
        {argument: "-g", description: "Zmienia uprawnienia dla grupy"},
        {argument: "-o", description: "Zmienia uprawnienia dla innych użytkowników"},
        {argument: "+/-", description: "Dodaje lub usuwa określony rodzaj uprawnienia"},
    ]},
    {command: "chown", description: "Służy do zmiany właściciela pliku lub katalogu", category: "right", example: "chown user example.txt", option:[
        {argument: "-R", description: "Zmienia właściciela wszystkich plików i katalogów rekurencyjnie"},
        {argument: "-v", description: "Wyświetla szczegółowe informacje o każdej zmianie właściciela"},
        {argument: "-c", description: "Wyświetla informacje tylko o zmianach właściciela, które faktycznie zostały dodane"},
        {argument: "-h", description: "Zmienia właściciela tylko dla dowiązań symbolicznych"},
    ]},
    {command: "chgrp", description: "Służy do zmiany właściciela grupy plików lub katalogów", category: "right", example: "chgrp group example.txt", option:[
        {argument: "-R", description: "Zmienia właściciela grupy plików rekursywnie"},
        {argument: "--dereference", description: "Zmienia właściciela grupy pliku symbolicznego na właściciela grupy docelowego pliku"},
    ]},
    {command: "userdel", description: "Służy do usuwania użytkowników z systemu", category: "user administration", example: "userdel user", option: [
        {argument: "-f", description: "Wymusza usunięcie użytkownika, nawet jeśli użytkownik ma działające procesy"},
        {argument: "-r", description: "Usuwa również katalog domowy użytkownika i wszystko co się w nim znajduje"}
    ]},
    {command: "uniq", description: "Służy do filtrowania powtarzających się linii w plikach tekstowych.", category: "system", example: "uniq example.txt", option: [
        {argument: "-c", description: "Wyświetla liczbę wystąpień danej linii"},
        {argument: "-d", description: "Wyświetla tylko linie, które powtarzają się w pliku"},
        {argument: "-i", description: "Ignoruje wielkość liter podczas porównywania linii"},
        {argument: "-u", description: "Wyświetla tylko unikalne linie"},
        {argument: "-w n", description: "Pomija pierwszych n znaków każdej linii przed porównaniem"},
        {argument: "-s n", description: "Porównuje tylko pierwszych n znaków każdej linii"},
    ]},
    {command: "groupdel", description: "Służy do usuwania grupy użytkowników z systemu", category: "user administration", example: "sudo groupdel group", option: [
        {argument: "-f", description: "Przymusza usunięcie grupy, nawet jeśli wciąż istnieją użytkownicy należący do niej"},
        {argument: "-h", description: "Wyświetla krótką pomoc dla polecenia"},
        {argument: "-R", description: "Określa katalog główny, który zostanie użyty jako punkt początkowy zamiast domyślnego katalogu"},
        {argument: "-v", description: "Wyświetla szczegółowe informacje na temat usuwanej grupy"},
    ]},
    {command: "groupadd", description: "Służy do tworzenia nowych grup użytkowników", category: "user administration", example: "sudo groupadd group", option: [
        {argument: "-g", description: "Określa numer identyfikacyjny GID dla nowej grupy"},
        {argument: "-K", description: "Pozwala na ustawianie dodatkowych opcji konfiguracyjnych dla grupy"},
        {argument: "-o", description: "Pozwala na utworzenie grupy o numerze GID, który istnieje w systemie"},
        {argument: "-r", description: "Tworzy grupę systemową, która jest używana do zarządzania usługami i aplikacjami w systemie"},
        {argument: "-h", description: "Wyświetla pomoc dla komendy"},
        {argument: "-v", description: "Wyświetla informacje o wersji komendy"},
    ]},
    {command: "groups", description: "Służy do zarządzania grupami użytkowników", category: "user administration", example: "group", option: [
        {argument: "-g", description: "Wyświetla ID grupy"},
        {argument: "-n", description: "Wyświetla nazwę grupy"},
        {argument: "-r", description: "Wyświetla tylko grupy systemowe"},
    ]},
    {command: "sort", description: "Służy do sortowania zawartości plików według określonych kryteriów", category: "system", example: "sort -n -k 2 example.txt", option: [
        {argument: "-n", description: "Sortowanie, które porządkuje według kolejności alfabetycznej, nie biorąc pod uwagę wartości liczbowych"},
        {argument: "-k", description: "Określa numer kolumny, według której sortowanie ma zostać wykonane"},
        {argument: "-r", description: "Zmienia porządek sortowania. Sortuje malejąco a nie rosnąco"},
        {argument: "-f", description: "Ignoruje wielkość liter"},
        {argument: "-u", description: "Usuwa powtarzające się linie"},
        {argument: "-t", description: "Określa separator pól"},
        {argument: "-c", description: "Sprawdza czy plik jest posortowany. Nie wykonuje sortowania"},
        {argument: "-o", description: "Określa nazwę pliku wyjściowego"},
    ]},
    {command: "cmp", description: "Służy do porównywania dwóch plików bit po bicie", category: "file", example: "cmp example1.txt example2.txt", option: [
        {argument: "-b", description: "Porównuje pliki w trybie binarnym. Porównuje każdy bajt"},
        {argument: "-i", description: "Ustawia początkową pozycję porównania"},
        {argument: "-l", description: "Wyświetla wynik w formacie wpisujący mpozycję pierwszej różnicy i wartości w każdym pliku"},
        {argument: "-s", description: "Nie wyświetla żadnych informacji na temat różnic między plikami, a jedynie zwraca informację czy są identyczne"},
    ]},
    {command: "diff", description: "Służy do porównywania zawartości dwóch plików i wyświetlania różnic między nimi", category: "file", example: "diff example1.txt example2.txt", option: [
        {argument: "-q", description: "Wyświetla informację czy pliki są identyczne"},
        {argument: "-r", description: "Porównuje zawartość katalogów i ich podkatalogów rekursywnie"},
        {argument: "-u", description: "Wyświetla różnicę w formacie jednolitym, ułatwia czytanie wyników porównywania"},
        {argument: "-i", description: "Ignoruje różnice w wielkości liter"},
        {argument: "-w", description: "Ignoruje różnice w białych znakach"},
        {argument: "-B", description: "Ignoruje różnice w pustych liniach"},
        {argument: "-c", description: "Wyświetla różnicę w formacie kontekstowym, ułatwia czytanie wyników porównywania"},
    ]},
    {command: "adduser", description: "Służy do dodawania nowych użytkowników do systemu", category: "user administration", example: "adduser user", option: [
        {argument: "-c", description: "Umożliwiający dodanie opisu użytkownika"},
        {argument: "-d", description: "Określa katalog domowy nowego użytkownika"},
        {argument: "-g", description: "Określa identyfikator grupy, do której należy nowy użytkownik"},
        {argument: "-s", description: "Określa powłokę, którą będzie używał nowy użytkownik"},
        {argument: "-m", description: "Umożliwiający automatyczne utworzenie katalogu domowego dla nowego użytkownika"},
        {argument: "-u", description: "Umożliwiający określenie identyfikatora użytkownika dla nowego użytkownika"},
    ]},
    {command: "users", description: "Wyświetla listę zalogowanych użytkowników na danym systemie", category: "user administration", example: "users"},
    {command: "clear", description: "Służy do wyczyszczenia terminala, czyli usunięcia wcześniejszych poleceń i wyników z jego widoku", category: "system", example: "clear", option: [
        {argument: "-x", description: "Czyści tylko ekran, pozostawiając historię poleceń w buforze."},
        {argument: "-T", description: "Określa typ terminala, który ma zostać wyczyszczony"},
        {argument: "-h", description: "Wyświetla pomoc dla komendy"},
    ]},
    {command: "sudo", description: "Służy do wykonania polecenia jako użytkownik z uprawnieniami administratora", category: "system", example: "sudo ls",  option: [
        {argument:"-u", description: "Uruchamia polecenie jako inny użytkownik"},
        {argument:"-s", description: "Uruchamia powłokę jako root"},
        {argument:"-i", description: "Wykonuje polecenie jako użytkownik root, ale z pełnymi zmiennymi środowiskowymi"},
        {argument:"-l", description: "Wyświetla listę uprawnień użytkownika, w tym listę poleceń, które może wykonywać"},
    ]},
    {command: "ls", description: "Służy do wyświetlania zawartości katalogu", category: "system", example: "ls", option: [
        {argument:"-a", description: "Wyświetla wszystkie pliki, włącznie z ukrytymi"},
        {argument:"-c", description: "Wyświetla listę plików i katalogów w formie kolumn"},
        {argument:"-d", description: "Wyświetla tylko nazwę katalogu, a nie jego zawartość"},
        {argument:"-f", description: "Dodaje symbol końca nazwy dla plików i katalogów"},
        {argument:"-h", description: "Wyświetla rozmiar plików w czytelnej dla człowieka formie"},
        {argument:"-i", description: "Wyświetla numer i-węzła każdego pliku"},
        {argument:"-l", description: "Wyświetla szczegółowe informacje o plikach i katalogach"},
        {argument:"-m", description: "Wyświetla listę plików i katalogów oddzieloną przecinkami"},
        {argument:"-n", description: "Wyświetla identyczne informacje jak -l, ale zamiast nazwy właściciela i grupy wyświetla ich numery identyfikacyjne"},
        {argument:"-p", description: "Dodaje symbol końca nazwy tylko dla katalogów"},
        {argument:"-q", description: "Wyświetla nazwy plików i katalogów w cudzysłowach, aby uniknąć problemów z nazwami zawierającymi spacje lub znaki specjalne"},
        {argument:"-r", description: "Odwraca kolejność wyświetlania wyniku"},
        {argument:"-s", description: "Wyświetla rozmiar każdego pliku w blokach dyskowych"},
        {argument:"-t", description: "Sortuje wynik wg czasu modyfikacji plików, od najnowszych do najstarszych"},
        {argument:"-u", description: "Sortuje wynik wg czasu ostatniego dostępu do plików, a nie czasu modyfikacji"},
        {argument:"-x", description: "Wyświetla listę plików i katalogów w formie wierszy"},
    ]},
    {command: "grep", description: "Służy do wyszukiwania wzorców w plikach tekstowych", category: "tools", example: "grep 'Linux' example.txt", option: [
        {argument: "-e", description: "Wyszukuje tekst w plikach (użycie rozszerzonych wyrażeń regularnych)"},
        {argument: "-f", description: "Wyszukuje tekst w plikach (dopasowywanie dowolnego z wielu ciągów jednocześnie)"},
        {argument: "-r", description: "Wyszukuje tekst w plikach (rekursywne wyszukiwanie plików w katalogu)"}
    ]},
    {command: "cut", description: "Służy do wycinania i wyodrębniania określonych części wierszy z plików tekstowych lub strumieni danych", category: "tools", example: "cut -d' ' -f2 example.txt", option:[
        {argument: "-d", description: "Pozwala na ustawienie separatora pól"},
        {argument: "-f", description: "Pozwala na wybranie określonych pól (kolumn) do wyodrębnienia"},
        {argument: "-c", description: "Pozwala na wyodrębnienie określonych znaków z każdego wiersza"},
        {argument: "-s", description: "Pozwala na wyodrębnienie tylko tych pól, które zawierają separator"},
        {argument: "-n", description: "Uniemożliwia tworzenie pliku kopii zapasowej"},
    ]}
]

const table_windows = [
    {command: "cls", description: "czyści ekran", category: "terminal"},
    {command: "sudo", description: "Daje zmienia uprawnienia na administratora", category: "terminal"},
    {command: "ls", description: "Listuje katalogi", category: "catalogs", option: [
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
    let has_option = table_linux[index].hasOwnProperty('option')
    if(has_option){
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
    let has_option = table_linux[index].hasOwnProperty('option')
    if(has_option){
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