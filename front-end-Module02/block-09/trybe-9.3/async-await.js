// criar promise que passa ou falha, dependendo um numero aleatório
const promise = () => {
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
  
  if (result > 8000) console.log('É mais de oito mil! Essa promise deve estar quebrada!');

  return result;
}

// função que cria array com resultado da divisão do número
const arrDivisor = [2, 3, 5, 10];
const resultArrDiv = (result) => arrDivisor.map(div => result / div);

// refatora uma Promisse para um async/await. Não peguei muito bem ainda async/await;
async function result() {
  try {
    const sum = await promise();
    console.log(sum);
    const arrDiv = await resultArrDiv(sum);
    console.log(arrDiv);  
  } catch (err) {
    console.log(err)
  };
}

result();