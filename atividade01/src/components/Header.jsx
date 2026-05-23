import "./Header.css";
function Header({ count }) {
  return (
    <header className="header">
      <div>
        <h1>🧬 Painel de Personagens</h1>
        <p className="subtitulo">
          Dados consumidos da Rick and Morty API
        </p>
      </div>

      <div className="contador">
        {count ? `${count} personagens` : "—"}
      </div>
    </header>
  );
}

export default Header;