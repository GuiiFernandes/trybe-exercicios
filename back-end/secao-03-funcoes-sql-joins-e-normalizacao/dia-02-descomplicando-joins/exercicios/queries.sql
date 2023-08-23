-- Active: 1692401137876@@127.0.0.1@3306@pixar
USE pixar;
-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM box_office bo
INNER JOIN movies m
  ON bo.movie_id = m.id;
-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT m.title,
  (bo.domestic_sales + bo.international_sales) sales
FROM box_office bo
INNER JOIN movies m
  ON bo.movie_id = m.id
WHERE bo.international_sales > bo.domestic_sales;
-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title, bo.rating
FROM box_office bo
INNER JOIN movies m
  ON bo.movie_id = m.id
ORDER BY bo.rating DESC;
-- Exercício 4 Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.id, t.name, t.location, m.title, m.director, m.length_minutes
FROM theater t
LEFT JOIN movies m
  ON m.theater_id = t.id
ORDER BY t.name;
-- Exercício 5 Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética
SELECT t.id, t.name, t.location, m.title, m.director, m.length_minutes
FROM theater t
RIGHT JOIN movies m
  ON m.theater_id = t.id
ORDER BY t.name;

-- BONUS>
SELECT m.id, m.title, m.director, m.length_minutes, m.theater_id
FROM movies m
INNER JOIN box_office bo
  ON bo.movie_id = m.id
WHERE bo.rating > 8.0
  AND m.theater_id IS NOT NULL;