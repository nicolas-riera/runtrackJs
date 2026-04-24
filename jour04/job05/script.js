$("#get-quote").click(async function() {
   try {
    const response = await fetch("https://zenquotes.io/api/random");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const quote = await response.json();

    const container = document.querySelector('#quote')

    console.log(quote)

    container.innerHTML = quote[0]["q"]

  } catch (erreur) {
    console.error("Impossible de lire le fichier :", erreur);
  }
})