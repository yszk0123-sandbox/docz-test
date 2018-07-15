import path from 'path';
import { default as externalLinks } from 'remark-external-links';
import { default as images } from 'remark-images';
import { default as emoji } from 'remark-emoji';

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
      body: {
        fontFamily: "'rotobo', Helvetica, sans-serif",
        fontSize: '16px',
        lineHeight: 1.6
      },
      pre: {
        background: '#13161F',
        color: '#efefef'
      }
    }
  },
  mdPlugins: [externalLinks, images, emoji],
  modifyBundlerConfig
};
