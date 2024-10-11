import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { useGetLocation } from '../hooks/useGetLocation';
import { useEffect, useState } from 'react';
import { usePlacesService } from '../hooks/usePlacesService';

const GoogleMap = () => {
	const { location, isLoading } = useGetLocation();
	const [places, setPlaces] = useState([]);
	const placesService = usePlacesService();

	console.log(placesService);

	useEffect(() => {
		if (placesService) {
			placesService.nearbySearch(
				{ location, radius: '5000', keyword: 'A100' },
				(res) => setPlaces(res)
			);
		}
	}, [placesService]);
	console.log(places);
	return (
		<div>
			{!isLoading && location.lat && (
				<Map
					style={{ width: '320px', height: '240px' }}
					defaultCenter={location}
					defaultZoom={20}
					gestureHandling={'greedy'}
					disableDefaultUI={true}
					mapId={'cbd1b6c3063f1260'}
				>
					{places.map((el, index) => (
						<AdvancedMarker
							key={index}
							position={{
								lat: el.geometry.location.lat(),
								lng: el.geometry.location.lng(),
							}}
						/>
					))}
				</Map>
			)}
		</div>
	);
};

export default GoogleMap;
