import { useEffect, useState } from 'react';

function App() {
	const [position, setPosition] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			const { latitude, longitude } = position.coords;
			setPosition({ latitude, longitude });
			window.Telegram.WebApp.sendData(JSON.stringify({ latitude, longitude }));
		});
	}, []);

	return <p>{JSON.stringify(position)}</p>;
}

export default App;
