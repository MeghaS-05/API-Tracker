export default function MethodSelector({
  method,
  setMethod,
}) {
  return (
    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      className="method-selector"
    >
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="PATCH">PATCH</option>
      <option value="DELETE">DELETE</option>
    </select>
  );
}