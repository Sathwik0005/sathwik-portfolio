import { ExternalLink, X, Target, Zap, Star } from "lucide-react";
import { useState } from "react";

const nxdeskDetail = {
    challenge: {
        icon: <Target className="w-4 h-4" />,
        title: "The Challenge",
        content: "Support teams were overwhelmed with a bloated ticket creation process — 8 required fields slowed down agents, while the lack of a unified platform made tracking, ownership, and resolution painful and inconsistent."
    },
    solution: {
        icon: <Zap className="w-4 h-4" />,
        title: "The Solution",
        content: "Built NxDesk, a full-stack ticket management platform from scratch using React.js and Django. Delivered a production-ready MVP within 6 months in an Agile environment — handling everything from architecture and REST API design to deployment and team mentorship."
    },
    features: {
        icon: <Star className="w-4 h-4" />,
        title: "Key Features & Impact",
        items: [
            "Reduced ticket creation time by 40% by simplifying the workflow from 8 fields to 2, in collaboration with the founder",
            "Improved page load speed by 30% through modular, reusable React components with optimized rendering",
            "Built and integrated REST APIs for seamless frontend-backend communication and efficient data handling",
            "Mentored 3 junior developers on Claude AI prompt engineering — enabling 100% contribution to live modules within 2 weeks",
            "Deployed on client servers, ensuring production stability, debugging issues, and maintaining live performance",
            "Presented the tech stack during client demo and received CEO appreciation for full project ownership and delivery",
        ]
    }
};

const projectsData = [
    {
        id: "item-1",
        title: "NxDesk",
        description: "A production-ready ticket management platform built end-to-end during internship. Reduced ticket creation time by 40%, improved page load speed by 30%, and deployed on client servers with full production stability.",
        technologies: ["React.js", "Django", "REST APIs", "SQL"],
        link: "",
        hasDetail: true
    },
    {
        id: "item-2",
        title: "Sria Infotech Website",
        description: "Developed 5 product-specific pages for a company website, improving content structure and user navigation. Implemented responsive UI components ensuring compatibility across devices and a consistent user experience.",
        technologies: ["React.js", "TypeScript", "HTML", "CSS"],
        link: "https://sriainfotech.com"
    },
    {
        id: "item-3",
        title: "AI Sales Chatbot",
        description: "A WhatsApp-based AI chatbot to automate customer queries and support sales interactions. Built on a webhook architecture for real-time message handling, integrating Google Gemini API to generate context-aware responses using domain-specific knowledge.",
        technologies: ["Python", "Flask", "Gemini API", "WhatsApp Cloud API"],
        link: "",
        inProgress: true
    },
];

const NxDeskModal = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/20"
                style={{
                    background: "hsl(var(--background))",
                    boxShadow: "0 0 60px rgba(0,0,0,0.5), 0 0 0 1px hsl(var(--primary)/0.1)"
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                    style={{ background: "hsl(var(--muted)/0.5)" }}
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Featured Project</p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">NxDesk</h2>
                        <p className="text-sm text-muted-foreground">Ticket Management Platform · Sria Infotech Pvt Ltd · Jan–Jun 2025</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["React.js", "Django", "REST APIs", "SQL"].map((t) => (
                                <span key={t} className="px-3 py-1 rounded-full bg-muted border border-primary/20 text-xs font-medium text-muted-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* The Challenge */}
                    <div className="mb-4 rounded-xl p-5 border border-primary/10" style={{ background: "hsl(var(--muted)/0.3)" }}>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-primary">{nxdeskDetail.challenge.icon}</span>
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{nxdeskDetail.challenge.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{nxdeskDetail.challenge.content}</p>
                    </div>

                    {/* The Solution */}
                    <div className="mb-4 rounded-xl p-5 border border-primary/10" style={{ background: "hsl(var(--muted)/0.3)" }}>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-primary">{nxdeskDetail.solution.icon}</span>
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{nxdeskDetail.solution.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{nxdeskDetail.solution.content}</p>
                    </div>

                    {/* Key Features */}
                    <div className="rounded-xl p-5 border border-primary/10" style={{ background: "hsl(var(--muted)/0.3)" }}>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary">{nxdeskDetail.features.icon}</span>
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{nxdeskDetail.features.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {nxdeskDetail.features.items.map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [showNxDesk, setShowNxDesk] = useState(false);

    return (
        <section id="projects" className="py-16 sm:py-20 bg-background">
            {showNxDesk && <NxDeskModal onClose={() => setShowNxDesk(false)} />}

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="mb-12 sm:mb-16">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        PROJECTS
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Featured work.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-muted/30 rounded-2xl p-6 sm:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-muted/50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                                    {project.inProgress ? "In Progress" : "Featured"}
                                </span>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-5 sm:w-6 h-5 sm:h-6" />
                                    </a>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
                                {project.description}
                            </p>

                            {/* Footer row */}
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted border border-primary/20 text-xs sm:text-sm font-medium text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.hasDetail && (
                                    <button
                                        onClick={() => setShowNxDesk(true)}
                                        className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-xs font-semibold text-primary hover:bg-primary hover:text-background transition-all duration-200"
                                    >
                                        View Details
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;