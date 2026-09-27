import styled from 'styled-components'
import {
  SiReact, SiExpo, SiApple, SiAndroid, SiTypescript, SiJavascript, SiNextdotjs, SiVite,
  SiTailwindcss, SiStyledcomponents, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiCsharp,
  SiDotnet, SiPostgresql, SiSequelize, SiSqlalchemy, SiMongodb, SiGooglegemini, SiOpenai,
  SiVercel, SiRender, SiFirebase, SiCloudinary, SiSentry, SiGithubactions, SiGit, SiJest,
  SiVitest, SiPytest, SiPostman, SiFigma, SiOpenjdk, SiSpringboot, SiMysql, SiGraphql, SiDocker,
  SiAzuredevops, SiJenkins, SiJunit5, SiAnthropic, SiJsonwebtokens, SiSwagger,
} from 'react-icons/si'
import { HiOutlineCube, HiOutlineArrowsRightLeft, HiOutlineKey, HiOutlineBeaker, HiOutlineSparkles } from 'react-icons/hi2'
import { Container, Section, SectionHeader, Reveal } from './ui'
import { skills } from '../data/content'

const ICONS = {
  'React Native': SiReact,
  Expo: SiExpo,
  EAS: SiExpo,
  iOS: SiApple,
  Android: SiAndroid,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  'styled-components': SiStyledcomponents,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  FastAPI: SiFastapi,
  'C#': SiCsharp,
  '.NET': SiDotnet,
  PostgreSQL: SiPostgresql,
  Sequelize: SiSequelize,
  SQLAlchemy: SiSqlalchemy,
  MongoDB: SiMongodb,
  Gemini: SiGooglegemini,
  OpenAI: SiOpenai,
  Vercel: SiVercel,
  Render: SiRender,
  Firebase: SiFirebase,
  Cloudinary: SiCloudinary,
  Sentry: SiSentry,
  'GitHub Actions': SiGithubactions,
  Git: SiGit,
  Jest: SiJest,
  Vitest: SiVitest,
  Pytest: SiPytest,
  Postman: SiPostman,
  Figma: SiFigma,
  'ASP.NET Core': SiDotnet,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  MySQL: SiMysql,
  pgvector: SiPostgresql,
  'Entity Framework': SiDotnet,
  REST: HiOutlineArrowsRightLeft,
  GraphQL: SiGraphql,
  JWT: SiJsonwebtokens,
  OAuth: HiOutlineKey,
  Swagger: SiSwagger,
  Docker: SiDocker,
  'Azure DevOps': SiAzuredevops,
  Jenkins: SiJenkins,
  xUnit: HiOutlineBeaker,
  JUnit: SiJunit5,
  Claude: SiAnthropic,
  Cohere: HiOutlineSparkles,
}

const Stack = () => (
  <Section id="stack">
    <Container>
      <SectionHeader
        eyebrow="Tech stack"
        title="Tools I ship with"
        subtitle="Backend first, and chosen for reliability in production. These are the technologies I run in live systems today."
      />
      <Groups>
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60}>
            <Group>
              <h3>{g.group}</h3>
              <Items>
                {g.items.map((item) => {
                  const Icon = ICONS[item] || HiOutlineCube
                  return (
                    <Item key={item}>
                      <Icon size={16} aria-hidden="true" />
                      {item}
                    </Item>
                  )
                })}
              </Items>
            </Group>
          </Reveal>
        ))}
      </Groups>
    </Container>
  </Section>
)

export default Stack

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
  overflow: hidden;

  > div + div { border-top: 1px solid var(--border); }
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  gap: 24px;
  padding: 24px 28px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-muted);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 20px;
  }
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-elev);
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease, transform 0.2s ease;

  svg { color: var(--text-muted); transition: color 0.2s ease; }

  &:hover {
    border-color: var(--border-strong);
    transform: translateY(-2px);

    svg { color: var(--accent); }
  }
`
