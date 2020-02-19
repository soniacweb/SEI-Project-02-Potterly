import React from 'react'
import { Link } from 'react-router-dom'
// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Welcome = () => {
  return (

    <section className="hero welcome is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="image is-2by1">
            <p className="title has-text-centered title is-2 has-text-white has-text-weight-bold">Potterly</p>
            <p className="subtitle has-text-centered has-text-white">A place for Potterheads</p>
            <Link to="/house">
              <div className="box has-text-centered button is-black center">
                            Enter
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome