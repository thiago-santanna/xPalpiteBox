import React from 'react'
import '../css/styles.css'
import Layout from '../components/Layout'

const MyApp = ({Component, pageProps}) => {    
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>            
        )
}

export default MyApp

//_app.js é a página quie carrega antes de qualquer outra no next