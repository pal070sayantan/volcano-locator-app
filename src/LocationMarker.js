// it is used for volcano location
import { Icon } from "@iconify/react";
import volcanoIcon from "@iconify/icons-mdi/volcano";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      {/* // Icon is the component and the attribute icon is given the value of
      volcano symbol */}
      <Icon icon={volcanoIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
