const express = require('express');
const cors = require('cors');
const repo = require('gh-repo-reader'); 

const app = express();
app.use(cors());

const GITHUB_USER = "Montilla007";

// GET all repositories
app.get('/repos', async (req, res) => {
    try {
        const client = await repo.fetch(GITHUB_USER);
        const repos = client;

        const sorted = repo.sortByLatest(repos);
        const summarized = repo.summarize(sorted);
        res.json(summarized);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch repositories", message: err.message });
    }
});




app.listen(3000, () => console.log("Server running on http://localhost:3000"));
