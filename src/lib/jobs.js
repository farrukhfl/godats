// Data-driven job listings — add/remove roles here rather than hardcoding
// one-off page components. Both /job-openings and /jobs/:slug read from this.
export const jobs = [
  {
    slug: 'junior-devops-engineer',
    title: 'Junior DevOps Engineer',
    category: 'Devops',
    type: ['Full Time', 'Part Time'],
    location: ['Chicago'],
    postedDate: 'May 15, 2026',
    responsibilities: [
      'Assist in managing servers and cloud infrastructure',
      'Support CI/CD pipeline setup and deployment processes',
      'Monitor application and server performance',
      'Help automate routine operational tasks',
      'Troubleshoot basic deployment and hosting issues',
      'Collaborate with development teams on project deployments',
      'Learn and implement DevOps best practices',
      'Maintain documentation for systems and processes',
    ],
    requirements: [
      'Basic understanding of Linux and command-line usage',
      'Familiarity with Git and version control systems',
      'Basic knowledge of cloud platforms such as AWS, Azure, or Google Cloud is a plus',
      'Understanding of Docker or containerization concepts is preferred',
      'Willingness to learn CI/CD tools and DevOps workflows',
      'Good problem-solving and communication skills',
      'Ability to work in a team environment',
      'Fresh graduates and entry-level candidates are encouraged to apply',
    ],
    preferredQualifications: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field",
      'Internship or academic project experience is a plus',
      'DevOps or cloud certifications are a bonus',
    ],
  },
  {
    // NOTE: this listing's specific responsibilities/requirements weren't in the
    // scrape — placeholder-appropriate content for a 2D/3D Animator role until
    // the real copy is pulled from the live site.
    slug: 'junior-2d-3d-animator',
    title: 'Junior 2D/3D Animator',
    category: '2D/3D Animator',
    type: ['Full Time'],
    location: ['Remote', 'On-site'],
    postedDate: 'May 15, 2026',
    responsibilities: [
      'Create 2D and 3D animations for product demos, marketing, and UI motion',
      'Storyboard and prototype animation concepts from creative briefs',
      'Rig, texture, and light 3D models for short-form animation',
      'Edit and composite animation sequences for web and social',
      'Collaborate with designers and marketing on visual storytelling',
      'Maintain an organized library of assets and project files',
      'Iterate quickly based on feedback from the creative team',
      'Stay current with animation tools and industry techniques',
    ],
    requirements: [
      'Familiarity with animation software such as Blender, After Effects, or Maya',
      'Basic understanding of animation principles (timing, easing, weight)',
      'A portfolio or reel demonstrating 2D or 3D animation work',
      'Comfortable receiving and iterating on creative feedback',
      'Good time-management skills across multiple small projects',
      'Ability to work in a team environment',
      'Fresh graduates and entry-level candidates are encouraged to apply',
    ],
    preferredQualifications: [
      "Bachelor's degree or diploma in Animation, Motion Design, or a related field",
      'A demo reel or portfolio link is a strong plus',
      'Experience with UI/motion design for web products',
    ],
  },
]

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug)
}
