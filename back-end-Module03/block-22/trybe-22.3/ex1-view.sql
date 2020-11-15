USE sakila;

CREATE VIEW film_with_categories AS
	SELECT f.title, fc.category_id, c.name
    FROM sakila.film AS f
    INNER JOIN sakila.film_category AS fc ON fc.film_id = f.film_id
    INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
    ORDER BY title;
    
SELECT * FROM film_with_categories;
