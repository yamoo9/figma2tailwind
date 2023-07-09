import { PRIMITIVES_TOKEN_NAME, RADIUSES_TOKEN_NAME } from '../config.mjs';
import findToken from './findToken.mjs';

const parseRadiusTokens = () => {
  const primitives = findToken(PRIMITIVES_TOKEN_NAME);
  const numberTokens = primitives.filter(({ type }) => type === 'number');
  const radiusTokens = {};

  numberTokens
    .filter(({ name }) => name.includes(RADIUSES_TOKEN_NAME))
    .forEach(({ name, value }) => {
      const [, v] = name.split('/');
      radiusTokens[v] = `${value}px`;
    });

  return radiusTokens;
};

export default parseRadiusTokens;
