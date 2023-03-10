import glAluminumPatioCoversThumbnail from "../assets/glAluminumPatioCoversThumbnail.png"
import straffrMobileAppThumbnail from "../assets/straffrMobileAppThumbnail.png"

const straffrMobileApp = {
    "id": 0,
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
        As a full stack software developer specialized in the back-end,
        I do not spend much time on the front-end. 
        This portfolio has been a great opportunity, allowing me to invest some time focusing on the front-end development.
    `,
    "hasUrl": true,
    "webSiteUrl": "https://en.straffr.com/pages/app-download",
    "hasGitHubRepoUrl": false,
    "gitHubRepoUrl": "",
    "hasYoutubeVideo": true,
    "youtubeVideoUrl": "https://www.youtube.com/watch?v=i1jFrkBl4Ac&ab_channel=STRAFFR",
}

const glAluminumPatioCovers = {
    "id": 1,
    "imgSrc": glAluminumPatioCoversThumbnail,
    "title": "GL Aluminum Patio Covers",
    "techStack": [
        "MySQL Database",
        "phpMyAdmin",
        "Plesk Obsidian",
        "FileZilla FTP",
        "REST API",
        "JWT",
        "AJAX/Fetch API",
        "Vanilla JavaScript",
        "PHP",
        "Node.js",
        "Dynamic HTML",
        "HTML",
        "Bootstrap",
    ],
    "briefDescription": `
        I love to teach children coding, so  I frequently use online platforms to implement games and projects with them.
        This has lead me to build a web app that can embed these games and projects all in one place.
        Ajax and REST APIs have been consumed to fetch the data from their original platforms.
        Additional data such as admin email, author name etc. is then added to the fetched data and they will be stored together in the firestore NoSQL database.
        Firebase authentication and firestore rules and permissions have been implemented.
        The web app implements all the CRUD (Create, Read, Update and Delete) operations.
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
