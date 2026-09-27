import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { SiGoogleplay, SiApple } from 'react-icons/si'

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 600px) {
    padding: 0 16px;
  }
`

export const Section = styled.section`
  padding: 120px 0 0;

  @media (max-width: 768px) {
    padding-top: 88px;
  }
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: currentColor;
  }
`

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 680px;
  margin-bottom: 56px;

  h2 {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
  }

  p {
    color: var(--text-muted);
    font-size: 18px;
  }

  @media (max-width: 600px) {
    margin-bottom: 36px;
    p { font-size: 16px; }
  }
`

export const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <HeaderWrap>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </HeaderWrap>
)

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  white-space: nowrap;

  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`

export const Button = styled.a`
  ${buttonBase}

  ${({ $variant }) =>
    $variant === 'ghost'
      ? css`
          background: transparent;
          color: var(--text);
          border-color: var(--border-strong);
          &:hover { border-color: var(--text-muted); background: var(--surface); }
        `
      : css`
          background: var(--text);
          color: var(--bg);
          box-shadow: 0 10px 30px -10px var(--glow);
          &:hover { box-shadow: 0 16px 40px -12px var(--glow); }
        `}
`

export const SubmitButton = styled.button`
  ${buttonBase}
  background: var(--text);
  color: var(--bg);

  &:disabled {
    opacity: 0.6;
    cursor: progress;
    transform: none;
  }
`

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  white-space: nowrap;
`

const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 18px 0 14px;
  border-radius: 14px;
  background: #000;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.45);
  }

  svg { flex-shrink: 0; }

  span {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  small {
    font-size: 10px;
    letter-spacing: 0.04em;
    opacity: 0.8;
  }

  strong {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 600;
  }
`

export const StoreBadge = ({ store, href, label }) => {
  const isPlay = store === 'play'
  return (
    <Badge href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {isPlay ? <SiGoogleplay size={22} /> : <SiApple size={24} />}
      <span>
        <small>{isPlay ? 'GET IT ON' : 'Download on the'}</small>
        <strong>{isPlay ? 'Google Play' : 'App Store'}</strong>
      </span>
    </Badge>
  )
}

const RevealWrap = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  &[data-visible='true'] {
    opacity: 1;
    transform: none;
  }
`

// Fades children in the first time they scroll into view.
export const Reveal = ({ children, delay, as }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <RevealWrap ref={ref} as={as} $delay={delay} data-visible={visible}>
      {children}
    </RevealWrap>
  )
}
