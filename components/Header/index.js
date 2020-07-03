import React from 'react'
import Link from 'next/link'
//import styles from './styles.module.css'//Técnica que ajuda na contenção do estilo. evitando o problema de um estilo ir pra todas as páginas

const Header = () => {
    return(
        <React.Fragment>
            <div className='bg-gray-200 p-4 shadow-md z-50'>
                <div className='container mx-auto w-32' >
                    <Link  href='/'>
                        <a><img className='mx-auto' src='/logo_palpitebox.png' alt='palpitebox'/></a>                        
                    </Link>
                </div>                
            </div>  
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link href='/sobre'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className='px-2 hover:underline'>Contato</a>
                </Link>                
                <Link href='/pesquisa'>
                    <a className='px-2 hover:underline'>Pesquisa</a>
                </Link>   
            </div>        
        </React.Fragment>
    )
}

export default Header
