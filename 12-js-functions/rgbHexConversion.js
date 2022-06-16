import chunk from 'lodash/chunk.js';

export const hexToRgb = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((color) => color.join(''))
    .map((color) => parseInt(color, 16));

  return { r, g, b };
};

export const rgbToHex = (r, g, b) => {
  const hex = [r, g, b]
    .map((color) => color.toString(16).padStart(2, '0'))
    .join('');

  return `#${hex}`;
};

hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }
rgbToHex(36, 171, 0); // '#24ab00'

