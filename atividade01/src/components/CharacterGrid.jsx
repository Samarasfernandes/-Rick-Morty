import "./CharacterGrid.css";
import CharacterCard from "./CharacterCard";

function CharacterGrid({ characters }) {
  if (characters.length === 0) {
    return (
      <div className="grid">
        <div className="vazio">
          Nenhum personagem encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharacterGrid;