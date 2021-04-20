import axios from "axios";
import { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import type { IFeaturePoint } from "./Map";
const loadFeatures = async (url: string) => {
  const res = await axios.get<[IFeaturePoint]>(url);
  return res.data;
};

const FeaturePoint = (props: { point: IFeaturePoint }) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]}>
      <Popup>
        名前: {props.point.name}
        <br />
        住所: {props.point.details.address}
        <br />
        電話番号: {props.point.details.phone_number}
      </Popup>
    </Marker>
  );
};

const FeaturePoints = (url: string) => {
  const [features, setFeatures] = useState<IFeaturePoint[]>([]);
  useEffect(() => {
    loadFeatures(url).then((data) => setFeatures(data));
  });
  return features.map((feature) => (
    <FeaturePoint point={feature} key={feature.name} />
  ));
};

export default FeaturePoints;
