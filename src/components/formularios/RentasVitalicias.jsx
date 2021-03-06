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
const RentasVitalicias = () => {
    const {register, errors, handleSubmit}= useForm();
    const history = useHistory();
    const { state } = useLocation();
    const estado = state;
    const titulo = 'Cotiza tu '+estado[0].nombreSeguro

    const [datos, setDatos] = useState({
        Nombre: "",
        afp: "",
        edad: "",
        monto: "",
        sexo: "",
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
       
        console.log('enviando datos...' + datos.Nombre + ' ' + datos.mail + ' ' + datos.telefono)
        console.log(datos.Nombre);


        if(!datos.Nombre.trim()){return}
        if(!datos.mail.trim()){return}
        if(!datos.telefono.trim()){return}
    
        axios.post(`${process.env.REACT_APP_API_URL}/formulario-rentas-vitalicias`, {

            Nombre: datos.Nombre,
            afp: datos.afp,
            edad: datos.edad,
            monto: datos.monto,
            sexo: datos.sexo,
            mail: datos.mail,
            telefono: datos.telefono,
            tipoSeguro: estado[0].tipoSeguro ,
            nombreSeguro: estado[0].nombreSeguro

          })
          .then(function (response) {
            console.log(response);
            notify();
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
								<div className="col-12 col-lg-8 offset-lg-2">
									<div className="cont">
										<form onSubmit={handleSubmit(enviarDatos)}>
											<div className="row">
                                                {/* 
												<div className="col-6 col-lg-6">
													<p className="text-right">Edad: <strong>32 a??os</strong></p>
												</div>
												<div className="col-6 col-lg-6">
													<p>G??nero: <strong>Mujer</strong></p>
                                                </div>
                                                */}
											</div>
           
											<div className="row">
                                            <div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Nombre" 
                                                        type="text"
                                                        name="Nombre" 
                                                        onChange={handleInputChange} 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Nombre obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 3, 
                                                                message: 'M??nimo 3 car??cteres'
                                                                }
                                                        })}
                                                        />
                                                          {
                                                            errors.Nombre && <span className="text-danger text-small d-block mb-2">{errors.Nombre.message}</span>
                                                        }
                                                        
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled placeholder="Afp" 
                                                        type="text" 
                                                        name="afp"
                                                        onChange={ handleInputChange } 
                                                        className="form-control"
                                                        ref={register({
                                                            required:{
                                                                value:true, 
                                                                message: "Afp obligatorio"
                                                            },
                                                            minLength: {
                                                                value: 3, 
                                                                message: 'M??nimo 3 car??cteres'
                                                                }
                                                        })}
                                                        />
                                                          {
                                                            errors.afp && <span className="text-danger text-small d-block mb-2">{errors.afp.message}</span>
                                                        }
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
                                                 
                                                 placeholder="Edad"
                                                 type="Number"
                                                 name="edad"
                                                 onChange={handleInputChange}
                                                 className="form-control"
                                                 ref={register({
                                                    required:{
                                                        value:true, 
                                                        message: "Edad obligatoria"
                                                    },
                                                    minLength: {
                                                        value: 1, 
                                                        message: 'M??nimo 1 car??cter'
                                                        }
                                                })}
                                                />
                                                  {
                                                    errors.edad && <span className="text-danger text-small d-block mb-2">{errors.edad.message}</span>
                                                }
													</div>
												</div>

                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                    <InputStyled
                                                 
                                                 placeholder="Monto Acumulado"
                                                 type="Number"
                                                 name="monto"
                                                 onChange={handleInputChange}
                                                 className="form-control"
                                                 ref={register({
                                                    required:{
                                                        value:true, 
                                                        message: "Monto acumulado obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 2, 
                                                        message: 'M??nimo 2 n??meros'
                                                        }
                                                })}
                                                />
                                                  {
                                                    errors.monto && <span className="text-danger text-small d-block mb-2">{errors.monto.message}</span>
                                                }
													</div>
												</div>

                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                    <InputStyled
                                                 
                                                 placeholder="Sexo"
                                                 type="text"
                                                 name="sexo"
                                                 onChange={handleInputChange}
                                                 className="form-control"
                                                 ref={register({
                                                    required:{
                                                        value:true, 
                                                        message: "Sexo obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 1, 
                                                        message: 'M??nimo 1 car??cter'
                                                        }
                                                })}
                                                />
                                                  {
                                                    errors.sexo && <span className="text-danger text-small d-block mb-2">{errors.sexo.message}</span>
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
                                                        value: 5, 
                                                        message: 'M??nimo 5 car??cteres'
                                                        }
                                                })}
                                                />
                                                  {
                                                    errors.mail && <span className="text-danger text-small d-block mb-2">{errors.mail.message}</span>
                                                }
													</div>
												</div>

                                                <div className="col-12 col-lg-12">
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
                                                        message: "Tel??fono obligatorio"
                                                    },
                                                    minLength: {
                                                        value: 8, 
                                                        message: 'M??nimo 8 n??meros'
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

export default RentasVitalicias
