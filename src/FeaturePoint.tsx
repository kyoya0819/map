import { Marker, Popup } from "react-leaflet";
import type { IFeaturePoint } from "./Map";

const featurePoint = (props: { point: IFeaturePoint }) => {
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

export default featurePoint;
