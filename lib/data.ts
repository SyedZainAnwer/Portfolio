import React from "react";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import WhatsAppClone from "@/public/assets/whatsapp.png";
import GameHub from "@/public/assets/Game-Hub.png";
import ThreadClone from "@/public/assets/thread_clone.png";
import ThoughtTangle from "@/public/assets/thought_tangle.png";
import Feedback from "@/public/assets/Untitled.png"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
  {
    title: "Student Software Developer",
    location: "Ingolstadt, Germany",
    description: "Development of research Success AI project (Moodle) to enhance student learning experiences.",
    icon: React.createElement(FaPython),
    date: "May 2024 - Present"
  },
  {
    title: "Junior Web Developer",
    location: "Karachi, Pakistan",
    description:
      "Contributed to the development of a social media platform using Next.js, TypeScript, and Tailwind CSS.",
    icon: React.createElement(SiTypescript),
    date: "Mar 2023 - Nov 2023",
  },
  {
    title: "Web Developer Intern",
    location: "Karachi, Pakistan",
    description:
      "Played a significant role in developing the frontend of an internal company project using ReactJS.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Feb 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Feedback",
    description: "Developed a personal project enabling THI university students to post anonymous feedback about their university experience, while limiting non-THI users to view-only access.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "JWT"],
    imageUrl: Feedback,
    link: "https://feedback-sz.vercel.app/"
  },
  {
    title: "WhatsApp Clone",
    description:
      "Dive into group chats with my WhatsApp clone, crafted using React.js and Firebase. A practice project that helped me understand how basic chat application works.",
    tags: ["React", "JavaScript", "CSS", "Firebase"],
    imageUrl: WhatsAppClone,
    link: "https://whats-app-clone-6c7c2.web.app/"
  },
  {
    title: "GameHub",
    description:
      "Explore tailored gaming recommendations on my site, using the RAWG API. Simply filter by genre, platform, and release date to find your ideal game!",
    tags: ["React", "Axios", "Chakra UI", "TypeScript", "Framer Motion"],
    imageUrl: GameHub,
    link: "https://game-hub-syedzainanwer.vercel.app/"
  },
  {
    title: "Thread Clone",
    description:
      "Engage in lively discussions with my Thread Clone platform! 🚀 Create threads, comment, and connect, capturing the essence of the original Threads app.",
      tags: [ "Next.js 14", "TypeScript", "Tailwind", "MongoDB", "Clerk", "Shadcn", "ZOD", "Uploadthing"],
    imageUrl: ThreadClone,
    link: "https://threads-clone-sz.vercel.app/"
  },
  {
    title: "Thought Tangle",
    description:
      "Connect with fellow chat participants to engage in discussions on topics that interest you. Share your thoughts and interact with others who share similar interests",
      tags: [ "Django", "HTML", "CSS", "REST API", "SQLite"],
    imageUrl: ThoughtTangle,
    link: "https://github.com/SyedZainAnwer/Thought-Tangle"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Postgresql",
  "Python",
  "Flask",
  "Framer Motion",
  "Docker"
] as const;