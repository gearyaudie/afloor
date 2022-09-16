import Link from "next/link";
import React from "react";
import navbarStyles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  const content = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Artikel",
      link: "/artikel",
    },
    // {
    //   name: "Produk",
    //   link: "/produk",
    // },
  ];

  const [sidebarOpened, setSidebarOpened] = React.useState(false);

  return (
    <>
      <nav className={navbarStyles.navbar}>
        <div className={`${navbarStyles.container2} ${navbarStyles.flex}`}>
          <div>
            <img
              src="https://i.ibb.co/CJxjrK7/afloor-icon.png"
              alt=""
              className={navbarStyles.icon}
            />
          </div>
          <nav className={navbarStyles.menuDesktop}>
            <ul>
              {content &&
                content.map((x, i) => {
                  return (
                    <li key={i}>
                      <Link href={x.link}>
                        <a>
                          <span className={navbarStyles.special}>
                            {i + 1}.{" "}
                          </span>
                          {x.name}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <nav className={navbarStyles.menuMobile}>
            <button onClick={() => setSidebarOpened(true)}>
              <img src="https://i.ibb.co/C62YK1m/icons8-menu-30.png" alt="" />
            </button>
            <div
              className={
                sidebarOpened
                  ? `${navbarStyles.navSidebar} ${navbarStyles.active}`
                  : navbarStyles.navSidebar
              }
            >
              <button
                className={navbarStyles.closeIcon}
                onClick={() => setSidebarOpened(false)}
              >
                <img
                  src="https://i.ibb.co/Ykxn2Mk/CITYPNG-COM-PNG-Close-X-Logo-White-Icon-736x736.png"
                  alt=""
                />
              </button>
              <div className={navbarStyles.navSidebarContent}>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setSidebarOpened(false)}>
                  <Link href="/artikel">Artikel</Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </nav>
      <div>
        <img
          src="https://i.ibb.co/yV5R3xQ/whatsapp-icon.png"
          alt="afloor whatsapp logo"
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
