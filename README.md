# Simple-and-interactive-animation-by-JS

JavaScript animation 

* Komórki powstają i umierają na dwuwymiarowej planszy poprzez kliknięcie, plansza jest zdefiniowana od samego początku.

Całą animacja jest stworzona jako obiekt `GameOfLife()`, który zawiera informacje o planszy i metodzie do zarządzania animacją. 

W tym celu w pliku `app.js`:

* Został utworzony konstruktor dla obiektu `GameOfLife`, który tworzy animację przyjmując parametry `boardWidth` i `boardHeight`. 
* Aby przetestować poprawność działania konstruktora do zmiennej `game` został dopisany nowy obiekt typu `GameOfLife`.

Każda komórka jest elementem `<div>` znajdującym się w sekcji `#board` o szerokości 10px i wysokości 10px. 

Plansza zawiera określoną ilość divów. Jest ona utworzona poprzez metodę `createBoard()`, która:
    * nadaje sekcji `#board` odpowiednią wysokość i szerokość,
    * zapisuje do zmiennej ilość wszystkich pól, które mają się znaleźć na planszy,
    * za pomocą pętli tworzy odpowiednią ilość divów i dodaje je do sekcji `#board`.

Dzięki zastosowaniu `float: left` i ograniczeniu szerokości sekcji `#board` plansza wygląda jak tablica dwuwymiarowa (ma wysokość i szerokość), ale właściwie jest jednym ciągiem divów. 

Kolejnym działaniem jest zapisanie wszystkiech divów do zmiennej poprzez:

* dodanie do obiektu atrybutu `this.cells` i zdefininiowanie go jako pustej tablicy,
* `createBoard()`, która po stworzeniu i dodaniu wszystkich divów, złapie je do stworzonej zmiennej.

Ostatnim etapiem jest dodanie eventu do wszystkich divów, który po kliknięciu będzie danemu divowi przełączać klasę `live` (dodawać lub odejmować) a tym samym zgodnie z informacją w pliku CSS będzie zmieniać kolor komórki.
