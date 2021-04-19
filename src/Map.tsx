import axios from "axios";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

interface IPointDetail {
  address?: string;
  phone_number?: string;
}

interface INurserySchool {
  name: string;
  address: string;
  phoneNumber: string;
  lat: number;
  lon: number;
  details: IPointDetail;
}

const loadFeatures = async () => {
  const { data } = await axios.get<[INurserySchool]>(
    "https://raw.githubusercontent.com/Code-for-Funabashi/Scrape-OpenData/kosodate-map/geodata/projects/kosodate-map/%E4%B8%80%E6%99%82%E4%BF%9D%E8%82%B2.json"
  );
  console.log(data);
  return data;
};

//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];
const kosodateMap = () => {
  loadFeatures();
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default kosodateMap;
