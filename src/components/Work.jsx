import styled from 'styled-components'
import { HiArrowUpRight, HiCheck } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { Container, Section, SectionHeader, Chip, StoreBadge, Reveal } from './ui'
import { featured, moreProjects } from '../data/content'

const Work = () => (
  <Section id="work">
    <Container>
      <SectionHeader
        eyebrow="Selected work"
        title="Production systems I've built"
        subtitle="Real products with real users and real money, live on Google Play and the App Store. I architect the back end, then ship the web and mobile clients on top of it."
      />

      <Featured>
        {featured.map((project, i) => (
          <Reveal key={project.id}>
            <FeaturedCard project={project} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </Featured>

      <Reveal>
        <MoreHeading>More projects</MoreHeading>
      </Reveal>
      <MoreGrid>
        {moreProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <MoreCard project={p} />
          </Reveal>
        ))}
      </MoreGrid>
    </Container>
  </Section>
)

export default Work

const FeaturedCard = ({ project, flip }) => {
  const { name, tagline, icon, accent, accentSoft, kind, description, highlights, stack, links, companion } = project

  return (
    <Card id={project.id} style={{ '--brand': accent, '--brand-soft': accentSoft }} data-flip={flip}>
      <Info>
        <TitleRow>
          <AppIcon src={icon} alt={`${name} app icon`} width="72" height="72" loading="lazy" />
          <div>
            <Kind>{kind}</Kind>
            <h3>{name}</h3>
            <Tagline>{tagline}</Tagline>
          </div>
        </TitleRow>

        <Description>{description}</Description>

        <Highlights>
          {highlights.map((h) => (
            <li key={h}>
              <HiCheck size={16} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </Highlights>

        <Stack>
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </Stack>

        <LinksRow>
          {links.playStore && <StoreBadge store="play" href={links.playStore} label={`Get ${name} on Google Play`} />}
          {links.appStore && <StoreBadge store="apple" href={links.appStore} label={`Download ${name} on the App Store`} />}
          {links.website && (
            <WebLink href={links.website} target="_blank" rel="noopener noreferrer">
              {links.website.replace(/^https?:\/\//, '')} <HiArrowUpRight size={16} />
            </WebLink>
          )}
        </LinksRow>

        {companion && (
          <Companion>
            <img src={companion.icon} alt={`${companion.name} app icon`} width="44" height="44" loading="lazy" />
            <div>
              <strong>{companion.name}</strong>
              <span>{companion.blurb}</span>
            </div>
            <a href={companion.playStore} target="_blank" rel="noopener noreferrer" aria-label={`Get ${companion.name} on Google Play`}>
              Google Play <HiArrowUpRight size={14} />
            </a>
          </Companion>
        )}
      </Info>

      <Visual>
        <PhoneFan shots={project.screenshots} />
      </Visual>
    </Card>
  )
}

const PhoneFan = ({ shots }) => (
  <Fan>
    {shots.map((s, i) => (
      <Phone key={s.alt} data-i={i}>
        <img src={s.src} alt={s.alt} loading="lazy" width="460" height="997" />
      </Phone>
    ))}
  </Fan>
)

const MoreCard = ({ project }) => {
  const href = project.links.website || project.links.github
  return (
    <Small href={href} target="_blank" rel="noopener noreferrer">
      <Thumb>
        <img src={project.image} alt={`${project.name} preview`} loading="lazy" width="1912" height="934" />
      </Thumb>
      <SmallBody>
        <SmallTitle>
          <h4>{project.name}</h4>
          {project.links.github ? <FaGithub size={18} /> : <HiArrowUpRight size={18} />}
        </SmallTitle>
        <p>{project.description}</p>
        <Stack>
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </Stack>
      </SmallBody>
    </Small>
  )
}

/* ---------- styles ---------- */

const Featured = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  padding: 48px;
  border-radius: 28px;
  border: 1px solid var(--border);
  background:
    radial-gradient(700px 400px at 100% 0%, var(--brand-soft), transparent 70%),
    var(--surface);
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover { border-color: var(--border-strong); }

  &[data-flip='true'] {
    grid-template-columns: 1fr 1.1fr;
    background:
      radial-gradient(700px 400px at 0% 0%, var(--brand-soft), transparent 70%),
      var(--surface);
  }

  &[data-flip='true'] > :first-child { order: 2; }

  @media (max-width: 960px) {
    &, &[data-flip='true'] {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 32px;
    }

    &[data-flip='true'] > :first-child { order: 0; }
  }

  @media (max-width: 600px) {
    &, &[data-flip='true'] {
      padding: 22px;
      border-radius: 22px;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  h3 {
    font-size: clamp(30px, 4vw, 40px);
    font-weight: 700;
  }
`

const AppIcon = styled.img`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 18px;
  box-shadow: 0 12px 30px -10px var(--brand);
`

const Kind = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand);
`

const Tagline = styled.span`
  display: block;
  margin-top: 4px;
  color: var(--text-muted);
`

const Description = styled.p`
  font-size: 17px;
  color: var(--text-muted);
`

const Highlights = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15px;
  }

  svg {
    flex-shrink: 0;
    margin-top: 3px;
    padding: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: var(--brand);
    background: var(--brand-soft);
  }
`

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`

const WebLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 52px;
  padding: 0 18px;
  border-radius: 14px;
  border: 1px solid var(--border-strong);
  font-weight: 600;
  font-size: 15px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--brand);
    transform: translateY(-2px);
  }
`

const Companion = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  grid-template-areas: 'icon text button';
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 16px;
  border: 1px dashed var(--border-strong);
  background: var(--bg-elev);

  img {
    grid-area: icon;
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }

  div {
    grid-area: text;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  strong {
    font-family: var(--font-display);
    font-size: 15px;
  }

  span {
    font-size: 13px;
    color: var(--text-muted);
  }

  a {
    grid-area: button;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    white-space: nowrap;
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    background: var(--surface-2);
    border: 1px solid var(--border);
    transition: border-color 0.2s ease;

    &:hover { border-color: var(--brand); }
  }

  /* Phones and narrow cards: the button drops to its own full-width row */
  @media (max-width: 640px) {
    grid-template-columns: 44px minmax(0, 1fr);
    grid-template-areas:
      'icon text'
      'button button';

    a { padding: 11px 12px; }
  }
`

const Visual = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 460px;

  @media (max-width: 600px) {
    min-height: 360px;
  }
`

const Fan = styled.div`
  position: relative;
  width: 100%;
  height: 520px;

  @media (max-width: 600px) {
    height: 380px;
  }
`

const Phone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 210px;
  aspect-ratio: 460 / 997;
  padding: 7px;
  border-radius: 34px;
  background: #0b0b0d;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55);
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 27px;
  }

  &[data-i='0'] {
    z-index: 2;
    transform: translate(-50%, -50%);
  }
  &[data-i='1'] {
    z-index: 1;
    transform: translate(-110%, -46%) rotate(-8deg) scale(0.88);
  }
  &[data-i='2'] {
    z-index: 1;
    transform: translate(10%, -46%) rotate(8deg) scale(0.88);
  }

  ${Card}:hover &[data-i='1'] { transform: translate(-122%, -46%) rotate(-10deg) scale(0.88); }
  ${Card}:hover &[data-i='2'] { transform: translate(22%, -46%) rotate(10deg) scale(0.88); }

  @media (max-width: 600px) {
    width: 150px;
    border-radius: 26px;
    padding: 5px;

    img { border-radius: 21px; }
  }
`

const MoreHeading = styled.h3`
  margin: 88px 0 24px;
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 600px) {
    margin-top: 64px;
  }
`

const MoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  > div { height: 100%; }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const Small = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-strong);
  }
`

const Thumb = styled.div`
  aspect-ratio: 16 / 8.5;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.6s ease;
  }

  ${Small}:hover & img { transform: scale(1.04); }
`

const SmallBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  flex: 1;

  p {
    color: var(--text-muted);
    font-size: 15px;
    flex: 1;
  }
`

const SmallTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  h4 {
    font-size: 20px;
    font-weight: 600;
  }

  svg {
    color: var(--text-muted);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  ${Small}:hover & svg {
    color: var(--text);
    transform: translate(2px, -2px);
  }
`
