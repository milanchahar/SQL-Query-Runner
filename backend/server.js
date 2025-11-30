import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("SQL Query Runner backend is active!");
});

app.post("/api/query", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ success: false, error: "Query is required." });

  try {
    const queries = query.split(";").map((q) => q.trim()).filter(Boolean);
    let lastResult = null;

    for (const q of queries) {
      const lower = q.toLowerCase();
      if (lower.startsWith("select")) {
        lastResult = await prisma.$queryRawUnsafe(q);
      } else {
        await prisma.$executeRawUnsafe(q);
      }
    }

    if (lastResult) {
      res.json({ success: true, type: "select", result: lastResult });
    } else {
      res.json({ success: true, type: "nonselect" });
    }
  } catch (err) {
    console.error("SQL Error:", err.message);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
