"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Paintbrush, Lightbulb, Rocket, Zap } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    description:
      "Creación de interfaces modernas y funcionales en web y móviles.",
    icon: Paintbrush,
    iconColor: "text-blue-500",
    skills: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Next.js", color: "bg-black text-white" },
      { name: "Shadcn/UI", color: "bg-purple-100 text-purple-800" },
      { name: "Dark Mode Integration", color: "bg-gray-800 text-gray-100" },
      {
        name: "Autocompletado con Google API",
        color: "bg-red-100 text-red-800",
      },
    ],
  },
  {
    title: "Backend",
    description: "Desarrollo de servidores robustos y APIs escalables.",
    icon: Server,
    iconColor: "text-green-500",
    skills: [
      { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
      { name: "Supabase", color: "bg-emerald-100 text-emerald-800" },
      { name: "Nodemailer", color: "bg-blue-100 text-blue-800" },
      { name: "API RESTful", color: "bg-indigo-100 text-indigo-800" },
    ],
  },
  {
    title: "DevOps",
    description: "Implementación eficiente y despliegue automatizado.",
    icon: Rocket,
    iconColor: "text-red-500",
    skills: [
      { name: "Vercel", color: "bg-black text-white" },
      { name: "Google Colab", color: "bg-yellow-100 text-yellow-800" },
      { name: "CI/CD", color: "bg-green-100 text-green-800" },
    ],
  },
  {
    title: "Diseño UX/UI",
    description: "Creación de experiencias de usuario intuitivas y atractivas.",
    icon: Lightbulb,
    iconColor: "text-yellow-500",
    skills: [
      { name: "Figma", color: "bg-purple-100 text-purple-800" },
      { name: "Adobe XD", color: "bg-pink-100 text-pink-800" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
      { name: "Interfaz intuitiva", color: "bg-orange-100 text-orange-800" },
      { name: "Canva", color: "bg-blue-100 text-blue-800" },
    ],
  },
  {
    title: "Optimización",
    description: "Mejora de rendimiento y eficiencia en aplicaciones.",
    icon: Zap,
    iconColor: "text-orange-500",
    skills: [
      { name: "React.memo", color: "bg-blue-100 text-blue-800" },
      { name: "useCallback", color: "bg-green-100 text-green-800" },
      { name: "Lazy Loading", color: "bg-yellow-100 text-yellow-800" },
      {
        name: "Optimización de consultas API",
        color: "bg-indigo-100 text-indigo-800",
      },
      { name: "Performance Auditing", color: "bg-red-100 text-red-800" },
    ],
  },
  {
    title: "Otros",
    description: "Uso de tecnologías complementarias para proyectos completos.",
    icon: Code,
    iconColor: "text-purple-500",
    skills: [
      { name: "Git", color: "bg-orange-100 text-orange-800" },
      { name: "Prisma ORM", color: "bg-cyan-100 text-cyan-800" },
      { name: "Lucide-react", color: "bg-green-100 text-green-800" },
      { name: "Chatbots con IA", color: "bg-blue-100 text-blue-800" },
      {
        name: "Excel y automatización",
        color: "bg-emerald-100 text-emerald-800",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Habilidades
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-primary/10">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                  <category.icon
                    className={`w-6 h-6 ml-auto ${category.iconColor}`}
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${skill.color} hover:bg-[inherit]`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <style jsx global>{`
          .badge:hover {
            background-color: inherit !important;
            color: inherit !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
