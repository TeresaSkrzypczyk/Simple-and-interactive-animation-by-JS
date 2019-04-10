# Simple-and-interactive-animation-by-JS

JavaScript animation 

Cells are create and die on a two-dimensional board by clicking on it. The board is defined at the beginning.
All animation is created as a `GameOfLife()` object, which contains informations about the board
and the method to menage the animation.

For do this in `app.js` I created:

- the constructor `GameOfLife()` object, which creates an animation using  `boardWidth` and `boardHeight` parameters.

To test I created also new object `game` of the `GameOfLife`.

Each cells is a element `<div>` in section `#board`, which is wide 10px and high 10px.

The board contains a certain number of divs. It is created by the method `createBoard()`, which:
- gives the section `#board` height and width,
- writes to the variable all fields to be placed on the board,
- create `<div>` and adds them to the `#board` section.

By using `float: left` and limiting the width section `#board`, the board looks like a two-dimensional board, but it is actually one sequence of divs.

The next step is to write all divs o variable by:

- add to the object attribute `this.cells` and define it as a blank array,
- `createBoard()`, which after creating and adding all divs will catch them to the variable.

The last step it was to add event to all divs, which after clicking on a div will switch the class `live` (add or take away) and change a color (as described in the CSS file).

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
