import styled, { keyframes } from 'styled-components'
import { HiArrowRight, HiArrowDownTray } from 'react-icons/hi2'
import { Container } from './ui'
import { profile, stats, featured } from '../data/content'
import { socialIcons } from '../data/socials'
import headshot from '../assets/headshot.webp'

const Hero = () => (
  <Wrap id="top">
    <Backdrop aria-hidden="true" />
    <Container>
      <Grid>
        <Copy>
          <Status>
            <Dot />
            Backend-focused · Open to new roles
          </Status>

          <h1>
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <br />
            I build <Gradient>the back ends</Gradient> products run on, and the apps on top.
          </h1>

          <Lead>
            <strong>{profile.role}.</strong> {profile.summary}
          </Lead>

          <Ctas>
            <Primary href="#work">
              See my work <HiArrowRight size={18} />
            </Primary>
            <Secondary href={profile.resume} target="_blank" rel="noopener noreferrer">
              <HiArrowDownTray size={18} /> Résumé
            </Secondary>
          </Ctas>

          <Socials>
            {socialIcons.map(({ key, label, Icon }) => (
              <a key={key} href={profile.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </Socials>
        </Copy>

        <Portrait>
          <Ring aria-hidden="true" />
          <img src={headshot} alt={`Portrait of ${profile.name}`} width="560" height="560" />
          {featured.map((p, i) => (
            <Floating key={p.id} href={`#${p.id}`} $pos={i} aria-label={`Jump to ${p.name}`}>
              <img src={p.icon} alt="" width="40" height="40" />
              <span>
                <strong>{p.name}</strong>
                <small>Live on iOS &amp; Android</small>
              </span>
            </Floating>
          ))}
        </Portrait>
      </Grid>

      <Stats>
        {stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </Stats>
    </Container>
  </Wrap>
)

export default Hero

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Wrap = styled.header`
  position: relative;
  padding: 160px 0 40px;
  overflow: hidden;

  @media (max-width: 900px) {
    padding-top: 120px;
  }
`

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(600px 400px at 85% 20%, var(--glow), transparent 70%),
    radial-gradient(500px 360px at 10% 10%, rgba(79, 209, 197, 0.12), transparent 70%);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  gap: 56px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  h1 {
    font-size: clamp(40px, 6.2vw, 72px);
    font-weight: 700;
    letter-spacing: -0.035em;
  }
`

const Gradient = styled.span`
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

const Status = styled.span`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
`

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  animation: ${pulse} 2s infinite;
`

const Lead = styled.p`
  max-width: 580px;
  font-size: 19px;
  color: var(--text-muted);

  strong {
    color: var(--text);
    font-weight: 600;
  }

  @media (max-width: 600px) {
    font-size: 17px;
  }
`

const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const btn = `
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  &:hover { transform: translateY(-2px); }
`

const Primary = styled.a`
  ${btn}
  background: var(--text);
  color: var(--bg);
  box-shadow: 0 12px 36px -12px var(--glow);

  svg { transition: transform 0.2s ease; }
  &:hover svg { transform: translateX(3px); }
`

const Secondary = styled.a`
  ${btn}
  border: 1px solid var(--border-strong);
  background: var(--surface);
  &:hover { border-color: var(--text-muted); }
`

const Socials = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid var(--border);
    color: var(--text-muted);
    transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: var(--text);
      border-color: var(--border-strong);
      transform: translateY(-2px);
    }
  }
`

const Portrait = styled.div`
  position: relative;
  justify-self: center;
  width: min(420px, 82vw);
  aspect-ratio: 1;

  > img {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow);
  }
`

const Ring = styled.div`
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  padding: 2px;
  background: conic-gradient(from 0deg, #8b7bff, #5eb5ff, #4fd1c5, transparent 60%, #8b7bff);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: ${spin} 14s linear infinite;
  opacity: 0.8;
`

const Floating = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 10px 10px;
  border-radius: 16px;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--border-strong);
  box-shadow: var(--shadow);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $pos }) => $pos * -3}s;
  transition: border-color 0.2s ease;
  ${({ $pos }) => ($pos === 0 ? 'left: -48px; bottom: 16%;' : 'right: -36px; top: 10%;')}

  &:hover { border-color: var(--text-muted); }

  @media (max-width: 1180px) {
    ${({ $pos }) => ($pos === 0 ? 'left: -16px;' : 'right: -8px;')}
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  span {
    display: flex;
    flex-direction: column;
    line-height: 1.25;
  }

  strong {
    font-family: var(--font-display);
    font-size: 15px;
  }

  small {
    font-size: 12px;
    color: var(--text-muted);
  }

  @media (max-width: 600px) {
    ${({ $pos }) => ($pos === 0 ? 'left: -8px; bottom: 2%;' : 'right: -8px; top: 2%;')}
    padding: 8px 12px 8px 8px;

    img { width: 32px; height: 32px; }
    strong { font-size: 13px; }
    small { font-size: 11px; }
  }
`

const Stats = styled.div`
  margin-top: 88px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 28px;
  }

  > div + div {
    border-left: 1px solid var(--border);
  }

  strong {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  span {
    font-size: 14px;
    color: var(--text-muted);
  }

  @media (max-width: 720px) {
    margin-top: 56px;
    grid-template-columns: 1fr;

    > div + div {
      border-left: none;
      border-top: 1px solid var(--border);
    }

    > div { padding: 18px 20px; }
    strong { font-size: 22px; }
  }
`
