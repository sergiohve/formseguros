import React, { useState } from 'react'
import styled from 'styled-components'
import  {useForm} from "react-hook-form"
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
    useLocation,
    useHistory  
  } from 'react-router-dom'
import axios from 'axios';
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


const AccidentesPersonales = () => {
    const {register, errors, handleSubmit}= useForm();
    const history = useHistory();
    const { state } = useLocation();
    const estado = state;
    const titulo = 'Cotiza tu '+estado[0].nombreSeguro
    
    const [datos, setDatos] = useState({
        nombreAsegurado: "",
        nombreEmpresa: "",
        actividadEmpresa: "",
        actividadTrabajador: "",
        edadTrabajador: "",
        mail: "",
        telefono: "",
        tipoSeguro: estado[0].tipoSeguro,
        nombreSeguro: estado[0].nombreSeguro
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
           

                
                
        })
    }

    const notify = () => toast.success(' Datos enviados correctamente!!', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const redirectTimeout = () => {
        setTimeout(() => {
            history.push('/')
          }, 2500);
        
    }

    
    const enviarDatos = (event) => {
       
        console.log('enviando datos...' + datos.nombreAsegurado + ' ' + datos.mail + ' ' + datos.telefono)
        console.log(datos.nombreAsegurado)

    
        axios.post(`${process.env.REACT_APP_API_URL}/formulario-accidentes-personales`, {

                nombreAsegurado: datos.nombreAsegurado,
                nombreEmpresa: datos.nombreEmpresa,
                actividadEmpresa: datos.actividadEmpresa,
                actividadTrabajador: datos.actividadTrabajador,
                edadTrabajador: datos.edadTrabajador,
                mail: datos.mail,
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


         


    }

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
										<form onSubmit={handleSubmit(enviarDatos)}>
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
                                                        placeholder="Nombre del asegurado" 
                                                        type="text"
                                                        name="nombreAsegurado" 
                                                        onChange={handleInputChange} 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Nombre del asegurado obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 5, 
                                                                message: 'Mínimo 5 carácteres'
                                                                }
                                                        })}
                                                        
                                                        />
                                                        {
                                                            errors.nombreAsegurado && <span className="text-danger text-small d-block mb-2">{errors.nombreAsegurado.message}</span>
                                                        }
                                                        
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Nombre de la empresa" 
                                                        type="text" 
                                                        name="nombreEmpresa"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Nombre de la empresa obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 3, 
                                                                message: 'Mínimo 3 carácteres'
                                                                }
                                                        })}
                                                        />
                                                         {
                                                            errors.nombreEmpresa && <span className="text-danger text-small d-block mb-2">{errors.nombreEmpresa.message}</span>
                                                        }
                                                        
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Actividad de la empresa" 
                                                        type="text" 
                                                        name="actividadEmpresa"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Actividad de la empresa obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 5, 
                                                                message: 'Mínimo 5 carácteres'
                                                                }
                                                        })}
                                                        />
                                                         {
                                                            errors.actividadEmpresa && <span className="text-danger text-small d-block mb-2">{errors.actividadEmpresa.message}</span>
                                                        }
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Actividad del trabajador" 
                                                        type="text" 
                                                        name="actividadTrabajador"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Actividad del trabajador obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 5, 
                                                                message: 'Mínimo 5 carácteres'
                                                                }
                                                        })}
                                                        />
                                                         {
                                                            errors.actividadTrabajador && <span className="text-danger text-small d-block mb-2">{errors.actividadTrabajador.message}</span>
                                                        }
                                                        
                                                       
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Edad del trabajador" 
                                                        type="Number" 
                                                        name="edadTrabajador"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Edad del trabajador obligatorio"
                                                            },
                                                            maxLength: {
                                                                value: 2, 
                                                                message: 'No más de 2 numeros!'
                                                                },
                                                            minLength: {
                                                                value: 1, 
                                                                message: 'Mínimo 1 número'
                                                                }
                                                        })}
                                                        />
                                                         {
                                                            errors.edadTrabajador && <span className="text-danger text-small d-block mb-2">{errors.edadTrabajador.message}</span>
                                                        }
                                                        
													</div>
												</div>                                                
                                               
                                                
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                    <InputStyled
                                                 
                                                 placeholder="Mail"
                                                 type="Email"
                                                 name="mail"
                                                 onChange={handleInputChange}
                                                 className="form-control"
                                                 ref={register({
                                                    required:{
                                                        value:true, 
                                                        message: "Email obligatorio"
                                                    },
                                                   
                                                    minLength: {
                                                        value: 1, 
                                                        message: 'Mínimo 5 carácteres'
                                                        }
                                                })}
                                                 />
                                                   {
                                                            errors.mail && <span className="text-danger text-small d-block mb-2">{errors.mail.message}</span>
                                                        }
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                    <InputStyled
                                                 
                                                 placeholder="Telefono"
                                                 type="Number"
                                                 name="telefono"
                                                 onChange={handleInputChange}
                                                 className="form-control"
                                                 ref={register({
                                                    required:{
                                                        value:true, 
                                                        message: "Teléfono obligatorio"
                                                    },
                                                   
                                                    minLength: {
                                                        value: 1, 
                                                        message: 'Mínimo 7 números'
                                                        }
                                                })}
                                                 />
                                                  {
                                                            errors.telefono && <span className="text-danger text-small d-block mb-2">{errors.telefono.message}</span>
                                                        }
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

export default AccidentesPersonales
