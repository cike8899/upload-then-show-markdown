import HightLightMarkdown from "@/components/highlight-markdown";
import { ChangeEventHandler, useCallback, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function HomePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const upload: ChangeEventHandler<any> = useCallback(async (e) => {
    try {
      setLoading(true);
      console.log("🚀 ~ upload ~ params:", e.target.files);
      const files = e.target.files;
      const formData = new FormData();
      formData.append("file", files[0]);

      const ret = await fetch("/upload", { method: "POST", body: formData });
      const data = await ret.text();
      if (data) {
        setText(data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h2>Upload</h2>
      <div>
        <input type="file" name="" id="" onChange={upload} accept=".pdf" />
      </div>
      <div style={{ height: 800, width: "100%", padding: 20 }}>
        {loading ? (
          <ClipLoader color="#2d56ef" size={50}></ClipLoader>
        ) : (
          <HightLightMarkdown>{text}</HightLightMarkdown>
        )}
      </div>
    </div>
  );
}
