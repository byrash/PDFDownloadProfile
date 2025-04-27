// Make sure you have "type": "module" in package.json or use .mjs extension

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname (because it's not available in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static PDF files from a "pdfs" directory
const pdfsDirectory = path.join(__dirname, 'pdfs');
app.use('/pdfs', express.static(pdfsDirectory));

// Serve index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
