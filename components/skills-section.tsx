export function SkillsSection() {
  const skills = {
    frontend: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Shadcn',
      'HTML/CSS',
    ],
    backend: [
      'Node.js',
      'Express.js',
      'NestJS',
      'FastAPI',
      'Python',
      'REST APIs',
    ],
    databases: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Supabase',
      'Firebase',
      'Pinecone',
      'Amazon S3',
    ],
    devOps: [
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Vercel',
      'Git',
      'GitLab',
    ],
    aiAutomation: [
      'n8n',
      'OpenRouter',
      'Gemini',
      'AssemblyAI',
      'Pinecone',
      'RAG',
      'Telegram Bot API',
    ],
    tools: [
      'JWT',
      'bcrypt',
      'TypeORM',
      'Mongoose',
      'Pusher',
      'Metabase',
      'SMS Gateway',
      'Google Workspace APIs',
      
    ],
  }

  return (
    <>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
        Technical Skills
      </h3>
      <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-3">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Frontend Development
          </h3>
          <ul className="space-y-3">
            {skills.frontend.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Backend Development
          </h3>
          <ul className="space-y-3">
            {skills.backend.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Databases & Storage
          </h3>
          <ul className="space-y-3">
            {skills.databases.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            DevOps & Version Control
          </h3>
          <ul className="space-y-3">
            {skills.devOps.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            AI & Automation
          </h3>
          <ul className="space-y-3">
            {skills.aiAutomation.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Other Tools & Libraries
          </h3>
          <ul className="space-y-3">
            {skills.tools.map((skill) => (
              <li key={skill} className="text-base text-foreground md:text-lg">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}