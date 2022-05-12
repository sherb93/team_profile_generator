const createHTML = (team) => {
    return `
        <div>
            ${team.name}
            ${team.id}
            ${team.email}
        </div>
    `
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Company Roster</title>
    </head>
    <body>
        
    </body>
    </html>`
}

