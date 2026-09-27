import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import { Container } from './ui'
import { profile } from '../data/content'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

const Nav = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <Bar data-scrolled={scrolled || open}>
      <Container>
        <Inner>
          <Logo href="#top" onClick={close} aria-label="Back to top">
            <Mark>CO</Mark>
            <span>{profile.shortName}</span>
          </Logo>

          <Links>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </Links>

          <Actions>
            <IconButton
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <HiOutlineMoon size={18} /> : <HiOutlineSun size={18} />}
            </IconButton>
            <Cta href="#contact">Let&apos;s talk</Cta>
            <MenuButton
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <RiCloseLine size={22} /> : <RiMenu4Line size={20} />}
            </MenuButton>
          </Actions>
        </Inner>
      </Container>

      <Drawer data-open={open} aria-hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>{l.label}</a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={close} tabIndex={open ? 0 : -1}>{profile.email}</a>
      </Drawer>
    </Bar>
  )
}

export default Nav

const Bar = styled.nav`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  border-bottom: 1px solid transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;

  &[data-scrolled='true'] {
    background: var(--nav-bg);
    backdrop-filter: saturate(180%) blur(16px);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
    border-bottom-color: var(--border);
  }
`

const Inner = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
`

const Mark = styled.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--accent-grad);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
`

const Links = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);

  a {
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      color: var(--text);
      background: var(--surface-2);
    }
  }

  @media (max-width: 920px) {
    display: none;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--border-strong);
    transform: rotate(15deg);
  }
`

const MenuButton = styled(IconButton)`
  display: none;

  &:hover { transform: none; }

  @media (max-width: 920px) {
    display: grid;
  }
`

const Cta = styled.a`
  height: 40px;
  display: inline-flex;
  align-items: center;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--text);
  color: var(--bg);
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover { transform: translateY(-1px); }

  @media (max-width: 480px) {
    display: none;
  }
`

const Drawer = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 16px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;

    &[data-open='true'] {
      max-height: 420px;
      opacity: 1;
      padding: 8px 16px 24px;
    }

    a {
      padding: 14px 4px;
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 600;
      border-bottom: 1px solid var(--border);
    }

    a:last-child {
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 500;
      color: var(--text-muted);
      border-bottom: none;
    }
  }
`
