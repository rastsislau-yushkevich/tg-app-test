import { GeolocationControl, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

export const YandexMap = () => {
	const [position, setPosition] = useState([]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setPosition([position.coords.latitude, position.coords.longitude]);
			},
			(err) => console.log(err)
		);
	}, []);

	return (
		<div>
			{position && (
				<Map defaultState={{ center: position, zoom: 15 }}>
					<Placemark defaultGeometry={position} />
					<GeolocationControl />
				</Map>
			)}
		</div>
	);
};
