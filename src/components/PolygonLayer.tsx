import axios from "axios";
import { useState, useEffect } from "react";
import { _Polygon } from "./Polygon";

export interface PolygonMeta {
  type: string;
  url: string;
  option: {};
}

export interface PolygonInfo {
  type: any;
  name: string;
  coordinates: number[][][];
}

const loadFeatures = async (url: string) => {
  const res = await axios.get<PolygonInfo[]>(url);
  return res.data;
};

export const PolygonLayer = (polygonMeta: PolygonMeta) => {
  const [features, setFeatures] = useState<PolygonInfo[]>([]);
  useEffect(() => {
    loadFeatures(polygonMeta.url).then((data) => setFeatures(data));
  }, [polygonMeta]);

  return features.map((feature) => (
    <_Polygon
      coordinates={feature.coordinates}
      name={feature.name}
      option={polygonMeta.option}
    />
  ));
};
