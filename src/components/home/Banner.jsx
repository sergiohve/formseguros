import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useLocation
  } from 'react-router-dom'
import styled from "styled-components";

const AStyled = styled.a`
    text-decoration: none;
    display: inline-block;
    margin-left: 15px;
    text-align: center;

`

const Banner = () => {




const [banner, setBanner] = React.useState([])
const [person, setPerson] = React.useState(false)
const [pyme, setPyme] = React.useState(false)
const [buttons, setButtons] = React.useState(true)
const [segurosP, setSegurosP] = React.useState([])
const [segurosE, setSegurosE] = React.useState([])


const showPerson = () => {
    setPerson(true)
	setButtons(false)
	obtenerSegurosPersona()
}


const showPyme = () => {
    setPyme(true)
	setButtons(false)
	obtenerSegurosPyme()
}

const returnBack = () => {
	setPerson(false)
	setPyme(false)
    setButtons(true)
}



React.useEffect(() => {
    obtenerDatos()
}, [])


const obtenerDatos = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/banner-homes`)
    const bannerJson = await data.json()
    console.log("aca")
    console.log(bannerJson[0])

    setBanner(bannerJson[0])

}

const obtenerSegurosPersona = async () => {
	const data = await fetch(`${process.env.REACT_APP_API_URL}/seguros?tipo_seguro=personas`)
	const seguros = await data.json()
	console.log(seguros[0].ICONO.url)
	setSegurosP(seguros)

}

const obtenerSegurosPyme = async () => {
	const data = await fetch(`${process.env.REACT_APP_API_URL}/seguros?tipo_seguro=empresas`)
	const seguros = await data.json()
	console.log(seguros[0].ICONO.url)
	setSegurosE(seguros)

}





const handleClick = (event) => {
	const id = event.target.id;
    console.log(id);

}



    return (
        <div>
            <section className="banner primera">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
                            <h1>{banner.titulo}</h1>
								<p dangerouslySetInnerHTML={ {__html: banner.descripcion} }></p>
                                <div id="paso1" className="paso">

                                    {buttons ? (		<div className="botones clearfix">
										<a onClick={showPerson} className="boton mostrar"  data-num="2"><span>{banner.texto_boton1}</span></a>
										<a onClick={showPyme} className="boton ultimo mostrar"data-num="2"><span>{banner.texto_boton2}</span></a>
                                    </div>
                                    ) : null } 
							
								</div>



                                {person ? ( 
                                    <div id="paso2" className="paso">
									<div className="fila">
										<div className="row no-gutters">
											<div className="col-2 col-lg-1">
												<a href="#" className="volver mostrar" onClick={returnBack} data-num="1">
                                                    <img className="img-fluid ico" src="http://dev.love.cl/recover09112020/img/iconos/ico-volver.png" alt=""/></a>
											</div>
											<div className="col-10 col-lg-11">

															
											{segurosP.sort((a, b) => a.order - b.order).map(({ order, titulo }) => (
														<>
															<div key={order}>
															</div>
														</>
														))}
															
															{
																segurosP.map(item => (
																	<Link to={{
																		pathname: `/seguros/${item.slug}`,
																		state: {tipoSeguro: 'Personas', nombre: item.titulo_ICONO, origen:'home', urlIcon:`http://dev.love.cl:3001${item.ICONO.url}` }

																	}}
																
																	
																	>
																	<a id={item.titulo_ICONO} key={item.id} className="modulo"><div className="globo">
																	<img className="img-fluid ico v1" src={`http://dev.love.cl:3001${item.ICONO.url}`} alt=""/>
																	<img className="img-fluid ico v2" src={`http://dev.love.cl:3001${item.ICONO_BLANCO.url}`} alt=""/>
																	</div>
																	<span>{item.titulo_ICONO}</span>
																</a>
																</Link>
																))			
															}
											</div>
										</div>
									</div>
								</div>
                                ) : null }
								
								{pyme ? ( 
                                    <div id="paso2" className="paso">
									<div className="fila">
										<div className="row no-gutters">
											<div className="col-2 col-lg-1">
												<a href="#" className="volver mostrar" onClick={returnBack} data-num="1">
                                                    <img className="img-fluid ico" src="http://dev.love.cl/recover09112020/img/iconos/ico-volver.png" alt=""/></a>
											</div>
											<div className="col-10 col-lg-11">

															{
																segurosE.map(item => (
																	<Link to={{
																		pathname: `/seguros/${item.slug}`,
																		state: {tipoSeguro: 'Empresas', nombre: item.titulo_ICONO, origen:'home'}

																	}}>
																	<a id={item.titulo_ICONO} className="modulo"><div className="globo">
																	<img className="img-fluid ico v1" src={`http://dev.love.cl:3001${item.ICONO.url}`} alt=""/>
																	<img className="img-fluid ico v2" src={`http://dev.love.cl:3001${item.ICONO_BLANCO.url}`} alt=""/>
																	</div>
																	<span>{item.titulo_ICONO}</span>
																</a>
																	</Link>
																))			
															}

											
											</div>
										</div>
									</div>
								</div>
                                ) : null }



							</div>
						</div>
					</div>
				</div>
				<img className="img-fluid" src="http://dev.love.cl:3001/uploads/ilustracion0_0a3264ede9.png" alt=""/>
			</section>
        </div>
    )
}

export default Banner
