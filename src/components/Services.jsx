import styled from 'styled-components'
import { HiOutlineServerStack, HiOutlineCircleStack, HiOutlineShieldCheck, HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { Container, Section, SectionHeader, Reveal } from './ui'
import { services } from '../data/content'

const ICONS = [HiOutlineServerStack, HiOutlineCircleStack, HiOutlineShieldCheck, HiOutlineDevicePhoneMobile]

const Services = () => (
  <Section id="services">
    <Container>
      <SectionHeader
        eyebrow="What I do"
        title="Complex backend problems are my favourite kind"
        subtitle="I'm most at home where the hard parts live: data models, money flows, auth, migrations and the edge cases in between. I can still carry a feature all the way to the screen."
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
