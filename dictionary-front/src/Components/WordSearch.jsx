import { useState } from "react"
import wordsService from "../Services/words"


const WordSearch = () => {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    const result = await wordsService.getWord(searchWord);

    const wordObject = {
      fin: searchWord,
      eng: result,
    }

    setWord(wordObject);
    setSearchWord("");
  }

  return (
    <div>
      <h1>Search words</h1>

      {word.eng ?
        <div>
          Finnish: <strong>{word.fin}</strong>  English: <strong>{word.eng}</strong>
        </div>
        : null}
      <form onSubmit={submit}>
        <input
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />

        <button>Search</button>
      </form>
    </div>
  )
}

export default WordSearch
