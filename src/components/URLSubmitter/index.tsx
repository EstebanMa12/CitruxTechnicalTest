/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { URLResult } from '../../models/url.models'
import './styles.sass';
import axios from 'axios';

const URLSubmitter = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<URLResult | null>(null);

    const apiUrl = "http://localhost:4000/api/v1";

    const submit = async () => {
        if (!url) {
            setError('Please enter a URL');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await axios.post<URLResult>(`${apiUrl}/article`, 
                { url }, // Add curly braces around the 'url' parameter
                { 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setResult(response.data);
        } catch (e) {
            console.error(e);
            setError('An error occurred');
        }

        setLoading(false);
    };

    return (
        <div className='UrlSubmitter_container'>
            <h1 className='UrlSubmitter_title'>
                URL Summarizer
            </h1>
            <div className="UrlSubmitter">
                <input
                    className='UrlSubmitter_input'
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter a URL"
                />
                <button
                className='UrlSubmitter_button'
                onClick={submit} disabled={loading}>
                    Submit
                </button>
            </div>
            {error && <div className='UrlSubmitter_error'>{error}</div>}
            {loading && <div className='UrlSubmitter_loading'>Loading...</div>}
            {result && (
                <div>
                    <div>URL: {result.url}</div>
                    <div>Short URL: {result.content}</div>
                </div>
            )}
        </div>
    );
}


export default URLSubmitter;