USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER insert_date_and_storage
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
SET NEW.data_atualizacao = NOW(),
	NEW.acao = 'INSERÇÃO',
    NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

INSERT INTO carros(preco)
VALUES(70000);

SELECT * FROM carros;