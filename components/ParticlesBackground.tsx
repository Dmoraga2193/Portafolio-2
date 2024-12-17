"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import type { ISourceOptions } from "tsparticles-engine";

const ParticlesBackground = () => {
  const { theme, systemTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("#000000");

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setParticleColor(currentTheme === "dark" ? "#ffffff" : "#000000");
  }, [theme, systemTheme]);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [particleColor]
  );

  return (
    <Particles
      key={theme}
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesBackground;
