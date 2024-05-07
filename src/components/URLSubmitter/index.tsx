import { useState } from 'react';
import { URLResult } from '../../models/url.models'
import './styles.sass';

const URLSubmitter = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<URLResult | null>(null);

    const submit = async () => {
        if (!url) {
            setError('Please enter a URL');
            return;
        }

        setError('');
        setLoading(true);

        try {
            const response = await fetch(`/api/submit?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            setResult(data);
        } catch (e) {
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
                    <div>Short URL: {result.shortUrl}</div>
                </div>
            )}
        </div>
    );
}


export default URLSubmitter;