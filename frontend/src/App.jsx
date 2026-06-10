import { useState } from "react";

import MethodSelector from "./components/Request/MethodSelector";
import UrlInput from "./components/Request/UrlInput";
import SendButton from "./components/Request/SendButton";
import ResponsePanel from "./components/Response/ResponsePanel";
import JsonEditor from "./components/Request/JsonEditor";
import FormatJsonButton from "./components/Request/FormatJsonButton";

import { sendRequest } from "./api/requestApi";

function App() {
  const [method, setMethod] =
    useState("GET");

  const [url, setUrl] =
    useState("");
  
  const [body, setBody] = useState("{}");

  const [response, setResponse] =
    useState({});

  const [status, setStatus] =
    useState("");

  const [time, setTime] =
    useState("");

  const handleSend = async () => {
    try {
      const result =
        await sendRequest(
          method,
          url
        );

      setResponse(result.data);
      setStatus(result.status);
      setTime(result.time);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="app">
    <h1>API Testing Dashboard</h1>

    <div className="request-bar">
      <MethodSelector
        method={method}
        setMethod={setMethod}
      />

      <UrlInput
        url={url}
        setUrl={setUrl}
      />

      <FormatJsonButton
  body={body}
  setBody={setBody}
/>

      <SendButton
        onClick={handleSend}
      />
    </div>

    <div className="workspace">
      <div className="request-panel">
        <JsonEditor
          body={body}
          setBody={setBody}
        />
      </div>

      <div className="response-panel">
        <ResponsePanel
          response={response}
          status={status}
          time={time}
        />
      </div>
    </div>
  </div>
);
}

export default App;