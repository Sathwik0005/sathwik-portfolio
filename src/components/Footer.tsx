import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Education", href: "#education" },
    { label: "Highlights", href: "#highlights" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/sathwikbandari",
        icon: <Github className="w-4 h-4" />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/sathwikbandari",
        icon: <Linkedin className="w-4 h-4" />,
    },
    {
        label: "Email",
        href: "mailto:sathwik.sk5@gmail.com",
        icon: <Mail className="w-4 h-4" />,
    },
    {
        label: "Portfolio",
        href: "#",
        icon: <ExternalLink className="w-4 h-4" />,
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-primary/10">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                {/* Main footer content */}
                <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">

                    {/* Brand */}
                    <div className="sm:col-span-1">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            Sathwik Bandari
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                            Full-Stack Developer
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Building scalable web applications with React.js, Django & REST APIs. Currently pursuing MSc Data Science AI at Sheffield Hallam University.
                        </p>
                    </div>

                    {/* Nav links — 2-col grid to handle 8 items cleanly */}
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                            Navigation
                        </p>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social + availability */}
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                            Connect
                        </p>
                        <ul className="flex flex-col gap-2.5 mb-6">
                            {socialLinks.map((s) => (
                                <li key={s.label}>
                                    <a
                                        href={s.href}
                                        target={s.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {s.icon}
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Availability badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-muted/30">
                            <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
                            <span className="text-xs font-medium text-muted-foreground">Open to opportunities</span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-5 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                        © {year} Sathwik Bandari. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Built with <span className="text-primary">React.js</span> &amp; <span className="text-primary">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;