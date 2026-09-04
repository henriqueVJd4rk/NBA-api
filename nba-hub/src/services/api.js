const API_URL = "https://www.thesportsdb.com/api/v1/json/123";

export async function buscarJogador(nome) {
  try {
    const resposta = await fetch(
      `${API_URL}/searchplayers.php?p=${encodeURIComponent(nome)}`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar jogador");
    }

    const dados = await resposta.json();

    return dados.player || [];
  } catch (erro) {
    console.error("Erro na API:", erro);
    return [];
  }
}

export async function buscarTimesNBA() {
  try {
    const resposta = await fetch(
      `${API_URL}/search_all_teams.php?l=NBA`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao buscar times");
    }

    const dados = await resposta.json();

    return dados.teams || [];
  } catch (erro) {
    console.error("Erro na API:", erro);
    return [];
  }
}
