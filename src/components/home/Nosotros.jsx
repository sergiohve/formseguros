import React, { useState } from 'react'

const Nosotros = () => {


	React.useEffect(() => {
		obtenerDatos()
	}, [])


	const obtenerDatos = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/inicio-slider-2-s`)
		const sliderData = await data.json()
		console.log("sliderdata")
		//console.log(sliderData[0].Icono.url)
	
		setSlider(sliderData[0])

		if(sliderData[0].Icono.url){
		setDestacada(sliderData[0].Icono.url)
		}else{
			setDestacada('https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png')
		}

		
		setSlider2(sliderData[1])
		setDestacada2(sliderData[1].Icono.url)
		
		setSlider3(sliderData[2])
		setDestacada3(sliderData[2].Icono.url)

	}



	const [slider, setSlider] = useState([])
	const [destacada, setDestacada] = useState([])

	const [slider2, setSlider2] = useState([])
	const [destacada2, setDestacada2] = useState([])

	const [slider3, setSlider3] = useState([])
	const [destacada3, setDestacada3] = useState([])

	const [active1, setActive1] = useState(true)
	const [active2, setActive2] = useState(false)
	const [active3, setActive3] = useState(false)

	
const activePointOne = () => {
	setActive1(true)
	setActive2(false)
	setActive3(false)

}
const activePointTwo = () => {
	setActive1(false)
	setActive2(true)
	setActive3(false)


}
const activePointThree = () => {
	setActive1(false)
	setActive2(false)
	setActive3(true)

}





    return (
<React.Fragment>
<section className="nosotros nopdb">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="titulo">
									<span className="sub">Conoce más</span>
									<h2>¿Por qué elegir Recover?</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="interior">
					<div className="container">
						<div className="paginas">
							<div className="row">
								<div className="col-12">
									<div className="carrusel">
                                        <div className="lSSlideOuter ">
											<div className="lSSlideWrapper usingCss">
												<div id="slide-nosotros" className="lightSlider lSSlide" 
										style={{width: '3885px', transform: 'translate3d(-1110px, 0px, 0px)', 
										height: '314.578px', paddingBottom: '0%'}}>


											<div className="modulo clone left" 
                                        style={{width: '555px', marginRight: '0px'}}>
												<div className="int">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada2}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																																		<h3 dangerouslySetInnerHTML={ {__html: slider2.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider2.descripcion} }></p>
													</div>
												</div>
											</div>
											
											
											
											<div className="modulo clone left" style={{width: '555px', marginRight: '0px'}}>
												<div className="int">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada3}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																																	<h3 dangerouslySetInnerHTML={ {__html: slider3.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider3.descripcion} }></p>
													</div>
												</div>
											</div>



											<div className="modulo lslide active" style={{width: '555px', marginRight: '0px', display: active1 ? '' : 'none'}}>
												<div className="int especial">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																<h3 dangerouslySetInnerHTML={ {__html: slider.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider.descripcion} }></p>
													</div>
												</div>
											</div>



											<div className="modulo lslide" style={{width: '555px', marginRight: '0px', display: !active3 ? '' : 'none'}}>
												<div className="int">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada2}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
													<h3 dangerouslySetInnerHTML={ {__html: slider2.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider2.descripcion} }></p>

													</div>
												</div>
											</div>


											<div className="modulo lslide active" style={{width: '555px', marginRight: '0px',}}>
												<div className="int">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada3}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																																	<h3 dangerouslySetInnerHTML={ {__html: slider3.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider3.descripcion} }></p>
													</div>
												</div>
											</div>


										<div className="modulo clone right" style={{width: '555px', marginRight: '0px'}}>
												<div className="int especial">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																	<h3 dangerouslySetInnerHTML={ {__html: slider.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider.descripcion} }></p>

													</div>
												</div>
											</div>
											
											<div className="modulo clone right" style={{width: '555px', marginRight: '0px'}}>
												<div className="int">
													<div className="encabezado">
														<div className="grp">
															<div className="row">
																<div className="col-3 col-lg-3">
																	<div className="centrar">
																		<img className="img-fluid ico" src={`http://dev.love.cl:3001${destacada2}`} alt=""/>
																	</div>
																</div>
																<div className="col-8 col-lg-6">
																																		<h3 dangerouslySetInnerHTML={ {__html: slider2.Titulo} }></h3>
																</div>
															</div>
														</div>
													</div>
													<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: slider2.descripcion} }></p>
													</div>
												</div>
											</div>
											
											
											</div></div><ul className="lSPager lSpg" style={{marginTop: '5px'}}>
												<li className={active1 ? "active" : null }><a onClick={activePointOne}>1</a></li>
												<li className={active2 ? "active" : null }><a onClick={activePointTwo}>2</a></li>
												<li className={active3 ? "active" : null }><a onClick={activePointThree}>3</a></li>
												</ul></div>
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

export default Nosotros
