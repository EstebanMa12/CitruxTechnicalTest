/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./styles.sass";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionSendArticle } from "../../redux/article/articleThunks";
const URLSubmitter = () => {
  const [urlInput, setUrlInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state: any) => state.article);

  const submit = (event: any) => {
    event.preventDefault();

    setError("");
    if (!urlInput) {
      setError("Please enter a URL");
      return;
    }

    const navigateToNewSummary = async () => {
      try {
        setLoading(true);
        await dispatch(actionSendArticle(urlInput));
        if (_id) {
          navigate(`/article/${_id}`);
        }
        setLoading(false);
      } catch (error) {
   
        console.error("Error sending article:", error);
        setError("An error occurred while sending the article.");
      }
    }

    navigateToNewSummary()


  };

  return (
    <div className="UrlSubmitter_container">
      <h1 className="UrlSubmitter_title">URL Summarizer</h1>
      <div className="UrlSubmitter">
        <input
          className="UrlSubmitter_input"
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Enter a URL"
        />
        <button
          className="UrlSubmitter_button"
          onClick={submit}
          disabled={loading}
        >
          Submit
        </button>
      </div>
      {error && <div className="UrlSubmitter_error">{error}</div>}
      {loading && <div className="UrlSubmitter_loading">Loading...</div>}
    </div>
  );
};

export default URLSubmitter;
