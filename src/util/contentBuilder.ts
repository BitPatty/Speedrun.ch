// @flow

import React from "react";
import { Markup } from "interweave";
import { SingletonComponent } from "../services/singletonService";
import cx from "classnames";

function buildContent(c: SingletonComponent): React.ReactElement | null {
  if (c.component === "section") {
    return React.createElement(
      "section",
      { id: c.settings.id, className: cx(c.settings.class, "ib") },
      c.children?.map(child => buildComponent(child))
    );
  }

  return null;
}

function buildComponent(c: SingletonComponent): React.ReactElement | null {
  switch (c.component) {
    case "heading":
      return buildHeader(c);
    case "text":
      return buildMarkup(c);
  }

  return null;
}

function buildHeader(c: SingletonComponent): React.ReactElement | null {
  if (c.settings.tag) {
    return React.createElement(
      c.settings.tag,
      { id: c.settings.id, className: c.settings.class },
      c.settings.text
    );
  }

  return null;
}

function buildMarkup(c: SingletonComponent): React.ReactElement | null {
  return React.createElement(Markup, { content: c.settings.text });
}

export default buildContent;
