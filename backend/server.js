import cors from "cors";
import express from "express";
// import repo from "gh-repo-reader";

const app = express();
app.use(cors());

const GITHUB_USER = "Montilla007";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos`
    );
    const data = await response.json();

    // Sort by latest updated
    const sorted = data.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );

    // Summarize repos
    const summarized = sorted.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      language: repo.language,
      lastUpdated: repo.updated_at,
      html_url: repo.html_url,
    }));

    res.status(200).json(summarized);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch repositories",
      message: err.message,
    });
  }
}

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
