-- Active: 1692382424994@@127.0.0.1@3306@sakila
USE sakila;
-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('trybe');
-- Faça uma query que transforme a frase 'A Internet mudou o mundo' em 'A IA mudou o mundo'.
SELECT REPLACE('A Internet mudou o mundo', 'Internet', 'IA');
-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH('Uma frase qualquer');
-- Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- Por fim, padronize a string 'RUA NORTE 1500, RIO DE JANEIRO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');