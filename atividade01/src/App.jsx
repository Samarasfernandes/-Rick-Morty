import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CharacterGrid from "./components/CharacterGrid";
import Pagination from "./components/Pagination";
import StatusMessage from "./components/StatusMessage";

import "./styles/global.css";

function App() {
  // PERSONAGENS
  const [characters, setCharacters] = useState([]);

  // INFORMAÇÕES DA API
  const [infoApi, setInfoApi] = useState(null);

  // PAGINAÇÃO
  const [page, setPage] = useState(1);

  // FILTRO
  const [status, setStatus] = useState("all");

  // BUSCA
  const [search, setSearch] = useState("");

  // STATUS DA MENSAGEM
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  // BUSCAR PERSONAGENS
  useEffect(() => {
    async function loadCharacters() {
      try {
        setMessage("⏳ Carregando...");
        setMessageClass("loading");

        let url = `https://rickandmortyapi.com/api/character?page=${page}`;

        if (status !== "all") {
          url += `&status=${status}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro ao buscar personagens");
        }

        const data = await response.json();

        setCharacters(data.results);
        setInfoApi(data.info);

        setMessage("✅ Dados carregados");
        setMessageClass("sucesso");
      } catch {
        setMessage("❌ Erro ao carregar personagens");
        setMessageClass("erro");
        setCharacters([]);
      }
    }

    loadCharacters();
  }, [page, status]);

  // FILTRAR PERSONAGENS
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* HEADER */}
      <Header count={infoApi?.count} />

      {/* CONTROLES */}
      <div className="controles">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filters
          status={status}
          setStatus={setStatus}
          setPage={setPage}
        />
      </div>

      {/* STATUS */}
      <StatusMessage
        message={message}
        className={messageClass}
      />

      {/* GRID */}
      <CharacterGrid characters={filteredCharacters} />

      {/* PAGINAÇÃO */}
      <Pagination
        infoApi={infoApi}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;