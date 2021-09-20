import Map from "./Map";
import { PointMeta } from "./PointLayer";
import { PolygonMeta } from "./PolygonLayer";
import { greenIcon, blueIcon } from "./Icons";
import { shogakokkuOptions } from "./PolygonOptions";

const pointCatalog: PointMeta[] = [
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/syokibohoikuichiran.json",
    type: "小規模保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/korituhoikusyoitiran.json",
    type: "公立保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/sirituhoikusyoitiran.json",
    type: "私立保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/ninteikodomoenitiran.json",
    type: "認定こども園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/kouminkan.json",
    type: "公民館",
    icon: blueIcon,
  },
];

const polygonCatalog: PolygonMeta[] = [
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/feature/add-gakku/data/kosodate-map/gakku.json",
    type: "小学区",
    option: shogakokkuOptions,
  },
];

const Kosodate = () => {
  return <Map pointCatalog={pointCatalog} polygonCatalog={polygonCatalog} />;
};

export default Kosodate;
