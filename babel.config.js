/*
export default {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
*/
export default function (api) {
  if (api.env('test')) {
    return {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    };
  }
  return {};
};
