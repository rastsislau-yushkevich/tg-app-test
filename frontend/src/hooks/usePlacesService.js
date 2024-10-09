import { useState, useEffect } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

export const usePlacesService = () => {
	const map = useMap();
	const placesLibrary = useMapsLibrary('places');
	const [placesService, setPlacesService] = useState(null);

	useEffect(() => {
		if (placesLibrary && map) {
			setPlacesService(new placesLibrary.PlacesService(map));
		}
	}, [placesLibrary, map]);

	return placesService;
};
