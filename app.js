// Setup
// -----------------------------------------------------------------------------
// #############################################################################
const express = require("express");
const hbs = require("hbs");

const app = express();

app.listen(3000, () => {
  console.log("Server ready to roll! 👍🏽");
});

// Connect the "public/" folder to our Express app
// (makes files inside "public/" available through our server's domain)
app.use(express.static(__dirname + "/public"));

// Use the "hbs" npm package for our templating engine (a.k.a. view engine)
// (this automatically requires the "hbs" npm package too)
app.set("view engine", "hbs");

// Uncomment the next line if you want to change the name of the "views/" folder
// app.set("views", __dirname + "/other-folder");

// Connect the "views/partials/" folder to hbs for including partial files
hbs.registerPartials(__dirname + "/views/partials");



// Routes
// -----------------------------------------------------------------------------
// #############################################################################

app.get("/", (request, response, next) => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  // information to send to the template file
  const data = {
    featuredSong: songs[randomIndex]
  };

  // "render()" sends a template file as a response
  // (it already knows to look inside "views/")
  response.render("home-page.hbs", data);
});

app.get("/playlist", (request, response, next) => {
  // information to send to the template file
  // ("locals" refers to local variables in the template files)
  response.locals.songList = songs;

  // "render()" sends a template file as a response
  // (it already knows to look inside "views/")
  response.render("playlist-page.hbs");
});



// FAKE Database
// -----------------------------------------------------------------------------
// #############################################################################
const songs = [
  {
    title: "Umi Says",
    artist: "Mos Def",
    year: 1999,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/MosDefBlackonBothSides.jpg/220px-MosDefBlackonBothSides.jpg",
    comment: null,
  },
  {
    title: "Fade to Black",
    artist: "Metallica",
    year: 1984,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Metallica_-_Ride_the_Lightning_cover.jpg/220px-Metallica_-_Ride_the_Lightning_cover.jpg",
    comment: "Good.",
  },
  {
    title: "I'm Shipping Up To Boston",
    artist: "Dropkick Murphys",
    year: 2005,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/DropkickMurphys-TheWarrior%27sCode.jpg/220px-DropkickMurphys-TheWarrior%27sCode.jpg",
    comment: null,
  },
  {
    title: "La Bohème",
    artist: "Charles Aznavour",
    year: 1965,
    photoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/La_boheme_album_cover.jpg/220px-La_boheme_album_cover.jpg",
    comment: "I'm Armenian.",
  },
  {
    title: "Ta Reine",
    artist: "Angèle",
    year: 2018,
    photoUrl: "https://i.scdn.co/image/458c677e9ab27951f97257b35cbd19f77bbc846c",
    comment: null,
  },
  {
    title: "Valerie",
    artist: "Amy Winehouse",
    year: 2006,
    photoUrl: "https://images.genius.com/ae1e5cdd87a2d7c46775a58d10f48615.940x818x1.jpg",
    comment: "I don't why I like it.",
  },
];
