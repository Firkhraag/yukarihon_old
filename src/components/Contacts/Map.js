import React from 'react';
import { YMaps, Map as YandexMap, Placemark, ZoomControl, GeolocationControl, FullscreenControl } from 'react-yandex-maps';

import './Map.css';

const Map = () => {
    
    const mapData = {
        center: [55.755914, 37.679200],
        zoom: 14,
    };
    const coordinates = [55.755914, 37.679200];

    return (
        <YMaps>
            <YandexMap defaultState={mapData} className="map-cnt" instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom') }}>
                <Placemark geometry={coordinates} />
                <FullscreenControl />
                <ZoomControl options={{ float: 'right' }} />
                <GeolocationControl options={{ float: 'left' }} />
            </YandexMap>
        </YMaps>
    );
}

export default Map;