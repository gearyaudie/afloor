import Link from "next/link";
import navbarStyles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
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
      <div>
        <img
          src="https://i.ibb.co/yV5R3xQ/whatsapp-icon.png"
          alt=""
          className={navbarStyles.whatsappBtn}
          onClick={() =>
            openLink(
              "https://wa.me/628561153725?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20aksesoris%20vinyl%20%2F%20lem%20perekat%20dari%20afloor."
            )
          }
        />
      </div>
    </>
  );
};

export default Navbar;
