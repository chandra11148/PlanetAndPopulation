import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './PopulationCard.module.css';

function PopulationCard({ resident }) {
    return (
        <Card>
          <CardContent className={styles.populationCardContent}>
            
            <Typography variant="h5" component="div">
              {resident.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Height : {resident.height}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Mass : {resident.mass} 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Gender : {resident.gender}
            </Typography>
          </CardContent>
          
        </Card>)
}

export default PopulationCard