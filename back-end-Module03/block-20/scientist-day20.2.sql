/* exercício 1 */
SELECT 'This is SQL Exercise, Practice and Solution';
/* exercício 2 */
SELECT 1, 2, 3;
/* exercício 3 */
SELECT 10 + 15;
/* exercício 4 */
SELECT 10 * 2 / 5;

use Scientists;
/* exercício 5 */
SELECT * FROM Scientists;
/* exercício 6 */
SELECT Name, Hours FROM Projects;
/* exercício 7 */
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;
/* exercício 8 */
SELECT DISTINCT Project FROM AssignedTo;
/* exercício 9 */
SELECT Scientist FROM AssignedTo
WHERE Project = 'Ast3';
/* exercício 10 */
SELECT Name, Hours FROM Projects
ORDER BY Hours LIMIT 5;