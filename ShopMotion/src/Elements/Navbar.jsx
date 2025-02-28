import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


function Navbar() {
	useGSAP(()=>{
		gsap.from('.navbar-brand',{
			color:"red"
		})
	})
  return (
    <div className='row'>
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Welcome To ShopMotion</h2>
				</div>
			</div>
		</div>
		
		<div className="container">
			<div className="row justify-content-between">
				<div className="col">
					<a className="navbar-brand" href="index.html">Papermag <span>Magazine</span></a>
				</div>
				<div className="col d-flex justify-content-end">
					<div className="social-media">
		    		<p className="mb-0 d-flex">
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
		    			<a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
		    		</p>
	        </div>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
				<form action="#" className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input type="text" className="form-control pl-3" placeholder="Search"/>
            <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
          </div>
        </form>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav mr-auto">
	        	<li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
	        	<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<a className="dropdown-item" href="#">Page 1</a>
                <a className="dropdown-item" href="#">Page 2</a>
                <a className="dropdown-item" href="#">Page 3</a>
                <a className="dropdown-item" href="#">Page 4</a>
              </div>
            </li>
	        	<li className="nav-item"><a href="#" className="nav-link">Catalog</a></li>
	        	<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    

	</section>
    </div>
  )
}

export default Navbar