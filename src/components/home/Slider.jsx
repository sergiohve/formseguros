import React from 'react'
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption
} from 'reactstrap'


const Slider = () => {

    const items = [
    {
        src: 'http://dev.love.cl/recover09112020/img/temp/ilustracion1.png',
        altText: 'Imagen 1',
        caption: 'BlaBla'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Imagen 2',
        caption: 'BlaBla'
    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Imagen 2',
        caption: 'BlaBla'
    }
    ]

    const [activeIndex, setActiveIndex] = React.useState(0)
    const [animating, setAnimating] = React.useState(false)

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === items.lenght - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex -1
        setActiveIndex(nextIndex)
    }

    const goToIndex = (newIndex) => {
        if (animating) return
        setActiveIndex(newIndex)
    }

    
    const slides = items.map((item) => {
        return (
            <CarouselItem 
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            >
                                            <div className="modulo lslide ">
												<div className="row">
													<div className="col-12 col-lg-6">
														<h3> { item.altText } </h3>
														<p> { item.caption } </p>
														<div className="clearfix">
															<a href="#" className="boton"><span>Más información</span></a>
														</div>
													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
                                                        <img className="img-fluid" src={item.src} alt={item.altText}/>
														</div>
													</div>
												</div>
											</div>
            </CarouselItem>
        )
    })





    const body = () => {
    
        <section className="inicio nopdt nopdb">
        <div className="container">
            <div className="paginas">
                <div className="row">
                    <div className="col-12">
                        <div className="grupo">
                            <div className="carrusel">
                                <div className="lSSlideOuter "><div className="lSSlideWrapper usingCss"><div id="slide" className="lightSlider lSFade" style={{height: '0px', paddingBottom: '34.9485%'}}>

                                {slides}

    </div></div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    }


    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >


                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {body}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                

            </Carousel>



     
           {/*   <section className="inicio nopdt nopdb">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="grupo">
									<div className="carrusel">
										<div className="lSSlideOuter "><div className="lSSlideWrapper usingCss"><div id="slide" className="lightSlider lSFade" style={{height: '0px', paddingBottom: '34.9485%'}}>
											
                                            <div className="modulo lslide active">
												<div className="row">
													<div className="col-12 col-lg-6">
														<h3>Nuevo seguro <strong>de vida colectivo</strong></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
														<div className="clearfix">
															<a href="#" className="boton"><span>Más información</span></a>
														</div>
													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
															<img className="img-fluid" src="http://dev.love.cl/recover09112020/img/temp/ilustracion1.png" alt=""/>
														</div>
													</div>
												</div>
											</div>

											<div className="modulo lslide">
												<div className="row">
													<div className="col-12 col-lg-6">
														<h3>Nuevo seguro <strong>de vida colectivo</strong></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
														<div className="clearfix">
															<a href="#" className="boton"><span>Más información</span></a>
														</div>
													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
															<img className="img-fluid" src="http://dev.love.cl/recover09112020/img/temp/ilustracion1.png" alt=""/>
														</div>
													</div>
												</div>
											</div>

											<div className="modulo lslide">
												<div className="row">
													<div className="col-12 col-lg-6">
														<h3>Nuevo seguro <strong>de vida colectivo</strong></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore aliqua.</p>
														<div className="clearfix">
															<a href="#" className="boton"><span>Más información</span></a>
														</div>
													</div>
													<div className="col-12 col-lg-6">
														<div className="centrar">
															<img className="img-fluid" src="http://dev.love.cl/recover09112020/img/temp/ilustracion1.png" alt=""/>
														</div>
													</div>
												</div>
											</div>

										</div></div>
                                        <ul className="lSPager lSpg" style={{ marginTop: '5px'}} >
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            </ul>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>*/}


        </div>
    )
}

export default Slider
