import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Hero />
      <Contact />
      <Projects />
      <Skills />
      <Experience />
    </main>
  )
}
