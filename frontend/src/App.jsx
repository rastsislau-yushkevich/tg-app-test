import { YandexMap } from './components/YandexMap';
import GoogleMap from './components/GoogleMap';
import MapBoxMap from './components/MapBoxMap';

function App() {
	return (
		<div style={{ display: 'flex', gap: '30px' }}>
			<YandexMap />
			<GoogleMap />
			<MapBoxMap />
		</div>
	);
}

export default App;
