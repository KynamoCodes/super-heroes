var source = document.getElementById("character-template").innerHTML;
var template = Handlebars.compile(source);

var data = {
  characters: [
    {
      "id": 1,
      "name": "A-Bomb",
      "slug": "1-a-bomb",
      "powerstats": {
        "intelligence": 38,
        "strength": 100,
        "speed": 17,
        "durability": 80,
        "power": 24,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "980 lb",
          "441 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Richard Milhouse Jones",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rick Jones"
        ],
        "placeOfBirth": "Scarsdale, Arizona",
        "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Musician, adventurer, author; formerly talk show host",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
        "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
      },
      "images": {
        "xs": "images/characters/xs/1-a-bomb.jpg",
        "sm": "images/characters/sm/1-a-bomb.jpg",
        "md": "images/characters/md/1-a-bomb.jpg",
        "lg": "images/characters/lg/1-a-bomb.jpg"
      },
      "rarity": "rare"
    },
    {
      "id": 2,
      "name": "Abe Sapien",
      "slug": "2-abe-sapien",
      "powerstats": {
        "intelligence": 88,
        "strength": 28,
        "speed": 35,
        "durability": 65,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Icthyo Sapien",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "145 lb",
          "65 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Abraham Sapien",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Langdon Everett Caul",
          "Abraham Sapien",
          "Langdon Caul"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Hellboy: Seed of Destruction (1993)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Paranormal Investigator",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Bureau for Paranormal Research and Defense",
        "relatives": "Edith Howard (wife, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/2-abe-sapien.jpg",
        "sm": "images/characters/sm/2-abe-sapien.jpg",
        "md": "images/characters/md/2-abe-sapien.jpg",
        "lg": "images/characters/lg/2-abe-sapien.jpg"
      }
    },
    {
      "id": 3,
      "name": "Abin Sur",
      "slug": "3-abin-sur",
      "powerstats": {
        "intelligence": 50,
        "strength": 90,
        "speed": 53,
        "durability": 64,
        "power": 99,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Ungaran",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lagzia"
        ],
        "placeOfBirth": "Ungara",
        "firstAppearance": "Showcase #22 (October, 1959)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Green Lantern, former history professor",
        "base": "Oa"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps, Black Lantern Corps",
        "relatives": "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
      },
      "images": {
        "xs": "images/characters/xs/3-abin-sur.jpg",
        "sm": "images/characters/sm/3-abin-sur.jpg",
        "md": "images/characters/md/3-abin-sur.jpg",
        "lg": "images/characters/lg/3-abin-sur.jpg"
      }
    },
    {
      "id": 4,
      "name": "Abomination",
      "slug": "4-abomination",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 53,
        "durability": 90,
        "power": 62,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "980 lb",
          "441 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Emil Blonsky",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Agent R-7",
          "Ravager of Worlds"
        ],
        "placeOfBirth": "Zagreb, Yugoslavia",
        "firstAppearance": "Tales to Astonish #90",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Ex-Spy",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
        "relatives": "Nadia Dornova Blonsky (wife, separated)"
      },
      "images": {
        "xs": "images/characters/xs/4-abomination.jpg",
        "sm": "images/characters/sm/4-abomination.jpg",
        "md": "images/characters/md/4-abomination.jpg",
        "lg": "images/characters/lg/4-abomination.jpg"
      }
    },
    {
      "id": 5,
      "name": "Abraxas",
      "slug": "5-abraxas",
      "powerstats": {
        "intelligence": 88,
        "strength": 63,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Cosmic Entity",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Abraxas",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Within Eternity",
        "firstAppearance": "Fantastic Four Annual #2001",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Dimensional destroyer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Cosmic Beings",
        "relatives": "Eternity (\"Father\")"
      },
      "images": {
        "xs": "images/characters/xs/5-abraxas.jpg",
        "sm": "images/characters/sm/5-abraxas.jpg",
        "md": "images/characters/md/5-abraxas.jpg",
        "lg": "images/characters/lg/5-abraxas.jpg"
      }
    },
    {
      "id": 6,
      "name": "Absorbing Man",
      "slug": "6-absorbing-man",
      "powerstats": {
        "intelligence": 38,
        "strength": 80,
        "speed": 25,
        "durability": 100,
        "power": 98,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "270 lb",
          "122 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Carl Creel",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Greithoth",
          "\"Crusher\" Creel",
          "Rocky Davis",
          "Dynamite Davis",
          "Lightningbolt",
          "Prisoner #24957"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal; former professional boxer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power",
        "relatives": "Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell \"Rocky\" Davis (Hi-Llite) (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/6-absorbing-man.jpg",
        "sm": "images/characters/sm/6-absorbing-man.jpg",
        "md": "images/characters/md/6-absorbing-man.jpg",
        "lg": "images/characters/lg/6-absorbing-man.jpg"
      }
    },
    {
      "id": 8,
      "name": "Adam Strange",
      "slug": "8-adam-strange",
      "powerstats": {
        "intelligence": 69,
        "strength": 10,
        "speed": 33,
        "durability": 40,
        "power": 37,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Adam Strange",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Warrior of Two Worlds",
          "Savior of Rann"
        ],
        "placeOfBirth": "Chicago, Illinois",
        "firstAppearance": "Outsiders #6 (April, 1986)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, archaelogist, ambassador",
        "base": "Rann, Alpha Centauri System"
      },
      "connections": {
        "groupAffiliation": "Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory",
        "relatives": "Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)"
      },
      "images": {
        "xs": "images/characters/xs/8-adam-strange.jpg",
        "sm": "images/characters/sm/8-adam-strange.jpg",
        "md": "images/characters/md/8-adam-strange.jpg",
        "lg": "images/characters/lg/8-adam-strange.jpg"
      }
    },
    {
      "id": 10,
      "name": "Agent Bob",
      "slug": "10-agent-bob",
      "powerstats": {
        "intelligence": 10,
        "strength": 8,
        "speed": 13,
        "durability": 5,
        "power": 5,
        "combat": 20
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "181 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Bob",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bob",
          "agent of Hydra",
          "Bob",
          "agent of A.I.M"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Cable & Deadpool #38 (May, 2007)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Mercenary, janitor; former pirate, terrorist",
        "base": "Mobile; formerly Manhattan, Hellcarrier"
      },
      "connections": {
        "groupAffiliation": "A.I.M., Deadpool; formerly Agency X, Hydra",
        "relatives": "Allison (ex-wife); Terry and Howie (sons)"
      },
      "images": {
        "xs": "images/characters/xs/10-agent-bob.jpg",
        "sm": "images/characters/sm/10-agent-bob.jpg",
        "md": "images/characters/md/10-agent-bob.jpg",
        "lg": "images/characters/lg/10-agent-bob.jpg"
      }
    },
    {
      "id": 11,
      "name": "Agent Zero",
      "slug": "11-agent-zero",
      "powerstats": {
        "intelligence": 75,
        "strength": 28,
        "speed": 38,
        "durability": 80,
        "power": 72,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Christoph Nord",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Maverick"
        ],
        "placeOfBirth": "Unrevealed location in former East Germany",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Mercenary, former government operative, freedom fighter",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington",
        "relatives": "Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)"
      },
      "images": {
        "xs": "images/characters/xs/11-agent-zero.jpg",
        "sm": "images/characters/sm/11-agent-zero.jpg",
        "md": "images/characters/md/11-agent-zero.jpg",
        "lg": "images/characters/lg/11-agent-zero.jpg"
      }
    },
    {
      "id": 12,
      "name": "Air-Walker",
      "slug": "12-air-walker",
      "powerstats": {
        "intelligence": 50,
        "strength": 85,
        "speed": 100,
        "durability": 85,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Gabriel Lan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Xandar, a planet in the Tranta system, Andromeda galaxy",
        "firstAppearance": "Fantastic Four #120",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Former starship captain, Herald of Galactus",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Former member of Nova Corps, Heralds of Galactus",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/12-air-walker.jpg",
        "sm": "images/characters/sm/12-air-walker.jpg",
        "md": "images/characters/md/12-air-walker.jpg",
        "lg": "images/characters/lg/12-air-walker.jpg"
      }
    },
    {
      "id": 13,
      "name": "Ajax",
      "slug": "13-ajax",
      "powerstats": {
        "intelligence": 56,
        "strength": 48,
        "speed": 35,
        "durability": 80,
        "power": 34,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Francis",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "\"Frankie\"",
          "the A-Man",
          "the Attending"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Deadpool #14 (March, 1998)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Weapon X",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/13-ajax.jpg",
        "sm": "images/characters/sm/13-ajax.jpg",
        "md": "images/characters/md/13-ajax.jpg",
        "lg": "images/characters/lg/13-ajax.jpg"
      }
    },
    {
      "id": 14,
      "name": "Alan Scott",
      "slug": "14-alan-scott",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 23,
        "durability": 90,
        "power": 100,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "201 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Alan Ladd Wellington Scott",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Lantern",
          "White King",
          "Sentinal"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "All-American Comics 16 (1940)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City and New York City; Formerly Capitol City"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron",
        "relatives": "Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/14-alan-scott.jpg",
        "sm": "images/characters/sm/14-alan-scott.jpg",
        "md": "images/characters/md/14-alan-scott.jpg",
        "lg": "images/characters/lg/14-alan-scott.jpg"
      }
    },
    {
      "id": 17,
      "name": "Alfred Pennyworth",
      "slug": "17-alfred-pennyworth",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 17,
        "durability": 10,
        "power": 7,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "160 lb",
          "72 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Alfred Thaddeus Crane Pennyworth",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Alfred Beagle"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #16 (April, 1943)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Butler; Caretaker, former Actor; Field Medic; Government Agent",
        "base": "Wayne Manor; Batcave; Gotham City"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Outsiders",
        "relatives": "Jarvis Pennyworth (father, deceased), Wilfred Pennyworth (older brother), Daphne Pennyworth (niece); Bruce Wayne (Batman, legal ward)"
      },
      "images": {
        "xs": "images/characters/xs/17-alfred-pennyworth.jpg",
        "sm": "images/characters/sm/17-alfred-pennyworth.jpg",
        "md": "images/characters/md/17-alfred-pennyworth.jpg",
        "lg": "images/characters/lg/17-alfred-pennyworth.jpg"
      }
    },
    {
      "id": 18,
      "name": "Alien",
      "slug": "18-alien",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 42,
        "durability": 90,
        "power": 57,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Xenomorph XX121",
        "height": [
          "8'0",
          "244 cm"
        ],
        "weight": [
          "375 lb",
          "169 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Xenomorph",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Your chest :)",
        "firstAppearance": "Alien (1979)",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Alien Queen (mother)"
      },
      "images": {
        "xs": "images/characters/xs/18-alien.jpg",
        "sm": "images/characters/sm/18-alien.jpg",
        "md": "images/characters/md/18-alien.jpg",
        "lg": "images/characters/lg/18-alien.jpg"
      }
    },
    {
      "id": 20,
      "name": "Amazo",
      "slug": "20-amazo",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "8'5",
          "257 cm"
        ],
        "weight": [
          "385 lb",
          "173 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Professor Ivos Amazing Android",
          "Timazo",
          "Humazo",
          "Hourmazo"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Brave and the Bold #30 (July, 1960)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly the Secret Society of Super Villains",
        "relatives": "Professor Ivo (creator), Kid Amazo (cyborg offspring)"
      },
      "images": {
        "xs": "images/characters/xs/20-amazo.jpg",
        "sm": "images/characters/sm/20-amazo.jpg",
        "md": "images/characters/md/20-amazo.jpg",
        "lg": "images/characters/lg/20-amazo.jpg"
      }
    },
    {
      "id": 23,
      "name": "Angel",
      "slug": "23-angel",
      "powerstats": {
        "intelligence": 75,
        "strength": 30,
        "speed": 58,
        "durability": 90,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Vampire",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Liam",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Angelus",
          "Twilight"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Kathy (sister), Connor (son), Twilight (\"child\")"
      },
      "images": {
        "xs": "images/characters/xs/23-angel.jpg",
        "sm": "images/characters/sm/23-angel.jpg",
        "md": "images/characters/md/23-angel.jpg",
        "lg": "images/characters/lg/23-angel.jpg"
      }
    },
    {
      "id": 24,
      "name": "Angel",
      "slug": "24-angel",
      "powerstats": {
        "intelligence": 63,
        "strength": 13,
        "speed": 46,
        "durability": 64,
        "power": 28,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "150 lb",
          "68 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Warren Kenneth Worthington III",
        "alterEgos": "Archangel",
        "aliases": [
          "Formerly Death",
          "Dark Angel",
          "Angel",
          "Avenging Angel",
          "Archangel"
        ],
        "placeOfBirth": "Centerport, Long Island, New York",
        "firstAppearance": "X-Men #54-56 (1969)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, chairman & principal stockholder of Worthington Industries, former terrorist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, Mutantes Sans Fronti?res, Hellfire Club; formerly Secret Defenders, X-Factor/X-Terminators, Horsemen of Apocalypse, Defenders, Death's champions, Champions of Los Angeles",
        "relatives": "Warren Kenneth Worthington Sr. (grandfather, deceased), Warren Kenneth Worthington Jr. (father, deceased), Kathryn Worthington (mother, deceased), Burtram \"Burt\" Worthington (Dazzler, paternal uncle), unnamed cousin"
      },
      "images": {
        "xs": "images/characters/xs/24-angel.jpg",
        "sm": "images/characters/sm/24-angel.jpg",
        "md": "images/characters/md/24-angel.jpg",
        "lg": "images/characters/lg/24-angel.jpg"
      }
    },
    {
      "id": 25,
      "name": "Angel Dust",
      "slug": "25-angel-dust",
      "powerstats": {
        "intelligence": 38,
        "strength": 55,
        "speed": 23,
        "durability": 42,
        "power": 17,
        "combat": 30
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "126 lb",
          "57 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Christina",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Angel",
          "Dusty"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Morlocks #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Chicago, Illinois"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/25-angel-dust.jpg",
        "sm": "images/characters/sm/25-angel-dust.jpg",
        "md": "images/characters/md/25-angel-dust.jpg",
        "lg": "images/characters/lg/25-angel-dust.jpg"
      }
    },
    {
      "id": 26,
      "name": "Angel Salvadore",
      "slug": "26-angel-salvadore",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 28,
        "durability": 28,
        "power": 56,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "121 lb",
          "54 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Angel Salvadore Bohusk",
        "alterEgos": "Tempest",
        "aliases": [
          "Tempest"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New X-Men #118 (November, 2001)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly New Warriors; Special Class",
        "relatives": "Tito Bohusk (son); Axel Bohusk (son); Kara Bohusk (daughter); three other unidentified children;"
      },
      "images": {
        "xs": "images/characters/xs/26-angel-salvadore.jpg",
        "sm": "images/characters/sm/26-angel-salvadore.jpg",
        "md": "images/characters/md/26-angel-salvadore.jpg",
        "lg": "images/characters/lg/26-angel-salvadore.jpg"
      }
    },
    {
      "id": 28,
      "name": "Animal Man",
      "slug": "28-animal-man",
      "powerstats": {
        "intelligence": 56,
        "strength": 48,
        "speed": 47,
        "durability": 85,
        "power": 73,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Bernhard Baker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Human Zoo; A-Man; The Man with Animal Powers"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Strange Adventures #180 (September, 1965)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "San Diego, California"
      },
      "connections": {
        "groupAffiliation": "Formerly Animal Masters, Forgotten Heroes, Justice League of America, Justice League Europe",
        "relatives": "Ellen Frazier (wife), Cliff Baker (son), Maxine Baker (daughter), unnamed second daughter, Frank Baker, Jr. (father), Phyllis Baker (mother), unnamed sister, Frank, Sr (grandfather), Teddy (great grandfather), Sherman (great-great grandfather), Jack (great-great-great grandfather), Mary Frazier (mother-in-law), Dudley (uncle-in-law), Annie Cassidy (mother of second daughter), Lucy Cassidy (half-sister of second daughter)"
      },
      "images": {
        "xs": "images/characters/xs/28-animal-man.jpg",
        "sm": "images/characters/sm/28-animal-man.jpg",
        "md": "images/characters/md/28-animal-man.jpg",
        "lg": "images/characters/lg/28-animal-man.jpg"
      }
    },
    {
      "id": 29,
      "name": "Annihilus",
      "slug": "29-annihilus",
      "powerstats": {
        "intelligence": 75,
        "strength": 80,
        "speed": 47,
        "durability": 56,
        "power": 59,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Annihilus",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Living Death That Walks",
          "Lord of the Negative Zone"
        ],
        "placeOfBirth": "Planet of Arthros, Sector 17A, Negative Zone",
        "firstAppearance": "Fantastic Four Annual #6 (1968)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Conqueror, scavenger",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Sometime ally of Blastaar",
        "relatives": "Annihilus is a series of clonal scions"
      },
      "images": {
        "xs": "images/characters/xs/29-annihilus.jpg",
        "sm": "images/characters/sm/29-annihilus.jpg",
        "md": "images/characters/md/29-annihilus.jpg",
        "lg": "images/characters/lg/29-annihilus.jpg"
      }
    },
    {
      "id": 30,
      "name": "Ant-Man",
      "slug": "30-ant-man",
      "powerstats": {
        "intelligence": 100,
        "strength": 18,
        "speed": 23,
        "durability": 28,
        "power": 32,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'11",
          "211 cm"
        ],
        "weight": [
          "270 lb",
          "122 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Hank Pym",
        "alterEgos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
        "aliases": [
          "Hank Pym",
          "Doctor Pym",
          "Ant-Man",
          "Goliath",
          "Yellowjacket",
          "Wasp",
          "Earth's Scientist Supreme"
        ],
        "placeOfBirth": "Elmsford, New York",
        "firstAppearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
        "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
      },
      "connections": {
        "groupAffiliation": "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/30-ant-man.jpg",
        "sm": "images/characters/sm/30-ant-man.jpg",
        "md": "images/characters/md/30-ant-man.jpg",
        "lg": "images/characters/lg/30-ant-man.jpg"
      }
    },
    {
      "id": 31,
      "name": "Ant-Man II",
      "slug": "31-ant-man-ii",
      "powerstats": {
        "intelligence": 75,
        "strength": 18,
        "speed": 17,
        "durability": 40,
        "power": 53,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Scott Lang",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Myrmidon",
          "Scott Edward Harris Lang"
        ],
        "placeOfBirth": "Coral Gables, Florida",
        "firstAppearance": "Avengers Vol 1 #181 (March, 1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Electronics Technician,",
        "base": "South Beach, Miami, Florida; formerly Farmingdale, Long Island, New York"
      },
      "connections": {
        "groupAffiliation": "Ant-Man Security Solutions; formerly Future Foundation (leader), Fantastic Four (leader), Defenders, Avengers, Heroes For Hire, Stark Industries",
        "relatives": "Cassandra Eleanor Lang (daughter), Ruth (sister), Carl (brother-in-law), Peggy Rae (ex-wife)"
      },
      "images": {
        "xs": "images/characters/xs/31-ant-man-ii.jpg",
        "sm": "images/characters/sm/31-ant-man-ii.jpg",
        "md": "images/characters/md/31-ant-man-ii.jpg",
        "lg": "images/characters/lg/31-ant-man-ii.jpg"
      }
    },
    {
      "id": 32,
      "name": "Anti-Monitor",
      "slug": "32-anti-monitor",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 50,
        "durability": 100,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "200",
          "61.0 meters"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Monitor",
          "Mobius"
        ],
        "placeOfBirth": "Moon of Qward",
        "firstAppearance": "Crisis on Infinite Earths #4",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Qward, Antimatter Universe"
      },
      "connections": {
        "groupAffiliation": "Sinestro Corps, Weaponers of Qward, Thunderers of Qward, Shadow Demons",
        "relatives": "Monitor (\"brother\"), The Monitors"
      },
      "images": {
        "xs": "images/characters/xs/32-anti-monitor.jpg",
        "sm": "images/characters/sm/32-anti-monitor.jpg",
        "md": "images/characters/md/32-anti-monitor.jpg",
        "lg": "images/characters/lg/32-anti-monitor.jpg"
      }
    },
    {
      "id": 34,
      "name": "Anti-Venom",
      "slug": "34-anti-venom",
      "powerstats": {
        "intelligence": 75,
        "strength": 60,
        "speed": 65,
        "durability": 90,
        "power": 96,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "7'6",
          "229 cm"
        ],
        "weight": [
          "795 lb",
          "358 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Eddie Brock",
        "alterEgos": "Toxin, Venom",
        "aliases": [
          "Eddie",
          "Edwin Brock",
          "Venom",
          "Lethal Protector",
          "White Venom",
          "998th"
        ],
        "placeOfBirth": "San Francisco, California",
        "firstAppearance": "Amazing Spider-Man #569 (as Anti-Venom)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Vigilante; former journalist for the Daily Globe",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes' relatives: Toxin Symbiote (current symbiote, former grandson), Venom Symbiote (former symbiote, grandfather, former brother), Agony, Phage, Riot, Lasher (uncles, former sons), Scorn (sister, former niece), Carnage (father, former son), Scream (aunt, former daughter, deceased), Hybrid (uncle, former son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/34-anti-venom.jpg",
        "sm": "images/characters/sm/34-anti-venom.jpg",
        "md": "images/characters/md/34-anti-venom.jpg",
        "lg": "images/characters/lg/34-anti-venom.jpg"
      }
    },
    {
      "id": 35,
      "name": "Apocalypse",
      "slug": "35-apocalypse",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 33,
        "durability": 100,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "7'0",
          "213 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "En Sabah Nur",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Eternal One",
          "the High Lord",
          "Set",
          "Huitxilopochti",
          "Sauru",
          "Kali-Ma"
        ],
        "placeOfBirth": "Akkaba, Egypt",
        "firstAppearance": "X-Factor #5 (June, 1986)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Student; formerly Conqueror; Scientist",
        "base": "Celestial Ship, mobile"
      },
      "connections": {
        "groupAffiliation": "Clan Akkaba, employer of Apocalypse's Horsemen, Dark Riders, former employer of the Alliance of Evil, 198",
        "relatives": "Baal of the Crimson Sands (adopted father, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/35-apocalypse.jpg",
        "sm": "images/characters/sm/35-apocalypse.jpg",
        "md": "images/characters/md/35-apocalypse.jpg",
        "lg": "images/characters/lg/35-apocalypse.jpg"
      }
    },
    {
      "id": 36,
      "name": "Aquababy",
      "slug": "36-aquababy",
      "powerstats": {
        "intelligence": 10,
        "strength": 16,
        "speed": 12,
        "durability": 14,
        "power": 37,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Arthur Curry, Jr.",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Aquaman #23 (October, 1965)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Atlantis"
      },
      "connections": {
        "groupAffiliation": "Aquaman Family",
        "relatives": "Aquaman (Orin/Arthur Curry) (father); Mera (mother); Koryak (half-brother); A.J. (half-brother); Atlan (grandfather); Tom Curry (adoptive grandfather, deceased); Orm Marius (uncle); Kordax (ancestor, deceased); Arthur Joseph Curry (adoptive cousin)"
      },
      "images": {
        "xs": "images/characters/xs/36-aquababy.jpg",
        "sm": "images/characters/sm/36-aquababy.jpg",
        "md": "images/characters/md/36-aquababy.jpg",
        "lg": "images/characters/lg/36-aquababy.jpg"
      }
    },
    {
      "id": 37,
      "name": "Aqualad",
      "slug": "37-aqualad",
      "powerstats": {
        "intelligence": 63,
        "strength": 44,
        "speed": 42,
        "durability": 75,
        "power": 89,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Atlantean",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "235 lb",
          "106 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Garth",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Poseidonis, Atlantis",
        "firstAppearance": "Adventure Comics #269 (February, 1960)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; Magician, former Sidekick",
        "base": "Atlantis"
      },
      "connections": {
        "groupAffiliation": "Aquaman Family; formerly Black Lantern Corps, Sentinels of Magic, Teen Titans",
        "relatives": "Cerdian (son), Dolphin (wife), Berra (mother), Thar (father), Slizzath (uncle) Donna (grand-daughter)"
      },
      "images": {
        "xs": "images/characters/xs/37-aqualad.jpg",
        "sm": "images/characters/sm/37-aqualad.jpg",
        "md": "images/characters/md/37-aqualad.jpg",
        "lg": "images/characters/lg/37-aqualad.jpg"
      }
    },
    {
      "id": 38,
      "name": "Aquaman",
      "slug": "38-aquaman",
      "powerstats": {
        "intelligence": 81,
        "strength": 85,
        "speed": 79,
        "durability": 80,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Atlantean",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "325 lb",
          "146 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Orin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dweller in the Depths",
          "Swimmer",
          "Waterbearer",
          "Mental Man",
          "Aquaboy",
          "Water Wraith"
        ],
        "placeOfBirth": "Atlantis",
        "firstAppearance": "More Fun Comics #73 (November, 1941)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Protector of the Seas and Oceans, King of Poseidonis",
        "base": "Atlantean Royal Palace; Poseidonis, Atlantis"
      },
      "connections": {
        "groupAffiliation": "Justice League, Aquaman Family, Atlantean Royal Family; formerly Black Lantern Corps, Justice League International, Justice League Detroit, U.N.",
        "relatives": "Koryak (son), Arthur Curry, Jr. (son), A.J. (son), Orm Marius (half-brother), Debbie Perkins (half-sister), Drin (adopted brother), Atlanna (mother), Atlan (father), Atlena (aunt), Porm (adopted mother), Tom Curry (adopted father), Mera (wife), Hila (sister-in-law), Haumond (uncle), Kraken (uncle), Honsu (grandfather), Lorelei (grandmother), Manu (ancestor), Nala (ancestor), Fatima (ancestor), Kalunga (ancestor), Gana (ancestor), Fiona (ancestor), Regin (ancestor), Kordax (ancestor), Bazil (ancestor), Cora (ancestor), Illya (ancestor), Dardanus (ancestor), Alloroc (ancestor), Cole (ancestor), Narmea (ancestor), Orin (ancestor), Loma (ancestor), Shalako (ancestor), Thorvall (ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/38-aquaman.jpg",
        "sm": "images/characters/sm/38-aquaman.jpg",
        "md": "images/characters/md/38-aquaman.jpg",
        "lg": "images/characters/lg/38-aquaman.jpg"
      }
    },
    {
      "id": 39,
      "name": "Arachne",
      "slug": "39-arachne",
      "powerstats": {
        "intelligence": 50,
        "strength": 48,
        "speed": 50,
        "durability": 70,
        "power": 71,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Julia Carpenter",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Spider-Woman",
          "Madame Web"
        ],
        "placeOfBirth": "Los Angeles, California",
        "firstAppearance": "Marvel Super Heroes Secret Wars #6",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, fugitive, former government agent",
        "base": "Mobile; formerly Denver, Colorado; formerly Avengers Compound, Los Angeles, California"
      },
      "connections": {
        "groupAffiliation": "Omega Flight, formerly Commission on Superhuman Activities , Freedom Force , Avengers , Secret Defenders , Force Works , Queen?s Vengeance , West Coast Avengers, Secret Avengers (Civil War)",
        "relatives": "Rachel Carpenter (daughter), Walter Cornwall (father), Elizabeth Cornwall (mother), Larry Carpenter (ex-husband, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/39-arachne.jpg",
        "sm": "images/characters/sm/39-arachne.jpg",
        "md": "images/characters/md/39-arachne.jpg",
        "lg": "images/characters/lg/39-arachne.jpg"
      }
    },
    {
      "id": 40,
      "name": "Archangel",
      "slug": "40-archangel",
      "powerstats": {
        "intelligence": 63,
        "strength": 13,
        "speed": 58,
        "durability": 64,
        "power": 35,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "150 lb",
          "68 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Warren Kenneth Worthington III",
        "alterEgos": "Angel",
        "aliases": [
          "War",
          "Dark Angel",
          "Death",
          "Avenging Angel"
        ],
        "placeOfBirth": "Centerport, Long Island, New York",
        "firstAppearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Chairman & principal stockholder of Worthington Industries, Multi-Millionaire, Heir, former terrorist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men (founding member); X-Force; Mutantes Sans Fronti?res; Hellfire Club; formerly X-Club (founding member); Death's champions; Secret Defenders; X-Factor/X-Terminators (founding member); Horsemen of Apocalypse; Defenders; Champions of Los Angeles (fou",
        "relatives": "Wallace Worthington (paternal ancestor, deceased), Warren Worthington Sr. (paternal grandfather, deceased), Warren Worthington Jr. (father, deceased), Kathryn Worthington (mother, deceased), Burt Worthington (paternal uncle), Mimi (maternal aunt), unnamed distant cousin"
      },
      "images": {
        "xs": "images/characters/xs/40-archangel.jpg",
        "sm": "images/characters/sm/40-archangel.jpg",
        "md": "images/characters/md/40-archangel.jpg",
        "lg": "images/characters/lg/40-archangel.jpg"
      }
    },
    {
      "id": 41,
      "name": "Arclight",
      "slug": "41-arclight",
      "powerstats": {
        "intelligence": 38,
        "strength": 63,
        "speed": 23,
        "durability": 42,
        "power": 52,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "126 lb",
          "57 kg"
        ],
        "eyeColor": "Violet",
        "hairColor": "Purple"
      },
      "biography": {
        "fullName": "Philippa Sontag",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Vietnam",
        "firstAppearance": "(In shadow) Uncanny X-Men #210 (1986), (fully) X-Factor #10 (1986)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Terrorist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Marauders formerly, 198, Femizons",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/41-arclight.jpg",
        "sm": "images/characters/sm/41-arclight.jpg",
        "md": "images/characters/md/41-arclight.jpg",
        "lg": "images/characters/lg/41-arclight.jpg"
      }
    },
    {
      "id": 42,
      "name": "Ardina",
      "slug": "42-ardina",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 100,
        "durability": 80,
        "power": 100,
        "combat": 25
      },
      "appearance": {
        "gender": "Female",
        "race": "Alien",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "218 lb",
          "98 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Orange"
      },
      "biography": {
        "fullName": "Ardina",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Order #4",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Norrin Radd (Silver Surfer, clonal source), Clea (creator)"
      },
      "images": {
        "xs": "images/characters/xs/42-ardina.jpg",
        "sm": "images/characters/sm/42-ardina.jpg",
        "md": "images/characters/md/42-ardina.jpg",
        "lg": "images/characters/lg/42-ardina.jpg"
      }
    },
    {
      "id": 43,
      "name": "Ares",
      "slug": "43-ares",
      "powerstats": {
        "intelligence": 75,
        "strength": 82,
        "speed": 35,
        "durability": 80,
        "power": 84,
        "combat": 101
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "600 lb",
          "270 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "God of War",
          "Mister Talon",
          "Mars",
          "Warhawk"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Thor #129",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Avengers Tower, formerly Olympus"
      },
      "connections": {
        "groupAffiliation": "Avengers, Mighty Avengers, Olympic Pantheon; Warhawks",
        "relatives": "Zeus (father), Hera (mother), Enyo (wife), Deimos, Phobos, Alexander (sons), Neptune, Pluto (uncles), Demeter, Hestia (aunts), Hephaestus (brother), Apollo, Dionysus, Hercules, Hermes(half-brothers), Artemis, Pallas Athena, Venus, (half-sisters)"
      },
      "images": {
        "xs": "images/characters/xs/43-ares.jpg",
        "sm": "images/characters/sm/43-ares.jpg",
        "md": "images/characters/md/43-ares.jpg",
        "lg": "images/characters/lg/43-ares.jpg"
      }
    },
    {
      "id": 44,
      "name": "Ariel",
      "slug": "44-ariel",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 94,
        "combat": 28
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Purple",
        "hairColor": "Pink"
      },
      "biography": {
        "fullName": "Ariel",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fallen Angels #1 (1987)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Leader, refugee alien; former alien mutant-hunter and hedonist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, Formerly Fallen Angels",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/44-ariel.jpg",
        "sm": "images/characters/sm/44-ariel.jpg",
        "md": "images/characters/md/44-ariel.jpg",
        "lg": "images/characters/lg/44-ariel.jpg"
      }
    },
    {
      "id": 45,
      "name": "Armor",
      "slug": "45-armor",
      "powerstats": {
        "intelligence": 50,
        "strength": 63,
        "speed": 12,
        "durability": 80,
        "power": 55,
        "combat": 54
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "112 lb",
          "50 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Hisako Ichiki",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "X-Girl",
          "Kid"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Astonishing X-Men #4 (2004)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly: Xavier Institute Student Body, New X-Men",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/45-armor.jpg",
        "sm": "images/characters/sm/45-armor.jpg",
        "md": "images/characters/md/45-armor.jpg",
        "lg": "images/characters/lg/45-armor.jpg"
      }
    },
    {
      "id": 48,
      "name": "Atlas",
      "slug": "48-atlas",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 25,
        "durability": 100,
        "power": 98,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Erik Josten",
        "alterEgos": "Goliath, Power Man, Smuggler",
        "aliases": [
          "Power Man",
          "Smuggler",
          "Goliath",
          "Shatterfist",
          "Intruder from Beyond",
          "Edward Jantzen"
        ],
        "placeOfBirth": "Milwaukee, Wisconsin",
        "firstAppearance": "Incredible Hulk #449",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former professional criminal, mercenary, dock worker, soldier",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Thunderbolts, formerly Revengers, Defenders (New Jersey Initiative team), Masters of Evil, Maggia, Grim Reaper's Lethal Legion, Mandarin's Minions, Emissaries of Evil; former partner of Citizen V (Dallas Riordan) and Swordsman, Count Nefaria's Lethal Legi",
        "relatives": "Unidentified parents (deceased), Carl (brother, deceased), Conrad (brother), Lindy (sister, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/48-atlas.jpg",
        "sm": "images/characters/sm/48-atlas.jpg",
        "md": "images/characters/md/48-atlas.jpg",
        "lg": "images/characters/lg/48-atlas.jpg"
      }
    },
    {
      "id": 49,
      "name": "Atlas",
      "slug": "49-atlas",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 42,
        "durability": 100,
        "power": 27,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "280 lb",
          "126 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Atlas the Great",
          "Atlas the Untamed"
        ],
        "placeOfBirth": "Crystal Mountain",
        "firstAppearance": "Action Comics #121",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Formely; Hyssa, Metropolis"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/49-atlas.jpg",
        "sm": "images/characters/sm/49-atlas.jpg",
        "md": "images/characters/md/49-atlas.jpg",
        "lg": "images/characters/lg/49-atlas.jpg"
      }
    },
    {
      "id": 52,
      "name": "Atom Girl",
      "slug": "52-atom-girl",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 38,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Salu Digby",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Shrinking Violet"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1 (2004)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "United Planets, 31st century"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/52-atom-girl.jpg",
        "sm": "images/characters/sm/52-atom-girl.jpg",
        "md": "images/characters/md/52-atom-girl.jpg",
        "lg": "images/characters/lg/52-atom-girl.jpg"
      }
    },
    {
      "id": 53,
      "name": "Atom II",
      "slug": "53-atom-ii",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 33,
        "durability": 45,
        "power": 40,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Ray Palmer",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Mighty Mite",
          "the Tiny Titan",
          "the World's Smallest Hero"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Showcase #34",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Physics Professor",
        "base": "Ivy Town"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, formerly; Suicide Squad, Teen Titans",
        "relatives": "Jean Loring (ex-wife, deceased), Princess Laethwen (wife, deceased), Danny Palmer (brother, deceased), David Palmer (father), Susan Palmer (mother, deceased), David Palmer (uncle)"
      },
      "images": {
        "xs": "images/characters/xs/53-atom-ii.jpg",
        "sm": "images/characters/sm/53-atom-ii.jpg",
        "md": "images/characters/md/53-atom-ii.jpg",
        "lg": "images/characters/lg/53-atom-ii.jpg"
      }
    },
    {
      "id": 56,
      "name": "Aurora",
      "slug": "56-aurora",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 96,
        "durability": 60,
        "power": 74,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jeanne-Marie Beaubier",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sister Beaubier"
        ],
        "placeOfBirth": "Montreal, Quebec, Canada",
        "firstAppearance": "X-Men #121 (1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former terrorist, nun, history/geography teacher",
        "base": "Laval, Quebec, Canada"
      },
      "connections": {
        "groupAffiliation": "Alpha Flight, Alpha Flight (Space Program), Royal Canadian Mounted Police; formerly Weapon X, ally of the Havok's Brotherhood, Headbangers , Children of the Vault, X-Men (interim member)",
        "relatives": "Jean-Baptiste Beaubier (father, deceased), unidentified mother (deceased), Jean-Paul Beaubier (Northstar, twin brother) Joanna Beaubier (adopted niece, deceased); Lois and Genevieve Martin (first cousins once removed/adopted parents, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/56-aurora.jpg",
        "sm": "images/characters/sm/56-aurora.jpg",
        "md": "images/characters/md/56-aurora.jpg",
        "lg": "images/characters/lg/56-aurora.jpg"
      }
    },
    {
      "id": 57,
      "name": "Azazel",
      "slug": "57-azazel",
      "powerstats": {
        "intelligence": 50,
        "strength": 11,
        "speed": 47,
        "durability": 95,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Neyaphem",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "149 lb",
          "67 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Semihazah",
          "Duma",
          "Keriel",
          "Mastema",
          "Beliar",
          "Gadreel",
          "Beelzebub",
          "Satan"
        ],
        "placeOfBirth": "Isla des Demonas, Caribbean Sea",
        "firstAppearance": "Uncanny X-Men #428 (2003)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Leader of the Neyaphem",
        "base": "Brimstone Dimension; formerly La Isla des Demonas, Bermuda"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Kurt Wagner (Nightcrawler, son), Nils Styger (Abyss, son), Kiwi Black (son), numberous other offspring (deceased)"
      },
      "images": {
        "xs": "images/characters/xs/57-azazel.jpg",
        "sm": "images/characters/sm/57-azazel.jpg",
        "md": "images/characters/md/57-azazel.jpg",
        "lg": "images/characters/lg/57-azazel.jpg"
      }
    },
    {
      "id": 58,
      "name": "Azrael",
      "slug": "58-azrael",
      "powerstats": {
        "intelligence": 63,
        "strength": 18,
        "speed": 17,
        "durability": 20,
        "power": 35,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Michael Washington Lane",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bat-Devil; Bat-Ghost"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "Batman #672 (February, 2008)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Police Officer, vigilante",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Order of St. Dumas; formerly Gotham City Police Department; Three Ghosts of Batman",
        "relatives": "Mitchell Lane (father; deceased), Barbara Lane (mother; deceased), Marion Lane (brother; deceased), Gwendolyn Lane (sister; deceased), Chante Coles (wife; deceased), Henry Mitchell Lane (son; deceased), Jenny Lane (Sister-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/58-azrael.jpg",
        "sm": "images/characters/sm/58-azrael.jpg",
        "md": "images/characters/md/58-azrael.jpg",
        "lg": "images/characters/lg/58-azrael.jpg"
      }
    },
    {
      "id": 60,
      "name": "Bane",
      "slug": "60-bane",
      "powerstats": {
        "intelligence": 88,
        "strength": 38,
        "speed": 23,
        "durability": 56,
        "power": 51,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "400 lb",
          "180 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman: Vengeance of Bane #1 (January, 1993)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Santa Prisca"
      },
      "connections": {
        "groupAffiliation": "Suicide Squad, The Secret Society of Super Villains",
        "relatives": "King Snake (father)"
      },
      "images": {
        "xs": "images/characters/xs/60-bane.jpg",
        "sm": "images/characters/sm/60-bane.jpg",
        "md": "images/characters/md/60-bane.jpg",
        "lg": "images/characters/lg/60-bane.jpg"
      }
    },
    {
      "id": 61,
      "name": "Banshee",
      "slug": "61-banshee",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 58,
        "durability": 40,
        "power": 63,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Strawberry Blond"
      },
      "biography": {
        "fullName": "Sean Cassidy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Death"
        ],
        "placeOfBirth": "Cassidy Keep, Ireland",
        "firstAppearance": "X-Men #28 (January, 1967)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Currently founder and director of operation for X-Corps, formerly Adventurer and Headmaster at the Massachusetts Academy, in charge of Generation X, Interpol Inspector and Agent, freelance detective, professional criminal, involuntary operative for Factor",
        "base": "Muir Island, off the coast of Scotland. formerly Massachusetts Academy; Xavier Institute"
      },
      "connections": {
        "groupAffiliation": "Currently X-Corps, formerly Generation X, Factor Three, X-Men",
        "relatives": "Maeve Rourke Cassidy (wife, deceased), Thomas (Black Tom, cousin), Theresa Rourke (Siryn, daughter)"
      },
      "images": {
        "xs": "images/characters/xs/61-banshee.jpg",
        "sm": "images/characters/sm/61-banshee.jpg",
        "md": "images/characters/md/61-banshee.jpg",
        "lg": "images/characters/lg/61-banshee.jpg"
      }
    },
    {
      "id": 62,
      "name": "Bantam",
      "slug": "62-bantam",
      "powerstats": {
        "intelligence": 25,
        "strength": 53,
        "speed": 23,
        "durability": 54,
        "power": 21,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "119 lb",
          "54 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Roberto Velasquez",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Civil War: Front Line #3 (September, 2006)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, boxing trainer, former boxer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Captain America, Pro-Registration forces",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/62-bantam.jpg",
        "sm": "images/characters/sm/62-bantam.jpg",
        "md": "images/characters/md/62-bantam.jpg",
        "lg": "images/characters/lg/62-bantam.jpg"
      }
    },
    {
      "id": 63,
      "name": "Batgirl",
      "slug": "63-batgirl",
      "powerstats": {
        "intelligence": 88,
        "strength": 11,
        "speed": 33,
        "durability": 40,
        "power": 34,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "126 lb",
          "57 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Barbara Gordon",
        "alterEgos": "Oracle",
        "aliases": [
          "Oracle",
          "Bluebelle"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #359",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City, formerly Metropolis, Platinum Flats"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "James Gordon (father) ? Barbara Eileen (mother) ? James Gordon, Jr. (brother)"
      },
      "images": {
        "xs": "images/characters/xs/63-batgirl.jpg",
        "sm": "images/characters/sm/63-batgirl.jpg",
        "md": "images/characters/md/63-batgirl.jpg",
        "lg": "images/characters/lg/63-batgirl.jpg"
      }
    },
    {
      "id": 66,
      "name": "Batgirl IV",
      "slug": "66-batgirl-iv",
      "powerstats": {
        "intelligence": 69,
        "strength": 12,
        "speed": 27,
        "durability": 56,
        "power": 46,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Cassandra Cain",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kasumi",
          "various mundane persona,"
        ],
        "placeOfBirth": "League of Assassins (exact base is unknown)",
        "firstAppearance": "Batman: Legends of the Dark Knight #120",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City; Bl?dhaven; Tibet; New York City"
      },
      "connections": {
        "groupAffiliation": "Titans East, League of Assassins, Batman Family, Justice League Elite, Young Justice",
        "relatives": "David Cain (father), Lady Shiva (mother), Carolyn (aunt, deceased), Annalea (sibling, deceased), 'The Mad Dog' (sibling)"
      },
      "images": {
        "xs": "images/characters/xs/66-batgirl-iv.jpg",
        "sm": "images/characters/sm/66-batgirl-iv.jpg",
        "md": "images/characters/md/66-batgirl-iv.jpg",
        "lg": "images/characters/lg/66-batgirl-iv.jpg"
      }
    },
    {
      "id": 68,
      "name": "Batgirl VI",
      "slug": "68-batgirl-vi",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 22,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Stephanie Brown",
        "alterEgos": "Spoiler",
        "aliases": [
          "Steph",
          "Robin",
          "Marion Todd",
          "Spoiler"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "College student at Gotham University",
        "base": "Gotham Heights, Gotham City"
      },
      "connections": {
        "groupAffiliation": "The Batman Family, formerly the Birds of Prey, Tim Drake (on-and-off boyfriend)",
        "relatives": "Arthur Brown (The Cluemaster, father), Crystal Brown (mother), unnamed daughter (given up for adoption)"
      },
      "images": {
        "xs": "images/characters/xs/68-batgirl-vi.jpg",
        "sm": "images/characters/sm/68-batgirl-vi.jpg",
        "md": "images/characters/md/68-batgirl-vi.jpg",
        "lg": "images/characters/lg/68-batgirl-vi.jpg"
      }
    },
    {
      "id": 69,
      "name": "Batman",
      "slug": "69-batman",
      "powerstats": {
        "intelligence": 81,
        "strength": 40,
        "speed": 29,
        "durability": 55,
        "power": 63,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Terry McGinnis",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Batman II",
          "The Tomorrow Knight",
          "The second Dark Knight",
          "The Dark Knight of Tomorrow",
          "Batman Beyond"
        ],
        "placeOfBirth": "Gotham City, 25th Century",
        "firstAppearance": "Batman Beyond #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "21st Century Gotham City"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Justice League Unlimited",
        "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
      },
      "images": {
        "xs": "images/characters/xs/69-batman.jpg",
        "sm": "images/characters/sm/69-batman.jpg",
        "md": "images/characters/md/69-batman.jpg",
        "lg": "images/characters/lg/69-batman.jpg"
      }
    },
    {
      "id": 70,
      "name": "Batman",
      "slug": "70-batman",
      "powerstats": {
        "intelligence": 100,
        "strength": 26,
        "speed": 27,
        "durability": 50,
        "power": 47,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "blue",
        "hairColor": "black"
      },
      "biography": {
        "fullName": "Bruce Wayne",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Insider",
          "Matches Malone"
        ],
        "placeOfBirth": "Crest Hill, Bristol Township; Gotham County",
        "firstAppearance": "Detective Comics #27",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Businessman",
        "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
        "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
      },
      "images": {
        "xs": "images/characters/xs/70-batman.jpg",
        "sm": "images/characters/sm/70-batman.jpg",
        "md": "images/characters/md/70-batman.jpg",
        "lg": "images/characters/lg/70-batman.jpg"
      }
    },
    {
      "id": 71,
      "name": "Batman II",
      "slug": "71-batman-ii",
      "powerstats": {
        "intelligence": 88,
        "strength": 11,
        "speed": 33,
        "durability": 28,
        "power": 36,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Dick Grayson",
        "alterEgos": "Nightwing, Robin",
        "aliases": [
          "Dick Grayson"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City; formerly Bludhaven, New York City"
      },
      "connections": {
        "groupAffiliation": "Justice League Of America, Batman Family",
        "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/71-batman-ii.jpg",
        "sm": "images/characters/sm/71-batman-ii.jpg",
        "md": "images/characters/md/71-batman-ii.jpg",
        "lg": "images/characters/lg/71-batman-ii.jpg"
      }
    },
    {
      "id": 72,
      "name": "Battlestar",
      "slug": "72-battlestar",
      "powerstats": {
        "intelligence": 50,
        "strength": 53,
        "speed": 35,
        "durability": 74,
        "power": 48,
        "combat": 74
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "295 lb",
          "133 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Lemar Hoskins",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bucky"
        ],
        "placeOfBirth": "Chicago, Illinois",
        "firstAppearance": "Captain America #323 (1986); (as Bucky)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former wrestler, federal operative",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Wild Pack, Bold Urban Commandos (Buckies), former partner of U.S.Agent, operative of the Commission on Superhuman Activities",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/72-battlestar.jpg",
        "sm": "images/characters/sm/72-battlestar.jpg",
        "md": "images/characters/md/72-battlestar.jpg",
        "lg": "images/characters/lg/72-battlestar.jpg"
      }
    },
    {
      "id": 73,
      "name": "Batwoman V",
      "slug": "73-batwoman-v",
      "powerstats": {
        "intelligence": 81,
        "strength": 8,
        "speed": 29,
        "durability": 25,
        "power": 27,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Katherine Rebecca Kane",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "52 #7 (June, 2006)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Batman Family (unofficially), D.E.O, Unknowns",
        "relatives": "Jacob Kane (father), Gabi Kane (mother; deceased), Beth Kane (twin sister), Mary Elizabeth \"Bette\" Kane (cousin), Catherine Hamilton-Kane (stepmother), Philip Kane (uncle), Kane Family"
      },
      "images": {
        "xs": "images/characters/xs/73-batwoman-v.jpg",
        "sm": "images/characters/sm/73-batwoman-v.jpg",
        "md": "images/characters/md/73-batwoman-v.jpg",
        "lg": "images/characters/lg/73-batwoman-v.jpg"
      }
    },
    {
      "id": 75,
      "name": "Beast",
      "slug": "75-beast",
      "powerstats": {
        "intelligence": 94,
        "strength": 48,
        "speed": 38,
        "durability": 60,
        "power": 43,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "402 lb",
          "181 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blue"
      },
      "biography": {
        "fullName": "Henry Philip McCoy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dr. McCoy",
          "Hanko",
          "Kreature",
          "Mutate #666",
          "Magilla Gorilla",
          "Golden Armed Boy"
        ],
        "placeOfBirth": "Dunfee, Illinois",
        "firstAppearance": "X-MEN Vol. 1 #1, (in furry ape form) AMAZING ADVENTURES #11, (in current feline form) NEW X-MEN Vol. 1 #114",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Biochemist, formerly Xavier Institute for Higher Learning science and math Instructor, mutant activist, college lecturer, researcher, professional wrestler",
        "base": "Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "Secret Avengers, S.W.O.R.D.; formerly X-Men (founding member); X-Club (founding member); Initiative; 198; X-Treme X-Men; Acolytes (while mind-controlled); Queen's Vengeance; X-Factor/X-Terminators (founding member); Rejects; Defenders, Avengers",
        "relatives": "Sadie McCoy (paternal grandmother), Norton McCoy (father), Edna McCoy (mother), Robert McCoy (paternal great-uncle), John McCoy (uncle)"
      },
      "images": {
        "xs": "images/characters/xs/75-beast.jpg",
        "sm": "images/characters/sm/75-beast.jpg",
        "md": "images/characters/md/75-beast.jpg",
        "lg": "images/characters/lg/75-beast.jpg"
      }
    },
    {
      "id": 76,
      "name": "Beast Boy",
      "slug": "76-beast-boy",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 50,
        "durability": 70,
        "power": 79,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "150 lb",
          "68 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Garfield Mark Logan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Changeling",
          "Beast-Brat",
          "Green Jeans",
          "Salad-head",
          "Sprout",
          "Tork",
          "Craig Logan"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Doom Patrol #99 (November, 1965)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Struggling Actor",
        "base": "Prague; formerly Hollywood, California; formerly Manhattan, New York"
      },
      "connections": {
        "groupAffiliation": "Teen Titans; former member of the original Doom Patrol, Titans West",
        "relatives": "Mark Logan (father, deceased), Marie Logan (mother, deceased), Steve Dayton/Mento (adoptive father), Rita Farr/Elasti-Girl (adoptive mother), Matt Logan (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/76-beast-boy.jpg",
        "sm": "images/characters/sm/76-beast-boy.jpg",
        "md": "images/characters/md/76-beast-boy.jpg",
        "lg": "images/characters/lg/76-beast-boy.jpg"
      }
    },
    {
      "id": 78,
      "name": "Ben 10",
      "slug": "78-ben-10",
      "powerstats": {
        "intelligence": 10,
        "strength": 7,
        "speed": 8,
        "durability": 10,
        "power": 90,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Benjamin Kirby Tennyson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ben Ten"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Ben 10 S01E01",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/78-ben-10.jpg",
        "sm": "images/characters/sm/78-ben-10.jpg",
        "md": "images/characters/md/78-ben-10.jpg",
        "lg": "images/characters/lg/78-ben-10.jpg"
      }
    },
    {
      "id": 79,
      "name": "Beta Ray Bill",
      "slug": "79-beta-ray-bill",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 35,
        "durability": 95,
        "power": 100,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "480 lb",
          "216 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Beta Ray Bill (translation of his Korbinite name)",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Beta Ray Thor",
          "Simon Walters"
        ],
        "placeOfBirth": "Burning Galaxy",
        "firstAppearance": "Thor #337",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Guardian of the Korbinite race",
        "base": "currently New York City, formerly Asgard, formerly the fleet of Korbinite ships."
      },
      "connections": {
        "groupAffiliation": "ally of the Asgardians, Thor Corps, Star Masters",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/79-beta-ray-bill.jpg",
        "sm": "images/characters/sm/79-beta-ray-bill.jpg",
        "md": "images/characters/md/79-beta-ray-bill.jpg",
        "lg": "images/characters/lg/79-beta-ray-bill.jpg"
      }
    },
    {
      "id": 80,
      "name": "Beyonder",
      "slug": "80-beyonder",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ataxi",
          "The Beyond Realm",
          "Frank",
          "Goblin Force",
          "Goblin King",
          "Goblyn King",
          "Goblin Queen",
          "The One From Beyond",
          "God",
          "Kosmos",
          "Maker"
        ],
        "placeOfBirth": "Created in the Beyond",
        "firstAppearance": "Marvel Super-Heroes Secret Wars #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Was once in a merged form with the Molecule Man but is no longer merged with him.",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/80-beyonder.jpg",
        "sm": "images/characters/sm/80-beyonder.jpg",
        "md": "images/characters/md/80-beyonder.jpg",
        "lg": "images/characters/lg/80-beyonder.jpg"
      }
    },
    {
      "id": 81,
      "name": "Big Barda",
      "slug": "81-big-barda",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 79,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "New God",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Barda Free",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Barda",
          "the Strongest Woman in the World"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Mister Miracle (Volume 1) #4",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City, New Genesis, formerly Apokolips"
      },
      "connections": {
        "groupAffiliation": "Apocalypse, New Gods, Birds of Prey, formerly Female Furies, formerly Justice League of America",
        "relatives": "Big Breeda (mother), Scott Free (Mister Miricle, husband), Highfather Izaya (father-in-law, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/81-big-barda.jpg",
        "sm": "images/characters/sm/81-big-barda.jpg",
        "md": "images/characters/md/81-big-barda.jpg",
        "lg": "images/characters/lg/81-big-barda.jpg"
      }
    },
    {
      "id": 82,
      "name": "Big Daddy",
      "slug": "82-big-daddy",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 12,
        "durability": 32,
        "power": 22,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Damon Macready",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Kick-Ass #4",
        "publisher": "Icon Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Hit-Girl (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/82-big-daddy.jpg",
        "sm": "images/characters/sm/82-big-daddy.jpg",
        "md": "images/characters/md/82-big-daddy.jpg",
        "lg": "images/characters/lg/82-big-daddy.jpg"
      }
    },
    {
      "id": 83,
      "name": "Big Man",
      "slug": "83-big-man",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 23,
        "durability": 28,
        "power": 19,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "157 lb",
          "71 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Frederick Foswell",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Patch"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man # 10 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Reporter, professional criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Daily Bugle, the Enforcers",
        "relatives": "Janice Foswell (daughter), unnamed wife"
      },
      "images": {
        "xs": "images/characters/xs/83-big-man.jpg",
        "sm": "images/characters/sm/83-big-man.jpg",
        "md": "images/characters/md/83-big-man.jpg",
        "lg": "images/characters/lg/83-big-man.jpg"
      }
    },
    {
      "id": 88,
      "name": "Bird-Brain",
      "slug": "88-bird-brain",
      "powerstats": {
        "intelligence": 25,
        "strength": 10,
        "speed": 35,
        "durability": 28,
        "power": 21,
        "combat": 42
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bird-Boy"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The New Mutants #56 (October, 1987)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "New Mutants, Ani-Mate",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/88-bird-brain.jpg",
        "sm": "images/characters/sm/88-bird-brain.jpg",
        "md": "images/characters/md/88-bird-brain.jpg",
        "lg": "images/characters/lg/88-bird-brain.jpg"
      }
    },
    {
      "id": 92,
      "name": "Bishop",
      "slug": "92-bishop",
      "powerstats": {
        "intelligence": 63,
        "strength": 14,
        "speed": 23,
        "durability": 75,
        "power": 100,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "275 lb",
          "124 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Lucas Bishop",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Archbishop"
        ],
        "placeOfBirth": "A mutant relocation camp in an undisclosed location on an alternate 21st Century Earth",
        "firstAppearance": "Uncanny X-Men #282 (November, 1991)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "(current) Adventurer, (former) Commander in the XSE (Xavier's Security Enforcers)",
        "base": "Formerly Xavier Institute for Higher Learning, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "\"Clean City\"; formerly Stryfe; X-Men; X.S.E. (Storm's team); X-Treme X-Men; X.S.E. (Hecate'e's team); The Twelve",
        "relatives": "Burnum Bishop (father, deceased), Kadee Bishop (mother, deceased), Shard (sister, deceased), unnamed grandmother, Gateway (great-grandfather), Aliyah Bishop (alternate reality daughter);"
      },
      "images": {
        "xs": "images/characters/xs/92-bishop.jpg",
        "sm": "images/characters/sm/92-bishop.jpg",
        "md": "images/characters/md/92-bishop.jpg",
        "lg": "images/characters/lg/92-bishop.jpg"
      }
    },
    {
      "id": 93,
      "name": "Bizarro",
      "slug": "93-bizarro",
      "powerstats": {
        "intelligence": 38,
        "strength": 95,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Bizarro",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "345 lb",
          "155 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Bizarro",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superboy Vol. 1 #68 (1958)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "Bizarro World"
      },
      "connections": {
        "groupAffiliation": "Superman Revenge Squad; Bizarros of Bizarro World; former associate of the Secret Society of Super-Villains; Joker League of Anarchy; former partner of Batzarro",
        "relatives": "Bizarro-Lois No. 1 (wife, Pre-Crisis only), Bizarro, Jr. (son, Pre-Crisis only), Bizarro-Lois, Jr. (daughter, Pre-Crisis only)"
      },
      "images": {
        "xs": "images/characters/xs/93-bizarro.jpg",
        "sm": "images/characters/sm/93-bizarro.jpg",
        "md": "images/characters/md/93-bizarro.jpg",
        "lg": "images/characters/lg/93-bizarro.jpg"
      }
    },
    {
      "id": 95,
      "name": "Black Adam",
      "slug": "95-black-adam",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 92,
        "durability": 100,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "250 lb",
          "113 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Teth-Adam",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Hassan Bari",
          "Theo Adam",
          "Mighty Adam",
          "Khem-Adam"
        ],
        "placeOfBirth": "Kahndaq, Egypt",
        "firstAppearance": "Marvel Family #1 (December, 1945)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Mobile; Formerly Kahndaq; Fawcett City; New York City"
      },
      "connections": {
        "groupAffiliation": "None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America",
        "relatives": "Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo's sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/95-black-adam.jpg",
        "sm": "images/characters/sm/95-black-adam.jpg",
        "md": "images/characters/md/95-black-adam.jpg",
        "lg": "images/characters/lg/95-black-adam.jpg"
      }
    },
    {
      "id": 96,
      "name": "Black Bolt",
      "slug": "96-black-bolt",
      "powerstats": {
        "intelligence": 75,
        "strength": 67,
        "speed": 100,
        "durability": 84,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Inhuman",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Blackagar Boltagon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Attilan, Atlantic Ocean",
        "firstAppearance": "Fantastic Four #45 (December, 1965)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "King of the Inhumans",
        "base": "Attilan, Blue Area of the Moon"
      },
      "connections": {
        "groupAffiliation": "Universal Inhumans; Inhuman Royal Family; formerly Illuminati",
        "relatives": "Medusa (wife and first cousin), Ahura (son), Agon (father, deceased), Rynda(mother, deceased), Maximus (brother), Crystal (sister-in-law), Gorgon, Karnak, Triton (cousins)"
      },
      "images": {
        "xs": "images/characters/xs/96-black-bolt.jpg",
        "sm": "images/characters/sm/96-black-bolt.jpg",
        "md": "images/characters/md/96-black-bolt.jpg",
        "lg": "images/characters/lg/96-black-bolt.jpg"
      }
    },
    {
      "id": 97,
      "name": "Black Canary",
      "slug": "97-black-canary",
      "powerstats": {
        "intelligence": 63,
        "strength": 8,
        "speed": 33,
        "durability": 20,
        "power": 52,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Metahuman",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Laurel Lance",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dinah Laurel Lance Queen; Dinah Laurel Lance-Windrow"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Justice League of America (Volume 1) #75",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Detective/Crime-fighter, Chairperson of the Justice League of America; former florist, judo instructor",
        "base": "Formerly Oracle's clock tower in Gotham City; formerly Seattle, Washington; formerly Star City, California; formerly New York City, New York (as a member of the JSA); currently mobile"
      },
      "connections": {
        "groupAffiliation": "Birds of Prey; formerly Justice League of America, Justice Society of America, Justice League Task Force, Justice League International, Team Arrow",
        "relatives": "Larry Lance (father, deceased), Dinah Drake Lance (Black Canary, mother, deceased); Oliver Queen (Green Arrow, husband); Craig Windrow (ex-husband); Sin (adoptive daughter)"
      },
      "images": {
        "xs": "images/characters/xs/97-black-canary.jpg",
        "sm": "images/characters/sm/97-black-canary.jpg",
        "md": "images/characters/md/97-black-canary.jpg",
        "lg": "images/characters/lg/97-black-canary.jpg"
      }
    },
    {
      "id": 98,
      "name": "Black Canary",
      "slug": "98-black-canary",
      "powerstats": {
        "intelligence": 63,
        "strength": 8,
        "speed": 33,
        "durability": 15,
        "power": 45,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "128 lb",
          "58 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Dinah Drake Lance",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash Comics #86 (August, 1947)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Florist, former private investigator",
        "base": "Gotham City, Park City"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America",
        "relatives": "Richard Drake (father), Lawrence Lance (husband), Dinah Laurel Lance (Black Canary, daughter), Oliver Queen (Green Arrow, son-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/98-black-canary.jpg",
        "sm": "images/characters/sm/98-black-canary.jpg",
        "md": "images/characters/md/98-black-canary.jpg",
        "lg": "images/characters/lg/98-black-canary.jpg"
      }
    },
    {
      "id": 99,
      "name": "Black Cat",
      "slug": "99-black-cat",
      "powerstats": {
        "intelligence": 75,
        "strength": 16,
        "speed": 33,
        "durability": 10,
        "power": 23,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Felicia Hardy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Felicity Harmon"
        ],
        "placeOfBirth": "Queens, New York",
        "firstAppearance": "Amazing Spider-Man #194 (July, 1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Heroes for Hire",
        "relatives": "Walter Hardy (father, deceased), Lydia Hardy (mother)"
      },
      "images": {
        "xs": "images/characters/xs/99-black-cat.jpg",
        "sm": "images/characters/sm/99-black-cat.jpg",
        "md": "images/characters/md/99-black-cat.jpg",
        "lg": "images/characters/lg/99-black-cat.jpg"
      }
    },
    {
      "id": 100,
      "name": "Black Flash",
      "slug": "100-black-flash",
      "powerstats": {
        "intelligence": 44,
        "strength": 10,
        "speed": 100,
        "durability": 80,
        "power": 100,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Barry Allen",
          "Flashback",
          "Slow Lightning",
          "Black Racer",
          "Death Flash",
          "God of Death"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash Vol 2 #138",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/100-black-flash.jpg",
        "sm": "images/characters/sm/100-black-flash.jpg",
        "md": "images/characters/md/100-black-flash.jpg",
        "lg": "images/characters/lg/100-black-flash.jpg"
      }
    },
    {
      "id": 102,
      "name": "Black Knight III",
      "slug": "102-black-knight-iii",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 8,
        "durability": 70,
        "power": 43,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Dane Whitman",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Pendragon",
          "Gann Josin",
          "Eobar Garrington"
        ],
        "placeOfBirth": "Gloucester, Massachusetts",
        "firstAppearance": "Avengers #47 (1967)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, scientist; former crusader",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "MI-13; formerly Avengers, Masters of Evil (as a mole), Excalibur, Heroes for Hire, Ultraforce (in the Ultraverse), Defenders, Knights of Wundagore, Queen's Vengeance, King Richard's Army",
        "relatives": "Nathan Garrett (Black Knight II, uncle, deceased); Sir Percy of Scandia (Black Knight), Sir Raston, Eobar Garrington (Black Knights of past eras, ancestors, deceased); Lady Rosamund, Edward, Geoffrey (ancestral relations, presumed deceased); Dafydd ap Iowerth, Arthur Pendragon, Mordred the Evil, Morgan Le Fay (distant ancestral relations)"
      },
      "images": {
        "xs": "images/characters/xs/102-black-knight-iii.jpg",
        "sm": "images/characters/sm/102-black-knight-iii.jpg",
        "md": "images/characters/md/102-black-knight-iii.jpg",
        "lg": "images/characters/lg/102-black-knight-iii.jpg"
      }
    },
    {
      "id": 103,
      "name": "Black Lightning",
      "slug": "103-black-lightning",
      "powerstats": {
        "intelligence": 50,
        "strength": 11,
        "speed": 53,
        "durability": 28,
        "power": 70,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Jefferson Pierce",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Black Lightning #1 (April 1977)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Crime Fighter, High School teacher, Former gold-medal-winning Olympic Decathlete, formerly Secretary of Education under Presidents Pete Ross and Lex Luthor.",
        "base": "Chicago, Illinois; Metropolis, The Hall & The JLA Watchtower"
      },
      "connections": {
        "groupAffiliation": "Justice League of America (current), formerly Presidential Cabinet, The Outsiders (sporadically), Batman's Brother Eye attack group",
        "relatives": "Unnamed father (deceased), Lynn Stewart (ex-wife), Joanna Pierce (niece, deceased), Anissa Pierce (Thunder, daughter), Jennifer Pierce (Lightning, daughter)"
      },
      "images": {
        "xs": "images/characters/xs/103-black-lightning.jpg",
        "sm": "images/characters/sm/103-black-lightning.jpg",
        "md": "images/characters/md/103-black-lightning.jpg",
        "lg": "images/characters/lg/103-black-lightning.jpg"
      }
    },
    {
      "id": 104,
      "name": "Black Mamba",
      "slug": "104-black-mamba",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 35,
        "durability": 42,
        "power": 88,
        "combat": 65
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tanya Sealy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Tanya Sweet"
        ],
        "placeOfBirth": "Chicago, Illinois",
        "firstAppearance": "Marvel Two-In-One #64",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Mercenary, professional criminal, former call girl",
        "base": "Mobile, formerly Serpent Citadel"
      },
      "connections": {
        "groupAffiliation": "Serpent Squad, Serpent Society, BAD Girls",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/104-black-mamba.jpg",
        "sm": "images/characters/sm/104-black-mamba.jpg",
        "md": "images/characters/md/104-black-mamba.jpg",
        "lg": "images/characters/lg/104-black-mamba.jpg"
      }
    },
    {
      "id": 105,
      "name": "Black Manta",
      "slug": "105-black-manta",
      "powerstats": {
        "intelligence": 75,
        "strength": 28,
        "speed": 50,
        "durability": 60,
        "power": 76,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "205 lb",
          "92 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "David",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Devil Ray",
          "Scourge of the Seven Seas",
          "Yellow Lantern"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Aquaman #35 (August, 1967)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/105-black-manta.jpg",
        "sm": "images/characters/sm/105-black-manta.jpg",
        "md": "images/characters/md/105-black-manta.jpg",
        "lg": "images/characters/lg/105-black-manta.jpg"
      }
    },
    {
      "id": 106,
      "name": "Black Panther",
      "slug": "106-black-panther",
      "powerstats": {
        "intelligence": 88,
        "strength": 16,
        "speed": 30,
        "durability": 60,
        "power": 41,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "T'Challa",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mr. Okonkwo",
          "The Man Without Fear",
          "Luke Charles",
          "Black Leopard",
          "the Client",
          "Coal Tiger",
          "has impersonated Daredevil and others on occasion"
        ],
        "placeOfBirth": "Wakanda, Africa",
        "firstAppearance": "Fantastic Four Vol. 1 #52 (1966)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "King and Chieftain of Wakanda, scientist; former school teacher",
        "base": "Wakanda, Mobile"
      },
      "connections": {
        "groupAffiliation": "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
        "relatives": "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T?Chaka (father, deceased), S'Yan (uncle, deceased), N?Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"
      },
      "images": {
        "xs": "images/characters/xs/106-black-panther.jpg",
        "sm": "images/characters/sm/106-black-panther.jpg",
        "md": "images/characters/md/106-black-panther.jpg",
        "lg": "images/characters/lg/106-black-panther.jpg"
      }
    },
    {
      "id": 107,
      "name": "Black Widow",
      "slug": "107-black-widow",
      "powerstats": {
        "intelligence": 75,
        "strength": 13,
        "speed": 33,
        "durability": 30,
        "power": 36,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "131 lb",
          "59 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Natasha Romanoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Yelena Belova",
          "Natasha Romanoff",
          "Natasha",
          "Tasha",
          "Madame Natasha",
          "Nancy Rushman",
          "Laura Matthers",
          "Nadine Roman",
          "\"Oktober\"",
          "Black Pearl",
          "Ebon Flame"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Tales of Suspense #52",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Intelligence agent, former ballerina",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, \"Marvel Knights\", partner of Daredevil, Hawkeye, Boris Turgenov, Logan",
        "relatives": "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/107-black-widow.jpg",
        "sm": "images/characters/sm/107-black-widow.jpg",
        "md": "images/characters/md/107-black-widow.jpg",
        "lg": "images/characters/lg/107-black-widow.jpg"
      }
    },
    {
      "id": 109,
      "name": "Blackout",
      "slug": "109-blackout",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 45,
        "durability": 80,
        "power": 45,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Ghost Rider Vol 3 #2 (June, 1990)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Assassin, enforcer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Lilin; Deathwatch; Hood's gang",
        "relatives": "Lilith (Great Grandmother)"
      },
      "images": {
        "xs": "images/characters/xs/109-blackout.jpg",
        "sm": "images/characters/sm/109-blackout.jpg",
        "md": "images/characters/md/109-blackout.jpg",
        "lg": "images/characters/lg/109-blackout.jpg"
      }
    },
    {
      "id": 110,
      "name": "Blackwing",
      "slug": "110-blackwing",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 35,
        "durability": 32,
        "power": 20,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Joseph Manfredi",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Blackwing",
          "Joe Manfredi",
          "Joe Silvermane",
          "Guiseppi Manfredi"
        ],
        "placeOfBirth": "Professional Criminal",
        "firstAppearance": "Daredevil #118 (February, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Heavy Mettle; (formerly) Masters of Evil, Skeleton Crew, Circus of Crime; (formerly) division leader of Hydra",
        "relatives": "Silvio Manfredi (Silvermane, father), Caterina Manfredi (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/110-blackwing.jpg",
        "sm": "images/characters/sm/110-blackwing.jpg",
        "md": "images/characters/md/110-blackwing.jpg",
        "lg": "images/characters/lg/110-blackwing.jpg"
      }
    },
    {
      "id": 111,
      "name": "Blackwulf",
      "slug": "111-blackwulf",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 8,
        "durability": 30,
        "power": 69,
        "combat": 25
      },
      "appearance": {
        "gender": "Male",
        "race": "Alien",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Lucian",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pelops",
          "Black Wolf"
        ],
        "placeOfBirth": "Armechadon",
        "firstAppearance": "Thunderstrike #6 (March, 1994)",
        "publisher": "Marvel Comics",
        "alignment": "unknown"
      },
      "work": {
        "occupation": "Freedom Fighter",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Underground Legion",
        "relatives": "Tantalus (father); Nirvana (mother); Pelops (brother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/111-blackwulf.jpg",
        "sm": "images/characters/sm/111-blackwulf.jpg",
        "md": "images/characters/md/111-blackwulf.jpg",
        "lg": "images/characters/lg/111-blackwulf.jpg"
      }
    },
    {
      "id": 112,
      "name": "Blade",
      "slug": "112-blade",
      "powerstats": {
        "intelligence": 63,
        "strength": 28,
        "speed": 38,
        "durability": 50,
        "power": 40,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Vampire",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "215 lb",
          "97 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Eric Brooks",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Switchblade",
          "Frank Blade",
          "Daywalker"
        ],
        "placeOfBirth": "Soho, London,England",
        "firstAppearance": "Tomb of Dracula Vol. 1 #10 (1973)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vampire hunter, former private investigator.",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "Formerly Noah van Helsing's vampire hunters, Nightstalkers, Midnight Sons, the Nine, Quincy Harker's vampire hunters, Ogun Strong's vampire hunters, Bloodshadows gang",
        "relatives": "Tara Brooks (mother)"
      },
      "images": {
        "xs": "images/characters/xs/112-blade.jpg",
        "sm": "images/characters/sm/112-blade.jpg",
        "md": "images/characters/md/112-blade.jpg",
        "lg": "images/characters/lg/112-blade.jpg"
      }
    },
    {
      "id": 114,
      "name": "Bling!",
      "slug": "114-bling!",
      "powerstats": {
        "intelligence": 69,
        "strength": 14,
        "speed": 12,
        "durability": 90,
        "power": 52,
        "combat": 28
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "152 lb",
          "68 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Roxanne Washington",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men #171 (2005)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Utopia; formerly Graymalkin Industries, San Francisco, California; Xavier Institute, Salem Center, New York State"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Roy \"Daddy Libido\" Washington (father), Angel \"Sexy Mutha\" Depres (mother)"
      },
      "images": {
        "xs": "images/characters/xs/114-bling!.jpg",
        "sm": "images/characters/sm/114-bling!.jpg",
        "md": "images/characters/md/114-bling!.jpg",
        "lg": "images/characters/lg/114-bling!.jpg"
      }
    },
    {
      "id": 115,
      "name": "Blink",
      "slug": "115-blink",
      "powerstats": {
        "intelligence": 50,
        "strength": 8,
        "speed": 20,
        "durability": 28,
        "power": 77,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Magenta"
      },
      "biography": {
        "fullName": "Clarice Ferguson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Bahamas",
        "firstAppearance": "Uncanny X-Men #317 (October, 1994)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, freedom fighter",
        "base": "Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Black Rome, Necrosha"
      },
      "connections": {
        "groupAffiliation": "New Mutants; formerly X-Men, Selene's Inner Circle",
        "relatives": "Apocalypse (ancestor, deceased);Margaret Slade (ancestor, deceased);Hamilton Slade (distant relative, deceased);Frederick Slade (great-great-grandfather);Ms. Ferguson (great-great-grandmother, deceased);Chamber (distant cousin);Clan Akkaba (relatives)"
      },
      "images": {
        "xs": "images/characters/xs/115-blink.jpg",
        "sm": "images/characters/sm/115-blink.jpg",
        "md": "images/characters/md/115-blink.jpg",
        "lg": "images/characters/lg/115-blink.jpg"
      }
    },
    {
      "id": 118,
      "name": "Blizzard II",
      "slug": "118-blizzard-ii",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 27,
        "durability": 42,
        "power": 47,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Donald Gill",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Newark, Delaware",
        "firstAppearance": "Iron Man #223 (1987)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Adventurer; former mercenary and professional criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Thunderbolts, Hammer Industries",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/118-blizzard-ii.jpg",
        "sm": "images/characters/sm/118-blizzard-ii.jpg",
        "md": "images/characters/md/118-blizzard-ii.jpg",
        "lg": "images/characters/lg/118-blizzard-ii.jpg"
      }
    },
    {
      "id": 119,
      "name": "Blob",
      "slug": "119-blob",
      "powerstats": {
        "intelligence": 10,
        "strength": 83,
        "speed": 23,
        "durability": 95,
        "power": 28,
        "combat": 72
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "510 lb",
          "230 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Frederick J. Dukes",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Lubbock, Texas",
        "firstAppearance": "X-Men #3 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Former criminal, terrorist, government agent, carnival performer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Cell, formerly X-Corps, Magneto's army, Brotherhood Of Evil Mutants, Freedom Force, Factor Three, former partner of Unus",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/119-blob.jpg",
        "sm": "images/characters/sm/119-blob.jpg",
        "md": "images/characters/md/119-blob.jpg",
        "lg": "images/characters/lg/119-blob.jpg"
      }
    },
    {
      "id": 120,
      "name": "Bloodaxe",
      "slug": "120-bloodaxe",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 33,
        "durability": 80,
        "power": 100,
        "combat": 84
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "7'2",
          "218 cm"
        ],
        "weight": [
          "1100 lb",
          "495 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jackie Lukus",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Jackie Lukus) Thor #392 (as Bloodaxe) Thor #449",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Architect, former vigilante",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/120-bloodaxe.jpg",
        "sm": "images/characters/sm/120-bloodaxe.jpg",
        "md": "images/characters/md/120-bloodaxe.jpg",
        "lg": "images/characters/lg/120-bloodaxe.jpg"
      }
    },
    {
      "id": 121,
      "name": "Bloodhawk",
      "slug": "121-bloodhawk",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 50,
        "durability": 80,
        "power": 80,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Lemuel Krug",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lemuel Halcon"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men (2099) #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Peditioners, formerly X-Men, Halo City Protectorate, Oasis",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/121-bloodhawk.jpg",
        "sm": "images/characters/sm/121-bloodhawk.jpg",
        "md": "images/characters/md/121-bloodhawk.jpg",
        "lg": "images/characters/lg/121-bloodhawk.jpg"
      }
    },
    {
      "id": 126,
      "name": "Blue Beetle III",
      "slug": "126-blue-beetle-iii",
      "powerstats": {
        "intelligence": 50,
        "strength": 34,
        "speed": 58,
        "durability": 80,
        "power": 100,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jaime Reyes",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Scooter"
        ],
        "placeOfBirth": "Presumed to be El Paso",
        "firstAppearance": "Infinite Crisis #3 (2006)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "El Paso, Texas"
      },
      "connections": {
        "groupAffiliation": "Justice League International,Posse; Teen Titans",
        "relatives": "Alberto Reyes (father); Bianca Reyes (mother); Milagro Reyes (younger sister); Alejandro Reyes (grandfather, deceased); Elena Leal (maternal grandmother)"
      },
      "images": {
        "xs": "images/characters/xs/126-blue-beetle-iii.jpg",
        "sm": "images/characters/sm/126-blue-beetle-iii.jpg",
        "md": "images/characters/md/126-blue-beetle-iii.jpg",
        "lg": "images/characters/lg/126-blue-beetle-iii.jpg"
      }
    },
    {
      "id": 130,
      "name": "Boom-Boom",
      "slug": "130-boom-boom",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 12,
        "durability": 42,
        "power": 57,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "122 lb",
          "55 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Tabitha Smith",
        "alterEgos": "Meltdown",
        "aliases": [
          "Time Bomb",
          "Boomer",
          "Meltdown",
          "Tabby",
          "Firecracker",
          "Mutate #35",
          "Nancy Forrester"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Secret Wars II #5",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former student, thief",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Utopians, X-Men (New Charles Xavier School member), X-Force, X-Men, Nextwave, The Underground, Genoshan Mutates, New Mutants, X-Terminators (founding member), X-Factor (trainee), Fallen Angels, Beyonder (associate)",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/130-boom-boom.jpg",
        "sm": "images/characters/sm/130-boom-boom.jpg",
        "md": "images/characters/md/130-boom-boom.jpg",
        "lg": "images/characters/lg/130-boom-boom.jpg"
      }
    },
    {
      "id": 135,
      "name": "Box IV",
      "slug": "135-box-iv",
      "powerstats": {
        "intelligence": 50,
        "strength": 75,
        "speed": 23,
        "durability": 28,
        "power": 11,
        "combat": 56
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown / Black"
      },
      "biography": {
        "fullName": "Madison Jeffries",
        "alterEgos": "Gemini V",
        "aliases": [
          "Gemini",
          "Jack-In-The-Box"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "Alpha Flight #16",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Inventor, former soldier",
        "base": "Base of operations unknown"
      },
      "connections": {
        "groupAffiliation": "Alpha Flight, Gamma Flight, Zodiac, Team_Weapon_X",
        "relatives": "Scramble (Lionel Jeffries, brother, deceased), Diamond Lil (wife)"
      },
      "images": {
        "xs": "images/characters/xs/135-box-iv.jpg",
        "sm": "images/characters/sm/135-box-iv.jpg",
        "md": "images/characters/md/135-box-iv.jpg",
        "lg": "images/characters/lg/135-box-iv.jpg"
      }
    },
    {
      "id": 136,
      "name": "Brainiac",
      "slug": "136-brainiac",
      "powerstats": {
        "intelligence": 100,
        "strength": 95,
        "speed": 63,
        "durability": 90,
        "power": 60,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Vril Dox",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Milton Fine"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Action Comics #242 (July 1958)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Lex Luthor",
        "relatives": "Vril Dox II (son), Brainiac 5 (descendant)"
      },
      "images": {
        "xs": "images/characters/xs/136-brainiac.jpg",
        "sm": "images/characters/sm/136-brainiac.jpg",
        "md": "images/characters/md/136-brainiac.jpg",
        "lg": "images/characters/lg/136-brainiac.jpg"
      }
    },
    {
      "id": 137,
      "name": "Brainiac 5",
      "slug": "137-brainiac-5",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 60,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Querl Dox",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Brainiac 5's primary invention is his personal force-shield generator. Brainiac 5 re-discovered the technical process behind original Brainiac's force-shield belt, which is capable of generating a virtually impervious field of protection. The belt must be",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "Unnamed mother, Brainiac (ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/137-brainiac-5.jpg",
        "sm": "images/characters/sm/137-brainiac-5.jpg",
        "md": "images/characters/md/137-brainiac-5.jpg",
        "lg": "images/characters/lg/137-brainiac-5.jpg"
      }
    },
    {
      "id": 141,
      "name": "Bullseye",
      "slug": "141-bullseye",
      "powerstats": {
        "intelligence": 50,
        "strength": 11,
        "speed": 25,
        "durability": 70,
        "power": 20,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "blue",
        "hairColor": "blond"
      },
      "biography": {
        "fullName": "Lester",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Benjamin Poindexter",
          "Daredevil",
          "Punisher",
          "Bullseye",
          "Hawkeye",
          "pitcher"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Daredevil #131 (March, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Assassin, professional criminal, former mercenary",
        "base": "Formerly Avengers Tower; Thunderbolts Mountain"
      },
      "connections": {
        "groupAffiliation": "Formerly Dark Avengers, Thunderbolts, employee of Kingpin, Purple Man, Eric Slaughter, Mysterio; formerly US Army",
        "relatives": "Kingmaker (father)"
      },
      "images": {
        "xs": "images/characters/xs/141-bullseye.jpg",
        "sm": "images/characters/sm/141-bullseye.jpg",
        "md": "images/characters/md/141-bullseye.jpg",
        "lg": "images/characters/lg/141-bullseye.jpg"
      }
    },
    {
      "id": 142,
      "name": "Bumblebee",
      "slug": "142-bumblebee",
      "powerstats": {
        "intelligence": 63,
        "strength": 28,
        "speed": 25,
        "durability": 10,
        "power": 47,
        "combat": 35
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Karen Beecher",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans #45",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "San Francisco, California"
      },
      "connections": {
        "groupAffiliation": "Doom Patrol, S.T.A.R. Labs, Formerly Teen Titans",
        "relatives": "Mal Duncan (husband)"
      },
      "images": {
        "xs": "images/characters/xs/142-bumblebee.jpg",
        "sm": "images/characters/sm/142-bumblebee.jpg",
        "md": "images/characters/md/142-bumblebee.jpg",
        "lg": "images/characters/lg/142-bumblebee.jpg"
      }
    },
    {
      "id": 144,
      "name": "Bushido",
      "slug": "144-bushido",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 8,
        "durability": 10,
        "power": 19,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Ryuko Orsono",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Titans: Secret Files & Origins #2",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Teen Titans",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/144-bushido.jpg",
        "sm": "images/characters/sm/144-bushido.jpg",
        "md": "images/characters/md/144-bushido.jpg",
        "lg": "images/characters/lg/144-bushido.jpg"
      }
    },
    {
      "id": 145,
      "name": "Cable",
      "slug": "145-cable",
      "powerstats": {
        "intelligence": 88,
        "strength": 48,
        "speed": 23,
        "durability": 56,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "350 lb",
          "158 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Nathan Summers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Chosen One",
          "Soldier X",
          "Nathan Dayspring",
          "Askani'son",
          "Nathan Dayspring Summers",
          "Nathan Winters",
          "The Traveller",
          "The Saviour"
        ],
        "placeOfBirth": "Unrevealed location in the 20th Century United States",
        "firstAppearance": "New Mutants #86 (as Cable)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "(current) Adventurer, (former) freedom fighter, United States government agent, mercenary, combat instructor for X-Force",
        "base": "The Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "X-Force, (former) X-Men, Clan Askani, Clan Chosen, Six Pack (formerly Wild Pack II)",
        "relatives": "Scott Summers (Cyclops, father), Madelyne Pryor-Summers (Goblin Queen, mother, deceased), Jean Grey (Phoenix, stepmother), Alexander Summers (Havok, uncle), Christopher Summers (Corsair, paternal grandfather), Katherine Anne Summers (paternal grandmother, deceased), Philip Summers (great-grandfather), Deborah Summers (great-grandmother), Jenskot (Aliya, wife, deceased), Tyler (Genesis, son, deceased), Stryfe (clone, deceased), Gabriel Summers (Vulcan, uncle)"
      },
      "images": {
        "xs": "images/characters/xs/145-cable.jpg",
        "sm": "images/characters/sm/145-cable.jpg",
        "md": "images/characters/md/145-cable.jpg",
        "lg": "images/characters/lg/145-cable.jpg"
      }
    },
    {
      "id": 146,
      "name": "Callisto",
      "slug": "146-callisto",
      "powerstats": {
        "intelligence": 63,
        "strength": 53,
        "speed": 23,
        "durability": 42,
        "power": 52,
        "combat": 85
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Callisto",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-MEN (first series) #169",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "The Xavier Institute, Salem Center, Westchester County, New York State, (former) The Alley (beneath Manhattan's surface), X-Factor I's sentient starship"
      },
      "connections": {
        "groupAffiliation": "Excalibur, Morlocks, Gene Nation",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/146-callisto.jpg",
        "sm": "images/characters/sm/146-callisto.jpg",
        "md": "images/characters/md/146-callisto.jpg",
        "lg": "images/characters/lg/146-callisto.jpg"
      }
    },
    {
      "id": 148,
      "name": "Cannonball",
      "slug": "148-cannonball",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 67,
        "durability": 99,
        "power": 94,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "181 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Samuel Zachery Guthrie",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Formerly Samson Guthry",
          "Sam Guthrie",
          "Jet-Ass"
        ],
        "placeOfBirth": "Cumberland County, Kentucky",
        "firstAppearance": "Marvel Graphic Novel #4 (1982)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, peacekeeper, former student, mercenary, miner",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly X.S.E., Mutant Liberation Front, X-Treme X-Men, X-Corporation, X-Force, New Mutants, Hellions, Hellfire Club",
        "relatives": "Thomas Zebulon (father, deceased), Lucinda (mother), Lucas Bartholemew (uncle), Paige (Husk, sister), Joshua \"Jay\" (Icarus, brother, deceased), Joelle (sister), Elizabeth (sister), Melody (Aero, sister), Jebediah (brother), Lewis (brother), two other unnamed siblings, Ray Jr. (adopted brother)"
      },
      "images": {
        "xs": "images/characters/xs/148-cannonball.jpg",
        "sm": "images/characters/sm/148-cannonball.jpg",
        "md": "images/characters/md/148-cannonball.jpg",
        "lg": "images/characters/lg/148-cannonball.jpg"
      }
    },
    {
      "id": 149,
      "name": "Captain America",
      "slug": "149-captain-america",
      "powerstats": {
        "intelligence": 69,
        "strength": 19,
        "speed": 38,
        "durability": 55,
        "power": 60,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eyeColor": "blue",
        "hairColor": "blond"
      },
      "biography": {
        "fullName": "Steve Rogers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nomad",
          "The Captain"
        ],
        "placeOfBirth": "Manhattan, New York City, New York",
        "firstAppearance": "Captain America Comics #1 (March 1941)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
        "relatives": "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
      },
      "images": {
        "xs": "images/characters/xs/149-captain-america.jpg",
        "sm": "images/characters/sm/149-captain-america.jpg",
        "md": "images/characters/md/149-captain-america.jpg",
        "lg": "images/characters/lg/149-captain-america.jpg"
      }
    },
    {
      "id": 150,
      "name": "Captain Atom",
      "slug": "150-captain-atom",
      "powerstats": {
        "intelligence": 81,
        "strength": 93,
        "speed": 83,
        "durability": 90,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Silver"
      },
      "biography": {
        "fullName": "Nathaniel Adam",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Monarch",
          "Allen Adam",
          "Cameron Scott"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Captain Atom #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Soldier",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Justice League, Extreme Justice, Super Buddies, Living Assault Weapons, Monarch's Army, United States Air Force",
        "relatives": "Angela Adam Eiling (wife, deceased), Peggy Eiling (daughter), Randy Eiling (son), Bette Sans Souci (ex-wife, divorced)"
      },
      "images": {
        "xs": "images/characters/xs/150-captain-atom.jpg",
        "sm": "images/characters/sm/150-captain-atom.jpg",
        "md": "images/characters/md/150-captain-atom.jpg",
        "lg": "images/characters/lg/150-captain-atom.jpg"
      }
    },
    {
      "id": 151,
      "name": "Captain Britain",
      "slug": "151-captain-britain",
      "powerstats": {
        "intelligence": 75,
        "strength": 77,
        "speed": 50,
        "durability": 60,
        "power": 31,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "257 lb",
          "116 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Brian Braddock",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Britannic",
          "Black Bishop",
          "Jungle Man",
          "King of Otherworld",
          "Merlinson"
        ],
        "placeOfBirth": "Braddock Manor, England",
        "firstAppearance": "Captain Britain #1 (October, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, formerly King of Otherworld, scientist",
        "base": "Lighthouse, Earth Orbit; Starlight Citadel, Otherworld; formerly Braddock Manor; Braddock Lighthouse, England; New York City (during exchange trip, specifically Peter Parker's Manhattan apartment); flat near Thames University, London"
      },
      "connections": {
        "groupAffiliation": "Braddock Academy, Captain Britain Corps, MI-13; formerly Excalibur, Hellfire Club (London Branch), Secret Avengers, Court of Otherworld, Knights of Pendragon's ally, Future Iron Man's Team",
        "relatives": "John Braddock (ancestor, possibly grandfather), James Braddock, Sr. (father, deceased), Lady Elizabeth Braddock (mother, deceased), James Braddock, Jr. (brother), Elizabeth Braddock (twin sister), Meggan (wife), William Puceanu (father-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/151-captain-britain.jpg",
        "sm": "images/characters/sm/151-captain-britain.jpg",
        "md": "images/characters/md/151-captain-britain.jpg",
        "lg": "images/characters/lg/151-captain-britain.jpg"
      }
    },
    {
      "id": 152,
      "name": "Captain Cold",
      "slug": "152-captain-cold",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 17,
        "durability": 20,
        "power": 28,
        "combat": 20
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Leonard Snart",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Citizen Cold",
          "Kid Kold",
          "Len Snart",
          "Leonard Snart",
          "Leonards Wynters",
          "The Man Who Mastered Absolute Zero"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash Vol 4 #6 (April, 2012)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Professional Criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Justice League, Rogues; formerly Secret Society of Super-Villains, Injustice League",
        "relatives": "Lisa Snart (sister)"
      },
      "images": {
        "xs": "images/characters/xs/152-captain-cold.jpg",
        "sm": "images/characters/sm/152-captain-cold.jpg",
        "md": "images/characters/md/152-captain-cold.jpg",
        "lg": "images/characters/lg/152-captain-cold.jpg"
      }
    },
    {
      "id": 156,
      "name": "Captain Marvel",
      "slug": "156-captain-marvel",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 88,
        "durability": 95,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Billy Batson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The World's Mightiest Mortal",
          "The Big Red Cheese",
          "Captain Thunder",
          "Shazam"
        ],
        "placeOfBirth": "Fawcett City, United States",
        "firstAppearance": "Whiz Comics no. 2 (1940)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Marvel Family, Justice Society of America",
        "relatives": "C.C. Batson (father, deceased), Marilyn Batson (mother, deceased), Ebenezer Batson (uncle), Mary Batson (Mary Marvel, sister)"
      },
      "images": {
        "xs": "images/characters/xs/156-captain-marvel.jpg",
        "sm": "images/characters/sm/156-captain-marvel.jpg",
        "md": "images/characters/md/156-captain-marvel.jpg",
        "lg": "images/characters/lg/156-captain-marvel.jpg"
      }
    },
    {
      "id": 157,
      "name": "Captain Marvel",
      "slug": "157-captain-marvel",
      "powerstats": {
        "intelligence": 84,
        "strength": 88,
        "speed": 71,
        "durability": 95,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Human-Kree",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Carol Danvers",
        "alterEgos": "Binary, Warbird",
        "aliases": [
          "Ace",
          "Binary",
          "Lady Marvel",
          "Warbird",
          "others used during her espionage career"
        ],
        "placeOfBirth": "Boston, Massachusetts",
        "firstAppearance": "Ms. Marvel #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
        "base": "Avengers Mansion"
      },
      "connections": {
        "groupAffiliation": "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
        "relatives": "Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) (\"son\", deceased)"
      },
      "images": {
        "xs": "images/characters/xs/157-captain-marvel.jpg",
        "sm": "images/characters/sm/157-captain-marvel.jpg",
        "md": "images/characters/md/157-captain-marvel.jpg",
        "lg": "images/characters/lg/157-captain-marvel.jpg"
      }
    },
    {
      "id": 158,
      "name": "Captain Marvel II",
      "slug": "158-captain-marvel-ii",
      "powerstats": {
        "intelligence": 75,
        "strength": 81,
        "speed": 27,
        "durability": 90,
        "power": 34,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Frederick Christopher Freeman",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Captain Marvel Jr.",
          "CM3"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Primarily Fawcett City."
      },
      "connections": {
        "groupAffiliation": "Marvel Family, formerly Outsiders and Teen Titans.",
        "relatives": "parents, deceased, Jacob Freeman (granfather, deceased), Timothy Karnes (Sabbac, foster brother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/158-captain-marvel-ii.jpg",
        "sm": "images/characters/sm/158-captain-marvel-ii.jpg",
        "md": "images/characters/md/158-captain-marvel-ii.jpg",
        "lg": "images/characters/lg/158-captain-marvel-ii.jpg"
      }
    },
    {
      "id": 160,
      "name": "Captain Planet",
      "slug": "160-captain-planet",
      "powerstats": {
        "intelligence": 50,
        "strength": 88,
        "speed": 75,
        "durability": 80,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Captain",
          "CP",
          "Planet"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Captain Planet and the Planeteers (TV Series)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "The Planeteers",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/160-captain-planet.jpg",
        "sm": "images/characters/sm/160-captain-planet.jpg",
        "md": "images/characters/md/160-captain-planet.jpg",
        "lg": "images/characters/lg/160-captain-planet.jpg"
      }
    },
    {
      "id": 162,
      "name": "Carnage",
      "slug": "162-carnage",
      "powerstats": {
        "intelligence": 63,
        "strength": 63,
        "speed": 70,
        "durability": 84,
        "power": 88,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Cletus Kasady",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mass Carnage",
          "999th"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #344 (February, 1991)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Maximum Carnage: (Carrion, Shriek, Demogoblin, Doppelganger)",
        "relatives": "Venom (\"father\"); Shriek (\"wife\"); Hybrid, Lasher, Phage, Riot (\"brothers\"); Agony, Scream (\"sisters\"); Carrion, Demogoblin, Doppelganger, Toxin (\"sons\"); Scorn (\"Daughter\")"
      },
      "images": {
        "xs": "images/characters/xs/162-carnage.jpg",
        "sm": "images/characters/sm/162-carnage.jpg",
        "md": "images/characters/md/162-carnage.jpg",
        "lg": "images/characters/lg/162-carnage.jpg"
      }
    },
    {
      "id": 165,
      "name": "Catwoman",
      "slug": "165-catwoman",
      "powerstats": {
        "intelligence": 69,
        "strength": 11,
        "speed": 33,
        "durability": 28,
        "power": 27,
        "combat": 85
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Selina Kyle",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Cat",
          "Irena Dubrovna",
          "Elva Barr",
          "Sadie Kelowski",
          "Madame Moderne",
          "Marguerite Tone"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "Detective Comics #569",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Thief",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Outsiders; formerly Birds of Prey, Injustice League, Secret Society of Super-Villains",
        "relatives": "Brian Kyle (father, deceased), Maria Kyle (mother, deceased), Maggie Kyle (sister), Helena Kyle (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/165-catwoman.jpg",
        "sm": "images/characters/sm/165-catwoman.jpg",
        "md": "images/characters/md/165-catwoman.jpg",
        "lg": "images/characters/lg/165-catwoman.jpg"
      }
    },
    {
      "id": 167,
      "name": "Century",
      "slug": "167-century",
      "powerstats": {
        "intelligence": 88,
        "strength": 80,
        "speed": 53,
        "durability": 64,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Alien",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "215 lb",
          "97 kg"
        ],
        "eyeColor": "White",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Force Works #1 (July, 1994)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Tracker, adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Force Works",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/167-century.jpg",
        "sm": "images/characters/sm/167-century.jpg",
        "md": "images/characters/md/167-century.jpg",
        "lg": "images/characters/lg/167-century.jpg"
      }
    },
    {
      "id": 169,
      "name": "Chamber",
      "slug": "169-chamber",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 20,
        "durability": 80,
        "power": 57,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jonothon Evan Starsmore",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Decibel",
          "Jono",
          "Jono Hex"
        ],
        "placeOfBirth": "United Kingdom",
        "firstAppearance": "Generation X #1 (November, 1994)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Utopia; formerly New Warriors HQ; Xavier Institute for Higher Learning, Salem Center, Westchester County, New York; Massachusetts Academy, Snow Valley, Massachusetts"
      },
      "connections": {
        "groupAffiliation": "X-Men; formerly New Warriors; Clan Akkaba; Weapon X; Generation X",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/169-chamber.jpg",
        "sm": "images/characters/sm/169-chamber.jpg",
        "md": "images/characters/md/169-chamber.jpg",
        "lg": "images/characters/lg/169-chamber.jpg"
      }
    },
    {
      "id": 170,
      "name": "Chameleon",
      "slug": "170-chameleon",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 12,
        "durability": 28,
        "power": 28,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Dmitri Anatoly Smerdyakov Kravinoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dr. Ashley Kafka",
          "Dr. Turner",
          "J. Jonah Jameson",
          "Torpedo",
          "Rick Jones",
          "Dr. Henry Pym",
          "Peter Parker",
          "Captain George Stacy",
          "Dr. Robert Bruce Banner",
          "General"
        ],
        "placeOfBirth": "Russia",
        "firstAppearance": "Amazing Spider-Man #1",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "The Exterminators; formerly Sinister Six, Sinister Twelve",
        "relatives": "Kravinoff Patriarch (father, deceased), mother (unnamed), Sergei Kravinoff (Kraven I, half-brother, deceased), Vladimir Kravinoff (The Grim Hunter, nephew, deceased), Alyosha Kravinoff (Kraven the Hunter, nephew), Ned Tannengarden (nephew, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/170-chameleon.jpg",
        "sm": "images/characters/sm/170-chameleon.jpg",
        "md": "images/characters/md/170-chameleon.jpg",
        "lg": "images/characters/lg/170-chameleon.jpg"
      }
    },
    {
      "id": 171,
      "name": "Changeling",
      "slug": "171-changeling",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 23,
        "durability": 42,
        "power": 64,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Kevin Sidney",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Professor X",
          "Professor Charles Xavier"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Uncanny X-Men #35 (August, 1967)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Former substitute teacher, adventurer, subversive",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Humed, X-Men, Factor Three",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/171-changeling.jpg",
        "sm": "images/characters/sm/171-changeling.jpg",
        "md": "images/characters/md/171-changeling.jpg",
        "lg": "images/characters/lg/171-changeling.jpg"
      }
    },
    {
      "id": 172,
      "name": "Cheetah",
      "slug": "172-cheetah",
      "powerstats": {
        "intelligence": 38,
        "strength": 8,
        "speed": 42,
        "durability": 20,
        "power": 32,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Priscilla Rich",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kay Carlton",
          "The Cheetah"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Wonder Woman Vol1 #6 (Fall 1943)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Villainy Inc",
        "relatives": "Claudia Rich (cousin), Debi Domaine (niece)"
      },
      "images": {
        "xs": "images/characters/xs/172-cheetah.jpg",
        "sm": "images/characters/sm/172-cheetah.jpg",
        "md": "images/characters/md/172-cheetah.jpg",
        "lg": "images/characters/lg/172-cheetah.jpg"
      }
    },
    {
      "id": 174,
      "name": "Cheetah III",
      "slug": "174-cheetah-iii",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 88,
        "durability": 80,
        "power": 78,
        "combat": 95
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Barbara Minerva",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Barbara Minerva",
          "Bride of Urzkartaga",
          "Priscilla Rich",
          "Deborah Domaine",
          "Sabrina Ballesteros"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Wonder Woman Vol2 #7 (Sept 1987)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Archaeologist, Anthropologist",
        "base": "Nottingham, England"
      },
      "connections": {
        "groupAffiliation": "The Society, Injustice League",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/174-cheetah-iii.jpg",
        "sm": "images/characters/sm/174-cheetah-iii.jpg",
        "md": "images/characters/md/174-cheetah-iii.jpg",
        "lg": "images/characters/lg/174-cheetah-iii.jpg"
      }
    },
    {
      "id": 177,
      "name": "Citizen Steel",
      "slug": "177-citizen-steel",
      "powerstats": {
        "intelligence": 50,
        "strength": 95,
        "speed": 33,
        "durability": 100,
        "power": 23,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "378 lb",
          "170 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Nathan Heywood",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Buckeye",
          "Uncle Nate",
          "Uncle Nathan"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Justice Society of America Vol 3 #2 (March, 2007)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former Professional Football Player",
        "base": "Battery Park, New York City, formerly Franklin County, Ohio"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America",
        "relatives": "Hank Heywood, Sr. (Commander Steel, grandfather, deceased) ? Hank Heywood, Jr. (uncle, deceased) ? Hank Heywood III (Steel, cousin, deceased) ? Kirk Heywood (brother, deceased), Nicole (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/177-citizen-steel.jpg",
        "sm": "images/characters/sm/177-citizen-steel.jpg",
        "md": "images/characters/md/177-citizen-steel.jpg",
        "lg": "images/characters/lg/177-citizen-steel.jpg"
      }
    },
    {
      "id": 180,
      "name": "Cloak",
      "slug": "180-cloak",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 47,
        "durability": 64,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "7'5",
          "226 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eyeColor": "brown",
        "hairColor": "black"
      },
      "biography": {
        "fullName": "Tyrone Johnson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "South Boston, Massachusetts",
        "firstAppearance": "Spectacular Spiderman #64",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante",
        "base": "Holy Ghost Church, 42nd Street, New York City"
      },
      "connections": {
        "groupAffiliation": "Cloak and Dagger, New Warriors, Marvel Knights",
        "relatives": "Smokin' Joe (rumored grandfather)"
      },
      "images": {
        "xs": "images/characters/xs/180-cloak.jpg",
        "sm": "images/characters/sm/180-cloak.jpg",
        "md": "images/characters/md/180-cloak.jpg",
        "lg": "images/characters/lg/180-cloak.jpg"
      }
    },
    {
      "id": 181,
      "name": "Clock King",
      "slug": "181-clock-king",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 17,
        "durability": 10,
        "power": 7,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "173 lb",
          "78 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "William Tockman",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Tempus Fugit"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "World's Finest #111 (August, 1960)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Clockwatchers, Justice League Antarctica, Suicide Squad, Time Foes",
        "relatives": "Beverly (sister, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/181-clock-king.jpg",
        "sm": "images/characters/sm/181-clock-king.jpg",
        "md": "images/characters/md/181-clock-king.jpg",
        "lg": "images/characters/lg/181-clock-king.jpg"
      }
    },
    {
      "id": 185,
      "name": "Colossus",
      "slug": "185-colossus",
      "powerstats": {
        "intelligence": 63,
        "strength": 83,
        "speed": 33,
        "durability": 100,
        "power": 45,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "7'5",
          "226 cm"
        ],
        "weight": [
          "500 lb",
          "225 kg"
        ],
        "eyeColor": "Silver",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Piotr Nikolaievitch Rasputin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pete",
          "Peter Nicholas",
          "The Proletarian",
          "Little Brother"
        ],
        "placeOfBirth": "Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia",
        "firstAppearance": "Giant-Size X-Men #1 (May, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "(current) Adventurer, student, (former) Artist",
        "base": "(current) Professor Charles Xavier's Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,; a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra"
      },
      "connections": {
        "groupAffiliation": "X-Men; formerly Excalibur, Acolytes, Defender",
        "relatives": "Grigory Efimovich Rasputin (great-grandfather, deceased), Elena (great-grandmother, deceased), Ivan Rasputin (great-grand uncle, deceased), Grigory Rasputin (grandfather, deceased), Nikolai Rasputin (father, deceased), Alexandra Rasputina (mother, deceased), Vladimir Rasputin (uncle, deceased), unidentified aunt & uncle (deceased), Illyana Nikolievna Rasputina (Magik, sister, deceased), Mikhail Rasputin (brother), Peter Jr. (son), Larissa Mishchenko (cousin, deceased), Konstantin (cousin, deceased), Klara (cousin, deceased), Dimitriy (cousin, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/185-colossus.jpg",
        "sm": "images/characters/sm/185-colossus.jpg",
        "md": "images/characters/md/185-colossus.jpg",
        "lg": "images/characters/lg/185-colossus.jpg"
      }
    },
    {
      "id": 186,
      "name": "Copycat",
      "slug": "186-copycat",
      "powerstats": {
        "intelligence": 56,
        "strength": 10,
        "speed": 21,
        "durability": 25,
        "power": 54,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "148 lb",
          "67 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Vanessa Carlysle",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nurse Veronica",
          "Patricia Muggins",
          "Titania",
          "Garrison Kane",
          "Christina Valentino",
          "Domino",
          "Cheryl Marks",
          "Debbie",
          "Marguerite",
          "Amy"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New Mutants #98 (February, 1991)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "Mobile; formerly Adirondack Mountains, Xavier's School for Gifted Youngsters"
      },
      "connections": {
        "groupAffiliation": "Weapon X/Weapon Plus and Six Pack (as Copycat), X-Force and New Mutants (as Domino)",
        "relatives": "Burt Carlysle (father, deceased), Dorothy Carlysle (mother)"
      },
      "images": {
        "xs": "images/characters/xs/186-copycat.jpg",
        "sm": "images/characters/sm/186-copycat.jpg",
        "md": "images/characters/md/186-copycat.jpg",
        "lg": "images/characters/lg/186-copycat.jpg"
      }
    },
    {
      "id": 188,
      "name": "Cottonmouth",
      "slug": "188-cottonmouth",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 8,
        "durability": 10,
        "power": 27,
        "combat": 25
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Burchell Clemens",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Quincy McIver"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Captain America #310 (October, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal",
        "base": "Serpent Citadel"
      },
      "connections": {
        "groupAffiliation": "Serpent Society",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/188-cottonmouth.jpg",
        "sm": "images/characters/sm/188-cottonmouth.jpg",
        "md": "images/characters/md/188-cottonmouth.jpg",
        "lg": "images/characters/lg/188-cottonmouth.jpg"
      }
    },
    {
      "id": 191,
      "name": "Crystal",
      "slug": "191-crystal",
      "powerstats": {
        "intelligence": 63,
        "strength": 16,
        "speed": 12,
        "durability": 14,
        "power": 61,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": "Inhuman",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Crystallia Amaquelin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Crys",
          "Exquisite Elemental"
        ],
        "placeOfBirth": "Attilan",
        "firstAppearance": "Fantastic Four #45 (1965)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Mother, adventuress",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Inhumans (Royal Family); formerly Fantastic Four, Avengers, Queen's Vengeance",
        "relatives": "Quelin (father), Ambur (mother), Medusa (sister), Gorgon, Karnak, Triton (cousins), Black Bolt (cousin, brother-in-law), Pietro Maximoff (Quicksilver, estranged husband), Luna (daughter), Ahura (nephew), extensive extended family"
      },
      "images": {
        "xs": "images/characters/xs/191-crystal.jpg",
        "sm": "images/characters/sm/191-crystal.jpg",
        "md": "images/characters/md/191-crystal.jpg",
        "lg": "images/characters/lg/191-crystal.jpg"
      }
    },
    {
      "id": 194,
      "name": "Cyborg",
      "slug": "194-cyborg",
      "powerstats": {
        "intelligence": 75,
        "strength": 53,
        "speed": 42,
        "durability": 85,
        "power": 71,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "385 lb",
          "173 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Victor Stone",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Cyberion Technis",
          "Omegadrome",
          "Planet Cyberion"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "DC Comics Presents #26 (October, 1980)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Teen Titan",
        "base": "San Francisco"
      },
      "connections": {
        "groupAffiliation": "Justice League; formerly Teen Titans, Titans, Titans East, New Teen Titans",
        "relatives": "Silas Stone (father), Elinore Stone (mother), Tucker Stone (grandfather), Maude Stone (grandmother)"
      },
      "images": {
        "xs": "images/characters/xs/194-cyborg.jpg",
        "sm": "images/characters/sm/194-cyborg.jpg",
        "md": "images/characters/md/194-cyborg.jpg",
        "lg": "images/characters/lg/194-cyborg.jpg"
      }
    },
    {
      "id": 195,
      "name": "Cyborg Superman",
      "slug": "195-cyborg-superman",
      "powerstats": {
        "intelligence": 75,
        "strength": 93,
        "speed": 92,
        "durability": 100,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Henry Henshaw",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Grandmaster of the Manhunters",
          "Herald of the Anti-Monitor",
          "Alpha-Prime of the Alpha Lanterns"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Adventures of Superman #466 (May, 1990)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601"
      },
      "connections": {
        "groupAffiliation": "Alpha Lantern Corps, Manhunters, Warworld, formerly Apokolips and Sinestro Corps",
        "relatives": "Terri Henshaw (wife, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/195-cyborg-superman.jpg",
        "sm": "images/characters/sm/195-cyborg-superman.jpg",
        "md": "images/characters/md/195-cyborg-superman.jpg",
        "lg": "images/characters/lg/195-cyborg-superman.jpg"
      }
    },
    {
      "id": 196,
      "name": "Cyclops",
      "slug": "196-cyclops",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 23,
        "durability": 42,
        "power": 76,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Scott Summers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Scotty",
          "Cyke",
          "Slim",
          "Fearless Leader",
          "One-Eye",
          "Erik the Red",
          "Slym Dayspring",
          "Mutate 007",
          "Apocalypse"
        ],
        "placeOfBirth": "Anchorage, Alaska",
        "firstAppearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Leader of mutant race, adventurer, headmaster, former student, radio announcer",
        "base": "Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "X-Men (leader, founding member); formerly X-Force (founder); Corsairs (squad leader); The Twelve; X-Factor/X-Terminators (founding member); 198",
        "relatives": "Oscar Summers (adoptive paternal distant ancestor, deceased); Daniel Summers (paternal distant ancestor, deceased); Amanda Mueller (Black Womb) (paternal distant ancestor); unnamed great-grandfather, deceased; Gloria Dayne (Fontanelle) (paternal distant ancestor); Philip Summers (paternal grandfather); Deborah Summers (paternal grandmother); Christopher Summers (Corsair) (father, deceased); Katherine Ann Summers (mother, deceased); Jack Winters (Jack O'Diamonds) (former foster father); Alexander Summers (Havok) (brother); Gabriel Summers (Vulcan) (brother, deceased); Madelyne Pryor-Summers (Red Queen) (first wife/second wife's clone, deceased); Jean Grey-Summers (Phoenix) (second wife, deceased); Nathan Summers (Cable) (son, deceased); Gailyn Bailey (niece, deceased); Joseph Bailey (nephew, deceased); Adam Neramani (X-Treme) (nephew, alleged half-brother); Hope Summers (adoptive granddaughter); Stryfe (son's clone); Summers and Grey Family Tree (more relatives)"
      },
      "images": {
        "xs": "images/characters/xs/196-cyclops.jpg",
        "sm": "images/characters/sm/196-cyclops.jpg",
        "md": "images/characters/md/196-cyclops.jpg",
        "lg": "images/characters/lg/196-cyclops.jpg"
      }
    },
    {
      "id": 198,
      "name": "Dagger",
      "slug": "198-dagger",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 35,
        "durability": 42,
        "power": 52,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "unknown",
          "0 kg"
        ],
        "weight": [
          "116 lb",
          "52 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Tandy Bowen",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lady Light"
        ],
        "placeOfBirth": "Shaker Heights, Ohio",
        "firstAppearance": "Spectacular Spiderman #64",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante",
        "base": "Holy Ghost Church, 42nd Street, New York City"
      },
      "connections": {
        "groupAffiliation": "Cloak and Dagger, Defenders, League of Losers, Marvel Knights, New Warriors, Secret Avengers",
        "relatives": "Melissa Bowen (mother), unnamed father, Phillip Carlisle (stepfather), Father Michael Bowen (uncle)"
      },
      "images": {
        "xs": "images/characters/xs/198-dagger.jpg",
        "sm": "images/characters/sm/198-dagger.jpg",
        "md": "images/characters/md/198-dagger.jpg",
        "lg": "images/characters/lg/198-dagger.jpg"
      }
    },
    {
      "id": 201,
      "name": "Daredevil",
      "slug": "201-daredevil",
      "powerstats": {
        "intelligence": 75,
        "strength": 13,
        "speed": 25,
        "durability": 35,
        "power": 61,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Matt Murdock",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Matt",
          "Jack Batlin",
          "Kingpin of Crime",
          "Laurent LeVasseur",
          "Michael \"Mike\" Murdock",
          "Scarlet Swashbuckler",
          "Nameless One",
          "Kingpin of Hell's Kitchen",
          "The Man Without Fear",
          "The Guardian Devil",
          "DD",
          "Red",
          "Hornhead",
          "Cooper Peyton",
          "Captain Universe"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "Daredevil #1 (April, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, vigilante, Attorney at Law",
        "base": "Hell's Kitchen, New York, New York, Shadowland (formerly)"
      },
      "connections": {
        "groupAffiliation": "none; Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.",
        "relatives": "Jonathan \"Battling Jack\" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)"
      },
      "images": {
        "xs": "images/characters/xs/201-daredevil.jpg",
        "sm": "images/characters/sm/201-daredevil.jpg",
        "md": "images/characters/md/201-daredevil.jpg",
        "lg": "images/characters/lg/201-daredevil.jpg"
      }
    },
    {
      "id": 202,
      "name": "Darkhawk",
      "slug": "202-darkhawk",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 33,
        "durability": 70,
        "power": 74,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Christopher Powell",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bucket-Head",
          "Edge-Man",
          "Powell"
        ],
        "placeOfBirth": "Queens, New York",
        "firstAppearance": "Darkhawk #1 (March, 1991)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Retired Superhero",
        "base": "Los Angeles, California; formerly New York City and Avengers Compound"
      },
      "connections": {
        "groupAffiliation": "formerly Loners, New Warriors, Avengers West Coast (reservist), Secret Defenders (founder)",
        "relatives": "Michael Powell (father), Grace Powell (mother), Jonathon and Jason Powell (brothers)"
      },
      "images": {
        "xs": "images/characters/xs/202-darkhawk.jpg",
        "sm": "images/characters/sm/202-darkhawk.jpg",
        "md": "images/characters/md/202-darkhawk.jpg",
        "lg": "images/characters/lg/202-darkhawk.jpg"
      }
    },
    {
      "id": 204,
      "name": "Darkseid",
      "slug": "204-darkseid",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "New God",
        "height": [
          "8'9",
          "267 cm"
        ],
        "weight": [
          "1815 lb",
          "817 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Uxas",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dark God"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superman's Pal Jimmy Olsen #134 (November 1970)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Dictator of Apokolips",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "New Gods of Apokolips(ruler), Secret Society of Supervillains",
        "relatives": "Zonuz (father), Izaya (brother), Avia (sister, deceased), Grail (daughter), Kalibak (son), Orion (son), Deathspawn (son), Scot (nephew/adopted son)"
      },
      "images": {
        "xs": "images/characters/xs/204-darkseid.jpg",
        "sm": "images/characters/sm/204-darkseid.jpg",
        "md": "images/characters/md/204-darkseid.jpg",
        "lg": "images/characters/lg/204-darkseid.jpg"
      }
    },
    {
      "id": 206,
      "name": "Darkstar",
      "slug": "206-darkstar",
      "powerstats": {
        "intelligence": 38,
        "strength": 8,
        "speed": 35,
        "durability": 42,
        "power": 79,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Laynia Petrovna",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Tyomni Zvesda"
        ],
        "placeOfBirth": "Minks, USSR",
        "firstAppearance": "Champions #7 (August, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Occupation unknown",
        "base": "(before death) Paris, France (formerly) Moscow, USSR; Los Angeles, California, United States"
      },
      "connections": {
        "groupAffiliation": "(at death)X-Corps (formerly) Champions, Winter Guard, Soviet Super Soldiers",
        "relatives": "Nicolai Krylenko a.k.a. Vanguard (brother), Sergi Krylov a.k.a. The Presence (father), Marya Krylova (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/206-darkstar.jpg",
        "sm": "images/characters/sm/206-darkstar.jpg",
        "md": "images/characters/md/206-darkstar.jpg",
        "lg": "images/characters/lg/206-darkstar.jpg"
      }
    },
    {
      "id": 209,
      "name": "Dash",
      "slug": "209-dash",
      "powerstats": {
        "intelligence": 25,
        "strength": 12,
        "speed": 92,
        "durability": 60,
        "power": 20,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "4'0",
          "122 cm"
        ],
        "weight": [
          "60 lb",
          "27 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Dashiell Robert Parr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Fastest Kid on Earth",
          "The Dash"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Incredibles (Movies, 2004)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Incredible Family (genetic member), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally)",
        "relatives": "Robert Parr (Mr Incredible, father), Helen Parr (Elastigirl, mother), Violet Parr(Violet, sister), , Jack-jack (brother)"
      },
      "images": {
        "xs": "images/characters/xs/209-dash.jpg",
        "sm": "images/characters/sm/209-dash.jpg",
        "md": "images/characters/md/209-dash.jpg",
        "lg": "images/characters/lg/209-dash.jpg"
      }
    },
    {
      "id": 211,
      "name": "Dazzler",
      "slug": "211-dazzler",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 33,
        "durability": 60,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Alison Blaire",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ali",
          "The Disco Dazzler",
          "Songbird",
          "Dazz",
          "Kimberly Schau",
          "Ally"
        ],
        "placeOfBirth": "Gardendale, Long Island, New York",
        "firstAppearance": "X-Men #130 (1980)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, singer, former actress, model, revolutionary",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Excalibur, X-Babies (guardian), Mojoverse Rebellion, X-Men, Cat's Laughing, Gladiators",
        "relatives": "Bella Blaire (paternal grandmother), Carter Blaire (father, deceased), Katherine Blaire-Brown (Barbara London, mother), Nicholas Brown (step-father), Lois London (half-sister), Longshot (husband)"
      },
      "images": {
        "xs": "images/characters/xs/211-dazzler.jpg",
        "sm": "images/characters/sm/211-dazzler.jpg",
        "md": "images/characters/md/211-dazzler.jpg",
        "lg": "images/characters/lg/211-dazzler.jpg"
      }
    },
    {
      "id": 212,
      "name": "Deadman",
      "slug": "212-deadman",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 33,
        "durability": 100,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "201 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Boston Brand",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Strange Adventures #205 (October, 1967)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Wandering Spirit, Former Circus Aerialist",
        "base": "Mobile, Realm of the Just Dead"
      },
      "connections": {
        "groupAffiliation": "White Lantern Corps, formerly Sentinels of Magic, Seven Soldiers of Victory, Justice League of Apostles",
        "relatives": "Cleveland Brand (twin brother, deceased), Lita Brand (niece), Unnamed parents"
      },
      "images": {
        "xs": "images/characters/xs/212-deadman.jpg",
        "sm": "images/characters/sm/212-deadman.jpg",
        "md": "images/characters/md/212-deadman.jpg",
        "lg": "images/characters/lg/212-deadman.jpg"
      }
    },
    {
      "id": 213,
      "name": "Deadpool",
      "slug": "213-deadpool",
      "powerstats": {
        "intelligence": 69,
        "strength": 32,
        "speed": 50,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Wade Wilson",
        "alterEgos": "Evil Deadpool, Venompool",
        "aliases": [
          "Wade Wilson",
          "Jack",
          "Chiyonosake (\"the Wolf of the Rice Wine\")",
          "Rhodes",
          "Corpus",
          "Lopez",
          "Hobgoblin",
          "Thom Cruz",
          "Peter Parker"
        ],
        "placeOfBirth": "Canada",
        "firstAppearance": "New Mutants #98 (February, 1991)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others",
        "base": "Cavern-X, Sedona, Arizona, Mobile"
      },
      "connections": {
        "groupAffiliation": "Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L",
        "relatives": "Thomas \"Mickey\" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)"
      },
      "images": {
        "xs": "images/characters/xs/213-deadpool.jpg",
        "sm": "images/characters/sm/213-deadpool.jpg",
        "md": "images/characters/md/213-deadpool.jpg",
        "lg": "images/characters/lg/213-deadpool.jpg"
      }
    },
    {
      "id": 214,
      "name": "Deadshot",
      "slug": "214-deadshot",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 55,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "202 lb",
          "91 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Floyd Lawton",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Man Who Never Misses",
          "Worlds Finest Assassin",
          "Orlando Furioso"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #59 (June, 1950)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/214-deadshot.jpg",
        "sm": "images/characters/sm/214-deadshot.jpg",
        "md": "images/characters/md/214-deadshot.jpg",
        "lg": "images/characters/lg/214-deadshot.jpg"
      }
    },
    {
      "id": 215,
      "name": "Deathlok",
      "slug": "215-deathlok",
      "powerstats": {
        "intelligence": 69,
        "strength": 32,
        "speed": 30,
        "durability": 70,
        "power": 40,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "395 lb",
          "178 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Grey"
      },
      "biography": {
        "fullName": "Luther Manning",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Demolisher"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Astonishing Tales #25 (August, 1974)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "New York area"
      },
      "connections": {
        "groupAffiliation": "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
        "relatives": "Janice (Wife, seperated), Richard (son)"
      },
      "images": {
        "xs": "images/characters/xs/215-deathlok.jpg",
        "sm": "images/characters/sm/215-deathlok.jpg",
        "md": "images/characters/md/215-deathlok.jpg",
        "lg": "images/characters/lg/215-deathlok.jpg"
      }
    },
    {
      "id": 216,
      "name": "Deathstroke",
      "slug": "216-deathstroke",
      "powerstats": {
        "intelligence": 75,
        "strength": 30,
        "speed": 35,
        "durability": 100,
        "power": 47,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Slade Joseph Wilson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Slade Wilson",
          "Deathstroke the Terminator",
          "Batman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New Teen Titans #2 (December, 1980)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Mercenary; Former Soldier, Big-Game Hunter",
        "base": "The Labyrinth (exact location is currently unknown)"
      },
      "connections": {
        "groupAffiliation": "The Society, Titans; Formerly Tartarus, The Injustice League",
        "relatives": "Wade LaFarge (Ravager III, half-brother, deceased), Adeline Kane (ex-wife, deceased), Grant Wilson (Ravager I, son, deceased), Joseph Wilson (Jericho, son), Rose Wilson (Ravager IV, daughter)"
      },
      "images": {
        "xs": "images/characters/xs/216-deathstroke.jpg",
        "sm": "images/characters/sm/216-deathstroke.jpg",
        "md": "images/characters/md/216-deathstroke.jpg",
        "lg": "images/characters/lg/216-deathstroke.jpg"
      }
    },
    {
      "id": 217,
      "name": "Demogoblin",
      "slug": "217-demogoblin",
      "powerstats": {
        "intelligence": 50,
        "strength": 48,
        "speed": 42,
        "durability": 35,
        "power": 67,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jason Macendale Jr"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Web of Spider-Man #86 (March, 1992)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Demonic Redeemer",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/217-demogoblin.jpg",
        "sm": "images/characters/sm/217-demogoblin.jpg",
        "md": "images/characters/md/217-demogoblin.jpg",
        "lg": "images/characters/lg/217-demogoblin.jpg"
      }
    },
    {
      "id": 218,
      "name": "Destroyer",
      "slug": "218-destroyer",
      "powerstats": {
        "intelligence": 50,
        "strength": 95,
        "speed": 58,
        "durability": 98,
        "power": 85,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "850 lb",
          "383 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Created in Asgard",
        "firstAppearance": "Journey into Mystery #118 (1965)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/218-destroyer.jpg",
        "sm": "images/characters/sm/218-destroyer.jpg",
        "md": "images/characters/md/218-destroyer.jpg",
        "lg": "images/characters/lg/218-destroyer.jpg"
      }
    },
    {
      "id": 219,
      "name": "Diamondback",
      "slug": "219-diamondback",
      "powerstats": {
        "intelligence": 44,
        "strength": 16,
        "speed": 23,
        "durability": 28,
        "power": 45,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Willis Stryker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Luke Cage, Hero for Hire#1 (1972)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Syndicate, formerly Bloods",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/219-diamondback.jpg",
        "sm": "images/characters/sm/219-diamondback.jpg",
        "md": "images/characters/md/219-diamondback.jpg",
        "lg": "images/characters/lg/219-diamondback.jpg"
      }
    },
    {
      "id": 221,
      "name": "Doc Samson",
      "slug": "221-doc-samson",
      "powerstats": {
        "intelligence": 75,
        "strength": 80,
        "speed": 33,
        "durability": 80,
        "power": 36,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "380 lb",
          "171 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Leonard Samson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Tulsa, Oklahoma",
        "firstAppearance": "Incredible Hulk #141 (July, 1971)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Psychiatrist, teacher, adventurer, former special consultant to Gamma Base",
        "base": "Psychiatrist, teacher, adventurer, former special consultant to Gamma Base"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Leonard Skivorski (father); Ricky Myers (son);"
      },
      "images": {
        "xs": "images/characters/xs/221-doc-samson.jpg",
        "sm": "images/characters/sm/221-doc-samson.jpg",
        "md": "images/characters/md/221-doc-samson.jpg",
        "lg": "images/characters/lg/221-doc-samson.jpg"
      }
    },
    {
      "id": 222,
      "name": "Doctor Doom",
      "slug": "222-doctor-doom",
      "powerstats": {
        "intelligence": 100,
        "strength": 32,
        "speed": 20,
        "durability": 100,
        "power": 100,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "415 lb",
          "187 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Victor von Doom",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Master",
          "Invincible Man"
        ],
        "placeOfBirth": "Haasenstadt, Latveria",
        "firstAppearance": "Fantastic Four #5 (July 1962)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Monarch",
        "base": "Castle Doom, Doomstadt, Latveria"
      },
      "connections": {
        "groupAffiliation": "Future Foundation; Formerly Cabal, Knights of the Atomic Table, Acts of Vengeance Prime Movers, partner of Namor, employer of the Terrible Trio, Fantastic Four (leader)",
        "relatives": "Werner von Doom (father, deceased), Cynthia von Doom (mother, deceased); Kang the Conqueror, his counterparts, and offspring (alleged descendants), Kristoff Vernard (Doctor Doom II, adopted son), Dr Bob Doom (distant cousin), Boris (unofficially adoptive father/guardian), Valeria von Doom (daughter from alternate universe; became baby of Susan Richards and is now called Valeria Richards)"
      },
      "images": {
        "xs": "images/characters/xs/222-doctor-doom.jpg",
        "sm": "images/characters/sm/222-doctor-doom.jpg",
        "md": "images/characters/md/222-doctor-doom.jpg",
        "lg": "images/characters/lg/222-doctor-doom.jpg"
      }
    },
    {
      "id": 224,
      "name": "Doctor Fate",
      "slug": "224-doctor-fate",
      "powerstats": {
        "intelligence": 81,
        "strength": 16,
        "speed": 25,
        "durability": 80,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "197 lb",
          "89 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Kent Nelson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nabu"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "More Fun Comics #55 (May, 1940)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Tower of Fate, Salem, Massachusetts"
      },
      "connections": {
        "groupAffiliation": "Formerly All-Star Squadron, Justice Society of America, Justice League International, Black Lantern Corps",
        "relatives": "Inza Cramer (wife), Sven Nelson (father, deceased), Celestine Babcock (mother), Kent Nelson, Jr. (son), Aaron Babcock (uncle), Kent V. Nelson (grand-nephew), Laryn Nelson (great grand-niece)"
      },
      "images": {
        "xs": "images/characters/xs/224-doctor-fate.jpg",
        "sm": "images/characters/sm/224-doctor-fate.jpg",
        "md": "images/characters/md/224-doctor-fate.jpg",
        "lg": "images/characters/lg/224-doctor-fate.jpg"
      }
    },
    {
      "id": 225,
      "name": "Doctor Octopus",
      "slug": "225-doctor-octopus",
      "powerstats": {
        "intelligence": 94,
        "strength": 48,
        "speed": 33,
        "durability": 40,
        "power": 53,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "245 lb",
          "110 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Otto Octavius",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Doctor Octopus",
          "Doc Ock",
          "The Master Planner",
          "The Master Programmer",
          "Peter Benjamin Parker",
          "Superior Spider-Man",
          "Venom",
          "Superior Venom"
        ],
        "placeOfBirth": "Schenectady, New York",
        "firstAppearance": "Amazing Spider-Man #3 (July 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Former atomic-research consultant, criminal mastermind",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Thunderbolts Army; Former leader of the Sinister Six and the Masters of Evil V; Former partner of Green Goblin",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/225-doctor-octopus.jpg",
        "sm": "images/characters/sm/225-doctor-octopus.jpg",
        "md": "images/characters/md/225-doctor-octopus.jpg",
        "lg": "images/characters/lg/225-doctor-octopus.jpg"
      }
    },
    {
      "id": 226,
      "name": "Doctor Strange",
      "slug": "226-doctor-strange",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 12,
        "durability": 84,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Grey",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Stephen Strange",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sorcerer Supreme",
          "Master of the Mystic Arts",
          "Stephen Sanders",
          "Captain Universe",
          "Vincent Stevens"
        ],
        "placeOfBirth": "Philadelphia, Pennsylvania",
        "firstAppearance": "Strange Tales #110 (July, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Sorcerer Supreme, retired neurosurgeon",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One",
        "relatives": "Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/226-doctor-strange.jpg",
        "sm": "images/characters/sm/226-doctor-strange.jpg",
        "md": "images/characters/md/226-doctor-strange.jpg",
        "lg": "images/characters/lg/226-doctor-strange.jpg"
      }
    },
    {
      "id": 227,
      "name": "Domino",
      "slug": "227-domino",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 27,
        "durability": 28,
        "power": 49,
        "combat": 74
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Neena Thurman",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dom",
          "Samantha Wu",
          "Tamara Winter",
          "Elena Vladescu",
          "Jessica Marie Costello",
          "Luisa Mendoza",
          "Beatrice",
          "Christina Elizabeth Alioso",
          "Priscilla Sutherland",
          "Hope Eldridge"
        ],
        "placeOfBirth": "Project: Armageddon base, Everglades, Florida",
        "firstAppearance": "X-Force #8 (March, 1992)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men; formerly X-Force; 198; X-Corporation; The Underground; X-Force; Six Pack",
        "relatives": "Beatrice (mother), Lazarus (brother), Milo Thurman (husband, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/227-domino.jpg",
        "sm": "images/characters/sm/227-domino.jpg",
        "md": "images/characters/md/227-domino.jpg",
        "lg": "images/characters/lg/227-domino.jpg"
      }
    },
    {
      "id": 228,
      "name": "Donatello",
      "slug": "228-donatello",
      "powerstats": {
        "intelligence": 88,
        "strength": 14,
        "speed": 46,
        "durability": 60,
        "power": 58,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Don",
          "Donnie"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teenage Mutant Ninja Turtles #1",
        "publisher": "IDW Publishing",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Leonardo (brother), Michelangelo (brother), Raphael (brother)"
      },
      "images": {
        "xs": "images/characters/xs/228-donatello.jpg",
        "sm": "images/characters/sm/228-donatello.jpg",
        "md": "images/characters/md/228-donatello.jpg",
        "lg": "images/characters/lg/228-donatello.jpg"
      }
    },
    {
      "id": 230,
      "name": "Doomsday",
      "slug": "230-doomsday",
      "powerstats": {
        "intelligence": 75,
        "strength": 100,
        "speed": 67,
        "durability": 100,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Alien",
        "height": [
          "8'0",
          "244 cm"
        ],
        "weight": [
          "915 lb",
          "412 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Doomsday",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Ultimate Lifeform"
        ],
        "placeOfBirth": "Krypton",
        "firstAppearance": "Superman: The Man of Steel #17 (Nov 1992)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Destroyer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Secret Society of Super Villains, Suicide Squad, Apokolips",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/230-doomsday.jpg",
        "sm": "images/characters/sm/230-doomsday.jpg",
        "md": "images/characters/md/230-doomsday.jpg",
        "lg": "images/characters/lg/230-doomsday.jpg"
      }
    },
    {
      "id": 231,
      "name": "Doppelganger",
      "slug": "231-doppelganger",
      "powerstats": {
        "intelligence": 8,
        "strength": 63,
        "speed": 60,
        "durability": 95,
        "power": 69,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Spider-Man Doppelganger",
          "Spider-Doppelganger",
          "Mindless One"
        ],
        "placeOfBirth": "The Dimension of Manifestations",
        "firstAppearance": "Infinity War #1 (1992)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Carnage Family; Magus' doppelgangers; operative of Demogoblin",
        "relatives": "Anthropomorpho (creator); Hellspawn, Moonshade, many other doppelgangers (brethren)"
      },
      "images": {
        "xs": "images/characters/xs/231-doppelganger.jpg",
        "sm": "images/characters/sm/231-doppelganger.jpg",
        "md": "images/characters/md/231-doppelganger.jpg",
        "lg": "images/characters/lg/231-doppelganger.jpg"
      }
    },
    {
      "id": 232,
      "name": "Dormammu",
      "slug": "232-dormammu",
      "powerstats": {
        "intelligence": 88,
        "strength": 95,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Dormammu",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Dread One",
          "Eater of Souls",
          "Lord of Chaos",
          "Lord of Darkness",
          "the Great Enigma",
          "Flyx"
        ],
        "placeOfBirth": "Faltine Dimension",
        "firstAppearance": "Strange Tales #126 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Despot, conqueror",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Lords of the Splinter Realms, Lords of the Netherworlds; allied with Umar, Loki, Doctor Doom, Underchild, others",
        "relatives": "Sinifer (parent/genitor), Umar (sister), Clea (niece), Doctor Strange (nephew-in-law), Satannish (alleged offspring)"
      },
      "images": {
        "xs": "images/characters/xs/232-dormammu.jpg",
        "sm": "images/characters/sm/232-dormammu.jpg",
        "md": "images/characters/md/232-dormammu.jpg",
        "lg": "images/characters/lg/232-dormammu.jpg"
      }
    },
    {
      "id": 233,
      "name": "Dr Manhattan",
      "slug": "233-dr-manhattan",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 42,
        "durability": 100,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Cosmic",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Jonathan Osterman",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jon Osterman",
          "Doctor Manhattan"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Watchmen #1 (September, 1986)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Scientist",
        "base": "New York City; formerly Mars"
      },
      "connections": {
        "groupAffiliation": "Watchmen, Crimebusters",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/233-dr-manhattan.jpg",
        "sm": "images/characters/sm/233-dr-manhattan.jpg",
        "md": "images/characters/md/233-dr-manhattan.jpg",
        "lg": "images/characters/lg/233-dr-manhattan.jpg"
      }
    },
    {
      "id": 234,
      "name": "Drax the Destroyer",
      "slug": "234-drax-the-destroyer",
      "powerstats": {
        "intelligence": 56,
        "strength": 80,
        "speed": 25,
        "durability": 85,
        "power": 46,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Altered",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "680 lb",
          "306 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Arthur Sampson Douglas",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Burbank, California",
        "firstAppearance": "Iron Man #55 (February, 1973)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "C.I.T.T.; formerly Monster Isle and Titan"
      },
      "connections": {
        "groupAffiliation": "Guardians of the Galaxy; formerly Infinity Watch, Secret Defenders, United Front, Selects of the Phalanx",
        "relatives": "Yvette Steckley Douglas (wife, deceased), Heather Douglas (aka Moondragon, daughter), Pamela Douglas (aka Sundragon, niece), Cammille Benally (foster daughter), Venom (former symbiote)"
      },
      "images": {
        "xs": "images/characters/xs/234-drax-the-destroyer.jpg",
        "sm": "images/characters/sm/234-drax-the-destroyer.jpg",
        "md": "images/characters/md/234-drax-the-destroyer.jpg",
        "lg": "images/characters/lg/234-drax-the-destroyer.jpg"
      }
    },
    {
      "id": 235,
      "name": "Ego",
      "slug": "235-ego",
      "powerstats": {
        "intelligence": 88,
        "strength": 80,
        "speed": 83,
        "durability": 99,
        "power": 71,
        "combat": 28
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Ego",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Living Planet"
        ],
        "placeOfBirth": "The Black Galaxy",
        "firstAppearance": "THOR #132",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Inapplicable",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Inapplicable"
      },
      "images": {
        "xs": "images/characters/xs/235-ego.jpg",
        "sm": "images/characters/sm/235-ego.jpg",
        "md": "images/characters/md/235-ego.jpg",
        "lg": "images/characters/lg/235-ego.jpg"
      }
    },
    {
      "id": 236,
      "name": "Elastigirl",
      "slug": "236-elastigirl",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 33,
        "durability": 95,
        "power": 52,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Helen Parr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mrs Incredible"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Incredibles (Movies, 2004)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Incredible Family (co-leader), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally), Snug Porter (receives aircraft from him)",
        "relatives": "Robert Parr(Mr Incredible, husband), Violet Parr(Violet, daughter), Dashiell Parr (Dash, son), Jack-jack (son)"
      },
      "images": {
        "xs": "images/characters/xs/236-elastigirl.jpg",
        "sm": "images/characters/sm/236-elastigirl.jpg",
        "md": "images/characters/md/236-elastigirl.jpg",
        "lg": "images/characters/lg/236-elastigirl.jpg"
      }
    },
    {
      "id": 237,
      "name": "Electro",
      "slug": "237-electro",
      "powerstats": {
        "intelligence": 69,
        "strength": 10,
        "speed": 50,
        "durability": 56,
        "power": 67,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Maxwell Dillon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #9 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Sinister Six formerly Emissaries of Evil, Frightful Four and Sinister Twelve",
        "relatives": "Norma Lynn Dillon (ex-wife), Jonathan Dillon (father, deceased), Anita Dillon (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/237-electro.jpg",
        "sm": "images/characters/sm/237-electro.jpg",
        "md": "images/characters/md/237-electro.jpg",
        "lg": "images/characters/lg/237-electro.jpg"
      }
    },
    {
      "id": 238,
      "name": "Elektra",
      "slug": "238-elektra",
      "powerstats": {
        "intelligence": 63,
        "strength": 11,
        "speed": 30,
        "durability": 28,
        "power": 59,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Elektra Natchios",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Erynys (evil self)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Daredevil #168",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Assassin, adventurer, mercenary, former student, dancer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "S.H.I.E.L.D.; formerly Thunderbolts, Hand, Chaste, Heroes For Hire, Code Red, partner of Daredevil and Deadpool",
        "relatives": "Hugo Kostas Natchios (father, deceased), Christina Natchios (mother, deceased), Orestez Natchios (older brother), Demetrios Natchios (Uncle), Alexia Natchios (Aunt)"
      },
      "images": {
        "xs": "images/characters/xs/238-elektra.jpg",
        "sm": "images/characters/sm/238-elektra.jpg",
        "md": "images/characters/md/238-elektra.jpg",
        "lg": "images/characters/lg/238-elektra.jpg"
      }
    },
    {
      "id": 240,
      "name": "Elongated Man",
      "slug": "240-elongated-man",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 33,
        "durability": 90,
        "power": 44,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "178 lb",
          "80 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Ralph Dibny",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Alvin Burgson; Molder"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash #112 (1960)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Detective",
        "base": "Opal City, Central City"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, Justice League Europe, Super Buddies, Outsiders, Croatoans, Black Lantern Corps",
        "relatives": "Sue Dibny (wife, deceased); Ken Dibny (brother); Jake Dibny (uncle); Jim (uncle-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/240-elongated-man.jpg",
        "sm": "images/characters/sm/240-elongated-man.jpg",
        "md": "images/characters/md/240-elongated-man.jpg",
        "lg": "images/characters/lg/240-elongated-man.jpg"
      }
    },
    {
      "id": 241,
      "name": "Emma Frost",
      "slug": "241-emma-frost",
      "powerstats": {
        "intelligence": 75,
        "strength": 63,
        "speed": 35,
        "durability": 90,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'10'",
          "178 cm"
        ],
        "weight": [
          "144 lb",
          "65 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Emma Frost",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Storm",
          "White Queen"
        ],
        "placeOfBirth": "Boston, Massachusetts",
        "firstAppearance": "UNCANNY X-MEN #132",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "(current) Emma Frost operates from the Massachusetts Academy, Snow Valley, Massachusetts, (former) Hellfire Club mansion in New York City, a home in the Berkshire Mountains in Massachusetts (near the Massachusetts Academy), and places of residence in vari"
      },
      "connections": {
        "groupAffiliation": "Active member of the X-Men, Instructor for Generation X, The Inner Circle of the Hellfire Club",
        "relatives": "Winston Frost (father), Hazel Frost (mother), Christian Frost (brother) Adrienne Frost (sister, deceased,) Cordelia Frost (sister)"
      },
      "images": {
        "xs": "images/characters/xs/241-emma-frost.jpg",
        "sm": "images/characters/sm/241-emma-frost.jpg",
        "md": "images/characters/md/241-emma-frost.jpg",
        "lg": "images/characters/lg/241-emma-frost.jpg"
      }
    },
    {
      "id": 242,
      "name": "Enchantress",
      "slug": "242-enchantress",
      "powerstats": {
        "intelligence": 63,
        "strength": 14,
        "speed": 25,
        "durability": 60,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "126 lb",
          "57 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "June Moone",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Anita Soulfeeda",
          "Soulsinger"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Strange Adventures #187",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Artist; Magician",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Forgotten Villains, Sentinels of Magic, Shadowpact, Suicide Squad",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/242-enchantress.jpg",
        "sm": "images/characters/sm/242-enchantress.jpg",
        "md": "images/characters/md/242-enchantress.jpg",
        "lg": "images/characters/lg/242-enchantress.jpg"
      }
    },
    {
      "id": 246,
      "name": "Etrigan",
      "slug": "246-etrigan",
      "powerstats": {
        "intelligence": 50,
        "strength": 85,
        "speed": 17,
        "durability": 100,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "452 lb",
          "203 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Jason Blood",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Demon"
        ],
        "placeOfBirth": "Hell",
        "firstAppearance": "Demon #1 (September, 1972)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "Hell"
      },
      "connections": {
        "groupAffiliation": "Formerly Justice League of America, Spirit Squad",
        "relatives": "Belial (father), Raan va Daath (mother), Merlin (half Brother)"
      },
      "images": {
        "xs": "images/characters/xs/246-etrigan.jpg",
        "sm": "images/characters/sm/246-etrigan.jpg",
        "md": "images/characters/md/246-etrigan.jpg",
        "lg": "images/characters/lg/246-etrigan.jpg"
      }
    },
    {
      "id": 247,
      "name": "Evil Deadpool",
      "slug": "247-evil-deadpool",
      "powerstats": {
        "intelligence": 69,
        "strength": 32,
        "speed": 50,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Wade Wilson",
        "alterEgos": "Deadpool, Venompool",
        "aliases": [
          "Dreadpool"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Deadpool Vol 2 #44 (December, 2011)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Mercenary, Assasin",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Evil Deadpool Corps",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/247-evil-deadpool.jpg",
        "sm": "images/characters/sm/247-evil-deadpool.jpg",
        "md": "images/characters/md/247-evil-deadpool.jpg",
        "lg": "images/characters/lg/247-evil-deadpool.jpg"
      }
    },
    {
      "id": 248,
      "name": "Evilhawk",
      "slug": "248-evilhawk",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 33,
        "durability": 70,
        "power": 85,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Alien",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "235 lb",
          "106 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Dargin Bokk",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Darkhawk #20 (October, 1992)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Crimelord",
        "base": "(Formerly) planet Luq"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/248-evilhawk.jpg",
        "sm": "images/characters/sm/248-evilhawk.jpg",
        "md": "images/characters/md/248-evilhawk.jpg",
        "lg": "images/characters/lg/248-evilhawk.jpg"
      }
    },
    {
      "id": 249,
      "name": "Exodus",
      "slug": "249-exodus",
      "powerstats": {
        "intelligence": 63,
        "strength": 81,
        "speed": 28,
        "durability": 28,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Bennet du Paris",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Paris Bennet"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Factor #92 (July, 1993)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Terrorist, would-be conqueror, Former leader of the Acolytes, Crusader",
        "base": "Currently mobile, Formerly Avalon"
      },
      "connections": {
        "groupAffiliation": "Acolytes, formerly Brotherhood and Marauders",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/249-exodus.jpg",
        "sm": "images/characters/sm/249-exodus.jpg",
        "md": "images/characters/md/249-exodus.jpg",
        "lg": "images/characters/lg/249-exodus.jpg"
      }
    },
    {
      "id": 251,
      "name": "Falcon",
      "slug": "251-falcon",
      "powerstats": {
        "intelligence": 38,
        "strength": 13,
        "speed": 50,
        "durability": 28,
        "power": 22,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Sam Wilson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sam Wilson",
          "(formerly) Captain America",
          "Blackbird",
          "Blackwing",
          "Brother Superhero"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "Captain America #117 (September, 1969)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Crimefighter, (former) freelance artist",
        "base": "New York, New York; formerly Avengers Mansion, New York City, New York; S.H.I.E.L.D. Helicarrier."
      },
      "connections": {
        "groupAffiliation": "Mighty Avengers, Avengers, S.H.I.E.L.D.; partner of Redwing; formerly Heroes For Hire, partner of Captain America, Secret Avengers, S.H.I.E.L.D. Super-Agents (leader), Defenders, ally of Secret Warriors , Defenders for a Day",
        "relatives": "Paul Wilson (father, deceased); Darlene Wilson (mother, deceased); Sarah Wilson (sister), Gideon Wilson (brother); Jim Wilson (nephew, deceased); Jody Casper (nephew)"
      },
      "images": {
        "xs": "images/characters/xs/251-falcon.jpg",
        "sm": "images/characters/sm/251-falcon.jpg",
        "md": "images/characters/md/251-falcon.jpg",
        "lg": "images/characters/lg/251-falcon.jpg"
      }
    },
    {
      "id": 252,
      "name": "Fallen One II",
      "slug": "252-fallen-one-ii",
      "powerstats": {
        "intelligence": 88,
        "strength": 85,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Blue"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Heralds of Galactus",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/252-fallen-one-ii.jpg",
        "sm": "images/characters/sm/252-fallen-one-ii.jpg",
        "md": "images/characters/md/252-fallen-one-ii.jpg",
        "lg": "images/characters/lg/252-fallen-one-ii.jpg"
      }
    },
    {
      "id": 253,
      "name": "Faora",
      "slug": "253-faora",
      "powerstats": {
        "intelligence": 88,
        "strength": 95,
        "speed": 75,
        "durability": 100,
        "power": 98,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Kryptonian",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Faora Hu-Ul",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Katie"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Action Comics #471 (May, 1977)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Serial killer",
        "base": "Phantom Zone; formerly Krypton"
      },
      "connections": {
        "groupAffiliation": "Phantom Zone Criminals",
        "relatives": "Hu-Ul (father, presumably deceased)"
      },
      "images": {
        "xs": "images/characters/xs/253-faora.jpg",
        "sm": "images/characters/sm/253-faora.jpg",
        "md": "images/characters/md/253-faora.jpg",
        "lg": "images/characters/lg/253-faora.jpg"
      }
    },
    {
      "id": 254,
      "name": "Feral",
      "slug": "254-feral",
      "powerstats": {
        "intelligence": 38,
        "strength": 28,
        "speed": 45,
        "durability": 28,
        "power": 27,
        "combat": 70
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Yellow (without irises)",
        "hairColor": "Orange / White"
      },
      "biography": {
        "fullName": "Maria Callasantos",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "NEW MUTANTS #99",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Formerly Adventurer, Terrorist",
        "base": "Base of operations unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Morlocks, X-Force, Mutant Liberation Front",
        "relatives": "Mr. Callasantos (father, first name unrevealed, deceased), Marcella Callasantos (mother, deceased), Lucia Callasantos (Thornn, sister), Matteo Callasantos (brother, deceased), Carolina Callasantos (sister, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/254-feral.jpg",
        "sm": "images/characters/sm/254-feral.jpg",
        "md": "images/characters/md/254-feral.jpg",
        "lg": "images/characters/lg/254-feral.jpg"
      }
    },
    {
      "id": 256,
      "name": "Fin Fang Foom",
      "slug": "256-fin-fang-foom",
      "powerstats": {
        "intelligence": 50,
        "strength": 81,
        "speed": 23,
        "durability": 100,
        "power": 75,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Kakarantharaian",
        "height": [
          "32'0",
          "975 cm"
        ],
        "weight": [
          "40000 lb",
          "18 tons"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "He Whose Limbs Shatter Mountains and Whose Back Scrapes the Sun (translation)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "New York, formerly Valley of the Sleeping Dragon in China"
      },
      "connections": {
        "groupAffiliation": "Affiliation \"Fin Fang Four,\" former ally of the Mandarin, pawn of Doctor Vault, member of starship crew",
        "relatives": "Fraktur (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/256-fin-fang-foom.jpg",
        "sm": "images/characters/sm/256-fin-fang-foom.jpg",
        "md": "images/characters/md/256-fin-fang-foom.jpg",
        "lg": "images/characters/lg/256-fin-fang-foom.jpg"
      }
    },
    {
      "id": 257,
      "name": "Firebird",
      "slug": "257-firebird",
      "powerstats": {
        "intelligence": 38,
        "strength": 8,
        "speed": 40,
        "durability": 14,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5'",
          "165 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Bonita Juarez",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pajaro Del Fuego",
          "La Espirita",
          "Firemaiden"
        ],
        "placeOfBirth": "Buena Vista, New Mexico",
        "firstAppearance": "INCREDIBLE HULK Vol. 2 #265",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Social worker, adventurer",
        "base": "New Mexico"
      },
      "connections": {
        "groupAffiliation": "Catholic Church; formerly the Rangers, provisional member of the Avengers West Coast, Queen's Vengeance",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/257-firebird.jpg",
        "sm": "images/characters/sm/257-firebird.jpg",
        "md": "images/characters/md/257-firebird.jpg",
        "lg": "images/characters/lg/257-firebird.jpg"
      }
    },
    {
      "id": 258,
      "name": "Firelord",
      "slug": "258-firelord",
      "powerstats": {
        "intelligence": 38,
        "strength": 63,
        "speed": 75,
        "durability": 90,
        "power": 52,
        "combat": 28
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'4'",
          "193 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Yellow"
      },
      "biography": {
        "fullName": "Pyreus Kril",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nova Centurion"
        ],
        "placeOfBirth": "Xander, planet in Tranta System, Andromeda Galaxy",
        "firstAppearance": "THOR Vol. 1 #225",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former starship captain, former herald of Galactus",
        "base": "Mobile; usually in space"
      },
      "connections": {
        "groupAffiliation": "Formerly Nova Corps, Guardians of the Galaxy (in an alternate future)",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/258-firelord.jpg",
        "sm": "images/characters/sm/258-firelord.jpg",
        "md": "images/characters/md/258-firelord.jpg",
        "lg": "images/characters/lg/258-firelord.jpg"
      }
    },
    {
      "id": 259,
      "name": "Firestar",
      "slug": "259-firestar",
      "powerstats": {
        "intelligence": 50,
        "strength": 8,
        "speed": 54,
        "durability": 55,
        "power": 71,
        "combat": 32
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Angelica Jones",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Angel",
          "Anj",
          "Lady Comet"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "Uncanny X-Men #193 (May, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "New Warriors Crash Pad, New York City, New York State; Avengers Mansion, New York City, New York State; and formerly Massachusetts Academy, Snow Valley, Massachusetts"
      },
      "connections": {
        "groupAffiliation": "New Warriors Reservist, Avengers Reservist, and Former Hellion and student of the White Queen",
        "relatives": "Bartholomew Jones (father), Nana (grandmother)"
      },
      "images": {
        "xs": "images/characters/xs/259-firestar.jpg",
        "sm": "images/characters/sm/259-firestar.jpg",
        "md": "images/characters/md/259-firestar.jpg",
        "lg": "images/characters/lg/259-firestar.jpg"
      }
    },
    {
      "id": 260,
      "name": "Firestorm",
      "slug": "260-firestorm",
      "powerstats": {
        "intelligence": 50,
        "strength": 53,
        "speed": 58,
        "durability": 56,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jason Rusch",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Nuclear Man"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Firestorm (Volume 3) #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "University student; former food server at Bryson's Family Treat; former mascot at Ho-Ho Charlie's Chicken Shack; former intern at S.T.A.R. Labs",
        "base": "Detroit, Michigan"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, formerly Lexcorp",
        "relatives": "Alvin Rusch (father)"
      },
      "images": {
        "xs": "images/characters/xs/260-firestorm.jpg",
        "sm": "images/characters/sm/260-firestorm.jpg",
        "md": "images/characters/md/260-firestorm.jpg",
        "lg": "images/characters/lg/260-firestorm.jpg"
      }
    },
    {
      "id": 261,
      "name": "Firestorm",
      "slug": "261-firestorm",
      "powerstats": {
        "intelligence": 38,
        "strength": 80,
        "speed": 58,
        "durability": 80,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "202 lb",
          "91 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Ronald Raymond",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ronnie",
          "Roy",
          "Ronald Rockwell",
          "Flamehead"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Firestorm #1 (March, 1978)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former employee of Bun 'n Run",
        "base": "Formerly Manhattan, New York City; Ivy University, Ivy Town; Pittsburgh, Pennsylvania"
      },
      "connections": {
        "groupAffiliation": "Firestorm Matrix, Justice League,formerly Black Lantern Corps, Power Company, White Lantern Corps",
        "relatives": "Edward Raymond (father); Elaine Rockwell (mother, deceased); Felicity Smoak-Raymond (stepmother); Richard Dare (grandfather)"
      },
      "images": {
        "xs": "images/characters/xs/261-firestorm.jpg",
        "sm": "images/characters/sm/261-firestorm.jpg",
        "md": "images/characters/md/261-firestorm.jpg",
        "lg": "images/characters/lg/261-firestorm.jpg"
      }
    },
    {
      "id": 263,
      "name": "Flash",
      "slug": "263-flash",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 100,
        "durability": 50,
        "power": 68,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "179 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown / White"
      },
      "biography": {
        "fullName": "Jay Garrick",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jay Garrick",
          "Siegfreid the Speedster"
        ],
        "placeOfBirth": "Hibbardsville, Kansas",
        "firstAppearance": "Flash Comics #1 (January 1940)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Research Scientist, part-time Director of Garrick Laboratories",
        "base": "Keystone City, Kansas"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America, Flash Family; formerly All-Star Squadron",
        "relatives": "Joseph Garrick (father), Joan Williams (wife), Arthur Williams (father-in-law), unnamed adopted son (deceased), Bart Allen (Flash II, ward)"
      },
      "images": {
        "xs": "images/characters/xs/263-flash.jpg",
        "sm": "images/characters/sm/263-flash.jpg",
        "md": "images/characters/md/263-flash.jpg",
        "lg": "images/characters/lg/263-flash.jpg"
      }
    },
    {
      "id": 265,
      "name": "Flash II",
      "slug": "265-flash-ii",
      "powerstats": {
        "intelligence": 88,
        "strength": 48,
        "speed": 100,
        "durability": 60,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Black Racer",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Barry Allen",
        "alterEgos": "Black Racer",
        "aliases": [
          "The Scarlet Speedster",
          "the Fastest Man Alive",
          "the Monarch of Motion",
          "the Sultan of Speed"
        ],
        "placeOfBirth": "Fallville, Iowa",
        "firstAppearance": "Showcase #4 (October, 1956)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Forensic Scientist",
        "base": "Central City, Missouri"
      },
      "connections": {
        "groupAffiliation": "Flash Family, Justice League of America; formerly Blue Lantern Corps",
        "relatives": "Henry and Nora (parents), Malcolm Thawne (twin), Iris West Allen (wife), Wally West (Flash III, nephew), Don and Dawn Allen (son and daughter), Bart Allen (Flash IV, grandson), Jenni Ognats (granddaughter)"
      },
      "images": {
        "xs": "images/characters/xs/265-flash-ii.jpg",
        "sm": "images/characters/sm/265-flash-ii.jpg",
        "md": "images/characters/md/265-flash-ii.jpg",
        "lg": "images/characters/lg/265-flash-ii.jpg"
      }
    },
    {
      "id": 266,
      "name": "Flash III",
      "slug": "266-flash-iii",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 100,
        "durability": 60,
        "power": 100,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Wally West",
        "alterEgos": "Speed Demon",
        "aliases": [
          "The Fastest Man Alive",
          "The Scarlet Speedster; formerly",
          "Kid Flash I"
        ],
        "placeOfBirth": "Blue Valley, Nebraska",
        "firstAppearance": "Flash #110 (January, 1960)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Mechanic for the KCPD",
        "base": "Keystone City, Kansas"
      },
      "connections": {
        "groupAffiliation": "Flash Family, Justice League of America, Titans; formerly Teen Titans",
        "relatives": "Rudolph and Mary West (parents), Ira West (grandfather), Iris Allen (aunt), Barry Allen (Flash II, uncle), Linda Park West (wife), Jai and Iris West (twin children)"
      },
      "images": {
        "xs": "images/characters/xs/266-flash-iii.jpg",
        "sm": "images/characters/sm/266-flash-iii.jpg",
        "md": "images/characters/md/266-flash-iii.jpg",
        "lg": "images/characters/lg/266-flash-iii.jpg"
      }
    },
    {
      "id": 267,
      "name": "Flash IV",
      "slug": "267-flash-iv",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 100,
        "durability": 32,
        "power": 100,
        "combat": 48
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'2",
          "157 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Bartholomew Allen II",
        "alterEgos": "Impulse, Kid Flash II",
        "aliases": [
          "Impulse",
          "Kid Flash II"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Impulse) Flash v.2 #91 (June 1994)* (as Kid Flash) Teen Titans v.3 #4 (December 2003)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Police trainee",
        "base": "Los Angeles, California (previously Manchester, Alabama, briefly Denver, Colorado, then Keystone City, Kansas)"
      },
      "connections": {
        "groupAffiliation": "Flash Family, Teen Titans, Legion of Super-Heroes; formerly Young Justice",
        "relatives": "Barry Allen (Flash II, grandfather), Iris West Allen (grandmother), Don Allen (father), Meloni Thawne (mother), President Thawne (grandfather), Dawn Allen (aunt), Jenni Ognats (cousin), Thaddeus Thawne (clone), Owen Mercer (half-brother), Max Crandall (guardian)"
      },
      "images": {
        "xs": "images/characters/xs/267-flash-iv.jpg",
        "sm": "images/characters/sm/267-flash-iv.jpg",
        "md": "images/characters/md/267-flash-iv.jpg",
        "lg": "images/characters/lg/267-flash-iv.jpg"
      }
    },
    {
      "id": 268,
      "name": "Forge",
      "slug": "268-forge",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 12,
        "durability": 28,
        "power": 25,
        "combat": 48
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Maker",
          "Cheyenne"
        ],
        "placeOfBirth": "Unrevealed, presumably in the American West",
        "firstAppearance": "Uncanny X-Men #184",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Inventor working for the U.S. government, former soldier",
        "base": "Arlington, Virginia"
      },
      "connections": {
        "groupAffiliation": "X-Factor",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/268-forge.jpg",
        "sm": "images/characters/sm/268-forge.jpg",
        "md": "images/characters/md/268-forge.jpg",
        "lg": "images/characters/lg/268-forge.jpg"
      }
    },
    {
      "id": 269,
      "name": "Franklin Richards",
      "slug": "269-franklin-richards",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 50,
        "durability": 60,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "4'8",
          "142 cm"
        ],
        "weight": [
          "100 lb",
          "45 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Franklin  Richards",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Franklin Benjamin",
          "Tattletale",
          "Psi-Lord",
          "Ego-Spawn",
          "Avatar"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "Fantastic Four Annual #6",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "Baxter Building, New York, New York (formerly) Four Freedoms Plaza; Pier 4; Massachusetts Academy"
      },
      "connections": {
        "groupAffiliation": "Future Foundation; formerly Power Pack, Generation X, Daydreamers",
        "relatives": "Reed Richards (Mister Fantastic, father), Susan Storm Richards (Invisible Woman, mother), Valeria Richards (sister), Jonathan Storm (Human Torch, uncle), Nathaniel Richards (paternal grandfather), Franklin Storm (maternal grandfather, deceased), Evelyn Richards, Mary Storm (grandmothers (paternal and maternal respectively), deceased), Benjamin J. Grimm (Thing, godfather), Alicia Masters (godmother)."
      },
      "images": {
        "xs": "images/characters/xs/269-franklin-richards.jpg",
        "sm": "images/characters/sm/269-franklin-richards.jpg",
        "md": "images/characters/md/269-franklin-richards.jpg",
        "lg": "images/characters/lg/269-franklin-richards.jpg"
      }
    },
    {
      "id": 270,
      "name": "Franklin Storm",
      "slug": "270-franklin-storm",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 1,
        "durability": 1,
        "power": 0,
        "combat": 10
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'2'",
          "188 cm"
        ],
        "weight": [
          "205 lb",
          "92 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Grey"
      },
      "biography": {
        "fullName": "Dr. Franklin Storm",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Franklin Storm was erroneously believed to be the first Invincible Man"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "FANTASTIC FOUR #31",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Surgeon",
        "base": "Inapplicable"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Mary Storm (wife, deceased), Susan Storm Richards (Invisible Woman, daughter), Jonathan Storm (Human Torch, son), Franklin Richards (grandson), Reed Richards (Mister Fantastic, son-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/270-franklin-storm.jpg",
        "sm": "images/characters/sm/270-franklin-storm.jpg",
        "md": "images/characters/md/270-franklin-storm.jpg",
        "lg": "images/characters/lg/270-franklin-storm.jpg"
      }
    },
    {
      "id": 271,
      "name": "Frenzy",
      "slug": "271-frenzy",
      "powerstats": {
        "intelligence": 63,
        "strength": 53,
        "speed": 35,
        "durability": 100,
        "power": 38,
        "combat": 52
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "6'11",
          "211 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Joanna Cargill",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Factor Vol 1 #4",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Mercenary",
        "base": "Mobile; formerly Avalon in Earth orbit; Genosha; California"
      },
      "connections": {
        "groupAffiliation": "Acolytes, formerly Alliance of Evil; temporarily X-Men while controlled by Jean Grey, Femizons",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/271-frenzy.jpg",
        "sm": "images/characters/sm/271-frenzy.jpg",
        "md": "images/characters/md/271-frenzy.jpg",
        "lg": "images/characters/lg/271-frenzy.jpg"
      }
    },
    {
      "id": 273,
      "name": "Galactus",
      "slug": "273-galactus",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Cosmic Entity",
        "height": [
          "28'9",
          "876 cm"
        ],
        "weight": [
          "36400 lb",
          "16 tons"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Galan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Maker",
          "Devourer of Worlds",
          "Eater-of-Worlds",
          "Ravager of Worlds"
        ],
        "placeOfBirth": "(Galan) Taa; (Galactus) the Cosmic Egg",
        "firstAppearance": "Fantastic Four #48 (March 1966)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Planet Devourer, Third Force of the Universe - balance between Eternity and Death, Nullifying Abraxas' Influence on the Multiverse, Third Face of the Living Tribunal - representing Equity",
        "base": "Worldship (aka Taa II); though he is generally mobile throughout the universe via his spherical starship in search of suitable planets to consume."
      },
      "connections": {
        "groupAffiliation": "Heralds of Galactus; formerly God Squad",
        "relatives": "Galan (\"father\"), Galacta (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/273-galactus.jpg",
        "sm": "images/characters/sm/273-galactus.jpg",
        "md": "images/characters/md/273-galactus.jpg",
        "lg": "images/characters/lg/273-galactus.jpg"
      }
    },
    {
      "id": 274,
      "name": "Gambit",
      "slug": "274-gambit",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 55,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "179 lb",
          "81 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Remy Etienne LeBeau",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Death",
          "Le Diable Blanc",
          "formerly Robert Lord",
          "Cajun"
        ],
        "placeOfBirth": "New Orleans, Louisiana",
        "firstAppearance": "(as Gambit) Uncanny X-Men #266 (1990), (as Death) X-Men #184 (2006)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Utopia, San Francisco Bay, California; Xavier Institute, Salem Center, Westchester County, New York; New Orleans; Paris; Cairo; Illinois",
        "base": "(current) Xavier Institute, Salem Center, Westchester County, New York; (former) New Orleans, Louisiana; Paris, France; Cairo, Illinois;"
      },
      "connections": {
        "groupAffiliation": "X-Men (Team Wolverine); formerly Marauders, Horsemen of Apocalypse, Chevaliers, X-Treme X-Men, Thieves & Unified Guild's of New Orleans, Crimson Pirates",
        "relatives": "Jean-Luc LeBeau (father), Belladonna (aka Bella Donna Boudreaux) (wife, separated)"
      },
      "images": {
        "xs": "images/characters/xs/274-gambit.jpg",
        "sm": "images/characters/sm/274-gambit.jpg",
        "md": "images/characters/md/274-gambit.jpg",
        "lg": "images/characters/lg/274-gambit.jpg"
      }
    },
    {
      "id": 275,
      "name": "Gamora",
      "slug": "275-gamora",
      "powerstats": {
        "intelligence": 75,
        "strength": 85,
        "speed": 42,
        "durability": 85,
        "power": 53,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "Zen-Whoberian",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Gamora Zen Whoberi Ben Titan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Deadliest Woman In The Universe",
          "The Most Dangerous Woman in the Galaxy"
        ],
        "placeOfBirth": "Planet Zen Whoberi, Silican System, Milky Way",
        "firstAppearance": "Strange Tales #180 (June, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Assassin, mercenary, adventurer",
        "base": "C.I.T.T.; formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem; Earth-7528"
      },
      "connections": {
        "groupAffiliation": "Guardians of the Galaxy ; formerly Phalanx's Selects, Graces (Leader), Infinity Watch ; United Front ; former minion of Thanos; ally of Adam Warlock and Pip the Troll",
        "relatives": "Thanos (foster father), Thane (foster brother), Unnamed former Symbiote"
      },
      "images": {
        "xs": "images/characters/xs/275-gamora.jpg",
        "sm": "images/characters/sm/275-gamora.jpg",
        "md": "images/characters/md/275-gamora.jpg",
        "lg": "images/characters/lg/275-gamora.jpg"
      }
    },
    {
      "id": 278,
      "name": "General Zod",
      "slug": "278-general-zod",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 96,
        "durability": 100,
        "power": 100,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Dru-Zod",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dru-Zod (possible first name)"
        ],
        "placeOfBirth": "Krypton",
        "firstAppearance": "Action Comics #845",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Formerly Krypton; formerly the Phantom Zone; currently Earth"
      },
      "connections": {
        "groupAffiliation": "Phantom Zone criminals; former member of the Kryptonian Defense Council",
        "relatives": "Ursa (mate/wife); Lor-Zod (son); Admiral Zod (possible ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/278-general-zod.jpg",
        "sm": "images/characters/sm/278-general-zod.jpg",
        "md": "images/characters/md/278-general-zod.jpg",
        "lg": "images/characters/lg/278-general-zod.jpg"
      }
    },
    {
      "id": 280,
      "name": "Ghost Rider",
      "slug": "280-ghost-rider",
      "powerstats": {
        "intelligence": 50,
        "strength": 55,
        "speed": 25,
        "durability": 100,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Johnny Blaze",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Waukegan, Illinois",
        "firstAppearance": "Marvel Spotlight #5 (August, 1972)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former stunt motorcyclist",
        "base": "Mobile, Quentin Carnival"
      },
      "connections": {
        "groupAffiliation": "Quentin Carnival Formerly Midnight Sons, Legion of Monsters, The Champions",
        "relatives": "Barton (father, deceased), Clara (mother, deceased), Craig \"Crash\" Simpson (stepfather, deceased), Mona Simpson (stepmother, deceased), Roxanne Simpson (wife)"
      },
      "images": {
        "xs": "images/characters/xs/280-ghost-rider.jpg",
        "sm": "images/characters/sm/280-ghost-rider.jpg",
        "md": "images/characters/md/280-ghost-rider.jpg",
        "lg": "images/characters/lg/280-ghost-rider.jpg"
      }
    },
    {
      "id": 284,
      "name": "Giganta",
      "slug": "284-giganta",
      "powerstats": {
        "intelligence": 81,
        "strength": 89,
        "speed": 23,
        "durability": 85,
        "power": 32,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "205",
          "62.5 meters"
        ],
        "weight": [
          "1400 lb",
          "630 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Doris Zuel",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Wonder Woman (Volume 1) #9 (1944)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal, former Scientist, Professor at Ivy University",
        "base": "Ivy Town"
      },
      "connections": {
        "groupAffiliation": "The Injustice League, formerly The Society, Villainy, Inc., The Legion of Doom",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/284-giganta.jpg",
        "sm": "images/characters/sm/284-giganta.jpg",
        "md": "images/characters/md/284-giganta.jpg",
        "lg": "images/characters/lg/284-giganta.jpg"
      }
    },
    {
      "id": 285,
      "name": "Gladiator",
      "slug": "285-gladiator",
      "powerstats": {
        "intelligence": 50,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 77,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Strontian",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "595 lb",
          "268 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blue"
      },
      "biography": {
        "fullName": "Kallark",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Majestor",
          "Praetor",
          "Captain Universe"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men Vol 1 #107 October, 1977",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Majestor of the Shi'ar Empire; Former Praetor of the Imperial Guard; possibly former Herald of Galactus",
        "base": "Chandilar, Shi'ar Galaxy; mobile throughout the Shi'ar Empire and surrounding galaxies."
      },
      "connections": {
        "groupAffiliation": "Galactic Council, Annihilators; formerly Imperial Guard; possibly Heralds of Galactus",
        "relatives": "Kubark (Kid Gladiator) (son), Xenith (The Strontian) (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/285-gladiator.jpg",
        "sm": "images/characters/sm/285-gladiator.jpg",
        "md": "images/characters/md/285-gladiator.jpg",
        "lg": "images/characters/lg/285-gladiator.jpg"
      }
    },
    {
      "id": 286,
      "name": "Goblin Queen",
      "slug": "286-goblin-queen",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 65,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Madelyne Jennifer Pryor",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Anodyne",
          "Maddie",
          "Lyne",
          "Red",
          "Madelyne Pryor-Summers"
        ],
        "placeOfBirth": "Created in Sinister's Labs, Nebraska",
        "firstAppearance": "Uncanny X-Men #168",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Mobile; formerly Anchorage, Alaska; Reaver Base, Australian Outback, Australia; Empire State Building, New York, New York"
      },
      "connections": {
        "groupAffiliation": "Former ally of X-Men, partner of N'Astirh",
        "relatives": "Mister Sinister (creator), Jean Grey (Phoenix, genetic template), Scott Summers (Cyclops, husband), Nathan Christopher Summers (Cable, son), Christopher Summers (Corsair, father-in-law), Alex Summers (Havok, brother-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/286-goblin-queen.jpg",
        "sm": "images/characters/sm/286-goblin-queen.jpg",
        "md": "images/characters/md/286-goblin-queen.jpg",
        "lg": "images/characters/lg/286-goblin-queen.jpg"
      }
    },
    {
      "id": 288,
      "name": "Gog",
      "slug": "288-gog",
      "powerstats": {
        "intelligence": 50,
        "strength": 34,
        "speed": 47,
        "durability": 72,
        "power": 39,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nephut-Sha",
          "Hassan Kareem"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Incredible Hulk #257 (1981)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Sinister Six",
        "relatives": "Seth (creator), Magog (\"brother\")"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 294,
      "name": "Gorilla Grodd",
      "slug": "294-gorilla-grodd",
      "powerstats": {
        "intelligence": 81,
        "strength": 53,
        "speed": 33,
        "durability": 70,
        "power": 100,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Gorilla",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "600 lb",
          "270 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Grodd",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "William Dawson",
          "King Grodd",
          "Gorilla Grodd",
          "Grodd-Son"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash #106 (May, 1959)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gorilla City, Africa"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Boka (wife, separated), Gorbzil Mammit (son), Sam Simeon (grandson)"
      },
      "images": {
        "xs": "images/characters/xs/294-gorilla-grodd.jpg",
        "sm": "images/characters/sm/294-gorilla-grodd.jpg",
        "md": "images/characters/md/294-gorilla-grodd.jpg",
        "lg": "images/characters/lg/294-gorilla-grodd.jpg"
      }
    },
    {
      "id": 296,
      "name": "Gravity",
      "slug": "296-gravity",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 33,
        "durability": 40,
        "power": 69,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Greg Willis",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Protector of the Universe"
        ],
        "placeOfBirth": "Sheboygan, Wisconsin",
        "firstAppearance": "Gravity #1 (August, 2005)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Young Allies; Formerly Great Lakes Initiative, Heavy Hitters",
        "relatives": "Richard Willis (father), Mary Willis (mother)"
      },
      "images": {
        "xs": "images/characters/xs/296-gravity.jpg",
        "sm": "images/characters/sm/296-gravity.jpg",
        "md": "images/characters/md/296-gravity.jpg",
        "lg": "images/characters/lg/296-gravity.jpg"
      }
    },
    {
      "id": 298,
      "name": "Green Arrow",
      "slug": "298-green-arrow",
      "powerstats": {
        "intelligence": 81,
        "strength": 12,
        "speed": 35,
        "durability": 28,
        "power": 39,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Oliver Queen",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Emerald Archer",
          "Battling Bowman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "More Fun Comics #73 (November 1941)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Professional Crime-fighter; Multi-Billionaire",
        "base": "Star City, California; Formerly Seattle, Washington"
      },
      "connections": {
        "groupAffiliation": "Justice League Reserve, Connor Hawke, Mia Dearden,  Arsenal, Green Arrows of the World, Black Canary, Green Lantern Hal Jordan, Shado, Eddie Fyers, Justice League Elite, Seven Soldiers of Victory, All-Star Squadron",
        "relatives": "Conner Hawke (son); Robert (son); Cissie King (possible daughter); Roy Harper - Red Arrow (adoptive son); Dinah Laurel Lance (wife); Dinah Drake Lance (mother-in-law, deceased); Larry Lance (father-in-law, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/298-green-arrow.jpg",
        "sm": "images/characters/sm/298-green-arrow.jpg",
        "md": "images/characters/md/298-green-arrow.jpg",
        "lg": "images/characters/lg/298-green-arrow.jpg"
      }
    },
    {
      "id": 299,
      "name": "Green Goblin",
      "slug": "299-green-goblin",
      "powerstats": {
        "intelligence": 100,
        "strength": 48,
        "speed": 38,
        "durability": 60,
        "power": 48,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Norman Osborn",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Normie",
          "Green Goblin",
          "Goblin Lord",
          "Overlord",
          "the Goblin",
          "\"Gobby\"",
          "Scrier",
          "Commander Osborn",
          "Director Osborn",
          "Iron Patriot"
        ],
        "placeOfBirth": "Hartford, Connecticut",
        "firstAppearance": "Amazing Spider-Man #14 (July, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal, owner and president of Osborn Industries",
        "base": "H.A.M.M.E.R. base; formerly Avengers Tower, New York City, New York"
      },
      "connections": {
        "groupAffiliation": "H.A.M.M.E.R., leader of the Dark Avengers; formerly Thunderbolts, The Cabal; Former leader of the Sinister Twelve, partner of Mendell Stromm, Crime Master, employer of the Enforcers, Hellfire Club",
        "relatives": "Alton Osborn, Sr. (paternal great-grandfather, deceased);Alton Osborn, Jr. (paternal grandfather, deceased);Amberson Osborn (father, deceased);Emily Osborn (wife, deceased);Gabriel Stacy (son);Sarah Stacy (daughter);Harry Osborn (Green Goblin II, son);Liz Allan (ex-daughter-in-law);Normie Osborn (grandson);Stanley Osborn (grandson);"
      },
      "images": {
        "xs": "images/characters/xs/299-green-goblin.jpg",
        "sm": "images/characters/sm/299-green-goblin.jpg",
        "md": "images/characters/md/299-green-goblin.jpg",
        "lg": "images/characters/lg/299-green-goblin.jpg"
      }
    },
    {
      "id": 300,
      "name": "Green Goblin II",
      "slug": "300-green-goblin-ii",
      "powerstats": {
        "intelligence": 75,
        "strength": 55,
        "speed": 37,
        "durability": 50,
        "power": 44,
        "combat": 26
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Harold Osborn",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "New York City",
        "firstAppearance": "Amzing Spide-Man #31",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Formerly New York City"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Liz Allen-Osborn (Wife,) Norman III (son,)Norman Osborn II - Green Goblin (father)"
      },
      "images": {
        "xs": "images/characters/xs/300-green-goblin-ii.jpg",
        "sm": "images/characters/sm/300-green-goblin-ii.jpg",
        "md": "images/characters/md/300-green-goblin-ii.jpg",
        "lg": "images/characters/lg/300-green-goblin-ii.jpg"
      }
    },
    {
      "id": 303,
      "name": "Groot",
      "slug": "303-groot",
      "powerstats": {
        "intelligence": 75,
        "strength": 85,
        "speed": 33,
        "durability": 70,
        "power": 100,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Flora Colossus",
        "height": [
          "23'0",
          "701 cm"
        ],
        "weight": [
          "8200 lb",
          "4 tons"
        ],
        "eyeColor": "Yellow",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Groot",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Monster from Planet X; His Divine Majesty King Groot the 23rd",
          "Monarch of Planet X",
          "custodian of the branch worlds",
          "ruler of all the shades",
          "Flora colossus Information-silk"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Tales to Astonish #13 (November, 1960)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Area 13 (the Howling Commandos' base)"
      },
      "connections": {
        "groupAffiliation": "Guardians of the Galaxy, Unnamed Kree covert ops team, formerly Galactic Council, Howling Commandos",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/303-groot.jpg",
        "sm": "images/characters/sm/303-groot.jpg",
        "md": "images/characters/md/303-groot.jpg",
        "lg": "images/characters/lg/303-groot.jpg"
      }
    },
    {
      "id": 305,
      "name": "Guy Gardner",
      "slug": "305-guy-gardner",
      "powerstats": {
        "intelligence": 38,
        "strength": 90,
        "speed": 53,
        "durability": 64,
        "power": 100,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human-Vuldarian",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Guy Gardner",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Lantern",
          "Red Lantern",
          "Warrior"
        ],
        "placeOfBirth": "Baltimore, Maryland",
        "firstAppearance": "Green Lantern Vol 2 #59",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former High School gym teacher; former bar owner; currently Honor guard of the Green Lantern Corps",
        "base": "Formerly New York City; currently Oa"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps, Formerly Justice League of America",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/305-guy-gardner.jpg",
        "sm": "images/characters/sm/305-guy-gardner.jpg",
        "md": "images/characters/md/305-guy-gardner.jpg",
        "lg": "images/characters/lg/305-guy-gardner.jpg"
      }
    },
    {
      "id": 306,
      "name": "Hal Jordan",
      "slug": "306-hal-jordan",
      "powerstats": {
        "intelligence": 69,
        "strength": 90,
        "speed": 75,
        "durability": 80,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Hal Jordan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Parallax",
          "Spectre",
          "Green Lantern"
        ],
        "placeOfBirth": "Coast City, California",
        "firstAppearance": "Showcase #22",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Air Force Test Pilot",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps, Justice League of America, Justice League Europe, frequently teamed with the second Flash and the original Green Arrow",
        "relatives": "Martin H. \"Marty\" Jordan (father, deceased), Jessica Jordan (mother, deceased), Jim Jordan (younger brother), Jack Jordan (older brother, deceased), Jan Jordan (sister-in-law, deceased), Helen Jordan (neice), Larry Jordan (Air Wave I - cousin, deceased), Hal Jordan (Air Wave II - cousin)"
      },
      "images": {
        "xs": "images/characters/xs/306-hal-jordan.jpg",
        "sm": "images/characters/sm/306-hal-jordan.jpg",
        "md": "images/characters/md/306-hal-jordan.jpg",
        "lg": "images/characters/lg/306-hal-jordan.jpg"
      }
    },
    {
      "id": 309,
      "name": "Harley Quinn",
      "slug": "309-harley-quinn",
      "powerstats": {
        "intelligence": 88,
        "strength": 12,
        "speed": 33,
        "durability": 65,
        "power": 55,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Harley Quinn",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Harleen Quinzel",
          "Harl",
          "Cupid of Crime",
          "Jane Wisakedjak",
          "Elise Archer",
          "Pumpkin Pooh"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman: Harley Quinn (October, 1999)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Psychiatrist",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Formerly The Quintets, The Joker, Poison Ivy, Secret Six",
        "relatives": "Barry Quinzel (brother), Sharon Quinzel (mother), Nick Quinzel (father), Jenny Quinzel (niece), Nicky Quinzel (nephew)"
      },
      "images": {
        "xs": "images/characters/xs/309-harley-quinn.jpg",
        "sm": "images/characters/sm/309-harley-quinn.jpg",
        "md": "images/characters/md/309-harley-quinn.jpg",
        "lg": "images/characters/lg/309-harley-quinn.jpg"
      }
    },
    {
      "id": 311,
      "name": "Havok",
      "slug": "311-havok",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 25,
        "durability": 60,
        "power": 71,
        "combat": 45
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Alexander Summers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mutant X",
          "Goblin Prince"
        ],
        "placeOfBirth": "Honolulu, Hawaii",
        "firstAppearance": "X-MEN #58",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Currently Adventurer, formerly Graduate student in geophysics",
        "base": "Alexandria, Virginia"
      },
      "connections": {
        "groupAffiliation": "Uncanny Avengers; formerly X-Men, Starjammers, X-Factor Investigations, Six , Brotherhood, X-Factor, Dark Descendants, Genoshan Magistrates, Defenders for a Day",
        "relatives": "Oscar Summers (adoptive paternal distant ancestor, deceased), Daniel Summers (paternal distant ancestor, deceased), Amanda Mueller (Black Womb) (paternal distant ancestor), unnamed paternal great-grandfather, deceased, Gloria Dayne (Fontanelle) (paternal distant ancestor), Philip Summers (paternal grandfather), Deborah Summers (paternal grandmother), Christopher Summers (Corsair) (father, deceased), Katherine Summers (mother, deceased), Andrew Blanding (adoptive father), Joanna Blanding (adoptive mother), Scott Summers (Cyclops) (brother), Gabriel Summers (Vulcan) (brother, deceased), Ahmet Abdol (Living Monolith) (\"brother\" via X-Gene transfer), Haley Blanding (adoptive sister), Todd Blanding (adoptive brother, deceased), Madelyne Pryor-Summers (Red Queen) (sister-in-law/clone of second sister-in-law, deceased), Jean Grey-Summers (Phoenix) (sister-in-law, deceased), Cal'syee Neramani (Deathbird) (sister-in-law), Nathan Summers (Cable) (nephew), Adam Neramani (X-Treme) (nephew, alleged half-brother), Aliya Dayspring (Jenskot) (niece, deceased), Hope Summers (niece, deceased), Madelyne Pryor (Earth-1298) (Marvel Woman) (alternate reality wife), Scott Summers (Earth-1298) (alternate reality son), Rachel Grey (Marvel Girl) (alternate reality niece), Rachel Summers (Mother Askani) (alternate reality niece, deceased), Nathaniel Grey (X-Man) (alternate reality nephew), Stryfe (nephew's clone, deceased), Tyler Dayspring (Genesis) (great-nephew, deceased), Hope Summers (adoptive great-niece), Janet van Dyne (Wasp) (wife), Katie Summers (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/311-havok.jpg",
        "sm": "images/characters/sm/311-havok.jpg",
        "md": "images/characters/md/311-havok.jpg",
        "lg": "images/characters/lg/311-havok.jpg"
      }
    },
    {
      "id": 312,
      "name": "Hawk",
      "slug": "312-hawk",
      "powerstats": {
        "intelligence": 38,
        "strength": 38,
        "speed": 35,
        "durability": 95,
        "power": 43,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "197 lb",
          "89 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Henry Hall",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Monarch",
          "Extant"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Showcase #75 (June, 1968)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Black Lantern Corps, Teen Titans, Hawk and Dove, Titans West",
        "relatives": "Don Hall (brother, deceased), Irwin Hall (father), Rae Penfield (mother), James Penfield (uncle)"
      },
      "images": {
        "xs": "images/characters/xs/312-hawk.jpg",
        "sm": "images/characters/sm/312-hawk.jpg",
        "md": "images/characters/md/312-hawk.jpg",
        "lg": "images/characters/lg/312-hawk.jpg"
      }
    },
    {
      "id": 313,
      "name": "Hawkeye",
      "slug": "313-hawkeye",
      "powerstats": {
        "intelligence": 56,
        "strength": 12,
        "speed": 21,
        "durability": 10,
        "power": 29,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Clint Barton",
        "alterEgos": "Goliath, Ronin",
        "aliases": [
          "Ronin",
          "Goliath",
          "Golden Archer",
          "the Marksman",
          "Father Time",
          "Longbow"
        ],
        "placeOfBirth": "Waverly, Iowa",
        "firstAppearance": "Tales of Suspense #57 (September, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Avengers, Thunderbolts, Avengers West Coast, Great Lakes Avengers, Shadows, Chain Gang, former partner of the Black Widow",
        "relatives": "Harold Barton (father, deceased), Edith Barton (mother, deceased), Bernard Barton (brother, deceased), Barbara Morse (wife, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/313-hawkeye.jpg",
        "sm": "images/characters/sm/313-hawkeye.jpg",
        "md": "images/characters/md/313-hawkeye.jpg",
        "lg": "images/characters/lg/313-hawkeye.jpg"
      }
    },
    {
      "id": 314,
      "name": "Hawkeye II",
      "slug": "314-hawkeye-ii",
      "powerstats": {
        "intelligence": 50,
        "strength": 6,
        "speed": 8,
        "durability": 10,
        "power": 24,
        "combat": 50
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "126 lb",
          "57 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Katherine Elizabeth Bishop",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kate Bishop"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "Young Avengers #1 (April, 2005)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student; Adventurer; Fugitive",
        "base": "Bishop Publishing, New York City, New York"
      },
      "connections": {
        "groupAffiliation": "Young Avengers, partner of Hawkeye (Clint Barton); formerly Secret Avengers",
        "relatives": "Derek Bishop (father); Eleanor Bishop (mother, deceased); Susan Bishop (sister);"
      },
      "images": {
        "xs": "images/characters/xs/314-hawkeye-ii.jpg",
        "sm": "images/characters/sm/314-hawkeye-ii.jpg",
        "md": "images/characters/md/314-hawkeye-ii.jpg",
        "lg": "images/characters/lg/314-hawkeye-ii.jpg"
      }
    },
    {
      "id": 315,
      "name": "Hawkgirl",
      "slug": "315-hawkgirl",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 53,
        "durability": 99,
        "power": 96,
        "combat": 72
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Kendra Saunders",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Chay-Ara; Sheila Carr; Lady Celia Penbrook",
          "Kate Manser; Shiera Sanders"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "JSA Secret Files #1 (August 1999)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Film School Student, Temp Curator of the Stonechat Museum",
        "base": "St. Roch, Louisiana, JLA Watchtower; formerly Manhattan, New York (as a member of the JSA)"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, formerly a member of the JSA, Birds of Prey",
        "relatives": "Michael Saunders (father, deceased); Trina Saunders (mother, deceased); Cyril \"Speed\" Saunders (grandfather); Mia Saunders (daughter); Shiera Hall (Hawkgirl, great-aunt, deceased); Carter Hall (Hawkman, great-uncle); Hector Hall (Dr. Fate, 2nd cousin); Northwind (cousin through adoption); Hippolyta Hall (Fury, cousin through marriage); Sandman (Daniel Hall, 3rd cousin), Death, Destiny, Destruction, Delirium, Desire (3rd cousins)"
      },
      "images": {
        "xs": "images/characters/xs/315-hawkgirl.jpg",
        "sm": "images/characters/sm/315-hawkgirl.jpg",
        "md": "images/characters/md/315-hawkgirl.jpg",
        "lg": "images/characters/lg/315-hawkgirl.jpg"
      }
    },
    {
      "id": 320,
      "name": "Heat Wave",
      "slug": "320-heat-wave",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 17,
        "durability": 45,
        "power": 27,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "179 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Mick Rory",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rory Calhoun"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash #140 (November, 1963)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional Criminal",
        "base": "Central City"
      },
      "connections": {
        "groupAffiliation": "Rogues; formerly Secret Society of Super-Villains, Legion of Doom",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/320-heat-wave.jpg",
        "sm": "images/characters/sm/320-heat-wave.jpg",
        "md": "images/characters/md/320-heat-wave.jpg",
        "lg": "images/characters/lg/320-heat-wave.jpg"
      }
    },
    {
      "id": 321,
      "name": "Hela",
      "slug": "321-hela",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 46,
        "durability": 100,
        "power": 100,
        "combat": 45
      },
      "appearance": {
        "gender": "Female",
        "race": "Asgardian",
        "height": [
          "7'0",
          "213 cm"
        ],
        "weight": [
          "500 lb",
          "225 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Goddess of Death"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Journey into Mystery #102",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Asgardian Goddess of Death, former Ruler of Hel and Niffleheim",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Loki (father), Thor (Uncle)"
      },
      "images": {
        "xs": "images/characters/xs/321-hela.jpg",
        "sm": "images/characters/sm/321-hela.jpg",
        "md": "images/characters/md/321-hela.jpg",
        "lg": "images/characters/lg/321-hela.jpg"
      }
    },
    {
      "id": 322,
      "name": "Hellboy",
      "slug": "322-hellboy",
      "powerstats": {
        "intelligence": 63,
        "strength": 53,
        "speed": 21,
        "durability": 95,
        "power": 73,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "8'6",
          "259 cm"
        ],
        "weight": [
          "350 lb",
          "158 kg"
        ],
        "eyeColor": "Gold",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Anung Un Rama",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "World Destroyer",
          "The Great Beast"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Dime Press #4 (May 1, 1993)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Abe Sapien, Liz Sherman, Roger the Homunculus, Savage Dragon, the Goon, Batman, Starman, Ghost, Painkiller Jane, Lobster Johnson, Torch of Liberty",
        "relatives": "Catherine Tanner-Tremaine (mother, deceased), two unnamed maternal half-siblings (deceased), Professor Trevor Bruttenholm (foster father)"
      },
      "images": {
        "xs": "images/characters/xs/322-hellboy.jpg",
        "sm": "images/characters/sm/322-hellboy.jpg",
        "md": "images/characters/md/322-hellboy.jpg",
        "lg": "images/characters/lg/322-hellboy.jpg"
      }
    },
    {
      "id": 323,
      "name": "Hellcat",
      "slug": "323-hellcat",
      "powerstats": {
        "intelligence": 63,
        "strength": 11,
        "speed": 33,
        "durability": 45,
        "power": 46,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Patricia Walker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Patsy Walker",
          "Patricia Hellstrom",
          "The Cat"
        ],
        "placeOfBirth": "Centerville, CA USA",
        "firstAppearance": "Avengers #144 (February, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Housemaker, model, adventurer, supernatural investigator",
        "base": "San Francisco, CA USA"
      },
      "connections": {
        "groupAffiliation": "Formerly Alaskan-based Initiative agent, Lady Liberators, Avengers, Defenders, Legion of the Unliving",
        "relatives": "Joshua Walker (father), Dorothy Walker (mother, deceased), Sophia (maternal aunt), Bea (step-mother), Mickey Walker (brother), Robert \"Buzz\" Baxter (aka Mad-Dog, ex-husband), Daimon Hellstrom (aka Hellstorm, ex-husband), Percy Walker"
      },
      "images": {
        "xs": "images/characters/xs/323-hellcat.jpg",
        "sm": "images/characters/sm/323-hellcat.jpg",
        "md": "images/characters/md/323-hellcat.jpg",
        "lg": "images/characters/lg/323-hellcat.jpg"
      }
    },
    {
      "id": 325,
      "name": "Hercules",
      "slug": "325-hercules",
      "powerstats": {
        "intelligence": 63,
        "strength": 100,
        "speed": 46,
        "durability": 85,
        "power": 89,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Demi-God",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "325 lb",
          "146 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Heracles",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Spider-Herc",
          "The Lion of Olympus",
          "The Defender of Olympus",
          "The Scion of Olympus",
          "Prince of Power",
          "Alcaeus",
          "Herakles",
          "Herc",
          "Harry Cleese",
          "Victor Tegler",
          "Agent 74"
        ],
        "placeOfBirth": "Thebes, Greece",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Olympian God of Strength and Labor, later Olympian God of Heroes",
        "base": "Brooklyn; formerly Infinite Avengers Mansion, Mount Olympus, Avengers Mansion, Hydrobase"
      },
      "connections": {
        "groupAffiliation": "Formerly God Squad, Council of Godheads, Olympia Corp., Mighty Avengers, Renegades, Secret Avengers, Avengers, Champions of Los Angeles, Defenders, Heroes for Hire, Damage Control, Olympian Gods, Argonauts, Defenders for a Day",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/325-hercules.jpg",
        "sm": "images/characters/sm/325-hercules.jpg",
        "md": "images/characters/md/325-hercules.jpg",
        "lg": "images/characters/lg/325-hercules.jpg"
      }
    },
    {
      "id": 327,
      "name": "Hit-Girl",
      "slug": "327-hit-girl",
      "powerstats": {
        "intelligence": 56,
        "strength": 7,
        "speed": 29,
        "durability": 20,
        "power": 27,
        "combat": 65
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Mindy McCready",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Hit Girl",
          "Hitgirl"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Icon Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/327-hit-girl.jpg",
        "sm": "images/characters/sm/327-hit-girl.jpg",
        "md": "images/characters/md/327-hit-girl.jpg",
        "lg": "images/characters/lg/327-hit-girl.jpg"
      }
    },
    {
      "id": 330,
      "name": "Hope Summers",
      "slug": "330-hope-summers",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 12,
        "durability": 32,
        "power": 93,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "106 lb",
          "48 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Hope Summers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mutant Messiah",
          "Messiah Child",
          "Hub",
          "Throat Slicer",
          "Little Girl",
          "Little Momma"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men Vol 2 #205 (2008)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly Cable",
        "relatives": "Louise Spalding (mother, deceased), unknown biological father, Mrs. Spalding (maternal grandmother), Cable (adoptive father, deceased), Hope (adoptive mother, deceased), Cyclops (adoptive grandfather), Red Queen / Phoenix (adoptive grandmothers, deceased?), X-Man (adoptive uncle), Marvel Girl (adoptive aunt), Havok (adoptive granduncle), Vulcan (adoptive granduncle, deceased), Deathbird (adoptive grandaunt)"
      },
      "images": {
        "xs": "images/characters/xs/330-hope-summers.jpg",
        "sm": "images/characters/sm/330-hope-summers.jpg",
        "md": "images/characters/md/330-hope-summers.jpg",
        "lg": "images/characters/lg/330-hope-summers.jpg"
      }
    },
    {
      "id": 332,
      "name": "Hulk",
      "slug": "332-hulk",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 63,
        "durability": 100,
        "power": 98,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "8'0",
          "244 cm"
        ],
        "weight": [
          "1400 lb",
          "630 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Bruce Banner",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Annihilator",
          "Captain Universe",
          "Joe Fixit",
          "Mr. Fixit",
          "Mechano",
          "Professor",
          "Jade Jaws",
          "Golly Green Giant"
        ],
        "placeOfBirth": "Dayton, Ohio",
        "firstAppearance": "Incredible Hulk #1 (May, 1962)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Nuclear physicist, Agent of S.H.I.E.L.D.",
        "base": "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
      },
      "connections": {
        "groupAffiliation": "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
        "relatives": "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
      },
      "images": {
        "xs": "images/characters/xs/332-hulk.jpg",
        "sm": "images/characters/sm/332-hulk.jpg",
        "md": "images/characters/md/332-hulk.jpg",
        "lg": "images/characters/lg/332-hulk.jpg"
      }
    },
    {
      "id": 333,
      "name": "Human Torch",
      "slug": "333-human-torch",
      "powerstats": {
        "intelligence": 63,
        "strength": 11,
        "speed": 63,
        "durability": 70,
        "power": 87,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Johnny Storm",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Matchstick Johnny",
          "Doug Brown"
        ],
        "placeOfBirth": "Glenville, Long Island, New York",
        "firstAppearance": "Fantastic Four #1 (1961)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Pier Four, New York City"
      },
      "connections": {
        "groupAffiliation": "Fantastic Four",
        "relatives": "Susan Richards - Invisible Woman (sister), Franklin Richards (nephew), Reed Richards - Mister Fantastic (brother-in-law) Lyja (ex-wife)"
      },
      "images": {
        "xs": "images/characters/xs/333-human-torch.jpg",
        "sm": "images/characters/sm/333-human-torch.jpg",
        "md": "images/characters/md/333-human-torch.jpg",
        "lg": "images/characters/lg/333-human-torch.jpg"
      }
    },
    {
      "id": 334,
      "name": "Huntress",
      "slug": "334-huntress",
      "powerstats": {
        "intelligence": 69,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 34,
        "combat": 95
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Helena Rosa Bertinelli",
        "alterEgos": "Batgirl III",
        "aliases": [
          "Batgirl",
          "Sicilian",
          "Mafia Princess"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Huntress #1 (April 1989)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante; High school English teacher",
        "base": "Mobile; primarily Gotham City and Metropolis"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Birds of Prey, formerly Checkmate, Justice League of America, Outsiders",
        "relatives": "Giuseppe Bertinelli (great-grandfather; deceased), Alfredo Bertinelli (grandfather; deceased), Franco Bertinelli (father; deceased), Maria Panessa Bertinelli (mother; deceased), Santo Cassamento (biological father; deceased), Pino Bertinelli (brother; deceased), Freddy Caldone (cousin; deceased), Tomaso Panessa (uncle), Graziella Panessa (aunt), Monica Simonetta Panessa (cousin), Claudio Panessa (cousin; deceased)"
      },
      "images": {
        "xs": "images/characters/xs/334-huntress.jpg",
        "sm": "images/characters/sm/334-huntress.jpg",
        "md": "images/characters/md/334-huntress.jpg",
        "lg": "images/characters/lg/334-huntress.jpg"
      }
    },
    {
      "id": 335,
      "name": "Husk",
      "slug": "335-husk",
      "powerstats": {
        "intelligence": 63,
        "strength": 63,
        "speed": 35,
        "durability": 78,
        "power": 48,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "128 lb",
          "58 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Paige Elisabeth Guthrie",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Hayseed"
        ],
        "placeOfBirth": "Cumberland, Kentucky",
        "firstAppearance": "Rom Annual #3 (November, 1984)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; formerly student, activist",
        "base": "Base of operations unknown; formerly Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "X-Men, X-Corp, Generation X",
        "relatives": "Thomas Zebulon Guthrie (father,deceased),Lucinda Guthrie (mother),Samuel Zachery Guthrie (brother,Cannonball),Joshua 'Jay' Guthrie (brother,Icarus),Joella Guthrie (sister),Elizabeth Guthrie (sister),Melody Guthrie (sister),Jeb Guthrie (brother),Lewis Guth"
      },
      "images": {
        "xs": "images/characters/xs/335-husk.jpg",
        "sm": "images/characters/sm/335-husk.jpg",
        "md": "images/characters/md/335-husk.jpg",
        "lg": "images/characters/lg/335-husk.jpg"
      }
    },
    {
      "id": 336,
      "name": "Hybrid",
      "slug": "336-hybrid",
      "powerstats": {
        "intelligence": 63,
        "strength": 63,
        "speed": 58,
        "durability": 75,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "172 lb",
          "77 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Scott Washington",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Guardsman Number Six",
          "Terror of Brooklyn",
          "Riot ,Phage ",
          "Lasher",
          "Agony"
        ],
        "placeOfBirth": "Bedford-Stuyvesant, Brooklyn, New York City",
        "firstAppearance": "Venom Along Came A Spider #2 (as Hybrid)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Bedford-Stuyvesant, Brooklyn, New York City, New York"
      },
      "connections": {
        "groupAffiliation": "New Warriors, Guardsmen, NYPD",
        "relatives": "Unnamed mother, Derek Washington (brother, deceased), Hybrid (\"former symbiote\", defused)"
      },
      "images": {
        "xs": "images/characters/xs/336-hybrid.jpg",
        "sm": "images/characters/sm/336-hybrid.jpg",
        "md": "images/characters/md/336-hybrid.jpg",
        "lg": "images/characters/lg/336-hybrid.jpg"
      }
    },
    {
      "id": 337,
      "name": "Hydro-Man",
      "slug": "337-hydro-man",
      "powerstats": {
        "intelligence": 38,
        "strength": 13,
        "speed": 25,
        "durability": 80,
        "power": 66,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "265 lb",
          "119 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Morris Bench",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Morrie"
        ],
        "placeOfBirth": "Bronx, New York",
        "firstAppearance": "Amazing Spider-Man #212 (January, 1981)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional Criminal; former crewman of cargo ship",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Member of the Masters of Evil; formerly Sinister Syndicate; Frightful Four, Sinister Six, Sinister Twelve",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/337-hydro-man.jpg",
        "sm": "images/characters/sm/337-hydro-man.jpg",
        "md": "images/characters/md/337-hydro-man.jpg",
        "lg": "images/characters/lg/337-hydro-man.jpg"
      }
    },
    {
      "id": 338,
      "name": "Hyperion",
      "slug": "338-hyperion",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 100,
        "durability": 95,
        "power": 87,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Eternal",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "460 lb",
          "207 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Mark Milton",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mark Milton",
          "Zhib-Ran",
          "Mr. Kant",
          "Marcus Milton"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Avengers #85",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; (Formerly) Cartoonist, government agent",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Squadron Supreme, (Formerly) Star Masters, ally of Exiles",
        "relatives": "Mr. and Mrs. Hamilton (foster parents)"
      },
      "images": {
        "xs": "images/characters/xs/338-hyperion.jpg",
        "sm": "images/characters/sm/338-hyperion.jpg",
        "md": "images/characters/md/338-hyperion.jpg",
        "lg": "images/characters/lg/338-hyperion.jpg"
      }
    },
    {
      "id": 339,
      "name": "Iceman",
      "slug": "339-iceman",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 53,
        "durability": 100,
        "power": 100,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "145 lb",
          "65 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Bobby Drake",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bobby Drake",
          "Mister Friese",
          "Drake Roberts",
          "Rampage",
          "Frozen One",
          "Iceface"
        ],
        "placeOfBirth": "Fort Washington, Long Island, New York",
        "firstAppearance": "X-Men #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, formerly teacher, accountant, student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men (Jean Grey School member, founding member); formerly Murder Circus (brainwashed), Excelsiors (squad leader), The Twelve, X-Factor/X-Terminators (founding member), Chosen (Dualers), Secret Defenders, Defenders, Champions (founder and founding member)",
        "relatives": "William Robert Drake (father), Madeline Beatrice Bass Drake (mother), Mary (cousin), Joel (cousin), Anne (aunt)"
      },
      "images": {
        "xs": "images/characters/xs/339-iceman.jpg",
        "sm": "images/characters/sm/339-iceman.jpg",
        "md": "images/characters/md/339-iceman.jpg",
        "lg": "images/characters/lg/339-iceman.jpg"
      }
    },
    {
      "id": 340,
      "name": "Impulse",
      "slug": "340-impulse",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 100,
        "durability": 60,
        "power": 74,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "145 lb",
          "65 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Bartholomew Allen II",
        "alterEgos": "Flash IV, Kid Flash II",
        "aliases": [
          "Flash IV",
          "Kid Flash II"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash Vol 2 #92 (July, 1994)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Student",
        "base": "San Francisco, formerly Los Angeles, Keystone City, Manchester, Alabama"
      },
      "connections": {
        "groupAffiliation": "Flash Family, Teen Titans, formerly Legion of Super-Heroes, Young Justice",
        "relatives": "Don Allen (father), Meloni Thawne (mother), Barry Allen (grandfather), Iris West-Allen (grandmother), President Thawne (grandfather), Captain Boomerang (Owen Mercer) (half-brother), Allen Family"
      },
      "images": {
        "xs": "images/characters/xs/340-impulse.jpg",
        "sm": "images/characters/sm/340-impulse.jpg",
        "md": "images/characters/md/340-impulse.jpg",
        "lg": "images/characters/lg/340-impulse.jpg"
      }
    },
    {
      "id": 342,
      "name": "Indigo",
      "slug": "342-indigo",
      "powerstats": {
        "intelligence": 75,
        "strength": 63,
        "speed": 50,
        "durability": 50,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Female",
        "race": "Alien",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "Purple"
      },
      "biography": {
        "fullName": "Iroque",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Indigo-1"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Green Lantern Vol 4 #25 (January, 2008)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Leader of the Indigo Tribe",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Indigo Tribe; formerly the New Guardians",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/342-indigo.jpg",
        "sm": "images/characters/sm/342-indigo.jpg",
        "md": "images/characters/md/342-indigo.jpg",
        "lg": "images/characters/lg/342-indigo.jpg"
      }
    },
    {
      "id": 343,
      "name": "Ink",
      "slug": "343-ink",
      "powerstats": {
        "intelligence": 38,
        "strength": 28,
        "speed": 17,
        "durability": 40,
        "power": 73,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Eric Gitter",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Young X-Men #1 (May, 2008)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men, Young X-Men",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/343-ink.jpg",
        "sm": "images/characters/sm/343-ink.jpg",
        "md": "images/characters/md/343-ink.jpg",
        "lg": "images/characters/lg/343-ink.jpg"
      }
    },
    {
      "id": 344,
      "name": "Invisible Woman",
      "slug": "344-invisible-woman",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 27,
        "durability": 85,
        "power": 93,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": "Human / Radiation",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Susan Storm Richards",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Invisible Girl"
        ],
        "placeOfBirth": "Glenville, Long Island, New York",
        "firstAppearance": "FANTASTIC FOUR #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Member of the Fantastic Four, financial manager for Fantastic Four Inc, occasional model and actress",
        "base": "Pier Four, New York City"
      },
      "connections": {
        "groupAffiliation": "Fantastic Four, formerly; Secret Avengers, Avengers, Brides of Set, Pawns of Death",
        "relatives": "Reed Richards (Mister Fantastic, husband), Franklin Richards (son), Valeria Richards (daughter), Johnny Storm (Human Torch, brother), Franklin Storm (father, deceased), Mary Storm (mother, deceased), Marygay Jewel Dinkins (aunt), \"Bones\" (cousin), Evelyn Richards (mother-in-law, deceased), Nathaniel Richards (father-in-law), Cassandra Richards (Warlord, mother-in-law, deceased), unnamed child of Nathaniel Richards (brother-in-law), Tara Richards (Huntara, sister-in-law), Kristoff Vernard (alleged brother-in-law), Lyja (sister-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/344-invisible-woman.jpg",
        "sm": "images/characters/sm/344-invisible-woman.jpg",
        "md": "images/characters/md/344-invisible-woman.jpg",
        "lg": "images/characters/lg/344-invisible-woman.jpg"
      }
    },
    {
      "id": 345,
      "name": "Iron Fist",
      "slug": "345-iron-fist",
      "powerstats": {
        "intelligence": 75,
        "strength": 55,
        "speed": 33,
        "durability": 50,
        "power": 95,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Danny Rand",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Daredevil",
          "Daniel Thomas Rand",
          "the Living Weapon",
          "Young Dragon",
          "Danny Rand"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Marvel Premiere #15 (May 1974)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; formerly co-owner of Rand-Meachum, Inc., bodyguard, private investigator, research assistant, warrior",
        "base": "New York"
      },
      "connections": {
        "groupAffiliation": "New Avengers, Heroes for Hire, Inc., Secret Defenders, Defenders, Misty Knight, Luke Cage",
        "relatives": "Wendell Rand-K'ai (father, deceased), Heather Duncan Rand (mother, deceased), Yu-Ti (adopted uncle), Miranda Rand-K'ai (half-sister), Lord Tuan (adopted paternal grandfather, deceased), Lady Ming (adopted paternal grandmother, deceased), Thomas Duncan (maternal grandfather)"
      },
      "images": {
        "xs": "images/characters/xs/345-iron-fist.jpg",
        "sm": "images/characters/sm/345-iron-fist.jpg",
        "md": "images/characters/md/345-iron-fist.jpg",
        "lg": "images/characters/lg/345-iron-fist.jpg"
      }
    },
    {
      "id": 346,
      "name": "Iron Man",
      "slug": "346-iron-man",
      "powerstats": {
        "intelligence": 100,
        "strength": 85,
        "speed": 58,
        "durability": 85,
        "power": 100,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "425 lb",
          "191 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tony Stark",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Iron Knight",
          "Hogan Potts",
          "Spare Parts Man",
          "Cobalt Man II",
          "Crimson Dynamo",
          "Ironman"
        ],
        "placeOfBirth": "Long Island, New York",
        "firstAppearance": "Tales of Suspence #39 (March, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
        "base": "Seattle, Washington"
      },
      "connections": {
        "groupAffiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
        "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/346-iron-man.jpg",
        "sm": "images/characters/sm/346-iron-man.jpg",
        "md": "images/characters/md/346-iron-man.jpg",
        "lg": "images/characters/lg/346-iron-man.jpg"
      }
    },
    {
      "id": 347,
      "name": "Iron Monger",
      "slug": "347-iron-monger",
      "powerstats": {
        "intelligence": 88,
        "strength": 63,
        "speed": 25,
        "durability": 90,
        "power": 57,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "4230 lb",
          "2 tons"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Obadiah Stane",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "CEO Stane International",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Stane International",
        "relatives": "Zebediah (father, deceased), unnamed mother (deceased), Ezekiel Stane (son)"
      },
      "images": {
        "xs": "images/characters/xs/347-iron-monger.jpg",
        "sm": "images/characters/sm/347-iron-monger.jpg",
        "md": "images/characters/md/347-iron-monger.jpg",
        "lg": "images/characters/lg/347-iron-monger.jpg"
      }
    },
    {
      "id": 348,
      "name": "Isis",
      "slug": "348-isis",
      "powerstats": {
        "intelligence": 75,
        "strength": 48,
        "speed": 75,
        "durability": 46,
        "power": 50,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Adrianna Tomaz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Adrianna) 52 Week Three; (as Isis) 52 Week Twelve",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, formerly First Lady of Kahndaq, former slave",
        "base": "Shiruta, Kahndaq"
      },
      "connections": {
        "groupAffiliation": "Black Marvel Family",
        "relatives": "Amon Tomaz (brother, deceased), Black Adam (husband)"
      },
      "images": {
        "xs": "images/characters/xs/348-isis.jpg",
        "sm": "images/characters/sm/348-isis.jpg",
        "md": "images/characters/md/348-isis.jpg",
        "lg": "images/characters/lg/348-isis.jpg"
      }
    },
    {
      "id": 350,
      "name": "Jack of Hearts",
      "slug": "350-jack-of-hearts",
      "powerstats": {
        "intelligence": 63,
        "strength": 55,
        "speed": 100,
        "durability": 30,
        "power": 77,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'1",
          "155 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue / White",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jonathan Hart",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "New Haven, Connecticut",
        "firstAppearance": "Deadly Hands of Kung Fu #22 (March, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Avengers Mansion"
      },
      "connections": {
        "groupAffiliation": "Avengers, Defenders for a Day",
        "relatives": "Philip (father, deceased), Marie (mother)"
      },
      "images": {
        "xs": "images/characters/xs/350-jack-of-hearts.jpg",
        "sm": "images/characters/sm/350-jack-of-hearts.jpg",
        "md": "images/characters/md/350-jack-of-hearts.jpg",
        "lg": "images/characters/lg/350-jack-of-hearts.jpg"
      }
    },
    {
      "id": 351,
      "name": "Jack-Jack",
      "slug": "351-jack-jack",
      "powerstats": {
        "intelligence": 6,
        "strength": 34,
        "speed": 67,
        "durability": 80,
        "power": 100,
        "combat": 6
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "2'4",
          "71 cm"
        ],
        "weight": [
          "30 lb",
          "14 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jack-Jack Parr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Incredibles (Movie, 2004)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Incredible Family (genetic member), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend)",
        "relatives": "Robert Parr(Mr Incredible, father), Helen Parr (Elastigirl, mother), Violet Parr(Violet, sister), Dashiell Parr (Dash, brother)"
      },
      "images": {
        "xs": "images/characters/xs/351-jack-jack.jpg",
        "sm": "images/characters/sm/351-jack-jack.jpg",
        "md": "images/characters/md/351-jack-jack.jpg",
        "lg": "images/characters/lg/351-jack-jack.jpg"
      }
    },
    {
      "id": 356,
      "name": "Jean Grey",
      "slug": "356-jean-grey",
      "powerstats": {
        "intelligence": 94,
        "strength": 80,
        "speed": 21,
        "durability": 20,
        "power": 92,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Jean Grey",
        "alterEgos": "Phoenix, White Phoenix of The Crown",
        "aliases": [
          "Redd Dayspring",
          "Marvel Girl"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Xavier Institute of Higher Learning, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men (founding member); Clan Rebellion, Muir Island X-Men; X-Factor/X-Terminators (founding member); Brides of Set",
        "relatives": "Rachel Summers (daughter from an alternate universe), X-Man (son from an alternate universe), Cyclops (ex-husband), Havok (former brother-in-law), Corsair (former father-in-law), Madelyne Pryor (clone), Cable (adoptive/biological son), Stryfe (cloned biological son), Genesis (grandson)"
      },
      "images": {
        "xs": "images/characters/xs/356-jean-grey.jpg",
        "sm": "images/characters/sm/356-jean-grey.jpg",
        "md": "images/characters/md/356-jean-grey.jpg",
        "lg": "images/characters/lg/356-jean-grey.jpg"
      }
    },
    {
      "id": 358,
      "name": "Jennifer Kale",
      "slug": "358-jennifer-kale",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 35,
        "durability": 42,
        "power": 74,
        "combat": 72
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "122 lb",
          "55 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Jennifer Kale",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Wendy the Good Little Witch"
        ],
        "placeOfBirth": "Citrusville, Florida",
        "firstAppearance": "(Adventures into) Fear#11 (1972)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Sorceress, student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Witches, Legion of the Night",
        "relatives": "Andrew Jackson Kale (brother, deceased), Joshua Kale (grandfather, deceased), Naomi Kale (aunt), Johnny Blaze ( Ghost Rider ), Barbara and Daniel Ketch (cousins); Illyana Kale, Noble and pastor Kale, Magdalena (ancestors)"
      },
      "images": {
        "xs": "images/characters/xs/358-jennifer-kale.jpg",
        "sm": "images/characters/sm/358-jennifer-kale.jpg",
        "md": "images/characters/md/358-jennifer-kale.jpg",
        "lg": "images/characters/lg/358-jennifer-kale.jpg"
      }
    },
    {
      "id": 360,
      "name": "Jessica Cruz",
      "slug": "360-jessica-cruz",
      "powerstats": {
        "intelligence": 56,
        "strength": 90,
        "speed": 46,
        "durability": 50,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jessica Cruz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Lantern",
          "Power Ring"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Green Lantern Vol 5 #20 (July, 2013)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Sara Cruz (sister)"
      },
      "images": {
        "xs": "images/characters/xs/360-jessica-cruz.jpg",
        "sm": "images/characters/sm/360-jessica-cruz.jpg",
        "md": "images/characters/md/360-jessica-cruz.jpg",
        "lg": "images/characters/lg/360-jessica-cruz.jpg"
      }
    },
    {
      "id": 361,
      "name": "Jessica Jones",
      "slug": "361-jessica-jones",
      "powerstats": {
        "intelligence": 56,
        "strength": 44,
        "speed": 50,
        "durability": 70,
        "power": 18,
        "combat": 55
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "124 lb",
          "56 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jessica Campbell Jones Cage",
        "alterEgos": "Power Woman",
        "aliases": [
          "Knightress",
          "Madeline",
          "Jewel",
          "Power Woman"
        ],
        "placeOfBirth": "Forrest Hills, New York City",
        "firstAppearance": "Amazing Spider-Man #4 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Special Consultant to \"The Pulse\", a Daily Bugle supplement; formerly private investigator, adventurer, short-time vigilante",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly New Avengers, Daily Bugle, Alias Investigations",
        "relatives": "unnamed mother (deceased); Dave Cambell (father, deceased); Phillip Cambell (brother, deceased); unnamed adoptive mother; unnamed adoptive father; unnamed adoptive sister; Jenny (adoptive aunt); Luke Cage (husband); Danielle Cage (daughter);"
      },
      "images": {
        "xs": "images/characters/xs/361-jessica-jones.jpg",
        "sm": "images/characters/sm/361-jessica-jones.jpg",
        "md": "images/characters/md/361-jessica-jones.jpg",
        "lg": "images/characters/lg/361-jessica-jones.jpg"
      }
    },
    {
      "id": 367,
      "name": "John Constantine",
      "slug": "367-john-constantine",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 8,
        "durability": 40,
        "power": 54,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "John Constantine",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Hellblazer"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Swamp Thing Vol 2 #37 (June, 1985)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Justice League Dark, Justice League",
        "relatives": "Thomas Constantine (father, deceased), Cheryl Constantine (sister, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/367-john-constantine.jpg",
        "sm": "images/characters/sm/367-john-constantine.jpg",
        "md": "images/characters/md/367-john-constantine.jpg",
        "lg": "images/characters/lg/367-john-constantine.jpg"
      }
    },
    {
      "id": 369,
      "name": "John Wraith",
      "slug": "369-john-wraith",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 35,
        "durability": 28,
        "power": 87,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "John Wraith",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Wraith-Man",
          "Kestrel",
          "Expediter",
          "Guardian",
          "Vindicator"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Wolverine Vol 2 #60 (September, 1992)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Spy, Government Operative, Mercenary, Soldier",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Weapon X Program, Team X, C.I.A.",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 370,
      "name": "Joker",
      "slug": "370-joker",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 12,
        "durability": 60,
        "power": 43,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "192 lb",
          "86 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Jack Napier",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Red Hood I",
          "Clown Prince of Crime",
          "Harlequin of Hate",
          "Jack Napier",
          "Joe Kerr",
          "Mr. J"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #1 (Spring 1940)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Arkham Asylum, Gotham City; Ha-Hacienda"
      },
      "connections": {
        "groupAffiliation": "Black Glove, Injustice Gang, Injustice League, Joker League of Anarchy",
        "relatives": "Jeannie (wife, deceased); Unborn son (deceased); Melvin Reipan (cousin, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/370-joker.jpg",
        "sm": "images/characters/sm/370-joker.jpg",
        "md": "images/characters/md/370-joker.jpg",
        "lg": "images/characters/lg/370-joker.jpg"
      }
    },
    {
      "id": 371,
      "name": "Jolt",
      "slug": "371-jolt",
      "powerstats": {
        "intelligence": 63,
        "strength": 12,
        "speed": 27,
        "durability": 32,
        "power": 31,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "109 lb",
          "49 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Helen Takahama",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Holly Tsuruta",
          "Hallie Shimosato"
        ],
        "placeOfBirth": "Ojai, California",
        "firstAppearance": "Thunderbolts #1 (1997)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Young Allies; formerly Redeemers, Thunderbolts",
        "relatives": "Robert (father, deceased), Jane (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/371-jolt.jpg",
        "sm": "images/characters/sm/371-jolt.jpg",
        "md": "images/characters/md/371-jolt.jpg",
        "lg": "images/characters/lg/371-jolt.jpg"
      }
    },
    {
      "id": 372,
      "name": "Jubilee",
      "slug": "372-jubilee",
      "powerstats": {
        "intelligence": 56,
        "strength": 8,
        "speed": 22,
        "durability": 20,
        "power": 66,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jubilation Lee",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jubes"
        ],
        "placeOfBirth": "Beverly Hills, California",
        "firstAppearance": "Uncanny X-Men #244 (May, 1989)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student, Adventurer",
        "base": "Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "Currently Generation X, formerly X-Men",
        "relatives": "Dr. and Mrs. Lee (parents, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/372-jubilee.jpg",
        "sm": "images/characters/sm/372-jubilee.jpg",
        "md": "images/characters/md/372-jubilee.jpg",
        "lg": "images/characters/lg/372-jubilee.jpg"
      }
    },
    {
      "id": 374,
      "name": "Juggernaut",
      "slug": "374-juggernaut",
      "powerstats": {
        "intelligence": 44,
        "strength": 100,
        "speed": 42,
        "durability": 100,
        "power": 85,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "9'5",
          "287 cm"
        ],
        "weight": [
          "1900 lb",
          "855 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Cain Marko",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kuurth",
          "Captain Universe"
        ],
        "placeOfBirth": "Berkeley, California",
        "firstAppearance": "X-Men #12 (July, 1965)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Adventurer formerly Professional criminal, mercenary, soldier",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Worthy, Thunderbolts, X-Men, Excalibur, Black Tom Cassidy (partner), Exemplars, Brotherhood of Evil Mutants, New World Order, Exiles, U.S. Army",
        "relatives": "Kurt Marko (father, deceased), Marjorie Marko (mother, deceased), Sharon Xavier (step-mother, deceased), Charles Xavier (Professor X, step-brother)"
      },
      "images": {
        "xs": "images/characters/xs/374-juggernaut.jpg",
        "sm": "images/characters/sm/374-juggernaut.jpg",
        "md": "images/characters/md/374-juggernaut.jpg",
        "lg": "images/characters/lg/374-juggernaut.jpg"
      }
    },
    {
      "id": 375,
      "name": "Junkpile",
      "slug": "375-junkpile",
      "powerstats": {
        "intelligence": 50,
        "strength": 38,
        "speed": 17,
        "durability": 90,
        "power": 81,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men 2099 #1 (October, 1993)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Mercenary; Former member of S.H.I.E.L.D.",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Former member of X-Men, former member of S.H.I.E.L.D.",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/375-junkpile.jpg",
        "sm": "images/characters/sm/375-junkpile.jpg",
        "md": "images/characters/md/375-junkpile.jpg",
        "lg": "images/characters/lg/375-junkpile.jpg"
      }
    },
    {
      "id": 376,
      "name": "Justice",
      "slug": "376-justice",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 33,
        "durability": 70,
        "power": 55,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Hazel",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Vance Astrovik",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Marvel Boy",
          "Manglin' John Mahoney",
          "Astounding Astrovik",
          "Superhuman Penitentiary Prisoner 344678",
          "\"Super Tights\""
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Giant-Size Defenders #5 (July, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Mobile, formerly New Warriors and Avengers Headquarters, Camp Hammond"
      },
      "connections": {
        "groupAffiliation": "New Warriors; formerly Avengers Academy, Initiative, partner of Firestar, Avengers, Triune Understanding, Unlimited Class Wrestling Federation, Taskmaster's Circus, Secret Avengers (Civil War)",
        "relatives": "Jerzy Astroyevicht (aka Jerry Astrovik; paternal grandfather); Katerina Astroyevicht (aka Katerina Astrovik; paternal grandmother); Arnold Astrovik (father, deceased); Norma Astrovik (mother);"
      },
      "images": {
        "xs": "images/characters/xs/376-justice.jpg",
        "sm": "images/characters/sm/376-justice.jpg",
        "md": "images/characters/md/376-justice.jpg",
        "lg": "images/characters/lg/376-justice.jpg"
      }
    },
    {
      "id": 379,
      "name": "Kang",
      "slug": "379-kang",
      "powerstats": {
        "intelligence": 100,
        "strength": 48,
        "speed": 58,
        "durability": 70,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Nathaniel Richards",
        "alterEgos": "Iron Lad",
        "aliases": [
          "Blue Man",
          "Victor Timely",
          "Blue Totem",
          "Scarlet Centurion",
          "Rama-Tut",
          "King of Kings",
          "Master of Men",
          "Lord of the Seven Suns"
        ],
        "placeOfBirth": "Other Earth, 31st century",
        "firstAppearance": "(As Rama-Tut) Fantastic Four #19 (1963); (as Kang) Avengers #8 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly the Council of Kangs, Cross-Time Kangs",
        "relatives": "Cassandra Richards, their unnamed son, and matriarch of the Eyriennes; Tara Richards, Reed Richards ( Mister Fantastic ), Franklin Richards, Valeria Richards (all ancestors); various Eyriennes (common ancestry); Victor Von Doom (Doctor Doom, alleged ancestor); Ramades (son), Marcus Kang I-XXIII (sons, deceased); Immortus, Iron Lad, and numerous other alternate dimensional counterparts and their offspring"
      },
      "images": {
        "xs": "images/characters/xs/379-kang.jpg",
        "sm": "images/characters/sm/379-kang.jpg",
        "md": "images/characters/md/379-kang.jpg",
        "lg": "images/characters/lg/379-kang.jpg"
      }
    },
    {
      "id": 382,
      "name": "Kevin 11",
      "slug": "382-kevin-11",
      "powerstats": {
        "intelligence": 25,
        "strength": 7,
        "speed": 12,
        "durability": 14,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Kevin Ethan Levin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kevin 11,000",
          "Curtis",
          "Osmosian",
          "Kev",
          "Kevin Ethan",
          "Levin",
          "Ultimate Kevin",
          "Doofus",
          "An Empty Shell",
          "Kevin E. Levin"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Ben 10 S01",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Mrs. Levin (mother), Devlin Levin (alternate future son), Ben Tennyson (Ben 10, best friend), Harvey Hackett (Stepfather), Gwen Tennyson(girlfriend)"
      },
      "images": {
        "xs": "images/characters/xs/382-kevin-11.jpg",
        "sm": "images/characters/sm/382-kevin-11.jpg",
        "md": "images/characters/md/382-kevin-11.jpg",
        "lg": "images/characters/lg/382-kevin-11.jpg"
      }
    },
    {
      "id": 383,
      "name": "Kick-Ass",
      "slug": "383-kick-ass",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 23,
        "durability": 35,
        "power": 22,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Dave Lizewski",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kickass"
        ],
        "placeOfBirth": "New York City",
        "firstAppearance": "Kick Ass #1",
        "publisher": "Icon Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Mother (unnamed, deceased), Father (unnamed)"
      },
      "images": {
        "xs": "images/characters/xs/383-kick-ass.jpg",
        "sm": "images/characters/sm/383-kick-ass.jpg",
        "md": "images/characters/md/383-kick-ass.jpg",
        "lg": "images/characters/lg/383-kick-ass.jpg"
      }
    },
    {
      "id": 384,
      "name": "Kid Flash",
      "slug": "384-kid-flash",
      "powerstats": {
        "intelligence": 25,
        "strength": 4,
        "speed": 92,
        "durability": 42,
        "power": 20,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Wallace Rudolph West",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kid Lantern"
        ],
        "placeOfBirth": "Blue Valley, Nebraska",
        "firstAppearance": "Flash #110 (January, 1960)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Flash Family, Teen Titans, New Teen Titans",
        "relatives": "Rudolph and Mary West (parents), Ira West (grandfather), Iris Allen (aunt), Barry Allen (uncle), Linda Park West (wife), Jai and Iris West (twin children)"
      },
      "images": {
        "xs": "images/characters/xs/384-kid-flash.jpg",
        "sm": "images/characters/sm/384-kid-flash.jpg",
        "md": "images/characters/md/384-kid-flash.jpg",
        "lg": "images/characters/lg/384-kid-flash.jpg"
      }
    },
    {
      "id": 386,
      "name": "Killer Croc",
      "slug": "386-killer-croc",
      "powerstats": {
        "intelligence": 19,
        "strength": 53,
        "speed": 35,
        "durability": 90,
        "power": 53,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Metahuman",
        "height": [
          "8'0",
          "244 cm"
        ],
        "weight": [
          "790 lb",
          "356 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Waylon Jones",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #357 (March, 1983)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Secret Society of Super-Villains",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/386-killer-croc.jpg",
        "sm": "images/characters/sm/386-killer-croc.jpg",
        "md": "images/characters/md/386-killer-croc.jpg",
        "lg": "images/characters/lg/386-killer-croc.jpg"
      }
    },
    {
      "id": 387,
      "name": "Killer Frost",
      "slug": "387-killer-frost",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 13,
        "durability": 35,
        "power": 59,
        "combat": 30
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Caitlin Snow",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fury of Firestorm: The Nuclear Men #19",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Scientist",
        "base": "Pittsburgh"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/387-killer-frost.jpg",
        "sm": "images/characters/sm/387-killer-frost.jpg",
        "md": "images/characters/md/387-killer-frost.jpg",
        "lg": "images/characters/lg/387-killer-frost.jpg"
      }
    },
    {
      "id": 388,
      "name": "Kilowog",
      "slug": "388-kilowog",
      "powerstats": {
        "intelligence": 81,
        "strength": 90,
        "speed": 53,
        "durability": 42,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Bolovaxian",
        "height": [
          "7'8",
          "234 cm"
        ],
        "weight": [
          "720 lb",
          "324 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kilo Wog",
          "Green Lantern 674.1",
          "Dark Lantern",
          "The Green Lantern drill sergeant",
          "\"Poozer\"",
          "Lantern"
        ],
        "placeOfBirth": "Bolovax Vik",
        "firstAppearance": "Green Lantern Corps #201 (June, 1986)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Oa, formerly Earth, Bolovax Vik"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps; formerly New Guardians, Justice League International",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/388-kilowog.jpg",
        "sm": "images/characters/sm/388-kilowog.jpg",
        "md": "images/characters/md/388-kilowog.jpg",
        "lg": "images/characters/lg/388-kilowog.jpg"
      }
    },
    {
      "id": 390,
      "name": "King Shark",
      "slug": "390-king-shark",
      "powerstats": {
        "intelligence": 50,
        "strength": 88,
        "speed": 50,
        "durability": 90,
        "power": 86,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Animal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Nanaue",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superboy Vol 4 #0",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional Criminal",
        "base": "Honolulu, Hawaii"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/390-king-shark.jpg",
        "sm": "images/characters/sm/390-king-shark.jpg",
        "md": "images/characters/md/390-king-shark.jpg",
        "lg": "images/characters/lg/390-king-shark.jpg"
      }
    },
    {
      "id": 391,
      "name": "Kingpin",
      "slug": "391-kingpin",
      "powerstats": {
        "intelligence": 75,
        "strength": 18,
        "speed": 25,
        "durability": 40,
        "power": 13,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "450 lb",
          "203 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Wilson Grant Fisk",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Brain Washer",
          "Harold Howard",
          "Wilbur"
        ],
        "placeOfBirth": "New York City area",
        "firstAppearance": "Amazing Spider-Man #50 (July, 1967)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal organizer and mastermind, president and owner of legitimate businesses",
        "base": "A penthouse in New York City; formerly Fisk Tower in New York City, a mansion in Westchester County, Las Vegas."
      },
      "connections": {
        "groupAffiliation": "Leader of The Hand, leader of a coalition of East Coast non-Maggia criminal organizations; former director of Las Vegas HYDRA faction.",
        "relatives": "Anatoly Fyskov (ancestor); Vanessa Fisk (wife, deceased); Rose (Richard Fisk) (son, deceased);"
      },
      "images": {
        "xs": "images/characters/xs/391-kingpin.jpg",
        "sm": "images/characters/sm/391-kingpin.jpg",
        "md": "images/characters/md/391-kingpin.jpg",
        "lg": "images/characters/lg/391-kingpin.jpg"
      }
    },
    {
      "id": 392,
      "name": "Klaw",
      "slug": "392-klaw",
      "powerstats": {
        "intelligence": 63,
        "strength": 38,
        "speed": 33,
        "durability": 100,
        "power": 62,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "216 lb",
          "97 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Ulysses Klaw",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Vlaardingen, Netherlands",
        "firstAppearance": "Fantastic Four #53 (August, 1966)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal, former Scientist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Former member of the Masters of Evil, Fearsome Foursome, and Frightful Four; Former ally of Solarr, Molecule Man, and Doctor Doom",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/392-klaw.jpg",
        "sm": "images/characters/sm/392-klaw.jpg",
        "md": "images/characters/md/392-klaw.jpg",
        "lg": "images/characters/lg/392-klaw.jpg"
      }
    },
    {
      "id": 394,
      "name": "Kraven II",
      "slug": "394-kraven-ii",
      "powerstats": {
        "intelligence": 50,
        "strength": 34,
        "speed": 23,
        "durability": 28,
        "power": 43,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Alyosha Kravinoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Spectacular Spider-Man #243 (1997)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly the Sinister Six",
        "relatives": "Sergei Kravinoff (Kraven the Hunter, father, deceased), unidentified mother, Vladimir Kravinoff (Grim Hunter, half-brother, deceased), Nedrocci Tannengarden (half-brother, deceased), Dmitri Smerdyakov"
      },
      "images": {
        "xs": "images/characters/xs/394-kraven-ii.jpg",
        "sm": "images/characters/sm/394-kraven-ii.jpg",
        "md": "images/characters/md/394-kraven-ii.jpg",
        "lg": "images/characters/lg/394-kraven-ii.jpg"
      }
    },
    {
      "id": 395,
      "name": "Kraven the Hunter",
      "slug": "395-kraven-the-hunter",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 35,
        "durability": 42,
        "power": 25,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "235 lb",
          "106 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Sergei Kravinoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kraven the Hunter",
          "World's Greatest Hunter",
          "the Grim Hunter"
        ],
        "placeOfBirth": "Volgograd (formerly Stalingrad), Russia",
        "firstAppearance": "The Amazing Spider-Man #15 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional game hunter, mercenary",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "(formerly) The Sinister Six",
        "relatives": "Nikolai & Anna Makarova Kravinoff (parents, deceased), Dmitri Smerdyakov (Chameleon, half-brother), Vladimir Kravinoff (Grim Hunter, son, deceased), Aloysha \"Al\" Kravinoff (Kraven II, son), Ned Tannengarden (son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/395-kraven-the-hunter.jpg",
        "sm": "images/characters/sm/395-kraven-the-hunter.jpg",
        "md": "images/characters/md/395-kraven-the-hunter.jpg",
        "lg": "images/characters/lg/395-kraven-the-hunter.jpg"
      }
    },
    {
      "id": 396,
      "name": "Krypto",
      "slug": "396-krypto",
      "powerstats": {
        "intelligence": 9,
        "strength": 80,
        "speed": 100,
        "durability": 90,
        "power": 82,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
          "0'25",
          "64 cm"
        ],
        "weight": [
          "40 lb",
          "18 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Krypto the Superdog",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Adventure Comics #210 (March, 1955)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Smallville, Kansas"
      },
      "connections": {
        "groupAffiliation": "Superman",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/396-krypto.jpg",
        "sm": "images/characters/sm/396-krypto.jpg",
        "md": "images/characters/md/396-krypto.jpg",
        "lg": "images/characters/lg/396-krypto.jpg"
      }
    },
    {
      "id": 397,
      "name": "Kyle Rayner",
      "slug": "397-kyle-rayner",
      "powerstats": {
        "intelligence": 69,
        "strength": 90,
        "speed": 50,
        "durability": 60,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Kyle Rayner",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ion",
          "Kyle Vasquez",
          "Parallax",
          "Torch Bearer",
          "Honor Guard",
          "The Last Green Lantern"
        ],
        "placeOfBirth": "North Hollywood, Los Angeles, California",
        "firstAppearance": "Green Lantern Vol 3 #48",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Green Lantern, Adventurer, Artist",
        "base": "Oa,formerly New York City, Los Angeles"
      },
      "connections": {
        "groupAffiliation": "Green Lantern Corps, New Guardians, formerly Challengers From Beyond, Sinestro Corps, Justice League of America, Blue Lantern Corps, Titans",
        "relatives": "Aaron Rayner (father), Maura Rayner (mother, deceased), Zachary Rayner (uncle, deceased), Roderick \"Snowy\" Rayner (grandfather, deceased), unnamed maternal great-grandfather (deceased), Kathleen (aunt), Cary Wren (descendant)"
      },
      "images": {
        "xs": "images/characters/xs/397-kyle-rayner.jpg",
        "sm": "images/characters/sm/397-kyle-rayner.jpg",
        "md": "images/characters/md/397-kyle-rayner.jpg",
        "lg": "images/characters/lg/397-kyle-rayner.jpg"
      }
    },
    {
      "id": 400,
      "name": "Lady Deathstrike",
      "slug": "400-lady-deathstrike",
      "powerstats": {
        "intelligence": 63,
        "strength": 28,
        "speed": 42,
        "durability": 85,
        "power": 48,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Cyborg",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "128 lb",
          "58 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Yuriko Oyama",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ana Cortes"
        ],
        "placeOfBirth": "Osaka, Japan",
        "firstAppearance": "Alpha Flight Vol. 1 #33 (1985)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Ally of Reverend William Stryker, former employee of Sabretooth, formerly Reavers",
        "relatives": "Kenji Oyama (Lord Dark Wind, father, deceased), two unnamed brothers (deceased)"
      },
      "images": {
        "xs": "images/characters/xs/400-lady-deathstrike.jpg",
        "sm": "images/characters/sm/400-lady-deathstrike.jpg",
        "md": "images/characters/md/400-lady-deathstrike.jpg",
        "lg": "images/characters/lg/400-lady-deathstrike.jpg"
      }
    },
    {
      "id": 401,
      "name": "Leader",
      "slug": "401-leader",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 59,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Samuel Sterns",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Boise, Idaho",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Leader of Freehold",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/401-leader.jpg",
        "sm": "images/characters/sm/401-leader.jpg",
        "md": "images/characters/md/401-leader.jpg",
        "lg": "images/characters/lg/401-leader.jpg"
      }
    },
    {
      "id": 402,
      "name": "Leech",
      "slug": "402-leech",
      "powerstats": {
        "intelligence": 25,
        "strength": 5,
        "speed": 12,
        "durability": 14,
        "power": 62,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Uncanny X-Men #179",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Survivor, former student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "198; formerly Generation X, Daydreamers, Morlocks, X-Factor (trainee)",
        "relatives": "Annalee (foster mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/402-leech.jpg",
        "sm": "images/characters/sm/402-leech.jpg",
        "md": "images/characters/md/402-leech.jpg",
        "lg": "images/characters/lg/402-leech.jpg"
      }
    },
    {
      "id": 403,
      "name": "Legion",
      "slug": "403-legion",
      "powerstats": {
        "intelligence": 50,
        "strength": 100,
        "speed": 42,
        "durability": 30,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Green / Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "David Haller",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jack Wayne",
          "Cyndi",
          "Jemail Karami",
          "Daniel Lucas Haller",
          "Daniel Haller",
          "Rodney",
          "Ian",
          "Lucas",
          "Fanya",
          "Boris",
          "Zachary",
          "Sylvester",
          "God-Mutant"
        ],
        "placeOfBirth": "Israel",
        "firstAppearance": "New Mutants #25 (March, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Student",
        "base": "formerly Ruth Aldine's mind, Utopia, San Francisco Bay, California; Westcliffe, Colorado; \"No-Time\"; Moira MacTaggart's Mutant Research Center, Muir Island, off the coast of Scotland; Haifa; Paris, France"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men, Muir Island X-Men",
        "relatives": "Charles Graymalkin (paternal collateral ancestor), Marcia Graymalkin (paternal collateral ancestor), Jonas Graymalkin (paternal collateral ancestor), Brian Xavier (paternal grandfather), Sharon Xavier (paternal grandmother), Kurt Marko (paternal step-grandfather), Cain Marko (paternal step-uncle), Cassandra Nova Xavier (paternal aunt), Charles Xavier (father), Gabrielle Haller (mother), Daniel Shomron (stepfather), Xavier Family (paternal relatives), Ruth Aldine (lover/current body)"
      },
      "images": {
        "xs": "images/characters/xs/403-legion.jpg",
        "sm": "images/characters/sm/403-legion.jpg",
        "md": "images/characters/md/403-legion.jpg",
        "lg": "images/characters/lg/403-legion.jpg"
      }
    },
    {
      "id": 404,
      "name": "Leonardo",
      "slug": "404-leonardo",
      "powerstats": {
        "intelligence": 75,
        "strength": 16,
        "speed": 50,
        "durability": 65,
        "power": 59,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Leonardo",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Leo",
          "Ghost of the Jungle",
          "Splinter Jr."
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teenage Mutant Ninja Turtles #1",
        "publisher": "IDW Publishing",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Ninja",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Donatello (brother), Michelangelo (brother), Raphael (brother)"
      },
      "images": {
        "xs": "images/characters/xs/404-leonardo.jpg",
        "sm": "images/characters/sm/404-leonardo.jpg",
        "md": "images/characters/md/404-leonardo.jpg",
        "lg": "images/characters/lg/404-leonardo.jpg"
      }
    },
    {
      "id": 405,
      "name": "Lex Luthor",
      "slug": "405-lex-luthor",
      "powerstats": {
        "intelligence": 100,
        "strength": 53,
        "speed": 25,
        "durability": 65,
        "power": 68,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2'",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Lex Luthor",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Action Comics #23",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Owner of LexCorp",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Injustice Gang, Injustice League, Society of Supervillains",
        "relatives": "Casey and Elaine Griggs (foster parents, deceased),\nLena Luthor (sister pre-Crisis; daughter post-Crisis),\nElizabeth Perske (ex-wife),\nPerry J. White Jr. (son, deceased),\nContessa Erica Alexandra del Portenza (wife, assumed deceased)"
      },
      "images": {
        "xs": "images/characters/xs/405-lex-luthor.jpg",
        "sm": "images/characters/sm/405-lex-luthor.jpg",
        "md": "images/characters/md/405-lex-luthor.jpg",
        "lg": "images/characters/lg/405-lex-luthor.jpg"
      }
    },
    {
      "id": 406,
      "name": "Light Lass",
      "slug": "406-light-lass",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 35,
        "durability": 28,
        "power": 67,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Ayla Ranzz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "United Planets"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes, formerly the Wanderers",
        "relatives": "Unnamd parents, Garth Ranzz (Lightning Lad, twin brother); Mekt Ranzz (older brother)"
      },
      "images": {
        "xs": "images/characters/xs/406-light-lass.jpg",
        "sm": "images/characters/sm/406-light-lass.jpg",
        "md": "images/characters/md/406-light-lass.jpg",
        "lg": "images/characters/lg/406-light-lass.jpg"
      }
    },
    {
      "id": 407,
      "name": "Lightning Lad",
      "slug": "407-lightning-lad",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 60,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'1",
          "155 cm"
        ],
        "weight": [
          "145 lb",
          "65 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Garth Ranzz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lightning Boy",
          "Live Wire"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Legionnaire",
        "base": "Earth, 31st century"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/407-lightning-lad.jpg",
        "sm": "images/characters/sm/407-lightning-lad.jpg",
        "md": "images/characters/md/407-lightning-lad.jpg",
        "lg": "images/characters/lg/407-lightning-lad.jpg"
      }
    },
    {
      "id": 408,
      "name": "Lightning Lord",
      "slug": "408-lightning-lord",
      "powerstats": {
        "intelligence": 44,
        "strength": 10,
        "speed": 23,
        "durability": 42,
        "power": 66,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Mekt Ranzz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Supergirl and the Legion of Super-Heroes #25 (Feb. 2007)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "The Wanderers, former ally of the Legion of Super-Heroes.",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/408-lightning-lord.jpg",
        "sm": "images/characters/sm/408-lightning-lord.jpg",
        "md": "images/characters/md/408-lightning-lord.jpg",
        "lg": "images/characters/lg/408-lightning-lord.jpg"
      }
    },
    {
      "id": 409,
      "name": "Living Brain",
      "slug": "409-living-brain",
      "powerstats": {
        "intelligence": 75,
        "strength": 53,
        "speed": 35,
        "durability": 56,
        "power": 31,
        "combat": 28
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "800 lb",
          "360 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #8 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Robot",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/409-living-brain.jpg",
        "sm": "images/characters/sm/409-living-brain.jpg",
        "md": "images/characters/md/409-living-brain.jpg",
        "lg": "images/characters/lg/409-living-brain.jpg"
      }
    },
    {
      "id": 410,
      "name": "Living Tribunal",
      "slug": "410-living-tribunal",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 30
      },
      "appearance": {
        "gender": "unknown",
        "race": "Cosmic Entity",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Living Trinity",
          "Magistrate",
          "High Judge of The Multiverse",
          "Sir"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Strange Tales #157",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "One-Above-All (creator)"
      },
      "images": {
        "xs": "images/characters/xs/410-living-tribunal.jpg",
        "sm": "images/characters/sm/410-living-tribunal.jpg",
        "md": "images/characters/md/410-living-tribunal.jpg",
        "lg": "images/characters/lg/410-living-tribunal.jpg"
      }
    },
    {
      "id": 412,
      "name": "Lizard",
      "slug": "412-lizard",
      "powerstats": {
        "intelligence": 50,
        "strength": 51,
        "speed": 27,
        "durability": 70,
        "power": 63,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "510 lb",
          "230 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Curtis Connors",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Coral Gables, Florida",
        "firstAppearance": "Amazing Spider-Man #6",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Research biologist",
        "base": "Florida"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Martha (wife, deceased), Billy (son), unnamed sister"
      },
      "images": {
        "xs": "images/characters/xs/412-lizard.jpg",
        "sm": "images/characters/sm/412-lizard.jpg",
        "md": "images/characters/md/412-lizard.jpg",
        "lg": "images/characters/lg/412-lizard.jpg"
      }
    },
    {
      "id": 413,
      "name": "Lobo",
      "slug": "413-lobo",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 54,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Czarnian",
        "height": [
          "7'6",
          "229 cm"
        ],
        "weight": [
          "640 lb",
          "288 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Lobo",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Main Man",
          "The 'Bo",
          "Master Frag",
          "Mister Machete",
          "Popebo; He-Who-Devours-Your-Entrails-And-Thoroughly-Enjoys-It"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Omega Men # 3",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Assassin, Bounty Hunter, Priest",
        "base": "Mobile throughout several galaxies"
      },
      "connections": {
        "groupAffiliation": "Formerly LEGION, Young Justice; First Celestial Church of the Triple Fish-God",
        "relatives": "Slobo (clone)"
      },
      "images": {
        "xs": "images/characters/xs/413-lobo.jpg",
        "sm": "images/characters/sm/413-lobo.jpg",
        "md": "images/characters/md/413-lobo.jpg",
        "lg": "images/characters/lg/413-lobo.jpg"
      }
    },
    {
      "id": 414,
      "name": "Loki",
      "slug": "414-loki",
      "powerstats": {
        "intelligence": 88,
        "strength": 63,
        "speed": 46,
        "durability": 85,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Asgardian",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "525 lb",
          "236 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Loki Laufeyson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "God of Mischief",
          "Gem-Keeper",
          "Walter Lawson",
          "Lester",
          "Loren Olsen",
          "Tyfon",
          "Father Williams",
          "Willie",
          "Tso Zhung; has also impersonated hundreds of others."
        ],
        "placeOfBirth": "Jotunheim, Asgard",
        "firstAppearance": "Journey into Mystery Vol. 1 #85",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "God of evil; former god of mischief and madness",
        "base": "Asgard"
      },
      "connections": {
        "groupAffiliation": "Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, \"Acts of Vengeance\" prime movers (Dr. Doom, Magneto, Red Skull, Mandari",
        "relatives": "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/414-loki.jpg",
        "sm": "images/characters/sm/414-loki.jpg",
        "md": "images/characters/md/414-loki.jpg",
        "lg": "images/characters/lg/414-loki.jpg"
      }
    },
    {
      "id": 415,
      "name": "Longshot",
      "slug": "415-longshot",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 27,
        "durability": 10,
        "power": 71,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "80 lb",
          "36 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Lost Messiah",
          "The Lucky One"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Longshot #1 (September, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "freedom fighter, stuntman rebel, adventurer",
        "base": "X-Factor Investigations Headquarters, New York City, New York; formerly Detroit, Michigan; mobile; Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York; Mojoverse; Cooterman's Creek, Australian Outback, Australia; Alcatraz I"
      },
      "connections": {
        "groupAffiliation": "X-Factor Investigations; rebel forces on his homeworld; formerly Exiles; X-Men",
        "relatives": "Arize (creator), Alison Blaire (Dazzler) (wife), Gaveedra Seven (Shatterstar) (alleged son)"
      },
      "images": {
        "xs": "images/characters/xs/415-longshot.jpg",
        "sm": "images/characters/sm/415-longshot.jpg",
        "md": "images/characters/md/415-longshot.jpg",
        "lg": "images/characters/lg/415-longshot.jpg"
      }
    },
    {
      "id": 416,
      "name": "Luke Cage",
      "slug": "416-luke-cage",
      "powerstats": {
        "intelligence": 50,
        "strength": 63,
        "speed": 29,
        "durability": 95,
        "power": 44,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "425 lb",
          "191 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Luke Cage",
        "alterEgos": "Power Man",
        "aliases": [
          "Carl Lucas",
          "Power Man",
          "Mark Lucas",
          "Hero for Hire",
          "Ace of Spades"
        ],
        "placeOfBirth": "Harlem, New York City",
        "firstAppearance": "Hero for Hire #1 (1972)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, bar owner, bodyguard, mercenary; formerly theater owner, private investigator, various odd jobs",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Underground Avengers (formerly Daredevil's Unnamed Super-Hero Team), Secret Defenders, Heroes for Hire, Nightwing Restorations, Fantastic Four, Defenders, Bloods",
        "relatives": "Jessica Jones (wife), James Leonard Lucas (father), Esther (mother, deceased), James Jr. (Coldfire, brother), unnamed daughter"
      },
      "images": {
        "xs": "images/characters/xs/416-luke-cage.jpg",
        "sm": "images/characters/sm/416-luke-cage.jpg",
        "md": "images/characters/md/416-luke-cage.jpg",
        "lg": "images/characters/lg/416-luke-cage.jpg"
      }
    },
    {
      "id": 419,
      "name": "Luna",
      "slug": "419-luna",
      "powerstats": {
        "intelligence": 38,
        "strength": 6,
        "speed": 83,
        "durability": 14,
        "power": 53,
        "combat": 14
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Luna Maximoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Attilan, Blue Area of the Moon",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Quicksilver (Pietro Maximoff, father), Magneto (grandfather), Crystal (mother), Scarlet Witch, (aunt), Polaris (aunt)"
      },
      "images": {
        "xs": "images/characters/xs/419-luna.jpg",
        "sm": "images/characters/sm/419-luna.jpg",
        "md": "images/characters/md/419-luna.jpg",
        "lg": "images/characters/lg/419-luna.jpg"
      }
    },
    {
      "id": 421,
      "name": "Mach-IV",
      "slug": "421-mach-iv",
      "powerstats": {
        "intelligence": 75,
        "strength": 36,
        "speed": 60,
        "durability": 84,
        "power": 60,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Abner Jenkins",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Beetle",
          "MACH-I",
          "MACH-II",
          "MACH-III",
          "Matthew"
        ],
        "placeOfBirth": "Baltimore, Maryland",
        "firstAppearance": "(Beetle) Strange Tales #123 (1964); (MACH-I) Incredible Hulk #449 (1997); (MACH-II) Thunderbolts #37 (2000); (MACH-III) Thunderbolts #57 (2001); (MACH-IV) New Thunderbolts #1 (2005)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Adventurer; former master mechanic, professional criminal, mercenary",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "formerly Thunderbolts, Masters of Evil, Sinister Syndicate, Justin Hammer's Hit Squad, Maggia, Sinister Seven, Commission on Superhuman Activities, Defenders impersonators, Burton Canyon Police Department",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/421-mach-iv.jpg",
        "sm": "images/characters/sm/421-mach-iv.jpg",
        "md": "images/characters/md/421-mach-iv.jpg",
        "lg": "images/characters/lg/421-mach-iv.jpg"
      }
    },
    {
      "id": 422,
      "name": "Machine Man",
      "slug": "422-machine-man",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 35,
        "durability": 84,
        "power": 51,
        "combat": 64
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "850 lb",
          "383 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "X-51, Aaron Stack",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sir McHinery",
          "Mister Machine.Machine Man"
        ],
        "placeOfBirth": "Central City, California",
        "firstAppearance": "First appearance unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Insurance Investigator",
        "base": "Garvin's Garage, Queens, New York"
      },
      "connections": {
        "groupAffiliation": "Avengers",
        "relatives": "Dr. Able Stack, 'father'"
      },
      "images": {
        "xs": "images/characters/xs/422-machine-man.jpg",
        "sm": "images/characters/sm/422-machine-man.jpg",
        "md": "images/characters/md/422-machine-man.jpg",
        "lg": "images/characters/lg/422-machine-man.jpg"
      }
    },
    {
      "id": 423,
      "name": "Magneto",
      "slug": "423-magneto",
      "powerstats": {
        "intelligence": 88,
        "strength": 80,
        "speed": 27,
        "durability": 84,
        "power": 91,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Grey",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Erik Magnus Lensherr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Creator",
          "Erik Magnus Lehnsherr",
          "Michael Xavier",
          "White Pilgrim",
          "Erik the RedThe Master of Magnetism"
        ],
        "placeOfBirth": "Unrevealed, probably somewhere in Northern Europe",
        "firstAppearance": "X-MEN Vol. 1 #1",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent",
        "base": "Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes",
        "relatives": "Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)"
      },
      "images": {
        "xs": "images/characters/xs/423-magneto.jpg",
        "sm": "images/characters/sm/423-magneto.jpg",
        "md": "images/characters/md/423-magneto.jpg",
        "lg": "images/characters/lg/423-magneto.jpg"
      }
    },
    {
      "id": 424,
      "name": "Magog",
      "slug": "424-magog",
      "powerstats": {
        "intelligence": 50,
        "strength": 48,
        "speed": 23,
        "durability": 64,
        "power": 66,
        "combat": 72
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "David Reid",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "formerly Justice Society of America, formerally United States Marine Corps",
        "relatives": "Franklin Delano Roosevelt (great-grandfather, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/424-magog.jpg",
        "sm": "images/characters/sm/424-magog.jpg",
        "md": "images/characters/md/424-magog.jpg",
        "lg": "images/characters/lg/424-magog.jpg"
      }
    },
    {
      "id": 425,
      "name": "Magus",
      "slug": "425-magus",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 70,
        "durability": 99,
        "power": 100,
        "combat": 74
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Warlock's Father"
        ],
        "placeOfBirth": "Kvch (Technarchy?s home planet)",
        "firstAppearance": "New Mutants #18 (1984)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Ruler of the Technarchy",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Warlock (son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/425-magus.jpg",
        "sm": "images/characters/sm/425-magus.jpg",
        "md": "images/characters/md/425-magus.jpg",
        "lg": "images/characters/lg/425-magus.jpg"
      }
    },
    {
      "id": 426,
      "name": "Man of Miracles",
      "slug": "426-man-of-miracles",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "unknown",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Silver"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mother Of Existence"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Spawn #75",
        "publisher": "Image Comics",
        "alignment": "unknown"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/426-man-of-miracles.jpg",
        "sm": "images/characters/sm/426-man-of-miracles.jpg",
        "md": "images/characters/md/426-man-of-miracles.jpg",
        "lg": "images/characters/lg/426-man-of-miracles.jpg"
      }
    },
    {
      "id": 427,
      "name": "Man-Bat",
      "slug": "427-man-bat",
      "powerstats": {
        "intelligence": 38,
        "strength": 18,
        "speed": 50,
        "durability": 70,
        "power": 33,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Robert Kirkland Langstrom",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kirk Langstrom"
        ],
        "placeOfBirth": "Chicago, Illinois",
        "firstAppearance": "Detective Comics #400 (June, 1970)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Zoologist",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Formerly Spirit Squad, The Network",
        "relatives": "Francine Langstrom (wife), Rebecca Elizabeth Langtrom (daughter); Aaron Langstrom (son); Britt Langstrom (sister); Ted Friedel (brother-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/427-man-bat.jpg",
        "sm": "images/characters/sm/427-man-bat.jpg",
        "md": "images/characters/md/427-man-bat.jpg",
        "lg": "images/characters/lg/427-man-bat.jpg"
      }
    },
    {
      "id": 428,
      "name": "Man-Thing",
      "slug": "428-man-thing",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 8,
        "durability": 100,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "7'0",
          "213 cm"
        ],
        "weight": [
          "500 lb",
          "225 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Dr. Theodore Sallis",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "the Vagornus Koth; the Swamp Walker; Mr. Salad; Walking Mulch Heap"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Savage Tales #1 (May, 1971)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Man-Thing's Swamp, Citrusville, Florida"
      },
      "connections": {
        "groupAffiliation": "Thunderbolts, Legion of Monsters, Daydreamers",
        "relatives": "Ellen Brandt (ex-wife) Job Burke (son)"
      },
      "images": {
        "xs": "images/characters/xs/428-man-thing.jpg",
        "sm": "images/characters/sm/428-man-thing.jpg",
        "md": "images/characters/md/428-man-thing.jpg",
        "lg": "images/characters/lg/428-man-thing.jpg"
      }
    },
    {
      "id": 429,
      "name": "Man-Wolf",
      "slug": "429-man-wolf",
      "powerstats": {
        "intelligence": 63,
        "strength": 44,
        "speed": 35,
        "durability": 42,
        "power": 45,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2'",
          "188 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "John Jameson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Stargod",
          "Vanwolf",
          "Skywolf"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute",
        "base": "Queens"
      },
      "connections": {
        "groupAffiliation": "Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF",
        "relatives": "J. Jonah (father), Joan (mother, deceased), Marla Madison (stepmother), David (paternal grandfather, presumed deceased), Betty (paternal grandmother, presumed deceased)"
      },
      "images": {
        "xs": "images/characters/xs/429-man-wolf.jpg",
        "sm": "images/characters/sm/429-man-wolf.jpg",
        "md": "images/characters/md/429-man-wolf.jpg",
        "lg": "images/characters/lg/429-man-wolf.jpg"
      }
    },
    {
      "id": 430,
      "name": "Mandarin",
      "slug": "430-mandarin",
      "powerstats": {
        "intelligence": 100,
        "strength": 28,
        "speed": 23,
        "durability": 28,
        "power": 100,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "215 lb",
          "97 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Khan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Tem Borjigin",
          "Gene Kahn",
          "Master Khan",
          "Zhang Tong",
          "Mandy"
        ],
        "placeOfBirth": "China",
        "firstAppearance": "Tales of Suspense #50 (February, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Would-be conqueror; former janitor, businessman and crimelord, government administrator",
        "base": "Prometheus Corporation; formerly Dragon of Heaven; Palace of the Star Dragon in the Valley of Spirits."
      },
      "connections": {
        "groupAffiliation": "current CEO of Prometheus Corporation; has employed the Avatars, Living Laser, Power Man, Swordsman, Enchantress, Executioner, Sandman, and Ladykiller.",
        "relatives": "Unidentified father, mother, paternal aunt (all deceased). Mei-Ling (fianc?e, deceased), Temujin (son), Genghis Khan (alleged ancestor, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/430-mandarin.jpg",
        "sm": "images/characters/sm/430-mandarin.jpg",
        "md": "images/characters/md/430-mandarin.jpg",
        "lg": "images/characters/lg/430-mandarin.jpg"
      }
    },
    {
      "id": 431,
      "name": "Mantis",
      "slug": "431-mantis",
      "powerstats": {
        "intelligence": 63,
        "strength": 8,
        "speed": 33,
        "durability": 80,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Human-Kree",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Celestial Madonna",
          "Willow",
          "Lorelei",
          "Mandy Celestine",
          "This One (in referring to herself)"
        ],
        "placeOfBirth": "Vietnam",
        "firstAppearance": "Avengers #112",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Celestial Madonna, former adventuress, former bar-maid/prostitute/exotic dancer",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Libra (Gustav Brandt) (father), Lau Brandt (mother), Cotati possessing Jacques Duquesne (husband), Quoi (son)"
      },
      "images": {
        "xs": "images/characters/xs/431-mantis.jpg",
        "sm": "images/characters/sm/431-mantis.jpg",
        "md": "images/characters/md/431-mantis.jpg",
        "lg": "images/characters/lg/431-mantis.jpg"
      }
    },
    {
      "id": 432,
      "name": "Martian Manhunter",
      "slug": "432-martian-manhunter",
      "powerstats": {
        "intelligence": 100,
        "strength": 95,
        "speed": 92,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Martian",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "J'onn J'onzz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "ohn Jones; J'Onn J'Onzz (alternate spelling); Big Green Buddy; J.J.; Jolly Green Giant; Light to the Light; Manhunter; Manhunter from Mars; Son of Mars; Bronze Wraith",
          "Bloodwynd",
          "many others"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #225 (1955)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Darkstars, Justice League of Aliens, Justice League Of America, Justice League Task Force, Justice League Unlimited, Martians, Outsiders",
        "relatives": "M'yrnn J'onzz (father, deceased); Sha'sheen J'onzz (mother, deceased); M'yri'ah (wife, deceased); K'hym (daughter, deceased); Ma'alefa'ak (twin brother); D'all (father-in-law, deceased); J'ahrl J'onzz (ancestor, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/432-martian-manhunter.jpg",
        "sm": "images/characters/sm/432-martian-manhunter.jpg",
        "md": "images/characters/md/432-martian-manhunter.jpg",
        "lg": "images/characters/lg/432-martian-manhunter.jpg"
      }
    },
    {
      "id": 433,
      "name": "Marvel Girl",
      "slug": "433-marvel-girl",
      "powerstats": {
        "intelligence": 63,
        "strength": 85,
        "speed": 47,
        "durability": 42,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'7'",
          "170 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Rachel Anne Summers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rachel Grey",
          "formerly Phoenix",
          "Mother Askani",
          "Bright Lady",
          "Aly'zrn Summerset"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "UNCANNY X-MEN #141",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Xavier Institute of Higher Learning, Salem Center, Westchester County, New York (formerly) Braddock Lighthouse, England"
      },
      "connections": {
        "groupAffiliation": "Starjammers, formerly X-Men, former servant of Elias Bogan, formerly Clan Askani (leader), Excalibur, former servant of Ahab",
        "relatives": "Scott Summers (Cyclops, alternate timeline father, deceased in own time), Jean Grey-Summers (Phoenix, alternate timeline mother, deceased in own time), Alex Summers (Havok, alternate timeline uncle), Franklin Richards (alternate future husband), Jonathan Reed Richards (Hyperstorm, alternate future son), David Richards (alternate future son)"
      },
      "images": {
        "xs": "images/characters/xs/433-marvel-girl.jpg",
        "sm": "images/characters/sm/433-marvel-girl.jpg",
        "md": "images/characters/md/433-marvel-girl.jpg",
        "lg": "images/characters/lg/433-marvel-girl.jpg"
      }
    },
    {
      "id": 436,
      "name": "Match",
      "slug": "436-match",
      "powerstats": {
        "intelligence": 75,
        "strength": 95,
        "speed": 83,
        "durability": 85,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Kent Connor",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Superboy",
          "Superman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superboy Vol 4 #35 (January, 1997)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Titans East, the Agenda, Project Cadmus",
        "relatives": "Superman (genetic template via Superboy), Lex Luthor (genetic Template via Superboy), Superboy (genetic template)"
      },
      "images": {
        "xs": "images/characters/xs/436-match.jpg",
        "sm": "images/characters/sm/436-match.jpg",
        "md": "images/characters/md/436-match.jpg",
        "lg": "images/characters/lg/436-match.jpg"
      }
    },
    {
      "id": 438,
      "name": "Maverick",
      "slug": "438-maverick",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 12,
        "durability": 42,
        "power": 60,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "244 lb",
          "110 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Christopher Bradley",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Chris",
          "Bolt"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men Unlimited #8 (1995)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Mercenary; former adventurer, student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "(As Maverick) Formerly Gene Nation, Cable?s Underground; (as Bolt) formerly New Warriors",
        "relatives": "Robert Bradley (Frank Johnson, father), Marion Bradley (Rose Johnson, mother), Catherine Bradley (Jennifer Johnson, sister)"
      },
      "images": {
        "xs": "images/characters/xs/438-maverick.jpg",
        "sm": "images/characters/sm/438-maverick.jpg",
        "md": "images/characters/md/438-maverick.jpg",
        "lg": "images/characters/lg/438-maverick.jpg"
      }
    },
    {
      "id": 439,
      "name": "Maxima",
      "slug": "439-maxima",
      "powerstats": {
        "intelligence": 75,
        "strength": 90,
        "speed": 35,
        "durability": 56,
        "power": 81,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "160 lb",
          "72 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Queen Maxima",
          "Empress of the Almeracian Empire"
        ],
        "placeOfBirth": "Almerac",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Adventurer, Queen of the Almerac Empire",
        "base": "Imperial Royal Palace"
      },
      "connections": {
        "groupAffiliation": "Justice League Task Force, Extreme Justice",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/439-maxima.jpg",
        "sm": "images/characters/sm/439-maxima.jpg",
        "md": "images/characters/md/439-maxima.jpg",
        "lg": "images/characters/lg/439-maxima.jpg"
      }
    },
    {
      "id": 441,
      "name": "Medusa",
      "slug": "441-medusa",
      "powerstats": {
        "intelligence": 75,
        "strength": 34,
        "speed": 35,
        "durability": 70,
        "power": 37,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": "Inhuman",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Medusalith Amaquelin Boltagon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Madam Medusa",
          "Queen Medusa"
        ],
        "placeOfBirth": "Island of Attilan, Atlantic Ocean",
        "firstAppearance": "Fantastic Four Vol. 1 #36 (1965)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Queen, Royal interpreter",
        "base": "Attilan"
      },
      "connections": {
        "groupAffiliation": "Inhumans, Fantastic Four",
        "relatives": "Kobar, La (maternal grandparents), Azur (maternal aunt), Mander (maternal uncle-by-marriage), Quelin (father), Ambur (mother), Crystal (sister), Black Bolt (husband, second cousin), Ahura (son), Karnak (cousin), Triton (cousin), Psynapse (second cousin), Maximus (brother-in-law, second cousin), Ronan the Accuser (brother-in-law), Quicksilver (ex-brother-in-law), Luna (niece)"
      },
      "images": {
        "xs": "images/characters/xs/441-medusa.jpg",
        "sm": "images/characters/sm/441-medusa.jpg",
        "md": "images/characters/md/441-medusa.jpg",
        "lg": "images/characters/lg/441-medusa.jpg"
      }
    },
    {
      "id": 442,
      "name": "Meltdown",
      "slug": "442-meltdown",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 12,
        "durability": 42,
        "power": 62,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Tabitha Smith",
        "alterEgos": "Boom-Boom",
        "aliases": [
          "Boom-Boom",
          "Boomer",
          "Meltdown",
          "Mutate #35",
          "Time Bomb",
          "Nancy Forrester"
        ],
        "placeOfBirth": "Roanoke, Virginia",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former student, thief",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Nextwave, X-Force, Genoshan Mutates, New Mutants, X-Terminators, X-Factor (trainee), Fallen Angels",
        "relatives": "Martin Louis Smith (father), Mandy Smith (step-mother), Wanda Jo Bialowsky-Smith (step-mother)"
      },
      "images": {
        "xs": "images/characters/xs/442-meltdown.jpg",
        "sm": "images/characters/sm/442-meltdown.jpg",
        "md": "images/characters/md/442-meltdown.jpg",
        "lg": "images/characters/lg/442-meltdown.jpg"
      }
    },
    {
      "id": 443,
      "name": "Mephisto",
      "slug": "443-mephisto",
      "powerstats": {
        "intelligence": 88,
        "strength": 85,
        "speed": 35,
        "durability": 95,
        "power": 100,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "310 lb",
          "140 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Satan; Mephistopheles",
          "Lord of Evil",
          "Prince of Devils",
          "Prince of Lies",
          "Lord of the Lower Depths",
          "Satan",
          "Beelzebub",
          "the Devil",
          "Maya",
          "Lucifer",
          "Nick Scratch",
          "the Friend",
          "Legion",
          "numerous others; impersonated Don Blake",
          "many others"
        ],
        "placeOfBirth": "Hell",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Lord of a realm of Hell",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Hell-lords, Lords of the Splinter Realms; formerly manipulator of the Six-Fingered Hand",
        "relatives": "Blackheart (son), Mephista (daughter); presumptive relationship to other Hell-lords; quasi-paternal relationship to Mikal Drakonmegas (Hellfire) and Daimon (Hellstorm) and Satana Hellstrom; formerly engaged to unidentified demoness"
      },
      "images": {
        "xs": "images/characters/xs/443-mephisto.jpg",
        "sm": "images/characters/sm/443-mephisto.jpg",
        "md": "images/characters/md/443-mephisto.jpg",
        "lg": "images/characters/lg/443-mephisto.jpg"
      }
    },
    {
      "id": 444,
      "name": "Mera",
      "slug": "444-mera",
      "powerstats": {
        "intelligence": 56,
        "strength": 62,
        "speed": 79,
        "durability": 60,
        "power": 92,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Atlantean",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "160 lb",
          "72 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Mera",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Queen of Atlantis",
          "Aquawoman",
          "Aquagirl",
          "Water-Woman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Aquaman #11 (October, 1963)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former queen of Atlantis; Former queen of Dimension Aqua",
        "base": "Atlantis"
      },
      "connections": {
        "groupAffiliation": "Aquaman Family; formerly Red Lantern Corps",
        "relatives": "Aquaman (husband); Aquababy (son, deceased); A.J. (son); Siren (Hila, twin sister)"
      },
      "images": {
        "xs": "images/characters/xs/444-mera.jpg",
        "sm": "images/characters/sm/444-mera.jpg",
        "md": "images/characters/md/444-mera.jpg",
        "lg": "images/characters/lg/444-mera.jpg"
      }
    },
    {
      "id": 445,
      "name": "Metallo",
      "slug": "445-metallo",
      "powerstats": {
        "intelligence": 75,
        "strength": 53,
        "speed": 23,
        "durability": 95,
        "power": 86,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "John Corben",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superman Vol 2 #1 (January, 1987)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal",
        "base": "Mobile, though he generally operates out of Metropolis"
      },
      "connections": {
        "groupAffiliation": "Superman Revenge Squad",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/445-metallo.jpg",
        "sm": "images/characters/sm/445-metallo.jpg",
        "md": "images/characters/md/445-metallo.jpg",
        "lg": "images/characters/lg/445-metallo.jpg"
      }
    },
    {
      "id": 448,
      "name": "Metron",
      "slug": "448-metron",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 47,
        "durability": 56,
        "power": 100,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Metron",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New Gods vol. 1 #1 (February-March, 1971)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Scientist, seeker of knowledge",
        "base": "Supertown, New Genesis"
      },
      "connections": {
        "groupAffiliation": "New Gods",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/448-metron.jpg",
        "sm": "images/characters/sm/448-metron.jpg",
        "md": "images/characters/md/448-metron.jpg",
        "lg": "images/characters/lg/448-metron.jpg"
      }
    },
    {
      "id": 450,
      "name": "Michelangelo",
      "slug": "450-michelangelo",
      "powerstats": {
        "intelligence": 63,
        "strength": 14,
        "speed": 50,
        "durability": 65,
        "power": 59,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mike",
          "Mikey",
          "Mikester",
          "Michaelangelo"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "IDW Publishing",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Leonardo (brother), Donatello (brother), Raphael (brother)"
      },
      "images": {
        "xs": "images/characters/xs/450-michelangelo.jpg",
        "sm": "images/characters/sm/450-michelangelo.jpg",
        "md": "images/characters/md/450-michelangelo.jpg",
        "lg": "images/characters/lg/450-michelangelo.jpg"
      }
    },
    {
      "id": 451,
      "name": "Micro Lad",
      "slug": "451-micro-lad",
      "powerstats": {
        "intelligence": 38,
        "strength": 28,
        "speed": 27,
        "durability": 28,
        "power": 44,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Grey",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Gim Allon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Colossal Boy (mostly known as Colossal Boy",
          "although he dislikes that name himself)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1 (2004)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "United Planets, 31st century"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/451-micro-lad.jpg",
        "sm": "images/characters/sm/451-micro-lad.jpg",
        "md": "images/characters/md/451-micro-lad.jpg",
        "lg": "images/characters/lg/451-micro-lad.jpg"
      }
    },
    {
      "id": 452,
      "name": "Mimic",
      "slug": "452-mimic",
      "powerstats": {
        "intelligence": 63,
        "strength": 67,
        "speed": 47,
        "durability": 56,
        "power": 79,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Calvin Montgomery Rankin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Cal",
          "Wolverine",
          "Calvin Rankin"
        ],
        "placeOfBirth": "Passiac, New Jersey",
        "firstAppearance": "Uncanny X-Men #19",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Brotherhood Of Mutants, Excalibur, X-Men, former agent of Onslaught and Sledge",
        "relatives": "Ronald Rankin (father, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/452-mimic.jpg",
        "sm": "images/characters/sm/452-mimic.jpg",
        "md": "images/characters/md/452-mimic.jpg",
        "lg": "images/characters/lg/452-mimic.jpg"
      }
    },
    {
      "id": 454,
      "name": "Misfit",
      "slug": "454-misfit",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 23,
        "durability": 80,
        "power": 91,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Charlotte Gage-Radcliffe",
        "alterEgos": "Batgirl V",
        "aliases": [
          "Batgirl"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Birds of Prey #96",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Dalten Towers, Metropolis"
      },
      "connections": {
        "groupAffiliation": "Birds of Prey",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/454-misfit.jpg",
        "sm": "images/characters/sm/454-misfit.jpg",
        "md": "images/characters/md/454-misfit.jpg",
        "lg": "images/characters/lg/454-misfit.jpg"
      }
    },
    {
      "id": 455,
      "name": "Miss Martian",
      "slug": "455-miss-martian",
      "powerstats": {
        "intelligence": 63,
        "strength": 85,
        "speed": 58,
        "durability": 100,
        "power": 100,
        "combat": 45
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "M'gann M'orzz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Megan Morse; M'Gann M'Orzz (alternate spelling); Martian Girlhunter; Martian Manhunter (Titans Tomorrow alias)",
          "Star-Spangled Kid"
        ],
        "placeOfBirth": "Mars",
        "firstAppearance": "Teen Titans Vol 3 #37 (August, 2006)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Arizona; San Francisco, California; formerly the Tanami Desert, Australia"
      },
      "connections": {
        "groupAffiliation": "Teen Titans",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/455-miss-martian.jpg",
        "sm": "images/characters/sm/455-miss-martian.jpg",
        "md": "images/characters/md/455-miss-martian.jpg",
        "lg": "images/characters/lg/455-miss-martian.jpg"
      }
    },
    {
      "id": 456,
      "name": "Mister Fantastic",
      "slug": "456-mister-fantastic",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 18,
        "durability": 70,
        "power": 33,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Reed Richards",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mr Fantastic"
        ],
        "placeOfBirth": "Central City, California",
        "firstAppearance": "FANTASTIC FOUR #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Scientist, adventurer",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Fantastic Four",
        "relatives": "Nathaniai (father), Evelyn (mother, deceased), Susan Storm - Invisible Woman (wife), Franklin (son), Johnny Storm - Human Torch (brother-inlaw), Cassandra (stepmother, deceased), Immortus (father's descendant, see Immortus, Kang, Rama-Tut)."
      },
      "images": {
        "xs": "images/characters/xs/456-mister-fantastic.jpg",
        "sm": "images/characters/sm/456-mister-fantastic.jpg",
        "md": "images/characters/md/456-mister-fantastic.jpg",
        "lg": "images/characters/lg/456-mister-fantastic.jpg"
      }
    },
    {
      "id": 457,
      "name": "Mister Freeze",
      "slug": "457-mister-freeze",
      "powerstats": {
        "intelligence": 75,
        "strength": 32,
        "speed": 12,
        "durability": 70,
        "power": 37,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Victor Fries",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mister Zero",
          "Doctor Zero",
          "Doctor Schimmell"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #121 (Feb. 1959)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Assorted Batman rogues, The Society",
        "relatives": "Nora Fries (wife, deceased, then resurrected as Lazara), Charles (Father) and Lorraine Fries (Mother)"
      },
      "images": {
        "xs": "images/characters/xs/457-mister-freeze.jpg",
        "sm": "images/characters/sm/457-mister-freeze.jpg",
        "md": "images/characters/md/457-mister-freeze.jpg",
        "lg": "images/characters/lg/457-mister-freeze.jpg"
      }
    },
    {
      "id": 458,
      "name": "Mister Knife",
      "slug": "458-mister-knife",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 17,
        "durability": 30,
        "power": 13,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Spartoi",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "J'son",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jason of Spartax",
          "Jason of Sparta",
          "Star-Lord",
          "Mr Knife"
        ],
        "placeOfBirth": "Spartax, Spartoi Empire, near the Shi'ar Galaxy",
        "firstAppearance": "Inhumans Vol 3 #2 (July, 2000)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Crimelord; former emperor, prince",
        "base": "Formerly Spartax, Spartoi Empire, near the Shi'ar Galaxy"
      },
      "connections": {
        "groupAffiliation": "Slaughter Lords (leader); formerly Galactic Council, ruler of the Spartoi Empire",
        "relatives": "Eson (father, deceased), Peter Quill (Star-Lord, son), Victoria (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/458-mister-knife.jpg",
        "sm": "images/characters/sm/458-mister-knife.jpg",
        "md": "images/characters/md/458-mister-knife.jpg",
        "lg": "images/characters/lg/458-mister-knife.jpg"
      }
    },
    {
      "id": 459,
      "name": "Mister Mxyzptlk",
      "slug": "459-mister-mxyzptlk",
      "powerstats": {
        "intelligence": 100,
        "strength": 85,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Mr. Mxyzptlk",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Superman #30",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/459-mister-mxyzptlk.jpg",
        "sm": "images/characters/sm/459-mister-mxyzptlk.jpg",
        "md": "images/characters/md/459-mister-mxyzptlk.jpg",
        "lg": "images/characters/lg/459-mister-mxyzptlk.jpg"
      }
    },
    {
      "id": 460,
      "name": "Mister Sinister",
      "slug": "460-mister-sinister",
      "powerstats": {
        "intelligence": 100,
        "strength": 48,
        "speed": 46,
        "durability": 90,
        "power": 100,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Altered",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "285 lb",
          "128 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Nathaniel Essex",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sinister",
          "Robert Windsor",
          "Arnold Bocklin",
          "Mike Milbury",
          "Apocalypse",
          "Steven Shaffran",
          "Edmond Atkinson",
          "Nate",
          "Administrator Pearson",
          "Nosferatu",
          "Nathan Milbury",
          "Pale Man"
        ],
        "placeOfBirth": "London, England",
        "firstAppearance": "Uncanny X-Men #221 (September, 1987)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Geneticist, Criminal, biologist and mutant-supremacist",
        "base": "Many bases throughout the world including his State Home for Foundlings and the Center for Homo Superior Medical Care."
      },
      "connections": {
        "groupAffiliation": "Marauders (founder), Nasty Boys (founder); formerly Weapon X, Third Reich",
        "relatives": "Rebecca Essex (wife, deceased), Adam Stanislaus Essex (son, deceased), N2 (creation, deceased), Madelyne Pryor (creation, deceased), Claudine Renko (clone \"daughter\")"
      },
      "images": {
        "xs": "images/characters/xs/460-mister-sinister.jpg",
        "sm": "images/characters/sm/460-mister-sinister.jpg",
        "md": "images/characters/md/460-mister-sinister.jpg",
        "lg": "images/characters/lg/460-mister-sinister.jpg"
      }
    },
    {
      "id": 461,
      "name": "Mister Zsasz",
      "slug": "461-mister-zsasz",
      "powerstats": {
        "intelligence": 88,
        "strength": 22,
        "speed": 33,
        "durability": 28,
        "power": 18,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Victor Zsasz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mr Zsasz"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Serial Killer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 462,
      "name": "Mockingbird",
      "slug": "462-mockingbird",
      "powerstats": {
        "intelligence": 75,
        "strength": 31,
        "speed": 38,
        "durability": 20,
        "power": 48,
        "combat": 95
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Barbara Morse",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Barbara Morse-Barton",
          "Roberta Morse",
          "Agent 19",
          "Huntress",
          "Bobbi Van Dyne; once posed as Shooting Star"
        ],
        "placeOfBirth": "San Diego, California",
        "firstAppearance": "Astonishing Tales #6 (June, 1971)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former counter-terrorist agent, private investigator, government operative, S.H.I.E.L.D. agent, biologist",
        "base": "New York City, New York"
      },
      "connections": {
        "groupAffiliation": "World Counterterrorism Agency; formerly Secret Avengers, New Avengers, West Coast Avengers, Avengers, Great Lakes Avengers, S.H.I.E.L.D.; partner of Hawkeye; associate of Dr. Wilma Calvin",
        "relatives": "Susan Morse (mother); Ben Morse (brother); Hawkeye (Clint Barton) (ex-husband)"
      },
      "images": {
        "xs": "images/characters/xs/462-mockingbird.jpg",
        "sm": "images/characters/sm/462-mockingbird.jpg",
        "md": "images/characters/md/462-mockingbird.jpg",
        "lg": "images/characters/lg/462-mockingbird.jpg"
      }
    },
    {
      "id": 463,
      "name": "MODOK",
      "slug": "463-modok",
      "powerstats": {
        "intelligence": 100,
        "strength": 18,
        "speed": 25,
        "durability": 25,
        "power": 79,
        "combat": 15
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "12'0",
          "366 cm"
        ],
        "weight": [
          "750 lb",
          "338 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Brownn"
      },
      "biography": {
        "fullName": "George Tarleton",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "M.O.D.O.K.",
          "Mental Organism Designed Only for Killing"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Tales of Suspense #93",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Would-be conqueror, AIM leader, terrorist; former AIM agent, technician",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "M.O.D.O.K. Superior (clone), Head Case (son), Number None (son)"
      },
      "images": {
        "xs": "images/characters/xs/463-modok.jpg",
        "sm": "images/characters/sm/463-modok.jpg",
        "md": "images/characters/md/463-modok.jpg",
        "lg": "images/characters/lg/463-modok.jpg"
      }
    },
    {
      "id": 467,
      "name": "Molten Man",
      "slug": "467-molten-man",
      "powerstats": {
        "intelligence": 50,
        "strength": 73,
        "speed": 23,
        "durability": 84,
        "power": 53,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "550 lb",
          "248 kg"
        ],
        "eyeColor": "Gold",
        "hairColor": "Gold"
      },
      "biography": {
        "fullName": "Mark Raxton",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #28 (1965)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Security guard for Osborn industries, former criminal, lab assistant",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Exterminators",
        "relatives": "Doris Raxton (mother), Liz Allan Osborn (step-sister), Harry Osborn (Green Goblin II , step-brother-in-law, deceased), Norman Osborn Jr. (Green Goblin I, step-nephew)"
      },
      "images": {
        "xs": "images/characters/xs/467-molten-man.jpg",
        "sm": "images/characters/sm/467-molten-man.jpg",
        "md": "images/characters/md/467-molten-man.jpg",
        "lg": "images/characters/lg/467-molten-man.jpg"
      }
    },
    {
      "id": 470,
      "name": "Moon Knight",
      "slug": "470-moon-knight",
      "powerstats": {
        "intelligence": 50,
        "strength": 36,
        "speed": 23,
        "durability": 42,
        "power": 28,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Marc Spector",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jake Lockley",
          "Steven Grant",
          "Yitzak Topol",
          "Fist of Khonshu",
          "Crescent Crusader",
          "Lunar Legionnaire"
        ],
        "placeOfBirth": "Chicago, Illinois",
        "firstAppearance": "Werewolf by Night #32 (August, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, entrepreneur; former prize fighter, spy, soldier, mercenary, cab driver",
        "base": "New York City; formerly Spector Mansion, Long Island, Avengers Compound, California"
      },
      "connections": {
        "groupAffiliation": "Secret Avengers; formerly: US Marine Corps, Central Intelligence Agency (CIA), partner of Jean-Paul du Champ, partner of Raoul Bushman, partner of Midnight, West Coast Avengers, Marvel Knights, Defenders",
        "relatives": "Shadowknight (Randall Spector) (brother, deceased), Elias (father, deceased), Seth Phalkon (alleged great-great-grandfather)"
      },
      "images": {
        "xs": "images/characters/xs/470-moon-knight.jpg",
        "sm": "images/characters/sm/470-moon-knight.jpg",
        "md": "images/characters/md/470-moon-knight.jpg",
        "lg": "images/characters/lg/470-moon-knight.jpg"
      }
    },
    {
      "id": 471,
      "name": "Moonstone",
      "slug": "471-moonstone",
      "powerstats": {
        "intelligence": 56,
        "strength": 67,
        "speed": 47,
        "durability": 52,
        "power": 74,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Karla Sofen",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Meteorite",
          " Kate Sorenson"
        ],
        "placeOfBirth": "Van Nuys, California",
        "firstAppearance": "Captain America Vol. 1 #192 (December, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "former Adventurer, Psychiatrist",
        "base": "formerly Mount Charteris; Four Freedoms Plaza"
      },
      "connections": {
        "groupAffiliation": "Dark Avengers, Formerly; Thunderbolts, Femizons, Masters of Evil, Doctor Faustus, the Corporation, former partner of Blackout (Marcus Daniels)",
        "relatives": "Karl August Sofen (father), Marion Sofen (mother), unnamed maternal grandparents (only mentioned )"
      },
      "images": {
        "xs": "images/characters/xs/471-moonstone.jpg",
        "sm": "images/characters/sm/471-moonstone.jpg",
        "md": "images/characters/md/471-moonstone.jpg",
        "lg": "images/characters/lg/471-moonstone.jpg"
      }
    },
    {
      "id": 472,
      "name": "Morlun",
      "slug": "472-morlun",
      "powerstats": {
        "intelligence": 63,
        "strength": 60,
        "speed": 35,
        "durability": 42,
        "power": 74,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "White / Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Morlun",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #30 (2001)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/472-morlun.jpg",
        "sm": "images/characters/sm/472-morlun.jpg",
        "md": "images/characters/md/472-morlun.jpg",
        "lg": "images/characters/lg/472-morlun.jpg"
      }
    },
    {
      "id": 474,
      "name": "Moses Magnum",
      "slug": "474-moses-magnum",
      "powerstats": {
        "intelligence": 75,
        "strength": 28,
        "speed": 12,
        "durability": 42,
        "power": 55,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "159 lb",
          "72 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Moses Magnum",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Magnum Force,"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Giant-Size Spider-Man #4 (1975)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Terrorist, president of Magnum Munitions; former ruler of Canaan",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Magnum Force (leader), agent of Apocalypse; former agent of They Who Wield Power",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/474-moses-magnum.jpg",
        "sm": "images/characters/sm/474-moses-magnum.jpg",
        "md": "images/characters/md/474-moses-magnum.jpg",
        "lg": "images/characters/lg/474-moses-magnum.jpg"
      }
    },
    {
      "id": 475,
      "name": "Mr Immortal",
      "slug": "475-mr-immortal",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 8,
        "durability": 100,
        "power": 69,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "156 lb",
          "70 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Craig Hollis",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "West Coast Avengers Vol 2 #46",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 476,
      "name": "Mr Incredible",
      "slug": "476-mr-incredible",
      "powerstats": {
        "intelligence": 50,
        "strength": 83,
        "speed": 33,
        "durability": 95,
        "power": 29,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "350 lb",
          "158 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Robert Parr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mr. I",
          "The Hero's Hero",
          "Bob Parr"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Incredibles (Movies, 2004)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Incredible Family",
        "relatives": "Helen Parr (Elastigirl, wife), Violet Parr(Violet, daughter), Dashiell Parr (Dash, son), Jack-jack (son)"
      },
      "images": {
        "xs": "images/characters/xs/476-mr-incredible.jpg",
        "sm": "images/characters/sm/476-mr-incredible.jpg",
        "md": "images/characters/md/476-mr-incredible.jpg",
        "lg": "images/characters/lg/476-mr-incredible.jpg"
      }
    },
    {
      "id": 477,
      "name": "Ms Marvel II",
      "slug": "477-ms-marvel-ii",
      "powerstats": {
        "intelligence": 38,
        "strength": 63,
        "speed": 23,
        "durability": 84,
        "power": 11,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Sharon Ventura",
        "alterEgos": "She-Thing",
        "aliases": [
          "She-Thing"
        ],
        "placeOfBirth": "Pullman, Washington",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Wanderer, former adventurer, wrestler, stunt woman, scuba diver, motorcycle performer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Former member of the Fantastic Four, Frightful Four, Unlimited Class Wrestling Federation, Thunderiders",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/477-ms-marvel-ii.jpg",
        "sm": "images/characters/sm/477-ms-marvel-ii.jpg",
        "md": "images/characters/md/477-ms-marvel-ii.jpg",
        "lg": "images/characters/lg/477-ms-marvel-ii.jpg"
      }
    },
    {
      "id": 478,
      "name": "Multiple Man",
      "slug": "478-multiple-man",
      "powerstats": {
        "intelligence": 63,
        "strength": 11,
        "speed": 23,
        "durability": 70,
        "power": 28,
        "combat": 62
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11'",
          "180 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "James Arthur",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Los Alamos, New Mexico",
        "firstAppearance": "GIANT-SIZE FANTASTIC FOUR #4",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Private investigator (formerly) Farmer, Adventurer",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "X-Factor Investigations (formerly) X-Factor, Fallen Angels, X-Corps, X-Corporation",
        "relatives": "Dr. Daniel Madrox (father, deceased), Joan Madrox (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/478-multiple-man.jpg",
        "sm": "images/characters/sm/478-multiple-man.jpg",
        "md": "images/characters/md/478-multiple-man.jpg",
        "lg": "images/characters/lg/478-multiple-man.jpg"
      }
    },
    {
      "id": 479,
      "name": "Mysterio",
      "slug": "479-mysterio",
      "powerstats": {
        "intelligence": 81,
        "strength": 10,
        "speed": 17,
        "durability": 40,
        "power": 82,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Quentin Beck",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nicholas Macabes",
          "Rudolph Hines",
          "Gerdes",
          "Doctor Ludwig Rinehart"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "Amazing Spider-Man #13 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal; former Hollywood special effects designer and stunt man",
        "base": "New York City, New York State (Earth-1610) formerly New York City, New York (Earth-616)"
      },
      "connections": {
        "groupAffiliation": "None; Former Sinister Six",
        "relatives": "Henrietta Beck (mother), Elmore Beck (father), Vincent (uncle), Maguire Beck (Jack O'Lantern) (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/479-mysterio.jpg",
        "sm": "images/characters/sm/479-mysterio.jpg",
        "md": "images/characters/md/479-mysterio.jpg",
        "lg": "images/characters/lg/479-mysterio.jpg"
      }
    },
    {
      "id": 480,
      "name": "Mystique",
      "slug": "480-mystique",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 23,
        "durability": 64,
        "power": 64,
        "combat": 74
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Yellow (without irises)",
        "hairColor": "Red / Orange"
      },
      "biography": {
        "fullName": "Raven Darkholme",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Mallory Brickman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Special operative for Germany and the United States governments, (former) German Freedom Fighter, special operative in the Weapon X Project Team",
        "base": "Arlington, Virginia"
      },
      "connections": {
        "groupAffiliation": "Founder and leader of the third Brotherhood of Evil Mutants, now known as Freedom Force; X-Factor, X-Men",
        "relatives": "Rogue (unofficial foster daughter), Ralph Brickman (husband), Gloria Brickman (daughter), Graydon Creed (son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/480-mystique.jpg",
        "sm": "images/characters/sm/480-mystique.jpg",
        "md": "images/characters/md/480-mystique.jpg",
        "lg": "images/characters/lg/480-mystique.jpg"
      }
    },
    {
      "id": 481,
      "name": "Namor",
      "slug": "481-namor",
      "powerstats": {
        "intelligence": 69,
        "strength": 95,
        "speed": 58,
        "durability": 70,
        "power": 73,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Atlantean",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "278 lb",
          "125 kg"
        ],
        "eyeColor": "Grey",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Namor McKenzie",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Imperius Rex",
          "Dr. G.W. Falton",
          "Sub-Mariner",
          "\"Subby\"",
          "Namor the First",
          "Avenging Son",
          "Old Man",
          "Rex",
          "Joe Pierre",
          "Lord of the Seven Seas",
          "the Scion of the Deep",
          "Phoenix"
        ],
        "placeOfBirth": "Atlantis",
        "firstAppearance": "Motion Picture Funnies Weekly #1 (April, 1939)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "King of Atlantis, Adventurer; former warrior, commando, CEO",
        "base": "Ultimate Universe; formerly New Atlantis, Utopia, San Francisco Bay, California; Atlantis; Necropolis, Wakanda; occasionally mobile"
      },
      "connections": {
        "groupAffiliation": "Cabal (founder), Invaders, Atlantis; formerly Illuminati, X-Men, Extinction Team, Phoenix Five, Defenders, Osborn's X-Men, Osborn's Cabal, Avengers, All-Winners Squad, Titans Three, Fantastic Four, Oracle Inc., Order, Deep Six (founder and leader); ally o",
        "relatives": "Elanna (maternal ancestor), Tanas (maternal ancestor), Zartra (maternal ancestor), Orrek (maternal distant relative), Stegor (maternal ancestor), Kamuu (maternal ancestor), Harran (maternal ancestor), Kalen (maternal ancestor), Ossem (maternal ancestor), Balaal (maternal ancestor), Thallo (maternal ancestor), Immanu (maternal great-grandfather-in-law, deceased), Thakorr (maternal grandfather, deceased), Korra (maternal grandmother), Wa-Korr (grandfather-in-law, presumed deceased), Wathan (father-in-law, presumed deceased), Tom Smallwood (father-in-law), Gladys Smallwood (mother-in-law), Zarina (maternal aunt), Namora's father (uncle), Daka (maternal uncle), Brynn (aunt-by-marriage/step-grandmother), Fen (mother, deceased), Leonard McKenzie (father, deceased), Experiment N2 (clone), Lawrence McKenzie (paternal half-brother), Dorma (wife / distant cousin, deceased), Marrina (wife), three unnamed children (by Marrina), Kamar (son, deceased), Black Moray (Leon McKenzie) (paternal half-nephew), Llyron McKenzie (paternal great-nephew), Dan Smallwood (brother-in-law), Namora (maternal cousin), Beemer (maternal cousin), Bobo (maternal cousin), Byrrahna (maternal cousin), Namita (maternal cousin), Daro (maternal cousin), Dara (maternal cousin), Seth (maternal cousin), Argus (maternal cousin), Arkus (maternal cousin), Byrrah (maternal cousin), Namorita (maternal 1st cousin once removed)."
      },
      "images": {
        "xs": "images/characters/xs/481-namor.jpg",
        "sm": "images/characters/sm/481-namor.jpg",
        "md": "images/characters/md/481-namor.jpg",
        "lg": "images/characters/lg/481-namor.jpg"
      }
    },
    {
      "id": 483,
      "name": "Namora",
      "slug": "483-namora",
      "powerstats": {
        "intelligence": 50,
        "strength": 85,
        "speed": 42,
        "durability": 42,
        "power": 48,
        "combat": 64
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "189 lb",
          "85 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Aquaria Nautica Neptunia",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sub-Mariner",
          "Avenging Daughter",
          "the Sea Beauty"
        ],
        "placeOfBirth": "Unnamed Atlantean outpost",
        "firstAppearance": "Marvel Mystery Comics #82 (1947)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Agents of Atlas, Long-time ally of Namor; Monster Hunters, Invaders, All Winners Squad; At one time or another was partnered with FBI Agent Jimmy Woo, Sun Girl, Venus, Golden Girl, Hulk",
        "relatives": "Namor (cousin), Talan (husband, deceased), Namorita (\"daughter\" cloned)"
      },
      "images": {
        "xs": "images/characters/xs/483-namora.jpg",
        "sm": "images/characters/sm/483-namora.jpg",
        "md": "images/characters/md/483-namora.jpg",
        "lg": "images/characters/lg/483-namora.jpg"
      }
    },
    {
      "id": 484,
      "name": "Namorita",
      "slug": "484-namorita",
      "powerstats": {
        "intelligence": 50,
        "strength": 72,
        "speed": 47,
        "durability": 70,
        "power": 37,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Namorita Prentiss",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kymaera",
          "Hard"
        ],
        "placeOfBirth": "Atlantis Outskirts",
        "firstAppearance": "SUB-MARINER Vol. 2 #50 (1972)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Superhero, formerly Leader of Atlantis",
        "base": "Mobile, formerly New Warriors headquarters and Atlantis"
      },
      "connections": {
        "groupAffiliation": "Formerly Council of Three, New Warriors, Fantastic Four, Soldiers of Misfortune, Water Children",
        "relatives": "Namora (mother); Talan (father, deceased); Namor, Byrrah, Dara, Arkus (first cousins once removed); Fen (great-aunt, deceased); Thakorr (great-grandfather, deceased); Korra (great-grandmother, presumed deceased); large extended family; Betty Prentiss (legal guardian, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/484-namorita.jpg",
        "sm": "images/characters/sm/484-namorita.jpg",
        "md": "images/characters/md/484-namorita.jpg",
        "lg": "images/characters/lg/484-namorita.jpg"
      }
    },
    {
      "id": 487,
      "name": "Nebula",
      "slug": "487-nebula",
      "powerstats": {
        "intelligence": 63,
        "strength": 52,
        "speed": 13,
        "durability": 50,
        "power": 42,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": "Luphomoid",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Avengers #257 (July, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Graces, United Front, former leader of a mercenary band",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/487-nebula.jpg",
        "sm": "images/characters/sm/487-nebula.jpg",
        "md": "images/characters/md/487-nebula.jpg",
        "lg": "images/characters/lg/487-nebula.jpg"
      }
    },
    {
      "id": 488,
      "name": "Negasonic Teenage Warhead",
      "slug": "488-negasonic-teenage-warhead",
      "powerstats": {
        "intelligence": 50,
        "strength": 7,
        "speed": 8,
        "durability": 10,
        "power": 45,
        "combat": 35
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Ellie Phimister",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Warhead"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New X-Men #115",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/488-negasonic-teenage-warhead.jpg",
        "sm": "images/characters/sm/488-negasonic-teenage-warhead.jpg",
        "md": "images/characters/md/488-negasonic-teenage-warhead.jpg",
        "lg": "images/characters/lg/488-negasonic-teenage-warhead.jpg"
      }
    },
    {
      "id": 489,
      "name": "Nick Fury",
      "slug": "489-nick-fury",
      "powerstats": {
        "intelligence": 75,
        "strength": 11,
        "speed": 23,
        "durability": 42,
        "power": 25,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "221 lb",
          "99 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown / White"
      },
      "biography": {
        "fullName": "Nicholas Joseph Fury",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Doyle",
          "The Mystery in the Mask",
          "Patch",
          "Scorpio"
        ],
        "placeOfBirth": "New York City",
        "firstAppearance": "Sgt. Fury and His Howling Commandos #1 (1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "S.H.I.E.L.D. director; former S.H.I.E.L.D. agent, intelligence agent, soldier and commando leader, parachuting instructor, stunt flyer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Secret Avengers, SHIELD (both incarnations); formerly Team Valkyrie, C.I.A., liaison to MI-5, O.S.S., Howling Commandos, U.S. Army",
        "relatives": "Jack Fury (father, deceased);\nunnamed mother;\nunnamed stepmother (deceased);\nDawn Fury (half-sister);\nJake Fury (half-brother);\nMikel Fury (son, deceased);\nJerry Sapristi (cousin);\nTina Sapristi (cousin by marriage);\nErnesto, Pietro, Giovanni, Maria, Rosa and Gabriella (1st cousins once removed);"
      },
      "images": {
        "xs": "images/characters/xs/489-nick-fury.jpg",
        "sm": "images/characters/sm/489-nick-fury.jpg",
        "md": "images/characters/md/489-nick-fury.jpg",
        "lg": "images/characters/lg/489-nick-fury.jpg"
      }
    },
    {
      "id": 490,
      "name": "Nightcrawler",
      "slug": "490-nightcrawler",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 47,
        "durability": 14,
        "power": 76,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'9'",
          "175 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Indigo"
      },
      "biography": {
        "fullName": "Kurt Wagner",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Somewhere in the Bavarian Alps",
        "firstAppearance": "GIANT-SIZE X-MEN #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Teacher",
        "base": "Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly Excalibur",
        "relatives": "Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased)."
      },
      "images": {
        "xs": "images/characters/xs/490-nightcrawler.jpg",
        "sm": "images/characters/sm/490-nightcrawler.jpg",
        "md": "images/characters/md/490-nightcrawler.jpg",
        "lg": "images/characters/lg/490-nightcrawler.jpg"
      }
    },
    {
      "id": 491,
      "name": "Nightwing",
      "slug": "491-nightwing",
      "powerstats": {
        "intelligence": 88,
        "strength": 11,
        "speed": 33,
        "durability": 28,
        "power": 36,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Dick Grayson",
        "alterEgos": "Batman II, Robin",
        "aliases": [
          "Freddie Dinardo",
          "Freddy Loyd",
          "The Target",
          "Renegade",
          "The Worlds Greatest Acrobat",
          "The Aerial Avenger",
          "Pixie Boots",
          "The Boy / Teen Wonder",
          "The Worlds Greatest Detective",
          "The Caped Crusader"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "as Dick Grayson and Robin) Detective Comics #38, (as Nightwing) Tales of the Teen Titans #44, (as Batman) Batman #512",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante and detective, former police officer, former Circus Acrobat",
        "base": "Wayne Tower, Gotham City; formerly the Batcave; formerly Bludhaven; formerly New York City"
      },
      "connections": {
        "groupAffiliation": "Batman Family and the JLA; formerly the Teen Titans, the New Titans, the Titans and the Outsiders",
        "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/491-nightwing.jpg",
        "sm": "images/characters/sm/491-nightwing.jpg",
        "md": "images/characters/md/491-nightwing.jpg",
        "lg": "images/characters/lg/491-nightwing.jpg"
      }
    },
    {
      "id": 495,
      "name": "Northstar",
      "slug": "495-northstar",
      "powerstats": {
        "intelligence": 50,
        "strength": 18,
        "speed": 83,
        "durability": 56,
        "power": 65,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jean-Paul Beaubier",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jean-Paul Martin"
        ],
        "placeOfBirth": "Montreal, Qu?bec, Canada",
        "firstAppearance": "X-Men #120 (1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former terrorist, adventurer, teacher, businessman, novelist, professional skier, trapeze artist, thief",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "None, formerly Hydra, Xavier Institute Faculty/Alpha Squadron (teacher/advisor), X-Men, Alpha Flight, Front de Lib?ration du Qu?bec/Cell Combattre",
        "relatives": "Jean-Baptiste Beaubier (father, deceased), unnamed mother (deceased), Louis Martin (adoptive father, deceased), unnamed adoptive mother (deceased), Jeanne-Marie Beaubier (Aurora, sister), Joanne Beaubier (adopted daughter, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/495-northstar.jpg",
        "sm": "images/characters/sm/495-northstar.jpg",
        "md": "images/characters/md/495-northstar.jpg",
        "lg": "images/characters/lg/495-northstar.jpg"
      }
    },
    {
      "id": 496,
      "name": "Nova",
      "slug": "496-nova",
      "powerstats": {
        "intelligence": 100,
        "strength": 85,
        "speed": 75,
        "durability": 100,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Richard Rider",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rich",
          "Bucket-Head",
          "Human Rocket",
          "Kid Nova",
          "",
          "Nova Prime",
          "Quasar"
        ],
        "placeOfBirth": "Queens, NY",
        "firstAppearance": "NOVA Vol. 1 #1 (September, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Superhero, also works parttime at Marvel Burger",
        "base": "Mobile & Xandar, also formerly New Warriors headquarters"
      },
      "connections": {
        "groupAffiliation": "Nova Corps formely United Front (Leader), New Warriors, Champions of Xandar, Secret Defenders, Defender for a day",
        "relatives": "Charles Rider (Father), Gloria Rider (Mother), Robbie Rider (Brother) , Ralph Rider (Uncle, deceased) , Ellen (aunt)"
      },
      "images": {
        "xs": "images/characters/xs/496-nova.jpg",
        "sm": "images/characters/sm/496-nova.jpg",
        "md": "images/characters/md/496-nova.jpg",
        "lg": "images/characters/lg/496-nova.jpg"
      }
    },
    {
      "id": 497,
      "name": "Nova",
      "slug": "497-nova",
      "powerstats": {
        "intelligence": 63,
        "strength": 60,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 35
      },
      "appearance": {
        "gender": "Female",
        "race": "Human / Cosmic",
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Frankie Raye",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Frances Hyatt",
          "Human Torch"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fantastic Four #164 (November, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "World-ship of Galactus"
      },
      "connections": {
        "groupAffiliation": "Defenders (Valkyrior), formerly Heralds of Galactus, Fantastic Four",
        "relatives": "\"Thomas Raye\" (Phineas T. Horton, stepfather, deceased), Thomas Raymond (Toro, possible biological father); Lanette Raye (mother)"
      },
      "images": {
        "xs": "images/characters/xs/497-nova.jpg",
        "sm": "images/characters/sm/497-nova.jpg",
        "md": "images/characters/md/497-nova.jpg",
        "lg": "images/characters/lg/497-nova.jpg"
      }
    },
    {
      "id": 498,
      "name": "Odin",
      "slug": "498-odin",
      "powerstats": {
        "intelligence": 100,
        "strength": 83,
        "speed": 67,
        "durability": 95,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "6'9",
          "206 cm"
        ],
        "weight": [
          "650 lb",
          "293 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Odin Borson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "All-Father,Sky-Father",
          "Atum-Re",
          "Woden",
          "Wotan",
          "Oden",
          "Orrin",
          "Harbard",
          "King of Asgard"
        ],
        "placeOfBirth": "Asgard",
        "firstAppearance": "Journey into Mystery #85",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Deity, Monarch of Asgard, Asgardian God of the Sky, Wind, Wisdom, Crafts, Time, and the Dead, Warrior",
        "base": "City of Asgard, Asgard"
      },
      "connections": {
        "groupAffiliation": "Asgardians, Council of Godheads",
        "relatives": "Buri (Tiwaz) (paternal grandfather), Bolthorn (maternal grandfather), Bor Burison (father, deceased), Bestla (mother), Mimir Burison (paternal uncle), Njord (paternal uncle), Vili, Ve, Cul (brothers), Frigga (wife), Freyr (father-in-law), Gullveig (sister-in-law), Thor (son by Jord), Vidar (son by Grid), Balder (son by Frigga), Tyr, Hermod (allegedly sons by Frigga), Angela (daughter by Frigga), Laussa (daughter by Frigga and Surtur), Loki (foster son), Hoder (nephew), Skadi (niece)"
      },
      "images": {
        "xs": "images/characters/xs/498-odin.jpg",
        "sm": "images/characters/sm/498-odin.jpg",
        "md": "images/characters/md/498-odin.jpg",
        "lg": "images/characters/lg/498-odin.jpg"
      }
    },
    {
      "id": 499,
      "name": "Offspring",
      "slug": "499-offspring",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 35,
        "durability": 99,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Luke O'Brian",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ernie McDunnagh",
          "Plastic Lad"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/499-offspring.jpg",
        "sm": "images/characters/sm/499-offspring.jpg",
        "md": "images/characters/md/499-offspring.jpg",
        "lg": "images/characters/lg/499-offspring.jpg"
      }
    },
    {
      "id": 503,
      "name": "One-Above-All",
      "slug": "503-one-above-all",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "unknown",
        "race": "Cosmic Entity",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "One Above All"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Doctor Strange Vol 2 #13",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Living Tribunal (creation)"
      },
      "images": {
        "xs": "images/characters/xs/503-one-above-all.jpg",
        "sm": "images/characters/sm/503-one-above-all.jpg",
        "md": "images/characters/md/503-one-above-all.jpg",
        "lg": "images/characters/lg/503-one-above-all.jpg"
      }
    },
    {
      "id": 504,
      "name": "Onslaught",
      "slug": "504-onslaught",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 33,
        "durability": 100,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "10'0",
          "305 cm"
        ],
        "weight": [
          "900 lb",
          "405 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Onslaught",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Charlie Silus",
          "Sir David The Great",
          "Charles Xavier",
          "Magneto",
          "That Which Shall Survive",
          "the Entity",
          "Dark Xavier"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Man Vol 1 #15 (May, 1996)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Would-be destroyer",
        "base": "Central Park Citadel, Astral Fortress"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Professor Charles Xavier (fusee, deceased); Magneto (fusee)"
      },
      "images": {
        "xs": "images/characters/xs/504-onslaught.jpg",
        "sm": "images/characters/sm/504-onslaught.jpg",
        "md": "images/characters/md/504-onslaught.jpg",
        "lg": "images/characters/lg/504-onslaught.jpg"
      }
    },
    {
      "id": 505,
      "name": "Oracle",
      "slug": "505-oracle",
      "powerstats": {
        "intelligence": 75,
        "strength": 11,
        "speed": 23,
        "durability": 28,
        "power": 19,
        "combat": 76
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "132 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Barbara Gordon",
        "alterEgos": "Batgirl",
        "aliases": [
          "Batgirl",
          "Babs; Barbie Doll; O; The Masked Maiden; the Dark Knight Damsel"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Suicide Squad #23 (Jan.1989)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Computer hacker and Coordinator of the Birds of Prey; Former student; former librarian; former vigilante",
        "base": "Metropolis, formerly Gotham City"
      },
      "connections": {
        "groupAffiliation": "Birds of Prey, Batman Family, Seven Soldiers of Victory, Suicide Squad, Justice League",
        "relatives": "Roger C. Gordon (father, deceased); Thelma (mother, deceased); James Gordon (uncle/adoptive father); Barbara Eileen Gordon (aunt/adoptive mother); James Gordon Jr. (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/505-oracle.jpg",
        "sm": "images/characters/sm/505-oracle.jpg",
        "md": "images/characters/md/505-oracle.jpg",
        "lg": "images/characters/lg/505-oracle.jpg"
      }
    },
    {
      "id": 506,
      "name": "Osiris",
      "slug": "506-osiris",
      "powerstats": {
        "intelligence": 75,
        "strength": 85,
        "speed": 60,
        "durability": 95,
        "power": 65,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Amon Tomaz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Shiruta, Kahndaq"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Isis (Sister, deceased), Black Adam (Brother-in-Law)"
      },
      "images": {
        "xs": "images/characters/xs/506-osiris.jpg",
        "sm": "images/characters/sm/506-osiris.jpg",
        "md": "images/characters/md/506-osiris.jpg",
        "lg": "images/characters/lg/506-osiris.jpg"
      }
    },
    {
      "id": 508,
      "name": "Ozymandias",
      "slug": "508-ozymandias",
      "powerstats": {
        "intelligence": 100,
        "strength": 18,
        "speed": 33,
        "durability": 20,
        "power": 49,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Adrian Veidt",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The World's Smartest Man"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Watchmen #1",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly The Crimebusters",
        "relatives": "Friedrich Werner Veidt (father), Ingrid Renata Veidt (mother)"
      },
      "images": {
        "xs": "images/characters/xs/508-ozymandias.jpg",
        "sm": "images/characters/sm/508-ozymandias.jpg",
        "md": "images/characters/md/508-ozymandias.jpg",
        "lg": "images/characters/lg/508-ozymandias.jpg"
      }
    },
    {
      "id": 509,
      "name": "Parademon",
      "slug": "509-parademon",
      "powerstats": {
        "intelligence": 9,
        "strength": 28,
        "speed": 17,
        "durability": 50,
        "power": 53,
        "combat": 25
      },
      "appearance": {
        "gender": "unknown",
        "race": "Parademon",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Apokalips",
        "firstAppearance": "New Gods #1",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Darkseid",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/509-parademon.jpg",
        "sm": "images/characters/sm/509-parademon.jpg",
        "md": "images/characters/md/509-parademon.jpg",
        "lg": "images/characters/lg/509-parademon.jpg"
      }
    },
    {
      "id": 514,
      "name": "Penguin",
      "slug": "514-penguin",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 12,
        "durability": 28,
        "power": 30,
        "combat": 45
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'2",
          "157 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Oswald Chesterfield Cobblepot",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "DETECTIVE COMICS #58 (December, 1941)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Trader",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Miranda Cobblepot (Aunt), Miranda (Mother, deceased), Father (deceased)"
      },
      "images": {
        "xs": "images/characters/xs/514-penguin.jpg",
        "sm": "images/characters/sm/514-penguin.jpg",
        "md": "images/characters/md/514-penguin.jpg",
        "lg": "images/characters/lg/514-penguin.jpg"
      }
    },
    {
      "id": 516,
      "name": "Phantom Girl",
      "slug": "516-phantom-girl",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 53,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tinya Wazzo",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1 (2004)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "United Planets, Bgztl"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/516-phantom-girl.jpg",
        "sm": "images/characters/sm/516-phantom-girl.jpg",
        "md": "images/characters/md/516-phantom-girl.jpg",
        "lg": "images/characters/lg/516-phantom-girl.jpg"
      }
    },
    {
      "id": 517,
      "name": "Phoenix",
      "slug": "517-phoenix",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Jean Grey",
        "alterEgos": "Jean Grey, White Phoenix of The Crown",
        "aliases": [
          "Redd Dayspring",
          "Marvel Girl"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Xavier Institute of Higher Learning, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men (founding member); Clan Rebellion, Muir Island X-Men; X-Factor/X-Terminators (founding member); Brides of Set",
        "relatives": "Rachel Summers (daughter from an alternate universe), X-Man (son from an alternate universe), Cyclops (ex-husband), Havok (former brother-in-law), Corsair (former father-in-law), Madelyne Pryor (clone), Cable (adoptive/biological son), Stryfe (cloned biological son), Genesis (grandson)"
      },
      "images": {
        "xs": "images/characters/xs/517-phoenix.jpg",
        "sm": "images/characters/sm/517-phoenix.jpg",
        "md": "images/characters/md/517-phoenix.jpg",
        "lg": "images/characters/lg/517-phoenix.jpg"
      }
    },
    {
      "id": 518,
      "name": "Plantman",
      "slug": "518-plantman",
      "powerstats": {
        "intelligence": 63,
        "strength": 60,
        "speed": 25,
        "durability": 55,
        "power": 61,
        "combat": 25
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "193 lb",
          "87 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Grey"
      },
      "biography": {
        "fullName": "Samuel Smithers",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Blackheath"
        ],
        "placeOfBirth": "London, England",
        "firstAppearance": "Strange Tales #113 (October, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional Criminal, formerly Gardner",
        "base": "A submarine somewhere in the Atlantic Ocean, formerly London, United Kingdom"
      },
      "connections": {
        "groupAffiliation": "Formerly Thunderbolts (as Blackheath), Crime Wave, Defenders (Villains) , New Enforcers, former associate of the Maggia under Count Nefaria, ally of Wizard.",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/518-plantman.jpg",
        "sm": "images/characters/sm/518-plantman.jpg",
        "md": "images/characters/md/518-plantman.jpg",
        "lg": "images/characters/lg/518-plantman.jpg"
      }
    },
    {
      "id": 520,
      "name": "Plastic Man",
      "slug": "520-plastic-man",
      "powerstats": {
        "intelligence": 50,
        "strength": 63,
        "speed": 23,
        "durability": 100,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "178 lb",
          "80 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Patrick O'Brian",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Police Comics #1 (August, 1941)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Government Agent",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "The FBI; formerly the Justice League of America; the All-Star Squadron and the Freedom Fighters",
        "relatives": "Offspring (son)"
      },
      "images": {
        "xs": "images/characters/xs/520-plastic-man.jpg",
        "sm": "images/characters/sm/520-plastic-man.jpg",
        "md": "images/characters/md/520-plastic-man.jpg",
        "lg": "images/characters/lg/520-plastic-man.jpg"
      }
    },
    {
      "id": 521,
      "name": "Plastique",
      "slug": "521-plastique",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 60,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "123 lb",
          "55 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Bette Sans Souci",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fury of Firestorm #7",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Government Agent, former Terrorist, Mercenary",
        "base": "Mobile; formerly Quebec, Canada"
      },
      "connections": {
        "groupAffiliation": "Suicide Squad, formerly Bomb Squad, Extreme Justice",
        "relatives": "Nathaniel Adam (Captain Atom,husband), Margaret Eiling (step-daughter), Randall Eiling (step-son)"
      },
      "images": {
        "xs": "images/characters/xs/521-plastique.jpg",
        "sm": "images/characters/sm/521-plastique.jpg",
        "md": "images/characters/md/521-plastique.jpg",
        "lg": "images/characters/lg/521-plastique.jpg"
      }
    },
    {
      "id": 522,
      "name": "Poison Ivy",
      "slug": "522-poison-ivy",
      "powerstats": {
        "intelligence": 81,
        "strength": 14,
        "speed": 21,
        "durability": 40,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Pamela Isley",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Seattle, Washington",
        "firstAppearance": "Batman #181 (June 1966)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Criminal, Botanist",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Formerly Injustice Gang, Suicide Squad, Harley Quinn, Secret Society of Super Villains, Joker League of Anarchy",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/522-poison-ivy.jpg",
        "sm": "images/characters/sm/522-poison-ivy.jpg",
        "md": "images/characters/md/522-poison-ivy.jpg",
        "lg": "images/characters/lg/522-poison-ivy.jpg"
      }
    },
    {
      "id": 523,
      "name": "Polaris",
      "slug": "523-polaris",
      "powerstats": {
        "intelligence": 63,
        "strength": 73,
        "speed": 42,
        "durability": 50,
        "power": 100,
        "combat": 45
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Lorna Dane",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pestilence",
          "formerly Malice",
          "Polarity",
          "Magnetrix",
          "M-2",
          "Magneto the Second"
        ],
        "placeOfBirth": "Presumably northern California - not confirmed",
        "firstAppearance": "X-Men #49 (October, 1968)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former U.S. government operative, former graduate student in geophysics",
        "base": "Serval Industries, Virginia; formerly X-Factor Investigations Headquarters, Starjammer; Xavier Institute for Higher Learning, Salem Center, Westchester County, New York; Genosha; X-Factor HQ, Washington D.C., Maryland; Mutant Research Center, Muir Island;"
      },
      "connections": {
        "groupAffiliation": "X-Factor (Serval Industries); formerly X-Factor Investigations, Starjammers, X-Men, Horsemen of Apocalypse, Genoshan Cabinet, X-Factor (Government), The Twelve, Acolytes, Muir Island X-Men, Defenders for a Day, Marauders (possessed by Malice)",
        "relatives": "Joseph (father's clone/paternal uncle, deceased), Magneto (father), Magda Lehnsherr (step-mother, deceased), Zaladane (sister, status uncertain), Anya Lehnsherr (paternal half-sister, deceased), Scarlet Witch (paternal half-sister), Quicksilver (paternal half-brother), Nightcrawler (half-brother-in-law), Vision (half-brother-in-law), Crystal (half-sister-in-law), Nocturne (half-niece), Speed (half-nephew), Wiccan (half-nephew), Luna Maximoff (half-niece)"
      },
      "images": {
        "xs": "images/characters/xs/523-polaris.jpg",
        "sm": "images/characters/sm/523-polaris.jpg",
        "md": "images/characters/md/523-polaris.jpg",
        "lg": "images/characters/lg/523-polaris.jpg"
      }
    },
    {
      "id": 524,
      "name": "Power Girl",
      "slug": "524-power-girl",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": "Kryptonian",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "blue",
        "hairColor": "blond"
      },
      "biography": {
        "fullName": "Kara Zor-L",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Karen Starr",
          "Nightwing"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "All-Star Comics #58 (January/February 1976)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America, Justice League Europe, Infinity, Inc., Sovereign Seven",
        "relatives": "Zor-L (father, deceased), Allura (mother, deceased), Jor-L (uncle, deceased), Lora (aunt, deceased), Kal-L (Earth-Two Superman, cousin and adopted father, deceased), Earth-Two Lois Lane (adopted mother, deceased), Equinox (son, deceased), Kara Zor-El (alternate universe version)"
      },
      "images": {
        "xs": "images/characters/xs/524-power-girl.jpg",
        "sm": "images/characters/sm/524-power-girl.jpg",
        "md": "images/characters/md/524-power-girl.jpg",
        "lg": "images/characters/lg/524-power-girl.jpg"
      }
    },
    {
      "id": 526,
      "name": "Predator",
      "slug": "526-predator",
      "powerstats": {
        "intelligence": 63,
        "strength": 30,
        "speed": 25,
        "durability": 85,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Male",
        "race": "Yautja",
        "height": [
          "7'0",
          "213 cm"
        ],
        "weight": [
          "520 lb",
          "234 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Yautja",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Hunters",
          "Yautja",
          "Hish"
        ],
        "placeOfBirth": "Yautja Prime",
        "firstAppearance": "Predator (1987)",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/526-predator.jpg",
        "sm": "images/characters/sm/526-predator.jpg",
        "md": "images/characters/md/526-predator.jpg",
        "lg": "images/characters/lg/526-predator.jpg"
      }
    },
    {
      "id": 527,
      "name": "Professor X",
      "slug": "527-professor-x",
      "powerstats": {
        "intelligence": 100,
        "strength": 8,
        "speed": 12,
        "durability": 14,
        "power": 100,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Charles Francis Xavier",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Prof",
          "Dr. X",
          "Professor Xavier",
          "formerly Prisoner M-13"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Mutant leader, mutant rights activist, geneticist, teacher, adventurer, heir, formerly headmaster, soldier (US Army)",
        "base": "Formerly Utopia, San Francisco Bay, California; Genosha; Xavier Institute, Salem Center, Westchester County, New York; Imperial Palace, Chandilar, Shi'ar Empire; Columbia University, Manhattan, New York City, New York"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men (founder; formerly teacher & leader), Illuminati, Genoshan Excalibur, Brotherhood of Evil Mutants (leader), Cadre K, Generation X (founder), Starjammers, The Twelve, New Mutants (founder, teacher & leader), United States Army, X-Corporation",
        "relatives": "Brian Xavier (father, deceased), Sharon Xavier (mother, deceased), Cassandra Nova (sister), Kurt Marko (stepfather, deceased), Cain Marko (Juggernaut, stepbrother), Lilandra (ex-wife), David Charles Haller (Legion, son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/527-professor-x.jpg",
        "sm": "images/characters/sm/527-professor-x.jpg",
        "md": "images/characters/md/527-professor-x.jpg",
        "lg": "images/characters/lg/527-professor-x.jpg"
      }
    },
    {
      "id": 528,
      "name": "Professor Zoom",
      "slug": "528-professor-zoom",
      "powerstats": {
        "intelligence": 94,
        "strength": 10,
        "speed": 100,
        "durability": 20,
        "power": 83,
        "combat": 20
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "179 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Strawberry Blond"
      },
      "biography": {
        "fullName": "Eobard Thawne",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Reverse Flash",
          "Black Flash",
          "Adrian Zoom",
          "Mister Zyx"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash #139 (September, 1963)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Central Cityplex, 25th Century"
      },
      "connections": {
        "groupAffiliation": "Formerly Secret Society of Super-Villains, Black Lantern Corps, White Lantern Corps",
        "relatives": "Robern Thawne (brother), Malcolm Thawne (Cobalt Blue) (distant ancestor), President Thawne, Meloni Thawne, Bart Allen, Owen Mercer (descendants) - see Allen Family for complete family tree"
      },
      "images": {
        "xs": "images/characters/xs/528-professor-zoom.jpg",
        "sm": "images/characters/sm/528-professor-zoom.jpg",
        "md": "images/characters/md/528-professor-zoom.jpg",
        "lg": "images/characters/lg/528-professor-zoom.jpg"
      }
    },
    {
      "id": 529,
      "name": "Psylocke",
      "slug": "529-psylocke",
      "powerstats": {
        "intelligence": 63,
        "strength": 33,
        "speed": 25,
        "durability": 40,
        "power": 100,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Purple"
      },
      "biography": {
        "fullName": "Elizabeth Braddock",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Betsy",
          "Captain Britain",
          "Lady Mandarin"
        ],
        "placeOfBirth": "Braddock Manor, England",
        "firstAppearance": "Captain Britain #8 (December, 1976) / New Mutants Annual #2 (October, 1986) (US)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, formerly a STRIKE operative, fashion model",
        "base": "Xavier Institute, Salem Center, Westchester County, New York formerly Braddock Manor, United Kingdom; Australian Outback"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly agent of S.T.R.I.K.E., ally of R.C.X., partner of Captain U.K.",
        "relatives": "John Braddock (ancestor, possibly grandfather); Sir James Braddock (father, deceased); Lady Elizabeth Braddock (mother, deceased); Brian Braddock (Captain Britain) (twin brother); Jamie Braddock (brother, deceased); Meggan Braddock (sister-in-law);"
      },
      "images": {
        "xs": "images/characters/xs/529-psylocke.jpg",
        "sm": "images/characters/sm/529-psylocke.jpg",
        "md": "images/characters/md/529-psylocke.jpg",
        "lg": "images/characters/lg/529-psylocke.jpg"
      }
    },
    {
      "id": 530,
      "name": "Punisher",
      "slug": "530-punisher",
      "powerstats": {
        "intelligence": 69,
        "strength": 16,
        "speed": 21,
        "durability": 45,
        "power": 42,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0'",
          "183 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Frank Castle",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Big Nothing",
          "Major Bateman",
          "Ted Bishop",
          "Cliff Callador",
          "Castigo",
          "Chaloner",
          "Fred D'Amato",
          "Eastman",
          "Charles Fort",
          "Frank Loomis",
          "McRook",
          "Melchior",
          "Joe Rainey",
          "Frank Rook",
          "Richard Rook",
          "Tony Knowlen Ross",
          "Francis Stronghold",
          "Johnny Tower",
          "Dmitri Velikoff",
          "Fra"
        ],
        "placeOfBirth": "Queens, New York",
        "firstAppearance": "AMAZING SPIDER-MAN #129",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former United States Marine turned professional vigilante",
        "base": "Mobile, usually in New York City"
      },
      "connections": {
        "groupAffiliation": "None; Formerly Secret Avengers, Daredevil's Unnamed Super-Hero Team, Green Berets, U.S. Marine Corps",
        "relatives": "Maria Castle (Wife, deceased), Christie Castle (Daughter, deceased), Frank Castle Junior (Son, deceased), Mario Castle (Father, deceased), Louisa Castle (Mother, deceased), Rocco Castiglione (Uncle, deceased), Esmerelda Castiglione (Aunt, deceased), Michael Castle (Brother, stillborn, deceased)."
      },
      "images": {
        "xs": "images/characters/xs/530-punisher.jpg",
        "sm": "images/characters/sm/530-punisher.jpg",
        "md": "images/characters/md/530-punisher.jpg",
        "lg": "images/characters/lg/530-punisher.jpg"
      }
    },
    {
      "id": 531,
      "name": "Purple Man",
      "slug": "531-purple-man",
      "powerstats": {
        "intelligence": 56,
        "strength": 10,
        "speed": 8,
        "durability": 30,
        "power": 92,
        "combat": 10
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Purple",
        "hairColor": "Purple"
      },
      "biography": {
        "fullName": "Zebediah Killgrave",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kilgrave"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Daredevil #4 (October, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal, Megalomaniac, Former spy",
        "base": "New York City, New York, USA; formerly Canada, Croatia, formerly Yugoslavia"
      },
      "connections": {
        "groupAffiliation": "Formerly Purple Children (leader and father), Villains for Hire, Hood's gang, partner of Electro, his own band of criminals",
        "relatives": "Melanie Killgrave (ex-wife); Persuasion (Kara Killgrave) (daughter); Joe (son); Shallah (daughter); Connor (son); Jamie (son); Unnamed daughter"
      },
      "images": {
        "xs": "images/characters/xs/531-purple-man.jpg",
        "sm": "images/characters/sm/531-purple-man.jpg",
        "md": "images/characters/md/531-purple-man.jpg",
        "lg": "images/characters/lg/531-purple-man.jpg"
      }
    },
    {
      "id": 532,
      "name": "Pyro",
      "slug": "532-pyro",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 54,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "150 lb",
          "68 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "St. John Allerdyce",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Sydney, Australia",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Former government agent, terrorist, bodyguard, novelist, journalist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Freedom Force, Brotherhood of Evil Mutants",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/532-pyro.jpg",
        "sm": "images/characters/sm/532-pyro.jpg",
        "md": "images/characters/md/532-pyro.jpg",
        "lg": "images/characters/lg/532-pyro.jpg"
      }
    },
    {
      "id": 535,
      "name": "Question",
      "slug": "535-question",
      "powerstats": {
        "intelligence": 81,
        "strength": 14,
        "speed": 27,
        "durability": 35,
        "power": 20,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Charles Victor Szasz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Vic Sage"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Blue Beetle (Charlton) Vol 4 #1 (June, 1967)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Television Investigative Journalist",
        "base": "Hub City; Chicago, Gotham City, Metropolis"
      },
      "connections": {
        "groupAffiliation": "Formerly L.A.W., JLA, Black Lantern Corps",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/535-question.jpg",
        "sm": "images/characters/sm/535-question.jpg",
        "md": "images/characters/md/535-question.jpg",
        "lg": "images/characters/lg/535-question.jpg"
      }
    },
    {
      "id": 536,
      "name": "Quicksilver",
      "slug": "536-quicksilver",
      "powerstats": {
        "intelligence": 63,
        "strength": 28,
        "speed": 100,
        "durability": 60,
        "power": 81,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Silver"
      },
      "biography": {
        "fullName": "Pietro Django Maximoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pietro Frank",
          "Gypsy Davey",
          "Mateo Maximoff"
        ],
        "placeOfBirth": "Wundagore Mountain, Transia (in Eastern Europe)",
        "firstAppearance": "X-MEN Vol. 1 #4",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "(current) Adventurer, (former) Terrorist, officer of the Inhumans militia, United States government operative",
        "base": "Currently a castle on the Hudson River in upstate New York that is owned by the High Evolutionary; (former) Transia; Avengers Mansion, Manhattan; Avengers Compound, Palos Verdes, California; X-Factor headquarters, Washington D. C."
      },
      "connections": {
        "groupAffiliation": "Avengers, unofficial member of the Royal Family of the Inhumans, (former) Brotherhood of Evil Mutants I, X-Factor II",
        "relatives": "Wanda Maximoff (Scarlet Witch, sister), Magnus (Magneto, father), Magda (mother, deceased), Django Maximoff (adoptive father), Marya Maximoff (adoptive mother, deceased), Crystal (wife), Maximoff, Luna (daughter), Medusa (sister-in-law), Black Bolt, Gorgon, Karnak, Triton, Maximus (cousins by marriage), Vision (ex-brother-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/536-quicksilver.jpg",
        "sm": "images/characters/sm/536-quicksilver.jpg",
        "md": "images/characters/md/536-quicksilver.jpg",
        "lg": "images/characters/lg/536-quicksilver.jpg"
      }
    },
    {
      "id": 537,
      "name": "Quill",
      "slug": "537-quill",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 23,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "124 lb",
          "56 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Maxwell Jordan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Max"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New X-Men: Academy X #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "X-Mansion"
      },
      "connections": {
        "groupAffiliation": "Corsairs",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/537-quill.jpg",
        "sm": "images/characters/sm/537-quill.jpg",
        "md": "images/characters/md/537-quill.jpg",
        "lg": "images/characters/lg/537-quill.jpg"
      }
    },
    {
      "id": 538,
      "name": "Ra's Al Ghul",
      "slug": "538-ras-al-ghul",
      "powerstats": {
        "intelligence": 100,
        "strength": 28,
        "speed": 32,
        "durability": 42,
        "power": 27,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "215 lb",
          "97 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Grey"
      },
      "biography": {
        "fullName": "Ra's Al Ghul",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Demon's Head"
        ],
        "placeOfBirth": "Egypt",
        "firstAppearance": "Batman #232 (June, 1971)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Eco Terrorist, Businessman, Cult Leader",
        "base": "mobile"
      },
      "connections": {
        "groupAffiliation": "League of Assassins",
        "relatives": "The Sensei (father), White Ghost (Dusan al Ghul) (son), Talia al Ghul (daughter), Nyssa Raatko (daughter), Robin V (Damian Wayne) (grandson)"
      },
      "images": {
        "xs": "images/characters/xs/538-ras-al-ghul.jpg",
        "sm": "images/characters/sm/538-ras-al-ghul.jpg",
        "md": "images/characters/md/538-ras-al-ghul.jpg",
        "lg": "images/characters/lg/538-ras-al-ghul.jpg"
      }
    },
    {
      "id": 541,
      "name": "Raphael",
      "slug": "541-raphael",
      "powerstats": {
        "intelligence": 63,
        "strength": 17,
        "speed": 50,
        "durability": 65,
        "power": 59,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teenage Mutant Ninja Turtles #1",
        "publisher": "IDW Publishing",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Leonardo (brother), Donatello (brother), Michelangelo (brother)"
      },
      "images": {
        "xs": "images/characters/xs/541-raphael.jpg",
        "sm": "images/characters/sm/541-raphael.jpg",
        "md": "images/characters/md/541-raphael.jpg",
        "lg": "images/characters/lg/541-raphael.jpg"
      }
    },
    {
      "id": 542,
      "name": "Raven",
      "slug": "542-raven",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 29,
        "durability": 70,
        "power": 84,
        "combat": 40
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Indigo",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Rachel Roth",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pride",
          "Dark Raven"
        ],
        "placeOfBirth": "Azarath",
        "firstAppearance": "DC Comics Presents #26 (October, 1980)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Adventurer, high school student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Teen Titans, formerly Sentinels of Magic",
        "relatives": "Trigon (father), Angela Roth (mother, deceased), Gluttony, Greed, Lust, Wrath, Envy, Sloth (half-brothers, status unknown)"
      },
      "images": {
        "xs": "images/characters/xs/542-raven.jpg",
        "sm": "images/characters/sm/542-raven.jpg",
        "md": "images/characters/md/542-raven.jpg",
        "lg": "images/characters/lg/542-raven.jpg"
      }
    },
    {
      "id": 543,
      "name": "Ray",
      "slug": "543-ray",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 92,
        "durability": 100,
        "power": 100,
        "combat": 20
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Ray Terrill",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Ray #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Freelance Computer Programmer and Software Designer",
        "base": "Philadelphia, Pennsylvania"
      },
      "connections": {
        "groupAffiliation": "Freedom Fighters, formerly Justice League of America, Justice League Task Force, Young Justice, JSA Reserves, Forgotten Heroes, Justice League Internationa",
        "relatives": "Happy Terrill (father), Nadine Terrill (mother), Joshua Terrill (Spitfire, brother), Thomas Terrill (uncle/foster father, deceased), Hank Terrill (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/543-ray.jpg",
        "sm": "images/characters/sm/543-ray.jpg",
        "md": "images/characters/md/543-ray.jpg",
        "lg": "images/characters/lg/543-ray.jpg"
      }
    },
    {
      "id": 545,
      "name": "Red Arrow",
      "slug": "545-red-arrow",
      "powerstats": {
        "intelligence": 63,
        "strength": 16,
        "speed": 25,
        "durability": 20,
        "power": 23,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Roy Harper",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Arsenal",
          "Speedy"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Speedy) More Fun Comics # 73(Nov. 1941); (as Arsenal) The New Titans # 99 (July 1993); (as Red Arrow) Justice League of America Vol. 2 # 7 (May 2007)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; intelligence agent; musician",
        "base": "The Hall & JLA Watchtower; New York City; formerly Titans Tower, Station Markovia, and Gabriel's Horn"
      },
      "connections": {
        "groupAffiliation": "Titans, Justice League of America, formerly Outsiders, Teen Titans, Checkmate, Central Bureau of Investigations",
        "relatives": "Roy William Harper, Sr. (father, deceased); Brave Bow (adoptive father, deceased); Oliver \"Ollie\" Queen (Green Arrow - adoptive father); Jim Harper (Guardian- great-uncle); Lian Harper (daughter), Vandal Savage (ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/545-red-arrow.jpg",
        "sm": "images/characters/sm/545-red-arrow.jpg",
        "md": "images/characters/md/545-red-arrow.jpg",
        "lg": "images/characters/lg/545-red-arrow.jpg"
      }
    },
    {
      "id": 546,
      "name": "Red Hood",
      "slug": "546-red-hood",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 23,
        "durability": 28,
        "power": 35,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jason Todd",
        "alterEgos": "Robin II",
        "aliases": [
          "Robin",
          "Red Robin",
          "Batman",
          "Nightwing",
          "Arkham Knight"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #635",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Mercenary, Vigilante",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "formerly Batman Family, Teen Titans",
        "relatives": "Willis Todd (father, deceased); Sheila Haywood (mother, deceased); Catherine Ann Todd (adoptive mother, deceased), Bruce Wayne (adoptive father), Dick Grayson and Tim Drake (adoptive brothers)"
      },
      "images": {
        "xs": "images/characters/xs/546-red-hood.jpg",
        "sm": "images/characters/sm/546-red-hood.jpg",
        "md": "images/characters/md/546-red-hood.jpg",
        "lg": "images/characters/lg/546-red-hood.jpg"
      }
    },
    {
      "id": 547,
      "name": "Red Hulk",
      "slug": "547-red-hulk",
      "powerstats": {
        "intelligence": 50,
        "strength": 100,
        "speed": 47,
        "durability": 85,
        "power": 82,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "7'0",
          "213 cm"
        ],
        "weight": [
          "1400 lb",
          "630 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Thaddeus E. Ross",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rulk",
          "Hulk",
          "Thunderbolt",
          "General Ross"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Incredible Hulk #1 (May, 1962)(as General Ross), Hulk Vol 2 #1 (March, 2008) (as Red Hulk)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Lieutenant general in US Air Force",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Code Red, AIM; Formerly Offenders",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/547-red-hulk.jpg",
        "sm": "images/characters/sm/547-red-hulk.jpg",
        "md": "images/characters/md/547-red-hulk.jpg",
        "lg": "images/characters/lg/547-red-hulk.jpg"
      }
    },
    {
      "id": 548,
      "name": "Red Mist",
      "slug": "548-red-mist",
      "powerstats": {
        "intelligence": 25,
        "strength": 10,
        "speed": 23,
        "durability": 14,
        "power": 20,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Chris Genovese",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Red Mist"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Kick-Ass #5",
        "publisher": "Icon Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Johnny G (father)"
      },
      "images": {
        "xs": "images/characters/xs/548-red-mist.jpg",
        "sm": "images/characters/sm/548-red-mist.jpg",
        "md": "images/characters/md/548-red-mist.jpg",
        "lg": "images/characters/lg/548-red-mist.jpg"
      }
    },
    {
      "id": 549,
      "name": "Red Robin",
      "slug": "549-red-robin",
      "powerstats": {
        "intelligence": 81,
        "strength": 11,
        "speed": 27,
        "durability": 32,
        "power": 29,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tim Drake",
        "alterEgos": "Robin III",
        "aliases": [
          "Alvin Draper",
          "Batman",
          "Robin",
          "Timothy Wayne",
          "Time Drake"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "Batman #436 (August, 1989)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City; Titans Tower, San Francisco"
      },
      "connections": {
        "groupAffiliation": "Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice",
        "relatives": "Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Dick Grayson (adoptive brother), Jason Todd (adoptive brother), Cassandra Cain (adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/549-red-robin.jpg",
        "sm": "images/characters/sm/549-red-robin.jpg",
        "md": "images/characters/md/549-red-robin.jpg",
        "lg": "images/characters/lg/549-red-robin.jpg"
      }
    },
    {
      "id": 550,
      "name": "Red Skull",
      "slug": "550-red-skull",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 19,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Johann Shmidt",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Dell Rusk",
          "Bettman P. Lyles",
          "the Agent of a Thousand Faces",
          "The Man",
          "Cyrus Fenton",
          "Teacher",
          "Tod March",
          "John Smith",
          "Aleksander Lukin."
        ],
        "placeOfBirth": "An unidentified village in Germany",
        "firstAppearance": "Captain America Comics #1 (1941), (modern) Tales of Suspense #66 (1965)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Special operative in the government of Germany's Third Reich, former leader of most currently active Nazi subversives throughout the world, former ally of THEM and A.I.M., former leader of the Nevada-based fragment of Hydra, leader of the People's Militia",
        "relatives": "Hermann Shmidt (father, deceased), Martha Shmidt (mother, deceased), Sinthea Shmidt (Mother Superior/Sin, daughter)"
      },
      "images": {
        "xs": "images/characters/xs/550-red-skull.jpg",
        "sm": "images/characters/sm/550-red-skull.jpg",
        "md": "images/characters/md/550-red-skull.jpg",
        "lg": "images/characters/lg/550-red-skull.jpg"
      }
    },
    {
      "id": 551,
      "name": "Red Tornado",
      "slug": "551-red-tornado",
      "powerstats": {
        "intelligence": 75,
        "strength": 38,
        "speed": 67,
        "durability": 60,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "325 lb",
          "146 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "John Smith",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ulthoon",
          "Tornado Tyrant of Rann",
          "Tornado Champion",
          "Tornado Man Dreaming",
          "\"Reddy\""
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "As Red Tornado: Justice League of America #64, As Ulthoon: Mystery in Space #61",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Happy Harbor, Rhode Island"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, formerly Parliament of Vapors, T.O. Morrow, Justice Society of America, Young Justice, Primal Force, Leymen, Donna Troy",
        "relatives": "T.O. Morrow (creator/father),Red Volcano (brother; deceased), Red Inferno (brother; deceased), Red Torpedo (sister; deceased), Tomorrow Woman (\"sister\"), Kathy Sutton (wife), Traya Sutton (adoptive daughter)"
      },
      "images": {
        "xs": "images/characters/xs/551-red-tornado.jpg",
        "sm": "images/characters/sm/551-red-tornado.jpg",
        "md": "images/characters/md/551-red-tornado.jpg",
        "lg": "images/characters/lg/551-red-tornado.jpg"
      }
    },
    {
      "id": 556,
      "name": "Rhino",
      "slug": "556-rhino",
      "powerstats": {
        "intelligence": 25,
        "strength": 80,
        "speed": 43,
        "durability": 90,
        "power": 36,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "710 lb",
          "320 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Aleksei Mikhailovich Sytsevich",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Alex O'Hirn",
          "Mecha-Rhino"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #41",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional Criminal ,Henchman of the Russian Mafia",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "Sinister Syndicate",
        "relatives": "Miriam Sytsevich (mother, deceased), Alexia (niece, lastname unrevealed), unnamed grandmother"
      },
      "images": {
        "xs": "images/characters/xs/556-rhino.jpg",
        "sm": "images/characters/sm/556-rhino.jpg",
        "md": "images/characters/md/556-rhino.jpg",
        "lg": "images/characters/lg/556-rhino.jpg"
      }
    },
    {
      "id": 557,
      "name": "Rick Flag",
      "slug": "557-rick-flag",
      "powerstats": {
        "intelligence": 88,
        "strength": 11,
        "speed": 23,
        "durability": 28,
        "power": 19,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "189 lb",
          "85 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Richard Rogers Flag",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Brave and the Bold #25 (September 1959)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Government Agent, Covert Ops field Commander",
        "base": "Belle Reve, Louisiana"
      },
      "connections": {
        "groupAffiliation": "Suicide Squad, Task Force X",
        "relatives": "Richard Flag, Sr. (father, deceased); Richard Flag III (son); Karin Grace (mother of child)"
      },
      "images": {
        "xs": "images/characters/xs/557-rick-flag.jpg",
        "sm": "images/characters/sm/557-rick-flag.jpg",
        "md": "images/characters/md/557-rick-flag.jpg",
        "lg": "images/characters/lg/557-rick-flag.jpg"
      }
    },
    {
      "id": 558,
      "name": "Riddler",
      "slug": "558-riddler",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 10,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Edward Nigma",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "E. Nigma",
          "Edward E. Nigma"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #140 (1948)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/558-riddler.jpg",
        "sm": "images/characters/sm/558-riddler.jpg",
        "md": "images/characters/md/558-riddler.jpg",
        "lg": "images/characters/lg/558-riddler.jpg"
      }
    },
    {
      "id": 559,
      "name": "Rip Hunter",
      "slug": "559-rip-hunter",
      "powerstats": {
        "intelligence": 100,
        "strength": 8,
        "speed": 8,
        "durability": 10,
        "power": 100,
        "combat": 25
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Richard Hunter",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Time Lord",
          "Time Master",
          "Boppy",
          "Dr. Hunter",
          "Mr",
          "Hunter",
          "Carter"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Showcase #20",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Time Lab, Arizona"
      },
      "connections": {
        "groupAffiliation": "Formerly leader of the Time Masters; former member of the Forgotten Heroes; former member of the Linear Men, Booster Gold International (BGI)",
        "relatives": "Michael Carter, (Booster Gold, father),  Unknown (mother), Jonar Carter (grandfather), Ellen Carter (grandmother, deceased), Michelle Carter (Goldstar) (aunt), Daniel Carter (21st century ancestor), Rose Levin (ancestor), Dan Hunter (cousin),"
      },
      "images": {
        "xs": "images/characters/xs/559-rip-hunter.jpg",
        "sm": "images/characters/sm/559-rip-hunter.jpg",
        "md": "images/characters/md/559-rip-hunter.jpg",
        "lg": "images/characters/lg/559-rip-hunter.jpg"
      }
    },
    {
      "id": 561,
      "name": "Robin",
      "slug": "561-robin",
      "powerstats": {
        "intelligence": 88,
        "strength": 11,
        "speed": 27,
        "durability": 28,
        "power": 32,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Dick Grayson",
        "alterEgos": "Batman II, Nightwing",
        "aliases": [
          "Renegade",
          "The Target",
          "Freddie Dinardo"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #38 (April, 1940)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Wayne Tower, Gotham City; formerly the Batcave;  formerly Bl?dhaven;  formerly New York City"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Batman Incorporated, Justice League; formerly Teen Titans, Outsiders, Bludhaven Police Department, Secret Society of Super-Villains",
        "relatives": "John Grayson (father), Mary Grayson (mother), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Jason Todd (adoptive brother), Tim Drake (adoptive brother), Cassandra Cain (adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/561-robin.jpg",
        "sm": "images/characters/sm/561-robin.jpg",
        "md": "images/characters/md/561-robin.jpg",
        "lg": "images/characters/lg/561-robin.jpg"
      }
    },
    {
      "id": 562,
      "name": "Robin II",
      "slug": "562-robin-ii",
      "powerstats": {
        "intelligence": 75,
        "strength": 11,
        "speed": 27,
        "durability": 28,
        "power": 28,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Jason Todd",
        "alterEgos": "Red Hood",
        "aliases": [
          "Red Hood",
          "Red Robin",
          "Batman",
          "Nightwing",
          "Wingman",
          "Jaybird",
          "Arkham Knight"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Detective Comics #524",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Teen Titans, Challengers from Beyond",
        "relatives": "Willis Todd (father), Sheila Haywood (mother), Catherine Todd (step-mother), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Timothy Drake (Robin III, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/562-robin-ii.jpg",
        "sm": "images/characters/sm/562-robin-ii.jpg",
        "md": "images/characters/md/562-robin-ii.jpg",
        "lg": "images/characters/lg/562-robin-ii.jpg"
      }
    },
    {
      "id": 563,
      "name": "Robin III",
      "slug": "563-robin-iii",
      "powerstats": {
        "intelligence": 81,
        "strength": 11,
        "speed": 27,
        "durability": 28,
        "power": 29,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tim Drake",
        "alterEgos": "Red Robin",
        "aliases": [
          "Alvin Draper",
          "Batman",
          "Robin",
          "Timothy Wayne"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman #436 (August, 1989)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "High School Student",
        "base": "Gotham City; Titans Tower, San Francisco"
      },
      "connections": {
        "groupAffiliation": "Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice",
        "relatives": "Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Jason Todd (Robin II, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)"
      },
      "images": {
        "xs": "images/characters/xs/563-robin-iii.jpg",
        "sm": "images/characters/sm/563-robin-iii.jpg",
        "md": "images/characters/md/563-robin-iii.jpg",
        "lg": "images/characters/lg/563-robin-iii.jpg"
      }
    },
    {
      "id": 564,
      "name": "Robin V",
      "slug": "564-robin-v",
      "powerstats": {
        "intelligence": 69,
        "strength": 8,
        "speed": 33,
        "durability": 16,
        "power": 29,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "4'6",
          "137 cm"
        ],
        "weight": [
          "84 lb",
          "38 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Damian Wayne",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Batman",
          "Damian al Ghul",
          "Ibn al Xu'ffasch",
          "Redbird"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Batman: Son of the Demon",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Batman Family, Batman Inc., Wayne Enterprises; formerly Teen Titans, League of Assassins",
        "relatives": "Talia al Ghul (mother),\nBruce Wayne (Batman, father),\nRa's Al Ghul (maternal grandfather),\nMelisande (maternal grandmother),\nThomas Wayne (paternal grandfather),\nMartha Wayne (paternal grandmother),\nSensei (great-grandfather),\nSimon Hurt (ancestor),\nNyssa Raatko (aunt, deceased),\nDusan al Ghul (White Ghost, uncle, deceased),\nRichard Grayson (Nightwing, adoptive brother),\nTim Drake (Red Robin, adoptive brother),\nCassandra Cain (Batgirl IV, adoptive sister),\nJason Todd (Red Hood, adoptive brother), \nPatrick Wayne (great-grandfather, deceased); \nCharles Wayne (great-great-grandfather, deceased);\nConstance Wayne (great-great-grandmother, deceased); \nAlan Wayne (ancestor, deceased); \nSolomon Wayne (ancestor, deceased); \nDarius Wayne (ancestor, deceased); \nJoshua Wayne (ancestor, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/564-robin-v.jpg",
        "sm": "images/characters/sm/564-robin-v.jpg",
        "md": "images/characters/md/564-robin-v.jpg",
        "lg": "images/characters/lg/564-robin-v.jpg"
      }
    },
    {
      "id": 565,
      "name": "Robin VI",
      "slug": "565-robin-vi",
      "powerstats": {
        "intelligence": 50,
        "strength": 8,
        "speed": 25,
        "durability": 20,
        "power": 17,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Carrie Kelley",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/565-robin-vi.jpg",
        "sm": "images/characters/sm/565-robin-vi.jpg",
        "md": "images/characters/md/565-robin-vi.jpg",
        "lg": "images/characters/lg/565-robin-vi.jpg"
      }
    },
    {
      "id": 566,
      "name": "Rocket Raccoon",
      "slug": "566-rocket-raccoon",
      "powerstats": {
        "intelligence": 50,
        "strength": 5,
        "speed": 23,
        "durability": 28,
        "power": 28,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Animal",
        "height": [
          "4'0",
          "122 cm"
        ],
        "weight": [
          "55 lb",
          "25 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Rocket Raccoon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sharpshooting Space Racoon",
          "Rocky Raccoon",
          "Ranger Rocket"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Marvel Preview #7 (June, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Law enforcement officer, security guard, member of the Guardians of the Galaxy",
        "base": "Knowhere; Formerly Hala, mobile aboard the Rakk'n'Ruin Halfworld, Keystone Quadrant"
      },
      "connections": {
        "groupAffiliation": "Guardians of the Galaxy; Formerly Star-Lord's unnamed commando team",
        "relatives": "Lylla (mate)"
      },
      "images": {
        "xs": "images/characters/xs/566-rocket-raccoon.jpg",
        "sm": "images/characters/sm/566-rocket-raccoon.jpg",
        "md": "images/characters/md/566-rocket-raccoon.jpg",
        "lg": "images/characters/lg/566-rocket-raccoon.jpg"
      }
    },
    {
      "id": 567,
      "name": "Rogue",
      "slug": "567-rogue",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 12,
        "durability": 28,
        "power": 80,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Brown / White"
      },
      "biography": {
        "fullName": "Anna Marie",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Anna Raven",
          "Doctor Kellogg",
          "Mutate 9602",
          "Irene Adler",
          "Miss Smith"
        ],
        "placeOfBirth": "Caldecott County, Mississippi",
        "firstAppearance": "Avengers Annual #10 (1981)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former mechanic, waitress, terrorist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly X-Treme Sanctions Executive, X-Treme X-Men, Brotherhood of Evil Mutants",
        "relatives": "Owen (father), Priscilla (mother), Carrie (aunt), Raven Darkh?lme (Mystique, foster mother), Kurt Wagner (Nightcrawler, foster brother), Graydon Creed (foster brother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/567-rogue.jpg",
        "sm": "images/characters/sm/567-rogue.jpg",
        "md": "images/characters/md/567-rogue.jpg",
        "lg": "images/characters/lg/567-rogue.jpg"
      }
    },
    {
      "id": 568,
      "name": "Ronin",
      "slug": "568-ronin",
      "powerstats": {
        "intelligence": 56,
        "strength": 12,
        "speed": 21,
        "durability": 10,
        "power": 13,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "230 lb",
          "104 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Clint Barton",
        "alterEgos": "Goliath, Hawkeye",
        "aliases": [
          "Formerly Hawkeye",
          "the Marksman",
          "'Br'er Hawkeye'",
          "Superhuman Cellblock Prisoner 334556",
          "Longbow",
          "Goliath",
          "Father Time",
          "Louis",
          "Robin Hood",
          "the Hawkeye Kid",
          "Golden Archer",
          "'Purple Man'; impersonated Constrictor & Dreadknight"
        ],
        "placeOfBirth": "Waverly, Iowa",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Outlaw adventurer, revolutionary; former professional super hero, fugitive, unnoficial S.H.I.E.L.D. operative, federal inmate, CTE security chief, ranch hand, archery tutor, carnival performer, roustabout, butcher shop worker",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Avengers; formerly founding member of Avengers West Coast and first chairman, Thunderbolts, S.H.I.E.L.D. (unofficial), Chain Gang 421-011, Shadows, Great Lakes Avengers, Cross Technological Enterprises, Defenders, Carson Carnival of Traveling Wonders, Ti",
        "relatives": "Harold Barton (father), Edith Barton (mother), Charles Bernard \"Barney\" Barton (brother), Barbara Morse 'Bobbi' Barton (Mockingbird, wife), Brett Barton (ancestor), Mack Barton (ancestor); all deceased"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 569,
      "name": "Rorschach",
      "slug": "569-rorschach",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 29,
        "durability": 20,
        "power": 23,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Walter Joseph Kovacs",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Watchmen #1 (September, 1986)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante, former garment worker",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Crimebusters",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/569-rorschach.jpg",
        "sm": "images/characters/sm/569-rorschach.jpg",
        "md": "images/characters/md/569-rorschach.jpg",
        "lg": "images/characters/lg/569-rorschach.jpg"
      }
    },
    {
      "id": 570,
      "name": "Sabretooth",
      "slug": "570-sabretooth",
      "powerstats": {
        "intelligence": 56,
        "strength": 48,
        "speed": 38,
        "durability": 90,
        "power": 50,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "380 lb",
          "171 kg"
        ],
        "eyeColor": "Amber",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Victor Creed",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Slasher",
          "El Tigre"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Iron Fist #14 (August, 1977)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "mercenary, professional criminal, assassin, serial killer",
        "base": "mobile"
      },
      "connections": {
        "groupAffiliation": "Weapon X, Marauders, Brotherhood of Evil Mutants",
        "relatives": "Grayden Creed (son; deceased)"
      },
      "images": {
        "xs": "images/characters/xs/570-sabretooth.jpg",
        "sm": "images/characters/sm/570-sabretooth.jpg",
        "md": "images/characters/md/570-sabretooth.jpg",
        "lg": "images/characters/lg/570-sabretooth.jpg"
      }
    },
    {
      "id": 571,
      "name": "Sage",
      "slug": "571-sage",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 28,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'7'",
          "170 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tessa",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "X-MEN Vol. 1 #132",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Soldier",
        "base": "Base of operations unknown"
      },
      "connections": {
        "groupAffiliation": "Excalibur, formerly X-Men, X-Treme Sanctions Executive, X-Treme X-Men, Hellfire Club",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/571-sage.jpg",
        "sm": "images/characters/sm/571-sage.jpg",
        "md": "images/characters/md/571-sage.jpg",
        "lg": "images/characters/lg/571-sage.jpg"
      }
    },
    {
      "id": 572,
      "name": "Sandman",
      "slug": "572-sandman",
      "powerstats": {
        "intelligence": 44,
        "strength": 75,
        "speed": 46,
        "durability": 90,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "450 lb",
          "203 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "William Baker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Flint Marko",
          "Sylvester Mann",
          "Quarryman"
        ],
        "placeOfBirth": "Queens, New York",
        "firstAppearance": "Amazing Spider-Man #4 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Professional Criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "(Formerly) Sinister Twelve, the Sinister Six, the Frightful Four, the Outlaws and the Wild Pack, reserve member of the Avengers",
        "relatives": "Mrs. Baker (mother), unidentified cousin"
      },
      "images": {
        "xs": "images/characters/xs/572-sandman.jpg",
        "sm": "images/characters/sm/572-sandman.jpg",
        "md": "images/characters/md/572-sandman.jpg",
        "lg": "images/characters/lg/572-sandman.jpg"
      }
    },
    {
      "id": 573,
      "name": "Sasquatch",
      "slug": "573-sasquatch",
      "powerstats": {
        "intelligence": 75,
        "strength": 80,
        "speed": 23,
        "durability": 56,
        "power": 15,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "10'",
          "305 cm"
        ],
        "weight": [
          "2000 lb",
          "900 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Orange"
      },
      "biography": {
        "fullName": "Walter Langkowski",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Box",
          "Wanda Langkowski"
        ],
        "placeOfBirth": "Edmonton, Alberta, Canada",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, bio-physicist, government operative; former college lecturer, professional football player",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Omega Flight; formerly Alpha Flight, Beta Flight, Gamma Flight, Howling Commandos",
        "relatives": "Veronica Langkowsi (ex-wife), unidentified son, Lillian von Loont (Gilded Lily, great-aunt, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/573-sasquatch.jpg",
        "sm": "images/characters/sm/573-sasquatch.jpg",
        "md": "images/characters/md/573-sasquatch.jpg",
        "lg": "images/characters/lg/573-sasquatch.jpg"
      }
    },
    {
      "id": 575,
      "name": "Savage Dragon",
      "slug": "575-savage-dragon",
      "powerstats": {
        "intelligence": 63,
        "strength": 70,
        "speed": 54,
        "durability": 85,
        "power": 66,
        "combat": 72
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Kurr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Image Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Liberty League, Chicago Police Department, Special Operations Strikeforce (S.O.S.)",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/575-savage-dragon.jpg",
        "sm": "images/characters/sm/575-savage-dragon.jpg",
        "md": "images/characters/md/575-savage-dragon.jpg",
        "lg": "images/characters/lg/575-savage-dragon.jpg"
      }
    },
    {
      "id": 576,
      "name": "Scarecrow",
      "slug": "576-scarecrow",
      "powerstats": {
        "intelligence": 81,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 48,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Jonathan Crane",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "WORLD'S FINEST COMICS #3 (Fall, 1941)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Special Professional Criminal",
        "base": "Gotham City"
      },
      "connections": {
        "groupAffiliation": "Injustice Gang",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/576-scarecrow.jpg",
        "sm": "images/characters/sm/576-scarecrow.jpg",
        "md": "images/characters/md/576-scarecrow.jpg",
        "lg": "images/characters/lg/576-scarecrow.jpg"
      }
    },
    {
      "id": 577,
      "name": "Scarlet Spider",
      "slug": "577-scarlet-spider",
      "powerstats": {
        "intelligence": 75,
        "strength": 53,
        "speed": 60,
        "durability": 74,
        "power": 46,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10'",
          "178 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Benjamin Reilly",
        "alterEgos": "Spider-Carnage",
        "aliases": [
          "Spider-Clone",
          "Spider-Man"
        ],
        "placeOfBirth": "Place of birth unknown",
        "firstAppearance": "Amazing Spider-Man # 149 (as Spider-Clone); Web of Spider-Man # 117 (as Ben Reilly)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Crime-fighter",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "None; formerly New Warriors",
        "relatives": "Peter Parker (clone of), May Parker (Aunt), Ben Parker (Uncle)"
      },
      "images": {
        "xs": "images/characters/xs/577-scarlet-spider.jpg",
        "sm": "images/characters/sm/577-scarlet-spider.jpg",
        "md": "images/characters/md/577-scarlet-spider.jpg",
        "lg": "images/characters/lg/577-scarlet-spider.jpg"
      }
    },
    {
      "id": 578,
      "name": "Scarlet Spider II",
      "slug": "578-scarlet-spider-ii",
      "powerstats": {
        "intelligence": 88,
        "strength": 55,
        "speed": 60,
        "durability": 40,
        "power": 37,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Clone",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "250 lb",
          "113 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Kaine Parker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Tarantula",
          "Kaine",
          "Ara?a Escarlata"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Web of Spider-Man #119 (December, 1994)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Fugitive",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Miles Warren (creator), Peter Parker (Spider-Man, genetic template), Ben Reilly (Scarlet Spider, fellow clone, deceased), Spidercide (fellow clone, allegedly deceased), Guardian (fellow clone, deceased), Jack (fellow clone, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/578-scarlet-spider-ii.jpg",
        "sm": "images/characters/sm/578-scarlet-spider-ii.jpg",
        "md": "images/characters/md/578-scarlet-spider-ii.jpg",
        "lg": "images/characters/lg/578-scarlet-spider-ii.jpg"
      }
    },
    {
      "id": 579,
      "name": "Scarlet Witch",
      "slug": "579-scarlet-witch",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 29,
        "durability": 70,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "132 lb",
          "59 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Wanda Maximoff",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Wanda Frank",
          "Wanda Magnus",
          "Ana Maximoff",
          "Gypsy Witch",
          "The Witch"
        ],
        "placeOfBirth": "Wundagore Mountain, Transia",
        "firstAppearance": "Uncanny X-Men #4 (March, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Adventurer; formerly witchcraft tutor, housewife, terrorist",
        "base": "Mobile; formerly The Works; Avengers Compound, California; Avengers Mansion, New York"
      },
      "connections": {
        "groupAffiliation": "None, Formerly Avengers, Avengers West Coast, Force Works, Queen's Vengeance, Secret Defenders, Lady Liberators, Brotherhood of Evil Mutants",
        "relatives": "Pietro (Quicksilver, twin brother), Magnus (Magneto, father), Magda Lehnsherr (mother, deceased), Anya (half-sister, deceased), Lorna Dane (Polaris, half-sister), Vision (estranged husband), Django Maximoff (foster father, deceased), Marya Maximoff (foster mother, deceased), Crystal (sister-in-law), Luna (niece), Tommy & Billy (reincarnated sons), Talia Wagner (Nocturne, alternate reality daughter)"
      },
      "images": {
        "xs": "images/characters/xs/579-scarlet-witch.jpg",
        "sm": "images/characters/sm/579-scarlet-witch.jpg",
        "md": "images/characters/md/579-scarlet-witch.jpg",
        "lg": "images/characters/lg/579-scarlet-witch.jpg"
      }
    },
    {
      "id": 580,
      "name": "Scorpia",
      "slug": "580-scorpia",
      "powerstats": {
        "intelligence": 38,
        "strength": 28,
        "speed": 42,
        "durability": 28,
        "power": 34,
        "combat": 28
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Elaine Coll",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Spider-Man: Power of Terror limited series #2 (1995)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Hells Kitchen Mob; formerly Sinister Seven, allied with Silvermane",
        "relatives": "Vincent Coll (grandfather, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/580-scorpia.jpg",
        "sm": "images/characters/sm/580-scorpia.jpg",
        "md": "images/characters/md/580-scorpia.jpg",
        "lg": "images/characters/lg/580-scorpia.jpg"
      }
    },
    {
      "id": 581,
      "name": "Scorpion",
      "slug": "581-scorpion",
      "powerstats": {
        "intelligence": 50,
        "strength": 52,
        "speed": 60,
        "durability": 85,
        "power": 49,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'11",
          "211 cm"
        ],
        "weight": [
          "689 lb",
          "310 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "MacDonald Gargan",
        "alterEgos": "Venom III",
        "aliases": [
          "Venom",
          "Spider-Man"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #19 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "U.S. government agent; former professional criminal, assassin, private detective",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Avengers (Osborn's team); formerly Thunderbolts, Masters of Evil, \"Spider-Man Revenge League\"; Sinister Twelve; formerly partners with Mister Hyde and Delilah",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/581-scorpion.jpg",
        "sm": "images/characters/sm/581-scorpion.jpg",
        "md": "images/characters/md/581-scorpion.jpg",
        "lg": "images/characters/lg/581-scorpion.jpg"
      }
    },
    {
      "id": 582,
      "name": "Sebastian Shaw",
      "slug": "582-sebastian-shaw",
      "powerstats": {
        "intelligence": 63,
        "strength": 85,
        "speed": 12,
        "durability": 95,
        "power": 36,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Sebastian Hiram Shaw",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/no-portrait.jpg",
        "sm": "images/characters/sm/no-portrait.jpg",
        "md": "images/characters/md/no-portrait.jpg",
        "lg": "images/characters/lg/no-portrait.jpg"
      }
    },
    {
      "id": 583,
      "name": "Sentry",
      "slug": "583-sentry",
      "powerstats": {
        "intelligence": 75,
        "strength": 100,
        "speed": 100,
        "durability": 84,
        "power": 100,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "194 lb",
          "87 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Robert Reynolds",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Void",
          "Bob",
          "Golden Guardian of Good",
          "John Victor Williams",
          "Scout"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Sentry #1 (September, 2000)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "The Watchtower (on top of Stark Tower, where it was formerly located before all memory of him disappeared)"
      },
      "connections": {
        "groupAffiliation": "Formerly Horsemen of Death, Osborn's Avengers, Mighty Avengers, New Avengers, partner of Scout",
        "relatives": "Lindy Reynolds (wife, deceased), Mrs. Reynolds (mother)"
      },
      "images": {
        "xs": "images/characters/xs/583-sentry.jpg",
        "sm": "images/characters/sm/583-sentry.jpg",
        "md": "images/characters/md/583-sentry.jpg",
        "lg": "images/characters/lg/583-sentry.jpg"
      }
    },
    {
      "id": 584,
      "name": "Shadow King",
      "slug": "584-shadow-king",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 27,
        "durability": 100,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "unknown",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "330 lb",
          "149 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Amahl Farouk",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Professor X",
          "Ananasi",
          "Amahl Farouk",
          "Evil One",
          "Master of the Games; he also impersonated the following mind-controlled subjects (in chronological order): Alexander Flynn",
          "Karma",
          "Cypher",
          "Jacob Reisz",
          "Donald Pierce and probably others"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men #117 (1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "The Astral Plane; Formerly Cairo, Egypt."
      },
      "connections": {
        "groupAffiliation": "Shadow Mob; former head of the Gladiators and the Cairo?s Thieves Quarter",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/584-shadow-king.jpg",
        "sm": "images/characters/sm/584-shadow-king.jpg",
        "md": "images/characters/md/584-shadow-king.jpg",
        "lg": "images/characters/lg/584-shadow-king.jpg"
      }
    },
    {
      "id": 585,
      "name": "Shadow Lass",
      "slug": "585-shadow-lass",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 67,
        "durability": 20,
        "power": 79,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Talokite",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Tasmia Mallor",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Talok VIII",
        "firstAppearance": "Adventure Comics #365",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/585-shadow-lass.jpg",
        "sm": "images/characters/sm/585-shadow-lass.jpg",
        "md": "images/characters/md/585-shadow-lass.jpg",
        "lg": "images/characters/lg/585-shadow-lass.jpg"
      }
    },
    {
      "id": 586,
      "name": "Shadowcat",
      "slug": "586-shadowcat",
      "powerstats": {
        "intelligence": 88,
        "strength": 8,
        "speed": 21,
        "durability": 25,
        "power": 69,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Hazel",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Kitty Pryde",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Kitty Pryde",
          "Ariel",
          "Sprite",
          "Cat"
        ],
        "placeOfBirth": "Deerfield, Illinois",
        "firstAppearance": "X-Men #129 (January, 1980)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Teacher, Adventurer, former student",
        "base": "Xavier Insitute for Higher Learning, Salem Center, New York, formerly Muir Island off the coast of Scotland, formerly Excalibur's Lighthouse, formerly Braddock Manor, England"
      },
      "connections": {
        "groupAffiliation": "X-Men (New Charles Xavier School member), X-Men (Past) (tutor); formerly X-Men, Murder Circus (brainwashed), Lights (liaison), Paladins Squad, S.H.I.E.L.D., Gladiators, Excalibur (founding member), New Mutants, Knights of Wundagore",
        "relatives": "Kate (maternal great-grandmother), Samuel Prydeman (paternal grandfather, deceased), Chava Rosanoff (paternal great-aunt, deceased), Mr. Rosanoff (paternal great-uncle, apparently deceased), Nina (aunt), Carmen Pryde (father, deceased), Theresa Pryde (mother), Kenny (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/586-shadowcat.jpg",
        "sm": "images/characters/sm/586-shadowcat.jpg",
        "md": "images/characters/md/586-shadowcat.jpg",
        "lg": "images/characters/lg/586-shadowcat.jpg"
      }
    },
    {
      "id": 587,
      "name": "Shang-Chi",
      "slug": "587-shang-chi",
      "powerstats": {
        "intelligence": 63,
        "strength": 12,
        "speed": 30,
        "durability": 50,
        "power": 29,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Shang-Chi",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Master of Kung Fu; The Rising and Advancing of the Spirit; Chinaman (by Jack Tarr)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Special Marvel Edition #15 (December, 1973)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "MI-5, MI-6, \"Marvel Knights\", Heroes For Hire, Freelance Restorations, Si-Fan, Secret Avengers",
        "relatives": "Fu Manchu, father; unnamed mother; Fah Lo Suee, (half-sister); Whispering Shadow (half-brother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/587-shang-chi.jpg",
        "sm": "images/characters/sm/587-shang-chi.jpg",
        "md": "images/characters/md/587-shang-chi.jpg",
        "lg": "images/characters/lg/587-shang-chi.jpg"
      }
    },
    {
      "id": 588,
      "name": "Shatterstar",
      "slug": "588-shatterstar",
      "powerstats": {
        "intelligence": 63,
        "strength": 48,
        "speed": 45,
        "durability": 64,
        "power": 49,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Gaveedra Seven",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Benjamin Russell"
        ],
        "placeOfBirth": "Mojoworld",
        "firstAppearance": "New Mutants #99",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Warrior",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Force, Blood Cadre Alliance (former member)",
        "relatives": "Longshot (father), Dazzler (mother), Mojo V"
      },
      "images": {
        "xs": "images/characters/xs/588-shatterstar.jpg",
        "sm": "images/characters/sm/588-shatterstar.jpg",
        "md": "images/characters/md/588-shatterstar.jpg",
        "lg": "images/characters/lg/588-shatterstar.jpg"
      }
    },
    {
      "id": 589,
      "name": "She-Hulk",
      "slug": "589-she-hulk",
      "powerstats": {
        "intelligence": 81,
        "strength": 100,
        "speed": 42,
        "durability": 100,
        "power": 40,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "700 lb",
          "315 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Green"
      },
      "biography": {
        "fullName": "Jennifer Walters",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Jade Giantess"
        ],
        "placeOfBirth": "Los Angeles, California",
        "firstAppearance": "She-Hulk (Vol. 1) #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Lawyer, Magistra of the Living Tribunal",
        "base": "Law offices of Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers Mansion; Baxter Building, Four Freedoms Plaza"
      },
      "connections": {
        "groupAffiliation": "Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers, Fantastic Four, Heroes for Hire",
        "relatives": "Bruce Banner (Hulk, cousin)"
      },
      "images": {
        "xs": "images/characters/xs/589-she-hulk.jpg",
        "sm": "images/characters/sm/589-she-hulk.jpg",
        "md": "images/characters/md/589-she-hulk.jpg",
        "lg": "images/characters/lg/589-she-hulk.jpg"
      }
    },
    {
      "id": 590,
      "name": "She-Thing",
      "slug": "590-she-thing",
      "powerstats": {
        "intelligence": 69,
        "strength": 72,
        "speed": 21,
        "durability": 80,
        "power": 23,
        "combat": 65
      },
      "appearance": {
        "gender": "Female",
        "race": "Human / Radiation",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "340 lb",
          "153 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Sharon Ventura",
        "alterEgos": "Ms Marvel II",
        "aliases": [
          "Thing",
          "Ms Marvel"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Thing #27",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Prisoner, former adventurer, wrestler, stuntwoman, scuba diver, motorcycle performer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Frightful Four; formerly Fantastic Four, Unlimited Class Wrestling Federation, Thunderiders",
        "relatives": "Jack Ventura (father, deceased), Mrs. Ventura (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/590-she-thing.jpg",
        "sm": "images/characters/sm/590-she-thing.jpg",
        "md": "images/characters/md/590-she-thing.jpg",
        "lg": "images/characters/lg/590-she-thing.jpg"
      }
    },
    {
      "id": 591,
      "name": "Shocker",
      "slug": "591-shocker",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 23,
        "durability": 70,
        "power": 79,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Herman Schultz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #46",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional thief, hired assassin",
        "base": "New York City, New York"
      },
      "connections": {
        "groupAffiliation": "Formerly Masters of Evil, Sinister Syndicate, Sinister Seven, Sinister Twelve",
        "relatives": "Mr. & Mrs. Schultz (parents)"
      },
      "images": {
        "xs": "images/characters/xs/591-shocker.jpg",
        "sm": "images/characters/sm/591-shocker.jpg",
        "md": "images/characters/md/591-shocker.jpg",
        "lg": "images/characters/lg/591-shocker.jpg"
      }
    },
    {
      "id": 592,
      "name": "Shriek",
      "slug": "592-shriek",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 45,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Yellow / Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Frances Louise Barrison",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sandra Deel"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former partner of Carnage, Carrion (Malcolm McBride), Demogoblin and Doppelganger). Before she became Shriek, she was a rock band groupie and drug dealer.",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Carnage Family",
        "relatives": "Carnage (adopted husband), Carrion (Malcolm McBride) and Demogoblin (adopted sons), Doppelganger (adopted pet)"
      },
      "images": {
        "xs": "images/characters/xs/592-shriek.jpg",
        "sm": "images/characters/sm/592-shriek.jpg",
        "md": "images/characters/md/592-shriek.jpg",
        "lg": "images/characters/lg/592-shriek.jpg"
      }
    },
    {
      "id": 594,
      "name": "Sif",
      "slug": "594-sif",
      "powerstats": {
        "intelligence": 63,
        "strength": 90,
        "speed": 67,
        "durability": 80,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Asgardian",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "425 lb",
          "191 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Sif",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Lady Sif",
          "Erika Velez",
          "Mrs. Chambers",
          "Sybil"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Journey into Mystery #102 (March, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Broxton/Asgard; Formerly New York City"
      },
      "connections": {
        "groupAffiliation": "The Gods of Asgard",
        "relatives": "Heimdall (brother)"
      },
      "images": {
        "xs": "images/characters/xs/594-sif.jpg",
        "sm": "images/characters/sm/594-sif.jpg",
        "md": "images/characters/md/594-sif.jpg",
        "lg": "images/characters/lg/594-sif.jpg"
      }
    },
    {
      "id": 595,
      "name": "Silk",
      "slug": "595-silk",
      "powerstats": {
        "intelligence": 75,
        "strength": 48,
        "speed": 71,
        "durability": 70,
        "power": 71,
        "combat": 65
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Cindy Moon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man Vol 3 #4",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante, intern at Fact Channel News, adventurer; former student",
        "base": "Sims Tower, Times Square, Manhattan, New York City, New York; formerly Sims Tower, Times Square, Manhattan, New York City, New York, Earth-3145; Central Park, Manhattan, New York City, New York, Earth-13"
      },
      "connections": {
        "groupAffiliation": "Black Cat's Gang, Fact Channel News; formerly Spider-Army, partner of Spider-Man, Ezekiel Sims",
        "relatives": "Albert Moon. Sr. (father, estranged), unnamed mother (estranged), Albert Moon, Jr. (brother, estranged), Spider-Man (Peter Parker, bit by same spider)"
      },
      "images": {
        "xs": "images/characters/xs/595-silk.jpg",
        "sm": "images/characters/sm/595-silk.jpg",
        "md": "images/characters/md/595-silk.jpg",
        "lg": "images/characters/lg/595-silk.jpg"
      }
    },
    {
      "id": 598,
      "name": "Silver Surfer",
      "slug": "598-silver-surfer",
      "powerstats": {
        "intelligence": 56,
        "strength": 100,
        "speed": 100,
        "durability": 90,
        "power": 100,
        "combat": 32
      },
      "appearance": {
        "gender": "Male",
        "race": "Alien",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Norrin Radd",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Zenn-La",
        "firstAppearance": "Fantastic Four, Vol. 1 #48",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, formerly Galactus' Herald",
        "base": "mobile throughout the universe"
      },
      "connections": {
        "groupAffiliation": "Former member of Defenders, former member of the Star Masters",
        "relatives": "Jartran Radd (father, deceased), Elmar Radd (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/598-silver-surfer.jpg",
        "sm": "images/characters/sm/598-silver-surfer.jpg",
        "md": "images/characters/md/598-silver-surfer.jpg",
        "lg": "images/characters/lg/598-silver-surfer.jpg"
      }
    },
    {
      "id": 599,
      "name": "Silverclaw",
      "slug": "599-silverclaw",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 35,
        "durability": 42,
        "power": 34,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'2",
          "157 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Maria de Guadalupe Santiago",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "La Garra Argentado",
          "Daughter of the Volcano God,"
        ],
        "placeOfBirth": "The village of Kamekeri, Costa Verde",
        "firstAppearance": "Avengers #8 (1998)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "University student, adventurer",
        "base": "Empire State University and Avengers Mansion, New York City, NY"
      },
      "connections": {
        "groupAffiliation": "The Secret Avengers, formerly reserve member of the Avengers",
        "relatives": "Jaime Santiago (father), Peliali (mother), Edwin Jarvis (\"uncle\")"
      },
      "images": {
        "xs": "images/characters/xs/599-silverclaw.jpg",
        "sm": "images/characters/sm/599-silverclaw.jpg",
        "md": "images/characters/md/599-silverclaw.jpg",
        "lg": "images/characters/lg/599-silverclaw.jpg"
      }
    },
    {
      "id": 600,
      "name": "Simon Baz",
      "slug": "600-simon-baz",
      "powerstats": {
        "intelligence": 56,
        "strength": 90,
        "speed": 42,
        "durability": 55,
        "power": 100,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Bown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Simoon Baz",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Lantern",
          "White Lantern"
        ],
        "placeOfBirth": "Dearborn, Michigan",
        "firstAppearance": "The New 52: FCBD Special Edition #1 (June, 2012)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Sira Baz (sister), Farid Amar (nephew), Nazir Amar (brother in-law)"
      },
      "images": {
        "xs": "images/characters/xs/600-simon-baz.jpg",
        "sm": "images/characters/sm/600-simon-baz.jpg",
        "md": "images/characters/md/600-simon-baz.jpg",
        "lg": "images/characters/lg/600-simon-baz.jpg"
      }
    },
    {
      "id": 601,
      "name": "Sinestro",
      "slug": "601-sinestro",
      "powerstats": {
        "intelligence": 75,
        "strength": 85,
        "speed": 53,
        "durability": 64,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Korugaran",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "205 lb",
          "92 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Thaal Sinestro",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Lantern",
          "White Lantern",
          "Yellow Lantern",
          "Parallax",
          "Indigo Lantern"
        ],
        "placeOfBirth": "Korugar City, Korugar",
        "firstAppearance": "Green Lantern Vol 2 #7",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "unknown",
        "base": "Ranx, Warworld. formerly New Korugar, Qward, Oa"
      },
      "connections": {
        "groupAffiliation": "Sinestro Corps, formerly Green Lantern Corps, Secret Society, Injustice League",
        "relatives": "Witch Queen (sister, pre-Crisis), Soranik Natu (daughter), Arin Sur (wife, deceased), Abin Sur (brother-in-law, deceased), Amon Sur (nephew)"
      },
      "images": {
        "xs": "images/characters/xs/601-sinestro.jpg",
        "sm": "images/characters/sm/601-sinestro.jpg",
        "md": "images/characters/md/601-sinestro.jpg",
        "lg": "images/characters/lg/601-sinestro.jpg"
      }
    },
    {
      "id": 602,
      "name": "Siren",
      "slug": "602-siren",
      "powerstats": {
        "intelligence": 56,
        "strength": 62,
        "speed": 79,
        "durability": 60,
        "power": 92,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": "Atlantean",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "160 lb",
          "72 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Purple"
      },
      "biography": {
        "fullName": "Hila",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Aquaman #22 (August, 1965)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "formely Atlantis"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Mera (twin sister), Aquaman (brother-in-law)"
      },
      "images": {
        "xs": "images/characters/xs/602-siren.jpg",
        "sm": "images/characters/sm/602-siren.jpg",
        "md": "images/characters/md/602-siren.jpg",
        "lg": "images/characters/lg/602-siren.jpg"
      }
    },
    {
      "id": 604,
      "name": "Siryn",
      "slug": "604-siryn",
      "powerstats": {
        "intelligence": 38,
        "strength": 8,
        "speed": 47,
        "durability": 28,
        "power": 50,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Strawberry Blond"
      },
      "biography": {
        "fullName": "Theresa Rourke Cassidy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Theresa Rourke"
        ],
        "placeOfBirth": "Cassidy Keep, County Mayo, Ireland",
        "firstAppearance": "Spider-Woman (first series) #37",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "(current) Adventurer (former) Professional Criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "(Current) X-Factor (former) Ally of Black Tom and the Juggernaut, Fallen Angels, X-Force",
        "relatives": "Sean Cassidy (Banshee, father), Maeve Rourke (mother, deceased), Black Tom Cassidy (cousin)"
      },
      "images": {
        "xs": "images/characters/xs/604-siryn.jpg",
        "sm": "images/characters/sm/604-siryn.jpg",
        "md": "images/characters/md/604-siryn.jpg",
        "lg": "images/characters/lg/604-siryn.jpg"
      }
    },
    {
      "id": 605,
      "name": "Skaar",
      "slug": "605-skaar",
      "powerstats": {
        "intelligence": 50,
        "strength": 85,
        "speed": 27,
        "durability": 90,
        "power": 69,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "400 lb",
          "180 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Savior",
          "Son of Hulk",
          "WorldBreaker",
          "Long Hair",
          "Little Monster",
          "Conan"
        ],
        "placeOfBirth": "Sakaar",
        "firstAppearance": "World War Hulk #5, 2007",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Warrior",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Morris Walters (granduncle), Elaine Banner-Walters (paternal grandaunt, deceased), Brian Banner (paternal grandfather, deceased), Rebecca Banner (paternal grandmother, deceased), She-Hulk (1st cousin once removed), Hulk (father), Caiera the Oldstrong (mother, deceased), Hiro-Kala (Twin brother), Lyra (half-sister)"
      },
      "images": {
        "xs": "images/characters/xs/605-skaar.jpg",
        "sm": "images/characters/sm/605-skaar.jpg",
        "md": "images/characters/md/605-skaar.jpg",
        "lg": "images/characters/lg/605-skaar.jpg"
      }
    },
    {
      "id": 607,
      "name": "Snowbird",
      "slug": "607-snowbird",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 27,
        "durability": 42,
        "power": 70,
        "combat": 52
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'10'",
          "178 cm"
        ],
        "weight": [
          "108 lb",
          "49 kg"
        ],
        "eyeColor": "White",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Narya",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Anne McKenzie-Thompson"
        ],
        "placeOfBirth": "Near Resolute Bay, Northwest Territories, Canada",
        "firstAppearance": "Uncanny X-Men #120",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Goddess, adventurer, former records officer",
        "base": "formerly Department H"
      },
      "connections": {
        "groupAffiliation": "God Squad; formerly Alpha Flight, Eskimo Gods, Royal Canadian Mounted Police, The Flight",
        "relatives": "Hodiak (grandfather), Nelvanna (mother), Richard Lawrence Easton (father, deceased), Michael Twoyoungmen (Shaman, foster father), Douglas Thompson (husband, deceased), unnamed son (deceased)"
      },
      "images": {
        "xs": "images/characters/xs/607-snowbird.jpg",
        "sm": "images/characters/sm/607-snowbird.jpg",
        "md": "images/characters/md/607-snowbird.jpg",
        "lg": "images/characters/lg/607-snowbird.jpg"
      }
    },
    {
      "id": 608,
      "name": "Sobek",
      "slug": "608-sobek",
      "powerstats": {
        "intelligence": 50,
        "strength": 34,
        "speed": 23,
        "durability": 46,
        "power": 20,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Yurrd the Unknown",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sobek the Talking Crocodile; The Unknown in Formless Time Before Time; Famine"
        ],
        "placeOfBirth": "Nile River; Bioengineered at Oolong Island",
        "firstAppearance": "52 Week Twenty-Six",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Kahndaq"
      },
      "connections": {
        "groupAffiliation": "Black Marvel Family, Four Horsemen",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/608-sobek.jpg",
        "sm": "images/characters/sm/608-sobek.jpg",
        "md": "images/characters/md/608-sobek.jpg",
        "lg": "images/characters/lg/608-sobek.jpg"
      }
    },
    {
      "id": 609,
      "name": "Solomon Grundy",
      "slug": "609-solomon-grundy",
      "powerstats": {
        "intelligence": 9,
        "strength": 93,
        "speed": 13,
        "durability": 100,
        "power": 92,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Zombie",
        "height": [
          "9'2",
          "279 cm"
        ],
        "weight": [
          "971 lb",
          "437 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Cyrus Gold",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Marshland Monster"
        ],
        "placeOfBirth": "Gotham City",
        "firstAppearance": "All-American Comics #61 (October, 1944)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly, Injustice Society, Injustice League, the Society, Infinity, Inc; Injustice Unlimited, Black Lantern Corps",
        "relatives": "Unnamed wife (deceased); Karin Rykel (possible descendant, deceased); Chrissie Cavendish (possible descendant)"
      },
      "images": {
        "xs": "images/characters/xs/609-solomon-grundy.jpg",
        "sm": "images/characters/sm/609-solomon-grundy.jpg",
        "md": "images/characters/md/609-solomon-grundy.jpg",
        "lg": "images/characters/lg/609-solomon-grundy.jpg"
      }
    },
    {
      "id": 610,
      "name": "Songbird",
      "slug": "610-songbird",
      "powerstats": {
        "intelligence": 75,
        "strength": 36,
        "speed": 27,
        "durability": 42,
        "power": 55,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "145 lb",
          "65 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red / White"
      },
      "biography": {
        "fullName": "Melissa Joan Gold",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Screaming Mimi",
          "Mimi Schwartz",
          "Margie Green"
        ],
        "placeOfBirth": "Shoshoni, Wyoming",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former criminal and wrestler",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Thunderbolts, Masters of Evil, Unlimited Class Wrestling Federation, Grapplers",
        "relatives": "Mimi Gold (mother), Mr. Gold (father)"
      },
      "images": {
        "xs": "images/characters/xs/610-songbird.jpg",
        "sm": "images/characters/sm/610-songbird.jpg",
        "md": "images/characters/md/610-songbird.jpg",
        "lg": "images/characters/lg/610-songbird.jpg"
      }
    },
    {
      "id": 611,
      "name": "Space Ghost",
      "slug": "611-space-ghost",
      "powerstats": {
        "intelligence": 38,
        "strength": 18,
        "speed": 33,
        "durability": 40,
        "power": 95,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "250 lb",
          "113 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Thaddeus Bach",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ted Ghostel",
          "Tad Ghostal"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Space Ghost (1966)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Galactic Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/611-space-ghost.jpg",
        "sm": "images/characters/sm/611-space-ghost.jpg",
        "md": "images/characters/md/611-space-ghost.jpg",
        "lg": "images/characters/lg/611-space-ghost.jpg"
      }
    },
    {
      "id": 612,
      "name": "Spawn",
      "slug": "612-spawn",
      "powerstats": {
        "intelligence": 75,
        "strength": 60,
        "speed": 50,
        "durability": 90,
        "power": 100,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": "Demon",
        "height": [
          "6'11",
          "211 cm"
        ],
        "weight": [
          "900 lb",
          "405 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Al Simmons",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The One",
          "Hellspawn"
        ],
        "placeOfBirth": "Detroit, Michigan (8th level of Hell after rebirth)",
        "firstAppearance": "Spawn #1 (May, 1992)",
        "publisher": "Image Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Hell"
      },
      "connections": {
        "groupAffiliation": "Eighth Circle of Hell; formerly (as Al Simmons) CIA (U.S. Security Service), U.S. Secret Service, U.S. Marine Corps",
        "relatives": "Wanda (widow), Cyan (widow's daughter)"
      },
      "images": {
        "xs": "images/characters/xs/612-spawn.jpg",
        "sm": "images/characters/sm/612-spawn.jpg",
        "md": "images/characters/md/612-spawn.jpg",
        "lg": "images/characters/lg/612-spawn.jpg"
      }
    },
    {
      "id": 613,
      "name": "Spectre",
      "slug": "613-spectre",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Aztar",
        "alterEgos": "Aztar",
        "aliases": [
          "Spirit of Vengeance",
          "Wrath of God",
          "Spirit of Redemption",
          "Raguel",
          "James Corrigan",
          "Hal Jordan",
          "Cripus Allen"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "More Fun Comics #52 (February, 1940)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/613-spectre.jpg",
        "sm": "images/characters/sm/613-spectre.jpg",
        "md": "images/characters/md/613-spectre.jpg",
        "lg": "images/characters/lg/613-spectre.jpg"
      }
    },
    {
      "id": 615,
      "name": "Speedy",
      "slug": "615-speedy",
      "powerstats": {
        "intelligence": 50,
        "strength": 6,
        "speed": 33,
        "durability": 20,
        "power": 26,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Thea Queen",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Thea Merlyn",
          "Mia",
          "Red Arrow"
        ],
        "placeOfBirth": "Starling City",
        "firstAppearance": "Arrow (TV Series) - \"Pilot\"",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Nightclub Owner",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Team Arrow",
        "relatives": "Moira Queen (mother, deceased), Robert Queen (foster father, deceased), Walter Steele (step-father, formerly), Malcolm Merlyn (biological father), Oliver Queen (Green Arrow, half-brother), Tommy Merlyn (half-brother, deceased), William Clayton (nephew)"
      },
      "images": {
        "xs": "images/characters/xs/615-speedy.jpg",
        "sm": "images/characters/sm/615-speedy.jpg",
        "md": "images/characters/md/615-speedy.jpg",
        "lg": "images/characters/lg/615-speedy.jpg"
      }
    },
    {
      "id": 618,
      "name": "Spider-Girl",
      "slug": "618-spider-girl",
      "powerstats": {
        "intelligence": 63,
        "strength": 38,
        "speed": 60,
        "durability": 65,
        "power": 53,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "119 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "May 'Mayday' Parker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "What If? Vol 2 #105 (February, 1998)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "New York City, New York"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/618-spider-girl.jpg",
        "sm": "images/characters/sm/618-spider-girl.jpg",
        "md": "images/characters/md/618-spider-girl.jpg",
        "lg": "images/characters/lg/618-spider-girl.jpg"
      }
    },
    {
      "id": 619,
      "name": "Spider-Gwen",
      "slug": "619-spider-gwen",
      "powerstats": {
        "intelligence": 75,
        "strength": 55,
        "speed": 63,
        "durability": 70,
        "power": 66,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "125 lb",
          "56 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Gwen Stacy",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Spider-Woman"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Edge of Spider-Verse #2",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Warriors of the Great Web; formerly Mary Janes, Spider-Army",
        "relatives": "George Stacy (father), Helen Stacy (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/619-spider-gwen.jpg",
        "sm": "images/characters/sm/619-spider-gwen.jpg",
        "md": "images/characters/md/619-spider-gwen.jpg",
        "lg": "images/characters/lg/619-spider-gwen.jpg"
      }
    },
    {
      "id": 620,
      "name": "Spider-Man",
      "slug": "620-spider-man",
      "powerstats": {
        "intelligence": 90,
        "strength": 55,
        "speed": 67,
        "durability": 75,
        "power": 74,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Hazel",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Peter Parker",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Spiderman",
          "Bag-Man",
          "Black Marvel",
          "Captain Universe",
          "Dusk",
          "Green Hood",
          "Hornet",
          "Mad Dog 336",
          "Peter Palmer",
          "Prodigy",
          "Ricochet",
          "Scarlet Spider",
          "Spider-Boy",
          "Spider-Hulk",
          "Spider-Morphosis"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "Amazing Fantasy #15",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Freelance photographer, teacher",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
        "relatives": "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
      },
      "images": {
        "xs": "images/characters/xs/620-spider-man.jpg",
        "sm": "images/characters/sm/620-spider-man.jpg",
        "md": "images/characters/md/620-spider-man.jpg",
        "lg": "images/characters/lg/620-spider-man.jpg"
      }
    },
    {
      "id": 623,
      "name": "Spider-Woman",
      "slug": "623-spider-woman",
      "powerstats": {
        "intelligence": 56,
        "strength": 42,
        "speed": 42,
        "durability": 60,
        "power": 68,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Jessica Drew",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Arachne",
          "Ariadne Hyde",
          "Dark Angel",
          "Dark Angel of San Francisco"
        ],
        "placeOfBirth": "London, England",
        "firstAppearance": "Marvel Spotlight #32 (February, 1977)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Form agent of HYDRA, former bounty hunter, private investigator, adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Former agent of HYDRA",
        "relatives": "Jonathan (father, deceased), Merriem (mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/623-spider-woman.jpg",
        "sm": "images/characters/sm/623-spider-woman.jpg",
        "md": "images/characters/md/623-spider-woman.jpg",
        "lg": "images/characters/lg/623-spider-woman.jpg"
      }
    },
    {
      "id": 625,
      "name": "Spider-Woman III",
      "slug": "625-spider-woman-iii",
      "powerstats": {
        "intelligence": 50,
        "strength": 48,
        "speed": 27,
        "durability": 42,
        "power": 60,
        "combat": 28
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "123 lb",
          "55 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Martha Franklin",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Rochester, New York",
        "firstAppearance": "(cameo) Spectacular Spider-Man #263 (1998); (full) Amazing Spider-Man #441 (1998)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Gathering of the Five",
        "relatives": "Jeremy Franklin (father, deceased), Bernice Franklin (mother, deceased), J. Jonah Jameson (foster father), Marla Madison (foster mother)"
      },
      "images": {
        "xs": "images/characters/xs/625-spider-woman-iii.jpg",
        "sm": "images/characters/sm/625-spider-woman-iii.jpg",
        "md": "images/characters/md/625-spider-woman-iii.jpg",
        "lg": "images/characters/lg/625-spider-woman-iii.jpg"
      }
    },
    {
      "id": 628,
      "name": "Spyke",
      "slug": "628-spyke",
      "powerstats": {
        "intelligence": 50,
        "strength": 12,
        "speed": 17,
        "durability": 60,
        "power": 48,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Evan Daniels",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Porcupine",
          "Armadillo"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "\"Speed & Spyke\" (December 9, 2000)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Morlocks; Formerly: X-Men",
        "relatives": "Mr. Daniels (father), Vivian Munroe-Daniels (mother), Storm (maternal aunt)"
      },
      "images": {
        "xs": "images/characters/xs/628-spyke.jpg",
        "sm": "images/characters/sm/628-spyke.jpg",
        "md": "images/characters/md/628-spyke.jpg",
        "lg": "images/characters/lg/628-spyke.jpg"
      }
    },
    {
      "id": 630,
      "name": "Star-Lord",
      "slug": "630-star-lord",
      "powerstats": {
        "intelligence": 69,
        "strength": 20,
        "speed": 33,
        "durability": 50,
        "power": 25,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Human-Spartoi",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Peter Jason Quill",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Starlord"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Marvel Preview #4 (January, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; Royal Prince of Spartax",
        "base": "C.I.T.T.; formerly Kree space; Hala, Daedalus 5"
      },
      "connections": {
        "groupAffiliation": "Guardians of the Galaxy (leader); formerly unnamed commando team, United Front, Imperial Guard, partner of Ship, NASA",
        "relatives": "Eson (grandfather, deceased), Gareth (great-uncle, deceased), Jason of Sparta (father), Meredith Quill (mother, deceased), Victoria (half-sister), Kip Holm (adopted brother), Sandy (adopted sister in-law), Alain (adopted niece), Rhys, Robyn (adopted nephews), Kitty Pryde (fiance), Unnamed former Symbiote"
      },
      "images": {
        "xs": "images/characters/xs/630-star-lord.jpg",
        "sm": "images/characters/sm/630-star-lord.jpg",
        "md": "images/characters/md/630-star-lord.jpg",
        "lg": "images/characters/lg/630-star-lord.jpg"
      }
    },
    {
      "id": 631,
      "name": "Stardust",
      "slug": "631-stardust",
      "powerstats": {
        "intelligence": 88,
        "strength": 85,
        "speed": 100,
        "durability": 110,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Entity Lambda-Zero"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Herald of Galactus",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Heralds of Galactus ; Formerly United Front",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/631-stardust.jpg",
        "sm": "images/characters/sm/631-stardust.jpg",
        "md": "images/characters/md/631-stardust.jpg",
        "lg": "images/characters/lg/631-stardust.jpg"
      }
    },
    {
      "id": 632,
      "name": "Starfire",
      "slug": "632-starfire",
      "powerstats": {
        "intelligence": 50,
        "strength": 80,
        "speed": 33,
        "durability": 85,
        "power": 59,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Tamaranean",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "158 lb",
          "71 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Koriand'r",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Princess Koriand'r",
          "Kory Anders",
          "Nova"
        ],
        "placeOfBirth": "Tamaran",
        "firstAppearance": "DC Comics Presents #26 (October, 1980)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Model",
        "base": "Formerly Titans Island, New York City; Titans Tower, San Francisco"
      },
      "connections": {
        "groupAffiliation": "Formerly R.E.B.E.L.S., Justice League of America, Teen Titans, Outsiders",
        "relatives": "King Myand'r (father), Queen Luand'r (mother), Queen Komand'r (sister, Blackfire), Ryand'r (brother), Prince Karras (husband, deceased), Ph'yzzon (husband, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/632-starfire.jpg",
        "sm": "images/characters/sm/632-starfire.jpg",
        "md": "images/characters/md/632-starfire.jpg",
        "lg": "images/characters/lg/632-starfire.jpg"
      }
    },
    {
      "id": 633,
      "name": "Stargirl",
      "slug": "633-stargirl",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 25,
        "durability": 90,
        "power": 87,
        "combat": 55
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "137 lb",
          "62 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Courtney Whitmore",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Star-Spangled Kid",
          "Star",
          "Stars"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Stars and S.T.R.I.P.E. #0 (July, 1999)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Manhattan, New York City; Formerly Beverly Hills, California; later Blue Valley, Nebraska; later Metropolis"
      },
      "connections": {
        "groupAffiliation": "Justice Society of America",
        "relatives": "Barbara Whitmore-Dugan (mother); Sam Kurtis (father, deceased); Pat Dugan (S.T.R.I.P.E., Stepfather); Mike Dugan (stepbrother); Patricia Dugan (sister)"
      },
      "images": {
        "xs": "images/characters/xs/633-stargirl.jpg",
        "sm": "images/characters/sm/633-stargirl.jpg",
        "md": "images/characters/md/633-stargirl.jpg",
        "lg": "images/characters/lg/633-stargirl.jpg"
      }
    },
    {
      "id": 634,
      "name": "Static",
      "slug": "634-static",
      "powerstats": {
        "intelligence": 69,
        "strength": 8,
        "speed": 42,
        "durability": 50,
        "power": 90,
        "combat": 40
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Virgil Hawkins",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Sparky",
          "Virg",
          "V",
          "V-Man"
        ],
        "placeOfBirth": "Paris Island, Dakota City",
        "firstAppearance": "Static #1 (June, 1993)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "Titans Tower, formerly Abandoned Gas Station of Solitude, Dakota City"
      },
      "connections": {
        "groupAffiliation": "Shadow Cabinet, Heroes, Teen Titans",
        "relatives": "Robert Hawkins (father), Jean Hawkins (mother), Sharon Hawkins (sister), Homer Hawkins (grandfather), Teshom? Hawkins (uncle, deceased),"
      },
      "images": {
        "xs": "images/characters/xs/634-static.jpg",
        "sm": "images/characters/sm/634-static.jpg",
        "md": "images/characters/md/634-static.jpg",
        "lg": "images/characters/lg/634-static.jpg"
      }
    },
    {
      "id": 635,
      "name": "Steel",
      "slug": "635-steel",
      "powerstats": {
        "intelligence": 81,
        "strength": 82,
        "speed": 53,
        "durability": 90,
        "power": 64,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "290 lb",
          "131 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "John Henry Irons",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Man of Steel",
          "Henry Johnson"
        ],
        "placeOfBirth": "Washington, D.C.",
        "firstAppearance": "Adventures of Superman #500 (1993)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Weapons designer, former steelworker",
        "base": "Steelworks, Metropolis; formerly Jersey City and Washington D.C."
      },
      "connections": {
        "groupAffiliation": "Reserve member of the Justice League of America",
        "relatives": "Mrs. Irons (mother, deceased), Mr. Irons (father, deceased), Maternal Grandmother (deceased), maternal grandfather (deceased), Butter (grandfather), Bess (grandmother, deceased), Clay Irons (brother), Jemahl Irons (nephew), Blondell Irons (sister-in-law), Natasha Irons (Starlight, niece), Paco (nephew), Tyke (former foster nephew)"
      },
      "images": {
        "xs": "images/characters/xs/635-steel.jpg",
        "sm": "images/characters/sm/635-steel.jpg",
        "md": "images/characters/md/635-steel.jpg",
        "lg": "images/characters/lg/635-steel.jpg"
      }
    },
    {
      "id": 637,
      "name": "Steppenwolf",
      "slug": "637-steppenwolf",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "New God",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "203 lb",
          "91 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Steppenwulf"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The New Gods #7",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/637-steppenwolf.jpg",
        "sm": "images/characters/sm/637-steppenwolf.jpg",
        "md": "images/characters/md/637-steppenwolf.jpg",
        "lg": "images/characters/lg/637-steppenwolf.jpg"
      }
    },
    {
      "id": 638,
      "name": "Storm",
      "slug": "638-storm",
      "powerstats": {
        "intelligence": 75,
        "strength": 10,
        "speed": 47,
        "durability": 30,
        "power": 88,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "127 lb",
          "57 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Ororo Munroe",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Ororo Iqadi T'Challa",
          "Queen Ororo",
          "Ororo Komo Wakandas,White Queen",
          "Weather Witch",
          "Windrider",
          "Goddess",
          "Mistress of the Elements",
          "Princess of N'Dare",
          "High Priestess Windrider",
          "Goddess",
          "Mistress of the Elements",
          "Princess of N'Dare",
          "High Priestess"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "Giant-Size X-Men #1 (May, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "Xavier Institute, Salem Center, Westchester County, New York State"
      },
      "connections": {
        "groupAffiliation": "X-Men (Jean Grey School member, leader); formerly X-Force (Strike Team); Murder Circus (brainwashed), Extinction Team, Avengers[3], Fantastic Four, X.S.E., X-Treme X-Men, Tokyo Arena, The Twelve, Seven Brides of Set, Hellfire Club (Inner Circle), Morlocks",
        "relatives": "Ayesha of Balobedu (ancestor), Ashake of Egypt (ancestor), Ashake of Mero? (ancestor), unnamed ancestor, Harriet Munroe (paternal grandmother), unnamed paternal grandfather, unnamed maternal grandmother, David Munroe (father, deceased), N'Dar? Munroe (mother, deceased), Ainet (unofficial foster mother), Achmed El Gib?r (unofficial foster father), Colonel Shetani (maternal uncle), unnamed paternal aunt (deceased), David Munroe, Jr. (cousin), Munroe Family (relatives), Black Panther (T'Challa) (ex-husband, marriage annulled)"
      },
      "images": {
        "xs": "images/characters/xs/638-storm.jpg",
        "sm": "images/characters/sm/638-storm.jpg",
        "md": "images/characters/md/638-storm.jpg",
        "lg": "images/characters/lg/638-storm.jpg"
      }
    },
    {
      "id": 640,
      "name": "Sunspot",
      "slug": "640-sunspot",
      "powerstats": {
        "intelligence": 63,
        "strength": 63,
        "speed": 35,
        "durability": 25,
        "power": 90,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "brown",
        "hairColor": "black"
      },
      "biography": {
        "fullName": "Roberto DaCosta",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Robert DaCosta",
          "Bobby; Black Rook",
          "Black King",
          "Reignfire"
        ],
        "placeOfBirth": "Rio de Janeiro, Brazil",
        "firstAppearance": "Marvel Graphic Novel #4 (October, 1982)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, businessman",
        "base": "1128 Mission Street, San Francisco, California"
      },
      "connections": {
        "groupAffiliation": "Avengers; formerly X-Men, New Mutants, Young X-Men, X-Corporation (Los Angeles branch), MLF, X-Force, Fallen Angels, Hellfire Club, Bratpack",
        "relatives": "Emmanuel da Costa (father, deceased), Nina da Costa (mother), Reignfire (genetic copy, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/640-sunspot.jpg",
        "sm": "images/characters/sm/640-sunspot.jpg",
        "md": "images/characters/md/640-sunspot.jpg",
        "lg": "images/characters/lg/640-sunspot.jpg"
      }
    },
    {
      "id": 641,
      "name": "Superboy",
      "slug": "641-superboy",
      "powerstats": {
        "intelligence": 75,
        "strength": 95,
        "speed": 83,
        "durability": 90,
        "power": 95,
        "combat": 60
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "150 lb",
          "68 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Kon-El / Conner Kent",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Experiment 13; Superman; Project: Superman; Carl Krummett; Project: Lionel Luthor; The Metropolis Kid",
          "Superman"
        ],
        "placeOfBirth": "Project Cadmus cloning facility",
        "firstAppearance": "Adventures of Superman #500 (June, 1993)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "San Francisco; Smallville; Formerly Metropolis; Formerly Honolulu"
      },
      "connections": {
        "groupAffiliation": "Teen Titans, Legion of Super-Heroes, Team Superman; Formerly Young Justice, Project Cadmus, Ravers",
        "relatives": "Superman (Kryptonian genetic template), Lex Luthor (Human genetic template), Match (clone)"
      },
      "images": {
        "xs": "images/characters/xs/641-superboy.jpg",
        "sm": "images/characters/sm/641-superboy.jpg",
        "md": "images/characters/md/641-superboy.jpg",
        "lg": "images/characters/lg/641-superboy.jpg"
      }
    },
    {
      "id": 642,
      "name": "Superboy-Prime",
      "slug": "642-superboy-prime",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black / Blue"
      },
      "biography": {
        "fullName": "Kal-El",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Superman-Prime; Prime; Superboy; Clark Kent; Clarkie; Time Trapper"
        ],
        "placeOfBirth": "Krypton (Earth-Prime)",
        "firstAppearance": "DC Comics Presents #87 (November, 1985)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "currently a recreation of Earth-Prime, formerly Qward, Anti-Matter Universe."
      },
      "connections": {
        "groupAffiliation": "Formerly Black Lantern Corps, Legion of Super-Villains, Sinestro Corps",
        "relatives": "Jor-El (father; deceased); Lara (mother, deceased); Jerry Kent (adoptive father); Naomi Kent (adoptive mother)"
      },
      "images": {
        "xs": "images/characters/xs/642-superboy-prime.jpg",
        "sm": "images/characters/sm/642-superboy-prime.jpg",
        "md": "images/characters/md/642-superboy-prime.jpg",
        "lg": "images/characters/lg/642-superboy-prime.jpg"
      }
    },
    {
      "id": 643,
      "name": "Supergirl",
      "slug": "643-supergirl",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Female",
        "race": "Kryptonian",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Kara Zor-El",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Linda Lang",
          "Kara-El",
          "Kara Kent",
          "Flamebird",
          "Trinity Child",
          "Teen of Tomorrow",
          "The Girl of Steel",
          "The Maid of Might",
          "The Princess of Power",
          "Mighty Maid",
          "Claire Connors",
          "Bluebird"
        ],
        "placeOfBirth": "Argo City, Krypton",
        "firstAppearance": "Superman/Batman #8 (May, 2004)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Intern, Adventurer, Student, Crime-Fighter",
        "base": "Metropolis"
      },
      "connections": {
        "groupAffiliation": "Formerly Justice League of America, Supermen of America, Justice League of Amazons, Kent Family, Superman Family, Kryptonian Science Guild, Teen Titans, Legion of Super-Heroes, Outsiders",
        "relatives": "Zor-El (father), Allura In-Ze (mother), Jor-El II (uncle, deceased), Lara Lor-Van (aunt, deceased), Kal-El (Superman,Clark Kent, cousin), Lois Lane (cousin-in-law), Jonathan Kent (adopted uncle), Martha Kent (adopted aunt), Kon-El (Superboy, Conner Kent, clone cousin, deceased), Nim-El (uncle), Dondra Klu-Ta (aunt), Don-El (cousin), Jor-El I (praternal grandfather, deceased), Nimda An-Dor (paternal grandmother, deceased), Lar-Van (maternal grandfather, deceased), Lara Rok-Var (maternal grandmother, deceased), Val-El, Sul-El, Tala-El, Hatu-El, Gam-El (ancestors, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/643-supergirl.jpg",
        "sm": "images/characters/sm/643-supergirl.jpg",
        "md": "images/characters/md/643-supergirl.jpg",
        "lg": "images/characters/lg/643-supergirl.jpg"
      }
    },
    {
      "id": 644,
      "name": "Superman",
      "slug": "644-superman",
      "powerstats": {
        "intelligence": 94,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Kryptonian",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Clark Kent",
        "alterEgos": "Superman Prime One-Million",
        "aliases": [
          "Clark Joseph Kent",
          "The Man of Steel",
          "the Man of Tomorrow",
          "the Last Son of Krypton",
          "Big Blue",
          "the Metropolis Marvel",
          "the Action Ace"
        ],
        "placeOfBirth": "Krypton",
        "firstAppearance": "ACTION COMICS #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Reporter for the Daily Planet and novelist",
        "base": "Metropolis"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
        "relatives": "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)"
      },
      "images": {
        "xs": "images/characters/xs/644-superman.jpg",
        "sm": "images/characters/sm/644-superman.jpg",
        "md": "images/characters/md/644-superman.jpg",
        "lg": "images/characters/lg/644-superman.jpg"
      }
    },
    {
      "id": 645,
      "name": "Swamp Thing",
      "slug": "645-swamp-thing",
      "powerstats": {
        "intelligence": 88,
        "strength": 95,
        "speed": 25,
        "durability": 100,
        "power": 100,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "God / Eternal",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Alec Holland",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Green Man",
          "Swampy",
          "the Weed",
          "Le Bon Gumbo",
          "Smalsh-Yegger (on Rann)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Swamp Thing #1 (November, 1972)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Planet Elemental, former Biochemist",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "formerly (Parliament of Trees; Parliament of Stones, Parliament of Flames, Parliament of Waves, and Parliament of Vapors), The Parliament of Worlds",
        "relatives": "Larry Holland (father, deceased); Alice Holland (mother, deceased); Edward Holland (brother); Linda Holland (first wife, deceased); Abigail Holland (second wife); Tef? Holland (daughter); Gregori Arcane (father-in-law, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/645-swamp-thing.jpg",
        "sm": "images/characters/sm/645-swamp-thing.jpg",
        "md": "images/characters/md/645-swamp-thing.jpg",
        "lg": "images/characters/lg/645-swamp-thing.jpg"
      }
    },
    {
      "id": 646,
      "name": "Swarm",
      "slug": "646-swarm",
      "powerstats": {
        "intelligence": 75,
        "strength": 18,
        "speed": 50,
        "durability": 90,
        "power": 38,
        "combat": 35
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "104 lb",
          "47 kg"
        ],
        "eyeColor": "Yellow",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Fritz von Meyer",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Champions #14 (July, 1977)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Ph.D. in toxicology & entomology",
        "base": "Formerly South Africa"
      },
      "connections": {
        "groupAffiliation": "Leader of the All-New Sinister Six; formerly Exterminators, Nazi Party",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/646-swarm.jpg",
        "sm": "images/characters/sm/646-swarm.jpg",
        "md": "images/characters/md/646-swarm.jpg",
        "lg": "images/characters/lg/646-swarm.jpg"
      }
    },
    {
      "id": 648,
      "name": "Synch",
      "slug": "648-synch",
      "powerstats": {
        "intelligence": 75,
        "strength": 67,
        "speed": 23,
        "durability": 28,
        "power": 74,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Everett Thomas",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "X-Men #36 (1994)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Student",
        "base": "Massachusetts Academy"
      },
      "connections": {
        "groupAffiliation": "Generation X",
        "relatives": "Stan Thomas (father), Ida Thomas (mother), Kim Ho Twae (adopted sister)"
      },
      "images": {
        "xs": "images/characters/xs/648-synch.jpg",
        "sm": "images/characters/sm/648-synch.jpg",
        "md": "images/characters/md/648-synch.jpg",
        "lg": "images/characters/lg/648-synch.jpg"
      }
    },
    {
      "id": 649,
      "name": "T-1000",
      "slug": "649-t-1000",
      "powerstats": {
        "intelligence": 75,
        "strength": 34,
        "speed": 33,
        "durability": 100,
        "power": 100,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "325 lb",
          "146 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Cyberdyne Systems Series 1000 Terminator",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "T-1001",
          "T-1002"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Terminator 2: Judgment Day",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Skynet",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/649-t-1000.jpg",
        "sm": "images/characters/sm/649-t-1000.jpg",
        "md": "images/characters/md/649-t-1000.jpg",
        "lg": "images/characters/lg/649-t-1000.jpg"
      }
    },
    {
      "id": 650,
      "name": "T-800",
      "slug": "650-t-800",
      "powerstats": {
        "intelligence": 75,
        "strength": 34,
        "speed": 17,
        "durability": 60,
        "power": 73,
        "combat": 65
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "390 lb",
          "176 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Cyberdyne Systems Series 800 Terminator Model 101",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Terminator"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Terminator (1984)",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Assassin",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Skynet",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/650-t-800.jpg",
        "sm": "images/characters/sm/650-t-800.jpg",
        "md": "images/characters/md/650-t-800.jpg",
        "lg": "images/characters/lg/650-t-800.jpg"
      }
    },
    {
      "id": 651,
      "name": "T-850",
      "slug": "651-t-850",
      "powerstats": {
        "intelligence": 75,
        "strength": 80,
        "speed": 25,
        "durability": 90,
        "power": 83,
        "combat": 75
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "440 lb",
          "198 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Cyberdyne Systems Series 850 Terminator",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Terminator"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Terminator 3: Rise of the Machines (2003)",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Assassin",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Skynet",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/651-t-850.jpg",
        "sm": "images/characters/sm/651-t-850.jpg",
        "md": "images/characters/md/651-t-850.jpg",
        "lg": "images/characters/lg/651-t-850.jpg"
      }
    },
    {
      "id": 652,
      "name": "T-X",
      "slug": "652-t-x",
      "powerstats": {
        "intelligence": 75,
        "strength": 63,
        "speed": 29,
        "durability": 85,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": "Cyborg",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "330 lb",
          "149 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Cyberdyne Systems Series X Terminator",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Dark Horse Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Assassin / Genesis Overseer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Skynet",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/652-t-x.jpg",
        "sm": "images/characters/sm/652-t-x.jpg",
        "md": "images/characters/md/652-t-x.jpg",
        "lg": "images/characters/lg/652-t-x.jpg"
      }
    },
    {
      "id": 653,
      "name": "Taskmaster",
      "slug": "653-taskmaster",
      "powerstats": {
        "intelligence": 75,
        "strength": 12,
        "speed": 50,
        "durability": 20,
        "power": 63,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Tony Masters",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Avengers #195",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Sheriff, Assassin, Mercenary; formerly Military Trainer, Combat Instructor, Head of Initiative training camp",
        "base": "Bagalia; A.I.M Island, Taskmaster's Academy"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Mercedes Merced (wife), Jeanne Foucault (Finesse, alleged daughter)"
      },
      "images": {
        "xs": "images/characters/xs/653-taskmaster.jpg",
        "sm": "images/characters/sm/653-taskmaster.jpg",
        "md": "images/characters/md/653-taskmaster.jpg",
        "lg": "images/characters/lg/653-taskmaster.jpg"
      }
    },
    {
      "id": 654,
      "name": "Tempest",
      "slug": "654-tempest",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 45,
        "durability": 28,
        "power": 66,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "121 lb",
          "54 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Angel Salvadore Bohusk",
        "alterEgos": "Angel Salvadore",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "New X-Men #118 (November, 2001)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly New Warriors; Special Class",
        "relatives": "Tito Bohusk (son); Axel Bohusk (son); Kara Bohusk (daughter); three other unidentified children;"
      },
      "images": {
        "xs": "images/characters/xs/654-tempest.jpg",
        "sm": "images/characters/sm/654-tempest.jpg",
        "md": "images/characters/md/654-tempest.jpg",
        "lg": "images/characters/lg/654-tempest.jpg"
      }
    },
    {
      "id": 655,
      "name": "Thanos",
      "slug": "655-thanos",
      "powerstats": {
        "intelligence": 100,
        "strength": 100,
        "speed": 33,
        "durability": 100,
        "power": 100,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Eternal",
        "height": [
          "6'7",
          "201 cm"
        ],
        "weight": [
          "985 lb",
          "443 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Thanos",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Mad Titan",
          "Masterlord",
          "The Overmaster",
          "Chins"
        ],
        "placeOfBirth": "Titan",
        "firstAppearance": "Iron Man #55",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Conqueror, worshiper of Death",
        "base": "Mobile, formerly Sanctuary II, Titan"
      },
      "connections": {
        "groupAffiliation": "Zodiac (ally); formerly Infinity Watch, Defenders",
        "relatives": "A'Lars (father): Sui-San (mother, deceased; Eros (brother);Kronos (paternal Grandfather, deceased); Daina (paternal grandmother, deceased); Zuras (uncle, deceased); Thena (cousin); Gamora (foster daughter);Nebula (alleged granddaughter); Rot (\"child\" by Death);"
      },
      "images": {
        "xs": "images/characters/xs/655-thanos.jpg",
        "sm": "images/characters/sm/655-thanos.jpg",
        "md": "images/characters/md/655-thanos.jpg",
        "lg": "images/characters/lg/655-thanos.jpg"
      }
    },
    {
      "id": 657,
      "name": "The Comedian",
      "slug": "657-the-comedian",
      "powerstats": {
        "intelligence": 63,
        "strength": 14,
        "speed": 17,
        "durability": 10,
        "power": 12,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Edward Morgen Blake",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Eddie Blake"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Watchmen #1 (September, 1986)",
        "publisher": "DC Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Former Adventurer; Government Agent",
        "base": "New York City"
      },
      "connections": {
        "groupAffiliation": "Formerly Crimebusters, Minutemen",
        "relatives": "Silk Spectre (Laurel \"Laurie\" Juspeczyk) (daughter)"
      },
      "images": {
        "xs": "images/characters/xs/657-the-comedian.jpg",
        "sm": "images/characters/sm/657-the-comedian.jpg",
        "md": "images/characters/md/657-the-comedian.jpg",
        "lg": "images/characters/lg/657-the-comedian.jpg"
      }
    },
    {
      "id": 658,
      "name": "Thing",
      "slug": "658-thing",
      "powerstats": {
        "intelligence": 75,
        "strength": 84,
        "speed": 21,
        "durability": 100,
        "power": 38,
        "combat": 80
      },
      "appearance": {
        "gender": "Male",
        "race": "Human / Radiation",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "500 lb",
          "225 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Ben Grimm",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Blackbeard the Pirate",
          "Grim Ben",
          "Dr. Josiah Verpoorteen"
        ],
        "placeOfBirth": "New York City, New York",
        "firstAppearance": "Fantastic Four #1 (November, 1961)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, former Air Force test pilot",
        "base": "Baxter Building, New York City, New York (formerly) Four Freedoms Plaza, Pier Four;"
      },
      "connections": {
        "groupAffiliation": "Fantastic Four formerly Avengers West Coast, Unlimited Class Wrestling Federation, Thunderiders",
        "relatives": "Daniel (father, deceased), Elsie (mother, deceased), Daniel Jr. (brother, deceased), Jacob ('Jake,' uncle), Alyce (aunt, deceased), Pentunia ('Penny,' aunt, Jacob's second wife)"
      },
      "images": {
        "xs": "images/characters/xs/658-thing.jpg",
        "sm": "images/characters/sm/658-thing.jpg",
        "md": "images/characters/md/658-thing.jpg",
        "lg": "images/characters/lg/658-thing.jpg"
      }
    },
    {
      "id": 659,
      "name": "Thor",
      "slug": "659-thor",
      "powerstats": {
        "intelligence": 69,
        "strength": 100,
        "speed": 83,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Asgardian",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "640 lb",
          "288 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Thor Odinson",
        "alterEgos": "Rune King Thor",
        "aliases": [
          "Donald Blake",
          "Sigurd Jarlson",
          "Jake Olsen",
          "Donar the Mighty"
        ],
        "placeOfBirth": "Asgard",
        "firstAppearance": "Journey into Mystery #83 (August, 1962)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "King of Asgard; formerly EMS Technician; Physician",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "Avengers",
        "relatives": "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
      },
      "images": {
        "xs": "images/characters/xs/659-thor.jpg",
        "sm": "images/characters/sm/659-thor.jpg",
        "md": "images/characters/md/659-thor.jpg",
        "lg": "images/characters/lg/659-thor.jpg"
      }
    },
    {
      "id": 660,
      "name": "Thor Girl",
      "slug": "660-thor-girl",
      "powerstats": {
        "intelligence": 75,
        "strength": 83,
        "speed": 70,
        "durability": 84,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Asgardian",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "317 lb",
          "143 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Tarene",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Asgard Lass",
          "the Designate",
          "the Destroyer",
          "Hammerette",
          "Hammer Girl",
          "Hammer Lass",
          "Tara Olson",
          "Spirit of the Jewel",
          "the Supreme",
          "Thoreta",
          "Thorita",
          "Thor Lass"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Thor, Volume 2, #22; (as Thor Girl) Thor, Volume 2, #33",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Camp Hammond; FormerlyNew York City, Formerly Asgard"
      },
      "connections": {
        "groupAffiliation": "Ally of the Asgardians",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/660-thor-girl.jpg",
        "sm": "images/characters/sm/660-thor-girl.jpg",
        "md": "images/characters/md/660-thor-girl.jpg",
        "lg": "images/characters/lg/660-thor-girl.jpg"
      }
    },
    {
      "id": 661,
      "name": "Thunderbird",
      "slug": "661-thunderbird",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 27,
        "durability": 32,
        "power": 13,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "225 lb",
          "101 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "John Proudstar",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Camp Verde, Arizona",
        "firstAppearance": "Giant-Size X-Men #1 (1975)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former adventurer, student, Marine",
        "base": "Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly US Marine Corp",
        "relatives": "Unidentified grandfather (deceased), Neal Proudstar (father, deceased), Maria Proudstar (mother, deceased), James Proudstar (Warpath, brother)"
      },
      "images": {
        "xs": "images/characters/xs/661-thunderbird.jpg",
        "sm": "images/characters/sm/661-thunderbird.jpg",
        "md": "images/characters/md/661-thunderbird.jpg",
        "lg": "images/characters/lg/661-thunderbird.jpg"
      }
    },
    {
      "id": 664,
      "name": "Thunderstrike",
      "slug": "664-thunderstrike",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 70,
        "durability": 84,
        "power": 42,
        "combat": 72
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "640 lb",
          "288 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Eric Kevin Masterson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Thor"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(as Masterson) Thor #391; (as Thor) Thor #432; (as Thunderstrike) Thunderstrike #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "(as Thunderstrike) Adventurer, crimefighter, (as Masterson) Architect",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "(At time of death) Avengers; (Formerly) Legion of the Unliving, Thor Corps",
        "relatives": "Marcy Masterson Steele (wife, divorced), Kevin Masterson (son)"
      },
      "images": {
        "xs": "images/characters/xs/664-thunderstrike.jpg",
        "sm": "images/characters/sm/664-thunderstrike.jpg",
        "md": "images/characters/md/664-thunderstrike.jpg",
        "lg": "images/characters/lg/664-thunderstrike.jpg"
      }
    },
    {
      "id": 665,
      "name": "Thundra",
      "slug": "665-thundra",
      "powerstats": {
        "intelligence": 38,
        "strength": 81,
        "speed": 32,
        "durability": 64,
        "power": 26,
        "combat": 54
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "7'2",
          "218 cm"
        ],
        "weight": [
          "350 lb",
          "158 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Thundra",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fantastic Four #129 (December, 1972)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Ruler, warrior",
        "base": "Mobile; United Sisterhood Republic of North America"
      },
      "connections": {
        "groupAffiliation": "Lady Liberators; Empress of the Sisterhood; formerly Frightful Four, Fantastic Four, former agent of Roxxon Oil Corporation",
        "relatives": "Superia (alleged ancestor), Arkon (consort) Lyra (alternate reality daughter)"
      },
      "images": {
        "xs": "images/characters/xs/665-thundra.jpg",
        "sm": "images/characters/sm/665-thundra.jpg",
        "md": "images/characters/md/665-thundra.jpg",
        "lg": "images/characters/lg/665-thundra.jpg"
      }
    },
    {
      "id": 666,
      "name": "Tiger Shark",
      "slug": "666-tiger-shark",
      "powerstats": {
        "intelligence": 38,
        "strength": 72,
        "speed": 46,
        "durability": 70,
        "power": 51,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "450 lb",
          "203 kg"
        ],
        "eyeColor": "Grey",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Todd Arliss",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Arlys Tigershark"
        ],
        "placeOfBirth": "Pasadena, California",
        "firstAppearance": "Sub-Mariner #5 (September, 1968)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Villains for Hire, Lethal Legion, Dr. Dorcas; Masters of Evil; Namor's Deep Six; Attuma's Deep Six; Offenders",
        "relatives": "Diane Newell (sister); Mara (wife, deceased); Walter Newell (brother-in-law);"
      },
      "images": {
        "xs": "images/characters/xs/666-tiger-shark.jpg",
        "sm": "images/characters/sm/666-tiger-shark.jpg",
        "md": "images/characters/md/666-tiger-shark.jpg",
        "lg": "images/characters/lg/666-tiger-shark.jpg"
      }
    },
    {
      "id": 667,
      "name": "Tigra",
      "slug": "667-tigra",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 53,
        "durability": 38,
        "power": 33,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "180 lb",
          "81 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Greer Grant Nelson",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Cat",
          "Greer Sorenson"
        ],
        "placeOfBirth": "Presumably Chicago Illinois USA",
        "firstAppearance": "The Cat #1",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Laboratory assistant, model, adventurer, NYC police",
        "base": "New York City, New York USA"
      },
      "connections": {
        "groupAffiliation": "Avengers",
        "relatives": "Mr. Grant (father), Mrs. Grant (mother, deceased), William Nelson (husband, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/667-tigra.jpg",
        "sm": "images/characters/sm/667-tigra.jpg",
        "md": "images/characters/md/667-tigra.jpg",
        "lg": "images/characters/lg/667-tigra.jpg"
      }
    },
    {
      "id": 668,
      "name": "Tinkerer",
      "slug": "668-tinkerer",
      "powerstats": {
        "intelligence": 100,
        "strength": 10,
        "speed": 23,
        "durability": 14,
        "power": 10,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "Phineas Mason",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Amazing Spider-Man #2 (1963)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Inventor and technician serving the underworld",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Deborah Watts Mason (wife, deceased), Rick Mason (aka Agent, son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/668-tinkerer.jpg",
        "sm": "images/characters/sm/668-tinkerer.jpg",
        "md": "images/characters/md/668-tinkerer.jpg",
        "lg": "images/characters/lg/668-tinkerer.jpg"
      }
    },
    {
      "id": 670,
      "name": "Toad",
      "slug": "670-toad",
      "powerstats": {
        "intelligence": 50,
        "strength": 34,
        "speed": 58,
        "durability": 56,
        "power": 70,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "169 lb",
          "76 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Mortimer Toynbee",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "The Terrible Toad-King"
        ],
        "placeOfBirth": "York, England",
        "firstAppearance": "X-Men #4 (March, 1964)",
        "publisher": "Marvel Comics",
        "alignment": "Neutral"
      },
      "work": {
        "occupation": "Former criminal",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "198; (formerly) Brotherhood of Evil Mutants, Misfits; (formerly) associate of Gideon, Emma Frost",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/670-toad.jpg",
        "sm": "images/characters/sm/670-toad.jpg",
        "md": "images/characters/md/670-toad.jpg",
        "lg": "images/characters/lg/670-toad.jpg"
      }
    },
    {
      "id": 671,
      "name": "Toxin",
      "slug": "671-toxin",
      "powerstats": {
        "intelligence": 56,
        "strength": 73,
        "speed": 70,
        "durability": 84,
        "power": 82,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "215 lb",
          "97 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Patrick Mulligan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Larry"
        ],
        "placeOfBirth": "New York City",
        "firstAppearance": "Venom vs. Carnage #1 (2004)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Police officer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Ally of Spider-Man and Black Cat",
        "relatives": "Gina Mulligan (wife), Edward Mulligan (son), Mr. Mulligan (father), Mrs. Mulligan (mother), Carnage (\"father\"), Venom (\"grandfather\")"
      },
      "images": {
        "xs": "images/characters/xs/671-toxin.jpg",
        "sm": "images/characters/sm/671-toxin.jpg",
        "md": "images/characters/md/671-toxin.jpg",
        "lg": "images/characters/lg/671-toxin.jpg"
      }
    },
    {
      "id": 672,
      "name": "Toxin",
      "slug": "672-toxin",
      "powerstats": {
        "intelligence": 75,
        "strength": 80,
        "speed": 42,
        "durability": 85,
        "power": 97,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "260 lb",
          "117 kg"
        ],
        "eyeColor": "Black",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Eddie Brock",
        "alterEgos": "Anti-Venom, Venom",
        "aliases": [
          "Eddie",
          "Sister Edwina",
          "\"Ed\"",
          "Edwin Brock",
          "Venom",
          "Lethal Protector",
          "998th",
          "Anti-Venom",
          "White Venom"
        ],
        "placeOfBirth": "San Francisco, California",
        "firstAppearance": "Venom Vol 2 #17",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Vigilante; former symbiote hunter, shelter attendant, government operative, journalist for the Daily Globe",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "Formerly; temporary partner of Agent Venom, Savage Six, Sinister Six, Revengers, former partner of Vengeance, Spider-Man, Scarlet Spider. Volunteer at F.E.A.S.T.",
        "relatives": "Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes' relatives: Anti-Venom Symbiote (former symbiote, uncle and former brother, deceased), Venom Symbiote (former symbiote, grandfather, former brother), Agony, Phage, Riot, Lasher (uncles, former sons), Scorn (sister, former niece), Carnage (father, former son), Scream (aunt, former daughter, deceased), Hybrid (uncle, former son, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/672-toxin.jpg",
        "sm": "images/characters/sm/672-toxin.jpg",
        "md": "images/characters/md/672-toxin.jpg",
        "lg": "images/characters/lg/672-toxin.jpg"
      }
    },
    {
      "id": 676,
      "name": "Triplicate Girl",
      "slug": "676-triplicate-girl",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 23,
        "durability": 42,
        "power": 44,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "130 lb",
          "59 kg"
        ],
        "eyeColor": "Purple",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Luornu Durgo",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Duo Damsel",
          "Una",
          "Triad"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Teen Titans/Legion Special #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Earth, 31st century"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/676-triplicate-girl.jpg",
        "sm": "images/characters/sm/676-triplicate-girl.jpg",
        "md": "images/characters/md/676-triplicate-girl.jpg",
        "lg": "images/characters/lg/676-triplicate-girl.jpg"
      }
    },
    {
      "id": 677,
      "name": "Triton",
      "slug": "677-triton",
      "powerstats": {
        "intelligence": 56,
        "strength": 63,
        "speed": 50,
        "durability": 65,
        "power": 35,
        "combat": 55
      },
      "appearance": {
        "gender": "Male",
        "race": "Inhuman",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Triton",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Island of Attilan, Atlantic Ocean",
        "firstAppearance": "Fantastic Four #45 (December, 1965)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Inhuman Royal Family, Universal Inhumans, Royal Guard, New Inhuman Elite; formerly Shi'ar Army Elite Corps & Imperial Guard[citation needed], Namor's Deep Six",
        "relatives": "Mander, Azur (parents, deceased), Karnak (brother, deceased), Magnar, Zeta (paternal grandparents), Kobar, La (maternal grandparents), Rynda (paternal aunt), Ambur (maternal aunt) ,Black Bolt, Maximus, Medusa, Crystal (cousins)"
      },
      "images": {
        "xs": "images/characters/xs/677-triton.jpg",
        "sm": "images/characters/sm/677-triton.jpg",
        "md": "images/characters/md/677-triton.jpg",
        "lg": "images/characters/lg/677-triton.jpg"
      }
    },
    {
      "id": 678,
      "name": "Two-Face",
      "slug": "678-two-face",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 12,
        "durability": 14,
        "power": 9,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "182 lb",
          "82 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Harvey Dent",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Apollo"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Reformed criminal; former district attorney",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Duela Dent (Daughter), Gilda Dent (Wife), Poison Ivy (Fianc?e), Rachel Dawes (Girlfriend)"
      },
      "images": {
        "xs": "images/characters/xs/678-two-face.jpg",
        "sm": "images/characters/sm/678-two-face.jpg",
        "md": "images/characters/md/678-two-face.jpg",
        "lg": "images/characters/lg/678-two-face.jpg"
      }
    },
    {
      "id": 679,
      "name": "Ultragirl",
      "slug": "679-ultragirl",
      "powerstats": {
        "intelligence": 50,
        "strength": 80,
        "speed": 35,
        "durability": 70,
        "power": 35,
        "combat": 80
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "5'6",
          "168 cm"
        ],
        "weight": [
          "233 lb",
          "105 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Tsu-Zana",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Suzy Sherman",
          "Ultra-Girl"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Model",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Initiative, New Warriors",
        "relatives": "Toby Sherman (father)"
      },
      "images": {
        "xs": "images/characters/xs/679-ultragirl.jpg",
        "sm": "images/characters/sm/679-ultragirl.jpg",
        "md": "images/characters/md/679-ultragirl.jpg",
        "lg": "images/characters/lg/679-ultragirl.jpg"
      }
    },
    {
      "id": 680,
      "name": "Ultron",
      "slug": "680-ultron",
      "powerstats": {
        "intelligence": 88,
        "strength": 83,
        "speed": 42,
        "durability": 100,
        "power": 100,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'9",
          "206 cm"
        ],
        "weight": [
          "735 lb",
          "331 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Ultron",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Crimson Cowl",
          "Great Devil",
          "Great Ultron",
          "Iron Man",
          "Mark",
          "Omega",
          "Ultimate Ultron",
          "Ultron-5 (and hundreds of other sequential numerical designations)",
          "Ultron Mark Twelve",
          "Ho Yinsen"
        ],
        "placeOfBirth": "Created in Cresskill, New Jersey",
        "firstAppearance": "Avengers #54 (July, 1968)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Mass murderer, scientist, would-be world conqueror, ruler of Phalanx",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Phalanx; formerly Sons of Yinsen, Lethal Legion, Masters of Evil",
        "relatives": "Hank Pym (Yellowjacket, creator, \"father\"), Janet Van Dyne (Wasp, regarded by Ultron as \"mother\" due to marriage to Pym), Jocasta (creation, former mate), Alkhema (creation, former mate, deactivated), Vision (creation, \"son\"), Victor Mancha (creation, son), Rex (creation, pet, deactivated), Robos & Bio-Synthezoids (creations of Alkhema, \"grandchildren\";, destroyed); Simon Williams (Wonder Man), Eric Williams (Grim Reaper) & Wanda Maximoff (Scarlet Witch), all regarded by Ultron as part of his \"extended family\" due to their familial connections with the Vision"
      },
      "images": {
        "xs": "images/characters/xs/680-ultron.jpg",
        "sm": "images/characters/sm/680-ultron.jpg",
        "md": "images/characters/md/680-ultron.jpg",
        "lg": "images/characters/lg/680-ultron.jpg"
      }
    },
    {
      "id": 681,
      "name": "Utgard-Loki",
      "slug": "681-utgard-loki",
      "powerstats": {
        "intelligence": 50,
        "strength": 80,
        "speed": 23,
        "durability": 84,
        "power": 85,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": "Frost Giant",
        "height": [
          "50'0",
          "15.2 meters"
        ],
        "weight": [
          "128000 lb",
          "58 tons"
        ],
        "eyeColor": "Blue",
        "hairColor": "White"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Jotunheim",
        "firstAppearance": "unknown",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Monarch",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Giants of Jotunheim",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/681-utgard-loki.jpg",
        "sm": "images/characters/sm/681-utgard-loki.jpg",
        "md": "images/characters/md/681-utgard-loki.jpg",
        "lg": "images/characters/lg/681-utgard-loki.jpg"
      }
    },
    {
      "id": 685,
      "name": "Vanisher",
      "slug": "685-vanisher",
      "powerstats": {
        "intelligence": 63,
        "strength": 10,
        "speed": 75,
        "durability": 56,
        "power": 61,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Telford Porter"
        ],
        "placeOfBirth": "Boston, Massachusetts",
        "firstAppearance": "X-Men (Vol 1) #2",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal, former subversive",
        "base": "former) Factor Three headquarters, Europe; Beat Street Club, New York City"
      },
      "connections": {
        "groupAffiliation": "(former) Outer Circle of Enforcers II, Factor Three, Fallen Angels",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/685-vanisher.jpg",
        "sm": "images/characters/sm/685-vanisher.jpg",
        "md": "images/characters/md/685-vanisher.jpg",
        "lg": "images/characters/lg/685-vanisher.jpg"
      }
    },
    {
      "id": 687,
      "name": "Venom",
      "slug": "687-venom",
      "powerstats": {
        "intelligence": 75,
        "strength": 57,
        "speed": 65,
        "durability": 84,
        "power": 86,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "260 lb",
          "117 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Strawberry Blond"
      },
      "biography": {
        "fullName": "Eddie Brock",
        "alterEgos": "Anti-Venom, Toxin",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "New York, New York",
        "firstAppearance": "(as alien costume) Secret Wars #8, (behind the scenes) Web of Spider-Man #18, (actual appearance) Amazing Spider-Man #300",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Vigilante; former journalist for the Daily Globe, government operative",
        "base": "New York, New York"
      },
      "connections": {
        "groupAffiliation": "Sinister Six (formerly)",
        "relatives": "Eddie Brock: Carl Brock (father), Jamie Brock (mother), Anne Weying (She-Venom, ex wife, deceased); Venom symbiote: Carnage (bonded to Cletus Kasidy, 1st generation offspring), five forced offspring - one independant (bonded to Donna, last name unrevealed, 1st generation offspring), four forming a composite symbiote (Hybrid (bonded to Scott Washington, 1st generation offspring), Toxin (bonded to Patrick Mulligan, 2nd generation offspring)"
      },
      "images": {
        "xs": "images/characters/xs/687-venom.jpg",
        "sm": "images/characters/sm/687-venom.jpg",
        "md": "images/characters/md/687-venom.jpg",
        "lg": "images/characters/lg/687-venom.jpg"
      }
    },
    {
      "id": 688,
      "name": "Venom II",
      "slug": "688-venom-ii",
      "powerstats": {
        "intelligence": 50,
        "strength": 57,
        "speed": 47,
        "durability": 70,
        "power": 54,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Angelo Fortunato",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Marvel Knights Spider-Man #7 (2005)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Vincente Paolo Fortunato (father), unidentified mother (deceased), Giacomo Fortunato (Jimmy-Six, brother), Anna Fortunato (sister), Mary Fortunato (sister-in-law), James Fortunato (nephew), other unidentified neices or nephews"
      },
      "images": {
        "xs": "images/characters/xs/688-venom-ii.jpg",
        "sm": "images/characters/sm/688-venom-ii.jpg",
        "md": "images/characters/md/688-venom-ii.jpg",
        "lg": "images/characters/lg/688-venom-ii.jpg"
      }
    },
    {
      "id": 689,
      "name": "Venom III",
      "slug": "689-venom-iii",
      "powerstats": {
        "intelligence": 63,
        "strength": 73,
        "speed": 35,
        "durability": 90,
        "power": 73,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "7'6",
          "229 cm"
        ],
        "weight": [
          "742 lb",
          "334 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "MacDonald Gargan",
        "alterEgos": "Scorpion",
        "aliases": [
          "Scorpion"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "(As Gargan) Amazing Spider-Man #19 (1964); (as Scorpion) Amazing Spider-Man #20 (1965); (as Venom) Marvel Knights: Spider-Man #10 (2005)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Government operative; former professional criminal, private eye",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Thunderbolts; formerly (as Scorpion) Masters of Evil, \"Spider-Man Revenge League\"; (as Venom) Sinister Twelve",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/689-venom-iii.jpg",
        "sm": "images/characters/sm/689-venom-iii.jpg",
        "md": "images/characters/md/689-venom-iii.jpg",
        "lg": "images/characters/lg/689-venom-iii.jpg"
      }
    },
    {
      "id": 690,
      "name": "Venompool",
      "slug": "690-venompool",
      "powerstats": {
        "intelligence": 69,
        "strength": 57,
        "speed": 63,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Symbiote",
        "height": [
          "7'5",
          "226 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Wade Wilson",
        "alterEgos": "Deadpool, Evil Deadpool",
        "aliases": [
          "Deadpool"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "What If? Iron Man: Demon in an Armor #1 (February, 2011)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Conqueror; Adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/690-venompool.jpg",
        "sm": "images/characters/sm/690-venompool.jpg",
        "md": "images/characters/md/690-venompool.jpg",
        "lg": "images/characters/lg/690-venompool.jpg"
      }
    },
    {
      "id": 692,
      "name": "Vibe",
      "slug": "692-vibe",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 17,
        "durability": 30,
        "power": 99,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "157 lb",
          "71 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Cisco Ramon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The New 52: FCBD Special Edition #1",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Rapture (Armando Ramon, brother), Dante Ramon (brother)"
      },
      "images": {
        "xs": "images/characters/xs/692-vibe.jpg",
        "sm": "images/characters/sm/692-vibe.jpg",
        "md": "images/characters/md/692-vibe.jpg",
        "lg": "images/characters/lg/692-vibe.jpg"
      }
    },
    {
      "id": 693,
      "name": "Vindicator",
      "slug": "693-vindicator",
      "powerstats": {
        "intelligence": 63,
        "strength": 63,
        "speed": 53,
        "durability": 64,
        "power": 58,
        "combat": 70
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "120 lb",
          "54 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Red"
      },
      "biography": {
        "fullName": "Heather Hudson",
        "alterEgos": "Vindicator II",
        "aliases": [
          "Guardian"
        ],
        "placeOfBirth": "Calgary, Alberta, Canada",
        "firstAppearance": "X-Men #139 (November, 1980)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "former secretary, researcher",
        "base": "Ottawa, Canada"
      },
      "connections": {
        "groupAffiliation": "Alpha Flight",
        "relatives": "Guardian, husband"
      },
      "images": {
        "xs": "images/characters/xs/693-vindicator.jpg",
        "sm": "images/characters/sm/693-vindicator.jpg",
        "md": "images/characters/md/693-vindicator.jpg",
        "lg": "images/characters/lg/693-vindicator.jpg"
      }
    },
    {
      "id": 696,
      "name": "Violet Parr",
      "slug": "696-violet-parr",
      "powerstats": {
        "intelligence": 56,
        "strength": 9,
        "speed": 13,
        "durability": 50,
        "power": 79,
        "combat": 15
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "4'6",
          "137 cm"
        ],
        "weight": [
          "90 lb",
          "41 kg"
        ],
        "eyeColor": "Violet",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Violet Parr",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Vi (nickname)",
          "The Queen of the Unseen",
          "Invisagirl (InvisaVi)"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The Incredibles (Movies, 2004)",
        "publisher": "Dark Horse Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Incredible Family, National Supers Agency",
        "relatives": "Robert Parr (Mr Incredible, father), Helen Parr (Elastigirl, mother), Dashiel Parr(Dash, brother), Jack-jack (brother)"
      },
      "images": {
        "xs": "images/characters/xs/696-violet-parr.jpg",
        "sm": "images/characters/sm/696-violet-parr.jpg",
        "md": "images/characters/md/696-violet-parr.jpg",
        "lg": "images/characters/lg/696-violet-parr.jpg"
      }
    },
    {
      "id": 697,
      "name": "Vision",
      "slug": "697-vision",
      "powerstats": {
        "intelligence": 100,
        "strength": 72,
        "speed": 54,
        "durability": 95,
        "power": 100,
        "combat": 70
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Gold",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Vision",
        "alterEgos": "Anti-Vision, Vision II",
        "aliases": [
          "Victor Shade"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Avengers Vol.1 #57, Young Avengers # 4",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
      },
      "connections": {
        "groupAffiliation": "Young Avengers, formerly; Avengers, West Coast Avengers, Defenders, Queen's Vengeance",
        "relatives": "Wanda Maximoff (Scarlet Witch, ex-wife), Thomas Shepherd (Speed, son), William Kaplan (Wiccan, son), Ultron (\"father\"), Henry Pym (Ant-Man, \"grandfather\"), Pietro Maximoff (Quicksilver, ex-brother-in-law), Erik Magnus Lensher (Magneto, ex-father-in-law), Jocasta (fellow creation, \"sister\"), Simon Williams (Wonder Man, \"brother\"), Victor Mancha (fellow creation, half brother), Alkhema (fellow creation, \"stepmother\")"
      },
      "images": {
        "xs": "images/characters/xs/697-vision.jpg",
        "sm": "images/characters/sm/697-vision.jpg",
        "md": "images/characters/md/697-vision.jpg",
        "lg": "images/characters/lg/697-vision.jpg"
      }
    },
    {
      "id": 699,
      "name": "Vixen",
      "slug": "699-vixen",
      "powerstats": {
        "intelligence": 50,
        "strength": 38,
        "speed": 50,
        "durability": 50,
        "power": 62,
        "combat": 25
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "140 lb",
          "63 kg"
        ],
        "eyeColor": "Amber",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Mari McCabe",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Zambesi",
        "firstAppearance": "Action Comics #521 (July, 1981)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former Model",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Suicide Squad, Checkmate, Ultramarines, Birds of Prey, Justice League of America",
        "relatives": "Reverend Richard Jiwe (father, deceased), Jeanne-Mari Jiwe (mother, deceased), General Mustapha Maksai (uncle, deceased), Tantu (ancestor)"
      },
      "images": {
        "xs": "images/characters/xs/699-vixen.jpg",
        "sm": "images/characters/sm/699-vixen.jpg",
        "md": "images/characters/md/699-vixen.jpg",
        "lg": "images/characters/lg/699-vixen.jpg"
      }
    },
    {
      "id": 701,
      "name": "Vulture",
      "slug": "701-vulture",
      "powerstats": {
        "intelligence": 75,
        "strength": 22,
        "speed": 42,
        "durability": 25,
        "power": 26,
        "combat": 30
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Adrian Toomes",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Staten Island, New York City",
        "firstAppearance": "Amazing Spider-Man #2",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Professional criminal; formerly electronics engineer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly Sinister Twelve, Sinister Six",
        "relatives": "Marcus (brother, possibly deceased), Malachi Toomes (nephew, deceased), Valeria Toomes (daughter), unnamed son, Ramona (daughter-in-law), unnamed grandson"
      },
      "images": {
        "xs": "images/characters/xs/701-vulture.jpg",
        "sm": "images/characters/sm/701-vulture.jpg",
        "md": "images/characters/md/701-vulture.jpg",
        "lg": "images/characters/lg/701-vulture.jpg"
      }
    },
    {
      "id": 702,
      "name": "Walrus",
      "slug": "702-walrus",
      "powerstats": {
        "intelligence": 50,
        "strength": 28,
        "speed": 8,
        "durability": 50,
        "power": 11,
        "combat": 20
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "360 lb",
          "162 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Hubert Carpent",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Brooklyn, New York",
        "firstAppearance": "Defenders #131 (May, 1984)",
        "publisher": "Marvel Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "Cab driver",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Humbert Carpenter (uncle)"
      },
      "images": {
        "xs": "images/characters/xs/702-walrus.jpg",
        "sm": "images/characters/sm/702-walrus.jpg",
        "md": "images/characters/md/702-walrus.jpg",
        "lg": "images/characters/lg/702-walrus.jpg"
      }
    },
    {
      "id": 703,
      "name": "War Machine",
      "slug": "703-war-machine",
      "powerstats": {
        "intelligence": 63,
        "strength": 80,
        "speed": 63,
        "durability": 100,
        "power": 100,
        "combat": 85
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "James Rupert Rhodes",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Rhodey",
          "Iron Man",
          "Jim Rhodes"
        ],
        "placeOfBirth": "Philadelphia, Pennsylvania",
        "firstAppearance": "Iron Man #118 (1979)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Initiative instructor, adventurer, government agent; formerly: Sentinel Squad O*N*E combat instructor, soldier, pilot",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Initiative; formerly: Sentinel Squad O*N*E, Office of National Emergency (O*N*E), Crew, Secret Defenders, Worldwatch, Stark Enterprises, Force Works, West Coast Avengers, U.S. Marine Corps",
        "relatives": "David Rhodes (father), Roberta Rhodes (mother), Jeanette Rhodes (sister, deceased), Josh (uncle, last name unrevealed), unnamed alleged son"
      },
      "images": {
        "xs": "images/characters/xs/703-war-machine.jpg",
        "sm": "images/characters/sm/703-war-machine.jpg",
        "md": "images/characters/md/703-war-machine.jpg",
        "lg": "images/characters/lg/703-war-machine.jpg"
      }
    },
    {
      "id": 705,
      "name": "Warlock",
      "slug": "705-warlock",
      "powerstats": {
        "intelligence": 88,
        "strength": 36,
        "speed": 79,
        "durability": 95,
        "power": 71,
        "combat": 95
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2'",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Adam Warlock",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Him",
          "(in an alternate future) the Magus"
        ],
        "placeOfBirth": "The Beehive, Shard Island, Atlantic Ocean",
        "firstAppearance": "Fantastic Four #66",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Avenger, savior of worlds",
        "base": "Counter-Earth, later mobile"
      },
      "connections": {
        "groupAffiliation": "Infinity Watch, (as the Magus) head of Universal Church of Truth in an alternate future",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/705-warlock.jpg",
        "sm": "images/characters/sm/705-warlock.jpg",
        "md": "images/characters/md/705-warlock.jpg",
        "lg": "images/characters/lg/705-warlock.jpg"
      }
    },
    {
      "id": 706,
      "name": "Warp",
      "slug": "706-warp",
      "powerstats": {
        "intelligence": 38,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 85,
        "combat": 50
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'8",
          "173 cm"
        ],
        "weight": [
          "148 lb",
          "67 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Emil LaSalle",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "The New Teen Titans #14 (December 1981)",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Brotherhood of Evil, The Society",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/706-warp.jpg",
        "sm": "images/characters/sm/706-warp.jpg",
        "md": "images/characters/md/706-warp.jpg",
        "lg": "images/characters/lg/706-warp.jpg"
      }
    },
    {
      "id": 707,
      "name": "Warpath",
      "slug": "707-warpath",
      "powerstats": {
        "intelligence": 38,
        "strength": 72,
        "speed": 47,
        "durability": 70,
        "power": 26,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "7'2",
          "218 cm"
        ],
        "weight": [
          "350 lb",
          "158 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "James Proudstar",
        "alterEgos": "Thunderbird II",
        "aliases": [
          "Thunderbird"
        ],
        "placeOfBirth": "Camp Verde, Arizona",
        "firstAppearance": "New Mutants #16 (June, 1984)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "X-Men (Team Cyclops), Security Recon; formerly X-Force (Strike Team), X-Corporation, X-Force, New Mutants, Hellions",
        "relatives": "Thunderbird (John Proudstar, brother, deceased), Maria Proudstar (mother, deceased), Neal Proudstar (father, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/707-warpath.jpg",
        "sm": "images/characters/sm/707-warpath.jpg",
        "md": "images/characters/md/707-warpath.jpg",
        "lg": "images/characters/lg/707-warpath.jpg"
      }
    },
    {
      "id": 708,
      "name": "Wasp",
      "slug": "708-wasp",
      "powerstats": {
        "intelligence": 63,
        "strength": 17,
        "speed": 58,
        "durability": 52,
        "power": 29,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'4",
          "163 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Janet Van Dyne",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Pixie"
        ],
        "placeOfBirth": "Cresskill, New Jersey",
        "firstAppearance": "TALES TO ASTONISH #44",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, fashion designer, independently wealthy socialite",
        "base": "Avengers Mansion"
      },
      "connections": {
        "groupAffiliation": "Avengers",
        "relatives": "Vernon Van Dyne (father, deceased), unnamed mother (deceased), Henry \"Hank\" Pym (ex-husband)"
      },
      "images": {
        "xs": "images/characters/xs/708-wasp.jpg",
        "sm": "images/characters/sm/708-wasp.jpg",
        "md": "images/characters/md/708-wasp.jpg",
        "lg": "images/characters/lg/708-wasp.jpg"
      }
    },
    {
      "id": 709,
      "name": "Watcher",
      "slug": "709-watcher",
      "powerstats": {
        "intelligence": 100,
        "strength": 80,
        "speed": 67,
        "durability": 89,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Uatu",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Fantastic Four #13 (April, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "The Watchers, Friend and Ally of the Fantastic Four, among other Earth heroes",
        "relatives": "Ikor (father); Aron (nephew); Qyre, Zoma (cousins)"
      },
      "images": {
        "xs": "images/characters/xs/709-watcher.jpg",
        "sm": "images/characters/sm/709-watcher.jpg",
        "md": "images/characters/md/709-watcher.jpg",
        "lg": "images/characters/lg/709-watcher.jpg"
      }
    },
    {
      "id": 711,
      "name": "White Canary",
      "slug": "711-white-canary",
      "powerstats": {
        "intelligence": 63,
        "strength": 7,
        "speed": 33,
        "durability": 15,
        "power": 49,
        "combat": 90
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Silk Sister",
          "Sara Lance"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Birds of Prey #1",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/711-white-canary.jpg",
        "sm": "images/characters/sm/711-white-canary.jpg",
        "md": "images/characters/md/711-white-canary.jpg",
        "lg": "images/characters/lg/711-white-canary.jpg"
      }
    },
    {
      "id": 713,
      "name": "Wildfire",
      "slug": "713-wildfire",
      "powerstats": {
        "intelligence": 50,
        "strength": 32,
        "speed": 23,
        "durability": 100,
        "power": 77,
        "combat": 42
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "unknown",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "unknown",
        "hairColor": "unknown"
      },
      "biography": {
        "fullName": "Drake Burroughs",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "ERG-1",
          "Atom'x",
          "Randall Burroughs",
          "Jahr-Drake Nigle"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "unknown",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Legion of Super-Heroes",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/713-wildfire.jpg",
        "sm": "images/characters/sm/713-wildfire.jpg",
        "md": "images/characters/md/713-wildfire.jpg",
        "lg": "images/characters/lg/713-wildfire.jpg"
      }
    },
    {
      "id": 714,
      "name": "Winter Soldier",
      "slug": "714-winter-soldier",
      "powerstats": {
        "intelligence": 56,
        "strength": 32,
        "speed": 35,
        "durability": 65,
        "power": 60,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "260 lb",
          "117 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Bucky Barnes",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Bucky",
          "Captain America"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Captain America Vol 5 #1 (January, 2005) (as Winter Soldier)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former SHIELD operative, Assassin (See Note under \"Winter Soldier\" article), Army Mascot, Student",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Black Widow (partner), Nick Fury (employer); formerly Avengers, New Avengers, Invaders, Kid Commandos, Liberty Legion, Young Allies, Crazy S.U.E.S., Captain America (partner), Falcon (partner)",
        "relatives": "George M. Barnes (father, deceased), Winifred C. Barnes (mother, deceased), Rebecca P. Barnes Proctor (sister), Ida (aunt, presumed deceased), Mr. Proctor (brother-in-law), unidentified niece and nephew, Scott Proctor (grandnephew), Kimberly Proctor (grandniece)"
      },
      "images": {
        "xs": "images/characters/xs/714-winter-soldier.jpg",
        "sm": "images/characters/sm/714-winter-soldier.jpg",
        "md": "images/characters/md/714-winter-soldier.jpg",
        "lg": "images/characters/lg/714-winter-soldier.jpg"
      }
    },
    {
      "id": 716,
      "name": "Wolfsbane",
      "slug": "716-wolfsbane",
      "powerstats": {
        "intelligence": 38,
        "strength": 16,
        "speed": 35,
        "durability": 42,
        "power": 26,
        "combat": 42
      },
      "appearance": {
        "gender": "Female",
        "race": null,
        "height": [
          "12'",
          "366 cm"
        ],
        "weight": [
          "1050 lb",
          "473 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Auburn"
      },
      "biography": {
        "fullName": "Rahne Sinclair",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Grimfang",
          "Mutate #490"
        ],
        "placeOfBirth": "Somewhere in Ross and Cromarty, Scotland",
        "firstAppearance": "Marvel Graphic Novel #4: New Mutants",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Teacher",
        "base": "(current) X-Factor Investigations, New York City (former)Professor Xavier's School of Gifted Youngsters, Salem Center, Westchester County, New York; Muir Island, Scotland; X-Factor headquarters, Embassy Row, Washington, D.C.; X-Factor Headquarters, New Yo"
      },
      "connections": {
        "groupAffiliation": "(current) X-Factor Investigations, (former) X-Factor, New Mutants, Hellions, Excalibur",
        "relatives": "Reverand Craig (father), Moira MacTaggert (surrogate mother, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/716-wolfsbane.jpg",
        "sm": "images/characters/sm/716-wolfsbane.jpg",
        "md": "images/characters/md/716-wolfsbane.jpg",
        "lg": "images/characters/lg/716-wolfsbane.jpg"
      }
    },
    {
      "id": 717,
      "name": "Wolverine",
      "slug": "717-wolverine",
      "powerstats": {
        "intelligence": 63,
        "strength": 32,
        "speed": 50,
        "durability": 100,
        "power": 89,
        "combat": 100
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "5'3",
          "160 cm"
        ],
        "weight": [
          "300 lb",
          "135 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Logan",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Weapon X",
          "Weapon Ten",
          "Death",
          "Mutate 9601",
          "Jim Logan",
          "Emilio Garra",
          "Weapon Chi",
          "Experiment X",
          "Agent Ten",
          "Peter Richards",
          "Mai kethLogan",
          "Mr. Patch"
        ],
        "placeOfBirth": "Alberta, Canada",
        "firstAppearance": "Incredible Hulk Vol. 2 #180",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner",
        "base": "Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"
      },
      "connections": {
        "groupAffiliation": "X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army",
        "relatives": "John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"
      },
      "images": {
        "xs": "images/characters/xs/717-wolverine.jpg",
        "sm": "images/characters/sm/717-wolverine.jpg",
        "md": "images/characters/md/717-wolverine.jpg",
        "lg": "images/characters/lg/717-wolverine.jpg"
      }
    },
    {
      "id": 718,
      "name": "Wonder Girl",
      "slug": "718-wonder-girl",
      "powerstats": {
        "intelligence": 75,
        "strength": 90,
        "speed": 25,
        "durability": 80,
        "power": 39,
        "combat": 60
      },
      "appearance": {
        "gender": "Female",
        "race": "Demi-God",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "114 lb",
          "51 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Cassandra Elizabeth Sandsmark",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Cassandra Sandsmark",
          "Cassie",
          "Helen Troy",
          "Wonder Woman",
          "Cassie Sandsmark"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Wonder Woman (vol. 2) #105 (January 1996)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Teen Titans, Young Justice, Themyscira",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/718-wonder-girl.jpg",
        "sm": "images/characters/sm/718-wonder-girl.jpg",
        "md": "images/characters/md/718-wonder-girl.jpg",
        "lg": "images/characters/lg/718-wonder-girl.jpg"
      }
    },
    {
      "id": 719,
      "name": "Wonder Man",
      "slug": "719-wonder-man",
      "powerstats": {
        "intelligence": 75,
        "strength": 100,
        "speed": 53,
        "durability": 90,
        "power": 64,
        "combat": 64
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "380 lb",
          "171 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Simon Williams",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Wondie",
          "JQ-272712-K"
        ],
        "placeOfBirth": "Paterson, New Jersey",
        "firstAppearance": "AVENGERS #9",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former industrialist, now stuntman, actor, adventurer",
        "base": "Mobile"
      },
      "connections": {
        "groupAffiliation": "Former ally of the original Masters of Evil, former member of the East Coast Avengers, current member of the West Coast Avengers",
        "relatives": "Sanford (father, deceased) Martha (mother), Eric (alias the Grim Reaper, brother, deceased), Vision II ('brother')"
      },
      "images": {
        "xs": "images/characters/xs/719-wonder-man.jpg",
        "sm": "images/characters/sm/719-wonder-man.jpg",
        "md": "images/characters/md/719-wonder-man.jpg",
        "lg": "images/characters/lg/719-wonder-man.jpg"
      }
    },
    {
      "id": 720,
      "name": "Wonder Woman",
      "slug": "720-wonder-woman",
      "powerstats": {
        "intelligence": 88,
        "strength": 100,
        "speed": 79,
        "durability": 100,
        "power": 100,
        "combat": 100
      },
      "appearance": {
        "gender": "Female",
        "race": "Amazon",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "165 lb",
          "74 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Diana Prince",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Princess Diana",
          "Princess of the Amazons",
          "Goddess of Truth",
          " Wondy",
          "Wonder Girl",
          "The Amazon Princess"
        ],
        "placeOfBirth": "Themyscira",
        "firstAppearance": "All-Star Comics #8 (December, 1941)",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
        "relatives": "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)"
      },
      "images": {
        "xs": "images/characters/xs/720-wonder-woman.jpg",
        "sm": "images/characters/sm/720-wonder-woman.jpg",
        "md": "images/characters/md/720-wonder-woman.jpg",
        "lg": "images/characters/lg/720-wonder-woman.jpg"
      }
    },
    {
      "id": 722,
      "name": "Wyatt Wingfoot",
      "slug": "722-wyatt-wingfoot",
      "powerstats": {
        "intelligence": 10,
        "strength": 10,
        "speed": 12,
        "durability": 1,
        "power": 1,
        "combat": 56
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'5'",
          "196 cm"
        ],
        "weight": [
          "260 lb",
          "117 kg"
        ],
        "eyeColor": "Brown",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Wyatt Wingfoot",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "Keewazi Reservation, Oklahoma",
        "firstAppearance": "FANTASTIC FOUR #50",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Occasional adventurer",
        "base": "Fantastic Four headquarters, New York City, and Keewazi Reservation, Oklahoma"
      },
      "connections": {
        "groupAffiliation": "Ally and companion of the Fantastic Four",
        "relatives": "Will Wingfoot (father, deceased), Chief Silent Fox (grandfather, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/722-wyatt-wingfoot.jpg",
        "sm": "images/characters/sm/722-wyatt-wingfoot.jpg",
        "md": "images/characters/md/722-wyatt-wingfoot.jpg",
        "lg": "images/characters/lg/722-wyatt-wingfoot.jpg"
      }
    },
    {
      "id": 723,
      "name": "X-23",
      "slug": "723-x-23",
      "powerstats": {
        "intelligence": 75,
        "strength": 24,
        "speed": 42,
        "durability": 100,
        "power": 55,
        "combat": 95
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant / Clone",
        "height": [
          "5'1",
          "155 cm"
        ],
        "weight": [
          "110 lb",
          "50 kg"
        ],
        "eyeColor": "Green",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Laura Kinney",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Laura Logan",
          "Laura Howlett",
          "Laura X",
          "Talon",
          "Wolverine",
          "X23"
        ],
        "placeOfBirth": "The Facility, location unrevealed",
        "firstAppearance": "NYX #3",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Student, former; Assassin, Prostitute",
        "base": "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
      },
      "connections": {
        "groupAffiliation": "New X-Men, formerly Xavier Institute Student Body, The Facility",
        "relatives": "Sarah Kinney (surrogate mother, deceased), James Howlett (Wolverine, genetic progenitor)"
      },
      "images": {
        "xs": "images/characters/xs/723-x-23.jpg",
        "sm": "images/characters/sm/723-x-23.jpg",
        "md": "images/characters/md/723-x-23.jpg",
        "lg": "images/characters/lg/723-x-23.jpg"
      }
    },
    {
      "id": 724,
      "name": "X-Man",
      "slug": "724-x-man",
      "powerstats": {
        "intelligence": 88,
        "strength": 53,
        "speed": 53,
        "durability": 95,
        "power": 100,
        "combat": 84
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "5'9",
          "175 cm"
        ],
        "weight": [
          "135 lb",
          "61 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Nate Grey",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Nate the Great"
        ],
        "placeOfBirth": "American Northeast of Earth-295",
        "firstAppearance": "X-Man #1 (1995)",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Former shaman, adventurer, freedom fighter",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Formerly X-Men, Brotherhood of Mutants, Forge's resistance",
        "relatives": "Scott Summers of Earth-295 (Cyclops, genetic template), Jean Grey of Earth-295 (genetic template)"
      },
      "images": {
        "xs": "images/characters/xs/724-x-man.jpg",
        "sm": "images/characters/sm/724-x-man.jpg",
        "md": "images/characters/md/724-x-man.jpg",
        "lg": "images/characters/lg/724-x-man.jpg"
      }
    },
    {
      "id": 726,
      "name": "Yellowjacket",
      "slug": "726-yellowjacket",
      "powerstats": {
        "intelligence": 88,
        "strength": 10,
        "speed": 12,
        "durability": 28,
        "power": 12,
        "combat": 14
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Blond"
      },
      "biography": {
        "fullName": "Hank Pym",
        "alterEgos": "Ant-Man, Giant-Man, Goliath, Wasp II",
        "aliases": [
          "Hank Pym"
        ],
        "placeOfBirth": "Elmsford, New York",
        "firstAppearance": "(as Pym) TALES TO ASTONISH #27, (as Ant-Man) TALES TO ASTONISH #35, (as Giant-Man) TALES TO ASTONISH #49, (as Goliath) AVENGERS #28, (as Yellowjacket) AVENGERS #59",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
        "base": "Avengers Mansion, New York City, New York, (formerly)Avengers Compound, Los Angeles, California"
      },
      "connections": {
        "groupAffiliation": "The Avengers, The West Coast Avengers, Secret Defenders",
        "relatives": "Maria Trovaya (first wife, deceased), Janet Van Dyne a.k.a. The Wasp (second wife, divorced), Ultron (creation, \"son\"), Jocasta (\"first daughter-in-law\"), Alkhema (\"second daughter-in-law\"), Vision (\"grandson\"), Scarlet Witch (former granddaughter-in-law), Victor Mancha (\"grandson\")"
      },
      "images": {
        "xs": "images/characters/xs/726-yellowjacket.jpg",
        "sm": "images/characters/sm/726-yellowjacket.jpg",
        "md": "images/characters/md/726-yellowjacket.jpg",
        "lg": "images/characters/lg/726-yellowjacket.jpg"
      }
    },
    {
      "id": 727,
      "name": "Yellowjacket II",
      "slug": "727-yellowjacket-ii",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 35,
        "durability": 28,
        "power": 31,
        "combat": 28
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Strawberry Blond"
      },
      "biography": {
        "fullName": "Rita DeMara",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Avengers #264",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "Adventurer; former criminal, electronics engineer",
        "base": "New York City area"
      },
      "connections": {
        "groupAffiliation": "Formerly Guardians of the Galaxy, Avengers, Masters of Evil",
        "relatives": "unknown"
      },
      "images": {
        "xs": "images/characters/xs/727-yellowjacket-ii.jpg",
        "sm": "images/characters/sm/727-yellowjacket-ii.jpg",
        "md": "images/characters/md/727-yellowjacket-ii.jpg",
        "lg": "images/characters/lg/727-yellowjacket-ii.jpg"
      }
    },
    {
      "id": 728,
      "name": "Ymir",
      "slug": "728-ymir",
      "powerstats": {
        "intelligence": 50,
        "strength": 100,
        "speed": 27,
        "durability": 100,
        "power": 98,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": "Frost Giant",
        "height": [
          "1000",
          "304.8 meters"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eyeColor": "White",
        "hairColor": "No Hair"
      },
      "biography": {
        "fullName": "Ymir",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "Aurgelmir"
        ],
        "placeOfBirth": "Niffleheim",
        "firstAppearance": "JOURNEY INTO MYSTERY #97",
        "publisher": "Marvel Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "Niffleheim"
      },
      "connections": {
        "groupAffiliation": "unknown",
        "relatives": "Utgard-Loki, Loki, and the race of Frost Giants (descendants)"
      },
      "images": {
        "xs": "images/characters/xs/728-ymir.jpg",
        "sm": "images/characters/sm/728-ymir.jpg",
        "md": "images/characters/md/728-ymir.jpg",
        "lg": "images/characters/lg/728-ymir.jpg"
      }
    },
    {
      "id": 730,
      "name": "Zatanna",
      "slug": "730-zatanna",
      "powerstats": {
        "intelligence": 81,
        "strength": 10,
        "speed": 23,
        "durability": 28,
        "power": 100,
        "combat": 56
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "127 lb",
          "57 kg"
        ],
        "eyeColor": "Blue",
        "hairColor": "Black"
      },
      "biography": {
        "fullName": "Zatanna Zatara",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Hawkman #4",
        "publisher": "DC Comics",
        "alignment": "Heroes"
      },
      "work": {
        "occupation": "unknown",
        "base": "unknown"
      },
      "connections": {
        "groupAffiliation": "Misty Kilgore, Seven Soldiers of Victory, Justice League, Sentinels of Magic",
        "relatives": "Giovanni \"John\" Zatara (father, deceased), Sindella (mother, deceased), Leonardo da Vinci (paternal ancestor, deceased)"
      },
      "images": {
        "xs": "images/characters/xs/730-zatanna.jpg",
        "sm": "images/characters/sm/730-zatanna.jpg",
        "md": "images/characters/md/730-zatanna.jpg",
        "lg": "images/characters/lg/730-zatanna.jpg"
      }
    },
    {
      "id": 731,
      "name": "Zoom",
      "slug": "731-zoom",
      "powerstats": {
        "intelligence": 50,
        "strength": 10,
        "speed": 100,
        "durability": 28,
        "power": 100,
        "combat": 28
      },
      "appearance": {
        "gender": "Male",
        "race": null,
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "181 lb",
          "81 kg"
        ],
        "eyeColor": "Red",
        "hairColor": "Brown"
      },
      "biography": {
        "fullName": "Hunter Zolomon",
        "alterEgos": "No alter egos found.",
        "aliases": [
          "unknown"
        ],
        "placeOfBirth": "unknown",
        "firstAppearance": "Flash Secret Files #3",
        "publisher": "DC Comics",
        "alignment": "Villains"
      },
      "work": {
        "occupation": "unknown",
        "base": "Keystone City, Kansas"
      },
      "connections": {
        "groupAffiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
        "relatives": "Ashley Zolomon (ex-wife)"
      },
      "images": {
        "xs": "images/characters/xs/731-zoom.jpg",
        "sm": "images/characters/sm/731-zoom.jpg",
        "md": "images/characters/md/731-zoom.jpg",
        "lg": "images/characters/lg/731-zoom.jpg"
      }
    }
  ]
};

for (var i = 0; i < data.characters.length; i++) {
  
  var html = template(data.characters[i]);
  document.getElementById("characters").insertAdjacentHTML("beforeend", html);
    
}


function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Tilt(card, ev) {
  let img = card.querySelector('img');
  let imgRect = card.getBoundingClientRect();
  let width = imgRect.width;
  let height = imgRect.height;
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, -50, 250, 25, -25);
  let rotateX = map(mouseY, -50, 250, 25, -25);
  let brightness = map(mouseY - mouseX, -50, 250, 2.5, 1.25);
  let contrast = map(mouseY, -50, 250, 1.5, 0.5);
  let saturate = map(mouseY, -50, 250, 2, 0.5);

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  img.style.filter = `brightness(${brightness}) contrast(${contrast}) saturate(${saturate})`;
}

var cards = document.querySelectorAll('.character-card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    Tilt(card, ev);
  });

  card.addEventListener('touchenter', (ev) => {
    Tilt(card, ev);
  });
  
  card.addEventListener('mouseleave', (ev) => {
    let img = card.querySelector('img');
    
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1) contrast(1)';
  });

  card.addEventListener('touchleave', (ev) => {
    let img = card.querySelector('img');
    
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1) contrast(1)';
  });

  card.addEventListener('click', function() {
    card.classList.toggle('card__flipped');
  });
});


//Get the button
const scrollToTopBtn = document.getElementById("backToTop");
const rootElement = document.documentElement;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);



// SEARCH FUNCTIONALITY
// Declare global variables
const appSearch = document.querySelector(".app-search");
const searchInput = document.getElementById("appSearch");
const list = document.querySelector("#characters");
const members = list.querySelectorAll(".character");
const appFilter = appSearch.querySelector(".app-filter");
const filters = appFilter.querySelectorAll("input[type='checkbox']");

// Set each member to active
members.forEach(function(member) {
  member.classList.add("active");
});

// Set up event Listeners
searchInput.addEventListener("input", searchMembers);

filters.forEach(function(filter) {
  filter.addEventListener("change", filterMembers);
});

// filter function - when a checkbox is clicked
function filterMembers(e) {
  let filter = e.target;
  let terms = searchInput.value.toLowerCase();
  let filterValue = e.target.value.toUpperCase();
  
  if(filter.checked) {
    // calls the search filtered members function which combines textbox input and checkbox input
    searchFilteredMembers(filter, terms);
  } else {
    members.forEach(function(member) {
      member.style.display = "";
      member.classList.add("active");
    });
    searchMembers();
  }
}

function searchFilteredMembers(filterCriteria, terms) {
  const filter = filterCriteria.value.toLowerCase();
  const searchTerms = terms;
  let defaultScope, itemScope, activeMember;
  
  for (var i = 0; i < members.length; i++) {
    activeMember = members[i].classList.contains("active");
    defaultScope = members[i].querySelectorAll('.card-name')[0];
    itemScope = members[i].querySelectorAll(`.directory-details .${filter}`)[0];

    if(filter) {
      if (activeMember && defaultScope.innerHTML.toLowerCase().indexOf(filter) > -1) {
        if (itemScope.innerHTML.toLowerCase().indexOf(searchTerms) > -1) {
          members[i].style.display = "";
          members[i].classList.add("active");
        } else {
          members[i].style.display = "none";
          members[i].classList.remove("active");
        } 
      }
    }
    else {
      if (defaultScope.innerHTML.toLowerCase().indexOf(filter) > -1) {
        members[i].style.display = "";
        members[i].classList.add("active");
      } else {
        members[i].style.display = "none";
        members[i].classList.remove("active");
      }
    }
  }
}


function searchMembers(e) {
  let filter;
  
  if(e) {
   filter = e.target.value.toUpperCase(); 
  }
  else {
    filter = searchInput.value.toUpperCase();
  }
  
  for (var i = 0; i < members.length; i++) {
    const memberScope = members[i].querySelectorAll(".card-name")[0];

    if (memberScope.innerHTML.toUpperCase().indexOf(filter) > -1) {
      members[i].style.display = "";
      members[i].classList.add("active");
    } else {
      members[i].style.display = "none";
      members[i].classList.remove("active");
    }
  }
}