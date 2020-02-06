import React from "react";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

/*
    react-leaflet doesn't include icons, setting them below
    Stackoverflow: https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found
*/
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const KBSSMap = () => {
    const position = [18.576740, -72.331104]; // KBSS Coordinates

    return (
        <Map
          center={position}
          zoom={15}
          id="kbss-map"
          style={{height: "350px"}}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Tooltip permanent direction="top">
              Konbit Bliyotèk Site Solèy. <br /> The KBSS Library.
            </Tooltip>
          </Marker>
        </Map>
    )
}

export default KBSSMap