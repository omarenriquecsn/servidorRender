// "use strict";
// const express = require("express");
// const path = require("path");
// const serverless = require("serverless-http");
// const app = express();
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");

// app.listen(3000, () => console.log('Local app listening on port 3000!'));

// mongoose.connect(
//   "mongodb+srv://omarenriquecs:P2wEdgjBpWWBxUtS@prueba.1w2j9.mongodb.net/Sumichen"
// );

// const Schema = mongoose.Schema;

// const schemaGlobalca = new Schema({
//   id: Number,
//   producto: String,
//   fechaIn: String,
//   fechaVen: String,
//   lote: String,
//   cantidadDisponible: Number,
//   cantidadApartada: Number,
//   almacen: String,
// });

// const Globalca = mongoose.model("Globalca", schemaGlobalca);

// const schemaWMS = new Schema({
//   id: Number,
//   producto: String,
//   fechaIn: String,
//   fechaVen: String,
//   lote: String,
//   cantidadDisponible: Number,
//   cantidadApartada: Number,
//   almacen: String,
// });

// const WMS = mongoose.model("WMS", schemaWMS);

// const schemaDespachos = new Schema({
//   id: Number,
//   name: String,
//   producto: String,
//   cantidad: Number,
//   date: String,
//   status: String,
// });

// const Despachos = mongoose.model("Despachos", schemaDespachos);

// const schemaClientes = new Schema({
//   id: Number,
//   name: String,
//   rif: Number,
// });

// const Clientes = mongoose.model("Clientes", schemaClientes);

// const importGlobalca = async () => {
//   const lista = await Globalca.find();
//   return lista;
// };

// const importWMS = async () => {
//   const lista = await WMS.find();
//   return lista;
// };

// const importDespachos = async () => {
//   const lista = await Despachos.find();
//   return lista;
// };

// const importClientes = async () => {
//   const lista = await Clientes.find();
//   return lista;
// };
// const router = express.Router();

// router.put("/", (req, res) => {
//   console.log(req.body);
// });

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Globalca.html"));
//   res.end();
// });

// router.post("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../Globalca.html"))
// );

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/.netlify/functions/server", router); // path must route to lambda

// app.use("/Globalca", async (req, res) => {
//   if (req.body.producto) {
//     try {
//       await Globalca.create(req.body);
//       res.json(req.body);

//     } catch(error) {
//       console.log(error);
//     }
//   } else if (req.body.change) {
//     const filter = { id: req.body.id };
//     const update = {
//       $set: {
//         cantidadDisponible: req.body.cantidadDisponible,
//         cantidadApartada: req.body.cantidadApartada,
//       },
//     };
//     const opts = { new: true };
//     console.log(req.body);
//     const objectUpdate = await Globalca.findOneAndUpdate(filter, update, opts);
//   } else {
//     const productos = await importGlobalca();

//     res.json(productos);
//   }
// });

// app.use("/WMS", async (req, res) => {
//   if (req.body.producto) {
//     WMS.create(req.body);
//     res.json(req.body);

//   } else if (req.body.change) {
//     const filter = { id: req.body.id };
//     const update = {
//       $set: {
//         cantidadDisponible: req.body.cantidadDisponible,
//         cantidadApartada: req.body.cantidadApartada,
//       },
//     };
//     const opts = { new: true };
//     const objectUpdate = await WMS.findOneAndUpdate(filter, update, opts);
//   } else {
//     const productos = await importWMS();

//     res.json(productos);
//   }
// });

// app.use("/Despachos", async (req, res) => {
//   if (req.body.producto) {
//     Despachos.create(req.body);
//     res.json(req.body);

//   }
//     else if(req.body.change){
//       const filter = { id: req.body.id };
//     const update = {
//       $set: {
//         status: req.body.status
//       },
//     };
//     const opts = { new: true };
//     const objectUpdate = await WMS.findOneAndUpdate(filter, update, opts);
//     }
//    else {
//     const productos = await importDespachos();
//     res.json(productos);

//   }
// });

// app.use("/Clientes", async (req, res) => {
//   if (req.body.name) {
//     Clientes.create(req.body);
//     res.json(req.body);
//     console.log("post");
//   } else {
//     const productos = await importClientes();
//     console.log("clientes");
//     res.json(productos);
//   }
// });

// module.exports = app;
// module.exports.handler = serverless(app);

"use strict";
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.listen(process.env.PORT || 3000, () =>
  console.log("Local app listening on port 3000!")
);

mongoose.connect(
  "mongodb+srv://omarenriquecs:P2wEdgjBpWWBxUtS@prueba.1w2j9.mongodb.net/Sumichen"
);

const Schema = mongoose.Schema;

const schemaGlobalca = new Schema({
  id: Number,
  producto: String,
  fechaIn: String,
  fechaVen: String,
  lote: String,
  cantidadDisponible: Number,
  cantidadApartada: Number,
  almacen: String,
});

const Globalca = mongoose.model("Globalca", schemaGlobalca);

const schemaWMS = new Schema({
  id: Number,
  producto: String,
  fechaIn: String,
  fechaVen: String,
  lote: String,
  cantidadDisponible: Number,
  cantidadApartada: Number,
  almacen: String,
});

const WMS = mongoose.model("WMS", schemaWMS);

const schemaDespachos = new Schema({
  id: Number,
  name: String,
  producto: String,
  cantidad: Number,
  date: String,
  status: String,
});

const Despachos = mongoose.model("Despachos", schemaDespachos);

const schemaClientes = new Schema({
  id: Number,
  name: String,
  rif: Number,
});

const Clientes = mongoose.model("Clientes", schemaClientes);

const importGlobalca = async () => {
  const lista = await Globalca.find();
  return lista;
};

const importWMS = async () => {
  const lista = await WMS.find();
  return lista;
};

const importDespachos = async () => {
  const lista = await Despachos.find();
  return lista;
};

const importClientes = async () => {
  const lista = await Clientes.find();
  return lista;
};

const router = express.Router();

router.put("/", (req, res) => {
  console.log(req.body);
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Globalca.html"));
  res.end();
});

router.post("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../Globalca.html"))
);

app.use(cors());
app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

app.use("/Globalca", async (req, res) => {
  if (req.body.producto) {
    try {
      await Globalca.create(req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  } else if (req.body.contador) {
    const conteo = await Globalca.countDocuments();
    
    res.json(conteo);
  } else if (req.body.change) {
    const filter = { id: req.body.id };
    const update = {
      $set: {
        cantidadDisponible: req.body.cantidadDisponible,
        cantidadApartada: req.body.cantidadApartada,
      },
    };
    const opts = { new: true };
    const objectUpdate = await Globalca.findOneAndUpdate(filter, update, opts);
    res.json(req.body);
  } else {
    const productos = await importGlobalca();
    res.json(productos);
  }
});

app.use("/WMS", async (req, res) => {
  if (req.body.producto) {
    try {
      await WMS.create(req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  } else if (req.body.contador) {
    
    const conteo = await WMS.countDocuments();
    res.json(conteo);
  } else if (req.body.change) {
    const filter = { id: req.body.id };
    const update = {
      $set: {
        cantidadDisponible: req.body.cantidadDisponible,
        cantidadApartada: req.body.cantidadApartada,
      },
    };
    const opts = { new: true };
    const objectUpdate = await WMS.findOneAndUpdate(filter, update, opts);
    res.json(req.body);
  } else {
    const productos = await importWMS();
    res.json(productos);
  }
});

app.use("/Despachos", async (req, res) => {
  if (req.body.producto) {
    try {
      await Despachos.create(req.body);
      res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  } else if (req.body.contador) {
    const conteo = await Despachos.countDocuments();
    res.json(conteo);
  } else if (req.body.change) {
    const filter = { id: req.body.id };
    const update = {
      $set: {
        status: req.body.status,
      },
    };
    const opts = { new: true };
    const objectUpdate = await Despachos.findOneAndUpdate(filter, update, opts);
    res.json(req.body);
  }  else {
    const productos = await importDespachos();
    res.json(productos);
  }
});

app.use("/Clientes", async (req, res) => {
  if (req.body.name) {
    try {
      await Clientes.create(req.body);
      res.json(req.body);
      console.log("post");
    } catch (error) {
      console.log(error);
    }
  } else if (req.body.contador) {
    const conteo = await Clientes.countDocuments();
    res.json(conteo);
  } else {
    const productos = await importClientes();
    console.log("clientes");
    res.json(productos);
  }
});

module.exports = app;
module.exports.handler = serverless(app);
