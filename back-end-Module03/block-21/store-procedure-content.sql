USE sakila;

DELIMITER $$
CREATE PROCEDURE atores_mais_populares_quantidade_filmes()
BEGIN
	SELECT actor_id, COUNT(*)
    FROM film_actor
    GROUP BY actor_id
    ORDER BY 2 DESC LIMIT 10;
END $$
DELIMITER ;

CALL atores_mais_populares_quantidade_filmes();

DELIMITER $$
CREATE PROCEDURE filmes_por_categoria_desejada(IN categ VARCHAR(100))
BEGIN
SELECT f.film_id AS 'id do filme',
f.title AS 'titulo do filme',
fc.category_id AS 'id da categoria',
c.name AS 'nome da categoria'
FROM sakila.film AS f
JOIN sakila.film_category AS fc ON fc.film_id = f.film_id
JOIN sakila.category AS c ON c.category_id = fc.category_id
WHERE c.name = categ;
END $$
DELIMITER ;

CALL filmes_por_categoria_desejada('Children');

DELIMITER $$
CREATE PROCEDURE status_cliente_por_email(IN email VARCHAR(100), OUT status_message VARCHAR(100))
BEGIN
SELECT IF(active = 1, 'Cliente ativo', 'Cliente inativo') INTO status_message
FROM sakila.customer
WHERE sakila.customer.email = email;
END $$
DELIMITER ;

CALL status_cliente_por_email('SANDRA.MARTIN@sakilacustomer.org', @status_message);
SELECT @status_message;
