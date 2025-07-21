import { Button } from "@/components/ui/button"

function About() {
  return (
    <section id="about" className="p-6 max-w-3xl mx-auto">
      
  
      <Button className="text-3xl font-bold m-10">About Me</Button>


      <p className="mb-4">
        Hi! I'm <strong>Ahqaf Ali</strong> — also known online as <em>Jugadu Gaming</em>. I'm a passionate tech enthusiast and developer who loves to build, break, and rebuild ideas into reality.
      </p>
      <p className="mb-4">
        I’m currently pursuing a <strong>B.Tech in Computer Science</strong> and have experience in:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Frontend Development (React, Tailwind, Vite)</li>
        <li>Backend with Node.js, Express, Supabase</li>
        <li>Hosting multiplayer Minecraft servers (Indipixel)</li>
        <li>Community building and hackathon participation</li>
      </ul>
      <p className="mb-4">
        I also love organizing events, mentoring juniors, and creating platforms where students can collaborate and grow. Whether it’s through Discord communities, coding clubs, or live sessions — I strive to share what I learn.
      </p>
      <p>
        When I'm not coding, you’ll find me exploring new ideas, working on startups, or gaming with friends. Let's build something amazing together!
      </p>
    </section>
  )
}

export default About

