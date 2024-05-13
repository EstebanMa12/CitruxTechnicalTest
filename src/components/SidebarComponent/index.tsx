/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { getArticles } from "../../redux/articles/articlesThunks";
import "./styles.sass";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
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

  const handleArticleClick = async (articleId: any) => {
    setSelectedArticleId(articleId);

  };



  return (
    <Sidebar className="SidebarComponent" collapsed={collapsed}>
      <Menu>
        <MenuItem
        icon={<MenuOpenOutlinedIcon />}
        onClick={toggleSidebar}>
          Historial
        </MenuItem>

        <section className="historial_container">
          {articles &&
            articles.map((article: any) => (
              <Link 
              className={`article_link${selectedArticleId === article._id? '_selected' : ''}`} 
              to={`/article/${article._id}`} key={article._id}
              onClick={() => handleArticleClick(article._id)}
              >
                  <MenuItem
                    icon={<ArrowRightOutlinedIcon />} 
                  >
                    {article.url.substring(0, 25)}
                  </MenuItem>
              </Link>
            ))}
        </section>
        <div className="buttons">
          <Link to={"/"}>
            <MenuItem
            icon={<AddCircleOutlineOutlinedIcon />}
            >
              <button className="btn">
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="start!"
                  data-title="new summary"
                ></p>
              </button>
            </MenuItem>
          </Link>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
