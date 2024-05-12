import { createContext } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import "./styles.sass";

export const HomeContext = createContext(null);

export const HomeProvider = () => {
  return (
    <HomeContext.Provider value={null}>
      <main className="Home_container">
        <div className="Chat_main_container">
          <SidebarComponent />
          <section className="Chat_container">
            <Outlet />
          </section>
        </div>
      </main>
    </HomeContext.Provider>
  );
};
