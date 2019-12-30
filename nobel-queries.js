// our database is called nobel and it contains, the year, subject and name of the winners of the nobel prize.
// check out the https://sqlzoo.net/ page for more details

// 1 query the database so you display Nobel prizes for 1950

SELECT yr, subject, winner FROM nobel
WHERE yr = 1950;

// 2 Show who won the 1962 prize for Literature.

SELECT winner FROM nobel
WHERE yr = 1962 AND subject = 'Literature';

// 3 Show the year and subject that won 'Albert Einstein' his prize.

SELECT yr, subject FROM nobel
WHERE winner = 'Albert Einstein';

