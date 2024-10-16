import Map, { GeolocateControl, Marker } from 'react-map-gl/maplibre';
import { useGetLocation } from '../hooks/useGetLocation';
import 'maplibre-gl/dist/maplibre-gl.css';
import { stationsLocations } from '../assets/stations';

const MapBoxMap = () => {
	const { location } = useGetLocation();

	return (
		<div>
			{location.lat && (
				<Map
					initialViewState={{
						longitude: location.lng,
						latitude: location.lat,
						zoom: 16,
					}}
					style={{ width: 320, height: 240 }}
					mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${
						import.meta.env.VITE_MBOX_API_KEY
					}`}
				>
					{stationsLocations.map(({ lat, lng }) => (
						<Marker
							latitude={lat}
							longitude={lng}
						/>
					))}
					<GeolocateControl />
				</Map>
			)}
		</div>
	);
};

export default MapBoxMap;
