function PlayerCard({ jogador }) {
  return (
    <div className="player-card">
      {jogador.strThumb ? (
        <img
          src={jogador.strThumb}
          alt={jogador.strPlayer}
        />
      ) : (
        <div className="sem-imagem">
          🏀
        </div>
      )}

      <div className="player-info">
        <h2>{jogador.strPlayer}</h2>

        <p>
          <strong>Esporte:</strong>{" "}
          {jogador.strSport || "Basquete"}
        </p>

        <p>
          <strong>País:</strong>{" "}
          {jogador.strNationality || "Não informado"}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {jogador.strTeam || "Não informado"}
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
