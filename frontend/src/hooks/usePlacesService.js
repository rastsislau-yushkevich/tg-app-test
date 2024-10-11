import { useState, useEffect } from 'react';
import {
	useApiIsLoaded,
	useMap,
	useMapsLibrary,
} from '@vis.gl/react-google-maps';

export const usePlacesService = () => {
	const map = useMap();
	const placesLibrary = useMapsLibrary('places');
	const apiIsLoaded = useApiIsLoaded();
	const [placesService, setPlacesService] = useState(null);

	useEffect(() => {
		if (placesLibrary && map && apiIsLoaded) {
			setPlacesService(new placesLibrary.PlacesService(map));
		}
	}, [placesLibrary, map]);

	return placesService;
};
