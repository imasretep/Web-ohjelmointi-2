import { useState } from "react"
import wordsService from "../Services/words";

const AddWords = () => {
  const [finnishWord, setFinnishWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");


  const submit = async (e) => {
    e.preventDefault();
    const newWord = {
      fin: finnishWord,
      eng: englishWord,
    }

    wordsService.postWord(newWord);
  }

  return (
    <div>
      <h1>Add words</h1>

      <form onSubmit={submit}>
        <div>Finnish: <input value={finnishWord} onChange={(e) => setFinnishWord(e.target.value)} /></div>
        <div>English: <input value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} /></div>

        <button>Submit</button>
      </form>

    </div>
  )
}

export default AddWords
