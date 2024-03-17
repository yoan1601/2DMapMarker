const markers = [
  {
    id: 1,
    coordinates: [2.2137, 46.2276],
    label: "France",
  },
  {
    id: 2,
    coordinates: [-99.1332, 19.4326],
    label: "United States",
  },
  {
    id: 3,
    coordinates: [139.6917, 35.6895], // Japon (Tokyo)
    label: "Japan",
  },
  {
    id: 4,
    coordinates: [46.8691, -18.7669], // Madagascar (Antananarivo)
    label: "Madagascar",
  },
  {
    id: 5,
    coordinates: [-47.9297, -15.7801], // Brasil (Brasília)
    label: "Brazil",
  },
  {
    id: 6,
    coordinates: [-0.1276, 51.5074], // England (London)
    label: "England",
  },
  {
    id: 7,
    coordinates: [78.9629, 20.5937], // India (New Delhi)
    label: "India",
  },
  {
    id: 8,
    coordinates: [105.3188, 61.524], // Russia (Moscow)
    label: "Russia",
  },
  {
    id: 9,
    coordinates: [31.2357, 30.0444], // Egypt (Cairo)
    label: "Egypt",
  },
  {
    id: 10,
    coordinates: [104.1954, 35.8617], // China (Beijing)
    label: "China",
  },
  {
    id: 11,
    coordinates: [133.7751, -25.2744], // Australia (Canberra)
    label: "Australia",
  },
  {
    id: 12,
    coordinates: [-106.3468, 56.1304],
    label: "Canada",
  },
  {
    id: 13,
    coordinates: [-5.5471, 7.54],
    label: "Côte d'Ivoire",
  },
];

const touristSites = [
  {
    id: 1,
    country: "France",
    sites: [
      {
        label: "Eiffel Tower",
        description:
          "The Eiffel Tower is a global icon of France and one of the most recognizable landmarks in the world. Constructed in 1889, it offers panoramic views of Paris and attracts millions of visitors annually.",
        url: "https://www.youtube.com/watch?v=MDUYPrKKM5M",
      },
      {
        label: "Louvre Museum",
        description:
          "The Louvre Museum is the world's largest art museum and a historic monument in Paris. It houses thousands of works of art, including the Mona Lisa and the Venus de Milo, spanning centuries of human history.",
        url: "https://www.youtube.com/watch?v=zp1BXPX8jcU",
      },
      {
        label: "Versailles Palace",
        description:
          "The Palace of Versailles is a symbol of the French monarchy's grandeur and opulence. It served as the royal residence of Louis XIV and is renowned for its stunning architecture, lush gardens, and Hall of Mirrors.",
        url: "https://www.youtube.com/watch?v=zdYeG4eZNpQ",
      },
      {
        label: "Mont Saint-Michel",
        description:
          "Mont Saint-Michel is a UNESCO World Heritage site and an architectural marvel situated on a rocky island in Normandy. It is known for its medieval abbey, narrow streets, and stunning panoramic views.",
        url: "https://www.youtube.com/watch?v=-rhtVj0gJMU",
      },
      {
        label: "Palace of Versailles",
        description:
          "The Palace of Versailles is one of France's most famous attractions, known for its opulent architecture, beautiful gardens, and rich history. It served as the principal royal residence of France from the reign of Louis XIV until the start of the French Revolution.",
        url: "https://www.youtube.com/watch?v=9cGohlT3UAc",
      },
    ],
  },
  {
    id: 3,
    country: "Japan",
    sites: [
      {
        label: "Mount Fuji",
        description:
          "An iconic symbol of Japan, Mount Fuji is the country's tallest peak and a sacred pilgrimage site. Many visitors come to admire its iconic silhouette and climb its slopes during ascent.",
        url: "https://www.youtube.com/watch?v=3zbrjqFavx0",
      },
      {
        label: "Senso-ji Temple in Tokyo",
        description:
          "Located in the Asakusa district of Tokyo, Senso-ji Temple is one of the oldest and most important Buddhist temples in the Japanese capital. It is known for its stunning Kaminarimon gate, bustling shopping streets, and traditional festivals.",
        url: "https://www.youtube.com/watch?v=zfFTbdpTJUc",
      },
      {
        label: "Himeji Castle",
        description:
          "Nicknamed the 'White Heron' due to its color and graceful silhouette, Himeji Castle is one of Japan's best-preserved castles. It is a UNESCO World Heritage Site and serves as a remarkable example of Japanese castle architecture.",
        url: "https://www.youtube.com/watch?v=es9psCswt5w",
      },
      {
        label: "Fushimi Inari-taisha Shrine in Kyoto",
        description:
          "Dedicated to Inari, the god of rice and prosperity, Fushimi Inari-taisha Shrine is famous for its thousands of vermilion torii gates that line a winding path through the wooded hillside of Fushimi. It is one of Japan's most photographed sites.",
        url: "https://www.youtube.com/watch?v=TpjJapENwuE",
      },
      {
        label: "Nikko National Park",
        description:
          "Nestled in the mountains of Tochigi Prefecture, Nikko National Park is renowned for its picturesque landscapes, historic temples, and hot springs. The Toshogu Shrine, a UNESCO World Heritage Site, is one of the park's main attractions.",
        url: "https://www.youtube.com/watch?v=_1kYbTKlMRE",
      },
    ],
  },
  {
    "id": 2,
    "country": "United States",
    "sites": [
        {
            "label": "Yellowstone National Park",
            "description": "Famous for its geothermal features like Old Faithful geyser, wildlife, and stunning landscapes.",
            "url": "https://www.youtube.com/watch?v=7OMxBlK46wY"
        },
        {
            "label": "Statue of Liberty",
            "description": "A symbol of freedom and democracy, located on Liberty Island in New York Harbor, offering panoramic views of New York City.",
            "url": "https://www.youtube.com/watch?v=siZ0odTEBgk"
        },
        {
            "label": "Walt Disney World Resort",
            "description": "One of the most visited vacation resorts in the world, featuring four theme parks, two water parks, and numerous hotels and entertainment venues.",
            "url": "https://www.youtube.com/watch?v=_weVwAhe9jI"
        },
        {
            "label": "Golden Gate Bridge",
            "description": "An iconic suspension bridge spanning the Golden Gate Strait, connecting San Francisco to Marin County, and offering stunning views of the bay area.",
            "url": "https://www.youtube.com/watch?v=C8ZwEbhrco0"
        },
        {
            "label": "Yosemite National Park",
            "description": "Renowned for its granite cliffs, waterfalls, giant sequoia groves, and diverse ecosystems, Yosemite is a UNESCO World Heritage Site and a haven for outdoor enthusiasts.",
            "url": "https://www.youtube.com/watch?v=9fJEFi3ccwI"
        }
    ]
  },
  {
    "id": 4,
    "country": "Madagascar",
    "sites": [
        {
            "label": "Isalo National Park",
            "description": "Known for its unique sandstone formations, deep canyons, oases, and diverse wildlife, Isalo offers opportunities for hiking, trekking, and wildlife spotting.",
            "url": "https://www.youtube.com/watch?v=b6utFeio3TA"
        },
        {
            "label": "Ranomafana National Park",
            "description": "A biodiversity hotspot with lush rainforests, natural hot springs, and diverse wildlife, including lemurs, chameleons, and rare bird species.",
            "url": "https://www.youtube.com/watch?v=gh7muXMqDmc"
        },
        {
            "label": "Tsingy de Bemaraha National Park",
            "description": "A UNESCO World Heritage Site featuring dramatic limestone formations, deep canyons, and unique flora and fauna, including the famous lemurs and baobab trees.",
            "url": "https://www.youtube.com/watch?v=4ZkxIAj2zc0"
        },
        {
            "label": "Nosy Be",
            "description": "A tropical paradise known for its pristine beaches, coral reefs, and marine biodiversity, offering opportunities for snorkeling, diving, and relaxation.",
            "url": "https://www.youtube.com/watch?v=0qLap8_KjTg"
        },
        {
            "label": "Avenue of the Baobabs",
            "description": "A stunning row of ancient baobab trees lining a dirt road in western Madagascar, making for a unique and picturesque landscape.",
            "url": "https://www.youtube.com/watch?v=7D1Y0dA1xl0"
        }
    ]
  },
  {
    "id": 5,
    "country": "Brazil",
    "sites": [
        {
            "label": "Iguazu Falls",
            "description": "One of the most spectacular waterfalls in the world, situated on the border between Brazil and Argentina, surrounded by lush rainforests and offering breathtaking views.",
            "url": "https://www.youtube.com/watch?v=kY5G8s99Fl8"
        },
        {
            "label": "Sugarloaf Mountain (Pão de Açúcar)",
            "description": "A granite peak rising 396 meters above the harbor, offering panoramic views of Rio de Janeiro and its iconic beaches, forests, and monuments.",
            "url": "https://www.youtube.com/watch?v=Kk1mkI_1S10"
        },
        {
            "label": "Amazon Rainforest",
            "description": "The world's largest tropical rainforest, home to an incredible array of biodiversity, indigenous communities, and unique ecosystems.",
            "url": "https://www.youtube.com/watch?v=5IzzogrKo6k"
        },
        {
            "label": "Fernando de Noronha",
            "description": "An archipelago known for its pristine beaches, crystal-clear waters, and rich marine life, offering excellent diving and snorkeling opportunities.",
            "url": "https://www.youtube.com/watch?v=F9T4wXgnX18"
        },
        {
            "label": "Christ the Redeemer",
            "description": "A massive Art Deco statue of Jesus Christ atop Corcovado Mountain in Rio de Janeiro, offering breathtaking views of the city and surrounding landscape.",
            "url": "https://www.youtube.com/watch?v=k_615AauSds"
        }
    ]
  },
  {
    "id": 12,
    "country": "Canada",
    "sites": [
        {
            "label": "Banff National Park",
            "description": "Located in the Canadian Rockies, it offers majestic mountain scenery, pristine lakes, and abundant wildlife, making it a paradise for outdoor enthusiasts.",
            "url": "https://www.youtube.com/watch?v=TJohEDj0KPk"
        },
        {
            "label": "Niagara Falls",
            "description": "One of the most famous natural attractions in the world, comprising three waterfalls on the border between Canada and the United States, offering boat tours and stunning views.",
            "url": "https://www.youtube.com/watch?v=ufZoZzDjjzE"
        },
        {
            "label": "Jasper National Park",
            "description": "Known for its stunning alpine landscapes, glaciers, and abundant wildlife, Jasper offers opportunities for hiking, wildlife viewing, and stargazing.",
            "url": "https://www.youtube.com/watch?v=S-nPtdu9FpI"
        },
        {
            "label": "CN Tower",
            "description": "An iconic symbol of Toronto's skyline, offering panoramic views of the city and Lake Ontario from its observation deck and revolving restaurant.",
            "url": "https://www.youtube.com/watch?v=KB8iv6HxEXg"
        },
        {
            "label": "Whistler Blackcomb",
            "description": "One of the largest and most famous ski resorts in North America, offering world-class skiing and snowboarding in the winter and mountain biking and hiking in the summer.",
            "url": "https://www.youtube.com/watch?v=65u3juMAlSg"
        }
    ]
  },
  {
    "id": 13,
    "country": "Côte d'Ivoire",
    "sites": [
        {
            "label": "Basilica of Our Lady of Peace",
            "description": "Located in Yamoussoukro, it is one of the largest Christian churches in the world, known for its stunning architecture and serene surroundings.",
            "url": "https://www.youtube.com/watch?v=qrcfPdTRu0M"
        },
        {
            "label": "Tai National Park",
            "description": "A UNESCO World Heritage Site and one of the last remaining areas of primary tropical rainforest in West Africa, home to diverse wildlife, including chimpanzees and rare bird species.",
            "url": "https://www.youtube.com/watch?v=87ZTd3KZTrE"
        },
        {
            "label": "Grand-Bassam",
            "description": "A historic town known for its colonial architecture, sandy beaches, and vibrant culture, designated as a UNESCO World Heritage Site.",
            "url": "https://www.youtube.com/watch?v=EFPI24vV8vA"
        },
        {
            "label": "Comoe National Park",
            "description": "The largest protected area in West Africa, known for its diverse ecosystems, including savannas, forests, and wetlands, and its populations of elephants, hippos, and crocodiles.",
            "url": "https://www.youtube.com/watch?v=efpxRtMn2UE"
        },
        {
            "label": "Banco National Park",
            "description": "Located near Abidjan, it is a protected area comprising tropical rainforest, mangroves, and wetlands, offering opportunities for birdwatching and nature walks.",
            "url": "https://www.youtube.com/watch?v=pBoM2FoX6Vc"
        }
    ]
  }

];

export { markers, touristSites };
