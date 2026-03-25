
import { Smartphone, Globe, Palette, Briefcase } from "lucide-react";

const servicesData = [
    {
        id: "item-1",
        icon: Globe,
        title: "Full Stack Development",
        description: "Building scalable web applications using React.js, Django, and REST APIs with efficient frontend-backend integration."
    },
    {
        id: "item-2",
        icon: Palette,
        title: "AI Chatbot Development",
        description: "Developing web and WhatsApp-based AI chatbots using Python, Flask, and APIs to automate interactions and enhance user engagement."
    },
    {
        id: "item-3",
        icon: Briefcase,
        title: "API Development",
        description: "Designing and integrating REST APIs for seamless data flow and efficient communication between systems."
    },
    {
        id: "item-4",
        icon: Smartphone,
        title: "Project Management",
        description: "End-to-end project delivery with agile methodologies and clear communication."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="mb-12 sm:mb-16">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        SERVICES
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        What I offer.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {servicesData.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group bg-muted/30 rounded-2xl p-6 sm:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-muted/50"
                            >
                                {/* Icon Container */}
                                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                                    <IconComponent className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
