import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Tradr",
        description: "A website that allows users to upload and trade items with one another.",
        video: "/projects/tradr.mp4",
        tags: ["Vue.js", "Express","Bootstrap"],
        githubURL: "#"
    },
    {
        id: 2,
        title: "Avoido",
        description: "A smartstick application using a microcontroller and sensors to alert visually impaired users of incoming obstacles.",
        video: "/projects/avoido.mp4",
        tags: ["Flutter", "Arduino", "C++"],
        githubURL: "#"

    },
    {
        id: 3,
        title: "OmniArt",
        description: "A web application that serves as a digital art gallery",
        video: "/projects/omniart.mp4",
        tags: ["C#", "HTML"],
        githubURL: "#"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted foreground mb-12 max-w-2xl mx-auto">
                    Here are my projects. Each project was carefully created 
                    with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                            <div 
                                key={key} 
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <video
                                        src={project.video} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.githubURL} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="text-center mt-12">
                        <a 
                            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                            target="_blank"
                            href="https://github.com/cmoralescerna"
                        > 
                            Check My Github <ArrowRight size={16}/>
                        </a>
                    </div>
            </div>
        </section>
    )
};