export default function FormatJsonButton({
  body,
  setBody,
}) {
  const formatJson = () => {
    try {
      const formatted =
        JSON.stringify(
          JSON.parse(body),
          null,
          2
        );

      setBody(formatted);
    } catch {
      alert(
        "Invalid JSON"
      );
    }
  };

  return (
    <button
      onClick={formatJson}
    >
      Format JSON
    </button>
  );
}