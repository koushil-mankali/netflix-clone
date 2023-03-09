import { useState, useEffect } from "react";
import "./Header.css";

let Header = () => {
  let [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setNavScroll(true);
        } else {
          setNavScroll(false);
        }
      });
    };
  }, []);
  return (
    <>
      <div className={`nav ${navScroll && "navScroll"}`}>
        <div className="logo">Netflix Clone</div>
        <div className="hbtns">
          <button type="button" className="join_btn">
            JOIN NOW
          </button>
          <button type="button" className="sign_btn">
            SIGN IN
          </button>
        </div>
        {/* <img className='profile' src={profile} alt='profile' /> */}
      </div>
    </>
  );
};

export default Header;
