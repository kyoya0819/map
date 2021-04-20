import axios from "axios";
import { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import type { IFeaturePoint, IFeatureInfo } from "./Map";
import type { Icon } from "leaflet";

const loadFeatures = async (url: string) => {
  const res = await axios.get<[IFeaturePoint]>(url);
  return res.data;
};

const FeaturePoint = (props: {
  point: IFeaturePoint;
  type: string;
  icon: Icon;
}) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        種別: {props.type}
        名前: {props.point.name}
        <br />
        住所: {props.point.details.address}
        <br />
        電話番号: {props.point.details.phone_number}
      </Popup>
    </Marker>
  );
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
