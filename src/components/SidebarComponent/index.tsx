/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getArticles } from "../../redux/articles/articlesThunks";
import "./styles.sass";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const { articles } = useSelector((state: any) => state.articles);

  useEffect(() => {
    const fetchArticles = async () => {
      await dispatch(getArticles());
    };

    fetchArticles();
  }, [dispatch]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar className="SidebarComponent" collapsed={collapsed}>
      <Menu>
        <MenuItem onClick={toggleSidebar}>Home</MenuItem>

        <h1>Historial</h1>
        <section className="historial_container">
          {articles &&
            articles.map((article: any) => (
              <MenuItem key={article._id}>
                {article.url.substring(0, 25)}
              </MenuItem>
            ))}
        </section>
        <div className="buttons">
          <button className="btn">
            <span></span>
            <p
              data-start="good luck!"
              data-text="start!"
              data-title="new summary"
            ></p>
          </button>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
