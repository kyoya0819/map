import { Marker, Popup } from "react-leaflet";
import type { IFeaturePoint } from "./Map";
const featurePoint = (props: { point: IFeaturePoint[] }) => {
  if (props.point.length === 0) {
    return null;
  }
  return (
    <Marker position={[props.point[0].lat, props.point[0].lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default featurePoint;
