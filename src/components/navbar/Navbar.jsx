import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function ListItem(path, title) {
  this.path = path;
  this.title = title;
}

const listItems = [
  new ListItem("./", "home"),
  new ListItem("./technologies", "technologies"),
  new ListItem("./services", "services"),
  new ListItem("./clients", "our clients"),
  new ListItem("./how-we-work", "how we work"),
  new ListItem("./contact", "contact"),
];

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activePgae, setActiveMenu] = useState("home");

  document.addEventListener("mousedown", (e) => {
    const clas = e.target.className;
    if (!clas) {
      setShowMobileMenu(false);
      return;
    }
    const isIn = clas.endsWith("mobile");
    if (!isIn) {
      setShowMobileMenu(false);
    }
  });

  const updateActivePage = ({ target }) => {
    const title = target.getAttribute("title");
    setActiveMenu(title);
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container container">
          <div className="left-header-content">
            <img
              src={require("../../assets/logos/bitcs.jpg")}
              alt=""
              className="header-logo"
            />
          </div>

          <nav className="header-nav">
            <div
              className="hambeger_box"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                width="16px"
                height="16px"
                className="hamberger_icon"
              >
                <path fill="#c2e8ff" d="M1.5 18.5H38.5V21.5H1.5z" />
                <path
                  fill="#7496c4"
                  d="M38,19v2H2v-2H38 M39,18H1v4h38V18L39,18z"
                />
                <path fill="#c2e8ff" d="M1.5 8.5H38.5V11.5H1.5z" />
                <path fill="#7496c4" d="M38,9v2H2V9H38 M39,8H1v4h38V8L39,8z" />
                <g>
                  <path fill="#c2e8ff" d="M1.5 28.5H38.5V31.5H1.5z" />
                  <path
                    fill="#7496c4"
                    d="M38,29v2H2v-2H38 M39,28H1v4h38V28L39,28z"
                  />
                </g>
              </svg>
            </div>
            <ul className="nav-list">
              {listItems.map((ele) => (
                <Link
                  className={
                    activePgae === ele.title
                      ? "nav-list-link active_page_link"
                      : "nav-list-link"
                  }
                  to={ele.path}
                  key={ele.title}
                  title={ele.title}
                  onClick={updateActivePage}
                >
                  <li title={ele.title}>{ele.title}</li>
                </Link>
              ))}
              <li className="contact-info-icon">
                <i className="fa-solid fa-phone"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className="mobile_menu_nav mobile"
        style={{ display: showMobileMenu ? "block" : "none" }}
        id="mobile_menu"
      >
        <ul className="mobile_menu_list mobile">
          {listItems.map((ele) => (
            <Link
              className={
                activePgae === ele.title
                  ? "mobile_list_link mobile active_mobile_page_link"
                  : "mobile_list_link mobile"
              }
              to={ele.path}
              key={ele.title}
              title={ele.title}
              onClick={(e) => {
                updateActivePage(e);
              }}
            >
              <li title={ele.title} className="mobile">
                {ele.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
