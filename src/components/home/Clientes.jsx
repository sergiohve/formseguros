import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  ul li {
    background:none;
  }`




const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
	slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
	slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
	slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
	slidesToSlide: 1
  }
};

const Clientes = () => {

	const [logos, setLogos] = React.useState([])


	React.useEffect(() => {
		obtenerDatos()
	}, [])
	
	
	const obtenerDatos = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/logos`)
		const logosJson = await data.json()
		console.log('logos', logosJson[0].logos)	
		setLogos(logosJson[0].logos)
	}


	


    return (
        <React.Fragment>
			<GlobalStyle/>
            <section class="clientes nopdb">
				<div class="container">
					<div class="paginas">
						<div class="row">
							<div class="col-12">
								<div class="titulo">
									<span class="sub especial">Sobre nosotros</span>
									<h2>Compañías que <br/>trabajan con nosotros</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grupo">
					<div class="container-fluid">
						<div class="row no-gutters">
							<div class="col-12">


							<Carousel   
							swipeable={false}
							draggable={false}
							showDots={false}
							responsive={responsive}
							ssr={true} // means to render carousel on server-side.
							infinite={true}
							autoPlay={true}
							autoPlaySpeed={3000}
							keyBoardControl={true}
							customTransition="all .5"
							transitionDuration={500}
							containerClass="carousel-container"
							removeArrowOnDeviceType={["tablet", "mobile"]}
							dotListClass="custom-dot-list-style"
							itemClass="carousel-item-padding-0-px"
>
							{
							
							logos?.map((item, key)=>(
								<div><img  key={item+key} className="img" alt="logos" src= {`http://dev.love.cl:3001${item.url}`}/></div>)
							)
								
							}
</Carousel>

		

					{
						/* 
									<OwlCarousel items={10}  
          className="owl-theme"  
          loop  
          margin={10} >  
						

					


           
    
      </OwlCarousel>  
						*/
					}	

										   
							
						</div>
					</div>
				</div>
				</div>
			</section>

		

        </React.Fragment>
    )
}

export default Clientes
