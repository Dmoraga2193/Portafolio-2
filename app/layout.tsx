import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portfolio Profesional",
  description:
    "Portfolio personal de desarrollo web y diseño de experiencias digitales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesBackground />
          <div className="relative z-10">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
