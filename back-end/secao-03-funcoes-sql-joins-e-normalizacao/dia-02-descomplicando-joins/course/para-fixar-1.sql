-- Active: 1692401137876@@127.0.0.1@3306@sakila2
USE sakila2;
-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT fa.actor_id, a.first_name, a.last_name, fa.film_id
FROM film_actor fa
INNER JOIN actor a
  ON fa.actor_id = a.actor_id;
-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT s.first_name, s.last_name, a.address
FROM staff s
INNER JOIN address a
  ON s.address_id = a.address_id;
-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer c
INNER JOIN address a
  ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
  ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';
-- Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado. Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas nas tabelas customer e rental.
SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS total_rentals
FROM rental r
INNER JOIN customer c
  ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY r.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;
-- Monte uma query que exiba o nome, sobrenome e a media de pagamento (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount) avg_amount
FROM payment p
INNER JOIN staff s
  ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY p.staff_id;
-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT fa.actor_id, a.first_name, a.last_name, fa.film_id, f.title
FROM film_actor fa
INNER JOIN actor a
  ON fa.actor_id = a.actor_id
INNER JOIN film f
  ON fa.film_id = f.film_id;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;