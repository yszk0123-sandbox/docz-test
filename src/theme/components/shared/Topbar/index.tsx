import { Container } from '@components/ui';
import { Docs, Link } from 'docz';
import * as React from 'react';
import styled, { css } from 'react-emotion';

const Wrapper = styled('div')`
  height: 60px;
  width: 100%;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);

  ${Container.toString()} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`;

const Menu = styled('div')`
  display: flex;
`;

const linkStyle = (p: any) => css`
  color: ${p.theme.colors.main};
  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${p.theme.colors.main};
    opacity: 1;
  }
`;

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`;

const IconLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;

  svg {
    stroke: ${p => p.theme.colors.main};
  }
`;

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/');

export const Topbar = () => (
  <Wrapper>
    <Container>
      <Docs>
        {({ docs: allDocs }) => {
          const docs = allDocs.filter(doc => !doc.parent);

          return (
            <Menu>
              {docs.map(doc => (
                <MenuLink
                  key={doc.id}
                  to={doc.route}
                  isActive={isActive(doc.route)}
                >
                  {doc.name}
                </MenuLink>
              ))}
            </Menu>
          );
        }}
      </Docs>
    </Container>
  </Wrapper>
);
