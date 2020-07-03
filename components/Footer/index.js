import React from 'react'

const Footer = () =>{
    return(
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Thiago Santanna  {' / '}
                <a target='_blank' className='px-2 hover:underline' href="https://www.linkedin.com/in/thiago-sant-anna-800a9a33/">Linkedin</a> {' / '} 
                <a target='_blank' className='px-2 hover:underline' href="https://github.com/xThiagoSant">Github</a>
                <div className='mt-2'>
                    <img className='inline p-4 w-32' src='/logo_semana_fsm.png' alt='fsm'/>
                    <img className='inline p-4 w-32' src='/logo_devpleno.png' alt='devpleno'/>
                </div>                
            </div>            
        </div>
    )
}

export default Footer
