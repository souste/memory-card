import { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import ScoreBoard from "./ScoreBoard";
import getImages from "./api.js";
import "./App.css";

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
      <ScoreBoard />
      <MemoryCard />
      <ul className="image-outer-container">
        {images.map((image) => {
          return (
            <li key={image.id} className="image-container">
              <img src={image.url} alt={image.breeds.name} className="cats-image" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MemoryCards;
