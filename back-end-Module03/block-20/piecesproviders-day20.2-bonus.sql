/* BONUS */
use PiecesProviders;
/* exercício 1 */
SELECT Piece, Provider, Price FROM Provides
WHERE Provider = 'RBT';
/* exercício 2 */
SELECT * FROM Provides
ORDER BY Price DESC LIMIT 5;
/* exercício 3 */
SELECT DISTINCT Provider FROM Provides;

/* exercício 4 */
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

/* exercício 5 */
SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;