import styled from 'styled-components'
import { HiArrowUpRight } from 'react-icons/hi2'
import { Container, Section, SectionHeader, Chip, Reveal } from './ui'
import { experience } from '../data/content'

const Experience = () => (
  <Section id="experience">
    <Container>
      <SectionHeader
        eyebrow="Experience"
        title="Where I've built back ends"
        subtitle="From .NET APIs for a UK team to analytics platforms and production marketplaces, the constant is owning the server side."
      />

      <Timeline>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 60}>
            <Item>
              <Meta>
                <span>{job.period}</span>
                <small>{job.location}</small>
              </Meta>

              <Card>
                <Head>
                  <div>
                    <h3>{job.role}</h3>
                    <Company>
                      {job.link ? (
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                          {job.company} <HiArrowUpRight size={14} />
                        </a>
                      ) : (
                        job.company
                      )}
                    </Company>
                  </div>
                  <MobilePeriod>{job.period}</MobilePeriod>
                </Head>

                <Points>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </Points>

                <Tags>
                  {job.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </Tags>
              </Card>
            </Item>
          </Reveal>
        ))}
      </Timeline>
    </Container>
  </Section>
)

export default Experience

const Timeline = styled.ol`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* vertical rail between the date column and the cards */
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 200px;
    width: 1px;
    background: linear-gradient(var(--accent), var(--border) 30%, var(--border));
  }

  @media (max-width: 820px) {
    &::before { display: none; }
  }
`

const Item = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;

  /* node on the rail */
  &::before {
    content: '';
    position: absolute;
    left: 195px;
    top: 30px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--accent);
    box-shadow: 0 0 0 4px var(--bg);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 0;

    &::before { display: none; }
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 22px;
  text-align: right;
  padding-right: 20px;

  span {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 15px;
  }

  small {
    font-size: 13px;
    color: var(--text-faint);
  }

  @media (max-width: 820px) {
    display: none;
  }
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 26px 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: border-color 0.3s ease;

  &:hover { border-color: var(--border-strong); }

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;

  h3 {
    font-size: 21px;
    font-weight: 600;
  }
`

const Company = styled.div`
  margin-top: 6px;
  font-weight: 600;
  color: var(--accent);

  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &:hover { text-decoration: underline; text-underline-offset: 3px; }
  }
`

const MobilePeriod = styled.span`
  display: none;
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--surface-2);
  border: 1px solid var(--border);
  white-space: nowrap;

  @media (max-width: 820px) {
    display: inline-block;
  }
`

const Points = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 15px;
    color: var(--text-muted);

    &::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 10px;
      width: 6px;
      height: 6px;
      border-radius: 2px;
      background: var(--accent);
      opacity: 0.8;
    }
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
