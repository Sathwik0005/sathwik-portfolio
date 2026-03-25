
import { GraduationCap, Plus, Minus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const educationData = [
    {
        id: "item-1",
        degree: "MASTER OF SCIENCE (Msc)",
        institution: "Sheffield Hallam University",
        details: "Msc in Data Science and Artificial Intelligence",
        year: "September 2025 - Present",
        location: "Sheffield, South Yokshire, United Kingdom",
        gpa: ""
    },
    {
        id: "item-2",
        degree: "GRADUATION",
        institution: "Parul Institute of Engineering and Technology",
        details: "Bachelor of Technology in Computer Science and Engineering (AI) ",
        year: "September 2021 - March 2025",
        location: "Vadodara, Gujarat, India",
        gpa: "GPA: 7.50"
    },
    // {
    //     id: "item-3",
    //     degree: "INTERMEDIATE",
    //     institution: "Akshara Junior College",
    //     details: "MPC (Maths, Physics, Chemistry)",
    //     year: "Septmeber 2019 - March 2021",
    //     location: "Hyderabad, Telangana, India",
    //     gpa: "GPA: 9.54"
    // },
    // {
    //     id: "item-4",
    //     degree: "SSC",
    //     institution: "Krishnaveni Talent School",
    //     details: "Secondary School Certificate",
    //     year: "June 2018 - March 2019",
    //     location: "Mancherial, Telangana, India",
    //     gpa: "GPA: 8.8"
    // }
    
];

const Education = () => {
    return (
        <section id="education" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="mb-12 sm:mb-16">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        EDUCATION
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        My Education.
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                    {educationData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-none rounded-xl overflow-hidden bg-muted/30 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground px-3 sm:px-4 transition-all duration-300"
                        >
                            <AccordionTrigger className="group hover:no-underline py-4 sm:py-6 [&>svg]:hidden">
                                <div className="flex items-center gap-3 sm:gap-4 w-full text-left">
                                    <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 opacity-70 flex-shrink-0" />
                                    <span className="text-base sm:text-lg md:text-xl font-light tracking-wide uppercase">
                                        {item.degree}
                                    </span>
                                </div>
                                <div className="shrink-0 text-foreground/50 group-data-[state=open]:text-primary-foreground">
                                    <Plus className="w-5 sm:w-6 h-5 sm:h-6 block group-data-[state=open]:hidden transition-transform duration-300" />
                                    <Minus className="w-5 sm:w-6 h-5 sm:h-6 hidden group-data-[state=open]:block transition-transform duration-300" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 sm:pb-6">
                                <div className="space-y-3 sm:space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                                        {item.institution}
                                    </h3>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 text-sm sm:text-base opacity-90">
                                        <p>{item.details}</p>
                                        <p className="font-semibold whitespace-nowrap">{item.gpa}</p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs sm:text-sm opacity-80">
                                        <p>{item.year}</p>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Education;
