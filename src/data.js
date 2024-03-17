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
    id: 6,
    country: "England",
    sites: [
      {
        label: "Tower of London",
        description:
          "The Tower of London is a historic castle located on the north bank of the River Thames. It has served variously as a royal palace, prison, and fortress, and is home to the Crown Jewels of the United Kingdom.",
        url: "https://www.youtube.com/watch?v=UJdYOcDfatI",
      },
      {
        label: "Stonehenge",
        description:
          "Stonehenge is a prehistoric monument in Wiltshire, England, consisting of a ring of standing stones. It is one of the most famous landmarks in the world and remains a mystery regarding its purpose and construction.",
        url: "https://www.youtube.com/watch?v=2gxoAj7Nz28",
      },
      {
        label: "Buckingham Palace",
        description:
          "Buckingham Palace is the official residence and administrative headquarters of the monarch of the United Kingdom. It has been the focal point for the British people at times of national rejoicing and mourning.",
        url: "https://www.youtube.com/watch?v=-sIFAYakyLE",
      },
      {
        label: "Big Ben",
        description:
          "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London. The tower is one of the most prominent symbols of the United Kingdom and is often used in films and television shows.",
        url: "https://www.youtube.com/watch?v=_Elffjsjbio",
      },
      {
        label: "The British Museum",
        description:
          "The British Museum in London is a public institution dedicated to human history, art, and culture. Its permanent collection of some eight million works is among the largest and most comprehensive in existence.",
        url: "https://www.youtube.com/watch?v=-eqTA-qNT_8",
      },
    ],
  },
  {
    id: 7,
    country: "India",
    sites: [
      {
        label: "Taj Mahal",
        description:
          "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.",
        url: "https://www.youtube.com/watch?v=49HTIoCccDY",
      },
      {
        label: "Golden Temple (Harmandir Sahib)",
        description:
          "The Harmandir Sahib, also known as the Golden Temple, is a Gurdwara located in the city of Amritsar, Punjab, India. It is one of the most revered spiritual sites of Sikhism and is considered the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
        url: "https://www.youtube.com/watch?v=jA7NhLxv29g",
      },
      {
        label: "Jaipur's Amber Fort",
        description:
          "Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometers located 11 kilometers from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur.",
        url: "https://www.youtube.com/watch?v=4MxVHXv3IQ0",
      },
      {
        label: "Qutub Minar",
        description:
          "Qutub Minar is a minaret and 'victory tower' that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India. The Qutb Minar is 73 meters tall and is one of the most famous examples of Indo-Islamic architecture.",
        url: "https://www.youtube.com/watch?v=J7nmPBAE2X8",
      },
      {
        label: "Mehrangarh Fort in Jodhpur",
        description:
          "Mehrangarh Fort, located in Jodhpur, Rajasthan, is one of the largest forts in India. Built around 1460 by Rao Jodha, the fort is situated 410 feet above the city and is enclosed by imposing thick walls.",
        url: "https://www.youtube.com/watch?v=Keg7icC56Sg",
      },
    ],
  },
  {
    id: 9,
    country: "Egypt",
    sites: [
      {
        label: "Great Pyramids of Giza",
        description:
          "The Great Pyramids of Giza are ancient monuments located on the Giza Plateau near Cairo. They are among the Seven Wonders of the Ancient World and are the only ones to remain largely intact. The largest pyramid, known as the Great Pyramid, was built for Pharaoh Khufu.",
        url: "https://www.youtube.com/watch?v=dWq0iC4YqbE",
      },
      {
        label: "Karnak Temple Complex",
        description:
          "The Karnak Temple Complex comprises a vast mix of decayed temples, chapels, pylons, and other buildings near Luxor, Egypt. It was the main place of worship of the eighteenth dynasty Theban Triad with the god Amun as its head.",
        url: "https://www.youtube.com/watch?v=9_6inr3KLx0",
      },
      {
        label: "Valley of the Kings",
        description:
          "The Valley of the Kings is a valley in Egypt where, for a period of nearly 500 years from the 16th to 11th century BC, rock-cut tombs were excavated for the pharaohs and powerful nobles of the New Kingdom (the Eighteenth to the Twentieth Dynasties of Ancient Egypt).",
        url: "https://www.youtube.com/watch?v=5kP4fGglFxk",
      },
      {
        label: "Abu Simbel Temples",
        description:
          "The Abu Simbel temples are two massive rock temples at Abu Simbel, a village in Nubia, southern Egypt, near the border with Sudan. They are part of the UNESCO World Heritage Site known as the 'Nubian Monuments.'",
        url: "https://www.youtube.com/watch?v=67xGeUnS0GA",
      },
      {
        label: "Egyptian Museum in Cairo",
        description:
          "The Museum of Egyptian Antiquities, known commonly as the Egyptian Museum or Museum of Cairo, is home to an extensive collection of ancient Egyptian antiquities. It has 120,000 items, with a representative amount on display and the remainder in storerooms.",
        url: "https://www.youtube.com/watch?v=SBiFpENm56c",
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
];

export { markers, touristSites };
