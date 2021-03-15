import React, { useState } from 'react'



const noImage = {
	url: 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png'

}


const Slider2 = () => {

	const [slider, setSlider] = useState([])
	const [destacada, setDestacada] = useState([])

	const [slider2, setSlider2] = useState([])
	const [destacada2, setDestacada2] = useState([])

	const [slider3, setSlider3] = useState([])
	const [destacada3, setDestacada3] = useState([])

	const [slider4, setSlider4] = useState([])
	const [destacada4, setDestacada4] = useState([])

	const [slider5, setSlider5] = useState([])
	const [destacada5, setDestacada5] = useState([])

	React.useEffect(() => {
		obtenerDatos()
	}, [])


	const obtenerDatos = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/inicio-slider-1-s`)
		const sliderData = await data.json()
		console.log("sliderdata",sliderData)
		//console.log(sliderData[0].imagen_destacada.url)
	
		setSlider(sliderData[0])

		if (sliderData[0].imagen_destacada.url){
			setDestacada(sliderData[0].imagen_destacada.url)
		}else{
			setDestacada()
		}


		setSlider2(sliderData[1])

		if (sliderData[1].imagen_destacada.url){
			setDestacada2(sliderData[1].imagen_destacada.url)
		}else{
			setDestacada2()
		}

		setSlider3(sliderData[2])

		if (sliderData[2].imagen_destacada.url){
			setDestacada3(sliderData[2].imagen_destacada.url)
		}else{
			setDestacada3()
		}

		setSlider4(sliderData[3])

		if (sliderData[3].imagen_destacada.url){
			setDestacada4(sliderData[3].imagen_destacada.url)
		}else{
			setDestacada4()
		}

		setSlider5(sliderData[4])

		if (sliderData[4].imagen_destacada){
			setDestacada5(sliderData[4].imagen_destacada.url)
		}else{
			setDestacada5()
		}


		console.log('destacdada5', destacada5)

	}



	const [active1, setActive1] = useState(true)
	const [active2, setActive2] = useState(false)
	const [active3, setActive3] = useState(false)
	const [active4, setActive4] = useState(false)
	const [active5, setActive5] = useState(false)


const activePointOne = () => {

	setActive1(true)
	setActive2(false)
	setActive3(false)
	setActive4(false)
	setActive5(false)

	

}
const activePointTwo = () => {

	setActive1(false)
	setActive2(true)
	setActive3(false)
	setActive4(false)
	setActive5(false)



}
const activePointThree = () => {
	setActive1(false)
	setActive2(false)
	setActive3(true)
	setActive4(false)
	setActive5(false)

}

const activePointFour = () => {
	setActive1(false)
	setActive2(false)
	setActive3(false)
	setActive4(true)
	setActive5(false)

}

const activePointFive = () => {
	setActive1(false)
	setActive2(false)
	setActive3(false)
	setActive4(false)
	setActive5(true)

}



const puntoDos = () => {
	if (slider2){
		return (<li className={active2 ? "active" : null}><a onClick={activePointTwo}>2</a></li>
		)
	}
}
const puntoTres = () => {
	if (slider3){
		return (<li className={active3 ? "active" : null}><a onClick={activePointThree}>3</a></li>
		)
	}
}
const puntoCuatro = () => {
	if (slider4){
		return (<li className={active4 ? "active" : null}><a onClick={activePointFour}>4</a></li>
		)
	}
}

const puntoCinco = () => {
	if (slider5){
		return (			<li className={active5 ? "active" : null}><a onClick={activePointFive}>5</a></li>

		)
	}
}



    return (

<section className="inicio nopdt nopdb">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="grupo">
									<div className="carrusel">
										<div className="lSSlideOuter "><div className="lSSlideWrapper usingCss"><div id="slide" className="lightSlider lSFade" style={{height: '0px', paddingBottom: '34.9485%'}}>
											
                                            <div style={{display: active1 ? '' : 'none' }}
											     className={`modulo1 modulo lslide ${active1 ? "active" : "none"}`}>
												<div className="row">
													<div className="col-12 col-lg-6">
														
														{
															slider.titulo ? (<h3 dangerouslySetInnerHTML={ {__html: slider.titulo} }></h3>) : (<h3>Sin Titulo</h3>)
														}
														{
															slider.descripcion ? (<p dangerouslySetInnerHTML={ {__html: slider.descripcion} }></p>) : (<p>Sin Descripción</p>) 
														}
														{
															slider.texto_boton ? (<div className="clearfix">
															<a target="_blank" href={slider.URL_boton} className="boton"><span>{slider.texto_boton}</span></a>
														</div>) : (null)
														}


													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
														{
																						destacada ? (<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${destacada}`}alt=""/>) : 
																									 (<img className="img-fluid" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png"  alt=""/>)
																			}														</div>
													</div>
												</div>
											</div>
											{
												slider2 ? (											<div style={{display: active2 ? '' : 'none' }}className={`modulo2 modulo lslide ${active2 ? "active" : "none"}`}>
												<div className="row">
													<div className="col-12 col-lg-6">
													{
															slider2.titulo ? (<h3 dangerouslySetInnerHTML={ {__html: slider2.titulo} }></h3>) : (<h3>Sin Titulo</h3>)
														}
														{
															slider2.descripcion ? (<p dangerouslySetInnerHTML={ {__html: slider2.descripcion} }></p>) : (<p>Sin Descripción</p>) 
														}

														{
															slider2.texto_boton ? (<div className="clearfix">
															<a href={slider2.URL_boton} target="_blank" className="boton"><span>{slider2.texto_boton}</span></a>
														</div>) : null
														}

													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
														{
																						destacada2 ? (<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${destacada2}`}alt=""/>) : 
																									 (<img className="img-fluid" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png"  alt=""/>)
																			}														</div>
													</div>
												</div>
											</div>) : (null)
											}

												{
													slider3 ? (				<div style={{display: active3 ? '' : 'none' }} className={`modulo lslide ${active3 ? "active" : "none"}`}>
													<div className="row">
															<div className="col-12 col-lg-6">
															{
															slider3.titulo ? (<h3 dangerouslySetInnerHTML={ {__html: slider3.titulo} }></h3>) : (<h3>Sin Titulo</h3>)
														}
														{
															slider3.descripcion ? (<p dangerouslySetInnerHTML={ {__html: slider3.descripcion} }></p>) : (<p>Sin Descripción</p>) 
														}

														{
															slider3.texto_boton ? (<div className="clearfix">
															<a target="_blank" href={slider3.URL_boton} className="boton"><span>{slider3.texto_boton}</span></a>
														</div>) : (null)
														}

															</div>
															<div className="col-12 col-lg-6">
																<div className="centrar">
																{
																						destacada3 ? (<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${destacada3}`}alt=""/>) : 
																									 (<img className="img-fluid" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png"  alt=""/>)
																			}																</div>
															</div>
														</div>
													</div>) : (null)
												}
							

											{
												slider4 ? (	<div style={{display: active4 ? '' : 'none' }} className={`modulo lslide ${active4 ? "active" : "none"}`}>
												<div className="row">
														<div className="col-12 col-lg-6">
														{
															slider4.titulo ? (<h3 dangerouslySetInnerHTML={ {__html: slider4.titulo} }></h3>) : (<h3>Sin Titulo</h3>)
														}
														{
															slider4.descripcion ? (<p dangerouslySetInnerHTML={ {__html: slider4.descripcion} }></p>) : (<p>Sin Descripción</p>) 
														}

														{
															slider4.texto_boton ? (<div className="clearfix">
															<a target="_blank" href={slider4.URL_boton} className="boton"><span>{slider4.texto_boton}</span></a>
														</div>) : (null)
														}
															



														</div>
														<div className="col-12 col-lg-6">
															<div className="centrar">
																			{
																						destacada4 ? (<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${destacada4}`}alt=""/>) : 
																									 (<img className="img-fluid" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png"  alt=""/>)
																			}

																
															</div>
														</div>
													</div>
												</div>) : (null)
											}
												
												
				

													{
														slider5 ? (  <div style={{display: active5 ? '' : 'none' }} className={`modulo lslide ${active5 ? "active" : "none"}`}>
														<div className="row">
																<div className="col-12 col-lg-6">
																{
															slider5.titulo ? (<h3 dangerouslySetInnerHTML={ {__html: slider5.titulo} }></h3>) : (<h3>Sin Titulo</h3>)
														}
														{
															slider5.descripcion ? (<p dangerouslySetInnerHTML={ {__html: slider5.descripcion} }></p>) : (<p>Sin Descripción</p>) 
														}


														{
															slider5.texto_boton ? (<div className="clearfix">
															<a target="_blank" href={slider5.URL_boton} className="boton">
																<span>{slider5.texto_boton}</span></a>
														</div>) : null
														}
																	

																</div>
																<div className="col-12 col-lg-6">
																	<div className="centrar">
																		{
																			destacada5 ? (<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${destacada5}`}alt=""/>) : 
																			(<img className="img-fluid" src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image-300x300.png"  alt=""/>) 
																		}

																		
																	</div>
																</div>
															</div>
														</div>) : (null)
													}

										</div></div>
                                        <ul className="lSPager lSpg" style={{ marginTop: '5px'}} >


											
                                            <li className={active1 ? "active" : null }><a onClick={activePointOne}>1</a></li>
												{
													slider2 ? (puntoDos()) : (null)
												}
																								{
													slider3 ? (puntoTres()) : (null)
												}
																								{
													slider4 ? (puntoCuatro()) : (null)
												}
												{
													slider5 ? (puntoCinco()) : (null)
												}
                                            </ul>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  

    )
}

export default Slider2
