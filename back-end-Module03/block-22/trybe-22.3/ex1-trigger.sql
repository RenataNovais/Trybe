USE BeeMovies;

DELIMITER $$
CREATE TRIGGER movie_year
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
SET NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER update_logs
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
INSERT INTO movies_logs(movie_id, action, log_date)
VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

INSERT INTO movies (movie_id, ticket_price, ticket_price_estimation)
VALUES (1, 12.5, 'cheap');

SELECT * FROM movies;
SELECT * FROM movies_logs;