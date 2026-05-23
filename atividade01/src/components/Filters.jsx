import "./Filters.css";
function Filters({ status, setStatus, setPage }) {
  const filters = [
    { label: "Todos", value: "all", className: "" },
    { label: "Alive", value: "alive", className: "vivo" },
    { label: "Dead", value: "dead", className: "morto" },
    { label: "Unknown", value: "unknown", className: "desconhecido" },
  ];

  function handleFilter(value) {
    setStatus(value);
    setPage(1);
  }

  return (
    <div className="filtros">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`btn-filtro ${filter.className} ${
            status === filter.value ? "ativo" : ""
          }`}
          onClick={() => handleFilter(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;