import { useState, useEffect } from "react";
import { NasaCard } from "../components/NasaCard";
import "./NasaApod.css";

export const NasaApod = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await res.json();
      setPhotoData(json);
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1 className="pageTitle">NASA Astronomical Picture of the Day</h1>
      <NasaCard data={photoData} />
    </main>
  );
};
