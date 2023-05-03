const table_windows = [{
    "command": "assoc",
    "description": "Służy do przypisywania lub wyświetlania skojarzeń rozszerzeń plików z programami, które obsługują te pliki",
    "category": "system",
    "example": "assoc .txt=txtfile",
    "option": [{
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy"
        },
        {
            "argument": ".extension",
            "description": "Określa rozszerzenie nazwy pliku"
        },
        {
            "argument": ".extension = filetype",
            "description": "Określa typ pliku do skojarzenia z określonym rozszerzeniem nazwy pliku"
        }
    ]
},
{
    "command": "attrib",
    "description": "Służy do wyświetla, ustawia lub usuwa atrybutów przypisanych do plików lub katalogów",
    "category": "system",
    "example": "attrib example.txt",
    "option": [{
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy"
        },
        {
            "argument": "+/-",
            "description": "Ustawia '+' lub czyści '-' atrybut pliku"
        },
        {
            "argument": "r",
            "description": "Atrybut pliku tylko do odczytu"
        },
        {
            "argument": "a",
            "description": "Atrybut pliku archiwum"
        },
        {
            "argument": "s",
            "description": "Atrybut pliku systemowego"
        },
        {
            "argument": "h",
            "description": "Atrybut pliku ukrytego"
        },
        {
            "argument": "i",
            "description": "Atrybut pliku bez indeksowania zawartości"
        }
    ]
},
{
    "command": "break",
    "description": "Służy do ustawiania lub czyśczenia rozszerzone sprawdzanie CTRL+C",
    "category": "system",
    "example": "break"
},
{
    "command": "bcdedit",
    "description": "Umożliwia użytkownikowi wyświetlanie, modyfikowanie i usuwanie wpisów w bazie danych konfiguracji rozruchowej",
    "category": "tools",
    "example": "bcdedit",
    "option": [{
            "argument": "/create",
            "description": "Umożliwia utworzenie nowego wpisu w bazie danych konfiguracji rozruchowej"
        },
        {
            "argument": "/set",
            "description": "Umożliwia modyfikację wartości wpisu w bazie danych konfiguracji rozruchowej"
        },
        {
            "argument": "/delete",
            "description": "Umożliwia modyfikację wartości wpisu w bazie danych konfiguracji rozruchowej"
        },
        {
            "argument": "/enum",
            "description": "Wyświetla wszystkie wpisy w bazie danych konfiguracji rozruchowej"
        },
        {
            "argument": "/default",
            "description": "Określa identyfikator wpisu, który ma być użyty jako domyślny podczas rozruchu systemu"
        },
        {
            "argument": "/tiemout",
            "description": "Określa czas oczekiwania w sekundach przed automatycznym uruchomieniem domyślnego wpisu"
        },
        {
            "argument": "/nx",
            "description": "Określa ustawienia zabezpieczeń wykonania pamięci"
        },
        {
            "argument": "/safeboot",
            "description": "Określa tryb uruchamiania systemu w przypadku awarii"
        },
        {
            "argument": "/device",
            "description": "Określa urządzenie, które ma być użyte podczas uruchamiania systemu"
        },
        {
            "argument": "/debug",
            "description": "Określa ustawienia debugowania systemu"
        }
    ]
},
{
    "command": "cacls",
    "description": "Służy do zarządzania uprawnieniami dostępu do plików i folderów",
    "category": "tools",
    "example": "cacls path/example.txt",
    "option": [{
            "argument": "/t",
            "description": "Stosuje zmiany na wszystkich plikach i folderach w danym katalogu i jego podkatalogach"
        },
        {
            "argument": "/e",
            "description": "Zmienia uprawnienia, nie usuwając przy tym dotychczasowych ustawień"
        },
        {
            "argument": "/c",
            "description": "Kontynuuje działanie polecenia, nawet gdy napotka błędy"
        },
        {
            "argument": "/g [user]:[permission]",
            "description": "Nadaje podanemu użytkownikowi określone uprawnienia"
        },
        {
            "argument": "/r [user]",
            "description": "usuwa podanego użytkownika z listy uprawnień"
        },
        {
            "argument": "/p [user]:[permission]",
            "description": "Nadaje podanemu użytkownikowi określone uprawnienia, zachowując dotychczasowe uprawnienia"
        },
        {
            "argument": "/d [user]:[permission]",
            "description": "Nadaje domyślne uprawnienia danemu użytkownikowi"
        },
        {
            "argument": "/s",
            "description": "Stosuje zmiany do podkatalogów"
        }
    ]
},
{
    "command": "call",
    "description": "Służy do wywoływania jednego pliku wsadowego z innego pliku wsadowego lub z linii poleceń",
    "category": "system",
    "example": "call path/example.bat",
    "option": [{
            "argument": "/b",
            "description": "Pozwala na przerwanie wykonywania bieżącego pliku wsadowego i wykonanie polecenia w pliku wsadowym wywołanym przez komendę"
        },
        {
            "argument": "/d",
            "description": "Ustawia flagę związane z debagowaniem plików wsadowych"
        },
        {
            "argument": "/t",
            "description": "Pozwala na przekazanie czasu oczekiwania w milisekundach na zakończenie wykonywania wywołanego pliku wsadowego"
        },
        {
            "argument": "/v",
            "description": "Pozwala na włączenie rozszerzonego wyjścia"
        },
        {
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy"
        }

    ]
},
{
    "command": "cd",
    "description": "Służy do zmiany bieżącego katalogu roboczego",
    "category": "system",
    "example": "cd Folder",
    "option": [{
            "argument": "/d",
            "description": "Pozwala na zmianę dysku oraz katalogu"
        },
        {
            "argument": "/?",
            "description": "c"
        },
        {
            "argument": "./",
            "description": "Odnoszą się do bieżącego katalogu"
        },
        {
            "argument": "../",
            "description": "Pozwala na przejście do katalogu nadrzędnego"
        }
    ]
},
{
    "command": "chcp",
    "description": "Służy do zmiany kodowania znaków używanego przez konsolę",
    "category": "system",
    "example": "chcp 1252",
    "option": [{
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy"
        },
        {
            "argument": "[code]",
            "description": "Zmienia kodowanie konsoli na podane kodowanie. Domyślne jest kodowanie 1252"
        }
    ]
},
{
    "command": "chdir",
    "description": "Służy do zmiany bieżącego katalogu roboczego w wierszu poleceń",
    "category": "system",
    "example": "chdir"
},
{
    "command": "chkdsk",
    "description": "Narzędzie służące do sprawdzania integralności systemu plików oraz wykrywania błędów na dysku twardym",
    "category": "tools",
    "example": "chkdsk C:",
    "option": [{
            "argument": "/f",
            "description": "Naprawia automatycznie znalezione błędy na dysku"
        },
        {
            "argument": "/r",
            "description": "Znajduje uszkodzone sektory i przydziela im nowe miejsce"
        },
        {
            "argument": "/x",
            "description": "Wwymusza wyłączenie dysku przed jego sprawdzeniem"
        },
        {
            "argument": "/v",
            "description": "Wyświetla szczegółowe informacje o postępie procesu sprawdzania dysku"
        },
        {
            "argument": "/b",
            "description": "Sprawdza sektory uruchomieniowe na dysku i naprawia ich błędy"
        },
        {
            "argument": "/scan",
            "description": "Skanuje dysk, ale nie naprawia znalezionych błędów"
        },
        {
            "argument": "/spotfix",
            "description": "Naprawia tylko wybrane błędy na dysku, bez skanowania całego dysku"
        }
    ]
},
{
    "command": "chkntfs",
    "description": "Służy do sprawdzania, czy wolumin wymaga sprawdzenia spójności przy uruchamianiu systemu",
    "category": "tools",
    "example": "chkntfs C:",
    "option": [{
            "argument": "/c",
            "description": "Wyłącza sprawdzanie dysku podczas uruchamiania systemu"
        },
        {
            "argument": "/x",
            "description": "Wyłącza sprawdzanie określonego wolumenu podczas następnego uruchomienia systemu"
        },
        {
            "argument": "/b",
            "description": "Sprawdza tylko poprawność boot sektora"
        },
        {
            "argument": "/v",
            "description": "Wyświetla nazwę woluminu na początku sprawdzania"
        }
    ]
},
{
    "command": "cls",
    "description": "Służy do czyszczenia ekranu konsoli, usuwając wszystkie wcześniej wyświetlone wiersze",
    "category": "system",
    "example": "cls"
},
{
    "command": "cmd",
    "description": "Narzędzie, które pozwala na wykonywanie różnych zadań na komputerze za pomocą wiersza poleceń",
    "category": "system",
    "example": "cmd",
    "option": [{
            "argument": "/c",
            "description": "Pozwala na wykonanie polecenia i natychmiastowe zamknięcie wiersza poleceń"
        },
        {
            "argument": "/k",
            "description": "Pozwala na wykonanie polecenia i pozostawienie otwartego wiersza poleceń"
        },
        {
            "argument": "/r",
            "description": "Pozwala na wykonanie polecenia, a następnie zrestartowanie komputera"
        },
        {
            "argument": "/s",
            "description": "Pozwala na wykonanie polecenia i zamknięcie komputera"
        },
        {
            "argument": "/t [time]",
            "description": "Pozwala na ustawienie czasu oczekiwania w sekundach przed wykonaniem polecenia"
        }
    ]
},
{
    "command": "color",
    "description": "Służy do zmiany koloru tła i tekstu w oknie wiersza polecenia",
    "category": "system",
    "example": "color 1F",
    "option": [{
            "argument": "0-9",
            "description": "Cyfry określają kolory tła"
        },
        {
            "argument": "A-F",
            "description": "Litery określają kolory tekstu"
        },
        {
            "argument": "/t",
            "description": "Wyświetla informacje o bieżącym kolorze tekstu i tła"
        },
        {
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy"
        }
    ]
},
{
    "command": "comp",
    "description": "Służy do porównywania zawartości dwóch plików lub katalogów",
    "category": "tools",
    "example": "comp path/example1.txt path/example2.txt",
    "option": [{
            "argument": "/a",
            "description": "Porównuje pliki jako pliki tekstowe ASCII"
        },
        {
            "argument": "/b",
            "description": "Porównuje pliki jako pliki binarne"
        },
        {
            "argument": "/c",
            "description": "Przerywa porównywanie po pierwszym znalezieniu różnicy"
        },
        {
            "argument": "/d",
            "description": "Wyświetla różnice między plikami"
        },
        {
            "argument": "/l",
            "description": "Porównuje pliki bez uwzględniania wielkości liter"
        },
        {
            "argument": "/n",
            "description": "Porównuje pliki bez uwzględniania liczby linii"
        },
        {
            "argument": "/u",
            "description": "Porównuje pliki, ale ignoruje różnice w końcach wierszy"
        },
        {
            "argument": "/w",
            "description": "Porównuje pliki bez uwzględniania białych znaków"
        }
    ]
},
{
    "command": "compact",
    "description": "Służy do kompresowania plików i folderów w celu zaoszczędzenia miejsca na dysku",
    "category": "tools",
    "example": "compact /c path/folder",
    "option": [{
            "argument": "/c",
            "description": "Kompresuje plik lub katalog"
        },
        {
            "argument": "/u",
            "description": "Rozpakowuje skompresowany plik lub folder"
        },
        {
            "argument": "/s",
            "description": "Kompresuje pliki w podkatalogach"
        },
        {
            "argument": "/i",
            "description": "Ignoruje pliki skompresowane wcześniej"
        },
        {
            "argument": "/f",
            "description": "Wymusza kompresję plików tylko wtedy, gdy oszczędność miejsca wynosi co najmniej 5%"
        },
        {
            "argument": "/q",
            "description": "Wyłącza wyświetlanie podsumowania"
        },
        {
            "argument": "/exe",
            "description": "Kompresuje pliki wykonywalne (.exe) i biblioteki DLL"
        }
    ]
},
{
    "command": "convert",
    "description": "Służy do konwersji systemu plików na dyskach twardych lub innych urządzeniach pamięci",
    "category": "system",
    "example": "convert D:/FS:NFTS",
    "option": [{
            "argument": "/FS:NFTS",
            "description": "Umożliwia wybranie docelowego systemu plików. W tym przypadku NFTS"
        },
        {
            "argument": "/FS:FAT",
            "description": "umożliwia wybranie docelowego systemu plików. W tym przypadku FAT"
        },
        {
            "argument": "/x",
            "description": "Wymusza wyłączenie systemu plików na dysku przed rozpoczęciem konwersji"
        },
        {
            "argument": "/c",
            "description": "Kompresuje pliki podczas konwersji"
        },
        {
            "argument": "/u",
            "description": "Umożliwia anulowanie ostatniej operacji konwersji"
        },
        {
            "argument": "/debug",
            "description": "Umożliwia wyświetlanie szczegółowych informacji o procesie konwersji"
        }
    ]
},
{
    "command": "copy",
    "description": "Służy do kopiowania plików z jednej lokalizacji do innej",
    "category": "system",
    "example": "copy C:/folder/example.txt D:/Folder",
    "option": [{
            "argument": "/d",
            "description": "Kopiuje tylko te pliki, które różnią się czasem modyfikacji lub rozmiarem w porównaniu z plikami docelowymi"
        },
        {
            "argument": "/y",
            "description": "Nie pyta o potwierdzenie kopiowania, jeśli plik docelowy już istnieje i zostanie nadpisany"
        },
        {
            "argument": "/z",
            "description": "Kopiuje pliki w trybie odzyskiwania"
        },
        {
            "argument": "/a",
            "description": "Kopiuje tylko te pliki, które mają ustawiony atrybut archiwum, a następnie zdejmuje ten atrybut z tych plików"
        },
        {
            "argument": "/v",
            "description": "Weryfikuje każdy skopiowany plik za pomocą sumy kontrolnej CRC"
        }
    ]
},
{
    "command": "date",
    "description": "Służy do wyświetlania i modyfikowania daty systemowej",
    "category": "system",
    "example": "date",
    "option": [{
            "argument": "/t",
            "description": "Wyświetla bieżącą godzinę"
        },
        {
            "argument": "/u",
            "description": "Wyświetla datę w formacie UTC+0"
        },
        {
            "argument": "/p",
            "description": "Wymusza natychmiastowe wyświetlanie nowej daty bez konieczności potwierdzania przez użytkownika"
        }
    ]
},
{
    "command": "del",
    "description": "Służy do usuwania plików lub folderów z systemu",
    "category": "system",
    "example": "del example.txt",
    "option": [{
            "argument": "/f",
            "description": "Usuwa pliki z systemu bez potwierdzenia przez użytkownika"
        },
        {
            "argument": "/p",
            "description": "Usuwa puste foldery i podkatalogi"
        },
        {
            "argument": "/q",
            "description": "Komenda nie będzie wyświetlać żadnych komunikatów"
        },
        {
            "argument": "/s",
            "description": "Usuwa pliki z określonego folderu oraz wszystkie pliki z podfolderów"
        }
    ]
},
{
    "command": "dir",
    "description": "Służy do wyświetlania zawartości katalogu",
    "category": "system",
    "example": "dir",
    "option": [{
            "argument": "/p",
            "description": "Wyświetla zawartość katalogu strona po stronie"
        },
        {
            "argument": "/w",
            "description": "Wyświetla zawartość katalogu w formie tabeli"
        },
        {
            "argument": "/s",
            "description": "Wyświetla zawartość katalogu wraz z zawartością wszystkich podkatalogów"
        },
        {
            "argument": "/b",
            "description": "Wyświetla tylko nazwy plików i folderów, bez dat i rozmiarów"
        },
        {
            "argument": "/a",
            "description": "Wyświetla ukryte pliki i foldery"
        }
    ]
},
{
    "command": "diskpart",
    "description": "Narzędzie, które słuzy do zarządzania dyskami i partycjami",
    "category": "disk tools",
    "example": "diskpart",
    "option": [{
            "argument": "list disk",
            "description": "Wyświetla listę wszystkich dysków w systemie oraz ich rozmiar i status"
        },
        {
            "argument": "select disk [number]",
            "description": "Wybiera dysk o numerze podanym jako argument, który jest numerem dysku"
        },
        {
            "argument": "clean",
            "description": "Czyści dysk, usuwając wszystkie partycje i dane"
        },
        {
            "argument": "create partition primary",
            "description": "Tworzy nową podstawową partycję na wybranym dysku"
        }
    ]
},
{
    "command": "doskey",
    "description": "Narzędzie, które umożliwia użytkownikowi definiowanie, edytowanie oraz wywoływanie skrótów klawiszowych dla poleceń",
    "category": "system",
    "example": "doskey ls=dir",
    "option": [{
            "argument": "/?",
            "description": "Wyświetla pomoc dla komendy doskey"
        },
        {
            "argument": "/macros",
            "description": "Wyświetla listę zdefiniowanych skrótów klawiszowych"
        },
        {
            "argument": "/reinstall",
            "description": "Przywraca domyślne skróty klawiszowe"
        },
        {
            "argument": "/listsize=[number]",
            "description": "Określa maksymalną liczbę zdefiniowanych skrótów klawiszowych, które mogą być wyświetlane na ekranie"
        },
        {
            "argument": "/history",
            "description": "Wyświetla historię wprowadzonych poleceń"
        },
        {
            "argument": "/insert",
            "description": "Umożliwia wstawianie znaków w trakcie wprowadzania skrótu klawiszowego"
        },
        {
            "argument": "/exename=exe",
            "description": "Definiuje skrót klawiszowy, który uruchamia określoną aplikację lub plik wykonywalny"
        }
    ]
},
{
    "command": "drivequery",
    "description": "Umożliwia użytkownikowi uzyskanie informacji o dyskach twardych lub urządzeniach przenośnych podłączonych do komputera",
    "category": "system",
    "example": "drivequery",
    "option": [{
            "argument": "/V",
            "description": "Wyświetla szczegółowe informacje o urządzeniach przenośnych, takie jak pojemność, liczba partycji, typ systemu plików i inne"
        },
        {
            "argument": "/S",
            "description": "Wyświetla informacje o dyskach twardych, które są połączone z komputerem przez sieć"
        },
        {
            "argument": "/F0 [format]",
            "description": "Umożliwia użytkownikowi określenie formatu wyjściowego. Dostępne formaty to: TABLE, LIST, CSV, oraz JSON"
        }
    ]
},
{
    "command": "echo",
    "description": "Służy do wyświetlania tekstu lub zmiennej w wierszu poleceń",
    "category": "system",
    "example": "echo Hello World!"
},
{
    "command": "endlocal",
    "description": "Kończy lokalną obsługę zmiennych środowiskowych, która została rozpoczęta za pomocą polecenia setlocal",
    "category": "system",
    "example": "setlocal"
},
{
    "command": "erase",
    "description": "Służy do usuwania plików z dysku twardego lub innych urządzeń pamięci masowej",
    "category": "disk tools",
    "example": "erase [path to file]",
    "option": [{
            "argument": "filename",
            "description": "Nazwa pliku lub wzorzec nazw plików, które mają zostać usunięte. W przypadku podania wzorca, zostaną usunięte wszystkie pliki, które spełniają ten wzorzec"
        },
        {
            "argument": "/F",
            "description": "Wymusza usunięcie pliku bez potwierdzenia"
        },
        {
            "argument": "/P",
            "description": "Wykonuje multipleksowanie zapisu, aby uniemożliwić odzyskanie plików"
        }
    ]
},
{
    "command": "exit",
    "description": "Służy do zakończenia bieżącej sesji w konsoli systemu operacyjnego",
    "category": "system",
    "example": "exit",
    "option": [{
        "argument": "/B",
        "description": "Przy użyciu tego argumentu zamiast kończyć proces CMD.exe, tylko zamknie okno konsoli"
    }, {
        "argument": "/C",
        "description": "Ten argument spowoduje wykonanie polecenia i następnie zamknie konsolę"
    }, {
        "argument": "/K",
        "description": "Ten argument spowoduje wykonanie polecenia i nie zamknie konsoli"
    }]
},
{
    "command": "fc",
    "description": "Służy do porównywania zawartości dwóch plików tekstowych",
    "category": "tools",
    "example": "fc plik1.txt plik2.txt",
    "option": [{
        "argument": "/a",
        "description": "Porównuje pliki w trybie binarnym"
    }, {
        "argument": "/c",
        "description": "Porównuje tylko znaki ASCII"
    }, {
        "argument": "/l",
        "description": "Ignoruje wielkość liter"
    }, {
        "argument": "/lb",
        "description": "Ignoruje końce wierszy"
    }, {
        "argument": "/n",
        "description": "Wyświetla numer linii, które się różnią"
    }, {
        "argument": "/t",
        "description": "Ignoruje znaki tabulacji"
    }, {
        "argument": "/u",
        "description": "Porównuje pliki jako Unicode"
    }]
},
{
    "command": "find",
    "description": "Służy do wyszukiwania określonego tekstu w plikach tekstowych",
    "category": "tools",
    "example": "find `szukany tekst` example.txt",
    "option": [{
        "argument": "/i",
        "description": "Pozwala na wyszukanie tekstu bez uwzględnienia wielkości liter"
    }, {
        "argument": "/s",
        "description": "Pozwala na przeszukiwanie plików we wskazanym katalogu oraz w jego podkatalogach"
    }, {
        "argument": "/c",
        "description": "Pozwala na zliczanie liczby wystąpień tekstu w pliku lub plikach"
    }]
},
{
    "command": "findstr",
    "description": "Narzędzie służące do wyszukiwania określonego tekstu w plikach tekstowych",
    "category": "system",
    "example": "findstr /s /i 'example' *.txt",
    "option": [{
        "argument": "/s",
        "description": "Przeszukuje pliki w bieżącym katalogu i podkatalogach"
    }, {
        "argument": "/i",
        "description": "Ignoruje wielkość liter przy wyszukiwaniu"
    }, {
        "argument": "/v",
        "description": "Wyświetla wyniki, które nie zawierają określonego ciągu znaków"
    }, {
        "argument": "/b",
        "description": "Wyszukuje ciągu znaków na początku każdej linii"
    }, {
        "argument": "/e",
        "description": "Wyszukuje ciągu znaków na końcu każdej linii"
    }, {
        "argument": "/c",
        "description": "Zlicza liczbę wystąpień określonego ciągu znaków"
    }, {
        "argument": "/m",
        "description": "Wyświetla tylko nazwy plików, w których znaleziono szukany ciąg znaków"
    }, {
        "argument": "/n",
        "description": "Wyświetla numer linii, w której znaleziono szukany ciąg znaków"
    }, {
        "argument": "/x",
        "description": "Wyszukuje tylko całych linii, które dokładnie pasują do szukanego ciągu znaków"
    }, {
        "argument": "/L",
        "description": "Wyszukuje ciągu znaków jako całość, a nie jako ciąg znaków, który może pojawić się wewnątrz innych słów"
    }, {
        "argument": "/R",
        "description": "Wyszukuje ciąg znaków przy użyciu wyrażenia regularnego"
    }]
},
{
    "command": "for",
    "description": "Służy do jest wykonania określonego polecenia dla każdego pliku w zestawie plików",
    "category": "tools",
    "example": "for %zmienna% in (ścieżka_do_pliku) do (polecenie)",
    "option": [{
        "argument": "/r",
        "description": "Przetwarza pliki w podkatalogach wskazanego katalogu"
    }, {
        "argument": "/d",
        "description": "Przetwarza katalogi, a nie pliki"
    }, {
        "argument": "/l",
        "description": "Używa małych liter w nazwach plików"
    }, {
        "argument": "/u",
        "description": "Używa dużych liter w nazwach plików"
    }, {
        "argument": "/x",
        "description": "Wyświetla krótsze nazwy plików zamiast pełnych ścieżek"
    }]
},
{
    "command": "format",
    "description": "Komenda używana do formatowania dysku lub partycji",
    "category": "system",
    "example": "format D:",
    "option": [{
        "argument": "/q",
        "description": "Formatowanie szybkie, które pomija pełne skanowanie dysku/partycji w poszukiwaniu uszkodzonych sektorów"
    }, {
        "argument": "/FS:typ systemu plików",
        "description": "Pozwala określić typ systemu plików, który ma być użyty podczas formatowania"
    }]
},
{
    "command": "fsutil",
    "description": "Służy do zarządzania i diagnozowania systemów plików, a także do wykonywania operacji na dyskach twardych i innych nośnikach danych",
    "category": "system",
    "example": "fsutil volume diskfree C:",
    "option": [{
        "argument": "drive",
        "description": "Zarządzanie napędami"
    }, {
        "argument": "file",
        "description": "Zarządzanie plikami"
    }, {
        "argument": "repair",
        "description": "Naprawa uszkodzonego systemu plików"
    }, {
        "argument": "resource",
        "description": "Zarządzanie zasobami systemu plików"
    }, {
        "argument": "volume",
        "description": "Zarządzanie wolumenami dyskowymi"
    }, {
        "argument": "dirty",
        "description": "Sprawdzenie, czy system plików jest uszkodzony"
    }]
},
{
    "command": "ftype",
    "description": "Służy do zarządzania skojarzeniami typów plików z aplikacjami, które mają być używane do otwierania tych plików",
    "category": "system",
    "example": "ftype txtfile",
    "option": [{
        "argument": "/?",
        "description": "Wyświetla pomoc dla komendy"
    }]
},
{
    "command": "goto",
    "description": "Służy do przeskakiwania do określonej linii w skrypcie wsadowym",
    "category": "fileflow",
    "example": "goto etykieta"
},
{
    "command": "gpresult",
    "description": "Służy do wyświetlania informacji o zasadach grupy",
    "category": "system",
    "example": "gpresult /user username /h report.html",
    "option": [{
        "argument": "/user",
        "description": "Określa nazwę użytkownika, dla którego mają zostać wyświetlone informacje o zasadach grupy"
    }, {
        "argument": "/computer",
        "description": "Określa nazwę komputera, dla którego mają zostać wyświetlone informacje o zasadach grupy"
    }, {
        "argument": "/scope",
        "description": "Określa zakres, w którym mają zostać wyświetlone informacje o zasadach grupy"
    }, {
        "argument": "/h",
        "description": "Określa, że wyniki mają zostać zapisane do pliku HTML"
    }, {
        "argument": "/x",
        "description": "Określa, że wyniki mają zostać zapisane do pliku XML"
    }]
},
{
    "command": "graftabl",
    "description": "Służy do zmiany tablicy znaków używanej przez system operacyjny",
    "category": "system",
    "example": "graftabl",
    "option": [{
        "argument": "[number_table]",
        "description": "Numer tablicy. Np. 437 - USA, 850 - Europa Zachodnia, 1252 - Windows USA"
    }]
},
{
    "command": "help",
    "description": "Służy do wyświetlania informacji o dostępnych komendach w wierszu poleceń i ich składni",
    "category": "system",
    "example": "help dir"
},
{
    "command": "icacls",
    "description": "Służy do wyświetlania i zarządzania uprawnieniami dostępu do plików i katalogów",
    "category": "system",
    "example": "icacls",
    "option": [{
        "argument": "/grant",
        "description": "Dodaje uprawnienia dostępu dla określonych użytkowników lub grupy"
    }, {
        "argument": "/deny",
        "description": "Odbiera uprawnienia dostępu dla określonych użytkowników lub grupy"
    }, {
        "argument": "/remove",
        "description": "Usuwa uprawnienia dostępu dla określonych użytkowników lub grupy"
    }, {
        "argument": "/reset",
        "description": " Zastępuje wszystkie uprawnienia dostępu dla określonego użytkownika lub grupy domyślnymi ustawieniami"
    }, {
        "argument": "/t",
        "description": "Wykonuje operację na określonym pliku lub katalogu oraz wszystkich plikach i podkatalogach w nim zawartych"
    }, {
        "argument": "/c",
        "description": "Kontynuuje wykonywanie operacji, nawet jeśli wystąpią błędy"
    }, {
        "argument": "/q",
        "description": "Wykonuje operację w trybie cichym, bez wyświetlania powiadomień"
    }]
},
{
    "command": "if",
    "description": "Używana w linii poleceń oraz w skryptach wsadowych",
    "category": "system",
    "example": "if exist file.txt",
    "option": [{
        "argument": "exist",
        "description": "Sprawdza, czy plik lub folder istnieje"
    }]
},
{
    "command": "label",
    "description": "Służy do zmiany etykiety nazwy woluminu dysku lub partycji",
    "category": "system",
    "example": "label C: System"
},
{
    "command": "md",
    "description": "Służy do tworzenia nowego katalogu",
    "category": "file",
    "example": "md 'Moje dokumenty' "
},
{
    "command": "mkdir",
    "description": "Służy do tworzenia nowych katalogów w bieżącym katalogu roboczym",
    "category": "file",
    "example": "mkdir 'Moje dokumenty'",
    "option": [{
        "argument": "/p",
        "description": "Tworzy wszystkie istniejące katalogi w ścieżce"
    }]
},
{
    "command": "mklink",
    "description": "Służy do tworzenia tzw. linków symbolicznych, czyli specjalnych plików lub folderów, które przekierowują żądania dostępu do innych plików lub folderów na dysku",
    "category": "system",
    "example": "file",
    "option": [{
        "argument": "/d",
        "description": "Tworzy link symboliczny do folderu"
    }]
},
{
    "command": "mode",
    "description": "Służy do zmiany trybu pracy konsoli",
    "category": "system",
    "example": "mode con:colss=80 lines=25",
    "option": [{
        "argument": "cols= [number]",
        "description": "Określa liczbę kolumn w konsoli"
    }, {
        "argument": "lines= [number]",
        "description": "Określa liczbę wierszy w konsoli"
    }, {
        "argument": "rate= [number]",
        "description": "Określa szybkość transmisji dla portu"
    }]
},
{
    "command": "more",
    "description": "Pozwala na wyświetlanie zawartości plików tekstowych w trybie interaktywnym",
    "category": "system",
    "example": "more example.txt",
    "option": [{
        "argument": "/c",
        "description": "Wyświetla tylko wybraną liczbę wierszy"
    }, {
        "argument": "/p",
        "description": "Wyświetla plik stronicami"
    }, {
        "argument": "/s",
        "description": "Wyświetla plik bez wyświetlania kursora"
    }]
},
{
    "command": "move",
    "description": "Służy do przenoszenia lub zmiany nazwy pliku lub folderu",
    "category": "system",
    "example": "move file1.txt file2.txt"
},
{
    "command": "openfiles",
    "description": "Służy do wyświetlania informacji o plikach otwartych przez użytkowników i procesy na danym komputerze",
    "category": "system",
    "example": "openfiles",
    "option": [{
        "argument": "/q",
        "description": "Wyświetla listę otwartych plików na komputerze"
    }, {
        "argument": "/d",
        "description": "Zamyka wybrane pliki otwarte przez użytkowników"
    }, {
        "argument": "/a",
        "description": "Zamyka wszystkie otwarte pliki na komputerze"
    }, {
        "argument": "/s [name]",
        "description": "Wyświetla listę otwartych plików na wybranym komputerze"
    }, {
        "argument": "/u [user]",
        "description": "Wyświetla listę otwartych plików dla wybranego użytkownika"
    }]
},
{
    "command": "path",
    "description": "Służy do wyświetlania lub zmiany zmiennej środowiskowej PATH, która zawiera listę katalogów, w których system Windows wyszukuje pliki wykonywalne",
    "category": "system",
    "example": "path",
    "option": [{
        "argument": "/w",
        "description": "Wyświetla bieżącą wartość zmiennej środowiskowej PATH w jednej linii, co ułatwia jej kopiowanie i wklejanie do innych programów"
    }, {
        "argument": "/p",
        "description": "Zmienia wartość zmiennej środowiskowej PATH na podaną wartość"
    }, {
        "argument": "/?",
        "description": "Wyświetla pomoc dotyczącą sposobu użycia komendy"
    }]
},
{
    "command": "pause",
    "description": "Służy do tymczasowego wstrzymania wykonywania skryptu lub pliku wsadowego",
    "category": "system",
    "example": "pause"
},
{
    "command": "popd",
    "description": "Służy do usuwania ostatniego elementu ze stosu katalogów i przejścia do katalogu znajdującego się na szczycie stosu",
    "category": "system",
    "example": "popd"
},
{
    "command": "print",
    "description": "Jest używana do drukowania zawartości pliku tekstowego w konsoli lub na drukarce",
    "category": "system",
    "example": "print",
    "option": [{
        "argument": "/d:device",
        "description": "Wybiera urządzenie wyjściowe, np. drukarkę"
    }, {
        "argument": "/t",
        "description": "Używa pliku tekstowego jako wejścia"
    }, {
        "argument": "/c",
        "description": "Kontynuuje wydruk w przypadku błędów"
    }, {
        "argument": "/u",
        "description": "Pozwala na drukowanie znaków Unicode"
    }, {
        "argument": "/l",
        "description": "Ustawia liczbę linii na stronę"
    }]
},
{
    "command": "prompt",
    "description": "Komenda prompt to narzędzie w systemie operacyjnym Windows, które pozwala użytkownikom na wprowadzanie poleceń do wiersza poleceń",
    "category": "system",
    "example": "prompt",
    "option": [{
        "argument": "/k",
        "description": "Pozwala na wprowadzenie i wykonanie jednej komendy, a następnie automatyczne zamknięcie wiersza poleceń"
    }, {
        "argument": "/c",
        "description": "Pozwala na wprowadzenie i wykonanie jednej komendy, a następnie kontynuowanie pracy wiersza poleceń"
    }, {
        "argument": "/d",
        "description": "Pozwala na zmianę katalogu domowego dla wiersza poleceń"
    }, {
        "argument": "/a",
        "description": "Pozwala na zmianę atrybutów pliku lub katalogu"
    }, {
        "argument": "/p",
        "description": "Pozwala na wyświetlenie komunikatu w trakcie oczekiwania na naciśnięcie klawisza przez użytkownika"
    }]
},
{
    "command": "pushd",
    "description": "Umożliwia przechodzenie między katalogami z możliwością powrotu do poprzedniego katalogu",
    "category": "system",
    "example": "pushd"
},
{
    "command": "rd",
    "description": "Służy do usuwania pustych katalogów",
    "category": "file",
    "example": "rd c:/my_folder",
    "option": [{
        "argument": "/s",
        "description": "Usuwa katalogi niepuste i ich zawartość rekurencyjnie, czyli wraz z zawartością podrzędną, na wszystkich poziomach"
    }, {
        "argument": "/q",
        "description": "Usuwa katalogi bez potwierdzania przez użytkownika"
    }, {
        "argument": "/a",
        "description": "Umożliwia usunięcie ukrytych katalogów"
    }]
},
{
    "command": "recover",
    "description": "Służy do odzyskiwania usuniętych plików z dysku twardego",
    "category": "system",
    "example": "recover file.txt",
    "option": [{
        "argument": "/d",
        "description": "Określa katalog, w którym znajduje się plik do odzyskania"
    }, {
        "argument": "/a",
        "description": "Próbuje odzyskać wszystkie usunięte pliki w katalogu"
    }, {
        "argument": "/n",
        "description": "Określa, ile plików należy odzyskać"
    }, {
        "argument": "/c",
        "description": "Określa, czy odzyskane pliki mają być skompresowane"
    }, {
        "argument": "/p",
        "description": "Określa, czy odzyskane pliki mają być umieszczone w nowym katalogu"
    }]
},
{
    "command": "rem",
    "description": "Służy do dodawania komentarzy w plikach wsadowych",
    "category": "system",
    "example": "rem To jest komentarz"
},
{
    "command": "ren",
    "description": "Służy do zmiany nazwy pliku lub katalogu",
    "category": "file",
    "example": "ren [path/to/name/file] [name/new_file]"
},
{
    "command": "rename",
    "description": "Służy do zmiany nazwy pliku lub folderu",
    "category": "system",
    "example": "rename old_file.txt new_file.txt",
    "option": [{
        "argument": "/a",
        "description": "Zmienia atrybuty pliku i folderu"
    }, {
        "argument": "/s",
        "description": "Zmienia nazwę wszystkich plików i folderów w podanej lokalizacji"
    }, {
        "argument": "/y",
        "description": "Zastępuje istniejące pliki bez pytania użytkownika"
    }]
},
{
    "command": "replace",
    "description": "Służy do zamiany tekstu w pliku",
    "category": "system",
    "example": "replace file.txt `abc` `efg`"
},
{
    "command": "rmdir",
    "description": "Służy do usuwania pustych katalogów",
    "category": "file",
    "example": "rmdir folder",
    "option": [{
        "argument": "/s",
        "description": "Usuwa określony katalog oraz jego zawartość"
    }, {
        "argument": "/q",
        "description": "Tryb cichy, nie wyświetla komunikatów o potwierdzeniu usuwania"
    }]
},
{
    "command": "robocopy",
    "description": "Służy do kopiowania i synchronizacji plików i folderów",
    "category": "tools",
    "example": "robocopy [source] [destination]",
    "option": [{
        "argument": "/e",
        "description": "Kopiuje puste katalogi"
    }, {
        "argument": "/z",
        "description": "Restartowane kopiowanie plików, jeśli kopiowanie zostanie przerwane, zostanie ono automatycznie wznowione"
    }, {
        "argument": "/COPPYALL",
        "description": "Kopiuje wszystkie atrybuty plików, włącznie z atrybutami właściciela i uprawnieniami"
    }, {
        "argument": "/r: [number]",
        "description": "Określa, ile razy robocopy będzie próbować skopiować plik, jeśli wystąpi błąd"
    }, {
        "argument": "/w: [number]",
        "description": "Określa czas oczekiwania między próbami kopiowania pliku, w sekundach"
    }]
},
{
    "command": "set",
    "description": "Służy do ustawiania lub wyświetlania zmiennych środowiskowych",
    "category": "system",
    "example": "set",
    "option": [{
        "argument": "/p",
        "description": "Wyświetla tekst na ekranie i czeka na wprowadzenie wartości przez użytkownika"
    }, {
        "argument": "/a",
        "description": "Wylicza wartość wyrażenia matematycznego"
    }]
},
{
    "command": "setlocal",
    "description": "Służy do ustawiania lokalnych zmiennych środowiskowych w bieżącej sesji wiersza poleceń",
    "category": "system",
    "example": "setlocal"
},
{
    "command": "sc",
    "description": "Służy do zarządzania usługami systemowymi, takimi jak uruchamianie, zatrzymywanie, konfigurowanie i monitorowanie usług",
    "category": "system",
    "example": "sc query",
    "option": [{
        "argument": "query",
        "description": "Wyświetla listę wszystkich usług systemowych"
    }, {
        "argument": "start",
        "description": "Uruchamia usługę"
    }, {
        "argument": "stop",
        "description": "Zatrzymuje usługę"
    }, {
        "argument": "config",
        "description": "Konfiguruje usługę"
    }, {
        "argument": "queryex",
        "description": "Wyświetla rozszerzone informacje o usłudze"
    }, {
        "argument": "description",
        "description": "Wyświetla opis usługi"
    }, {
        "argument": "qc",
        "description": "Wyświetla konfigurację usługi"
    }, {
        "argument": "delete",
        "description": "Usuwa usługę"
    }, {
        "argument": "create",
        "description": "Tworzy nową usługę"
    }]
},
{
    "command": "schtasks",
    "description": "Służy do zarządzania harmonogramami zadań i umożliwia tworzenie, modyfikowanie, uruchamianie i usuwanie zadań w systemie",
    "category": "system",
    "example": "schtasks /create /tn `MyTask` /tr `C:/myfolder/myscript.bat` /sc minute /mo 1",
    "option": [{
        "argument": "/create",
        "description": "Tworzy nowe zadanie"
    }, {
        "argument": "/tn",
        "description": "Określa nazwę zadania"
    }, {
        "argument": "/tr",
        "description": "Określa ścieżkę do pliku lub komendy, która ma być uruchomiona"
    }, {
        "argument": "/sc",
        "description": "Określa częstotliwość uruchamiania zadania"
    }, {
        "argument": "/mo",
        "description": "Określa odstęp czasu między kolejnymi uruchomieniami zadania w zależności od wartości podanej w parametrze /sc"
    }, {
        "argument": "/ru",
        "description": "Określa konto, na którym ma zostać uruchomione zadanie"
    }, {
        "argument": "/rp",
        "description": "Określa hasło dla konta podanego w parametrze /ru"
    }, {
        "argument": "/delete",
        "description": "Usuwa zadanie"
    }, {
        "argument": "/query",
        "description": "Wyświetla listę zadań"
    }, {
        "argument": "/run",
        "description": "Ręcznie uruchamia zadanie"
    }, {
        "argument": "/change",
        "description": "Modyfikuje ustawienia istniejącego zadania"
    }]
},
{
    "command": "shift",
    "description": "Służy do przesuwania pozycji wymienionych parametrów w plikach wsadowych",
    "category": "system",
    "example": "shift"
},
{
    "command": "shutdown",
    "description": "Służy do wyłączania lub restartowania komputera",
    "category": "tools",
    "example": "shutdown",
    "option": [{
        "argument": "/s",
        "description": "Oznacza wyłączenie systemu"
    }, {
        "argument": "/r",
        "description": "Oznacza ponowne uruchomienie systemu"
    }, {
        "argument": "/h",
        "description": "Oznacza hibernację systemu"
    }, {
        "argument": "/t",
        "description": "Określa czas opóźnienia, zanim zostanie wykonana operacja"
    }, {
        "argument": "/f",
        "description": "Zamyka wszystkie programy bez zapisywania zmian"
    }]
},
{
    "command": "sort",
    "description": "Służy do sortowania tekstu lub plików tekstowych według określonego kryterium sortowania",
    "category": "system",
    "example": "sort example.txt",
    "option": [{
        "argument": "/r",
        "description": "Sortowanie w odwrotnej kolejności"
    }, {
        "argument": "/+n",
        "description": "Sortowanie według kolumny n-tej, gdzie n to numer kolumny"
    }, {
        "argument": "/m",
        "description": "Użyj pamięci dyskowej, jeśli dostępna, zamiast pamięci RAM"
    }]
},
{
    "command": "start",
    "description": "Służy do uruchamiania aplikacji, plików lub folderów z wiersza poleceń lub z pliku wsadowego",
    "category": "file",
    "example": "start mspaint",
    "option": [{
        "argument": "/b",
        "description": "Uruchamia aplikację w trybie wiersza poleceń"
    }, {
        "argument": "/d",
        "description": "Określa bieżący katalog dla nowego procesu"
    }, {
        "argument": "/i",
        "description": "Uruchamia aplikację w trybie okna bez ramk"
    }, {
        "argument": "/Max",
        "description": " Określa tryb wyświetlania aplikacji jako zmaksymalizowany"
    }, {
        "argument": "/min",
        "description": " Określa tryb wyświetlania aplikacji jako zminimalizowany"
    }, {
        "argument": "/wait",
        "description": "Czeka, aż uruchomiona aplikacja zostanie zamknięta przed kontynuacją wykonywania skryptu lub polecenia"
    }]
},
{
    "command": "subst",
    "description": "Umożliwia utworzenie wirtualnego dysku twardego, który jest mapowany na istniejący katalog lub dysk",
    "category": "system",
    "example": "subst X: C:/Windows/System32/Drivers"
},
{
    "command": "systeminfo",
    "description": "Służy do wyświetlania szczegółowych informacji na temat komputera, takich jak informacje o systemie operacyjnym, procesorze, pamięci, sterownikach",
    "category": "tools",
    "example": "systeminfo",
    "option": [{
        "argument": "/s",
        "description": "Pozwala na określenie nazwy lub adres IP komputera zdalnego, dla którego chcesz wyświetlić informacje"
    }, {
        "argument": "/u",
        "description": "Umożliwia określenie nazwy użytkownika dla komputera zdalnego"
    }, {
        "argument": "/p",
        "description": "Umożliwia określenie hasła użytkownika dla komputera zdalnego"
    }, {
        "argument": "/fo",
        "description": "Pozwala na wybranie formatu wyjścia. Dostępne formaty to: `TABLE`, `LIST`, `CSV` i `JSON`"
    }, {
        "argument": "/nh",
        "description": "Wyłącza wyświetlanie nagłówka tabeli w formacie wyjścia"
    }, {
        "argument": "/?",
        "description": "Wyświetla pomoc dla polecenia"
    }]
},
{
    "command": "tasklist",
    "description": "Służy do wyświetlania listy aktualnie uruchomionych procesów wraz z informacjami na temat każdego procesu",
    "category": "system",
    "example": "tasklist",
    "option": [{
        "argument": "/s [computer]",
        "description": "Określa komputer, na którym należy wykonać operację"
    }, {
        "argument": "/u [domein]user",
        "description": "Określa konto użytkownika do użycia do wykonania tej operacji"
    }, {
        "argument": "/p [password]",
        "description": "Określa hasło dla konta użytkownika wskazanego przez argument /U"
    }, {
        "argument": "/m [computer1, computer2]",
        "description": "Określa komputery zdalne, na których należy wykonać operację"
    }, {
        "argument": "/nh",
        "description": "Wyświetla wynik bez nagłówka"
    }, {
        "argument": "/fo [format]",
        "description": "Określa format wyjścia. Dostępne formaty to: TABLE, LIST, CSV"
    }, {
        "argument": "/fi [filters]",
        "description": "Określa zestaw filtrów wykorzystywanych do selekcji procesów"
    }]
},
{
    "command": "taskkill",
    "description": "Służy do zakończenia procesów",
    "category": "system",
    "example": "taskkill /im notepad.exe",
    "option": [{
        "argument": "/im [process_name]",
        "description": "Użycie tej opcji pozwala na podanie nazwy procesu, który ma zostać zakończony"
    }, {
        "argument": "/pid [id_process]",
        "description": "Użycie tej opcji pozwala na podanie identyfikatora procesu, który ma zostać zakończony"
    }, {
        "argument": "/f",
        "description": "Użycie tej opcji wymusza zakończenie procesu bez pytania o potwierdzenie"
    }, {
        "argument": "/t",
        "description": "Użycie tej opcji pozwala na zakończenie procesu oraz wszystkich jego podprocesów"
    }, {
        "argument": "/fi [filter]",
        "description": "Użycie tej opcji pozwala na zastosowanie filtru w celu zakończenia tylko wybranych procesów"
    }]
},
{
    "command": "time",
    "description": "Służy do wyświetlania lub zmiany aktualnego czasu systemowego",
    "category": "system",
    "example": "time",
    "option": [{
        "argument": "/t",
        "description": "Wyświetla aktualny czas systemowy w formacie godzina:minuta"
    }, {
        "argument": "/s",
        "description": "Ustawia nowy czas systemowy. Wymaga podania argumentu w formacie godzina:minuta:sekunda.milisekunda"
    }, {
        "argument": "/?",
        "description": "Wyświetla pomoc dla komendy"
    }]
},
{
    "command": "title",
    "description": "Służy do zmiany tytułu okna konsoli",
    "category": "system",
    "example": "title new_title"
},
{
    "command": "tree",
    "description": "Służy do wyświetlania drzewa katalogów i plików w systemie plików",
    "category": "system",
    "example": "tree",
    "option": [{
        "argument": "/a",
        "description": "Wyświetla atrybuty plików i folderów w formacie rozszerzonym"
    }, {
        "argument": "/f",
        "description": "Wyświetla tylko nazwy plików bez wyświetlania struktury folderów"
    }, {
        "argument": "/q",
        "description": "Wyświetla tylko nazwy plików i folderów z zastosowaniem cudzysłowów"
    }, {
        "argument": "/t",
        "description": "Określa znak używany do wyświetlania struktury drzewa"
    }]
},
{
    "command": "type",
    "description": "Służy do wyświetlania zawartości pliku tekstowego bez otwierania go w edytorze tekstu",
    "category": "file",
    "example": "type example.txt"
},
{
    "command": "ver",
    "description": "Służy do wyświetlania numeru wersji systemu",
    "category": "system",
    "example": "ver"
},
{
    "command": "verify",
    "description": "Służy do włączania lub wyłączania weryfikacji integralności plików systemowych",
    "category": "system",
    "example": "verify on",
    "option": [{
        "argument": "on",
        "description": "Włącza weryfikację integralności plików systemu"
    }, {
        "argument": "off",
        "description": "Wyłącza weryfikację integralności plików systemu"
    }]
},
{
    "command": "vol",
    "description": "Służy do wyświetlania informacji o woluminach dyskowych na komputerze",
    "category": "system",
    "example": "vol"
},
{
    "command": "xcopy",
    "description": "Służy do kopiowania plików i katalogów z jednego miejsca na inne",
    "category": "system",
    "example": "xcopy C:/Pulpit/plik.txt D:/Nowy folder",
    "option": [{
        "argument": "/s",
        "description": "Kopiuje również katalogi puste; zachowuje strukturę katalogów i sub katalogów"
    }, {
        "argument": "/e",
        "description": "Kopiuje również katalogi puste; zachowuje strukturę katalogów i sub katalogów, włączając puste katalogi"
    }, {
        "argument": "/i",
        "description": "Jeśli katalog docelowy nie istnieje, to tworzy go i kopiuje do niego pliki"
    }, {
        "argument": "/h",
        "description": "Kopiuje również pliki ukryte"
    }, {
        "argument": "/k",
        "description": "Kopiuje również atrybuty plików"
    }, {
        "argument": "/q",
        "description": "Tryb cichy (bez wyświetlania informacji o kopiowanych plikach)"
    }, {
        "argument": "/y",
        "description": "Bez pytania o zastąpienie pliku docelowego"
    }, {
        "argument": "/d",
        "description": "Kopiuje tylko te pliki, które są nowsze niż te w miejscu docelowym, lub tylko te pliki, które jeszcze nie zostały skopiowane"
    }, {
        "argument": "/t",
        "description": "Kopiuj tylko strukturę katalogów, bez plików"
    }, {
        "argument": "/u",
        "description": "Kopiuj tylko pliki, które są nowsze lub inne niż w miejscu docelowym"
    }]
},
{
    "command": "wmic",
    "description": "Umożliwia wykonywanie operacji związanych z zarządzaniem systemem operacyjnym Windows za pomocą wiersza poleceń",
    "category": "system",
    "example": "wmic cpu get name, status",
    "option": [{
        "argument": "get",
        "description": "Polecenie służące do wyświetlania informacji o określonych zasobach systemowych"
    }, {
        "argument": "set",
        "description": "Polecenie służące do zmiany ustawień systemowych"
    }, {
        "argument": "path",
        "description": "Argument służący do określenia ścieżki do obiektu w systemie WMM"
    }, {
        "argument": "where",
        "description": "Argument służący do określenia kryteriów filtrowania wyników"
    }, {
        "argument": "format",
        "description": "Argument służący do określenia formatu wyniku"
    }, {
        "argument": "/node",
        "description": "Argument służący do wykonania operacji na zdalnym komputerze"
    }, {
        "argument": "/user",
        "description": "Argument służący do określenia nazwy użytkownika do uwierzytelnienia"
    }, {
        "argument": "/password",
        "description": "Argument służący do określenia hasła użytkownika do uwierzytelnienia"
    }, {
        "argument": "/output",
        "description": "Argument służący do określenia pliku, w którym mają zostać zapisane wyniki operacji"
    }]
}
]