import "./SearchBar.css";
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      id="campo-busca"
      placeholder="🔍 Buscar por nome..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;