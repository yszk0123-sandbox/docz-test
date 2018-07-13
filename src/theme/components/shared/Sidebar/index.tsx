import './ads'

import * as React from 'react'
import { Component, Fragment, SFC } from 'react'
import { Docs, Entry, Link as BaseLink } from 'docz'
import styled from 'react-emotion'

const SidebarWrapper = styled('div')`
  width: 280px;
  min-width: 280px;
  min-height: 100%;
  padding: 50px 40px 50px 0;
  margin-right: 60px;
  border-right: 1px solid ${p => p.theme.colors.grayLight};
`

const Wrapper = styled('div')`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Link = styled(BaseLink)`
  font-size: 18px;
  padding: 5px 0;

  &,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }

  &.active,
  &:hover {
    color: ${p => p.theme.colors.ocean};
  }
`

const SmallLink = styled('a')`
  font-size: 16px;
  padding: 0 0 5px 10px;

  &,
  &.active,
  &:visited {
    color: ${p => p.theme.colors.grayDark};
  }
`

const Submenu = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`

interface MenuProps {
  doc: Entry
  active: string
}

const Menu: SFC<MenuProps> = ({ doc, active }) => (
  <Fragment>
    <Link to={doc.route}>{doc.name}</Link>
    {active === doc.route && (
      <Submenu>
        {doc.headings.map(
          heading =>
            heading.depth > 1 &&
            heading.depth < 3 && (
              <SmallLink key={heading.slug} href={`#${heading.slug}`}>
                {heading.value}
              </SmallLink>
            )
        )}
      </Submenu>
    )}
  </Fragment>
)

interface SidebarProps {
  parent: string
  active: string
}

export class Sidebar extends Component<SidebarProps> {
  public addCarbonAds = () => {
    const wrapper = document.getElementById('ads')
    const script = document.createElement('script')

    script.setAttribute('async', '')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      '//cdn.carbonads.com/carbon.js?serve=CK7D6237&placement=wwwdoczsite'
    )
    script.setAttribute('id', '_carbonads_js')

    if (wrapper) {
      wrapper.appendChild(script)
    }
  }

  public componentDidMount(): void {
    this.addCarbonAds()
  }

  public render(): React.ReactNode {
    const { active, parent } = this.props

    return (
      <Docs>
        {({ docs: allDocs }) => {
          const docs = allDocs.filter(doc => doc.parent === parent)

          return (
            <SidebarWrapper>
              <Wrapper>
                {docs.map(doc => (
                  <Menu key={doc.id} doc={doc} active={active} />
                ))}
                <div id="ads" />
              </Wrapper>
            </SidebarWrapper>
          )
        }}
      </Docs>
    )
  }
}
