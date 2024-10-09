import { useEffect, useState } from 'react';

export const useGetLocation = () => {
	const [location, setLocation] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setIsLoading(true);
				setLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setIsLoading(false);
			},
			(err) => console.log(err)
		);
	}, []);

	return { location, isLoading };
};
