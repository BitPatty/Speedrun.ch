//@flow

import React from "react";
import cx from "classnames";
import { HashLink } from "react-router-hash-link";

type Props = {
  title: string;
  subTitle: string;
  link?: string;
  linkText?: string;
  compact?: boolean;
};

function Header({ title, subTitle, link, linkText, compact }: Props) {
  return (
    <header className={cx(compact ? "header--content" : "header--home")}>
      <div className="row">
        {title && <h1>{title}</h1>}
        {subTitle && <h2>{subTitle}</h2>}
        {link && (
          <HashLink smooth to={`${link}`}>
            <div className="button button-ghost">{linkText}</div>
          </HashLink>
        )}
      </div>
    </header>
  );
}

export default Header;
