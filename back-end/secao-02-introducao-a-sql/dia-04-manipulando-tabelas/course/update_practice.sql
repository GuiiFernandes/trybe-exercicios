-- Active: 1692143747689@@127.0.0.1@3306
SET SQL_SAFE_UPDATES = 0;
USE sakila;
-- Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome “JULIA” para “JULES”.
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
-- Altere a linha da tabela categoria onde o valor da coluna x é igual “Sci-fi” para “Science Fiction”.
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
-- Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação “G”, “PG” ou “PG-13” e um custo de substituição maior que $20.
UPDATE film
SET rental_rate = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
-- Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
UPDATE film
SET rental_rate = (
  CASE
    WHEN length <= 100 THEN 10
    ELSE 20
  END
);