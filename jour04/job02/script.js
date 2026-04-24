function jsonValueKey(json, cle) {
    return json[cle]
}

json = {
  "name": "La Plateforme_",
  "address": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff": "11",
  "creation": "2019"
}

let name = jsonValueKey(json, "name")
let city = jsonValueKey(json, "city")

console.log(name)
console.log(city)