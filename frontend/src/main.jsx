import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { YMaps } from '@pbe/react-yandex-maps';
import { APIProvider } from '@vis.gl/react-google-maps';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<APIProvider apiKey={import.meta.env.VITE_GMAPS_API_KEY}>
			<YMaps query={{ apikey: import.meta.env.VITE_YMAPS_API_KEY }}>
				<App />
			</YMaps>
		</APIProvider>
	</StrictMode>
);
