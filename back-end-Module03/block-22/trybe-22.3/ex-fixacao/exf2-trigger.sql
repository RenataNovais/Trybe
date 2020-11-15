USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER update_date_and_action
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
	NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE carros
SET preco = 90000
WHERE carros.id_carro = 1;

SELECT * FROM carros;