import "./Pagination.css";
function Pagination({ infoApi, page, setPage }) {
  if (!infoApi) return null;

  return (
    <div className="paginacao">
      <div className="pag-info">
        {infoApi.count} personagens · Página {page} de{" "}
        {infoApi.pages}
      </div>

      <div className="pag-botoes">
        <button
          className="btn-pag"
          disabled={!infoApi.prev}
          onClick={() => setPage(page - 1)}
        >
          ← Anterior
        </button>

        <button
          className="btn-pag proximo"
          disabled={!infoApi.next}
          onClick={() => setPage(page + 1)}
        >
          Próxima →
        </button>
      </div>
    </div>
  );
}

export default Pagination;