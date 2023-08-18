-- Active: 1692382424994@@127.0.0.1@3306@sakila
USE sakila2;
-- a menor duração de locação de um filme
SELECT MIN(rental_duration) AS 'Duracao Minima' FROM film;
-- a maior duração de locação de um filme
SELECT MAX(rental_duration) AS 'Duracao Máxima' FROM film;
-- duração média de locação de um filme
SELECT AVG(rental_duration) AS 'Duracao Média' FROM film;
-- total da duração de locação
SELECT SUM(rental_duration) AS 'Soma da Duracao' FROM film;
--
SET @idade = 19; --Cria variável de ambiente.
SELECT @idade AS 'Idade';
-- Mostrar a classificação barato se o rental_rate for menor que 3 e caro se for não for
SELECT title,
  rental_rate,
  IF(rental_rate < 3, 'barato', 'caro') AS 'Preço'
FROM film;
-- Mostrar label "curto", "médio" ou "longo" para cada filme, de acordo com as respectivas durações 60/150/+
SELECT title,
  `length`,
  CASE
    WHEN `length` <= 60 THEN 'Curto'
    WHEN `length` <= 150 THEN 'Médio'
    ELSE 'Longo'
  END AS 'Classificação_Tempo'
FROM film;
-- Agrupar o número de clientes por loja
SELECT store_id, COUNT(*) AS 'total_clientes_lojas'
FROM customer
GROUP BY store_id;
-- Contar quantos clientes estão em cada loja
SELECT store_id, COUNT(*) AS 'total_clientes_lojas'
FROM customer
GROUP BY store_id;
-- Juntar os emails dos clientes de cada loja em array
SELECT store_id,
JSON_ARRAYAGG(email) AS array_emails
FROM customer
GROUP BY store_id;