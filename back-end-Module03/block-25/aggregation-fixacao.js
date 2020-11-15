// exercícios de fixação
db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'floridaBank' },
]);

// Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate([{$match: {from: "Dave America"}}]);

// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          { value: { $gt: 700, $lt: 6000 } },
          { to: "Lisa Simpson" }
        ]
      }
    }
  ]
);

// Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([
  {$match: {value: {$gt: 1000}}},
  {$limit: 3}
]);

db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {$lookup: {
    from: "transactions",
    let: {client_name: "$name"},
    pipeline: [
      {$match: {
        $expr: {$eq: ["$from", "$$client_name"]}
      }},
    ],
    as: "transacoes_feitas"
  }}
]);

// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  {$lookup: {
    from: "transactions",
    let: {client_name: "$name"},
    pipeline: [
      {$limit: 4},
      {$match: {
        $expr: {$eq: ["$to", "$$client_name"]}
      }}
    ],
    as: "transacoes_recebidas"
  }}
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  {$match: {State: "Florida"}},
  {$lookup: {
    from: "transactions",
    let: {client_name: "$name", state: "$State"},
    pipeline: [
      {$match: {
        $expr: {
          $and: [
            {$eq: ["$to", "$$client_name"]},
            {$eq: ["$$state", "Florida"]},
          ]
        }
      }}
    ],
    as: "transacoes_recebidas"
  }}
]).pretty();
