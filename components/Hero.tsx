"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";

const phrases = ["<Desarrollador Frontend/>"];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="container flex flex-col-reverse md:flex-row items-center justify-between py-24 gap-12">
      <motion.div
        className="flex flex-col items-start space-y-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold ">
          <span className="gradient-wave-text text-shadow shadow-black/20">
            {text}
          </span>
          <span className="animate-pulse text-verde">|</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Especializado en crear experiencias digitales excepcionales y
          soluciones innovadoras que impulsan el éxito de los negocios.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button size="lg" asChild>
            <a href="#landing-pages" className="group">
              Ver mis proyectos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          {/* <Button variant="outline" size="lg">
            Descargar CV
          </Button> */}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* <div className="w-72 h-72 md:w-96 md:h-96 relative">
          <Image
            src="/placeholder.svg"
            alt="Tu Nombre"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full border-4 border-primary opacity-75"></div>
        </div> */}
      </motion.div>
    </section>
  );
}
