import { argv } from 'node:process';
import { INPUT_PATH, OUTPUT_PATH } from '../config.mjs';

const ARGV = argv.slice(2);
const options = Object.fromEntries(
  ARGV.map((keyValue) => {
    const [key, value] = keyValue.split('=');
    return [key.replace(/-/g, ''), value];
  })
);

if (!('input' in options)) {
  options.input = INPUT_PATH;
}

if (!('output' in options)) {
  options.output = OUTPUT_PATH;
}

export default options;
