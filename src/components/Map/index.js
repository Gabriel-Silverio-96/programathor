import React from 'react';

//Mapa
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//Marker
import MarkerIcon from '../../assets/image/icon/marker-icon.png';

export default function Map(props) {
    window.addEventListener('load', () => {
        const leafletShadowPane = document.querySelector('.leaflet-shadow-pane img');
        leafletShadowPane.style.display = "none"

        const marker = document.querySelector('.leaflet-marker-pane img')
        marker.src = MarkerIcon;
    })

    return (
        <MapContainer
            style={{ height: "500px" }}
            center={props.position}
            zoom={15}
            scrollWheelZoom={true}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FmcmVpdGFzIiwiYSI6ImNrZzZxbnBreTAxeWozM213dTRycmw0bzAifQ.kwpCuyknim7biPB20owttQ`}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            //    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position}>
                <Popup>
                    {props.companyName}
                </Popup>
            </Marker>
        </MapContainer>
    )
}