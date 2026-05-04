export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  note: string;
  items: MenuItem[];
}

export interface RestaurantData {
  key: string;
  name: string;
  cuisine: string;
  menuSourceLabel: string;
  menuSourceUrl: string;
  bookingUrl: string;
  hours: string[];
  heroImage: string;
  sections: MenuSection[];
}

export const restaurantData: RestaurantData = {
  "key": "longwang",
  "name": "Longwang Restaurant",
  "cuisine": "Modern Asian seafood, wok dishes and banquets in Brisbane City",
  "menuSourceLabel": "Official website menu + Google Places",
  "menuSourceUrl": "https://www.longwang.com.au/menu",
  "bookingUrl": "https://www.sevenrooms.com/explore/longwangchopstickhouse/reservations/create/search?venues=longwangchopstickhouse,pompetteau,darkshepherd,yamasgreekdrink,stilts,richandrarerestaurant,fatcowrestaurant,opabarmezze,massimorestaurantandbar,foshbarrestaurant",
  "hours": [
    "Monday: 11:00 AM – 9:00 PM",
    "Tuesday: 11:00 AM – 9:00 PM",
    "Wednesday: 11:00 AM – 9:00 PM",
    "Thursday: 11:00 AM – 9:00 PM",
    "Friday: 11:00 AM – 9:30 PM",
    "Saturday: 11:00 AM – 9:30 PM",
    "Sunday: 11:00 AM – 9:00 PM"
  ],
  "heroImage": "/images/official-1.jpg",
  "sections": [
    {
      "title": "To Start",
      "note": "Cold and hot entree highlights from the official menu.",
      "items": [
        {
          "name": "Longwang Bread Slice",
          "description": "XO mushroom, garlic chives",
          "price": "$7"
        },
        {
          "name": "Crab Spring Roll",
          "description": "Crab meat, spring onion, vermicelli noodles and Longwang sauce (2pcs)",
          "price": "$22"
        },
        {
          "name": "Seared Scallops",
          "description": "Strange flavour sauce, crispy shallots, sesame, chilli oil (2pcs)",
          "price": "$22"
        },
        {
          "name": "Duck Pancakes",
          "description": "Hoisin plum sauce, sriracha sauce and cucumber (2pcs)",
          "price": "$22"
        }
      ]
    },
    {
      "title": "Hot Entree",
      "note": "Small plates for sharing.",
      "items": [
        {
          "name": "Wagyu Skewer",
          "description": "Teriyaki, sesame, potato puree",
          "price": "$24"
        },
        {
          "name": "Beef Dumplings",
          "description": "Beef broth, spring onion, chilli oil (5pcs)",
          "price": "$30"
        },
        {
          "name": "XO Prawn Toast",
          "description": "XO mayo, spring onion, bonito flake (2pcs)",
          "price": "$18"
        },
        {
          "name": "Crispy Squid",
          "description": "Tom yum salt, cherry tomato",
          "price": "$28"
        }
      ]
    },
    {
      "title": "Mains",
      "note": "Modern Asian mains and live seafood.",
      "items": [
        {
          "name": "Tempura Barramundi",
          "description": "Miso chimichurri",
          "price": "$49"
        },
        {
          "name": "Kung Pao Bug Tail",
          "description": "Facing-heaven chillies, Sichuan pepper, hot and numbing sauce, cashews",
          "price": "$64"
        },
        {
          "name": "Tea Smoked Duck Breast & Double Cooked Duck Leg",
          "description": "Hoisin, plum and sriracha sauce, pancakes",
          "price": "$64"
        },
        {
          "name": "Live QLD Mud Crab",
          "description": "Wok tossed with Singapore chilli sauce",
          "price": "$160"
        }
      ]
    }
  ],
  "address": "144 Edward St, Brisbane City QLD 4000, Australia",
  "phone": "(07) 3211 8880",
  "internationalPhone": "+61 7 3211 8880",
  "email": "",
  "website": "https://www.longwang.com.au/",
  "googleMapsUrl": "https://maps.google.com/?cid=18290304474129234230",
  "rating": 4.8,
  "reviewCount": 1863,
  "businessStatus": "OPERATIONAL",
  "location": {
    "lat": -27.4696331,
    "lng": 153.0280394
  },
  "logoImage": "/images/logo.png",
  "galleryImages": [
    "/images/official-2.jpg",
    "/images/google-1.jpg",
    "/images/google-2.jpg",
    "/images/google-3.jpg"
  ],
  "brand": {
    "bg": "#0b0907",
    "paper": "#f5eee4",
    "ink": "#17120e",
    "muted": "#7c6b5b",
    "accent": "#b9802f",
    "accent2": "#d8b36a",
    "logoInvert": true
  }
};
