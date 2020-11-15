// exemplos do conteúdo
db.articles.insertMany([
  { _id: ObjectId("512bc95fe835e68f199c8686"), author: "dave", score: 80, views: 100 },
  { _id: ObjectId("512bc962e835e68f199c8687"), author: "dave", score: 85, views: 521 },
  { _id: ObjectId("55f5a192d4bede9ac365b257"), author: "ahn", score: 60, views: 1000 },
  { _id: ObjectId("55f5a192d4bede9ac365b258"), author: "li", score: 55, views: 5000 },
  { _id: ObjectId("55f5a1d3d4bede9ac365b259"), author: "annT", score: 60, views: 50 },
  { _id: ObjectId("55f5a1d3d4bede9ac365b25a"), author: "li", score: 94, views: 999 },
  { _id: ObjectId("55f5a1d3d4bede9ac365b25b"), author: "ty", score: 95, views: 1000 }
]);

db.articles.aggregate(
  [{ $match : { author : "dave" } }]
);

db.articles.aggregate(
  [
    {
      $match: {
        $or: [
          { score: { $gt: 70, $lt: 90 } },
          { views: { $gte: 1000 } }
        ]
      }
    }
  ]
);

// orders
db.orders.insertMany([
  { _id: 1, item: "almonds", price: 12, quantity: 2 },
  { _id: 2, item: "pecans", price: 20, quantity: 1 },
  { _id: 3 }
]);

// inventory
db.inventory.insertMany([
  { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { _id: 2, sku: "bread", description: "product 2", instock: 80 },
  { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
  { _id: 5, sku: null, description: "Incomplete" },
  { _id: 6 }
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

db.orders.updateOne({_id: 3}, {$set: {item: "cookies", price: 10, ordered: 60 }});

db.warehouse.insertMany([
  { _id: 1, stock_item: "almonds", warehouse: "A", instock: 120 },
  { _id: 2, stock_item: "pecans", warehouse: "A", instock: 80 },
  { _id: 3, stock_item: "almonds", warehouse: "B", instock: 60 },
  { _id: 4, stock_item: "cookies", warehouse: "B", instock: 40 },
  { _id: 5, stock_item: "cookies", warehouse: "A", instock: 80 }
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "warehouse",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] }
              ]
            }
          }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);

// sales
db.sales.insertMany([
  {
    _id: 1,
    item: "abc",
    price: NumberDecimal("10"),
    quantity: NumberInt("2"),
    date: ISODate("2014-03-01T08:00:00Z")
  },
  {
    _id: 2,
    item: "jkl",
    price: NumberDecimal("20"),
    quantity: NumberInt("1"),
    date: ISODate("2014-03-01T09:00:00Z")
  },
  {
    _id: 3,
    item: "xyz",
    price: NumberDecimal("5"),
    quantity: NumberInt( "10"),
    date: ISODate("2014-03-15T09:00:00Z")
  },
  {
    _id: 4,
    item: "xyz",
    price: NumberDecimal("5"),
    quantity:  NumberInt("20"),
    date: ISODate("2014-04-04T11:21:39.736Z")
  },
  {
    _id: 5,
    item: "abc",
    price: NumberDecimal("10"),
    quantity: NumberInt("10"),
    date: ISODate("2014-04-04T21:23:13.331Z")
  },
  {
    _id: 6,
    item:"def",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("5" ),
    date: ISODate("2015-06-04T05:08:13Z")
  },
  {
    _id: 7,
    item: "def",
    price: NumberDecimal("7.5"),
    quantity: NumberInt("10"),
    date: ISODate("2015-09-10T08:43:00Z")
  },
  {
    _id: 8,
    item: "abc",
    price: NumberDecimal("10"),
    quantity: NumberInt("5" ),
    date: ISODate("2016-02-06T20:20:13Z")
  }
]);

db.sales.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);

db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

db.sales.aggregate([
  // Primeiro Estágio
  {
    $group: {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  // Segundo Estágio
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

db.sales.aggregate([
  {
    $group : {
      _id : null, // realiza a operação em todos os documentos da coleção
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);

db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });