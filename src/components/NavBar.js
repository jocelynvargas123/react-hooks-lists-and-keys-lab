import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let navLinks = links.map((links) =>{
    return (<a key={links} href = {"#"+links}>{links}</a>)
  })

  return (
    <nav>
    {navLinks}
    </nav>
  )
}

export default NavBar;
