import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) { 
    
    
    const { cases, todayCases, active, deaths, todayDeaths, recovered, critical } = data 


    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={1}>
            
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases)} label="CAS" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="AUJOURD'HUI" color="#000" />
            </Grid>

            <Grid item xs={12} md={4}>
                <Card value={getValue(active)} label="ACTIF" color="#000" />
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Card value={getValue(deaths)} label="DÉCÈS" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(todayDeaths)} label="AUJOURD'HUI" color="#FF0000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(recovered)} label="RÉTABLI" color="#008000" />
            </Grid>

            <Grid item xs={12} md={6}>
                <Card value={getValue(critical)} label="CRITIQUE" color="#FF7F00" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)