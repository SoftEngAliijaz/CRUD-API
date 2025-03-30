const mongoose = require("mongoose");

async function configureDatabase(databaseUrl) {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1); // Exit process with failure
  }
}

module.exports = { configureDatabase };
