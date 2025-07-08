import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Define the skills data
const skills = [
  { category: "Design", skill: "UI/UX Design", proficiency: "Expert", years: 5 },
  { category: "Design", skill: "Graphic Design", proficiency: "Expert", years: 6 },
  { category: "Design", skill: "Logo Design", proficiency: "Expert", years: 7 },
  { category: "Design", skill: "Illustration", proficiency: "Advanced", years: 4 },
  { category: "Design", skill: "Typography", proficiency: "Advanced", years: 5 },
  { category: "Software", skill: "Adobe Photoshop", proficiency: "Expert", years: 8 },
  { category: "Software", skill: "Adobe Illustrator", proficiency: "Expert", years: 7 },
  { category: "Software", skill: "Adobe XD", proficiency: "Advanced", years: 4 },
  { category: "Software", skill: "Figma", proficiency: "Expert", years: 5 },
  { category: "Software", skill: "Sketch", proficiency: "Intermediate", years: 3 },
  { category: "Development", skill: "HTML/CSS", proficiency: "Expert", years: 6 },
  { category: "Development", skill: "JavaScript", proficiency: "Advanced", years: 5 },
  { category: "Development", skill: "React", proficiency: "Advanced", years: 4 },
  { category: "Development", skill: "Responsive Design", proficiency: "Expert", years: 6 },
  { category: "Development", skill: "WordPress", proficiency: "Advanced", years: 5 },
]

export default function SkillsPage() {
  // Group skills by category
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-2xl font-bold mb-6">{category} Skills</h2>
              <div className="rounded-md border border-border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Skill</TableHead>
                      <TableHead>Proficiency</TableHead>
                      <TableHead>Years of Experience</TableHead>ead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{skill.skill}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                skill.proficiency === "Expert"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                  : skill.proficiency === "Advanced"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                              }`}
                            >
                              {skill.proficiency}
                            </span>
                          </TableCell>
                          <TableCell>{skill.years} years</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
