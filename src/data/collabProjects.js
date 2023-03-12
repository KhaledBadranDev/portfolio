import glAluminumPatioCoversThumbnail from "../assets/glAluminumPatioCoversThumbnail.png"
import straffrMobileAppThumbnail from "../assets/straffrMobileAppThumbnail.png"

const straffrMobileApp = {
    "id": 1000,
    "imgSrc": straffrMobileAppThumbnail,
    "title": "STRAFFR Mobile App",
    "techStack": [
        "Firestore NoSQL Database",
        "Node.js",
        "Java",
        "Twilio Segment",
        "Google Cloud Platform",
        "Google Cloud Functions",
        "Google Cloud Storage",
        "Google Vertex AI",
        "BigQuery",
        "Firebase",
        "Azure DevOps",
        "Monday.com",
        "GitHub",
        "Android Studio",
        "VSC",
        "Figma",
    ],
    "briefDescription": `
        “STRAFFR GmbH” is a German fitness company that produces smart bands that can be connected to mobile phones via Bluetooth and the STRAFFR mobile app.
        As a full-stack software developer collaborating with STRAFFR GmbH, an early-stage company, I handled various tasks in different areas, which required me to have a wide range of skills and knowledge. 
        I collaborated on the back-end development, database, data analysis, Machine learning, etc. 
        I also implemented the logic for displaying personalized sections in the feed.
        I deployed cloud functions, including functions for importing and exporting data periodically and performing data analysis using tools like BigQuery, Google Looker Studio, etc.
        In addition to that, I utilized Twilio Segment SDK to track users’ activities on the app, to use this data to further improve and personalize the app. One of my contributions was using the data that was exported to train machine learning models using Google Vertex AI.
        By leveraging these models, we were able to continually improve the app's functionalities and deliver a more personalized experience to each user.


        \n\n"The code for this project is under a non-disclosure agreement (NDA), and hence cannot be shared publicly. However, source code examples and demos can be shown upon request."
        
    `,
    "hasUrl": true,
    "webSiteUrl": "https://en.straffr.com/pages/app-download",
    "hasGitHubRepoUrl": false,
    "gitHubRepoUrl": "",
    "hasYoutubeVideo": true,
    "youtubeVideoUrl": "https://www.youtube.com/watch?v=i1jFrkBl4Ac&ab_channel=STRAFFR",
}

const glAluminumPatioCovers = {
    "id": 1001,
    "imgSrc": glAluminumPatioCoversThumbnail,
    "title": "GL Aluminum Patio Covers",
    "techStack": [
        "MySQL Database",
        "phpMyAdmin",
        "Plesk Obsidian",
        "FileZilla FTP",
        "REST API",
        "MVC Pattern",
        "JWT",
        "AJAX/Fetch API",
        "Vanilla JavaScript",
        "PHP",
        "Node.js",
        "Express.js",
        "Dynamic HTML",
        "HTML",
        "Bootstrap",
    ],
    "briefDescription": `
        GL Aluminum Patio Covers is a Canadian company that specializes in designing and manufacturing high-quality engineered Do-It-Yourself Patio Cover Kits. I collaborated with Affordable Web Design Ltd to design and build a website for GL Aluminum Patio Covers.
        My main responsibility was designing and implementing the back-end development solely. This includes: designing the relational SQL database using phpMyAdmin and MySQL, as well as implementing a REST API using Node.js and Express.js. I followed the Model-View-Controller pattern for better organization and maintenance. Furthermore, I worked on integrating the API with the front-end to ensure seamless functionality.
        One of the key features of this project was the implementation of an Admin Control Panel. I designed and developed both the front-end and back-end for the control panel, enabling the admin to log in with a Json Web Token and perform essential CRUD (Create, Read, Update, Delete) operations on products. I also ensured the security of the system by implementing a log out feature for the admin.
        
        
        "The code for this project is under a non-disclosure agreement (NDA), and hence cannot be shared publicly. However, source code examples and demos can be shown upon request."
    `,
    "hasUrl": true,
    "webSiteUrl": "https://glaluminumpatiocovers.com",
    "hasGitHubRepoUrl": false,
    "gitHubRepoUrl": "",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}



const collabProjectsArr = [straffrMobileApp, glAluminumPatioCovers]
export default collabProjectsArr
