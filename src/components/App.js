import React from 'react'
import { BrowserRouter as Router,
         Switch,
         Route,
         Link 
       } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import SegurosPersonas from '../pages/SegurosPersonas'
import Footer from './common/Footer'
import Header from './common/Header'
import EstructuraContacto from './contact/EstructuraContacto'
import AccidentesPersonales from './formularios/AccidentesPersonales'
import Apv from './formularios/Apv'
import CatastroficoBCI from './formularios/CatastroficoBCI'
import ComplementarioBCI from './formularios/ComplementarioBCI'
import IncendioHogar from './formularios/IncendioHogar'
import Oncologico from './formularios/Oncologico'
import RentasVitalicias from './formularios/RentasVitalicias'
import ResponsabilidadCivilMedica from './formularios/ResponsabilidadCivilMedica'
import Salud7 from './formularios/Salud7'
import SaludBupa from './formularios/SaludBupa'
import SeguroVida from './formularios/SeguroVida'
import Tipo from './formularios/tipo'
import Vehiculos from './formularios/Vehiculos'
import Estructura from './pages/Estructura'
import EstructuraSeguros from './seguros/EstructuraSeguros'

function App() {
  return (
        <Router>
          <Header />

          <Switch>
          <Route path="/formulario/accidentesPersonales" >
              <AccidentesPersonales />
            </Route>
          <Route path="/formulario/vida5" >
              <Salud7 />
            </Route>
          <Route path="/formulario/salud7" >
              <Salud7 />
            </Route>
          <Route path="/formulario/oncologico" >
              <Oncologico />
            </Route>
          <Route path="/formulario/complementarioBCI" >
              <ComplementarioBCI />
            </Route>
          <Route path="/formulario/catastroficoBCI" >
              <CatastroficoBCI />
            </Route>
          <Route path="/formulario/seguroVida" >
              <SeguroVida />
            </Route>
          <Route path="/formulario/apv" >
              <Apv />
            </Route>
          <Route path="/formulario/rentasVitalicias" >
              <RentasVitalicias />
            </Route>
          <Route path="/formulario/saludBupa" >
              <SaludBupa />
            </Route>
          <Route path="/formulario/incendio" >
              <IncendioHogar />
            </Route>
          <Route path="/formulario/tipo" >
              <Tipo />
            </Route>
          <Route path="/formulario/civilMedica" >
              <ResponsabilidadCivilMedica />
            </Route>
          <Route path="/formulario/vehiculo" >
              <Vehiculos />
            </Route>
          <Route path="/contacto" >
              <EstructuraContacto />
            </Route>
          <Route path="/seguros/:slug" >
              <EstructuraSeguros />
            </Route>
          <Route path="/paginas/:slug" >
              <Estructura />
            </Route>

            <Route path="/" >
              <Inicio />
            </Route>
          </Switch>


          <Footer />
        </Router>
  );
}

export default App;
