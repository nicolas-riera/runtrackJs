$("#button").click(async function () {
    try {
        const response = await fetch('expression.txt');

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const expression = await response.text();

        $("body").append("<p>" + expression + "</p>" )

    } catch (erreur) {
        console.error("Impossible de lire le fichier :", erreur);
    }
}) 