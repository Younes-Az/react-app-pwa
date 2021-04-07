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

    const textCovid19 = `pays: ${country}, Nombre total de cas: ${cases}, Décès d'aujourd'hui: ${todayDeaths}, 
    Cas d'aujourd'hui: ${todayCases}, Nombre total de décès: ${deaths}, Rétabli: ${recovered}.`
    
    
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }   

   
    const shareInfo = () => {
        navigator.share({
            title: `Données Covid-19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19-pwa.netlify.app/' 
        })
    }

    
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Partager
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
                    <Typography variant="h5" component="span" color="primary">Coronavirus (COVID-19) </Typography>
                    <Typography variant="h6" component="span" color="primary">Aperçu </Typography>
                    <Typography variant="body2" component="span" color="primary">Atualiser em: {updateAt}</Typography>
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