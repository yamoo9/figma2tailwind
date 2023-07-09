import {
  PRIMITIVES_TOKEN_NAME,
  SEMANTICS_TOKEN_NAME,
  COLORS_TOKEN_NAME,
} from '../config.mjs';
import findToken from './findToken.mjs';

const parseSemanticsColorTokens = (primitivesColorTokens) => {
  const semantics = findToken(SEMANTICS_TOKEN_NAME);
  const colors = semantics.filter(({ type }) => type === 'color');
  const aliasColors = colors.filter(({ isAlias }) => isAlias);
  const colorTokenReg = new RegExp(`^${COLORS_TOKEN_NAME}/`);

  const colorTokens = {};

  aliasColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (colorValue.collection === PRIMITIVES_TOKEN_NAME) {
      const [k, v] = colorValue.name.replace(colorTokenReg, '').split('/');
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = primitivesColorTokens[k][v];
    }
  });

  aliasColors.forEach((color) => {
    let [colorKey, variant] = color.name.replace(colorTokenReg, '').split('/');
    let colorValue = color.value;

    if (colorValue.collection === SEMANTICS_TOKEN_NAME) {
      const [k, v] = colorValue.name.replace(colorTokenReg, '').split('/');
      colorTokens[colorKey] = colorTokens[colorKey] ?? {};
      colorTokens[colorKey][variant] = colorTokens[k][v];
    }
  });

  return colorTokens;
};

export default parseSemanticsColorTokens;
