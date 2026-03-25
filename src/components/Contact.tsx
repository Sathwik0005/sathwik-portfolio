import { useState } from "react";
import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const { name, email, subject, message } = form;
        const text = `Hi Sathwik!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0A%0A${encodeURIComponent(message)}`;
        window.open(`https://wa.me/447300329931?text=${text}`, "_blank");
    };

    return (
        <section id="contact" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                {/* Header */}
                <div className="mb-12 sm:mb-16 text-center">
                    <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        CONTACT
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Let's Connect.
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                        Ready to collaborate, discuss opportunities, or just have a great conversation?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">

                    {/* LEFT — WhatsApp Form (spans 2 cols) */}
                    <div className="lg:col-span-2 rounded-2xl bg-muted/30 border border-primary/10 p-6 sm:p-8">
                        {/* Form header */}
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <MessageCircle className="w-5 h-5 text-primary" />
                            <h3 className="text-base sm:text-lg font-bold">Send WhatsApp Message</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Name + Email row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-primary/15 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-primary/15 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/15 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project, idea, or just say hello!"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-primary/15 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                onClick={handleWhatsApp}
                                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Send via WhatsApp
                            </button>
                        </div>
                    </div>

                    {/* RIGHT — Profile + Get In Touch */}
                    <div className="flex flex-col gap-4 sm:gap-5">

                        {/* Profile card */}
                        <div className="rounded-2xl bg-muted/30 border border-primary/10 p-6 flex flex-col items-center text-center">
                            {/* Avatar with online dot */}
                            <div className="relative mb-4">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 bg-muted">
                                    {/* Placeholder avatar — swap src for real photo */}
                                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary">
                                        SB
                                    </div>
                                </div>
                                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-background" />
                            </div>
                            <h3 className="font-bold text-base sm:text-lg text-foreground">Sathwik Bandari</h3>
                            <p className="text-xs text-muted-foreground mt-1 mb-5">Available for opportunities</p>

                            {/* Buttons */}
                            <div className="flex gap-3 w-full">
                                <a
                                    href="/Sathwik_Bandari_FullStack_Developer.pdf"
                                    download
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-primary/30 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    Resume
                                </a>
                                <a
                                    href="mailto:sathwik.sk5@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-primary/15 bg-muted/40 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-200"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Mail Me
                                </a>
                            </div>
                        </div>

                        {/* Get In Touch card */}
                        <div className="rounded-2xl bg-muted/30 border border-primary/10 p-6">
                            <h3 className="font-bold text-sm sm:text-base text-foreground mb-4">Get In Touch</h3>
                            <div className="flex flex-col gap-3">
                                {/* Email */}
                                <a
                                    href="mailto:sathwik.sk5@gmail.com"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/25 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                                        <p className="text-xs font-medium text-foreground">sathwik.sk5@gmail.com</p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a
                                    href="tel:+447300329931"
                                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/25 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Phone</p>
                                        <p className="text-xs font-medium text-foreground">+44 7300 329931</p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-primary/10">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                                        <p className="text-xs font-medium text-foreground">Sheffield, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;