import AWS from './app/assets/Images/images/project-images/cloud-computing&devOps/aws-cloud-devOps/aws.png'
import Terraform from './app/assets/Images/images/project-images/cloud-computing&devOps/aws-cloud-devOps/terraform.png'
import Jenkins from './app/assets/Images/images/project-images/cloud-computing&devOps/aws-cloud-devOps/jenkins.jpg'
import Docker from './app/assets/Images/images/project-images/cloud-computing&devOps/aws-cloud-devOps/docker.png'
import Kubernetes from './app/assets/Images/images/project-images/cloud-computing&devOps/aws-cloud-devOps/kubernetes.png'
import Azure from './app/assets/Images/images/project-images/cloud-computing&devOps/azure-cloud-devOps/azure.png'
import Google from './app/assets/Images/images/project-images/cloud-computing&devOps/google-cloud-devOps/google-cloud.png'
import ReactNative from './app/assets/Images/images/project-images/mobile-app-development/react-native-development/react-native.png'
import Expo from './app/assets/Images/images/project-images/mobile-app-development/react-native-development/expo.png'
import Firebase from './app/assets/Images/images/project-images/mobile-app-development/react-native-development/firebase.png'
import JavaScript from './app/assets/Images/images/project-images/mobile-app-development/react-native-development/javascript.png'
import Redux from './app/assets/Images/images/project-images/mobile-app-development/react-native-development/redux.png'
import Flutter from './app/assets/Images/images/project-images/mobile-app-development/google-flutter-developer/flutter.png'
import Dart from './app/assets/Images/images/project-images/mobile-app-development/google-flutter-developer/dart.png'
import Bloc from './app/assets/Images/images/project-images/mobile-app-development/google-flutter-developer/bloc.png'
import Google_Play_Services from './app/assets/Images/images/project-images/mobile-app-development/google-flutter-developer/google-play-services.png'
import Kali_Linux from './app/assets/Images/images/project-images/mobile-app-development/cybersecurity/kali-linux.jpg'
import Burp_Suite from './app/assets/Images/images/project-images/mobile-app-development/cybersecurity/burp-suite.jpg'
import metasploit from './app/assets/Images/images/project-images/mobile-app-development/cybersecurity/metasploit.png'
import splunk from './app/assets/Images/images/project-images/mobile-app-development/cybersecurity/splunk.png'
import wireshark from './app/assets/Images/images/project-images/mobile-app-development/cybersecurity/wireshark.jpg'
import React from './app/RoadMap/react.png'
import Node from './app/assets/node.png'
import Mongo from './app/assets/Images/images/project-images/web-development&design/full-stack-developer/mongodb.png'
import Express from './app/assets/Images/images/project-images/web-development&design/full-stack-developer/expressjs.png'
import Figma from './app/assets/Images/images/project-images/web-development&design/uiux-designer/figma.png'
import Adobe from './app/assets/Images/images/project-images/web-development&design/uiux-designer/adobe-xd.png'
import Sketch from './app/assets/Images/images/project-images/web-development&design/uiux-designer/sketch.png'
import Zeplin from './app/assets/Images/images/project-images/web-development&design/uiux-designer/zeplin.png'
import HTML from './app/assets/Images/images/project-images/web-development&design/front-end-developer/html.png'
import Css from './app/assets/Images/images/project-images/web-development&design/front-end-developer/css.png'
import Js from './app/RoadMap/jsimage.png'
import tailwindcss from './app/assets/Images/images/project-images/web-development&design/front-end-developer/tailwind-css.jpg'
import postgreSQL from './app/assets/Images/images/project-images/web-development&design/back-end-developer/postgreSQL.png'
import salesforce from './app/assets/Images/images/project-images/saleforce-development/saleforce-developer/saleforce.png'
import salesforce_light from './app/assets/Images/images/project-images/saleforce-development/saleforce-developer/saleforce-lightning.jpg'
import apex from './app/assets/Images/images/project-images/saleforce-development/saleforce-developer/apex.png'
import soql from './app/assets/Images/images/project-images/saleforce-development/saleforce-developer/soql.jpg'
import visualforce from './app/assets/Images/images/project-images/saleforce-development/saleforce-developer/visualforce.jpg'
import python from './app/assets/Images/images/project-images/data-science&analytics/data-analyst/python.png'
import Excel from './app/assets/Images/images/project-images/data-science&analytics/data-analyst/excel.png'
import power_bi from './app/assets/Images/images/project-images/data-science&analytics/data-analyst/power-bi.png'
import sql from './app/assets/Images/images/project-images/data-science&analytics/data-analyst/sql.png'
import tableau from './app/assets/Images/images/project-images/data-science&analytics/data-analyst/tableau.png'





const Data = {
  "AWS_Cloud_DevOps": {
    "description": "AWS Cloud DevOps involves using Amazon Web Services to manage, automate, and optimize cloud operations.",
    "tools": [
      {
        "name": "AWS",
        "image_url": AWS.src,
        "description": "Amazon Web Services (AWS) is a comprehensive cloud platform offering computing power, storage, and various services.",
        "youtube_link": "https://www.youtube.com/watch?v=Ia-UEYYR44s"
      },
      {
        "name": "Terraform",
        "image_url": Terraform.src,
        "description": "Terraform is an open-source tool for managing cloud infrastructure using code.",
        "youtube_link": "https://www.youtube.com/watch?v=Yc6lB1Yf4mE"
      },
      {
        "name": "Jenkins",
        "image_url": Jenkins.src,
        "description": "Jenkins is a popular CI/CD tool for automating builds, tests, and deployment.",
        "youtube_link": "https://www.youtube.com/watch?v=fxY6z3bD2J0"
      },
      {
        "name": "Docker",
        "image_url": Docker.src,
        "description": "Docker allows for creating and managing containers to run applications consistently across environments.",
        "youtube_link": "https://www.youtube.com/watch?v=pTFZFxd4hOI"
      },
      {
        "name": "Kubernetes",
        "image_url": Kubernetes.src,
        "description": "Kubernetes is used for managing and orchestrating containerized applications.",
        "youtube_link": "https://www.youtube.com/watch?v=X48VuPvK4mg"
      }
    ],
    "projects": [
      {
        "title": "Deploy a Full-Stack Application using AWS and Docker",
        "description": "Deploy a full-stack MERN application using AWS EC2 and Docker containers. Set up Jenkins for CI/CD pipeline integration.",
        "demo_link": "https://github.com/example/aws-fullstack-project"
      },
      {
        "title": "Automate Infrastructure with Terraform and AWS",
        "description": "Create an infrastructure with AWS services like EC2 and S3 using Terraform. Deploy a web server and automate provisioning.",
        "demo_link": "https://github.com/example/terraform-aws-project"
      }
    ],
    "certification_links": [
      {
        "name": "AWS Certified Solutions Architect – Associate",
        "certification_url": "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
      },
      {
        "name": "HashiCorp Certified: Terraform Associate",
        "certification_url": "https://www.hashicorp.com/certification/terraform-associate"
      }
    ]
  },
  "Azure_Cloud_DevOps": {
    "description": "Azure Cloud DevOps involves using Microsoft's Azure platform to automate and manage cloud infrastructure.",
    "tools": [
      {
        "name": "Azure",
        "image_url": Azure.src,
        "description": "Microsoft Azure is a cloud computing platform offering a range of services including virtual machines, databases, and AI services.",
        "youtube_link": "https://www.youtube.com/watch?v=2zYpOxg0IaY"
      },
      {
        "name": "Terraform",
        "image_url": Terraform.src,
        "description": "Terraform helps to provision and manage cloud infrastructure efficiently through infrastructure-as-code.",
        "youtube_link": "https://www.youtube.com/watch?v=Yc6lB1Yf4mE"
      },
      {
        "name": "Jenkins",
        "image_url": Jenkins.src,
        "description": "Jenkins automates building, testing, and deploying applications in the DevOps pipeline.",
        "youtube_link": "https://www.youtube.com/watch?v=fxY6z3bD2J0"
      },
      {
        "name": "Docker",
        "image_url": Docker.src,
        "description": "Docker allows containerizing applications to run consistently across different environments.",
        "youtube_link": "https://www.youtube.com/watch?v=pTFZFxd4hOI"
      },
      {
        "name": "Kubernetes",
        "image_url": Kubernetes.src,
        "description": "Kubernetes is an orchestration system for managing large-scale containerized applications.",
        "youtube_link": "https://www.youtube.com/watch?v=X48VuPvK4mg"
      }
    ],
    "projects": [
      {
        "title": "Deploy a Web Application on Azure with Kubernetes",
        "description": "Deploy a multi-tier application on Azure using Kubernetes, with automatic scaling and load balancing.",
        "demo_link": "https://github.com/example/azure-kubernetes-project"
      },
      {
        "title": "Automate CI/CD on Azure with Jenkins and Terraform",
        "description": "Set up CI/CD pipelines using Jenkins and Terraform to provision infrastructure on Azure.",
        "demo_link": "https://github.com/example/azure-terraform-project"
      }
    ],
    "certification_links": [
      {
        "name": "Microsoft Certified: Azure DevOps Engineer Expert",
        "certification_url": "https://learn.microsoft.com/en-us/certifications/devops-engineer/"
      },
      {
        "name": "Microsoft Certified: Azure Solutions Architect Expert",
        "certification_url": "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/"
      }
    ]
  },
  "Google_Cloud_DevOps": {
    "description": "Google Cloud DevOps is about managing and automating infrastructure on the Google Cloud platform.",
    "tools": [
      {
        "name": "Google Cloud",
        "image_url": Google.src,
        "description": "Google Cloud is a suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
        "youtube_link": "https://www.youtube.com/watch?v=O_LkMWP2OfU"
      },
      {
        "name": "Terraform",
        "image_url": Terraform.src,
        "description": "Terraform enables the automation of infrastructure provisioning across Google Cloud.",
        "youtube_link": "https://www.youtube.com/watch?v=Yc6lB1Yf4mE"
      },
      {
        "name": "Jenkins",
        "image_url": Jenkins.src,
        "description": "Jenkins automates building, testing, and deploying software, facilitating continuous integration and delivery.",
        "youtube_link": "https://www.youtube.com/watch?v=fxY6z3bD2J0"
      },
      {
        "name": "Docker",
        "image_url": Docker.src,
        "description": "Docker provides lightweight containers to run and manage applications across different environments.",
        "youtube_link": "https://www.youtube.com/watch?v=pTFZFxd4hOI"
      },
      {
        "name": "Kubernetes",
        "image_url": Kubernetes.src,
        "description": "Kubernetes is essential for managing containerized workloads and services in a large-scale environment.",
        "youtube_link": "https://www.youtube.com/watch?v=X48VuPvK4mg"
      }
    ],
    "projects": [
      {
        "title": "Deploy a Scalable Application on Google Cloud with Kubernetes",
        "description": "Use Kubernetes to deploy a scalable web application on Google Cloud, implementing automatic scaling and monitoring.",
        "demo_link": "https://github.com/example/gcloud-kubernetes-project"
      },
      {
        "title": "Automate Infrastructure Deployment on Google Cloud with Terraform",
        "description": "Create a robust infrastructure on Google Cloud using Terraform and integrate with Jenkins for continuous deployment.",
        "demo_link": "https://github.com/example/gcloud-terraform-project"
      }
    ],
    "certification_links": [
      {
        "name": "Google Cloud Certified - Professional Cloud DevOps Engineer",
        "certification_url": "https://cloud.google.com/certification/cloud-devops-engineer"
      },
      {
        "name": "Google Cloud Certified - Associate Cloud Engineer",
        "certification_url": "https://cloud.google.com/certification/cloud-engineer"
      }
    ]
  },
  "React_Native_Developer": {
    "description": "React Native Developers create mobile applications using React Native, focusing on performance and user experience.",
    "tools": [
      {
        "name": "React Native",
        "image_url": ReactNative.src,
        "description": "React Native is a framework for building native mobile apps using JavaScript and React.",
        "youtube_link": "https://www.youtube.com/watch?v=0-S5cW4yTqE"
      },
      {
        "name": "JavaScript",
        "image_url": Js.src,
        "description": "JavaScript is essential for building interactive mobile apps using React Native.",
        "youtube_link": "https://www.youtube.com/watch?v=W6NZfCO5SIk"
      },
      {
        "name": "Expo",
        "image_url": Expo.src,
        "description": "Expo is a framework that helps develop React Native apps faster by offering a suite of tools and services.",
        "youtube_link": "https://www.youtube.com/watch?v=wwN03PrH1RQ"
      },
      {
        "name": "Redux",
        "image_url": Redux.src,
        "description": "Redux is used for managing the state of your React Native applications.",
        "youtube_link": "https://www.youtube.com/watch?v=poQXN0nSsd0"
      },
      {
        "name": "Firebase",
        "image_url": Firebase.src,
        "description": "Firebase provides a backend for React Native apps, including databases, authentication, and storage.",
        "youtube_link": "https://www.youtube.com/watch?v=9kRgVxULbag"
      }
    ],
    "projects": [
      {
        "title": "Create a To-Do App using React Native and Firebase",
        "description": "Develop a fully functional to-do list app with real-time synchronization using Firebase as the backend.",
        "demo_link": "https://github.com/example/react-native-todo-app"
      },
      {
        "title": "Build a Chat Application using React Native and Expo",
        "description": "Create a real-time chat application with Expo and Firebase. Users can send messages and images.",
        "demo_link": "https://github.com/example/react-native-chat-app"
      }
    ],
    "certification_links": [
      {
        "name": "Meta Front-End Developer Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/meta-front-end-developer"
      },
      {
        "name": "React Native Certified Developer",
        "certification_url": "https://academy.infinite.red/react-native-certified"
      }
    ]
  },
  "Google_Flutter_Developer": {
    "description": "Flutter Developers create mobile applications with a single codebase for Android, iOS, and web using Flutter and Dart.",
    "tools": [
      {
        "name": "Flutter",
        "image_url": Flutter.src,
        "description": "Flutter is an open-source UI toolkit for building natively compiled applications across mobile, web, and desktop.",
        "youtube_link": "https://www.youtube.com/watch?v=fq4N0hgOWzU"
      },
      {
        "name": "Dart",
        "image_url": Dart.src,
        "description": "Dart is the programming language behind Flutter, optimized for building fast, cross-platform applications.",
        "youtube_link": "https://www.youtube.com/watch?v=Ej_Pcr4uC2Q"
      },
      {
        "name": "Firebase",
        "image_url": Firebase.src,
        "description": "Firebase provides backend services such as databases, authentication, and cloud functions, ideal for Flutter apps.",
        "youtube_link": "https://www.youtube.com/watch?v=9kRgVxULbag"
      },
      {
        "name": "Bloc",
        "image_url": Bloc.src,
        "description": "Bloc is a state management library that makes it easier to build complex Flutter applications.",
        "youtube_link": "https://www.youtube.com/watch?v=LeFpXPV-L6w"
      },
      {
        "name": "Google Play Services",
        "image_url": Google_Play_Services.src,
        "description": "Google Play Services helps in managing APIs, security, and updates across Android devices for Flutter apps.",
        "youtube_link": "https://www.youtube.com/watch?v=KbxQNmKZQRs"
      }
    ],
    "projects": [
      {
        "title": "Build a Cross-Platform Chat Application with Flutter and Firebase",
        "description": "Create a real-time chat app with authentication and push notifications, using Flutter and Firebase as the backend.",
        "demo_link": "https://github.com/example/flutter-firebase-chat-app"
      },
      {
        "title": "Create a Travel App with Flutter and Google Maps",
        "description": "Develop a travel app that integrates Google Maps for location-based services and directions.",
        "demo_link": "https://github.com/example/flutter-google-maps-app"
      }
    ],
    "certification_links": [
      {
        "name": "Google Flutter Certified Developer",
        "certification_url": "https://flutter.dev/certifications"
      },
      {
        "name": "Google Associate Android Developer",
        "certification_url": "https://developers.google.com/certification/associate-android-developer"
      }
    ]
  },
  "Cybersecurity_Specialist": {
    "description": "Cybersecurity specialists protect systems from cyber threats using various tools and techniques to ensure security.",
    "tools": [
      {
        "name": "Kali Linux",
        "image_url": Kali_Linux.src,
        "description": "Kali Linux is a Debian-based Linux distribution used for penetration testing and security assessments.",
        "youtube_link": "https://www.youtube.com/watch?v=guZtJleKNc8"
      },
      {
        "name": "Wireshark",
        "image_url": wireshark.src,
        "description": "Wireshark is a free and open-source packet analyzer used for network troubleshooting and analysis.",
        "youtube_link": "https://www.youtube.com/watch?v=TkCSr30UojM"
      },
      {
        "name": "Metasploit",
        "image_url": metasploit.src,
        "description": "Metasploit is a security framework used for developing and executing exploit code against a remote target machine.",
        "youtube_link": "https://www.youtube.com/watch?v=gLxAb-aG5rM"
      },
      {
        "name": "Splunk",
        "image_url": splunk.src,
        "description": "Splunk is used for searching, monitoring, and analyzing machine-generated data via a web-style interface.",
        "youtube_link": "https://www.youtube.com/watch?v=g94rV-isXsw"
      },
      {
        "name": "Burp Suite",
        "image_url": Burp_Suite.src,
        "description": "Burp Suite is an integrated platform for performing security testing of web applications.",
        "youtube_link": "https://www.youtube.com/watch?v=J4b-TsNBYC8"
      }
    ],
    "projects": [
      {
        "title": "Penetration Test a Web Application using Kali Linux and Metasploit",
        "description": "Conduct a penetration test on a vulnerable web application using Metasploit, and report findings on potential vulnerabilities.",
        "demo_link": "https://github.com/example/kali-linux-metasploit-test"
      },
      {
        "title": "Analyze Network Traffic using Wireshark",
        "description": "Capture and analyze network traffic using Wireshark to detect anomalies and potential security threats.",
        "demo_link": "https://github.com/example/wireshark-network-analysis"
      }
    ],
    "certification_links": [
      {
        "name": "Certified Ethical Hacker (CEH)",
        "certification_url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
      },
      {
        "name": "CompTIA Security+",
        "certification_url": "https://www.comptia.org/certifications/security"
      }
    ]
  },
  "Full_Stack_Developer": {
    "description": "Full-Stack Developers work on both front-end and back-end systems, creating complete applications from design to deployment.",
    "tools": [
      {
        "name": "React.js",
        "image_url": React.src,
        "description": "React is a JavaScript library for building user interfaces, focusing on creating reusable UI components.",
        "youtube_link": "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
      },
      {
        "name": "Node.js",
        "image_url": Node.src,
        "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable server-side applications.",
        "youtube_link": "https://www.youtube.com/watch?v=TlB_eWDSMt4"
      },
      {
        "name": "MongoDB",
        "image_url": Mongo.src,
        "description": "MongoDB is a document-based, distributed database built for modern application developers and for the cloud era.",
        "youtube_link": "https://www.youtube.com/watch?v=pWbMrx5rVBE"
      },
      {
        "name": "Express.js",
        "image_url": Express.src,
        "description": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        "youtube_link": "https://www.youtube.com/watch?v=SccSCuHhOw0"
      },
      {
        "name": "Docker",
        "image_url": Docker.src,
        "description": "Docker enables developers to package applications into containers, ensuring consistent environments across development and production.",
        "youtube_link": "https://www.youtube.com/watch?v=pTFZFxd4hOI"
      }
    ],
    "projects": [
      {
        "title": "Build a Social Media App using the MERN Stack",
        "description": "Develop a full-stack social media application using MongoDB, Express, React, and Node.js (MERN stack). Implement user authentication, CRUD operations, and real-time updates.",
        "demo_link": "https://github.com/example/mern-social-app"
      },
      {
        "title": "Create an E-commerce Website using React.js and Node.js",
        "description": "Build a full-stack e-commerce website with product listings, shopping cart functionality, and order management. Use Node.js and Express for the backend, and MongoDB for the database.",
        "demo_link": "https://github.com/example/mern-ecommerce-app"
      }
    ],
    "certification_links": [
      {
        "name": "Meta Back-End Developer Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/meta-back-end-developer"
      },
      {
        "name": "MongoDB Developer Certification",
        "certification_url": "https://university.mongodb.com/certification"
      }
    ]
  },
  "UI_UX_Designer": {
    "description": "UI/UX Designers focus on creating user-centered designs, from research and wireframes to high-fidelity mockups.",
    "tools": [
      {
        "name": "Figma",
        "image_url": Figma.src,
        "description": "Figma is a collaborative web-based design tool used for creating user interfaces and wireframes.",
        "youtube_link": "https://www.youtube.com/watch?v=2KPbN0OwdPQ"
      },
      {
        "name": "Sketch",
        "image_url": Sketch.src,
        "description": "Sketch is a design tool for creating wireframes and prototypes, primarily used in UI/UX design.",
        "youtube_link": "https://www.youtube.com/watch?v=3Itp0UuSHt0"
      },
      {
        "name": "Adobe XD",
        "image_url": Adobe.src,
        "description": "Adobe XD is a vector-based user experience design tool for web apps and mobile apps, with features for wireframing and prototyping.",
        "youtube_link": "https://www.youtube.com/watch?v=68w2VwalD5w"
      },
      {
        "name": "Zeplin",
        "image_url": Zeplin.src,
        "description": "Zeplin is a collaboration tool for UI designers and front-end developers, helping them to hand off designs efficiently.",
        "youtube_link": "https://www.youtube.com/watch?v=92LqOVLuvO4"
      }
    ],
    "projects": [
      {
        "title": "Design a Mobile App for a Restaurant Booking System",
        "description": "Create a full UI/UX design for a mobile app that allows users to book tables at restaurants, view menus, and track reservations.",
        "demo_link": "https://www.behance.net/example/restaurant-booking-app"
      },
      {
        "title": "Create a Responsive E-commerce Website Design",
        "description": "Design a responsive e-commerce website focusing on user experience, with a complete shopping and checkout flow.",
        "demo_link": "https://www.behance.net/example/ecommerce-website-design"
      }
    ],
    "certification_links": [
      {
        "name": "Google UX Design Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/google-ux-design"
      },
      {
        "name": "Interaction Design Foundation - User Experience Design",
        "certification_url": "https://www.interaction-design.org/courses/become-a-certified-ux-professional"
      }
    ]
  },
  "Front_End_Developer": {
    "description": "Front-End Developers focus on building the visual elements of a website, ensuring responsive and interactive user experiences.",
    "tools": [
      {
        "name": "React.js",
        "image_url": React.src,
        "description": "React is a JavaScript library used for building interactive and efficient user interfaces.",
        "youtube_link": "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
      },
      {
        "name": "HTML",
        "image_url": HTML.src,
        "description": "HTML is the standard language for structuring web content.",
        "youtube_link": "https://www.youtube.com/watch?v=pQN-pnXPaVg"
      },
      {
        "name": "CSS",
        "image_url": Css.src,
        "description": "CSS is used for designing the layout, appearance, and styling of web pages.",
        "youtube_link": "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
      },
      {
        "name": "JavaScript",
        "image_url": Js.src,
        "description": "JavaScript enables interactive elements and dynamic content on websites.",
        "youtube_link": "https://www.youtube.com/watch?v=W6NZfCO5SIk"
      },
      {
        "name": "Tailwind CSS",
        "image_url": tailwindcss.src,
        "description": "Tailwind CSS is a utility-first CSS framework for quickly building custom designs.",
        "youtube_link": "https://www.youtube.com/watch?v=dFgzHOX84xQ"
      }
    ],
    "projects": [
      {
        "title": "Create a Portfolio Website using React.js and Tailwind CSS",
        "description": "Develop a personal portfolio website using React.js and Tailwind CSS. Showcase your skills, projects, and work experience in a modern design.",
        "demo_link": "https://github.com/example/portfolio-website"
      },
      {
        "title": "Build a Weather Application using React.js",
        "description": "Create a weather application using React.js that fetches real-time weather data from an API and displays it with a clean UI.",
        "demo_link": "https://github.com/example/react-weather-app"
      }
    ],
    "certification_links": [
      {
        "name": "Meta Front-End Developer Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/meta-front-end-developer"
      },
      {
        "name": "Responsive Web Design Certification (FreeCodeCamp)",
        "certification_url": "https://www.freecodecamp.org/learn/responsive-web-design/"
      }
    ]
  },
  "Back_End_Developer": {
    "description": "Back-End Developers manage server-side logic, databases, and APIs, ensuring the application runs smoothly behind the scenes.",
    "tools": [
      {
        "name": "Node.js",
        "image_url": Node.src,
        "description": "Node.js is a server-side platform built on Google Chrome's JavaScript engine for developing scalable applications.",
        "youtube_link": "https://www.youtube.com/watch?v=TlB_eWDSMt4"
      },
      {
        "name": "Express.js",
        "image_url": Express.src,
        "description": "Express is a minimalistic Node.js web framework for building web applications and APIs.",
        "youtube_link": "https://www.youtube.com/watch?v=SccSCuHhOw0"
      },
      {
        "name": "MongoDB",
        "image_url": Mongo.src,
        "description": "MongoDB is a NoSQL database used for storing large amounts of data in a flexible, JSON-like format.",
        "youtube_link": "https://www.youtube.com/watch?v=pWbMrx5rVBE"
      },
      {
        "name": "PostgreSQL",
        "image_url": postgreSQL.src,
        "description": "PostgreSQL is an open-source relational database system known for its robustness and support for complex queries.",
        "youtube_link": "https://www.youtube.com/watch?v=qw--VYLpxG4"
      },
      {
        "name": "Docker",
        "image_url": Docker.src,
        "description": "Docker allows developers to containerize their applications, making them more portable and easier to manage.",
        "youtube_link": "https://www.youtube.com/watch?v=pTFZFxd4hOI"
      }
    ],
    "projects": [
      {
        "title": "Develop a REST API using Node.js and Express.js",
        "description": "Build a RESTful API using Node.js and Express.js to perform CRUD operations on user data stored in MongoDB.",
        "demo_link": "https://github.com/example/node-express-api"
      },
      {
        "title": "Create an Authentication System using Node.js and JWT",
        "description": "Develop an authentication and authorization system using Node.js, Express.js, and JWT for token-based authentication.",
        "demo_link": "https://github.com/example/node-jwt-auth"
      }
    ],
    "certification_links": [
      {
        "name": "Meta Back-End Developer Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/meta-back-end-developer"
      },
      {
        "name": "Node.js Certification by OpenJS Foundation",
        "certification_url": "https://training.linuxfoundation.org/certification/jsnsd/"
      }
    ]
  },
  "Salesforce_Developer": {
    "description": "Salesforce Developers build applications on the Salesforce platform, often extending its functionality with custom code and integrations.",
    "tools": [
      {
        "name": "Salesforce",
        "image_url": salesforce.src,
        "description": "Salesforce is a cloud-based customer relationship management (CRM) platform used to manage business operations and customer data.",
        "youtube_link": "https://www.youtube.com/watch?v=3TPXo6jNsfM"
      },
      {
        "name": "Apex",
        "image_url": apex.src,
        "description": "Apex is a programming language used to develop on the Salesforce platform, often for server-side logic.",
        "youtube_link": "https://www.youtube.com/watch?v=pUvryRxUNkI"
      },
      {
        "name": "Visualforce",
        "image_url": visualforce.src,
        "description": "Visualforce is a web development framework that enables the creation of dynamic applications on the Salesforce platform.",
        "youtube_link": "https://www.youtube.com/watch?v=2ZK1LwDpz8I"
      },
      {
        "name": "SOQL",
        "image_url": soql.src,
        "description": "SOQL (Salesforce Object Query Language) is used to query data from the Salesforce database.",
        "youtube_link": "https://www.youtube.com/watch?v=Z6RcxuLPL5s"
      },
      {
        "name": "Salesforce Lightning",
        "image_url": salesforce_light.src,
        "description": "Salesforce Lightning is a modern user interface that improves user experience and app development.",
        "youtube_link": "https://www.youtube.com/watch?v=0cHoLVs4c94"
      }
    ],
    "projects": [
      {
        "title": "Custom Salesforce Application Development",
        "description": "Develop a custom application using Salesforce Apex and Visualforce that meets specific business needs.",
        "demo_link": "https://github.com/example/salesforce-custom-app"
      },
      {
        "title": "Integrate Salesforce with External APIs",
        "description": "Build an integration between Salesforce and an external API to synchronize data.",
        "demo_link": "https://github.com/example/salesforce-api-integration"
      }
    ],
    "certification_links": [
      {
        "name": "Salesforce Certified Platform Developer I",
        "certification_url": "https://trailhead.salesforce.com/credentials/platformdeveloper1"
      },
      {
        "name": "Salesforce Certified Administrator",
        "certification_url": "https://trailhead.salesforce.com/credentials/administrator"
      }
    ]
  } ,
  "Data_Analyst": {
    "description": "Data Analysts collect, process, and perform statistical analyses on large datasets. They translate data into actionable insights for decision-making.",
    "tools": [
      {
        "name": "Python",
        "image_url": python.src,
        "description": "Python is a programming language widely used for data analysis and manipulation.",
        "youtube_link": "https://www.youtube.com/watch?v=LHc8YdM8t4s"
      },
      {
        "name": "Excel",
        "image_url": Excel.src,
        "description": "Excel is a spreadsheet software that is powerful for data analysis, visualization, and reporting.",
        "youtube_link": "https://www.youtube.com/watch?v=F1GRV4bZ4hE"
      },
      {
        "name": "SQL",
        "image_url": sql.src,
        "description": "SQL (Structured Query Language) is used for managing and querying relational databases.",
        "youtube_link": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
      },
      {
        "name": "Tableau",
        "image_url": tableau.src,
        "description": "Tableau is a powerful data visualization tool that helps in creating interactive dashboards.",
        "youtube_link": "https://www.youtube.com/watch?v=2qE6Z60j6zA"
      },
      {
        "name": "Power BI",
        "image_url": power_bi.src,
        "description": "Power BI is a business analytics tool by Microsoft that provides interactive visualizations and business intelligence capabilities.",
        "youtube_link": "https://www.youtube.com/watch?v=6W8D5KpTn3c"
      }
    ],
    "projects": [
      {
        "title": "Sales Data Analysis",
        "description": "Analyze sales data to find trends, patterns, and insights that can help improve business decisions.",
        "demo_link": "https://github.com/example/sales-data-analysis"
      },
      {
        "title": "Customer Segmentation Analysis",
        "description": "Perform clustering analysis to segment customers based on purchasing behavior.",
        "demo_link": "https://github.com/example/customer-segmentation"
      }
    ],
    "certification_links": [
      {
        "name": "Google Data Analytics Professional Certificate",
        "certification_url": "https://www.coursera.org/professional-certificates/google-data-analytics"
      },
      {
        "name": "Microsoft Certified: Data Analyst Associate",
        "certification_url": "https://learn.microsoft.com/en-us/certifications/data-analyst-associate/"
      }
    ]
  }
}
  



export default Data;