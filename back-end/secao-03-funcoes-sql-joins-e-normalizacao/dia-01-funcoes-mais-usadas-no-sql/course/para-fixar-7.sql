-- Active: 1692382424994@@127.0.0.1@3306@sakila2
USE sakila2;
-- Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) as `media duracao`
FROM sakila.film
GROUP BY rating
HAVING `media duracao` BETWEEN 115 AND 121.5
ORDER BY `media duracao` DESC;
-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) as sum_replacement_cost
FROM sakila.film
GROUP by rating
HAVING sum_replacement_cost > 3950.5
ORDER BY sum_replacement_cost;