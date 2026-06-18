// CI/CD Pipeline Project - updated for merge evidence
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>MILESTONE 2</h1>
                <h1>MILESTONE 3</h1>
                <h1>MILESTONE 4</h1>

            </body>
        </html>
    `);
});

// ONLY start server if NOT in test mode
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;


