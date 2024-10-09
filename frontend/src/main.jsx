import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { YMaps } from '@pbe/react-yandex-maps';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<YMaps query={{ apikey: import.meta.env.VITE_YMAPS_API_KEY }}>
			<App />
		</YMaps>
	</StrictMode>
);
