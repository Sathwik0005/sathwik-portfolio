const filmStrips = [
    {
        id: 1,
        label: "KODAK 400",
        rotation: "-1.2deg",
        photos: [
            { src: "/sria-anniversary-grp.jpg", caption: "Sria Infotech Anniversary Celebration", num: "12" },
            { src: "/co-founder.jpg", caption: "Co-founder", num: "22" },
            { src: "/holi-celebrations.jpg", caption: "Holi Celebration at Office", num: "32" },
        ],
    },
    {
        id: 2,
        label: "KODAK PORTRA 400",
        rotation: "1deg",
        photos: [
            { src: "/team-meet.png", caption: "Collaborating with Team", num: "17" },
            { src: "/sria-anniversary.jpg", caption: "Sria Infotech Anniversary Celebration", num: "27" },
            { src: "/party.png", caption: "Birthday Party 🎂", num: "11" },
        ],
    },
    {
        id: 3,
        label: "KODAK 400",
        rotation: "-0.8deg",
        photos: [
            { src: "/welcoming-new-ceo.jpg", caption: "Welcoming New CEO", num: "14" },
            { src: "/team-outing.jpg", caption: "Team Outing", num: "41" },
            { src: "/birthday-celebrations.jpg", caption: "Team Birthday Celebration 🪔", num: "42" },
        ],
    },
];

const placeholderEmojis = [
    ["🎉", "🎂", "🌈"],
    ["💻", "📋", "🎂"],
    ["🏆", "🏕️", "🪔"],
];

const Perforations = () => (
    <div style={{ display: "flex", gap: "5px", flexShrink: 0, padding: "0 8px" }}>
        {[0, 1, 2].map(i => (
            <div key={i} style={{
                width: "9px", height: "11px",
                background: "#090705",
                borderRadius: "1.5px",
                border: "0.5px solid #2e2416",
            }} />
        ))}
    </div>
);

const FilmStrip = ({ strip, stripIndex }) => (
    <div style={{
        transform: `rotate(${strip.rotation})`,
        transformOrigin: "center center",
        margin: "0 -6px",
        position: "relative",
    }}>
        {/* Tape left */}
        <div style={{
            position: "absolute", top: "-9px", left: "50px", zIndex: 10,
            width: "54px", height: "20px",
            background: "rgba(195,172,110,0.38)",
            borderRadius: "2px",
            transform: "rotate(-1deg)",
        }} />
        {/* Tape right */}
        <div style={{
            position: "absolute", top: "-8px", right: "55px", zIndex: 10,
            width: "46px", height: "18px",
            background: "rgba(195,172,110,0.33)",
            borderRadius: "2px",
            transform: "rotate(1.5deg)",
        }} />

        {/* Film body */}
        <div style={{
            background: "#161108",
            borderRadius: "5px",
            overflow: "hidden",
            boxShadow: "0 6px 28px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
        }}>
            {/* Top strip — perfs + label */}
            <div style={{
                display: "flex", alignItems: "center", height: "22px",
                background: "#131009",
            }}>
                <Perforations />
                <div style={{
                    flex: 1, display: "flex", alignItems: "center",
                    gap: "20px", overflow: "hidden", padding: "0 4px",
                }}>
                    {[0, 1, 2].map(i => (
                        <span key={i} style={{
                            color: "#4a3820", fontSize: "7px",
                            fontFamily: "monospace", letterSpacing: "1.2px",
                            whiteSpace: "nowrap",
                        }}>
                            {strip.label}
                        </span>
                    ))}
                    {[43, 43].map((n, i) => (
                        <span key={`n${i}`} style={{
                            color: "#2e2416", fontSize: "7px",
                            fontFamily: "monospace",
                        }}>{n}</span>
                    ))}
                </div>
                <Perforations />
            </div>

            {/* Photos */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "5px",
                padding: "0 10px",
                background: "#161108",
            }}>
                {strip.photos.map((photo, pi) => (
                    <div key={pi} style={{ display: "flex", flexDirection: "column" }}>
                        {/* Frame counter */}
                        <div style={{
                            textAlign: "right",
                            fontSize: "6.5px", color: "#3a2c18",
                            fontFamily: "monospace", padding: "2px 2px 1px",
                        }}>{photo.num}</div>

                        {/* Image frame */}
                        <div style={{
                            position: "relative",
                            aspectRatio: "4/3",
                            background: "#0c0a06",
                            border: "2px solid #221a0e",
                            overflow: "hidden",
                        }}>
                            {photo.src ? (
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                            ) : (
                                <div style={{
                                    width: "100%", height: "100%",
                                    background: "linear-gradient(145deg, #1c1610 0%, #251e12 60%, #18130c 100%)",
                                    display: "flex", flexDirection: "column",
                                    alignItems: "center", justifyContent: "center", gap: "6px",
                                }}>
                                    <span style={{ fontSize: "32px", lineHeight: 1 }}>
                                        {placeholderEmojis[stripIndex]?.[pi] ?? "📷"}
                                    </span>
                                    <span style={{
                                        fontSize: "7px", color: "#3a2c18",
                                        fontFamily: "monospace", letterSpacing: "1px",
                                    }}>ADD PHOTO</span>
                                </div>
                            )}
                        </div>

                        {/* Caption */}
                        <div style={{
                            background: "#0c0a06",
                            borderTop: "1px solid #221a0e",
                            padding: "5px 6px 6px",
                        }}>
                            <p style={{
                                margin: 0,
                                fontSize: "9.5px",
                                color: "#c4a870",
                                fontFamily: "'Georgia', serif",
                                fontStyle: "italic",
                                textAlign: "center",
                                lineHeight: 1.35,
                                letterSpacing: "0.1px",
                            }}>
                                {photo.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom strip — perfs */}
            <div style={{
                display: "flex", alignItems: "center", height: "22px",
                background: "#131009",
            }}>
                <Perforations />
                <div style={{
                    flex: 1, display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "7px", padding: "0 4px",
                }}>
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} style={{
                            width: "6px", height: "7px",
                            background: "#090705",
                            borderRadius: "1px",
                            border: "0.5px solid #2e2416",
                            flexShrink: 0,
                        }} />
                    ))}
                </div>
                <Perforations />
            </div>
        </div>
    </div>
);

const ExperienceHighlights = () => (
    <section
        id="highlights"
        style={{ padding: "64px 0 72px", background: "hsl(var(--background))" }}
    >
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 16px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
                <h2 style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
                    color: "hsl(var(--foreground))",
                    margin: "0 0 10px",
                    letterSpacing: "-0.3px",
                }}>
                    Experience Highlights
                </h2>
                <p style={{
                    fontSize: "14px",
                    color: "hsl(var(--muted-foreground))",
                    maxWidth: "460px",
                    margin: "0 auto",
                    lineHeight: 1.65,
                }}>
                    Moments from my internship journey – team celebrations, culture &amp; memorable days.
                </p>
                <div style={{
                    width: "40px", height: "2px",
                    background: "hsl(var(--primary) / 0.55)",
                    borderRadius: "2px",
                    margin: "14px auto 0",
                }} />
            </div>

            {/* Strips */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                {filmStrips.map((strip, i) => (
                    <FilmStrip key={strip.id} strip={strip} stripIndex={i} />
                ))}
            </div>

            {/* Footer tag */}
            <p style={{
                textAlign: "center",
                fontSize: "10px",
                color: "hsl(var(--muted-foreground) / 0.4)",
                marginTop: "30px",
                fontFamily: "monospace",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
            }}>
                Sria Infotech Pvt Ltd · Jan – Jun 2025 · Hyderabad
            </p>
        </div>
    </section>
);

export default ExperienceHighlights;