import { useState } from "react";
import { buscarJogador } from "../services/api";
import PlayerCard from "../components/PlayerCard";

function Players() {
  const [nome, setNome] = useState("");
  const [jogadores, setJogadores] = useState([]);
  const [carregando, setCarregando] = useState(false);

  async function pesquisarJogador(event) {
    event.preventDefault();

    if (!nome.trim()) {
      return;
    }

    setCarregando(true);

    const resultado = await buscarJogador(nome);

    setJogadores(resultado);

    setCarregando(false);
  }

  return (
    <main className="players-page">

      <h1>🏀 Pesquisar Jogadores</h1>

      <form onSubmit={pesquisarJogador} className="search-form">

        <input
          type="text"
          placeholder="Digite o nome do jogador"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <button type="submit">
          Pesquisar
        </button>

      </form>

      {carregando && (
        <p className="mensagem">
          Buscando jogador...
        </p>
      )}

      {!carregando && jogadores.length === 0 && (
        <p className="mensagem">
          Digite o nome de um jogador para pesquisar.
        </p>
      )}

      <div className="players-grid">

        {jogadores.map((jogador) => (
          <PlayerCard
            key={jogador.idPlayer}
            jogador={jogador}
          />
        ))}

      </div>

    </main>
  );
}

export default Players;
