import React from "react";
import { Link } from "react-router-dom";
import css from './navbar.module.css';


const PageLink = ({ name, path }) =>
  <li className={css.linkItem}>
    <Link className={css.link} to={path}>{name}</Link>
  </li>

export default ({ pages }) => {
  return (
    <div className={css.wrapper}>
      <div className="contentWrapper">
        <header className={css.headerContent}>
          <div className={css.brandWrapper}>
            <h2 className={css.title}>Meta Attack Language</h2>
          </div>
          <div className={css.menuWrapper}>
            <ul className={css.linkList}>
            {pages.map(page =>
              <PageLink name={page.name} path={page.path} />
            )}
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
