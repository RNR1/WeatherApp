import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { CLICKABLE } from 'config/consts';
import { useSearch } from 'hooks';

const LocationIcon = () => {
  const [color, setColor] = useState<'primary' | 'error'>(
    navigator.geolocation ? 'primary' : 'error'
  );
  const title = 'Search by your location';
  const { geoPosition } = useSearch();

  const enableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setColor('primary');
        const coords = { lat: latitude.toString(), lon: longitude.toString() };
        geoPosition(coords);
      },
      () => {
        setColor('error');
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <Tooltip title={title}>
      <MyLocationIcon
        style={CLICKABLE}
        aria-label={title}
        color={color}
        onClick={enableLocation}
      />
    </Tooltip>
  );
};

export default LocationIcon;
