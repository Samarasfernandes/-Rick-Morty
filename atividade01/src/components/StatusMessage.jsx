import "./StatusMessage.css";
function StatusMessage({ message, className }) {
  return (
    <div id="status-mensagem" className={className}>
      {message}
    </div>
  );
}

export default StatusMessage;