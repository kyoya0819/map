import type { Icon } from "leaflet";
import type { IFeaturePoint } from "./Map";
import { Marker, Popup } from "react-leaflet";

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

export default FeaturePoint;
