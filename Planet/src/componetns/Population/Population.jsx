import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PopulationCard from '../PopulationCard/PopulationCard';
import { fetchData } from "../../API/fetchApi";
import styles from "./Population.module.css";


function Population() {
    const location = useLocation();
    const { urls } = location.state;
    const [residents,setResidents] = useState([]);
    useEffect(() => {
        
        urls.map((url)=>{fetchData(url).then((data) => {
          setResidents((prevResidents)=>[...prevResidents,data]);
        })});

      }, []);
    return (
        <div className={styles.mainContainer}>
          <div className={styles.cardContainer}>
            {residents && residents.map((resident) => (
              <PopulationCard key={resident.name} resident={resident} />
            ))}
            
          </div>
          
        </div>
      );
}

export default Population