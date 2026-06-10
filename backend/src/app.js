import { useState } from "react";

import MethodSelector from "./components/Request/MethodSelector";
import UrlInput from "./components/Request/UrlInput";
import JsonEditor from "./components/Request/JsonEditor";
import SendButton from "./components/Request/SendButton";

import ResponsePanel from "./components/Response/ResponsePanel";

import { sendRequest } from "./api/requestApi";

function App() {
  const [method, setMethod] =
    useState("GET");

  const [url, setUrl] =
    useState("");

  const [body, setBody] =
    useState("{}");

  const [response, setResponse] =
    useState({});

  const [status, setStatus] =
    useState("");

  const [time, setTime] =
    useState("");

  const handleSend = async () => {
    try {
      const parsedBody =
        JSON.parse(body);

      const result =
        await sendRequest(
          method,
          url,
          parsedBody
        );

      setResponse(result.data);
      setStatus(result.status);
      setTime(result.time);
    } catch (error) {
      alert(
        "Invalid JSON format"
      );
    }
  };

  return (
    <div>
      <h1>
        API Testing Dashboard
      </h1>

      <MethodSelector
        method={method}
        setMethod={setMethod}
      />

      <UrlInput
        url={url}
        setUrl={setUrl}
      />

      <JsonEditor
        body={body}
        setBody={setBody}
      />

      <SendButton
        onClick={handleSend}
      />

      <ResponsePanel
        response={response}
        status={status}
        time={time}
      />
    </div>
  );
}

export default App;