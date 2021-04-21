import axios from "axios";
import type { Icon } from "leaflet";
import { useState, useEffect } from "react";
import { Point, IPoint } from "./Point";

export interface IPointMeta {
  url: string;
  type: string;
  icon: Icon;
}

const loadFeatures = async (url: string) => {
  const res = await axios.get<[IPoint]>(url);
  return res.data;
};

export const Points = (featureMeta: IPointMeta) => {
  const [features, setFeatures] = useState<IPoint[]>([]);

  useEffect(() => {
    loadFeatures(featureMeta.url).then((data) => setFeatures(data));
  }, [featureMeta]);

  return features.map((feature) => (
    <Point
      point={feature}
      type={featureMeta.type}
      icon={featureMeta.icon}
      key={feature.name}
    />
  ));
};
