import Link from "next/link";
import navbarStyles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <div className={`${navbarStyles.container2} ${navbarStyles.flex}`}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span className={navbarStyles.special}>1. </span>Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>
                  <span className={navbarStyles.special}>2. </span>About
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
