import embeddedGamesThumbnail from "../assets/embeddedGamesThumbnail.png"
import portfolioThumbnail from "../assets/portfolioThumbnail.png"
import straffrExcelImporterThumbnail from "../assets/straffrExcelImporterThumbnail.png"

const straffrExcelImporter = {
    "id": 0,
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
        "STRAFFR" needed a solution to efficiently import large amounts of various data from Excel spreadsheets into their database.
        To meet this challenge, I solely designed and developed both the front-end and back-end for “STRAFFR Excel Importer”.
        This custom web app tool enables STRAFFR stakeholders, including founders, co-founders, CEO, CTO, and developers,
        to seamlessly import various data from Excel files into their database by parsing the files.
        This means that the stakeholders can save many work hours, as the tool does not require any manual input to the database.
        The tool is designed with a user-friendly interface, and provides real-time feedback on the status of the import process.
        In case of any errors, clear instructions are displayed to assist with prompt resolution.
        This tool can handle complex excel files with many excel spreadsheets, each spreadsheet has its own structure.
        To ensure security I implemented strict Firestore rules and generated unique access tokens for the stakeholders.

        STRAFFR Excel Importer is used only internally at STRAFFR GmbH and due to non-disclosure agreement (NDA), the link to the web app as well as the code cannot be shared publicly. However, source code examples and demos can be shown upon request.
    `,
    "hasUrl": false,
    "webSiteUrl": "",
    "hasGitHubRepoUrl": false,
    "gitHubRepoUrl": "",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}

const embeddedGames = {
    "id": 1,
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
        "PWA",
        "GitHub",
        "VSC",
        "Firebase",
    ],
    "briefDescription": `
        Developing this portfolio has been a valuable chance for me to concentrate on front-end development.
        I also created a manifest.json file to enable Progressive Web App (PWA) support and
        optimized the meta tags to improve search engine optimization (SEO).
    `,
    "hasUrl": true,
    "webSiteUrl": "https://www.khaledbadran.ca",
    "hasGitHubRepoUrl": true,
    "gitHubRepoUrl": "https://github.com/ProgrammingGym/portfolio",
    "hasYoutubeVideo": false,
    "youtubeVideoUrl": "",
}


const soloProjectsArr = [straffrExcelImporter, embeddedGames, thisPortfolio]
export default soloProjectsArr
