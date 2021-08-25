const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/*
 Get = listar api
 Post = criar novo elemento
 Put = atualizar elemento
 Delete = remover elemento

  queryParams = Parametros que se passam pelo link apos o link com um ?
  Route params = identificar recursos, com :id, por exemplo
  Body = dados que se passam no corpo da requisição
*/

const stock = [
  {
    id: 1,
    amount: 3,
  },
  {
    id: 2,
    amount: 5,
  },
  {
    id: 3,
    amount: 2,
  },
  {
    id: 4,
    amount: 1,
  },
  {
    id: 5,
    amount: 5,
  },
  {
    id: 6,
    amount: 10,
  },
];
const products = [
  {
    id: 1,
    title: "Tênis de Caminhada Duro Confortável",
    price: 179.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
  },
  {
    id: 2,
    title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
    price: 139.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg",
  },
  {
    id: 3,
    title: "Tênis Adidas Duramo Lite 1.0",
    price: 219.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
  },
  {
    id: 5,
    title: "Tênis VR Caminhada Confortável Detalhes Couro Feminino",
    price: 139.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg",
  },
  {
    id: 6,
    title: "Tênis Adidas Duramo Lite 2.0",
    price: 219.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg",
  },
  {
    id: 4,
    title: "Tênis de Caminhada Leve Confortável",
    price: 179.9,
    image:
      "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",
  },
];

app.get("/products/:id?", (req, res) => {
  const id = req.params.id;

  if (id) {
    const filteredProducts = products.filter(
      (product) => String(product.id) === id
    );
    return res.json(filteredProducts[0]);
  } else {
    return res.json(products);
  }
});

app.get("/stock/:id?", (req, res) => {
  const id = req.params.id;

  if (id) {
    const filteredStockInformation = stock.filter(
      (stockInformation) => String(stockInformation.id) === id
    );
    return res.json(filteredStockInformation[0]);
  } else {
    return res.json(stock);
  }
});

app.post("/products", (req, res) => {
  const { id, title, price, image } = req.body;
  products.push({ id, title, price, image });
  return res.json(products);
});

app.post("/stock", (req, res) => {
  const { id, amount } = req.body;
  console.log(req.body);
  stock.push({ id, amount });
  return res.json(stock);
});

// app.put("/projects/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, owner } = req.body;
//   const projectIndex = projects.findIndex((project) => project.id == id);
//   const changedProject = { id, title, owner };

//   if (projectIndex < 0) {
//     return res.status(404).send("Project not found");
//   } else {
//     projects[projectIndex] = changedProject;
//   }

//   return res.json(changedProject);
// });

// app.delete("/projects/:id", (req, res) => {
//   const { id } = req.params;
//   const { title, owner } = req.body;
//   const projectIndex = projects.findIndex((project) => project.id == id);
//   projects.splice(projectIndex, 1);
//   return res.json(projects);
// });

app.listen(3333, () => {
  console.log("🚀 servidor rodando ");
});
