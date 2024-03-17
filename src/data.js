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
];

export { markers, touristSites };
