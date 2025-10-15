import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const EducationCard = ({ degree, institution, date, minor }) => (
    <motion.div 
        className="bg-white/5 p-6 rounded-lg border border-white/10"
        variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
    >
        <p className="text-sm text-gray-400">{date}</p>
        <h3 className="text-xl font-bold text-white mt-1">{degree}</h3>
        <p className="text-purple-300">{institution}</p>
        {minor && <p className="text-gray-300 mt-2 text-sm">{minor}</p>}
    </motion.div>
);

export default function Education() {
    const educationHistory = [
        {
            degree: "B.Tech: Electronics & Telecommunications Engineering",
            institution: "K. J. Somaiya College of Engineering, Mumbai",
            date: " May 2025",
            minor: "Minor in Computer Engineering: Computer Science"
        },
        {
            degree: "Minor in Finance",
            institution: "S. K. Somaiya, Mumbai",
            date: " May 2025",
        }
    ];

    return (
        <AnimatedSection className="py-24" id="education">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {educationHistory.map((edu, index) => <EducationCard key={index} {...edu} />)}
                </div>
            </div>
        </AnimatedSection>
    );
};
