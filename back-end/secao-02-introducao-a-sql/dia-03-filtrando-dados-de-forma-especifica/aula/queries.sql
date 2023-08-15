-- Active: 1692040520117@@127.0.0.1@3306@sakila
USE sakila;
-- Econtre a pessoa atora Johnny Cage
SELECT * FROM actor WHERE first_name = 'Johnny' AND last_name = 'Cage';
-- Encontre os filmes que podem ser alugados exatamente por 6 dias
SELECT title FROM film WHERE rental_duration = 6;
-- Encontre os filmes de classificação R que podem ser alugados exatamente por 6 dias
SELECT title FROM film WHERE rating = 'R'
AND rental_duration = 6;
--Encontrei os filmes de classificação R ou PG que podem ser alugados exatamente por 6 dias
SELECT title FROM film WHERE rental_duration = 6
AND rating IN ('R', 'PG');
--Encontre os filmes: AFFARI PREJUDICE, AFRICAN EGG, AGENT TRUMAN e AIRPLANE SIERRA
SELECT * FROM film WHERE title IN ('AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');
-- Encontre os filmes menos os listados anteriormente: AFFARI PREJUDICE, AFRICAN EGG, AGENT TRUMAN e AIRPLANE SIERRA
SELECT * FROM film WHERE title NOT IN ('AFFAIR PREJUDICE','AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');
-- Encontre filmes com duração entre 120 e 150 minutos
SELECT title FROM film WHERE `length` BETWEEN 120 AND 150;
-- Encontre alugueis feitos no dia 26/05/2005 as 00:07:11
SELECT * FROM rental WHERE rental_date = '2005-05-26 00:07:11';
-- Encontre alugueis feitos no dia 26/05/2005
SELECT * FROM rental WHERE DATE(rental_date) = '2005-05-26';
-- Econtre alugueis que foram devolvidos entre 26/05/2005 e 27/06/2005
SELECT * FROM rental WHERE DATE(return_date) BETWEEN '2005-05-26' AND '2005-06-27';
-- Encontre pessoas atoras com o primeiro nome contendo 'rey'
SELECT * FROM actor WHERE first_name LIKE '%rey%';
-- Encontre pessoas atoras com o primeiro nome com 3 caracteres, sendo o primeiro a letra 'B'
SELECT * FROM actor WHERE first_name LIKE 'B__';