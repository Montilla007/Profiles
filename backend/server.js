import cors from "cors";
import express from "express";
import repo from "gh-repo-reader";

const app = express();
app.use(cors());

const GITHUB_USER = "Montilla007";

// GET all repositories
app.get("/api/repos", async (req, res) => {
  try {
    const repos = await repo.fetch(GITHUB_USER);

    const sorted = repo.sortByLatest(repos);
    const summarized = repo.summarize(sorted);

    res.status(200).json(summarized);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch repositories",
      message: err.message,
    });
  }
});

// Root route
app.get("/", (_req, res) => {
  res.json({
    status: "OK",
    message: `Profile Backend Running in ${PORT || "development"} mode 🚀`,
  });
});

// Use PORT environment variable or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
