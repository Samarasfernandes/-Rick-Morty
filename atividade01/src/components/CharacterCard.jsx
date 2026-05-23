import "./CharacterCard.css";
function CharacterCard({ character }) {
  const statusClass =
    character.status === "Alive"
      ? "badge-alive"
      : character.status === "Dead"
      ? "badge-dead"
      : "badge-unknown";

  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className="card-img"
      />

      <div className="card-body">
        <div className="card-nome">{character.name}</div>

        <div className="card-especie">
          {character.species}
        </div>

        <span className={`badge ${statusClass}`}>
          {character.status}
        </span>
      </div>
    </div>
  );
}

export default CharacterCard;