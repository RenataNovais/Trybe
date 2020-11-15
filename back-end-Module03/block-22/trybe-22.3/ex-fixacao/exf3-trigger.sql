USE betrybe_automovies;

DELIMITER $$
CREATE TRIGGER update_log_delete
BEFORE DELETE ON carros
FOR EACH ROW
BEGIN
INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;

SELECT * FROM carros;
SELECT * FROM log_operacoes;