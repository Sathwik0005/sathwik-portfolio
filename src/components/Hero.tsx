
import { Linkedin, Instagram, Github, Mail } from "lucide-react";
// Import the new component
import TypewriterAnimation from "./TypewriteAnimation";

const Hero = () => {
  const jobTitles = ["Full Stack Developer", "MSc Data Science & AI Student", "AI & Web Technologies Enthusiast"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Quote Section */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left space-y-3 px-2 sm:px-0">
              <p className="text-4xl sm:text-5xl text-muted-foreground">"</p>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                  No results? <span className="inline sm:ml-4 font-bold text-base sm:text-xl">Keep working.</span>
                </p>
                <p className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                  Bad results? <span className="inline sm:ml-4 font-bold text-base sm:text-xl">Keep working.</span>
                </p>
                <p className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wide">
                  Good results? <span className="inline sm:ml-4 font-bold text-base sm:text-xl">Keep working.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Center Hero Content */}
          <div className="lg:col-span-6 text-center space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-primary font-medium flex items-center justify-center gap-2">
                <span className="w-6 sm:w-8 h-[2px] bg-primary"></span>
                Hello There!
                <span className="w-6 sm:w-8 h-[2px] bg-primary"></span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-primary">Sathwik<br className="sm:hidden" /> Bandari</span>
              </h1>

              {/* === ANIMATION IMPLEMENTATION HERE === */}
              <TypewriterAnimation
                words={jobTitles}
                className="text-base sm:text-lg md:text-xl text-muted-foreground"
              />
              {/* ================================== */}

            </div>

            {/* Profile Image with Orange Circle - Responsive sizing */}
            <div className="relative inline-block mt-8 sm:mt-12 md:mt-16 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              {/* The Orange Circle (as a background element) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary z-0"></div>

              {/* The Profile Image (partially overlapping the circle, positioned above it) */}
              <img
                src="/sathwikphoto.png"
                alt="Profile"
                className="absolute bottom-[-25%] left-1/2 transform -translate-x-1/2 w-[120%] h-[120%] object-cover z-10"
              />
            </div>
          </div>

          {/* Right Social Section */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
            <div className="text-center lg:text-right space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-medium text-foreground">Follow me on</p>
              <div className="flex gap-2 sm:gap-3 justify-center lg:justify-end">
                <a
                  href="https://www.linkedin.com/in/sathwik-bandari/"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-foreground hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-background" />
                </a>
                <a
                  href="https://github.com/Sathwik0005/"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-foreground hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <Github className="w-4 sm:w-5 h-4 sm:h-5 text-background" />
                </a>
                <a
                  href="mailto:sathwik.sk5@gmail.com"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-foreground hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-background" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
