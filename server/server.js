require("dotenv").config();   // MUST be first

const app = require("./app");

require("./config/db");        // DB loads AFTER env is ready

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});