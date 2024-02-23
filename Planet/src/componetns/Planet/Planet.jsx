import React, { useEffect, useState } from "react";
import { fetchData } from "../../API/fetchApi";
import Pagination from "../Pagination/Pagination";
import styles from "./Planet.module.css";
import PlanetCard from "../PlanetCard/PlanetCard";

function Planet() {
  const [paginationUrl, setPaginationUrl] = useState({
    next: null,
    prev: null,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [planetData, setPlanentData] = useState([]);
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const url = `https://swapi.dev/api/planets/?page=${pageNumber}&format=json`;
    fetchData(url).then((data) => {
      console.log(data);
      setPaginationUrl({ next: data.next, prev: data.previous });
      setPlanentData(data.results);
    });
  }, [pageNumber]);
  const handleNext = () => {
    if (paginationUrl.next !== null) {
      setPageNumber((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (paginationUrl.prev !== null) {
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        {planetData.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          paginationUrl={paginationUrl}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

export default Planet;
