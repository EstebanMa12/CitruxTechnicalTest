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
        <div className='UrlSubmitterContainer'>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter a URL"
            />
            <button onClick={submit} disabled={loading}>
                Submit
            </button>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
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