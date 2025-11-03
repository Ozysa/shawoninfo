import React from 'react'
import { useParams, Link } from 'react-router-dom'

const skillContent = {
  'leadership': {
    title: 'Leadership',
    intro: 'Practical leadership that creates clarity, builds trust, and delivers results.',
    sections: [
      {
        h: 'Lead with clarity',
        p: 'Set clear outcomes, define success metrics, and communicate expectations. People do their best work when they know the goal and how to measure progress.'
      },
      {
        h: 'Build high-trust teams',
        p: 'Trust is built through consistency, transparency, and ownership. Create rituals: weekly 1:1s, decision logs, and public roadmaps.'
      },
      {
        h: 'Make better decisions',
        p: 'Use a simple framework: Context → Options → Risks → Decision → Owner. Document decisions and revisit with data.'
      }
    ],
    checklist: [
      'Define success in one sentence',
      'Write decisions in a shared doc',
      'Create a weekly team health check',
      'Reward outcomes, not hours'
    ]
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    intro: 'Turn manual processes into scalable systems that compound value.',
    sections: [
      {
        h: 'Start with the customer journey',
        p: 'Map the journey end-to-end. Identify friction points and automate the top 20% that causes 80% delays.'
      },
      {
        h: 'Systems over tools',
        p: 'Tools change. Systems endure. Design processes first, then choose minimal tools that integrate well.'
      },
      {
        h: 'Data-driven operations',
        p: 'Capture the right data, publish simple dashboards, and create feedback loops that trigger action—not just reports.'
      }
    ],
    checklist: [
      'Create a 90-day automation roadmap',
      'Centralize KPIs in one dashboard',
      'Standardize data definitions',
      'Automate handoffs between teams'
    ]
  },
  'business-strategy': {
    title: 'Business Strategy',
    intro: 'Choose a position. Win where you are strongest. Compound advantages.',
    sections: [
      {
        h: 'Positioning and focus',
        p: 'Be known for one thing. Choose the customer, problem, and result. Say “no” to everything else for 90 days.'
      },
      {
        h: 'Moats and leverage',
        p: 'Build advantages: brand, distribution, community, data, or product velocity. Stack two moats to escape competition.'
      },
      {
        h: 'Execution rhythm',
        p: 'Quarterly objectives, monthly reviews, weekly commitments. Strategy is a habit, not a document.'
      }
    ],
    checklist: [
      'Define ICP (ideal customer profile)',
      'Write your one-sentence positioning',
      'Pick 3 measurable quarterly objectives',
      'Design a weekly execution review'
    ]
  }
}

export default function SkillDetail() {
  const { slug } = useParams()
  const content = skillContent[slug]

  if (!content) {
    return (
      <div className="container page">
        <h1 className="section-title">Not Found</h1>
        <p>Skill not found.</p>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <section className="skill-detail">
      <div className="container">
        <div className="detail-header">
          <h1 className="section-title">{content.title}</h1>
          <p className="detail-intro">{content.intro}</p>
          <div className="detail-actions">
            <Link className="btn btn-secondary" to="/">← Back</Link>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            {content.sections.map((s, i) => (
              <article key={i} className="detail-card">
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </article>
            ))}
          </div>
          <aside className="detail-aside">
            <div className="detail-card">
              <h3>Quick Start Checklist</h3>
              <ul className="checklist">
                {content.checklist.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
