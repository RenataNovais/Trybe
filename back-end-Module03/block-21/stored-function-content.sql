-- Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos
-- até o momento por um determinado customer_id.

USE sakila;

DELIMITER $$
CREATE FUNCTION total_pagamentos_cliente(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade_pagamentos INT;
SELECT COUNT(customer_id)
FROM sakila.payment
WHERE customer_id = id
INTO quantidade_pagamentos;
RETURN quantidade_pagamentos;
END $$
DELIMITER ;

SELECT total_pagamentos_cliente(1);

-- Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado
-- ao registro de inventário com esse id. 

DELIMITER $$
CREATE FUNCTION filme_vinculado_inventario_id(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
DECLARE nome_filme VARCHAR(100);
SELECT f.title
FROM sakila.film AS f
JOIN sakila.inventory AS i ON i.inventory_id = id AND i.film_id = f.film_id
INTO nome_filme;
RETURN nome_filme;
END $$
DELIMITER ;
DROP FUNCTION filme_vinculado_inventario_id;
SELECT filme_vinculado_inventario_id(5);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror')
-- e retorna a quantidade total de filmes registrados nessa categoria.

DELIMITER $$
CREATE FUNCTION quantidade_filmes_da_categoria(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade_filmes INT;
SELECT COUNT(*)
FROM sakila.film_category AS fc
JOIN sakila.category AS c ON c.category_id = fc.category_id AND c.name = categoria
INTO quantidade_filmes;
RETURN quantidade_filmes;
END $$
DELIMITER ;

SELECT quantidade_filmes_da_categoria('Action');