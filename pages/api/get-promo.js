import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1oDFsbvCF2fkkxmjMvC5K2i6Uld6YhA1HI9isZ8ZZLL4')


export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
    
        const mostraPromocao = sheet.getCell(1, 0)    
        const textoCell = sheet.getCell(1, 1)

        res.end(JSON.stringify({
            showCoupon: mostraPromocao.value === 'VERDADEIRO',
            message: textoCell.value
        }))

    } catch (error) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}