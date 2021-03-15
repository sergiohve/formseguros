import React, { useState, useEffect } from 'react'


const Hablemos = () => {

const [hablemos, setHablemos] = useState([])

useEffect(() => {
	obtenerDatos()
	
}, [])



	const obtenerDatos = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/banner-homes`)
		const hablemosJson = await data.json()
		setHablemos(hablemosJson[0])
		console.log("aca empieza hablemos")
		console.log(hablemos)
	}

    return (
        <React.Fragment>
            <section class="hablemos nopdb">
				<div class="container">
					<div class="paginas">
						<div class="row">
							<div class="col-12">
								<div class="titulo">
									<h2>Hablemos</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bajada section">
					<div class="container">
						<div class="paginas">
							<div class="row">
								<div class="col-8 offset-2 col-lg-12 offset-lg-0">
									<div class="row">
										<div class="col-12 col-lg-4">
											<div class="modulo">
												<div class="row gutter">
													<div class="col-5 col-lg-5">
														<img class="img-fluid" src="http://dev.love.cl/recover09112020/img/iconos/ico-hablemos1.png" alt="Teléfono"/>
													</div>
													<div class="col-7 col-lg-7">
														<div class="contenido">
															<h3>{hablemos.titulo_telefono}</h3>
															<p><a href={`tel:${hablemos.numeroUno}`} target="_blank">{hablemos.numeroUno}</a></p>
															<p><a href={`tel:${hablemos.numeroDos}`} target="_blank">{hablemos.numeroDos}</a></p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-12 col-lg-4">
											<div class="modulo">
												<div class="row gutter">
													<div class="col-5 col-lg-5">
														<img class="img-fluid" src="http://dev.love.cl/recover09112020/img/iconos/ico-hablemos2.png" alt="Email"/>
													</div>
													<div class="col-7 col-lg-7">
														<div class="contenido">
															<h3>{hablemos.titulo_Email}</h3>
															<p><a href={`mailto:${hablemos.correo}`} target="_blank">{hablemos.correo}</a></p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="col-12 col-lg-4">
											<div class="modulo">
												<div class="row gutter">
													<div class="col-5 col-lg-5">
														<img class="img-fluid" src="http://dev.love.cl/recover09112020/img/iconos/ico-hablemos3.png" alt="Dirección"/>
													</div>
													<div class="col-7 col-lg-7">
														<div class="contenido">
															<h3>{hablemos.titulo_direccion}</h3>
															<p dangerouslySetInnerHTML={ {__html: hablemos.Direccion} }></p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </React.Fragment>
    )
}

export default Hablemos
