import React from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink,
	useLocation
  } from 'react-router-dom'

const EstructuraSeguros = () => {
	const { state } = useLocation();
    const estado = state;

    const {slug} = useParams()
    const [pagina, setPagina] = React.useState([])
    const [imagen, setImagen] = React.useState([])
    const [icon, setIcon] = React.useState([])


	const tipoSeguro = () => {

		if (estado.tipoSeguro == null){
			alert("1111")
		}else{
			alert("22222")
		}


	}


    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/seguros?slug=${slug}`)
            const users = await data.json()
            setPagina(users[0])
            setImagen(users[0].imagen_destacada)
            setIcon(users[0].Icon)
			
            console.log(URL )
            console.log("desde aca")
			console.log(estado)
			console.log("tipofor", users[0].tipo_formulario)
        }
        obtenerDatos()
    }, [slug])


    const URL = 'http://http://dev.love.cl/:3001'
    const urlIcon = 'http://http://dev.love.cl/:3001' + icon
   


    return (
            <>

<section className="cabecera nopdb" >
				<div className="container">
					<div className="paginas">
						<div className="modulo">
							<div className="grupo">
								<div className="row">
									<div className="col-12 col-lg-6">
										<h1 dangerouslySetInnerHTML={ {__html: pagina.titulo} }></h1>
										<p>{ pagina.descripcion  }</p>
									</div>
									<div className="col-12 col-lg-6">
										<div className="centrar">
											{
												imagen == null ?(<img className="img-fluid" src="aaaa" alt=""/>)
												: 
												(<img className="img-fluid" src={`${process.env.REACT_APP_API_URL}${imagen.url}`} alt=""/>)
											}
										</div>
									</div>
								</div>
							</div>





								{
									pagina.tipo_formulario == 'vehiculo' ? (<Link to={{pathname: '/formulario/vehiculo', state:  [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href }] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
									
								}
																{
									pagina.tipo_formulario == 'civilMedica' ? (<Link to={{pathname: '/formulario/civilMedica', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href }] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
									
								}
																{
									pagina.tipo_formulario == 'tipo' ? (<Link to={{pathname: '/formulario/tipo', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																{
									pagina.tipo_formulario == 'incendio' ? (<Link to={{pathname: '/formulario/incendio', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																{
									pagina.tipo_formulario == 'saludBupa' ? (<Link to={{pathname: '/formulario/saludBupa', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																							{
									pagina.tipo_formulario == 'rentasVitalicias' ? (<Link to={{pathname: '/formulario/rentasVitalicias', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																															{
									pagina.tipo_formulario == 'APV' ? (<Link to={{pathname: '/formulario/apv', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																																							{
									pagina.tipo_formulario == 'vida' ? (<Link to={{pathname: '/formulario/seguroVida', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
								{
									pagina.tipo_formulario == 'catastrofico' ? (<Link to={{pathname: '/formulario/catastroficoBCI', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																{
									pagina.tipo_formulario == 'complementario' ? (<Link to={{pathname: '/formulario/complementarioBCI', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																								{
									pagina.tipo_formulario == 'oncologico' ? (<Link to={{pathname: '/formulario/oncologico', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																
																								{
									pagina.tipo_formulario == 'salud7' ? (<Link to={{pathname: '/formulario/salud7', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																																{
									pagina.tipo_formulario == 'vida5' ? (<Link to={{pathname: '/formulario/vida5', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}																																{
									pagina.tipo_formulario == 'accidentes' ? (<Link to={{pathname: '/formulario/accidentesPersonales', state: [{tipoSeguro: estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
																																								{
									pagina.tipo_formulario == 'eligelibre' ? (<a target="_blank" href="https://www.eligelibre.cl/"><a className="boton"><span>Solicitar</span></a></a>) : (null)
								}
								
								{
									pagina.tipo_formulario == null ? (<Link to={{pathname: '/formulario/tipo', state: [{tipoSeguro: (estado.tipoSeguro == null) ? null : estado.tipoSeguro, nombreSeguro: pagina.titulo, urlIcon: estado.urlIcon, path: window.location.href}] }}><a className="boton"><span>Solicitar</span></a></Link>) : (null)
								}
								

							
						</div>
					</div>
				</div>
			</section>


            <section className="entrada">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12 col-lg-10 offset-lg-1">
								<div className="centrar">
									<p dangerouslySetInnerHTML={ {__html: pagina.fragmento} }>

                               
                                    </p>

                                    </div>
							</div>
						</div>
					</div>
				</div>
			</section>



{
		pagina.titulo_iconos == null ? (
		<section style={{ display:'none' }}className="par">
		<div className="container">
			<div className="paginas">
				<div className="row">
					<div className="col-12">
						<div className="titulo">
							<h2>
								{
									pagina.titulo_iconos
								}
								</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-1 col-lg-12 offset-lg-0">
						<div className="listado">
							<div className="row">




							{
									icon.map(item => (

								   
							 

										
								<div key={item.id} className="col-12 col-lg-4">
									<div className="modulo">
										<div className="row gutter">
											
											
												<div className="col-3">
															{
																item.Icono == null  ? (<img className="img-fluid ico" src="" alt=""/>) 
																: 
																(
																<img className="img-fluid ico" src={`${process.env.REACT_APP_API_URL}${item.Icono.url}`} alt=""/>)
															}
														
														</div>
																								
											<div className="col-9">
												<div className="contenido">
													<p>{item.descripcion}</p>
												</div>
											</div>
										</div>
									</div>
								</div>








									))

								}


							
							






							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>) :(<section  className="par">
		<div className="container">
			<div className="paginas">
				<div className="row">
					<div className="col-12">
						<div className="titulo">
							<h2>
								{
									pagina.titulo_iconos
								}
								</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-1 col-lg-12 offset-lg-0">
						<div className="listado">
							<div className="row">




							{
									icon.map(item => (

								   
							 

										
								<div key={item.id} className="col-12 col-lg-4">
									<div className="modulo">
										<div className="row gutter">
											
											
												<div className="col-3">
												{
																item.Icono == null  ? (<img className="img-fluid ico" src="" alt=""/>) 
																: 
																(
																<img className="img-fluid ico" src={`${process.env.REACT_APP_API_URL}${item.Icono.url}`} alt=""/>)
															}

														</div>
																								
											<div className="col-9">
												<div className="contenido">
													<p dangerouslySetInnerHTML={ {__html: item.descripcion} }></p>
													
												</div>
											</div>
										</div>
									</div>
								</div>








									))

								}


							
							






							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>)

}
            

            <section className="informacion">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12 col-lg-10 offset-lg-1">
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-12 col-lg-4">
										<div className="desktop">
										{
																pagina.imagen_fragmento == null  ? (<img className="img-fluid ico" src="" alt=""/>) 
																: 
																(
																<img className="img-fluid ico" src={`${process.env.REACT_APP_API_URL}${pagina.imagen_fragmento.url}`} alt=""/>)
															}

										</div>
									</div>
									<div className="col-12 col-lg-7 offset-lg-1">
										<h3>{ pagina.titulo_fragmento }</h3>

										<p dangerouslySetInnerHTML={ {__html: pagina.descripcion_fragmento} }>

                               
										</p>


										<div className="mobile">
											<div className="centrar">
												<img className="img-fluid" src="" alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
{
	pagina.titulo_dato == null? (<section style={{display:'none'}} className="requisitos nopdb">
	<div className="container">
		<div className="paginas">
			<div className="row">
				<div className="col-12">
					<div className="titulo">
						<h2>{pagina.titulo_dato}</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="grupo">
						<div className="row">
							<div className="col-6 col-lg-3">
								<div className="modulo">
									<h3>{pagina.dato_uno}</h3>
									<p>{pagina.contenido_dato_uno}</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="modulo">
									<h3>{pagina.dato_dos}</h3>
									<p>{pagina.contenido_dato_dos}</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="modulo">
									<h3>{pagina.dato_tres}</h3>
									<p>{pagina.contenido_dato_tres}</p>
								</div>
							</div>
							<div className="col-6 col-lg-3">
								<div className="modulo ultimo">
									<h3>{pagina.dato_cuatro}</h3>
									<p>{pagina.contenido_dato_cuatro}</p>
								</div>
							</div>
							<div className="col-12">
								<div className="centrar">
									<small>{pagina.dato_consejo}</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>) : (<section className="requisitos nopdb">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12">
								<div className="titulo">
									<h2>{pagina.titulo_dato}</h2>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="grupo">
									<div className="row">
										<div className="col-6 col-lg-3">
											<div className="modulo">
												<h3>{pagina.dato_uno}</h3>
												<p>{pagina.contenido_dato_uno}</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="modulo">
												<h3>{pagina.dato_dos}</h3>
												<p>{pagina.contenido_dato_dos}</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="modulo">
												<h3>{pagina.dato_tres}</h3>
												<p>{pagina.contenido_dato_tres}</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="modulo ultimo">
												<h3>{pagina.dato_cuatro}</h3>
												<p>{pagina.contenido_dato_cuatro}</p>
											</div>
										</div>
										<div className="col-12">
											<div className="centrar">
												<small>{pagina.dato_consejo}</small>
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
            
{
	pagina.titulo_tabla == null ? (<section style={{ display:'none' }} className="plan nopdb">
	<div className="container">
		<div className="paginas">
			<div className="row">
				<div className="col-12 col-lg-6">
					<h2>{pagina.titulo_tabla}</h2>
				</div>
				<div className="col-12 col-lg-4 offset-lg-2">
					<div className="modulo">
						<div className="centrar">
							<h3>Resumen en cobertura</h3>
							<span>Monto (UF)</span>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="table-responsive">
					<p dangerouslySetInnerHTML={ {__html: pagina.tabla} }></p>

						
					</div>
					<p>Exclusiones aplicables a la cobertura y beneficios son las descritas en la POL 1  2017 0240.</p>
				</div>
			</div>
		</div>
	</div>
</section>) : (<section className="plan nopdb">
				<div className="container">
					<div className="paginas">
						<div className="row">
							<div className="col-12 col-lg-6">
								<h2>{pagina.titulo_tabla}</h2>
							</div>
							<div className="col-12 col-lg-4 offset-lg-2">
								<div className="modulo">
									<div className="centrar">
										<h3>Resumen en cobertura</h3>
										<span>Monto (UF)</span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="table-responsive">
								<p dangerouslySetInnerHTML={ {__html: pagina.tabla} }></p>

									
								</div>
								<p>Exclusiones aplicables a la cobertura y beneficios son las descritas en la POL 1  2017 0240.</p>
							</div>
						</div>
					</div>
				</div>
			</section>)
}
            


            </>



    )
}

export default EstructuraSeguros
