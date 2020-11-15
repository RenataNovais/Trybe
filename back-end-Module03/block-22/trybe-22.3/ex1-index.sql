CREATE FULLTEXT INDEX col_ind
ON sakila.category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query: Query cost: 1.20
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX col_ind ON sakila.category;

-- Após ter excluído o índice, mensure o custo com a seguinte query: Query costy: 4.20
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';