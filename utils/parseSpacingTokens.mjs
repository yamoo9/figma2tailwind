import { PRIMITIVES_TOKEN_NAME, SPACINGS_TOKEN_NAME } from '../config.mjs';
import findToken from './findToken.mjs';

const parseSpacingTokens = () => {
  const primitives = findToken(PRIMITIVES_TOKEN_NAME);
  const numberTokens = primitives.filter(({ type }) => type === 'number');
  const spacingTokens = {};

  numberTokens
    .filter(({ name }) => name.includes(SPACINGS_TOKEN_NAME))
    .forEach(({ name, value }) => {
      const [, v] = name.split('/');
      spacingTokens[v] = `${value}px`;
    });

  return spacingTokens;
};

export default parseSpacingTokens;
