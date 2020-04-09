import React from 'react';
import { SingletonComponent } from '../../services/singletonService';
import buildContent from '../../util/contentBuilder';

type Props = {
  content: SingletonComponent;
  identifier: number | string;
};

function Dynamic({ content, identifier }: Props) {
  return <>{buildContent(content, identifier)}</>;
}

export default Dynamic;
