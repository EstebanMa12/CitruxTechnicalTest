/* eslint-disable @typescript-eslint/no-unused-vars */

import { useParams} from 'react-router-dom';



const SummaryDisplay = () => {
    const { id } = useParams()

    // Ahora puedes usar el ID para cargar los detalles del artículo

    return (
        <div>
            <h1>Summary Display</h1>
            <p>Article ID: {id}</p>
        </div>
    );
}

export default SummaryDisplay;