import React from 'react';

//Mapa
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//Marker
import MarkerIcon from '../../assets/image/icon/marker-icon.png';

//Config iconMarker
const markerCustom = L.icon({
    iconUrl: MarkerIcon,
    shadowUrl: null,

    iconSize: [32, 52], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default function Map(props) {
    return (
        <MapContainer
            style={{ height: "500px", borderRadius: "15px" }}
            center={props.position}
            zoom={15}
            scrollWheelZoom={true}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FmcmVpdGFzIiwiYSI6ImNrZzZxbnBreTAxeWozM213dTRycmw0bzAifQ.kwpCuyknim7biPB20owttQ`}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            //    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={markerCustom} position={props.position}>
                <Popup>
                    {props.companyName}
                </Popup>
            </Marker>
        </MapContainer>
    )
}