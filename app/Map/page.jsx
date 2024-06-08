"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapLibreSearchControl } from "@stadiamaps/maplibre-search-box";
import "@stadiamaps/maplibre-search-box/dist/style.css";
import "./map.css";

import { Grid } from "@mui/material";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  //Spanish Fork Long and Lat
  const [lng, setLng] = useState(-111.654922);
  const [lat, setLat] = useState(40.115);
  const [zoom, setZoom] = useState(6);
  const API_KEY = "wfIQPfn87KIUoaYPfzIs";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    const searchBox = new MapLibreSearchControl();
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/satellite/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.addControl(searchBox, "top-left");

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [API_KEY, lng, lat, zoom]);

  // useEffect(() => {
  //   // cleanup
  //   return () => map.current.remove();
  // }, []);

  return (
    <Grid container>
      <div className="map-wrap">
        <div ref={mapContainer} className="origMap" />
      </div>
    </Grid>
  );
}
