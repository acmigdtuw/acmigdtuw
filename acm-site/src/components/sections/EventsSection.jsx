import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    tag: 'Workshop',
    tagColor: '#00c4e0',
    date: 'Feb 2026',
    title: 'AI for Social Good',
    desc: 'Expert session on leveraging AI to counter online aggression and build safer digital communities.'
  },
  {
    tag: 'Workshop',
    tagColor: '#0082aa',
    date: 'Feb 2026',
    title: 'AI x Augmented Reality Workshop',
    desc: 'Hands-on workshop exploring AR/VR technologies and building real-world immersive experiences.'
  },
  {
    tag: 'Event',
    tagColor: '#005f7f',
    date: 'Feb 2026',
    title: 'Winter Workshop Felicitation',
    desc: 'Recognition ceremony celebrating participants, mentors, and coordinators of the ACM Winter Workshop.'
  },
  {
    tag: 'Workshop',
    tagColor: '#00c4e0',
    date: 'Dec 2025 – Jan 2026',
    title: 'ACM Winter Workshop',
    desc: 'Structured program covering DSA, projects, resume building, and mentorship for internship preparation.'
  },
  {
    tag: 'Event',
    tagColor: '#0082aa',
    date: 'Nov 2025',
    title: 'Online Orientation',
    desc: 'Virtual orientation session introducing ACM, opportunities, and upcoming initiatives.'
  },
  {
    tag: 'Event',
    tagColor: '#005f7f',
    date: 'Oct 2025',
    title: 'Offline Orientation',
    desc: 'Introduction to ACM community, benefits, and activities with an interactive quiz session.'
  },
  {
    tag: 'Competition',
    tagColor: '#00c4e0',
    date: 'Oct 2025',
    title: 'AI Comic Creation Challenge',
    desc: 'Creative competition using AI tools like DALL·E and Gemini to design engaging comic strips.'
  },
  {
    tag: 'Talk',
    tagColor: '#0082aa',
    date: 'Sep 2025',
    title: 'Alumni Connect',
    desc: 'Session on cybersecurity careers, certifications, and building industry-ready skillsets.'
  },
  {
    tag: 'Talk',
    tagColor: '#00c4e0',
    date: 'Aug 2025',
    title: 'Future of Generative AI',
    desc: 'Expert session on advancements in GenAI and sustainable AI systems.'
  },
  {
    tag: 'Program',
    tagColor: '#005f7f',
    date: 'Apr 2025',
    title: 'ACM Research Internship Conclusion',
    desc: 'Final evaluation and recognition of research internship projects with awards and certifications.'
  },
]

export default function EventsSection() {
  const sectionRef = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-ev-head]',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '[data-ev-head]',
            start: 'top 82%',
          },
        }
      )

      gsap.fromTo('[data-ev-card]',
        { y: 80, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="events"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(80px, 10vh, 140px) clamp(24px, 6vw, 80px)',
        position: 'relative',
      }}
    >
      {/* background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(4,8,15,0) 0%, rgba(4,8,15,0.8) 20%, rgba(4,8,15,0.85) 80%, rgba(4,8,15,0) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div data-ev-head style={{ marginBottom: '52px' }}>
          <div style={{
            width: '48px',
            height: '2px',
            marginBottom: '22px',
            background: 'linear-gradient(90deg, #0082aa, #00c4e0)',
          }} />

          <p style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#0082aa',
          }}>
            What we do
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              color: '#fff',
              margin: 0,
            }}>
              Featured <span style={{ color: '#0082aa' }}>Events</span>
            </h2>
          </div>
        </div>

        {/* Scroll wrapper */}
        <div style={{ position: 'relative' }}>

          {/* Left button */}
          <button
            onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,

              width: '44px',
              height: '44px',
              borderRadius: '50%',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',

              color: '#fff',
              cursor: 'pointer',
              fontSize: '18px',
              lineHeight: '1',
            }}
          >
            ←
          </button>

          {/* Right button */}
          <button
            onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,

              width: '44px',
              height: '44px',
              borderRadius: '50%',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              background: 'rgba(255,255,255,0.035)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.07)',

              color: '#fff',
              cursor: 'pointer',
              fontSize: '18px',
              lineHeight: '1',
            }}
          >
            →
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              gap: '18px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: '10px',
              scrollbarWidth: 'none',
            }}
          >
            {events.map((ev) => (
              <div
                key={ev.title}
                data-ev-card
                style={{
                  minWidth: '260px',
                  maxWidth: '260px',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',

                  background: 'rgba(255,255,255,0.035)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >

                {/* Tag + date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{
                    background: `${ev.tagColor}22`,
                    border: `1px solid ${ev.tagColor}44`,
                    color: ev.tagColor,
                    fontSize: '10px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                  }}>
                    {ev.tag}
                  </span>

                  <span style={{ fontSize: '11px', color: '#aaa' }}>
                    {ev.date}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '18px' }}>
                  {ev.title}
                </h3>

                <p style={{ color: '#aaa', fontSize: '13px' }}>
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}