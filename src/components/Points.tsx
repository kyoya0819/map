import axios from "axios";
import type { Icon } from "leaflet";
import { useState, useEffect } from "react";
import { Point, IPoint } from "./Point";
import { blueIcon, greenIcon } from "./Icons";

export interface IPointMeta {
  url: string;
  type: string;
  icon: Icon;
}

// XXX: データがmainにマージされたらmainブランチを参照するようにする。
// FIXME: 複数のtypeで位置情報が一致すると画面上わからなくなる。
export const pointCatalog: IPointMeta[] = [
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

const loadFeatures = async (url: string) => {
  const res = await axios.get<[IPoint]>(url);
  return res.data;
};

const Points = (featureMeta: IPointMeta) => {
  const [features, setFeatures] = useState<IPoint[]>([]);

  useEffect(() => {
    loadFeatures(featureMeta.url).then((data) => setFeatures(data));
  }, [featureMeta]);

  return features.map((feature) => (
    <Point
      point={feature}
      type={featureMeta.type}
      icon={featureMeta.icon}
      key={feature.name}
    />
  ));
};

export { Points };
