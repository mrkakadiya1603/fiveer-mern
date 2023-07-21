import React, { useEffect, useState } from "react";
import "./Navbar.scss";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
          if (window.scrollY > 0) {
            setActive(true);
          } else {
            setActive(false);
          }
        })
  })

 const currentUser = {
  id:1,
  username:"John Doe",
  isSeller:true,
 }

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
          <div className="user" onClick={()=> setOpen(!open)}>
            <img src="" alt="img" />
            <span>{currentUser?.username}</span>
           {open && <div className="options">
              {
                currentUser?.isSeller && (<>
                <span>Gigs</span>
                <span>Add New Gig</span>
                </>)
              }
              <span>Orders</span>
              <span>Messages</span>
              <span>Logout</span>
            </div>}
          </div>)}
        </div>
      </div>
      {active && 
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
