import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

export interface IPoint {
  name: string;
  lat: number;
  lng: number;
  details: IPointDetail;
}

interface IPointDetail {
  address?: string;
  phone_number?: string;
}

const Point = (props: { point: IPoint; type: string; icon: Icon }) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        種別: {props.type}
        <br />
        名前: {props.point.name}
        <br />
        住所: {props.point.details.address}
        <br />
        電話番号: {props.point.details.phone_number}
      </Popup>
    </Marker>
  );
};

export { Point };
