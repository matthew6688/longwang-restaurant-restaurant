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
  "menuSourceLabel": "Official Longwang restaurant menu",
  "menuSourceUrl": "https://www.longwang.com.au/menu",
  "bookingUrl": "https://www.sevenrooms.com",
  "hours": [
    "7 days",
    "All day dining 11am-late",
    "Bar snacks 11am-9:30pm",
    "Dragon Hour 4-6pm"
  ],
  "heroImage": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1400&q=85",
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
  ]
};
