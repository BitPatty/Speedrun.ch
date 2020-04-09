import React from 'react';
import { Markup } from 'interweave';
import { SingletonComponent } from '../services/singletonService';
import cx from 'classnames';

function buildContent(
  c: SingletonComponent,
  prefix: number | string
): React.ReactElement | null {
  if (c.component === 'section') {
    return React.createElement(
      'section',
      {
        key: prefix,
        id: c.settings.id,
        className: cx(c.settings.class, 'ib'),
      },
      c.children?.map((child, index) =>
        buildComponent(child, `${prefix}_${index}`)
      )
    );
  }

  return null;
}

function buildComponent(
  c: SingletonComponent,
  key: number | string
): React.ReactElement | null {
  switch (c.component) {
    case 'heading':
      return buildHeader(c, key);
    case 'text':
      return buildMarkup(c, key);
  }

  return null;
}

function buildHeader(
  c: SingletonComponent,
  key: number | string
): React.ReactElement | null {
  if (c.settings.tag) {
    return React.createElement(
      c.settings.tag,
      { key, id: c.settings.id, className: c.settings.class },
      c.settings.text
    );
  }

  return null;
}

function buildMarkup(
  c: SingletonComponent,
  key: number | string
): React.ReactElement | null {
  return React.createElement(Markup, {
    key,
    content: c.settings.text,
  });
}

export default buildContent;
