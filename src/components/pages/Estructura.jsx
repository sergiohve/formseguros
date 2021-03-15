import React from 'react'
import { useParams } from 'react-router-dom'

const Estructura = () => {


    const {slug} = useParams()
    console.log(slug)


    const [pagina, setPagina] = React.useState([])
    const [imagen, setImagen] = React.useState([])
    const [block, setBlock] = React.useState([])
	const [fragment, setFragment] = React.useState([])
	const [tituloFragment, setTituloFragment] = React.useState([])
    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/pages?slug=${slug}`)
            const users = await data.json()
            setPagina(users[0])
            setImagen(users[0].imagen_destacada[0])
			setBlock(users[0].block)
			setFragment(users[0].imagen_fragmento[0])
			setTituloFragment(users[0].titulo_fragmento)
			console.log("aca siii")
			console.log(tituloFragment)

			
			
			console.log(block)

			
			
        }

        {/*
        const obtenerBloques = async () => {
            const data = await fetch(`http://dev.love.cl:3001/bloques`)
            const blocks = await data.json()
            setBlock(blocks)

        }
    */}
        obtenerDatos()
    }, [slug])


const URL = 'http://dev.love.cl:3001' + imagen.url;
const URL2 = 'http://dev.love.cl:3001' 

    return (
        <>

            {/*  TITULO */}
            <section class="cabecera primera">
				<div class="container">
					<div class="paginas">
						<div class="modulo">
							<div class="row">
								<div class="col-12 col-lg-6">
									<div class="contenido">
										<h1 style={{ color: 'orange', fontWeight: 'bold'}} dangerouslySetInnerHTML={ {__html: pagina.titulo} }></h1>
										<p dangerouslySetInnerHTML={ {__html: pagina.descripcion_corta} }></p>
									</div>
								</div>
								<div class="col-12 col-lg-6">
									<div class="centrar">
										<img class="img-fluid" src={ URL } alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
                      {/*  ENTRADA */}
            <section class="entrada">
				<div class="container">
					<div class="paginas">
						<div class="row">
							<div class="col-12 col-lg-10 offset-lg-1">
								<p dangerouslySetInnerHTML={ {__html: pagina.cuerpo} } ></p>
            
                            </div>
						</div>
					</div>
				</div>
			</section>

                 {/*  BLOQUES */}
				 
				 {
					block.length ? (
            <section class="par nopdb">
				<div class="container">
					<div class="paginas">
						<div class="row">
							<div class="col-12">
								<div class="titulo nomg especial">
									<h2>{pagina.titulo_bloque}</h2>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">

								<div class="destacados">	
									<div class="row gutter">


										
										
                                        {
																		
											block.length ? block.map(item => (

												<div key={item.id} class="col-12 col-lg-4">
												<div style={{ height: '420px' }} class="modulo">
														<h3
														style={{
															wordBreak: 'break-word',
															overflow: 'hidden',
															textOverflow: 'ellipsis',
															display: '-webkit-box',
															lineHeight: '31px',
															maxHeight: '65px',
															WebkitLineClamp: '2',
															WebkitBoxOrient: 'vertical'


														}}
														
														>{item.titulo}</h3>
														<p style={{ overflow: 'hidden', maxHeight: '290px' }}>
															{item.descripcion}
														</p>
													</div>
												</div>
	
												)) : ''

                                            

                                        }
								
									
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</section>
			): null }

                         {/*  INFORMACIÓN */}
						 {
							 tituloFragment == '' ? (null) : (<section class="informacion especial">
							 <div class="container">
								 <div class="paginas">
									 <div class="row">
										 <div class="col-12">
											 <div class="row">
												 <div class="col-12 col-lg-4">
													 <div class="desktop">
														 <img class="img-fluid" src={URL2} alt=""/>
													 </div>
												 </div>
												 <div class="col-12 col-lg-7 offset-lg-1">
													 <h3>{pagina.titulo_fragmento }</h3>
													 <p dangerouslySetInnerHTML={ {__html: pagina.cuerpo_fragmento} }></p>
												 
													 <div class="mobile">
														 <div class="centrar">
															 <img class="img-fluid" src={URL2} alt=""/>
														 </div>
													 </div>
												 </div>
											 </div>
										 </div>
									 </div>
								 </div>
							 </div>
						 </section>)
						 }
            




        </>
    )
}

export default Estructura
