import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { markers } from "./data.js";
import "./styles.css";
import TouristSitesModal from "./TouristeSitesModal.js"; 

export default function WorldMap() {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({
    id : 0,
    coordinates : [],
    label : ''
  });

  return (
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinates={marker.coordinates}
          onMouseEnter={() => setHoveredMarker(marker)}
          onMouseLeave={() => setHoveredMarker(null)}
          onClick={() => {
            setSelectedCountry(marker);
            }}
        >
          <circle
            r={5}
            fill={hoveredMarker === marker ? "red" : "blue"}
            strokeWidth={1}
          />
          {selectedCountry === marker && (
            <TouristSitesModal country={marker} />
          )}
          {hoveredMarker === marker && (
            <>
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontWeight: "bold", fill: "white" }}
              >
                {marker.label}
              </text>
            </>
          )}
        </Marker>
      ))}
    </ComposableMap>
  );
}
