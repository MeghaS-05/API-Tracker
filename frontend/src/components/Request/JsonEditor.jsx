import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";

export default function JsonEditor({
  body,
  setBody,
}) {
  return (
    <div>
      <h3>Request Body</h3>

      <CodeMirror
        value={body}
        height="450px"
        extensions={[json()]}
        onChange={(value) =>
          setBody(value)
        }
      />
    </div>
  );
}