import React from 'react'
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollRestoration from 'react-scroll-restoration'

const Footer = () => {

	const [footer, setFooter] = useState([])
	const [pageOne, setPageOne] = useState([])
	const [pageTwo, setPageTwo] = useState([])
	const [pageThree, setPageThree] = useState([])
	useEffect(() => {
		obtenerDatos()
		obtenerTipoPagina()
		obtenerTipoPagina2()
		obtenerTipoPagina3()
	}, [])
	
	
	
		const obtenerDatos = async () => {
			const data = await fetch(`${process.env.REACT_APP_API_URL}/footers`)
			const footerJson = await data.json()
			setFooter(footerJson[0])

		}

		const obtenerTipoPagina = async () => {
			const data = await fetch(`${process.env.REACT_APP_API_URL}/pages?Tipo_Bloque=Bloque1`)
			const paginasJson = await data.json()
			setPageOne(paginasJson)
		}
		const obtenerTipoPagina2 = async () => {
			const data = await fetch(`${process.env.REACT_APP_API_URL}/pages?Tipo_Bloque=Bloque2`)
			const paginasJson2 = await data.json()
			setPageTwo(paginasJson2)
		}
		const obtenerTipoPagina3 = async () => {
			const data = await fetch(`${process.env.REACT_APP_API_URL}/pages?Tipo_Bloque=Bloque3`)
			const paginasJson3 = await data.json()
			setPageThree(paginasJson3)

		}



    return (
        <React.Fragment>
            <footer>
			<div class="container">
				<div class="paginas">
					<div class="row">
						<div class="col-12 col-lg-3">
							<a href="index.html" class="logo"><img class="img-fluid" src="http://dev.love.cl/recover09112020/img/logo-footer.png" alt="recover"/></a>
						</div>
						<div class="col-12 col-lg-9">
							<div class="row">
								<div class="col-12 col-lg-3">
									<h3><a >{footer.Bloque1}</a></h3>
									<ul class="menu-footer">
								{
									pageOne.map(item => (
										
									
  										<NavLink to={`/paginas/${item.slug}`} activeClassName="selectioneeee">
										<ScrollRestoration />

										<li><a>{item.titulo}</a></li>
										</NavLink>

								
									))
								}
									</ul>
								</div>
								<div class="col-12 col-lg-4">
									<h3><a >{footer.Bloque2}</a></h3>
									<div class="desktop">
										<ul class="menu-footer">
								{
									pageTwo.map(item => (									
									<NavLink to={`/paginas/${item.slug}`} activeClassName="selectioneeee">
									<ScrollRestoration />

									<li><a>{item.titulo}</a></li>
									</NavLink>
									))
								}
										</ul>
									</div>
								</div>
								<div class="col-12 col-lg-5">
									<h3><a >{footer.Bloque3}</a></h3>
									<div class="desktop">
										<ul class="menu-footer">
								{
									pageThree.map(item => (									
									<NavLink to={`/paginas/${item.slug}`} activeClassName="selectioneeee">
									<ScrollRestoration />

									<li><a>{item.titulo}</a></li>
									</NavLink>
									))
								}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
							<div class="bajada">
								<span>Casa Matriz: Las Torcazas 50 - Las Condes, Santiago. Telefono: <a href="tel:56222994100" target="_blank">+56 222994100</a> Servicio Clientes: <a href="tel:56950140491" target="_blank">+56 950140491</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </React.Fragment>
    )
}

export default Footer
