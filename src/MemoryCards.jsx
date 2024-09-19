import MemoryCard from "./MemoryCard";
import ScoreBoard from "./ScoreBoard";
import fetchImages from "./api.js";

fetchImages();

function MemoryCards() {
  return (
    <>
      <h2>Memory Cards</h2>
      <ScoreBoard />
      <MemoryCard />
    </>
  );
}

export default MemoryCards;
