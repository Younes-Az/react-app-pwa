import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../material'
import COUNTRIES from '../../../config/constant/index'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share


function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pays-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country}, Total de Casos: ${cases}, Óbitos de Hoje: ${todayDeaths}, 
    Casos de Hoje: ${todayCases}, Total de Mortes: ${deaths}, Recuperados: ${recovered}.`
    
    
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }   

   
    // const shareInfo = () => {
    //     navigator.share({
    //         title: `Dados do Covid-19 - ${country}`,
    //         text: textCovid19,
    //         url: 'https://covid19-pwa.netlify.app/' 
    //     })
    // }

    
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )
    
    const renderCopyButton = (
        <div>
        <Button variant="contained" color="primary" onClick={copyInfo}>
            Copiar
        </Button>
    </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">Coronavírus (COVID-19) </Typography>
                    <Typography variant="h6" component="span" color="primary">Visão Geral </Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)