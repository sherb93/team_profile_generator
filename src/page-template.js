const generateTeam = (team) => {

    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
            </div>
            <div class="card-body-container">
                <div class="card-body">
                    <p>ID: ${manager.getId()}</p>
                    <p>Email: ${manager.getEmail()}</p>
                    <p>Office: ${manager.getOffice()}</p>
                </div>
            </div>
        </div>
        `
    }

    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body-container">
                <div class="card-body">
                    <p>ID: ${engineer.getId()}</p>
                    <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></p>
                </div>
            </div>
        </div>
        `
    }

    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body-container">
                <div class="card-body">
                    <p>ID: ${intern.getId()}</p>
                    <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                    <p>School: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
        `
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <header id="header-container">
            <h1 id="header-title">My Team</h1>
        </header>
    
        <main>
            <div id="container">
                ${generateTeam()}
            </div>
        </main>
    </body>
    </html>`
}

