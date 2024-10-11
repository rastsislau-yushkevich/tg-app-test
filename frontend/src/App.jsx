import { YandexMap } from './components/YandexMap';
import GoogleMap from './components/GoogleMap';

function App() {
	return (
		<div style={{ display: 'flex', gap: '30px' }}>
			<YandexMap />
			<GoogleMap />
		</div>
	);
}

export default App;
