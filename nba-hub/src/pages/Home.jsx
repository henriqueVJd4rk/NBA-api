import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>🏀 NBA HUB</h1>

        <h2>
          Bem-vindo ao NBA Hub!
        </h2>

        <p>
          Consulte informações sobre jogadores
          de basquete através de uma API externa.
        </p>

        <Link to="/jogadores" className="botao">
          Ver jogadores
        </Link>
      </section>
    </main>
  );
}

export default Home;