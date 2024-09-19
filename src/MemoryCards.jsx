import { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import ScoreBoard from "./ScoreBoard";
import getImages from "./api.js";
import "../App.css";

function MemoryCards() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages().then((images) => {
      setImages(images);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <div>
      <h2>Memory Cards</h2>

      <ScoreBoard />
      <MemoryCard />
      <ul className="image-container">
        {images.map((image) => {
          return (
            <li key={image.id}>
              <p>image.height</p>
              <img src={image.url} alt={image.breeds.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MemoryCards;
