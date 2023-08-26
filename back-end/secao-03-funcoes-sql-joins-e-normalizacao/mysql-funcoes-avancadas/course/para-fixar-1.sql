-- Active: 1692401137876@@127.0.0.1@3306@sakila2
USE sakila2;
-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM staff
UNION ALL
SELECT first_name, last_name FROM actor;
-- Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra “tracy” na tabela customer e os que contêm “je” na tabela actor. Exiba apenas os resultados únicos.
(SELECT CONCAT(first_name, ' ', last_name) fullname
FROM customer
WHERE first_name LIKE '%tracy%')
UNION
(SELECT CONCAT(first_name, ' ', last_name) fullname FROM actor
WHERE first_name LIKE '%je%');
-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name, last_name FROM actor ORDER BY last_name DESC LIMIT 5)
UNION
(SELECT UCASE(first_name), UCASE(last_name) FROM staff LIMIT 1)
UNION
(SELECT first_name, last_name FROM customer LIMIT 15, 5);
-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT first_name, last_name
FROM customer
ORDER BY first_name LIMIT 60)
UNION
(SELECT first_name, last_name
FROM actor
ORDER BY first_name LIMIT 60)
LIMIT 45, 15;