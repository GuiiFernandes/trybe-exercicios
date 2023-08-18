-- Active: 1692382424994@@127.0.0.1@3306@sakila2
USE sakila2;
-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT active, COUNT(*) AS 'total_clientes'
FROM customer
GROUP BY active;
-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, active, COUNT(*) AS 'total_clientes'
FROM customer
GROUP BY active, store_id;
-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(rental_duration) AS 'media_duracao'
FROM film
GROUP BY rating
ORDER BY media_duracao DESC;
-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(*) AS 'total_enderecos'
FROM address
GROUP BY district
ORDER BY total_enderecos DESC;