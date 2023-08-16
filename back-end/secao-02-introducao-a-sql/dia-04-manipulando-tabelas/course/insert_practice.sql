-- Active: 1692143747689@@127.0.0.1@3306@sakila
USE sakila;
-- Insira um novo funcionário na tabela sakila.staff. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Guilherme', 'Fernandes', '43', 'guifjj92@gmail.com', '1', '1', 'Gui', 'guifjj0207');
-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Teste 1', 'Teste1', '3', NULL, '2', DEFAULT, 'teste1', NULL),
  ('Teste 2', 'Teste2', '4', NULL, '1', DEFAULT, 'teste2', NULL);

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
ORDER BY customer_id
LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name)
VALUES
  ('Fight'),
  ('Cars'),
  ('War');

-- Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id)
VALUES ('3', '3');