import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import getImages from "./api.js";
import "./App.css";

function MemoryCards() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [catArr, setCatArr] = useState([]);

  useEffect(() => {
    getImages().then((images) => {
      setImages(images);
      setLoading(false);
    });
  }, [counter]);

  function handleClick(event) {
    setCounter(counter + 1);
    setCatArr([...catArr, event.target.id]);
    const hasDuplicate = checkDuplicates(catArr);
    if (hasDuplicate) {
      setCounter(0);
    }
  }
  console.log(catArr);

  function checkDuplicates(arr) {
    let hasDuplicate = false;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          hasDuplicate = true;
        }
      }
    }
    return hasDuplicate;
  }

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <div>
      <ScoreBoard counter={counter} />

      <ul className="image-outer-container">
        {images.map((image) => {
          return (
            <li key={image.id} className="image-container">
              <img src={image.url} alt={image.breeds.name} className="cats-image" onClick={handleClick} id={image.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MemoryCards;
