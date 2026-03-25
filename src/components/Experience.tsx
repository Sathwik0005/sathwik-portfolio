
import { Briefcase } from "lucide-react";

const experienceData = [
    
    {
        id: "item-1",
        type: "INTERNSHIP",
        role: "Full Stack Developer",
        company: "Sria Infotech Private Limited",
        details: "Built and deployed a ticket management platform using React.js, Django, and REST APIs, improving workflow efficiency and performance.",
        year: "Jan 2025 — June 2025",
        location: "Hyderabad, Telangana",
    },
    {
        id: "item-2",
        type: "INTERNSHIP",
        role: "Frontend Developer",
        company: "Sria Infotech Private Limited",
        details: "Developed responsive UI components and improved user experience using HTML, CSS, and JavaScript.",
        year: "May 2024 — June 2024",
        location: "Hyderabad, Telangana",
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="mb-8 sm:mb-12">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        EXPERIENCE
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        My journey.
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-primary/30"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8 sm:space-y-12">
                        {experienceData.map((item) => (
                            <div key={item.id} className="relative pl-20 sm:pl-24">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-1 w-4 sm:w-5 h-4 sm:h-5 bg-primary rounded-full border-4 border-background ring-2 ring-primary"></div>

                                {/* Card */}
                                <div className="bg-muted/30 rounded-xl p-4 sm:p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                                    {/* Type Badge */}
                                    <div className="inline-block mb-3 sm:mb-4">
                                        <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                                            {item.type}
                                        </span>
                                    </div>

                                    {/* Role */}
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground">
                                        {item.role}
                                    </h3>

                                    {/* Company */}
                                    <p className="text-base sm:text-lg text-muted-foreground font-medium mb-2">
                                        {item.company}
                                    </p>

                                    {/* Year and Location */}
                                    <div className="flex flex-col gap-1 sm:gap-2 text-sm sm:text-base text-muted-foreground mb-3">
                                        <p>{item.year}</p>
                                        <p>{item.location}</p>
                                    </div>

                                    {/* Details */}
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed opacity-90">
                                        {item.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
