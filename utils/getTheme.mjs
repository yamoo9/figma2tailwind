import parseColorTokens from './parseColorTokens.mjs';
import parseSpacingTokens from './parseSpacingTokens.mjs';
import parseRadiusTokens from './parseRadiusTokens.mjs';

/* 콜렉션 해석 ------------------------------------------------------------------- */

const colors = parseColorTokens();
const spacings = parseSpacingTokens();
const radiuses = parseRadiusTokens();

const getTheme = () => ({
  colors,
  borderRadius: radiuses,
  spacing: spacings,
});

export default getTheme;
