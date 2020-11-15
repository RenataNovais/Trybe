USE BeeMovies;

DELIMITER $$
CREATE TRIGGER save_deleted_date
	AFTER DELETE ON movies
	FOR EACH ROW
BEGIN
INSERT INTO movies_logs(movie_id, action, log_date)
VALUES (OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

DELETE FROM movies
WHERE movie_id = 1;

DROP TRIGGER save_deleted_date;

SELECT * FROM movies;
SELECT * FROM movies_logs;