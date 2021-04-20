import axios from "axios";
import { useState, useEffect } from "react";
import type { IFeaturePoint, IFeatureInfo } from "./Map";
import FeaturePoint from "./FeaturePoint";

const loadFeatures = async (url: string) => {
  const res = await axios.get<[IFeaturePoint]>(url);
  return res.data;
};

const FeaturePoints = (info: IFeatureInfo) => {
  const [features, setFeatures] = useState<IFeaturePoint[]>([]);

  useEffect(() => {
    loadFeatures(info.url).then((data) => setFeatures(data));
  }, [info]);

  return features.map((feature) => (
    <FeaturePoint
      point={feature}
      type={info.type}
      icon={info.icon}
      key={feature.name}
    />
  ));
};

export default FeaturePoints;
