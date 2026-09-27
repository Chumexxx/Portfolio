import { useState } from 'react'
import styled from 'styled-components'
import { HiOutlineEnvelope, HiOutlinePhone, HiArrowDownTray, HiCheckCircle, HiOutlineMapPin } from 'react-icons/hi2'
import { Container, Section, SectionHeader, SubmitButton, Reveal } from './ui'
import { socialIcons } from '../data/socials'
import { profile } from '../data/content'

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <Panel>
            <Left>
              <SectionHeader
                eyebrow="Contact"
                title="Have a product in mind? Let's build it."
                subtitle="Whether it's a new app, a feature on an existing one, or a full-time role, I'd love to hear about it."
              />

              <Details>
                <a href={`mailto:${profile.email}`}>
                  <HiOutlineEnvelope size={20} />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`}>
                  <HiOutlinePhone size={20} />
                  {profile.phoneDisplay}
                </a>
                <span>
                  <HiOutlineMapPin size={20} />
                  {profile.location}
                </span>
              </Details>

              <Row>
                <Resume href={profile.resume} target="_blank" rel="noopener noreferrer">
                  <HiArrowDownTray size={18} /> Download résumé
                </Resume>
                <Socials>
                  {socialIcons.map(({ key, label, Icon }) => (
                    <a key={key} href={profile.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon size={18} />
                    </a>
                  ))}
                </Socials>
              </Row>
            </Left>

            <Form onSubmit={onSubmit}>
              {status === 'sent' ? (
                <Sent role="status">
                  <HiCheckCircle size={44} />
                  <h3>Message sent</h3>
                  <p>Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button type="button" onClick={() => setStatus('idle')}>Send another message</button>
                </Sent>
              ) : (
                <>
                  <Pair>
                    <Field>
                      <label htmlFor="firstName">First name</label>
                      <input id="firstName" name="FirstName" type="text" autoComplete="given-name" required />
                    </Field>
                    <Field>
                      <label htmlFor="lastName">Last name</label>
                      <input id="lastName" name="LastName" type="text" autoComplete="family-name" required />
                    </Field>
                  </Pair>
                  <Field>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                  </Field>
                  <Field>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="Message" rows="5" placeholder="Tell me about your project, timeline and budget…" required />
                  </Field>
                  {status === 'error' && (
                    <ErrorText role="alert">
                      Something went wrong. Please try again or email me directly at {profile.email}.
                    </ErrorText>
                  )}
                  <SubmitButton type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </SubmitButton>
                </>
              )}
            </Form>
          </Panel>
        </Reveal>
      </Container>
    </Section>
  )
}

export default Contact

const Panel = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 56px;
  border-radius: 28px;
  border: 1px solid var(--border);
  background:
    radial-gradient(600px 360px at 0% 0%, var(--glow), transparent 70%),
    var(--surface);
  overflow: hidden;

  header { margin-bottom: 32px; }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 36px;
  }

  @media (max-width: 600px) {
    padding: 22px;
    border-radius: 22px;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a, span {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 17px;
    font-weight: 500;
    word-break: break-word;
  }

  span { color: var(--text-muted); }

  svg {
    flex-shrink: 0;
    color: var(--accent);
  }

  a:hover { color: var(--accent); }
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
`

const Resume = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--bg-elev);
  font-weight: 600;
  font-size: 15px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--text-muted);
    transform: translateY(-2px);
  }
`

const Socials = styled.div`
  display: flex;
  gap: 8px;

  a {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid var(--border);
    color: var(--text-muted);
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: var(--text);
      border-color: var(--border-strong);
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg-elev);

  > button[type='submit'] { align-self: flex-start; }

  @media (max-width: 600px) {
    padding: 18px;

    > button[type='submit'] { align-self: stretch; }
  }
`

const Pair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
  }

  input, textarea {
    width: 100%;
    padding: 13px 14px;
    border-radius: 12px;
    border: 1px solid var(--border-strong);
    background: var(--surface);
    color: var(--text);
    font: inherit;
    font-size: 15px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    resize: vertical;

    &::placeholder { color: var(--text-faint); }

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 4px var(--glow);
    }
  }
`

const ErrorText = styled.p`
  font-size: 14px;
  color: #f87171;
`

const Sent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 360px;
  text-align: center;

  svg { color: #34d399; }

  h3 { font-size: 24px; }

  p { color: var(--text-muted); }

  button {
    margin-top: 12px;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid var(--border-strong);
    background: transparent;
    color: var(--text);
    cursor: pointer;
  }
`
