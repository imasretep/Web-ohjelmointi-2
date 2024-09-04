const dictionariesRouter = require("express").Router();
const { warn } = require("console");
const fs = require("fs");

let dictionary = [];

const wordSplitter = () => {
  const data = fs.readFileSync("./dictionary.txt", {
    encoding: "utf8",
    flag: "r",
  });

  const splitLines = data.split(/\r?\n/);

  splitLines.forEach((line) => {
    const words = line.split(" ");
    const word = {
      fin: words[0],
      eng: words[1],
    };
    dictionary.push(word);
  });
  return dictionary;
};

// GET
dictionariesRouter.get("/", (req, res) => {
  res.json(wordSplitter());
});

// GET:ID
dictionariesRouter.get("/:id", (req, res) => {
  dictionary = wordSplitter();
  const word = req.params.id;

  const correctWord = dictionary.filter((w) => w.fin === word);

  if (correctWord.length > 0) {
    res.json(correctWord[0].eng);
  } else {
    res.status(404).json({ error: "word not found" });
  }
});

// POST
dictionariesRouter.post("/", (req, res) => {
  const { fin, eng } = req.body;

  if (!fin || !eng) {
    return res
      .status(400)
      .json({ error: "Finnish and English words are required" });
  }

  try {
    fs.appendFileSync("./dictionary.txt", `\n${fin} ${eng}`);
    res.json({ success: "Word was added succesfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding the word" });
  }
});
module.exports = dictionariesRouter;
