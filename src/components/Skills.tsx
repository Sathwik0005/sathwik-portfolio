const skillCategories = [
    {
        id: "languages",
        label: "Programming Languages",
        dotColor: "#22d3ee",
        skills: [
            {
                name: "JavaScript",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M9.5 25.5l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7V16h2.8v7.9c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4.2-2.4zM19 25.2l2.3-1.3c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.2-1.8-3.2-4 0-2 1.5-3.5 3.8-3.5 1.7 0 2.9.6 3.7 2l-2.1 1.4c-.5-.8-1-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.3 1 3.5 2 3.5 4.2 0 2.4-1.9 3.7-4.4 3.7-2.4 0-4-1.2-4.8-2.7z" fill="#000"/></svg>
                ),
            },
            {
                name: "Python",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M15.9 3C10.2 3 10.6 5.5 10.6 5.5V8h5.5v.8H8.3S4 8.3 4 14.1s3.8 5.6 3.8 5.6h2.3v-2.7s-.1-3.8 3.7-3.8h6.4s3.6.1 3.6-3.5V6.4S23.3 3 15.9 3zm-3.5 2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#3776AB"/><path d="M16.1 29c5.7 0 5.3-2.5 5.3-2.5V24h-5.5v-.8h7.8s4.3.4 4.3-5.4-3.8-5.6-3.8-5.6h-2.3v2.7s.1 3.8-3.7 3.8H11.8s-3.6-.1-3.6 3.5v5.3S7.7 29 16.1 29zm3.5-2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#FFD43B"/></svg>
                ),
            },
            {
                name: "TypeScript",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="3" fill="#3178C6"/><path d="M18.6 22.5v2.6c.4.2.9.4 1.5.5.6.1 1.2.2 1.9.2.6 0 1.2-.1 1.8-.2.5-.1 1-.3 1.4-.6.4-.3.7-.7.9-1.1.2-.5.3-1 .3-1.7 0-.5-.1-.9-.2-1.3-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.7-.4-.2-.8-.4-1.4-.6-.4-.1-.7-.3-1-.4-.3-.1-.5-.2-.7-.3-.2-.1-.3-.2-.4-.4-.1-.1-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.2.3-.3.1-.1.3-.1.5-.2.2 0 .4-.1.6-.1.4 0 .8.1 1.3.2.4.1.9.4 1.3.7v-2.4c-.4-.2-.8-.3-1.3-.4-.5-.1-1-.1-1.5-.1-.6 0-1.2.1-1.7.2-.5.1-1 .3-1.4.6-.4.3-.7.6-.9 1.1-.2.5-.3 1-.3 1.6 0 .8.2 1.4.6 1.9.4.5 1.1.9 2 1.3.4.1.7.3 1 .4.3.1.5.2.7.4.2.1.3.3.4.4.1.2.1.3.1.5 0 .2 0 .4-.1.5-.1.2-.2.3-.3.4-.1.1-.3.2-.5.2-.2 0-.4.1-.7.1-.5 0-1-.1-1.5-.4-.5-.2-1-.5-1.4-.9zM12.3 17.4H15V15H7v2.4h2.7v8.1h2.6v-8.1z" fill="white"/></svg>
                ),
            },
            {
                name: "SQL",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#336791"/><text x="5" y="22" fontSize="13" fontWeight="bold" fill="white" fontFamily="monospace">SQL</text></svg>
                ),
            },
        ],
    },
    {
        id: "web",
        label: "Web Technologies",
        dotColor: "#4ade80",
        skills: [
            {
                name: "HTML5",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M4 2l2.4 27L16 32l9.6-3L28 2H4z" fill="#E44D26"/><path d="M16 29.4l7.8-2.2 2.1-23.2H16v25.4z" fill="#F16529"/><path d="M16 13.5h-4.1l-.3-3.3H16V6.9H8.1l.1 1.1 1 11.4H16v-5.9zm0 8.1l-.1.1-3.3-.9-.2-2.4H9.1l.4 4.8 6.4 1.8.1-.1v-3.3z" fill="#EBEBEB"/><path d="M16 13.5v5.9h3.8l-.4 4.1-3.4.9v3.3l6.4-1.8.9-10.4H16zm0-6.6v3.3h7.4l-.1-.9-.2-2.4H16z" fill="white"/></svg>
                ),
            },
            {
                name: "CSS3",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M4 2l2.4 27L16 32l9.6-3L28 2H4z" fill="#1572B6"/><path d="M16 29.4l7.8-2.2 2.1-23.2H16v25.4z" fill="#33A9DC"/><path d="M16 13.5h4.1l-.4 4.5-3.7 1v3.3l6.8-1.9 1.2-13.1H16v5.9h-4.1v.2H16zm-4.4-7.2H16V3H8.1l.8 9.5H16v-2.4h-4.3l-.1-3.8z" fill="#EBEBEB"/><path d="M16 18.1v-3.3l-3.3.9-.2-2.4H10l.4 4.8 5.6 1.5V18.1z" fill="white"/></svg>
                ),
            },
            {
                name: "Tailwind CSS",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 6.4c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.5 1.6 3.3 3.4 7.1 3.4 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2-1.5-1.6-3.3-3.4-7.1-3.4zM8 16c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3 2.2 1.5 1.6 3.3 3.4 7.1 3.4 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3-2.2C18.6 17.8 16.8 16 13 16z" fill="#38BDF8"/></svg>
                ),
            },
            {
                name: "React.js",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><circle cx="16" cy="16" r="2.8" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/></svg>
                ),
            },
            {
                name: "Django",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#092E20"/><path d="M17.5 5h3v15.5c-1.5.3-2.6.4-3.8.4-3.6 0-5.4-1.6-5.4-4.8 0-3 1.9-5 4.9-5 .5 0 .9.1 1.3.2V5zm0 9.2c-.3-.1-.6-.2-1-.2-1.5 0-2.3.9-2.3 2.6 0 1.6.8 2.5 2.3 2.5.3 0 .6 0 1-.1v-4.8zM22 11.5h3V22h-3V11.5z" fill="#44B78B"/></svg>
                ),
            },
            {
                name: "Flask",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#1a1a1a"/><path d="M11 8l1 3H9l5 13 5-13h-3l1-3h-6z" fill="white" opacity="0.85"/></svg>
                ),
            },
            {
                name: "Bootstrap",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="6" fill="#7952B3"/><path d="M9 7h8.5c3.5 0 5.5 1.8 5.5 4.5 0 2-1.1 3.3-2.8 3.8 2.2.4 3.8 1.9 3.8 4.2 0 3-2.2 5-6 5H9V7zm4 6.5h4c1.3 0 2-.6 2-1.8s-.7-1.7-2-1.7h-4v3.5zm0 7h4.5c1.5 0 2.3-.7 2.3-2s-.8-2-2.3-2H13v4z" fill="white"/></svg>
                ),
            },
            {
                name: "REST APIs",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#FF6B35"/><text x="4" y="21" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">REST</text></svg>
                ),
            },
        ],
    },
    {
        id: "databases",
        label: "Databases",
        dotColor: "#a78bfa",
        skills: [
            {
                name: "MySQL",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M3 22.5c1.5 0 2.6-.1 3.5-.4.3-.1.7-.3.8-.6l.1-.5v-8.8l.1-.1c.4-.2 1.3.6 1.7 1l3.3 4.2c1 1.3 2 2.6 3 3.5.6.5 1.1.8 1.8.9h3.5c.7-.1 1.1-.4 1.1-.8 0-.3-.2-.5-.5-.8l-.7-.6-1.8-2-2.7-3.5c-.4-.5-.8-1-1.3-1.4l-.1-.1c.7-.8 1.4-1.6 2.1-2.5l2.9-3.3.9-1c.3-.4.4-.7.3-1-.1-.3-.5-.4-.9-.4h-3.2c-.7 0-1.1.3-1.5.7l-4 5.1-1.1-1.6V9.5c0-.7-.3-1.1-.9-1.1H7.1c-.5 0-.8.2-.8.7 0 .4.2.7.6 1 .8.5 1.1 1.1 1.1 2v8.5c-.1.5-.4.8-.8 1H3v1z" fill="#00758F"/><path d="M27.5 22.5h-2c-.5 0-.9-.3-1.3-.7l-5.6-7.5 1.5-1.8 5.2 7c.2.3.4.5.6.5h1.8l-.2 2.5z" fill="#F29111"/></svg>
                ),
            },
            {
                name: "SQLite",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><rect width="32" height="32" rx="4" fill="#003B57"/><text x="4" y="21" fontSize="9" fontWeight="bold" fill="#7AC" fontFamily="monospace">SQLite</text></svg>
                ),
            },
        ],
    },
    {
        id: "tools",
        label: "Tools & Platforms",
        dotColor: "#fb923c",
        skills: [
            {
                name: "Git",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M30 14.6L17.4 2c-.8-.8-2-.8-2.8 0l-2.8 2.8 3.5 3.5c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.6 1 1 1 2.6 0 3.5-1 1-2.6 1-3.5 0-.7-.7-.9-1.8-.5-2.6l-3.2-3.2v8.4c.2.1.5.3.7.5 1 1 1 2.6 0 3.5-1 1-2.6 1-3.5 0-1-1-1-2.6 0-3.5.2-.2.5-.4.8-.5V13c-.3-.1-.6-.3-.8-.5-.7-.7-.9-1.8-.5-2.6L10.8 6.5 2 15.3c-.8.8-.8 2 0 2.8l12.6 12.6c.8.8 2 .8 2.8 0L30 17.4c.8-.8.8-2.1 0-2.8z" fill="#F34F29"/></svg>
                ),
            },
            {
                name: "GitHub",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.4.1 2.1 1.4 2.1 1.4 1.2 2.1 3.2 1.5 4 1.1.1-.9.5-1.5.9-1.8-3.1-.4-6.3-1.5-6.3-6.8 0-1.5.5-2.7 1.4-3.7-.1-.4-.6-1.7.1-3.6 0 0 1.1-.4 3.7 1.4 1.1-.3 2.2-.5 3.3-.5s2.2.2 3.3.5c2.6-1.7 3.7-1.4 3.7-1.4.7 1.9.2 3.2.1 3.6.9 1 1.4 2.2 1.4 3.7 0 5.3-3.2 6.4-6.3 6.8.5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z" fill="white"/></svg>
                ),
            },
            {
                name: "VS Code",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M24 3l-9 9-5-4.5L3 11v10l7 3.5 5-4.5 9 9 6-3V6l-6-3z" fill="#007ACC"/><path d="M3 11v10l7 3.5V7.5L3 11zm21-8l-9 9 5 5 4-2V5l-4-2zm-9 9l-5 5 5 5 9-9-9-9-5 5 5 5z" fill="white" opacity="0.5"/></svg>
                ),
            },
            {
                name: "Postman",
                icon: (
                    <svg viewBox="0 0 32 32" className="w-5 h-5"><circle cx="16" cy="16" r="14" fill="#FF6C37"/><path d="M22.5 13c-.4-3.5-3.3-6-6.5-6-3.9 0-7 3.1-7 7s3.1 7 7 7c2.9 0 5.4-1.8 6.5-4.3" fill="none" stroke="white" strokeWidth="1.5"/><path d="M19 16l-5-3v6l5-3z" fill="white"/></svg>
                ),
            },
        ],
    },
];

const dotColors = {
    "#22d3ee": "shadow-cyan-400",
    "#4ade80": "shadow-green-400",
    "#a78bfa": "shadow-violet-400",
    "#fb923c": "shadow-orange-400",
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        WHAT I WORK WITH
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Skills &amp; Technologies
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
                        The tools and technologies I use to build modern, full-stack web applications.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-col gap-10 sm:gap-14">
                    {skillCategories.map((category) => (
                        <div key={category.id}>
                            {/* Category label */}
                            <div className="flex items-center gap-3 mb-6">
                                <span
                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                    style={{
                                        backgroundColor: category.dotColor,
                                        boxShadow: `0 0 8px ${category.dotColor}`,
                                    }}
                                />
                                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/80">
                                    {category.label}
                                </span>
                                <div className="flex-1 h-px bg-primary/10" />
                            </div>

                            {/* Skill pills */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-primary/15 bg-muted/30 hover:bg-muted/60 hover:border-primary/35 transition-all duration-200 cursor-default"
                                    >
                                        <span className="flex-shrink-0">{skill.icon}</span>
                                        <span className="text-sm font-semibold text-foreground/90 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;