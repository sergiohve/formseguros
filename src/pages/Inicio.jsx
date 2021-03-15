import React from 'react'
import Banner from '../components/home/Banner'
import Nosotros from '../components/home/Nosotros'
import Slider from '../components/home/Slider'
import Slider2 from '../components/home/Slider2'
import Somos from '../components/home/Somos'
import Clientes from '../components/home/Clientes'
import Hablemos from '../components/common/Hablemos'
import RedesSociales from '../components/common/RedesSociales'



const Inicio = () => {
    return (
        <div>
     <Banner />
     <Slider2 />
     <Nosotros />
     <Somos />
     <Clientes />
     <Hablemos />
     <RedesSociales />
        </div>
    )
}

export default Inicio
