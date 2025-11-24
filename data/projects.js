export default [
  {
    id: 1,
    title: "Complete Tracking Setup for Games Bongo",
    image: "image2.png",
    slug: "pixel-setup-games-bongo",
    shortDescription:
      "I set up the Pixel and server-side tracking for Games Bongo using Google Tag Manager. It was an amazing experience working on this implementation.",
    client: {
      name: "Games Bongo",
      review:
        "Tamim Hasan is an outstanding analytics expert. He set up my Pixel and Google Analytics from scratch within just two days. Thank you, Tamim — I highly recommend him.",
      contactPerson: "Junayet Al Hasan",
      position: "Owner",
    },
    industry: "Gaming",
    teamSize: 3,
    website: "gamesbongo.com",
    requirements: [
      "Implement Meta Pixel through Google Tag Manager",
      "Track ViewContent, AddToCart, and Purchase events",
      "Set up Conversion API (Server-Side)",
    ],
    intro:
      "Games Bongo is a Bangladeshi online gaming top-up platform reaching thousands of players daily.",
    content: [
      {
        title: "Project Overview",
        description:
          "This project was an exciting opportunity for me as I started it completely from scratch, giving me full control over the entire tracking setup. I began by implementing Google Tag Manager on the website and configuring the essential tracking events for Google Analytics 4 (GA4). After that, I installed the Meta (Facebook) Pixel and configured the required standard events for this project. Below are some screenshots demonstrating the setup and implementation process.",
        images: [
          "Screenshot 2025-11-01.png",
          "Screenshot 2025-11-01 at 1.40.45 PM.png",
        ],
      },
      {
        title: "Server Side Tracking",
        description:
          "After completing the client-side tracking setup, I moved on to configure the server-side tracking. For the Server-Side Google Tag Manager (sGTM) container, I used Stape.io as the hosting platform and configured Cloudflare to proxy the same-origin path for better data privacy and performance.",
        images: [
          "Screenshot 2025-11-01 at 2.01.48 PM.png",
          "Screenshot 2025-11-01 at 2.02.43 PM.png",
        ],
      },
      {
        title: "Facebook Event Deduplication",
        description:
          "As we know, deduplication is a very important part of web analytics to ensure accurate event reporting. After completing all the setup steps, we successfully configured event deduplication for this project. As a result, the website is now fully functional and collecting data with 100% accuracy.",
        images: ["Screenshot 2025-11-01 at 2.02.30 PM.png"],
      },
    ],
  },
];
