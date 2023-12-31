import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WhatsAppClone from "@/public/assets/whatsapp.png";
import GameHub from "@/public/assets/Game-Hub.png";
import ThreadClone from "@/public/assets/thread_clone.png";

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
    title: "Junior Full Stack Developer",
    location: "Karachi, Pakistan",
    description:
      "I worked as a front-end developer for 9 months at Codesy Consulting. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Nov 2023",
  },
  {
    title: "Web Developer Intern",
    location: "Karachi, Pakistan",
    description:
      "I started as a web developer intern showcasing and learning different technologies related to front end",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - Feb 2023",
  },
] as const;

export const projectsData = [
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
      "Engage in lively discussions with our Thread Clone platform! 🚀 Create threads, comment, and connect, capturing the essence of the original Threads app.",
      tags: [ "Next.js 14", "TypeScript", "Tailwind", "MongoDB", "Clerk", "Shadcn", "ZOD", "Uploadthing"],
    imageUrl: ThreadClone,
    link: "https://threads-clone-sz.vercel.app/"
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
  "Python",
  "Django",
  "Framer Motion",
] as const;