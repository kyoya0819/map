import type { Icon } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FeaturePoints from "./FeaturePoints";
import { blueIcon, greenIcon } from "./Icons";

export interface IFeatureInfo {
  url: string;
  type: string;
  icon: Icon;
}

interface IFeaturePointDetail {
  address?: string;
  phone_number?: string;
}

export interface IFeaturePoint {
  name: string;
  lat: number;
  lng: number;
  details: IFeaturePointDetail;
}

// XXX: データがmainにマージされたらmainブランチを参照するようにする。
// FIXME: 複数のtypeで位置情報が一致すると画面上わからなくなる。
const featureList: IFeatureInfo[] = [
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/Scrape-OpenData/kosodate-map/geodata/projects/kosodate-map/%E4%BF%9D%E8%82%B2%E5%9C%92.json",
    type: "保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/Scrape-OpenData/kosodate-map/geodata/projects/kosodate-map/%E4%B8%80%E6%99%82%E4%BF%9D%E8%82%B2.json",
    type: "一時保育",
    icon: blueIcon,
  },
];

//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];

const KosodateMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {featureList.map((feature) => FeaturePoints(feature))}
    </MapContainer>
  );
};

export default KosodateMap;
