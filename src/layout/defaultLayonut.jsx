import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { menuLayout } from "./menu.data";
import "./layout.css";

export default function DefaultLayout() {
  const [sidebar, setSidebar] = useState("sidebar close");
  const [navbar, setNavbar] = useState("navbar close");
  const [logout, setLogout] = useState("logout hidden");
  const [menuUser, setMenuUser] = useState(true);

  const changeSidebar = () => {
    const side = sidebar != "sidebar close" ? "sidebar close" : "sidebar open";
    const nav = navbar != "navbar close" ? "navbar close" : "navbar open";

    setSidebar(side);
    setNavbar(nav);
  };

  const showLogout = () => {
    setMenuUser(!menuUser);
    setLogout(menuUser ? "logout hidden" : "logout show");
  };

  return (
    <>
      <div className={sidebar}>
        <Link
          to="/"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <h2 className="font-bold text-2xl">Inventario Aeronutico</h2>
        </Link>
        <ul className="mt-4">
          {menuLayout.map((list, num) => (
            <li key={num} className="mb-1 group">
              <Link
                to={list.redirect}
                className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
              >
                <i className={list.icon}></i>
                <span className="text-sm ml-2">
                  {list.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <main className={navbar}>
        <div className="flex flex-col w-full ">
          <div className="py-2 px-6 bg-[#f8f4f3] h-[4rem] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button
              onClick={changeSidebar}
              className="text-lg text-gray-900 font-semibold sidebar-toggle"
            >
              <i className="pi pi-bars"></i>
            </button>

            <ul className="ml-auto flex items-center">
              <li className="dropdown ml-3">
                <button
                  type="button"
                  onClick={showLogout}
                  className="dropdown-toggle flex items-center"
                >
                  <div className="flex-shrink-0 w-10 h-10 relative">
                    <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                        alt=""
                      />
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                      <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-2 md:block text-left">
                    <h2 className="text-sm font-semibold text-gray-800">
                      John Doe
                    </h2>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          <div className={logout}>Cerrar Sesión</div>

          <div className="p-8 overflow-hidden">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </>
  );
}
