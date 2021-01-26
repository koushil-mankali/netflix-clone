import { Link } from "react-router-dom";
import "./Footer.css";

let Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='footer_div'>
            <div className="footer_h"><Link to="">Questions? Contact us.</Link></div>
            <div className="footer_cols">
          <div className="divOne fcols">
            <ul>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Privacy</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Investor Relations</Link>
              </li>
            </ul>
          </div>
          <div className="divTwo fcols">
            <ul>
              <li>
                <Link to="">Account</Link>
              </li>
              <li>
                <Link to="">Media Centre</Link>
              </li>
              <li>
                <Link to="">Ways to Watch</Link>
              </li>
              <li>
                <Link to="">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
