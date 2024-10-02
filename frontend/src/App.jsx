import { useEffect, useState } from 'react';
import { YandexMap } from './components/YandexMap';

function App() {
	const [position, setPosition] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
				const { latitude, longitude } = position.coords;
				setPosition({ latitude, longitude });
			},
			(err) => console.log(err)
		);
	}, []);
	console.log(JSON.stringify(position));
	return (
		<>
			<p>{JSON.stringify(position)}</p>
			{position && (
				<YandexMap
					lat={position.latitude}
					lng={position.longitude}
				/>
			)}
		</>
	);
}

export default App;
