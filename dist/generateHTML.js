function generateHtml(team){
    var cards = []
    for(let i=0; i < team.length; i++){
        var card = ``
        cards.push(card)
    }
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${team}
</body>
</html>`
}