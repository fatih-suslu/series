import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import SeriesItem from "./SeriesItem";
//"https://api.tvmaze.com/shows/1"

export default function Anasayfa() {
  const [series, setSeries] = useState([]);
  const [previewItem, setPreviewItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        setSeries(response.data.tv_shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function updatePreviewItem(item) {
    setPreviewItem(item);
  }

  return (
    <div className="mainpage-container">
      <div className="left-column">
        <h2>Popüler diziler</h2>
        {series
          ? series.map((serie) => (
              <SeriesItem
                key={serie.id}
                serie={serie}
                onChange={() => updatePreviewItem(serie)}
              />
            ))
          : "Diziler yükleniyor..."}
      </div>
      <div className="center-column">
        <h1 className="title">Dizi özeti</h1>
        <h3>{previewItem.name}</h3>
        <img src={previewItem.image_thumbnail_path} alt={previewItem.name} />
        <Link to="/details">Dizi detayını gör</Link>
      </div>
      <div className="right-column"></div>
    </div>
  );
}
