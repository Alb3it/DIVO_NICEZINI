const { alias } = require('react-app-rewire-alias');

module.exports = function override(config){
  alias({
    '@': 'src',
    '@api': 'src/utils/api',
    '@hooks': 'src/utils/hooks',
    '@constants': 'src/utils/constants',
    '@functions': 'src/utils/functions',
    '@cmty_constants': 'src/utils/community/constants',
    '@cmty_functions': 'src/utils/community/functions',
  })(config);

  return config;
};