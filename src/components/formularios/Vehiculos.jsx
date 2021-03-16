import React, {useState} from 'react'
import styled from 'styled-components'
import  {useForm} from "react-hook-form"
import { useRut } from 'react-rut';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
    useLocation,
    useHistory
  } from 'react-router-dom'
import axios from 'axios';
import verificador  from 'verificador-rut'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const InputStyled = styled.input`

    font-family: 'Montserrat',sans-serif;
    font-size: 17px;
    font-weight: 400;
    background: #fff;
    border: 1px solid #fff;
    color: #474756;
    height: 60px;
    padding: 5px 25px;
    border-radius: 50px;
    box-shadow: 0px 10px 13px 0px rgba(112, 171, 219, 0.23);
    width:100%;

`





const Vehiculos = () => {
    const history = useHistory();
    const {register, errors, handleSubmit}= useForm();
    const { state } = useLocation();
    const estado = state;
    const titulo = 'Cotiza tu '+estado[0].nombreSeguro

    const [datos, setDatos] = useState({
        nombre: '',
        rut: '',
        marca_vehiculo: '',
        modelo_vehiculo: '',
        año_vehiculo: '',
        patente_vehiculo: '',
        email: '',
        telefono: '',
        tipoSeguro: estado[0].tipoSeguro,
        nombreSeguro: estado[0].nombreSeguro
    }) 


    
    const redirectTimeout = () => {
        setTimeout(() => {
            history.push('/')
          }, 2500);
        
    }

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
           
                
                
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.rut + ' ' + datos.marca_vehiculo 
                                        + ' ' + datos.modelo_vehiculo + ' ' + datos.anno_vehiculo + ' ' + datos.patente_vehiculo
                                        + ' ' + datos.email + ' ' + datos.telefono + ' ' + estado[0].tipoSeguro + ' ' + estado[0].nombreSeguro)
        console.log(datos.nombre)
        if(verificador(datos.rut) == true){
            console.log('está correcto')
        }else{console.log('esta incorrecto')}


        if(!datos.nombre.trim()){return}
        if(!datos.rut.trim()){return}
        if(!datos.marca_vehiculo.trim()){return}
        if(!datos.modelo_vehiculo.trim()){return}
        if(!datos.anno_vehiculo.trim()){return}
        if(!datos.patente_vehiculo.trim()){return}
        if(!datos.email.trim()){return}
        if(!datos.telefono.trim()){return}
    





        axios.post(`${process.env.REACT_APP_API_URL}/formulario-vehiculos`, {
            nombre: datos.nombre,
            rut: datos.rut,
            marca_vehiculo: datos.marca_vehiculo,
            modelo_vehiculo: datos.modelo_vehiculo,
            anno_vehiculo: datos.anno_vehiculo,
            patente_vehiculo: datos.patente_vehiculo,
            email: datos.email,
            telefono: datos.telefono,
            tipoSeguro: estado[0].tipoSeguro,
            nombreSeguro: estado[0].nombreSeguro






          })
          .then(function (response) {
            console.log(response);
            notify()
            redirectTimeout()
          })
          .catch(function (error) {
            console.log(error);
          });

          event.target.reset()


    }



    const [{ formattedValue }, setRut] = useRut();
    const [value, setValue] = useState()

    const notify = () => toast.success(' Datos enviados correctamente!!', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });


    React.useEffect(() => {
        
        console.log(estado)
      }, []);
    
    return (
        <>
            <section className="cabecera primera">
				<div className="container">
					<div className="paginas">
						<div className="formulario">
							<div className="row">
								<div className="col-12">
									<div className="titulo">
                                        <h1 ><img style={{
                                                  width: "100px",
                                                  height: "100px",
                                                  padding: '10px',
                                                  border: "1px solid #1274ae",
                                                  background: "#fff",
                                                  borderRadius: "100%",
                                                  lineHeight: "56px",
                                                  boxShadow: "0px 10px 13px 0px rgba(112, 171, 219, 0.1)",
                                                  margin: "auto"

                                        }} className="img-fluid ico" 
                                                 src={estado[0].urlIcon}
                                                 alt="Cotiza tu Seguro de Salud" /> 
                                                 <h1 dangerouslySetInnerHTML={ {__html:  titulo} }></h1>
                                                 </h1>
									</div>
								</div>
                                <ToastContainer 
                                        position="top-center"
                                        autoClose={false}
                                        newestOnTop
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        />
		
								<div className="col-12 col-lg-8 offset-lg-2">
									<div className="cont">
        								<form onSubmit={enviarDatos}>
											<div className="row">
                                                {/* 
												<div className="col-6 col-lg-6">
													<p className="text-right">Edad: <strong>32 años</strong></p>
												</div>
												<div className="col-6 col-lg-6">
													<p>Género: <strong>Mujer</strong></p>
                                                </div>
                                                */}
											</div>
											<div className="row">
                                            <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Nombre" 
                                                        type="text"
                                                        name="nombre" 
                                                        onChange={handleInputChange} 
                                                        className="form-control"/>
                                                        
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Rut" 
                                                        type="text" 
                                                        name="rut"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"/>
													</div>
												</div>
                                                 {/* 
												<div className="col-12 col-lg-6">
													<div className="form-group">
														<div className="selector">
															<div className="dropdown bootstrap-select"><select className="selectpicker" title="Isapre" tabindex="-98"><option className="bs-title-option" value=""></option>
																<option>Isapre 1</option>
																<option>Isapre 2</option>
																<option>Isapre 3</option>
																<option>Isapre 4</option>
															</select><button type="button" className="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="button" title="Isapre"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Isapre</div></div> </div></button><div className="dropdown-menu " role="combobox"><div className="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul className="dropdown-menu inner show"></ul></div></div></div>
														</div>
													</div>
                                                </div>
                                                 */}
	                                            <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Marca Vehículo"
                                                        type="text"
                                                        name="marca_vehiculo"
                                                        onChange={handleInputChange}
                                                        className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Modelo Vehículo" 
                                                        type="text"
                                                        name="modelo_vehiculo"
                                                        onChange={handleInputChange}
                                                        className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Año Vehículo"
                                                        type="text"
                                                        name="anno_vehiculo"
                                                        onChange={handleInputChange}
                                                        className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Patente Vehículo"
                                                        type="text"
                                                        name="patente_vehiculo"
                                                        onChange={handleInputChange}
                                                        className="form-control"/>
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Email"
                                                        type="text"
                                                        name="email"
                                                        onChange={handleInputChange}
                                                        className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                    <InputStyled
                                                 
                                                 placeholder="Telefono"
                                                 type="text"
                                                 name="telefono"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
											</div>
											<button type="submit" className="boton"><span>Enviar</span></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}
 


export default Vehiculos
