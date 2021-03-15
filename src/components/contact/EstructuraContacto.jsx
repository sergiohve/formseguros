import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
    useLocation,
    useHistory  
  } from 'react-router-dom'


const EstructuraContacto = () => {
    const history = useHistory();

    const notify = () => toast.success(' Datos enviados correctamente!!', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });


const errores = (valuee) => 
toast.error(valuee, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        cuerpo: ''
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
            [event.target.name] : event.target.value,
            [event.target.email] : event.target.value,
            [event.target.cuerpo] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.email + ' ' + datos.cuerpo)

        if(!datos.nombre.trim()){
            errores('Nombre no puede estar vacío')
            return
        }
        if(!datos.email.trim()){
           errores('Email no puede estar vacío')

            return
        }
        if(!datos.cuerpo.trim()){
            errores('Cuerpo no puede estar vacío')
            return
        }

        axios.post(`${process.env.REACT_APP_API_URL}/contactos`, {
            nombre: datos.nombre,
            email: datos.email,
            cuerpo: datos.cuerpo
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
<>

<section className="cabecera primera">
				<div className="container">
					<div className="paginas">
						<div className="formulario">
							<div className="row">
								<div className="col-12">
									<div className="titulo">
										<h1><img className="img-fluid ico" src="img/iconos/ico-formulario.png" alt="" /> Contactanos</h1>
									</div>
								</div>
								<div className="col-12 col-lg-8 offset-lg-2">
									<div className="cont">
                                    <ToastContainer 
                                        position="top-center"
                                        autoClose={false}
                                        newestOnTop
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        />
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />

										<form  onSubmit={enviarDatos} >

											<div className="row">
												<div className="col-12 col-lg-6">
													<div className="form-group">
														<input style={{
                                                                    fontFamily: "'Montserrat',sans-serif",
                                                                    fontSize: "17px",
                                                                    fontWeight: "400",
                                                                    background: "#fff",
                                                                    border: "1px solid #fff",
                                                                    color: "#474756",
                                                                    height: "60px",
                                                                    padding: "5px 25px",
                                                                    borderRadius: "50px",
                                                                    boxShadow: "0px 10px 13px 0px rgba(112, 171, 219, 0.23)"

                                                        }} 
                                                        placeholder="Nombre" 
                                                        type="text" 
                                                        name="nombre"
                                                        className="form-control"
                                                        onChange={handleInputChange} 
                                                        />
													</div>
												</div>
		
												<div className="col-12 col-lg-6">
													<div className="form-group">
														<input style={{
                                                                    fontFamily: "'Montserrat',sans-serif",
                                                                    fontSize: "17px",
                                                                    fontWeight: "400",
                                                                    background: "#fff",
                                                                    border: "1px solid #fff",
                                                                    color: "#474756",
                                                                    height: "60px",
                                                                    padding: "5px 25px",
                                                                    borderRadius: "50px",
                                                                    boxShadow: "0px 10px 13px 0px rgba(112, 171, 219, 0.23)"

                                                        }} 
                                                        placeholder="Email" 
                                                        type="email" 
                                                        className="form-control"
                                                        onChange={handleInputChange} 
                                                        name="email"
                                                        />
													</div>
												</div>

                                                <div className="col-12 col-lg-12">
													<div className="form-group">
                                                    <textarea style={{
                                                                    fontFamily: "'Montserrat',sans-serif",
                                                                    fontSize: "17px",
                                                                    fontWeight: "400",
                                                                    background: "#fff",
                                                                    border: "1px solid #fff",
                                                                    color: "#474756",
                                                                    padding: "5px 25px",
                                                                    borderRadius: "50px",
                                                                    boxShadow: "0px 10px 13px 0px rgba(112, 171, 219, 0.23)"

                                                        }} 
                                                        name="message" 
                                                        rows="10" 
                                                        cols="74"
                                                        placeholder="Escribe un mensaje"
                                                        onChange={handleInputChange} 
                                                        name="cuerpo"
                                                        >

                                                        </textarea>
									
													</div>
												</div>
											</div>
											<button type="submit"  className="boton"><span>Enviar</span></button>
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

export default EstructuraContacto
