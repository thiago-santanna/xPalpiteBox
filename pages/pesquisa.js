import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='mt-12 text-center mb-6'>
                Nossa empresa sempre busca por atender melhor seus clientes. <br/>
                Poi isso, estamos sempre abertos a ouvir a sua opnião.
            </p>             
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
            </div>
        </div>
    )
}

export default Pesquisa