import type { FC } from 'react';

import { cnImage } from './Image.classname';

import './Image.css';

const Image: FC = () => {
  return <img className={cnImage()}></img>
}

export { Image };
