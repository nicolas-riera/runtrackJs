$("#update").click(async function() {
   try {
    const response = await fetch('utilisateur.json');

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const users = await response.json();

    const tableBody = document.querySelector('#user_body');

        const rowsHtml = users.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prénom}</td>
                <td>${user.email}</td>
            </tr>
        `).join('');

        tableBody.innerHTML = rowsHtml;

  } catch (erreur) {
    console.error("Impossible de lire le fichier :", erreur);
  }
})