import React, { useState } from 'react'
import { BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
  } from 'react-router-dom'
import { Dropdown, DropdownButton  } from 'react-bootstrap'
import { SideBar, SideBarItem } from 'react-burger-sidenav'
import 'react-burger-sidenav/dist/index.css'


const Header = () => {
	


	const [open, setOpen] = useState(false)
	const [personas, setPersonas] = useState([])
	const [empresas, setEmpresas] = useState([])


	const handleClick = () => {
		setOpen(!open)
	  }

	React.useEffect(() => {
		obtenerDatosPersonas()
		obtenerDatosEmpresas()
	}, [])
	
	
	const obtenerDatosPersonas = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/seguros?tipo_seguro=personas`)
		const personasJson = await data.json()
		setPersonas(personasJson)
		console.log('personas', personasJson)
	}

	const obtenerDatosEmpresas = async () => {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/seguros?tipo_seguro=empresas`)
		const empresasJson = await data.json()
		setEmpresas(empresasJson)
	
	}


    return (
        <div>
<header id="header">
			<div className="container">
				<div className="paginas">
					<div className="row">
						<div className="col-8 col-lg-4">
							<NavLink to="/" activeClassName="seleccionado">
							<a  className="logo"><img className="img-fluid" src="http://dev.love.cl/recover09112020/img/logo.png" alt="recover"/></a>
							</NavLink>
							
						</div>
						<div className="col-4 col-lg-8">
						<SideBar className="menu-trigger">
      					<SideBarItem><DropdownButton  id="dropdown-basic-button" title="Seguros Personas">


{personas.sort((a, b) => a.order - b.order).map(({ order, titulo }) => (
  <>
    <div key={order}>
    </div>
  </>
))}

{
	personas.map(item => (
		<Dropdown.Item>
		<Link to={{	   pathname: `/seguros/${item.slug}`,
					   state: {
								   tipoSeguro: 'Personas', 
								   nombre: item.titulo_ICONO, 
								   origen:'home'
							  }
				}}>
			<ul>
				<li dangerouslySetInnerHTML={ {__html: item.titulo} }>
				</li>
			</ul>
							
		</Link>
		</Dropdown.Item>
	))

			}


</DropdownButton>
</SideBarItem>
<SideBarItem>
<DropdownButton  id="dropdown-basic-button" title="Seguros Empresas">

{
	empresas.map(item => (
		<Dropdown.Item>
												<Link 
												to={{
													pathname: `/seguros/${item.slug}`,
													state: {tipoSeguro: 'Empresas', nombre: item.titulo_ICONO, origen:'home'}

												}}
												
												
												>
										<ul>
											<li dangerouslySetInnerHTML={ {__html: item.titulo} }>

											</li>
										</ul>
							
									</Link>
		</Dropdown.Item>
	))

}


</DropdownButton>
</SideBarItem>
<SideBarItem>
<Link to="/contacto">
								<li className="ultimo"><a >Contacto</a></li>
								</Link>
</SideBarItem>
    					</SideBar>

















							<ul className="menu">
							<DropdownButton  id="dropdown-basic-button" title="Seguros Personas">

{
	personas.map(item => (
		<Dropdown.Item>
												<Link 
												to={{
													pathname: `/seguros/${item.slug}`,
													state: {tipoSeguro: 'Personas', nombre: item.titulo_ICONO, origen:'home'}

												}}
												>
										<ul>
											<li dangerouslySetInnerHTML={ {__html: item.titulo} }>

											</li>
										</ul>
							
									</Link>
		</Dropdown.Item>
	))

}


</DropdownButton>
<DropdownButton  id="dropdown-basic-button" title="Seguros Empresas">

{
	empresas.map(item => (
		<Dropdown.Item>
												<Link to={{
													pathname: `/seguros/${item.slug}`,
													state: {tipoSeguro: 'Empresas', nombre: item.titulo_ICONO, origen:'home'}

												}}>
										<ul>
											<li dangerouslySetInnerHTML={ {__html: item.titulo} }>

											</li>
										</ul>
							
									</Link>
		</Dropdown.Item>
	))

}


</DropdownButton>

							


							<Link to="/contacto">
								<li className="ultimo"><a >Contacto</a></li>
								</Link>
						

								

							</ul>
						</div>
					</div>
				</div>
			</div>
          
		</header>
        </div>
    )
}

export default Header
