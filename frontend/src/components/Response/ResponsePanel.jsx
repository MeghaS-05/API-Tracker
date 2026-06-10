export default function ResponsePanel({
  response,
  status,
  time,
}) {
  return (
    <>
      <h3>Status: {status}</h3>

      <h3>Time: {time} ms</h3>

      <pre>
        {JSON.stringify(
          response,
          null,
          2
        )}
      </pre>
    </>
  );
}