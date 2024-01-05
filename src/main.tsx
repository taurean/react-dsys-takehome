import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./stylebase/stylebase.css";

const listingResponseObject = {
  listingTitle: "Private Penthouse",
  averageRating: 4,
  reviewCount: 200,
  location: "Beverly Hills, California, United States",
  listingPhotoUrl: "/property_photo.jpg",
  description:
    "<p>Elevate your lifestyle with this <em>stunning</em> penthouse in the heart of Beverly Hills. Offering awe-inspiring panoramic views, a spacious open layout, a gourmet kitchen, and a private terrace, this penthouse is the epitome of luxury living. Imagine waking up to the iconic <strong>Beverly Hills skyline</strong>, enjoying al fresco dining on your private terrace, and having world-class amenities at your fingertips. Don't miss the chance to experience Beverly Hills in the most glamorous way possible. Contact us today and make this penthouse your new home.</p>",
  pricePerDay: 200,
  serviceFee: 30,
  addOns: [
    {
      id: "isParty",
      price: 100,
      labelTitle: "Party",
      labelDescription:
        "Extends total amount of guests allowed to 30 and allows loud music.",
    },
    {
      id: "isRecordingLocation",
      price: 50,
      labelTitle: "Music video recording",
      labelDescription:
        "Site may be featured in music video or social media content.",
    },
    {
      id: "hasBartender",
      price: 200,
      labelTitle: "On-site bartender",
      labelDescription: "Bartending services (includes alcohol)",
    },
  ],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App data={listingResponseObject} />
  </React.StrictMode>
);
