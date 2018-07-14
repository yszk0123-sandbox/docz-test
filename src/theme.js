import React from 'react';
import Theme from 'docz-theme-default';
import { theme } from './styles/prism/dark';
import { ThemeConfig } from 'docz';
import './loadAdditionalSyntaxHighlight';

const Wrapper = ({ children }) => (
  <ThemeConfig>
    {config => {
      config.prismTheme = theme;
      return <React.Fragment>{children}</React.Fragment>;
    }}
  </ThemeConfig>
);

const WrappedTheme = props => <Theme {...props} wrapper={Wrapper} />;

export default WrappedTheme;
