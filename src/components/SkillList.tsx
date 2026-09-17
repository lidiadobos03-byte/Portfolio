import {
  Palette,
  PenTool,
  ImageIcon,
  Sparkles,
  Layout,
  MessageCircle,
  Clock,
  Users,
  Brush,
} from "lucide-react";

const skillGroups = [
  {
    title: "Design & illustration",
    skills: [
      { name: "Canva", icon: Layout },
      { name: "CorelDRAW", icon: Brush },
      { name: "Adobe Photoshop", icon: ImageIcon },
      { name: "Adobe Illustrator", icon: PenTool },
    ],
  },
  {
    title: "Visual craft",
    skills: [
      { name: "Vector illustration", icon: PenTool },
      { name: "Colour theory", icon: Palette },
      { name: "Composition & hierarchy", icon: Layout },
    ],
  },
  {
    title: "Emerging tools",
    skills: [
      { name: "Midjourney", icon: Sparkles },
      { name: "Stable Diffusion", icon: Sparkles },
      { name: "AI-assisted retouching", icon: ImageIcon },
    ],
  },
  {
    title: "Way of working",
    skills: [
      { name: "Feedback & iteration", icon: MessageCircle },
      { name: "Deadline driven", icon: Clock },
      { name: "Cross-functional collaboration", icon: Users },
    ],
  },
];

export function SkillList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="font-serif text-lg text-foreground">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <skill.icon className="h-4 w-4" />
                </span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
