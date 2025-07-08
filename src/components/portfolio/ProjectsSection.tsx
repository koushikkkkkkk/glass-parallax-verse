import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "Drone Detectives",
      description: "Advanced drone detection system using machine learning algorithms for real-time UAV identification and tracking.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
      githubLink: "https://github.com/koushik/drone-detectives",
      demoLink: "https://drone-detectives-demo.com",
      status: "Live"
    },
    {
      id: 2,
      name: "Price Comparator",
      description: "Intelligent e-commerce price comparison platform with web scraping and real-time price alerts.",
      techStack: ["React", "Node.js", "MongoDB", "Python"],
      githubLink: "https://github.com/koushik/price-comparator",
      demoLink: "https://price-comparator-demo.com",
      status: "Live"
    },
    {
      id: 3,
      name: "Job Portal System",
      description: "Full-stack job portal with advanced matching algorithms, user authentication, and admin dashboard.",
      techStack: ["Java", "Spring Boot", "MySQL", "React"],
      githubLink: "https://github.com/koushik/job-portal",
      demoLink: null,
      status: "Development"
    },
    {
      id: 4,
      name: "Kubernetes Cluster Manager",
      description: "DevOps automation tool for managing Kubernetes clusters with Ansible integration and monitoring.",
      techStack: ["Go", "Kubernetes", "Ansible", "Docker"],
      githubLink: "https://github.com/koushik/k8s-manager",
      demoLink: null,
      status: "Open Source"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-electric-green/20 text-electric-green border-electric-green/30';
      case 'Development': return 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30';
      case 'Open Source': return 'bg-neon-purple/20 text-neon-purple border-neon-purple/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-transparent to-neon-purple/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-hover cursor-pointer transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-105' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Button>
                    {project.demoLink && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-primary/10"
                        onClick={() => window.open(project.demoLink, '_blank')}
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl gradient-text">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-hover border-primary/30"
            onClick={() => window.open('https://github.com/koushik', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;