import React from "react";
import { Box, Typography, LinearProgress, Grid } from "@mui/material";

const SkillsSection = () => {
    const skills = [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap 5", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "C Language", level: 95 },
        { name: "React", level: 85 },
    ];

    return (
        <Box
            sx={{
                padding: { xs: "20px 10px", sm: "30px 20px", md: "50px 50px", lg: "50px 150px" },
                color: "#fff",
                marginTop: "50px"
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className="skill-sub-heading" gutterBottom>
                        All the skills that I have in that field of work are mentioned.
                    </Typography>
                    <Typography variant="body1" sx={{textAlign:"justify"}} className="skill-sub-text" gutterBottom>
                    I am a passionate and dedicated fresher in web development with a solid foundation in HTML, CSS, and JavaScript. Proficient in React for building dynamic user interfaces and experienced with jQuery for interactive website functionality. My technical skills also include C programming, showcasing my problem-solving and logical thinking abilities. I enjoy creating responsive and user-friendly web applications with a focus on clean design and functionality. Always eager to learn and grow, I am excited to contribute to innovative projects and expand my expertise in the field.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    {skills.map((skill, index) => (
                        <Box display="flex" alignItems="center" mb={2} key={index}>
                            <Box width="100%">
                                <Typography variant="body1" className="skill-name" style={{ color: "#fff" }}>
                                    {skill.name}
                                </Typography>
                                <Box width="100%" display="flex" alignItems="center">
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        style={{
                                            height: 6,
                                            width: "100%",
                                            marginRight: "10px",
                                            backgroundColor: "#333",
                                        }}
                                        sx={{ "& .MuiLinearProgress-bar": { backgroundColor: "#FFD700" } }}
                                    />
                                    <Typography
                                        variant="body2"
                                        style={{ color: "#FFD700", minWidth: "35px", textAlign: "right" }}
                                    >
                                        {skill.level}%
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default SkillsSection;
