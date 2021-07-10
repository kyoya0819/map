import axios from "axios";
// import type { Icon } from "leaflet";
import { useState, useEffect } from "react";
// import { Point } from "./Point";
import { Area } from "./Polygon";

export interface PolygonMeta {
  type: string;
  url: string;
}

export interface PolygonInfo {
  type: string;
  name: string;
  coordinates: [number, number][];
}

const loadFeatures = async (url: string) => {
  const res = await axios.get<[PolygonInfo]>(url);
  console.log(res.data);
  return res.data;
};

export const PolygonLayer = (polygonMeta: PolygonMeta) => {
  const [features, setFeatures] = useState<PolygonInfo[]>([]);
  useEffect(() => {
    loadFeatures(polygonMeta.url).then((data) => setFeatures(data));
  }, [polygonMeta]);

  return features.map((feature) => (
    <Area
      coordinates={feature.coordinates}
      type={feature.type}
      key={feature.type}
    />
  ));
};
