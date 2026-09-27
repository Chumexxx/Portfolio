import styled from 'styled-components'
import { HiArrowUp } from 'react-icons/hi2'
import { Container } from './ui'
import { profile } from '../data/content'

const Footer = () => (
  <Wrap>
    <Container>
      <Inner>
        <span>© {new Date().getFullYear()} {profile.name}. Designed &amp; built by me.</span>
        <a href="#top">
          Back to top <HiArrowUp size={14} />
        </a>
      </Inner>
    </Container>
  </Wrap>
)

export default Footer

const Wrap = styled.footer`
  margin-top: 120px;
  border-top: 1px solid var(--border);

  @media (max-width: 768px) {
    margin-top: 88px;
  }
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 28px 0;
  font-size: 14px;
  color: var(--text-muted);

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover { color: var(--text); }
  }
`
