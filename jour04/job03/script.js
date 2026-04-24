async function initSelect() {
  try {
    const response = await fetch('pokemon.json');

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const pokemon = await response.json();

    let selectList = []

    for (e of pokemon) {
      for (type of e["type"]) {
        if (!selectList.includes(type)) {
          selectList.push(type)
        }
      }
    }

    const select = document.querySelector('#type_input');

    select.innerHTML = selectList.map(type =>
      `<option value="${type}">${type}</option>`
    ).join('');

  } catch (erreur) {
    console.error("Impossible de lire le fichier :", erreur);
  }
}

initSelect()

function getFormData() {
  const idInput = document.querySelector('#id_input');
  const nomInput = document.querySelector('#nom_input');
  const typeSelect = document.querySelector('#type_input');
  const data = {
    id: idInput.value,
    nom: nomInput.value,
    type: typeSelect.value
  };

  return data;
}

async function filterPokemon() {
  const data = getFormData();

  try {
    const response = await fetch('pokemon.json');

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const pokemon = await response.json();

    const filteredList = pokemon.filter(e => {
      const matchId = data.id === "" || e.id == data.id;
      
      const matchName = data.nom === "" || 
        e.name.french.toLowerCase().includes(data.nom.toLowerCase());

      const matchType = data.type === "" || e.type.includes(data.type);

      return matchId && matchName && matchType;
    });

    renderResults(filteredList);

  } catch (erreur) {
    console.error(erreur);
  }
}

function renderResults(list) {
  const container = document.querySelector('#result_container');
  if (!container) return;

  container.innerHTML = list.map(p => `
    <div>
      <p>#${p.id} - ${p.name.french}</p>
      <span>${p.type.join(' / ')}</span>
    </div>
  `).join('');
}

$("#filter_btn").click(function () {
  filterPokemon()
})