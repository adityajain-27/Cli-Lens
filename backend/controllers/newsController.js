// Climate news — with live GNews API support + mock fallback
// To enable live news: add GNEWS_API_KEY=your_key to .env
// Get a free key at https://gnews.io (100 requests/day)

const mockArticles = [
  {
    id: 1,
    title: "Arctic Sea Ice Hits Record Low for Third Straight Year",
    source: "Climate Wire",
    url: "https://www.climate.gov/news-features",
    publishedAt: "2026-03-14",
    keywords: ["arctic warming", "sea ice", "polar vortex"],
    summary:
      "Arctic sea ice extent reached its lowest recorded minimum this September, raising alarm among climate scientists about feedback loops accelerating polar warming.",
  },
  {
    id: 2,
    title: "India Faces Catastrophic Floods as Monsoon Extremes Intensify",
    source: "The Guardian",
    url: "https://www.theguardian.com/environment/climate-crisis",
    publishedAt: "2026-03-12",
    keywords: ["India floods", "monsoon", "extreme rainfall India"],
    summary:
      "Record monsoon rainfall led to severe flooding across Assam, Himachal Pradesh, and Uttarakhand, displacing millions and prompting urgent climate adaptation calls.",
  },
  {
    id: 3,
    title: "2026 Is Now the Hottest Year in Recorded Human History",
    source: "NASA Earth Observatory",
    url: "https://earthobservatory.nasa.gov",
    publishedAt: "2026-03-10",
    keywords: ["global warming", "climate change", "record temperatures"],
    summary:
      "NASA and NOAA confirmed that 2026 shattered temperature records globally, with mean surface temperature reaching 1.48°C above the pre-industrial baseline.",
  },
  {
    id: 4,
    title: "Polar Vortex Disruption Linked to Arctic Amplification",
    source: "Nature Climate Change",
    url: "https://www.nature.com/nclimate/",
    publishedAt: "2026-02-22",
    keywords: ["arctic warming", "polar vortex"],
    summary:
      "New research links the weakening of the polar vortex to increased Arctic warming, causing severe cold snaps across continental North America and Eurasia.",
  },
  {
    id: 5,
    title: "Kerala Declares Emergency After Unprecedented Rainfall Event",
    source: "The Hindu",
    url: "https://www.thehindu.com/sci-tech/energy-and-environment/",
    publishedAt: "2026-02-15",
    keywords: ["India floods", "extreme rainfall India", "monsoon"],
    summary:
      "Kerala received 200% of its average July rainfall in just 5 days. Scientists attribute this to a supercharged monsoon driven by warmer Arabian Sea temperatures.",
  },
  {
    id: 6,
    title: "IPCC: World Risks Crossing 1.5°C Threshold by 2030",
    source: "IPCC",
    url: "https://www.ipcc.ch",
    publishedAt: "2026-02-08",
    keywords: ["global warming", "climate change"],
    summary:
      "The IPCC's updated synthesis warns that without major mitigation, the world will likely exceed 1.5°C of warming between 2028 and 2032, triggering irreversible tipping points.",
  },
  {
    id: 7,
    title: "Great Barrier Reef Suffers Sixth Mass Bleaching Event",
    source: "Australian Bureau of Meteorology",
    url: "http://www.bom.gov.au/climate/",
    publishedAt: "2026-01-30",
    keywords: ["coral bleaching", "ocean warming", "marine ecosystems"],
    summary:
      "Record-breaking marine heatwaves have triggered the sixth mass bleaching event on the Great Barrier Reef since 2016, with 80% of surveyed reefs showing severe bleaching.",
  },
  {
    id: 8,
    title: "Saharan Dust Storms Intensify, Impacting European Air Quality",
    source: "European Environment Agency",
    url: "https://www.eea.europa.eu",
    publishedAt: "2026-01-25",
    keywords: ["dust storms", "air quality", "desertification"],
    summary:
      "An increase in the frequency and intensity of Saharan dust transport events is linked to desertification trends driven by rising temperatures across the Sahel region.",
  },
  {
    id: 9,
    title: "Antarctic Ice Sheet Loses Mass Three Times Faster Than 1990s",
    source: "ESA Climate Change Initiative",
    url: "https://climate.esa.int",
    publishedAt: "2026-01-18",
    keywords: ["sea level rise", "ice sheet", "Antarctica"],
    summary:
      "Satellite data from ESA's CryoSat-2 mission reveals Antarctica is losing approximately 150 billion tonnes of ice per year, contributing 0.4mm annually to global sea level rise.",
  },
  {
    id: 10,
    title: "Global CO₂ Concentrations Surpass 430 ppm Milestone",
    source: "NOAA Global Monitoring Lab",
    url: "https://gml.noaa.gov",
    publishedAt: "2026-01-10",
    keywords: ["global warming", "CO2", "emissions"],
    summary:
      "Monthly atmospheric CO₂ readings from Mauna Loa Observatory have exceeded 430 parts per million for the first time in human history, a rate of increase not seen in 800,000 years.",
  },
  {
    id: 11,
    title: "Amazon Rainforest Approaching Critical Tipping Point",
    source: "Science",
    url: "https://www.science.org",
    publishedAt: "2025-12-20",
    keywords: ["deforestation", "climate change", "carbon sink"],
    summary:
      "A landmark study warns that between 17-20% of the Amazon has already been destroyed, dangerously close to the estimated 20-25% tipping point beyond which the forest would transition to savanna.",
  },
  {
    id: 12,
    title: "European Heatwave Sets New All-Time Temperature Records",
    source: "Copernicus Climate Change Service",
    url: "https://climate.copernicus.eu",
    publishedAt: "2025-12-05",
    keywords: ["record temperatures", "heatwave", "Europe"],
    summary:
      "Southern Europe experienced its most intense heatwave on record, with temperatures exceeding 48°C in parts of Spain, Italy, and Greece, causing dozens of wildfires.",
  },
];

// Fetch live news from GNews API
const fetchLiveNews = async (query) => {
  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) return null; // No key — fall back to mock data

  try {
    const searchQuery = query || "climate change";
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(searchQuery)}&lang=en&country=any&max=10&apikey=${apiKey}`;
    
    const response = await fetch(url);
    if (!response.ok) return null;
    
    const data = await response.json();
    if (!data.articles || data.articles.length === 0) return null;

    // Transform GNews format to our format
    return data.articles.map((article, index) => ({
      id: `live-${index + 1}`,
      title: article.title,
      source: article.source?.name || "Unknown",
      url: article.url,
      publishedAt: article.publishedAt?.split("T")[0] || new Date().toISOString().split("T")[0],
      keywords: extractKeywords(article.title + " " + (article.description || "")),
      summary: article.description || article.content?.slice(0, 200) || "",
      image: article.image || null,
      isLive: true,
    }));
  } catch (error) {
    console.error("GNews API error:", error.message);
    return null;
  }
};

// Extract climate-related keywords from text
const extractKeywords = (text) => {
  const lower = text.toLowerCase();
  const kwMap = [
    ["arctic warming", "arctic"], ["sea ice", "ice"],
    ["global warming", "warming", "temperature"],
    ["climate change", "climate"],
    ["coral bleaching", "coral", "reef"],
    ["India floods", "flood", "monsoon"],
    ["sea level rise", "sea level"],
    ["extreme rainfall", "rainfall", "precipitation"],
    ["drought", "dry"],
    ["ice sheet", "glacier", "ice cap"],
    ["CO2", "emissions", "carbon"],
    ["heatwave", "heat wave", "record temperatures"],
    ["deforestation", "forest"],
    ["dust storms", "desertification"],
  ];
  const found = [];
  for (const [keyword, ...aliases] of kwMap) {
    if ([keyword, ...aliases].some((a) => lower.includes(a))) {
      found.push(keyword);
    }
  }
  return found.length > 0 ? found : ["climate change"];
};

// @desc  Get climate news, optionally filtered by keyword
// @route GET /api/news?q=keyword
// @access Public
export const getNews = async (req, res) => {
  const { q } = req.query;

  // Try live news first
  const liveArticles = await fetchLiveNews(q || "climate change environment");
  if (liveArticles && liveArticles.length > 0) {
    // If filtering by keyword, filter live results too
    if (q) {
      const searchTerms = q.toLowerCase().split(",").map((t) => t.trim());
      const filtered = liveArticles.filter((article) =>
        article.keywords.some((kw) =>
          searchTerms.some((term) => kw.toLowerCase().includes(term))
        ) ||
        article.title.toLowerCase().includes(q.toLowerCase())
      );
      return res.status(200).json(filtered.length > 0 ? filtered : liveArticles);
    }
    return res.status(200).json(liveArticles);
  }

  // Fallback to mock data
  if (!q) {
    return res.status(200).json(mockArticles);
  }

  const searchTerms = q.toLowerCase().split(",").map((t) => t.trim());
  const filtered = mockArticles.filter((article) =>
    article.keywords.some((kw) =>
      searchTerms.some((term) => kw.toLowerCase().includes(term))
    ) ||
    article.title.toLowerCase().includes(q.toLowerCase())
  );

  return res.status(200).json(filtered.length > 0 ? filtered : mockArticles);
};
