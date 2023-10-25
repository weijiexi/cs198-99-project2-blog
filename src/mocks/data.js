const { nanoid } = require("nanoid")
const moment = require("moment")

let articles;

const resetArticles = () => {
  articles = [
    {
      id: nanoid(5),
      headline: "ST. PIERRE AND MIQUELON",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author:"Range Networks",
      image: 638,
      summary: "ST. PIERRE AND MIQUELON",
      body: "St. Pierre and Miquelon is a self-governing territorial overseas collective of France (COM) situated near Newfoundland, Canada. The island's incumbent wireless carrier had a monopoly on cellular service and had priced their plans accordingly. An entrepreneur from France applied for wireless spectrum and contacted Range Networks for further guidance. After an initial deployment of five base stations, his company, GlobalTel, now has seven base stations actively serving a population of 6,000."   
  },
  {
      id: nanoid(5),
      headline: "SAN JUAN ÑUMÍ, OAXACA, MEXICO",
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "MicroEmbedded Tech",
      image: 353,
      summary: "SAN JUAN ÑUMÍ, OAXACA, MEXICO",
      body: "Smartcel, an ISP and VoIP provider from Mexico City, Mexico, contacted Range Networks to bring coverage of the municipality of San Juan Ñumi. Larger carriers had not built out their networks to cover the area because the population was not large enough to be a profitable investment. This was Smartcel's first cellular network deployment and they are successfully providing coverage to the area's population of 6,000."
  },
  {
      headline: "ICELAND - SEARCH AND RESCUE",
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Alex Harris",
      image: 328,
      summary: "ICELAND - SEARCH AND RESCUE",
      body: "Our software is being used in Iceland as a way to speed up search and rescue missions. A helicopter-mounted base station flies in a pattern over a target area to locate lost hikers, based on a signal from their cell phone."
  },
  {
      id: nanoid(5),
      createdOn: moment().subtract(Math.random()*10, "days").format(),
      author: "Jordan Mcpherson",
      image: 338,
      headline: "How Hialeah’s Ariel Torres won a bronze metal",
      summary: "South Florida found its way to the podium in karate’s first-ever showing in the Olympics.",
      body: "Torres, who entered the Olympics ranked No. 6 in the world and as the top male Team USA Olympian in kata, reached his bronze medal bout by finishing second in his pool in each of the first three rounds behind eventual silver medalist Damian Quintero of Spain. Torres outscored Venezuela’s Antonio Jose Diaz Fernandez 26.72-26.34 for the bronze. Japan’s Ryo Kiyuna won gold, while Turkey’s Ali Sofuoglu beat South Korea’s Heejun Park for the second bronze of the event."
  }]
}

resetArticles()

const getAll = () => {
  return articles
}

const getById = id => {
  return articles.find(article => article.id === id)
}

const create = item => {
  articles.push({ id: nanoid(5), createdAt:moment().format(), ...item })
  return articles
}

const edit = (id, item) => {
  articles = articles.map(article => {
    return (article.id === id) ? {...article, ...item} : article
  });

  return articles
}

const remove = id => {
  articles = articles.filter(article => {
    return article.id !== id
  })
  return articles
}

module.exports = {
  getAll,
  getById,
  create,
  edit,
  remove,
  resetArticles 
}
