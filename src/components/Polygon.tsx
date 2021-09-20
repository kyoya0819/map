import { Popup, Polygon } from "react-leaflet";

export const _Polygon = (props: {
  coordinates: any;
  name: string;
  option: {};
}) => {
  return (
    <Polygon pathOptions={props.option} positions={props.coordinates}>
      <Popup>
        名前: {props.name}
        <br />
      </Popup>
    </Polygon>
  );
};
