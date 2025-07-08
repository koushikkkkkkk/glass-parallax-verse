import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TechStackSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const techCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "JavaScript", level: 88, icon: "🟨" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 87, icon: "⚛️" },
        { name: "HTML/CSS", level: 92, icon: "🎨" },
        { name: "TypeScript", level: 82, icon: "🔷" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
      ]
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "Node.js", level: 83, icon: "🟢" },
        { name: "Docker", level: 88, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "☸️" },
        { name: "Ansible", level: 75, icon: "🔄" },
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "🔧" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "SQL", level: 87, icon: "📊" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const skills: Record<string, number> = {};
      techCategories.forEach(category => {
        category.skills.forEach(skill => {
          skills[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(skills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      title: "Vice Chairperson",
      organization: "IEEE SB VCE",
      description: "Leading technical initiatives and organizing workshops for 200+ members",
      year: "2024"
    },
    {
      title: "Head of Competitive Programming",
      organization: "DSAC IT Club",
      description: "Mentoring students in algorithmic problem solving and contest preparation",
      year: "2023"
    },
    {
      title: "Open Source Contributor",
      organization: "Multiple Projects",
      description: "Contributing to various open-source projects and maintaining personal repositories",
      year: "2023"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="glass-hover transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    <Progress 
                      value={animatedSkills[skill.name] || 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Key <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="glass-hover transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <span className="text-xs text-primary font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent">
                    {achievement.organization}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "GitHub Repos", value: "25+" },
            { label: "Lines of Code", value: "50K+" },
            { label: "Years Experience", value: "3+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass p-6 rounded-lg transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;