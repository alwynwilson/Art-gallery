import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div style={{ width: '100%', background: 'white' }} className='container-fluid mt-5'>
          <div className="row p-5 text-center text-md-start">
            <div className="col-md-4 mb-4">
              <div className="intro">
                <h5 className='text-warning'><i className="fa-solid fa-location-dot me-2"></i>Artwork</h5>
                <p style={{ color: "black" }}>The Place where your Art and space matters. See the magical flavours of the greatest artists from the world.</p>
                <p style={{ color: "black" }}>Code licensed Artwork, docs cc by 3.0.</p>
                <p style={{ color: "black" }}>Currently v5.3.2</p>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <div className="links d-flex flex-column">
                <h5 className='text-warning'>Links</h5>
                <Link className="mt-2 mb-2" to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <div className="guides d-flex flex-column">
                <h5 className='text-warning'>Guide</h5>
                <a className="mt-2 mb-2" href="/" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>Top Piece</a>
                <a className="mb-2" href="/" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>Painting</a>
                <a className="mb-2" href="/" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>Exhibition</a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="contact">
                <h5 className='text-warning'>Contact</h5>
                <div className="d-flex">
                  <input type="text" className='form-control' placeholder='Enter your email here' />
                  <button className='btn btn-warning ms-3'><i className="fa-solid fa-arrow-right text-dark bg-warning"></i></button>
                </div>
                <div className="icons d-flex justify-content-between mt-3">
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-brands fa-twitter text-warning'></i>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-brands fa-instagram text-warning'></i>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-brands fa-facebook text-warning'></i>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-brands fa-linkedin text-warning'></i>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-brands fa-github text-warning'></i>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', color: 'black' }} target='_blank' rel='noopener noreferrer'>
                    <i className='fa-solid fa-phone text-warning'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className='text-center mt-5 text-dark mb-3'>Copyright © Artwork</p>
        </div>
      </div>
  )
}

export default Footer
