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

const fullSystems = [
  {
    title: "Control de Licitaciones",
    description: "Un sistema para la gestión de tareas.",
    images: ["/mqh_1.png", "/mqh_2.png", "/mqh_3.png"],
    technologies: ["Next.js", "FireBase", "Tailwind CSS", "Framer Motion"],
    link: "https://mqh.cl/",
  },
  {
    title: "Control de Licitaciones y Productos",
    description: "Una plataforma de gestión de licitaciones y productos.",
    images: ["/ingprotec_1.png", "/ingprotec_2.png", "/ingprotec_3.png"],
    technologies: ["Next.js", "SupaBase", "Tailwind CSS", "Framer Motion"],
    link: "https://ingprotec-sistema.vercel.app/",
  },
  {
    title: "Gestión de Propiedades",
    description:
      "Una plataforma de gestión de propiedades con sus respectivos arrendatarios.",
    images: ["/laco_1.png", "/laco_2.png", "/laco_3.png", "/laco_4.png"],
    technologies: ["Next.js", "FireBase", "Tailwind CSS", "Framer Motion"],
    link: "https://gestion-arriendos.vercel.app/",
  },
];

const FullSystems = () => {
  return (
    <section id="full-systems" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos de Sistemas Completos
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fullSystems.map((project, index) => (
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

export default FullSystems;
