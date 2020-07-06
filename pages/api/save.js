import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('1oDFsbvCF2fkkxmjMvC5K2i6Uld6YhA1HI9isZ8ZZLL4')

const genCupom = () =>{
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {
    try {    
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()            
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
    
        const mostraPromocaoCell = sheetConfig.getCell(1, 0)    
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''
        if(mostraPromocaoCell.value === 'VERDADEIRO'){
            Cupom = genCupom()
            Promo = textoCell.value  
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Datapromo: moment().format('DD/MM/YYYY HH:mm:ss'),
            Nota: parseInt(data.Nota),
            Cupom,
            Promo
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))


    } catch (error) {
        console.log(error)   
        res.end('error')
    }
}
