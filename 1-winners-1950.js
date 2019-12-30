// query the database so you display Nobel prizes for 1950
// our database is called nobel and it contains, the year, subject and name of the winners of the nobel prize.
// check out the https://sqlzoo.net/ page for more details

SELECT yr, subject, winner FROM nobel
WHERE yr = 1950;
