import path from 'path';

const PUBLIC = path.resolve(__dirname, 'public');
const DOCS = path.resolve(__dirname, 'docs');
const SRC = path.resolve(__dirname, 'src');

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@fonts': `${PUBLIC}/fonts`,
    '@images': `${PUBLIC}/images`,
    '@components': `${SRC}/components`,
    '@utils': `${SRC}/utils`,
    '@docs': DOCS
  });

  return config;
};

export default {
  files: 'docs/**/*.mdx',
  theme: 'src/theme',
  themeConfig: {
    styles: {
      pre: {
        background: '#13161F',
        color: '#efefef'
      }
    }
  },
  modifyBundlerConfig
};
