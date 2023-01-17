import embeddedGamesThumbnail from "../assets/embeddedGamesThumbnail.png"
import portfolioThumbnail from "../assets/portfolioThumbnail.png"

const embeddedGames = {
    "id": 0,
    "imgSrc": embeddedGamesThumbnail,
    "title": "Embedded Games",
    "techStack": [
        "ReactJs",
        "Bootstrap 5",
        "React Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Firestore",
    ],
    "briefDescription": `
        I love to teach children coding, so  I frequently use online platforms to implement games and projects with them.
        This has lead me to build a web app that can embed these games and projects all in one place.
        Ajax and REST APIs have been consumed to fetch the data from their original platforms.
        Additional data such as admin email, author name etc. is then added to the fetched data and they will be stored together in the firestore NoSQL database.
        Firebase authentication and firestore rules and permissions have been implemented.
        The web app implements all the CRUD (Create, Read, Update and Delete) operations.
     `,
    "webSiteUrl": "https://embeddedgames.firebaseapp.com",
    "gitHubRepoUrl": "https://github.com/ProgrammingGym/embedded-games",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}

const thisPortfolio = {
    "id": 1,
    "imgSrc": portfolioThumbnail,
    "title": "This Portfolio",
    "techStack": [
        "ReactJs",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "SCSS",
        "Firebase",
    ],
    "briefDescription": `
        As a full stack software developer specialized in the back-end,
        I do not spend much time on the front-end. 
        This portfolio has been a great opportunity, allowing me to invest some time focusing on the front-end development.
    `,
    "webSiteUrl": "https://www.khaledbadran.ca",
    "gitHubRepoUrl": "https://github.com/ProgrammingGym/portfolio",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}


const webProjectsArr = [embeddedGames, thisPortfolio]
export default webProjectsArr
