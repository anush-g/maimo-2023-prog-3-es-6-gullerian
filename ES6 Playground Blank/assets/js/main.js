/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.
- Agregar export

2. Use the map function to create a new array with the title of each song in uppercase letters.
- usar nombres tipo songTitles.map y devolver un array con todas las canciones en mayúscula

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".
- ponerle una const hotelsCalifornia = songs.find

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)
- usar lo que mostró esta clase de reduce y lo de lucas que puse un screen en el apunte

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
- recorrer el array y por cada uno de los registros guardarlo sen el array pero solo de la forma title,. etc, etc,. Bohemian rapsody - queen (1975).

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
- crear en utils una función que calcule el año promedio de las canciones (como el ej que hicimos, sumar todas las canciones todos los años y dividirlo por. si da con coma lo podemos llevar a un entero integer, sacarle los decimales.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.
- cuando dice crear un nuevo array, ya sabemos que el rest operator lo crea por defecto. por eso es medio redundante

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.
- con utils

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
- Primero, armar un find que traiga la canciójn let it be de todas las songs
- después sobre eso armar el template literals para ponerle la forma que yo quiero


18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.
- imprimirla tres veces así trae tres canciones diferentes

20. Write your own function using at least 3 concepts.

*/

//1. Import songs array using modules.
import songs from "./songs.js";
console.log(songs);

//2. Use the map function to create a new array with the title of each song in uppercase letters.
//usar nombres tipo songTitles.map y devolver un array con todas las canciones en mayúscula
const songsUpper = songs.map(({ title }) => title.toUpperCase());

console.log(songsUpper);

//3. Use the filter function to create a new array with all the songs released before 1975.
const songsBefore1975 = songs
  .filter(({ year }) => year < 1975)
  .map(({ title }) => title);

console.log(songsBefore1975);

//4. Use destructuring to create a variable that stores the title of the first song in the array.
const { title: firstTitle } = songs[0];
console.log(firstTitle);

//5. Use the find function to get the object representing the song "Hotel California".
const hotelCalifornia = songs.find(({ title }) => title === "Hotel California");
console.log(hotelCalifornia);

//6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const addition = (...anyNumberOfArguments) =>
  anyNumberOfArguments.reduce(
    (accumulator, number) => accumulator + number,0
  );

console.log(addition(1, 2, 3));
console.log(addition(50, 100));
console.log(addition(7, 10, 21, 35, 6, 70));

//7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.
//- recorrer el array y por cada uno de los registros guardarlo sen el array pero solo de la forma title,. etc, etc,. Bohemian rapsody - queen (1975).
const songsInfo = songs.map(
  ({ title, artist, year }) => `${title} - ${artist} (${year})`
);
console.log(songsInfo);

//8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.
const songsByTheBeatles = songs
  .filter(({ artist }) => artist === "The Beatles" || artist === "John Lennon")
  .map(({ title }) => title);

console.log(songsByTheBeatles);

//9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)
const totalYears = songs.reduce(
  (accumulator, { year }) => accumulator + year, 0
);
console.log(totalYears);

//10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)
//crear en utils una función que calcule el año promedio de las canciones (como el ej que hicimos, sumar todas las canciones todos los años y dividirlo por. si da con coma lo podemos llevar a un entero integer, sacarle los decimales.)
import { average } from "./utils.js";
console.log(Math.round(average(totalYears, songs.length)));

//11. Use the find function to get the object representing the song with the longest title.
/*const longestLength = 0;
const longestSong = songs.find( title => 
    for (let i = 0; i < songs.length; i++) {

        if (title.length > longestLength) {
            longestLength = title.Length;
        }
    }
);
console.log(longestSong);
*/
const longestSong = songs.find(
  ({ title }) =>
    title.length === Math.max(...songs.map(({ title }) => title.length))
);
//... te separa songs en varios elementitos, tipo [algo,algo2,algo3]. Porque a map solo le puedo pasar cosas de este tipo, separadas
//math.max para que nos de el mayor
//en maps le pasamos todos los objetos que tiene songs
//tom el maximo valor de muchos valores

console.log("looooongest soooong", longestSong);

//12. Use destructuring and template literals to log the title, artist and year of the first element of the array.
const { title, artist, year } = songs[0];
console.log(
  `The first song of the array is ${title} by ${artist}, released in ${year}.`
);

//13. Use the rest operator to create a new array without the first element.
//cuando dice crear un nuevo array, ya sabemos que el rest operator lo crea por defecto. por eso es medio redundante
//const [first , ...rest] = songs;
const [, ...rest] = songs; //es lo mismo que el renglon de arriba pero mejor
console.log(rest);

//14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.
import { detectSong } from "./utils.js";
const word = "Bohemian";
console.log(detectSong(songs, word));

//15. Use the every() method to check if all the songs have titles that are 5 or more characters long.
const moreThan5CharacterTitle = songs.every(({ title }) => title.length >= 5);
console.log(moreThan5CharacterTitle);

//16. Use the some() method to check if there are any songs from the 80s.
const song80s = songs.some(({ year }) => 1980 <= year < 1990);
console.log(song80s);

//17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."
//Primero, armar un find que traiga la canción let it be de todas las songs
//después sobre eso armar el template literals para ponerle la forma que yo quiero

/*const songTitle = "Let It Be";
const letItBe = detectSong(songs, songTitle);

const { title, artist, year } = letItBe;
console.log(`${artist} released ${title} in ${year}.`);*/

const letItBe = songs.find(({ title }) => title === "Let It Be");
console.log(`${letItBe.artist} released ${letItBe.title} in ${letItBe.year}.`);

//18. Use the map() method to create a new array with just the artist names.
const artistNames = songs.map(({ artist }) => artist);
console.log(artistNames);

//19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.
//imprimirla tres veces así trae tres canciones diferentes
import { random } from "./utils.js";
console.log(songs[random(0, songs.length)]);
console.log(songs[random(0, songs.length)]);
console.log(songs[random(0, songs.length)]);

//20. Write your own function using at least 3 concepts.
import { detectSongsWithXWords } from "./utils.js";
//const amountOfWordsInSong = 1;
console.log(detectSongsWithXWords(songs, 1));

//ejemplo de reduce de Lean en clase
const totalYears2 = songs.reduce((acc, curr) => acc + curr.year, 0);
const averageYears = totalYears2 / songs.length;
console.log(averageYears);

//el 6 por lean
const sum = (...values) => values.reduce((acc, curr) => acc + curr, 0)
//los ... lo convierten en un array
console.log(sum(1,2,10,20));
