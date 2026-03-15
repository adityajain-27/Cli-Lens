// Static climate story definitions
// Each story contains: id, title, region, description, variable for viz, and related news keywords
const stories = [
  {
    id: "arctic-warming",
    title: "Arctic Warming",
    region: "Arctic Circle",
    centerLat: 80,
    centerLon: 0,
    variable: "temperature",
    description:
      "The Arctic is warming nearly four times faster than the global average. Sea ice extent has declined dramatically since the 1980s, opening new shipping routes but disrupting ecosystems that depend on seasonal ice cover.",
    highlight: "Temperature anomalies in the Arctic exceed +3°C above baseline in recent decades, with September sea ice extent declining at 13% per decade.",
    newsKeywords: ["arctic warming", "sea ice", "polar vortex"],
    imageUrl: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=800&q=80",
  },
  {
    id: "extreme-rainfall-india",
    title: "Extreme Rainfall Zones — India",
    region: "South Asia",
    centerLat: 22,
    centerLon: 80,
    variable: "precipitation",
    description:
      "Monsoon patterns in India are becoming increasingly erratic. Some regions experience intense flooding while others face unprecedented drought, stressing agricultural systems that sustain over a billion people.",
    highlight: "Precipitation variability has increased by 20% since 1980 over peninsular India. Kerala received 200% of average July rainfall in just 5 days in recent years.",
    newsKeywords: ["India floods", "monsoon", "extreme rainfall India"],
    imageUrl: "https://images.unsplash.com/photo-1580227221469-5a507bd4047a?w=800&q=80",
  },
  {
    id: "rising-global-temperatures",
    title: "Rising Global Temperatures",
    region: "Global",
    centerLat: 0,
    centerLon: 0,
    variable: "temperature",
    description:
      "Global mean surface temperature has risen by ~1.2°C since pre-industrial times. The last decade was the warmest on record, with accelerating warming driven by greenhouse gas emissions.",
    highlight: "2024 shattered temperature records globally, with mean surface temperature reaching 1.35°C above the pre-industrial baseline.",
    newsKeywords: ["global warming", "climate change", "record temperatures"],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    id: "coral-reef-crisis",
    title: "The Coral Reef Crisis",
    region: "Indo-Pacific",
    centerLat: -18,
    centerLon: 150,
    variable: "temperature",
    description:
      "Rising ocean temperatures are triggering mass coral bleaching events worldwide. The Great Barrier Reef has experienced five mass bleaching events since 2016, threatening marine biodiversity and the livelihoods of millions who depend on reef ecosystems.",
    highlight: "Over 50% of the world's coral reefs have been lost in the past 30 years. At 1.5°C warming, 70-90% of tropical coral reefs will be lost.",
    newsKeywords: ["coral bleaching", "ocean warming", "marine ecosystems"],
    imageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
  },
  {
    id: "sahel-desertification",
    title: "Sahel Desertification",
    region: "West Africa",
    centerLat: 14,
    centerLon: 0,
    variable: "precipitation",
    description:
      "The Sahel region is experiencing rapid desertification as changing rainfall patterns push the Sahara further south. Declining vegetation cover threatens food security for over 100 million people and intensifies the frequency of dust storms reaching Europe.",
    highlight: "The Sahara has expanded by approximately 10% since 1920, with the most significant expansion occurring during summer months.",
    newsKeywords: ["desertification", "drought", "dust storms"],
    imageUrl: "https://images.unsplash.com/photo-1610408546197-03cdebcd2d19?w=800&q=80",
  },
  {
    id: "antarctic-ice-sheet",
    title: "Antarctic Ice Sheet Collapse",
    region: "Antarctica",
    centerLat: -75,
    centerLon: 0,
    variable: "temperature",
    description:
      "The West Antarctic Ice Sheet is considered the most vulnerable major ice body to climate change. Its collapse could raise global sea levels by up to 3 meters over centuries, threatening coastal cities worldwide.",
    highlight: "Antarctica is losing ice mass at an accelerating rate of 150 billion tonnes per year — triple the rate from the 1990s.",
    newsKeywords: ["sea level rise", "ice sheet", "Antarctica"],
    imageUrl: "https://images.unsplash.com/photo-1548625361-b1e605d8bcbc?w=800&q=80",
  },
];

// @desc  Get all climate stories
// @route GET /api/stories
// @access Public
export const getStories = (req, res) => {
  return res.status(200).json(stories);
};

// @desc  Get a single story by id
// @route GET /api/stories/:id
// @access Public
export const getStory = (req, res) => {
  const story = stories.find((s) => s.id === req.params.id);
  if (!story) return res.status(404).json({ message: "Story not found" });
  return res.status(200).json(story);
};
