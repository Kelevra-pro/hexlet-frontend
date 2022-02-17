class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}

export const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ParseError('Invalid JSON string');
  }
};

const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string
