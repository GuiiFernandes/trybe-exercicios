-- Active: 1692382424994@@127.0.0.1@3306@sakila
USE sakila;
-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de ‘Media de Duracao’;
SELECT AVG(length) AS `Media de Duracao`,
-- A duração mínima dos filmes como ‘Duracao Minima’;
MIN(length) AS `Duracao Minima`,
-- A duração máxima dos filmes como ‘Duracao Maxima’;
MAX(length) AS `Duracao Maxima`,
-- A soma de todas as durações como ‘Tempo de Exibicao Total’;
SUM(length) AS `Tempo de Exibicao Total`,
-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’.
COUNT(*) AS `Filmes Registrados`
FROM film;
