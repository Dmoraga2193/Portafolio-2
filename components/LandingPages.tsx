"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";

const landingPages = [
  {
    title: "Arquitectos Next",
    description:
      "Una landing page para un grupo de Arquitectos dedicados a legalizar terrenos en Chile.",
    images: [
      "/arquitectos_web_1.png",
      "/arquitectos_web_2.png",
      "/arquitectos_web_3.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://arquitectura-next.vercel.app/",
  },
  {
    title: "PoderLex",
    description:
      "Página para un grupo de abogados, la cual los clientes pueden cotizar consultas legales.",
    images: ["/poderlex_1.png", "/poderlex_2.png", "/poderlex_3.png"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://www.poderlex.cl/",
  },
  {
    title: "IngProtec",
    description: "Una landing page de una empresa de ingenieria.",
    images: [
      "/ingprotec_web_1.png",
      "/ingprotec_web_2.png",
      "/ingprotec_web_3.png",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://www.ingprotec.cl/",
  },
  // Puedes agregar más proyectos aquí
];

const LandingPages = () => {
  return (
    <section id="landing-pages" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos de Landing Pages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingPages.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <ImageCarousel images={project.images} alt={project.title} />
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver proyecto
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPages;
