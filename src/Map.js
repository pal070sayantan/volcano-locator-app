import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';
import { useState } from 'react';

const Map = ({ eventData, center, zoom }) => {
    const[LocInfo , setLocInfo] = useState(null);
    //marker will have event data
    //geometries have only one array
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 12) {
          return (
            <LocationMarker
              lat={ev.geometries[0].coordinates[1]}
              lng={ev.geometries[0].coordinates[0]}
              onClick={() => setLocInfo({ id: ev.id, title: ev.title })}
            />
          );
        }
        return null;
    })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDZEYD2Ozd6Xmtk4e9gT8ungTg6qlAw4-4" }} //Google map api Key from account
        defaultCenter={center} // aall are googlemap attributes
        defaultZoom={zoom}
      >
        {markers}
        {/* //location marker by default taking the values */}
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
      {LocInfo && <LocationInfo info={LocInfo} />}
    </div>
  );
}

// setting the default values
Map.defaultProps = {
  center: {
    lat: -0.069818,
    lng: 100.697495,
  },
  zoom: 6,
};

export default Map