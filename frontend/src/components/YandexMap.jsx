import { GeolocationControl, Map, Placemark } from '@pbe/react-yandex-maps';
import { useGetLocation } from '../hooks/useGetLocation';

export const YandexMap = () => {
	const { location, isLoading } = useGetLocation();

	return (
		<div>
			{!isLoading && location.lat && (
				<Map defaultState={{ center: [location.lat, location.lng], zoom: 15 }}>
					<Placemark defaultGeometry={[location.lat, location.lng]} />
					<GeolocationControl />
				</Map>
			)}
		</div>
	);
};
