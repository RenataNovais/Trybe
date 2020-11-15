USE hr;

ALTER TABLE countries CHANGE COUNTRY_NAME country VARCHAR(40);

SELECT * FROM countries;
