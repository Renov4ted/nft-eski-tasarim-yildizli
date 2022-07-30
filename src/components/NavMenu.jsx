import React from 'react'

function NavMenu() {
  return (
    <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        marginTop: 10
      }}  class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
			<li><a class="menu__item" href="">Viev all collection </a></li>
			<li><a class="menu__item" href="#">About</a></li>
			<li><a class="menu__item" href="#">RoadMap</a></li>
			<li><a class="menu__item" href="#">Team</a></li>
            
			
    </ul>
  </div>
  )
}

export default NavMenu