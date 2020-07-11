// criar promise que passa ou falha, dependendo um numero aleatório
const promise = () => {
  // dúvida sobre essa construção...
  return new Promise((resolve, reject) => {
    const sum = () => {
      const arrNum = [];
      for (let i = 1; i < 11; i += 1) {
        // gera um numero aleatório entre 0 e 1, multiplica por 50, arredonda pra baixo e eleva por 2;
        const num = Math.pow(Math.floor(Math.random() * 50), 2); 
        arrNum.push(num);
      }
      return arrNum.reduce(((total, num) => total += num), 0);
    };
    const result = sum();

    // função que cria array com resultado da divisão do número
    const arrDivisor = [2, 3, 5, 10];
    const resultArrDiv = [];
    arrDivisor.forEach(div => resultArrDiv.push(result / div));

    if (result < 8000) resolve(resultArrDiv)
    else reject('É mais de oito mil! Essa promise deve estar quebrada!');
  })
};

promise()
    .then((result) => result)
    .then(result => console.log(result.reduce(((total, num) => total += num), 0)))
    .catch((err) => console.log(err));
    