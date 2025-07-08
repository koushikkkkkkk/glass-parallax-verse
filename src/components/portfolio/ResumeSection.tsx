import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResumeSection = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would download an actual PDF
    // For demo purposes, we'll show an alert
    alert('Resume download would start here. Please replace with actual PDF link.');
  };

  const resumeHighlights = [
    {
      category: "Education",
      details: [
        "B.Tech in Computer Science Engineering",
        "Specialized in AI/ML and Software Development",
        "Strong foundation in Data Structures & Algorithms"
      ]
    },
    {
      category: "Leadership",
      details: [
        "Vice Chairperson - IEEE SB VCE",
        "Head of Competitive Programming - DSAC IT Club",
        "Organized multiple technical workshops and events"
      ]
    },
    {
      category: "Technical Skills",
      details: [
        "Full-stack development with React, Node.js",
        "DevOps with Docker, Kubernetes, Ansible",
        "Machine Learning with Python, TensorFlow"
      ]
    },
    {
      category: "Projects",
      details: [
        "Drone Detection System with ML integration",
        "E-commerce Price Comparison Platform",
        "Job Portal with Advanced Matching Algorithms"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical journey, achievements, and expertise
          </p>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text mb-2">
                Koushik Kattamuri
              </CardTitle>
              <p className="text-muted-foreground">
                Software Developer | IEEE Vice Chairperson | Tech Enthusiast
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resumeHighlights.map((section, index) => (
                  <div
                    key={section.category}
                    className="space-y-4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 glass p-6 rounded-lg">
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-1">Download Full Resume</h3>
              <p className="text-sm text-muted-foreground">
                Get the complete PDF version with detailed experience and projects
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow"
              onClick={handleDownloadResume}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for specific information? Feel free to{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary hover:underline animated-underline"
            >
              reach out
            </button>
            {' '}for a detailed discussion about my experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;