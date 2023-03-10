import embeddedGamesThumbnail from "../assets/embeddedGamesThumbnail.png"
import portfolioThumbnail from "../assets/portfolioThumbnail.png"
import straffrExcelImporterThumbnail from "../assets/straffrExcelImporterThumbnail.png"

const embeddedGames = {
    "id": 0,
    "imgSrc": embeddedGamesThumbnail,
    "title": "Embedded Games",
    "techStack": [
        "Firestore NoSQL Database",
        "Firebase",
        "ReactJs",
        "JavaScript",
        "AJAX/Fetch/Axios API",
        "HTML",
        "CSS",
        "Bootstrap 5",
        "React Bootstrap",
        "GitHub",
        "VSC",
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
    "webSiteUrl": "https://embeddedgames.firebaseapp.com",
    "hasGitHubRepoUrl": true,
    "gitHubRepoUrl": "https://github.com/ProgrammingGym/embedded-games",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}

const straffrExcelImporter = {
    "id": 1,
    "imgSrc": straffrExcelImporterThumbnail,
    "title": "STRAFFR Excel Importer",
    "techStack": [
        "Firestore NoSQL Database",
        "Firestore Database Rules",
        "Firebase",
        "Vanilla JavaScript",
        "Vanilla CSS",
        "Dynamic HTML",
        "HTML",
        "GitHub",
        "VSC",
    ],
    "briefDescription": `
        As a full stack software developer specialized in the back-end,
        I do not spend much time on the front-end. 
        This portfolio has been a great opportunity, allowing me to invest some time focusing on the front-end development.
    `,
    "hasUrl": false,
    "webSiteUrl": "",
    "hasGitHubRepoUrl": false,
    "gitHubRepoUrl": "",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}

const thisPortfolio = {
    "id": 2,
    "imgSrc": portfolioThumbnail,
    "title": "This Portfolio",
    "techStack": [
        "ReactJs",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "SCSS",
        "GitHub",
        "VSC",
        "Firebase",
    ],
    "briefDescription": `
        As a full stack software developer specialized in the back-end,
        I do not spend much time on the front-end. 
        This portfolio has been a great opportunity, allowing me to invest some time focusing on the front-end development.
    `,
    "hasUrl": true,
    "webSiteUrl": "https://www.khaledbadran.ca",
    "hasGitHubRepoUrl": true,
    "gitHubRepoUrl": "https://github.com/ProgrammingGym/portfolio",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}


const soloProjectsArr = [embeddedGames, straffrExcelImporter, thisPortfolio]
export default soloProjectsArr
