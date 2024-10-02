import {
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapMarker,
	reactify,
} from '../libs/ymaps';

export const YandexMap = ({ lat, lng }) => {
	const LOCATION = {
		center: [lng, lat],
		zoom: 15,
	};
	console.log('render');
	return (
		<div style={{ width: '600px', height: '400px' }}>
			<YMap location={LOCATION}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />

				<YMapMarker
					coordinates={[lng, lat]}
					// draggable={true}
				>
					<section>
						<h1>You</h1>
					</section>
				</YMapMarker>
			</YMap>
		</div>
	);
};
