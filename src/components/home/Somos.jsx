import React, { useState, useEffect} from 'react'


const Somos = () => {

	const [banner, setBanner] = useState([])


useEffect(() => {
    obtenerDatos()
}, [])

const obtenerDatos = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/banner-homes`)
    const bannerJson = await data.json()
    console.log("acuyá")
    console.log(bannerJson[0])

    setBanner(bannerJson[0])
}





    return (
        <React.Fragment>
            <section className="somos nopdt nopdb">	
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="grupo">
									<div className="row">
										<div className="col-12 col-lg-6">
											<h2>{ banner.titulo_somos_expertos }</h2>
										</div>
										<div className="col-12 col-lg-6">
											<p>{banner.descripcion_somos_expertos}</p>
										</div>
									</div>
									<div className="cifras">
										<div className="row justify-content-center">
											<div className="col-6 col-lg-4">
												<div className="modulo">
													<span className="num">{banner.numero_consultas}</span>
													<p>Consultas resueltas en un año</p>
												</div>										
											</div>
											<div className="col-6 col-lg-4">
												<div className="modulo">
													<span className="num">{banner.numero_siniestros}</span>
													<p>Siniestros resueltos por año</p>
												</div>										
											</div>
											<div className="col-6 col-lg-4">
												<div className="modulo">
													<span className="num">{ banner.porcentaje_clientes }</span>
													<p>Clientes satisfechos</p>
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

export default Somos
