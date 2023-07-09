import parseVariables from './parseVariables.mjs';

const findToken = (tokenName) => {
  return parseVariables()?.collections?.find(
    (collection) => collection.name === tokenName
  )?.modes[0]?.variables;
};

export default findToken;
