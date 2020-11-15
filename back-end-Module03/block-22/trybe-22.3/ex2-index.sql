CREATE INDEX col_postal
ON sakila.address(postal_code);

-- Mensure o custo com a seguinte query: Query Cost: 1.20
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
