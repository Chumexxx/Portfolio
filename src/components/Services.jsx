import styled from 'styled-components'
import { HiOutlineDevicePhoneMobile, HiOutlineWindow, HiOutlineServerStack, HiOutlineSparkles } from 'react-icons/hi2'
import { Container, Section, SectionHeader, Reveal } from './ui'
import { services } from '../data/content'

const ICONS = [HiOutlineDevicePhoneMobile, HiOutlineWindow, HiOutlineServerStack, HiOutlineSparkles]

const Services = () => (
  <Section id="services">
    <Container>
      <SectionHeader
        eyebrow="What I do"
        title="From idea to App Store, the whole stack"
        subtitle="I'm most useful when a product needs one person who can own the full journey: design system, app, API, integrations and release."
      />
      <Grid>
        {services.map((s, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Reveal key={s.title} delay={i * 80}>
              <Card>
                <IconWrap>
                  <Icon size={22} />
                </IconWrap>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Card>
            </Reveal>
          )
        })}
      </Grid>
    </Container>
  </Section>
)

export default Services

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  > div { height: 100%; }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: var(--border-strong);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: 15px;
    color: var(--text-muted);
  }
`

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 6px;
  border-radius: 14px;
  color: #fff;
  background: var(--accent-grad);
  box-shadow: 0 10px 24px -10px var(--glow);
`
