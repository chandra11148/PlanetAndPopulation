import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './PlanetCard.module.css';
import { fetchData } from "../../API/fetchApi";
import { useNavigate } from 'react-router-dom';


function PlanetCard({ planet }) {
    const navigateTo = useNavigate();
    const handleClick = () => {
        const urls = planet.residents;
        if(urls){
          navigateTo("/population",{ state:{ urls } });
        }
        
    }
    return (
        <Card>
          <CardContent className={styles.cardContent} onClick={handleClick}>
            <div className={styles.planet}>

            </div>
            <Typography variant="h5" component="div">
              {planet.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Climate : {planet.climate}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Population : {planet.population}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Terrain : {planet.terrain.split(",")[0]}...
            </Typography>
    
          </CardContent>
          
        </Card>)
}

export default PlanetCard