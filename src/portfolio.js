/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aashish Pandey",
  title: "Hi all, I'm Aashish",
  subTitle: emoji(
   "An Aspiring Software Developer 🤖🎓. Passionate about problem-solving and innovation 💡. Skilled in C++, Python, JavaScript, React, and Web Dev. Love collaborating on exciting projects. Check out my work and connect with me! 🚀"),
  resumeLink:
  "https://drive.google.com/file/d/1s0aSrIqpF-vOhYT7IikWf80TYukyf2q9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aashishcoder",
  linkedin: "https://www.linkedin.com/in/aashishp234/",
  gmail: "aashishpandey234@gmail.com",
  gitlab: "https://gitlab.com/aashishcoder",
  twitter: "https://x.com/aashishpandey24",
  //medium: " ",
  //stackoverflow: " ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Innovating AI-driven solutions for real-world problems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Khwaja Moinuddin Chishti Language University",
      logo: require("./assets/images/kmc.png"),
      subHeader: "Bachelor of Technology in Computer Science Engineering (AI & ML)",
      duration: "October 2020 - June 2024",
      desc: "CGPA : 7.68 ",
      descBullets: [
        "Pursued B.Tech CSE with Specialization in (Artificial Intelligence and Machine Learning) with an Cumulative Grade Point Of 7.68 up to 8 Semesters. ",
        
      ]
    },
    {
      schoolName: "Assisi Convent Sr.Sec. School Etah",
      logo: require("./assets/images/acs.png"),
      subHeader: "Class XII - PCM C++",
      duration: "April 2018 - April 2019",
    },
    {
      schoolName: "Assisi Convent Sr.Sec. School Etah",
      logo: require("./assets/images/acs.png"),
      subHeader: "Class X",
      duration: "April 2016 - April 2017",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Rookie Developer",
      company: "Timechain Labs",
      companylogo: require("./assets/images/tc.jpeg"),
      date: "June 2024 – Present",
      desc: " Internship ",
      descBullets:[
         "Timechain Summer of Code is a 120-day open source program where contributors selected will contribute to BSV projects for Timechain Labs and Partner Organizations.",
      ]
    },
    {
      role: "Subject Matter Expert- Advanced Maths",
      company: "Chegg India",
      companylogo: require("./assets/images/chg1.jpg"),
      date: "April 2023 – June 2024",
      desc: "Freelance",
      descBullets: [
        "Ensured the accuracy and reliability of mathematical models through quality assurance processes, reducing errors by 15%.",
        "Mentored and guided students in tackling advanced mathematics challenges"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "COMING SOON !",
  projects: [
    {
      image: require("./assets/images/cs.png"),
      projectName: " ",
      projectDesc: " Coming Soon ! ",
      footerLink: [
        {
          name: " ..... ",
          url: " "
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cs.png"),
      projectName: " ",
      projectDesc: " Coming Soon ! ",
      footerLink: [
        {
          name: " ..... ",
          url: " "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Project Management: Professional Certificate",
      subtitle:
        "Google Project Management: by Google on Coursera. Certificate earned at June 1, 2024.",
      image: require("./assets/images/gpm.png"),
      imageAlt: "Google Project Management Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/JMFH6PSDRNNU"
        },
        {
          name: "Verify Certificate",
          url: "https://coursera.org/verify/professional-cert/JMFH6PSDRNNU"
        }
      ]
    },
    {
      title: "Meta: Python Programming",
      subtitle:
        "Meta Python programming: by Meta on Coursera. Certificate earned on June 16, 2023.",
      image: require("./assets/images/meta.webp"),
      imageAlt: "Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/AUYLW7KDNFTN"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: " ",
//       title: " ",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9389148719",
  email_address: "aashishpandey234@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "aashishpandey24", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
