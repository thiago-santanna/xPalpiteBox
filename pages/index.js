import React from 'react'
import Link from 'next/link'

const Index = () =>{
    return (
        <div>
            <p className='mt-12 text-center'>
                Nossa empresa sempre busca por atender melhor seus clientes. <br/>
                Poi isso, estamos sempre abertos a ouvir a sua opnião.
            </p>
            <div className='text-center my-12'>
                <Link  href=''>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opnião ou sugestão</a>
                </Link>    
            </div>
            <p className='my-12 text-center'>
                mensagem do desconto
            </p>            
        </div>        
    )
}

export default Index
