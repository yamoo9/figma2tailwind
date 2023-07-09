import findToken from './findToken.mjs';
import { PRIMITIVES_TOKEN_NAME, COLORS_TOKEN_NAME } from '../config.mjs';

const parsePrimitivesColorTokens = () => {
  const primitives = findToken(PRIMITIVES_TOKEN_NAME);
  const colors = primitives.filter(({ type }) => type === 'color');
  const colorTokenReg = new RegExp(`^${COLORS_TOKEN_NAME}/`);
  const colorTokens = {};

  const pureColors = colors.filter(({ isAlias }) => !isAlias);

  pureColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (variant) {
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = colorValue;
    } else {
      colorTokens[colorKey] = colorValue;
    }
  });

  return colorTokens;
};

export default parsePrimitivesColorTokens;
