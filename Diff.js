// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const genDiff = (config1, config2) => {
  const keys = _.sortBy(_.union(_.keys(config1), _.keys(config2)));
  const lines = keys.map((key) => {
    if (!_.has(config2, key)) {
      return `  - ${key}: ${config1[key]}`;
    }
    if (!_.has(config1, key)) {
      return `  + ${key}: ${config2[key]}`;
    }
    if (config1[key] !== config2[key]) {
      return `  - ${key}: ${config1[key]}\n  + ${key}: ${config2[key]}`;
    }
    return `    ${key}: ${config1[key]}`;
  });
  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
