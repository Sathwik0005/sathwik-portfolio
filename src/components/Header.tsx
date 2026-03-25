import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const navLinks = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Services",
    "Education",
    "Highlights",
    "Contact",
  ];
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      const sections = navLinks.map((link) => link.toLowerCase());

      let currentSection = sections[0];
      let maxVisibility = 0;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0),
          );
          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = section;
          }
        }
      });

      const topSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (topSection) {
        setActiveSection(topSection);
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold text-foreground">
              Sathwik.
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === link.toLowerCase()
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Resume Download — desktop */}
            <a
              href="/Sathwik_Bandari_FullStack_Developer.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Contact Me — desktop */}
            <Button
              onClick={scrollToContact}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              Contact Me
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onClick={handleNavClick}
                      className={`text-base font-medium transition-colors py-2 ${
                        activeSection === link.toLowerCase()
                          ? "text-primary border-l-2 pl-2 border-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link}
                    </a>
                  ))}

                  {/* Resume download — mobile */}
                  <a
                    href="/Sathwik_Bandari_FullStack_Developer.pdf"
                    download
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-primary/30 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 mt-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>

                  <Button
                    onClick={() => {
                      scrollToContact();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full mt-1"
                  >
                    Contact Me
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;