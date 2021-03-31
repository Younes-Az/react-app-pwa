export const formatNumber = (number, country = 'pt-FR') => {
    if (isNaN(number)) return '0'
    
    return new Intl.NumberFormat(country).format(number)
}