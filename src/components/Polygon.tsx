// import type { Icon } from "leaflet";
// import L from "leaflet";
// import { Marker, Popup, Polygon, GeoJSON } from "react-leaflet";
import { Polygon } from "react-leaflet";

// import { } from "./PolygonLayer";

// export interface PolygonInfo {
//     name: string;
//     lat: number;
//     lng: number;
//   }
// TODO:
// このIFいるんだっけか？react-leafletの利用方法確認してから考える。

const purpleOptions = { color: "purple" };

// export interface Coordinate {
//     lat: number;
//     lng: number;
// }
export const Area = (props: {
  coordinates: [number, number][];
  type: string;
  // icon: Icon;
}) => {
  return <Polygon pathOptions={purpleOptions} positions={props.coordinates} />;
};
