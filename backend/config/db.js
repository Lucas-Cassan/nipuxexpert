const mongoose = require("mongoose");

// Connection to the bdd
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_PASSW +
      "@cluster0.ej0sc.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB is ready."))
  .catch((err) => console.log("Connexion error", err));
