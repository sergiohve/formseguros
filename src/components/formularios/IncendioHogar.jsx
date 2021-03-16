import React, { useState } from 'react'
import styled from 'styled-components'
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


const IncendioHogar = () => {

    const history = useHistory();

    const { state } = useLocation();
    const estado = state;
    const titulo = 'Cotiza tu '+estado[0].nombreSeguro
    
    const [datos, setDatos] = useState({
        nombreDuenno: '',
        rutDueno: '',
        direccion: '',
        comuna: '',
        ciudad: '',
        montoEdificioUF: '',
        montoContenidosUF: '',
        annoConstruccion: '',
        tipoDeConstruccion: '',
        tiposDeProtecciones: '',
        uso: '',
        telefono: '',
        mail: '',
        tipoSeguro: estado[0].tipoSeguro,
        nombreSeguro: estado[0].nombreSeguro
    })





    const handleInputChange = (event) => {
        
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
        event.preventDefault()
        console.log('enviando datos...' + datos.nombreDuenno + ' ' + datos.rutDueno + ' ' + datos.telefono)

    
        axios.post(`${process.env.REACT_APP_API_URL}/formulario-incendios`, {

            nombreDueno: datos.nombreDuenno,
            rutDueno: datos.rutDueno ,
            direccion: datos.direccion,
            comuna: datos.comuna ,
            ciudad: datos.ciudad,
            montoEdificioUF: datos.montoEdificioUF,
            montoContenidosUF: datos.montoContenidosUF,
            annoConstruccion: datos.annoConstruccion,
            tipoDeConstruccion: datos.tipoDeConstruccion,
            tiposDeProtecciones: datos.tiposDeProtecciones,
            uso: datos.uso,
            telefono: datos.telefono,
            mail: datos.mail,
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


    return (
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
                                                        placeholder="Nombre Dueño" 
                                                        type="text"
                                                        name="nombreDuenno" 
                                                        className="form-control"
                                                        onChange={handleInputChange} 
                                                        />
                                                        
													</div>
												</div>
												<div className="col-12 col-lg-6">
													<div className="form-group">
                                                        <InputStyled 
                                                        placeholder="Rut" 
                                                        type="text" 
                                                        name="rutDueno"
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
                                                 placeholder="Direccion"
                                                 type="text"
                                                 name="direccion"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Comuna"
                                                 type="text"
                                                 name="comuna"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Ciudad"
                                                 type="text"
                                                 name="ciudad"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Monto Edificio UF"
                                                 type="text"
                                                 name="montoEdificioUF"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Monto Contenidos UF"
                                                 type="text"
                                                 name="montoContenidosUF"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Año Construcción"
                                                 type="text"
                                                 name="annoConstruccion"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Tipo de Construcción"
                                                 type="text"
                                                 name="tipoDeConstruccion"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Tipos de Protecciones"
                                                 type="text"
                                                 name="tiposDeProtecciones"
                                                 onChange={handleInputChange}
                                                 className="form-control"/>
													</div>
												</div>
                                                <div className="col-12 col-lg-6">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Uso"
                                                 type="text"
                                                 name="uso"
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
                                                <div className="col-12 col-lg-12">
													<div className="form-group">
                                                 <InputStyled
                                                 placeholder="Mail"
                                                 type="text"
                                                 name="mail"
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
    )
}

export default IncendioHogar
