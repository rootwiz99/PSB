import React, { useState } from "react";
import "../css/Header.css";
import { Squash as Hamburger } from "hamburger-react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    setOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -75; // Adjust this value to control the offset above the section
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     const yOffset = -80; // Adjust the scroll offset if needed
  //     const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  //   closeMenu(); // Close the mobile menu after clicking a navigation link
  // };

  return (
    <div className="header">
      <nav className="navbar">
        <h1
          style={{
            color: "antiquewhite",
          }}
          className="logo"
        >
          PSB INDUSTRIES
        </h1>

        {isOpen ? (
          <ul className={`nav-links-phone ${isOpen ? "open" : ""}`}>
            <li
              className="Home li"
              onClick={() => handleScrollToSection("Home")}
            >
              <i
                className="fa-solid fa-house fa-sm"
                style={{ color: "antiquewhite" }}
              />
              &nbsp;&nbsp;Home
            </li>

            <li
              className="Projects li"
              onClick={() => handleScrollToSection("Projects")}
            >
              <i
                className="fa-solid fa-vihara fa-sm"
                style={{ color: "antiquewhite" }}
              />
              &nbsp;&nbsp;Projects
            </li>

            <li
              className="Products li"
              onClick={() => handleScrollToSection("Products")}
            >
              <i
                className="fa-solid fa-square fa-sm"
                style={{ color: "antiquewhite" }}
              />
              &nbsp;&nbsp;Products
            </li>

            <li
              className="About li"
              onClick={() => handleScrollToSection("About")}
            >
              <i
                className="fa-solid fa-circle-info fa-sm"
                style={{ color: "antiquewhite" }}
              ></i>
              &nbsp;&nbsp;About
            </li>

            <li
              className="Contact li"
              onClick={() => handleScrollToSection("Contact")}
            >
              <i
                className="fa-solid fa-address-card fa-sm"
                style={{ color: "antiquewhite" }}
              />
              &nbsp;&nbsp;Contact
            </li>
          </ul>
        ) : null}
        <ul className="nav-links-pc">
          <li className="Home li" onClick={() => handleScrollToSection("Home")}>
            <i
              className="fa-solid fa-house fa-sm"
              style={{ color: "antiquewhite" }}
            />
            &nbsp;&nbsp;Home
          </li>

          <li
            className="Projects li"
            onClick={() => handleScrollToSection("Projects")}
          >
            <i
              className="fa-solid fa-vihara fa-sm"
              style={{ color: "antiquewhite" }}
            />
            &nbsp;&nbsp;Projects
          </li>

          <li
            className="Products li"
            onClick={() => handleScrollToSection("Products")}
          >
            <i
              className="fa-solid fa-square fa-sm"
              style={{ color: "antiquewhite" }}
            />
            &nbsp;&nbsp;Products
          </li>

          <li
            className="About li"
            onClick={() => handleScrollToSection("About")}
          >
            <i
              className="fa-solid fa-circle-info fa-sm"
              style={{ color: "antiquewhite" }}
            ></i>
            &nbsp;&nbsp;About
          </li>

          <li
            className="Contact li"
            onClick={() => {
              handleScrollToSection("Contact");
            }}
          >
            <i
              className="fa-solid fa-address-card fa-sm"
              style={{ color: "antiquewhite" }}
            />
            &nbsp;&nbsp;Contact
          </li>
        </ul>
        <div className="button">
          <Hamburger
            color="#2b323b"
            size={30}
            distance="lg"
            rounded
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
    </div>
  );
};

//{
/* <ul className={isOpen ? "nav-links-phone" : "nav-links-pc"}>
          <Link to="/" className="Home">
            <li>Home</li>
          </Link>
          <Link to="/About" className="About">
            <li>About</li>
          </Link>
          <Link to="/Projects" className="Projects">
            <li>Projects</li>
          </Link>
          <Link to="/Products" className="Products">
            <li>Products</li>
          </Link>
          <Link to="/Contact" className="Contact">
            <li>Contact</li>
          </Link>
        </ul> */
//}

//{
/* //   <AppBar sx={{ background: "#8D99AE" }}>
    //     <Toolbar>
    //       <nav className="navbar">
    //         <Typography className="logo">PSB</Typography>
    //         <ul className="nav-links">
    //           <Link to="/" className="Home">
    //             <li>Home</li>
    //           </Link>
    //           <Link to="/About" className="About">
    //             <li>About</li>
    //           </Link>
    //           <Link to="/Projects" className="Projects">
    //             <li>Projects</li>
    //           </Link>
    //           <Link to="/Products" className="Products">
    //             <li>Products</li>
    //           </Link>
    //           <Link to="/Contact" className="Contact">
    //             <li>Contact</li>
    //           </Link>
    //         </ul>
    //         <Box display={"flex"} marginLeft="auto">
    //           <Hamburger distance="lg" rounded />
    //         </Box>
    //       </nav>
    //     </Toolbar>
    //   </AppBar> */
//}
