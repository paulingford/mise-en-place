/** Seed catalog: 40 publisher recipes (10 × WOL, Smitten Kitchen, Serious Eats, NYT Cooking). */
export const INITIAL_DISHES = [
  {
    "id": "wol-mapo-tofu",
    "title": "Mapo Tofu",
    "sourceTitle": "Mapo Tofu (The Real Deal)",
    "sourceUrl": "https://thewoksoflife.com/ma-po-tofu-real-deal/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2019/06/mapo-tofu-10.jpg",
    "cuisine": "Sichuan",
    "cookTime": 35,
    "servings": 4,
    "flavorProfile": [
      "spicy",
      "numbing",
      "umami"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "chili-oil",
        "label": "Spicy oil base",
        "note": "Add doubanjiang with the oil",
        "extras": [
          {
            "item": "Doubanjiang",
            "amount": "2 tbsp",
            "note": "Sichuan bean paste"
          },
          {
            "item": "Sichuan peppercorn",
            "amount": "1 tsp",
            "note": "toasted and ground"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Sauce",
        "note": "Thin with stock; add cornstarch slurry at end",
        "extras": [
          {
            "item": "Chicken stock",
            "amount": "200 ml",
            "note": ""
          },
          {
            "item": "Cornstarch",
            "amount": "1 tbsp",
            "note": "mixed with 2 tbsp water OR stir in"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Tofu and pork",
        "ingredients": [
          {
            "item": "Silken tofu",
            "amount": "600 g",
            "note": "cubed"
          },
          {
            "item": "Ground pork",
            "amount": "150 g",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "4",
            "note": "sliced"
          },
          {
            "item": "Garlic",
            "amount": "3 cloves",
            "note": "minced"
          }
        ]
      }
    ],
    "steps": [
      "Fry doubanjiang (Sichuan chili bean paste) in hot oil until the oil turns red, then add the pork and cook until it separates into fine crumbles.",
      "Stir in the garlic, soy-ginger base, and stock, and let everything simmer gently so the flavors meld.",
      "Nestle in the silken tofu and simmer for 4–5 minutes without stirring roughly, just until it is heated through.",
      "Thicken the sauce with cornstarch slurry, then finish with scallions and a snow of ground Sichuan pepper."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Silken tofu",
          "amount": "600 g",
          "note": ""
        },
        {
          "item": "Ground pork",
          "amount": "150 g",
          "note": ""
        },
        {
          "item": "Doubanjiang",
          "amount": "2 tbsp",
          "note": ""
        },
        {
          "item": "Sichuan peppercorns",
          "amount": "1–2 tsp",
          "note": ""
        },
        {
          "item": "Chicken stock",
          "amount": "200 ml",
          "note": ""
        },
        {
          "item": "Soy sauce",
          "amount": "1–2 tbsp",
          "note": ""
        },
        {
          "item": "Garlic and ginger",
          "amount": "to taste",
          "note": ""
        },
        {
          "item": "Cornstarch slurry",
          "amount": "optional",
          "note": ""
        },
        {
          "item": "Scallions",
          "amount": "4",
          "note": ""
        }
      ],
      "steps": [
        "Bloom doubanjiang; brown pork.",
        "Add aromatics, stock, and seasonings.",
        "Simmer tofu gently until hot through.",
        "Thicken; finish with scallions and Sichuan pepper."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-beef-chow-fun",
    "title": "Beef Chow Fun",
    "sourceTitle": "Beef Chow Fun",
    "sourceUrl": "https://thewoksoflife.com/beef-chow-fun/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2019/11/beef-chow-fun-16.jpg",
    "cuisine": "Cantonese",
    "cookTime": 25,
    "servings": 4,
    "flavorProfile": [
      "smoky",
      "umami",
      "savory"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Chow fun sauce",
        "note": "Add oyster and dark soy",
        "extras": [
          {
            "item": "Oyster sauce",
            "amount": "1 tbsp",
            "note": ""
          },
          {
            "item": "Dark soy sauce",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Beef and noodles",
        "ingredients": [
          {
            "item": "Flank or sirloin",
            "amount": "300 g",
            "note": "thinly sliced"
          },
          {
            "item": "Fresh ho fun noodles",
            "amount": "450 g",
            "note": "wide rice noodles"
          },
          {
            "item": "Bean sprouts",
            "amount": "100 g",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "4",
            "note": "cut in 2-inch pieces"
          },
          {
            "item": "Baking soda + water",
            "amount": "pinch",
            "note": "optional velvet step"
          }
        ]
      }
    ],
    "steps": [
      "If you velvet the beef (brief cornstarch marinade for tenderness), do that first; pat the fresh ho fun noodles completely dry so they sear instead of steaming.",
      "Heat the wok until it is ripping hot, sear the beef in a flash, then lift it out and set it aside.",
      "Briefly char the noodles, add the sauce, and toss so every ribbon carries a little smoke and sheen.",
      "Return the beef with bean sprouts and scallions and give everything a final minute over high heat so the plate tastes of the wok."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Beef",
          "amount": "300 g",
          "note": "sliced"
        },
        {
          "item": "Wide ho fun noodles",
          "amount": "450 g",
          "note": ""
        },
        {
          "item": "Soy, oyster, dark soy, sesame",
          "amount": "as recipe",
          "note": ""
        },
        {
          "item": "Ginger and garlic",
          "amount": "to taste",
          "note": ""
        },
        {
          "item": "Bean sprouts",
          "amount": "100 g",
          "note": ""
        },
        {
          "item": "Scallions",
          "amount": "4",
          "note": ""
        }
      ],
      "steps": [
        "Marinate and cook beef.",
        "Stir-fry noodles over high heat.",
        "Combine with sauce; finish with sprouts and scallions."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-egg-fried-rice",
    "title": "Egg Fried Rice",
    "sourceTitle": "Egg Fried Rice",
    "sourceUrl": "https://thewoksoflife.com/2015/08/egg-fried-rice/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2015/12/egg-fried-rice-10.jpg",
    "cuisine": "Chinese",
    "cookTime": 15,
    "servings": 4,
    "flavorProfile": [
      "savory",
      "smoky",
      "comforting"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Seasoning",
        "note": "Keep sauce for final toss",
        "extras": [
          {
            "item": "White pepper",
            "amount": "½ tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Rice and eggs",
        "ingredients": [
          {
            "item": "Cooked day-old rice",
            "amount": "4 cups",
            "note": "cold, grains separated"
          },
          {
            "item": "Eggs",
            "amount": "3–4",
            "note": "beaten"
          },
          {
            "item": "Frozen peas",
            "amount": "½ cup",
            "note": "optional"
          },
          {
            "item": "Neutral oil",
            "amount": "3 tbsp",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "4",
            "note": "chopped"
          }
        ]
      }
    ],
    "steps": [
      "Scramble the eggs in a hot wok until they are just set, then slide them out and keep them nearby.",
      "Add the cold rice, press it into the pan until you pick up some color, then toss to separate the grains.",
      "Fold the eggs back in with the soy-ginger base and a generous pinch of white pepper.",
      "Toss through peas and scallions and serve straight away while the rice is still very hot."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Day-old rice",
          "amount": "4 cups",
          "note": ""
        },
        {
          "item": "Eggs",
          "amount": "3–4",
          "note": ""
        },
        {
          "item": "Soy sauce and sesame oil",
          "amount": "to taste",
          "note": ""
        },
        {
          "item": "Peas, scallions, onion",
          "amount": "as you like",
          "note": ""
        }
      ],
      "steps": [
        "Cook eggs.",
        "Fry rice over high heat.",
        "Season and combine."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-pho-bo",
    "title": "Pho (Vietnamese Beef Noodle Soup)",
    "sourceTitle": "Pho Recipe (Vietnamese Noodle Soup)",
    "sourceUrl": "https://thewoksoflife.com/pho-vietnamese-noodle-soup/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2023/07/pho-recipe-4.jpg",
    "cuisine": "Vietnamese",
    "cookTime": 240,
    "servings": 8,
    "flavorProfile": [
      "aromatic",
      "savory",
      "clean"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "aromatic-base",
        "label": "Pho spice base",
        "note": "Char onion and ginger first",
        "extras": [
          {
            "item": "Star anise",
            "amount": "4",
            "note": ""
          },
          {
            "item": "Cinnamon stick",
            "amount": "1",
            "note": ""
          },
          {
            "item": "Cloves",
            "amount": "4",
            "note": ""
          },
          {
            "item": "Coriander seeds",
            "amount": "1 tbsp",
            "note": "toasted"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Broth and bowls",
        "ingredients": [
          {
            "item": "Beef bones and brisket",
            "amount": "as recipe",
            "note": "long simmer"
          },
          {
            "item": "Fish sauce",
            "amount": "3–4 tbsp",
            "note": "to taste"
          },
          {
            "item": "Rice noodles (banh pho)",
            "amount": "400 g",
            "note": "cooked"
          },
          {
            "item": "Thinly sliced raw sirloin",
            "amount": "300 g",
            "note": ""
          },
          {
            "item": "Bean sprouts, basil, lime, chili",
            "amount": "for serving",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Char onion and ginger; toast spices until fragrant.",
      "Simmer bones and beef for hours with the spice sachet, skimming often; season with fish sauce.",
      "Strain the broth and keep it at a hard simmer until you are ready to serve.",
      "Divide noodles and raw beef slices among deep bowls, then ladle in boiling broth—it will cook the beef on contact.",
      "Serve with herbs, sprouts, lime, and hoisin or sriracha."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Beef bones and meat",
          "amount": "",
          "note": ""
        },
        {
          "item": "Onion and ginger",
          "amount": "charred",
          "note": ""
        },
        {
          "item": "Pho spices",
          "amount": "blend",
          "note": ""
        },
        {
          "item": "Fish sauce",
          "amount": "",
          "note": ""
        },
        {
          "item": "Noodles and garnishes",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Build aromatic broth.",
        "Cook noodles.",
        "Assemble bowls with thin beef and hot broth."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-bibimbap",
    "title": "Easy Beef Bibimbap",
    "sourceTitle": "Easy Korean Beef Bibimbap",
    "sourceUrl": "https://thewoksoflife.com/easy-beef-bibimbap-recipe/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2017/05/bibimbap-recipe-13.jpg",
    "cuisine": "Korean",
    "cookTime": 45,
    "servings": 4,
    "flavorProfile": [
      "spicy",
      "umami",
      "colorful"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Bibimbap sauce",
        "note": "Whisk in gochujang and a little sugar",
        "extras": [
          {
            "item": "Gochujang",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Sesame oil",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Bowl components",
        "ingredients": [
          {
            "item": "Cooked short-grain rice",
            "amount": "4 cups",
            "note": ""
          },
          {
            "item": "Ground beef",
            "amount": "250 g",
            "note": "seasoned"
          },
          {
            "item": "Spinach, carrots, bean sprouts",
            "amount": "as recipe",
            "note": "blanched or sautéed"
          },
          {
            "item": "Eggs",
            "amount": "4",
            "note": "fried sunny side up"
          },
          {
            "item": "Sesame seeds",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Brown the seasoned beef until savory and deep in color.",
      "Cook each vegetable separately so textures stay distinct.",
      "Whisk the bibimbap sauce until smooth.",
      "Top bowls of rice with beef, vegetables, and a fried egg; pass the sauce on the side."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Rice",
          "amount": "",
          "note": ""
        },
        {
          "item": "Beef and vegetables",
          "amount": "",
          "note": ""
        },
        {
          "item": "Gochujang, soy, garlic, sesame",
          "amount": "",
          "note": ""
        },
        {
          "item": "Eggs",
          "amount": "4",
          "note": ""
        }
      ],
      "steps": [
        "Cook each component.",
        "Assemble with gochujang sauce."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-salmon-teriyaki-bowls",
    "title": "Salmon Teriyaki Bowls",
    "sourceTitle": "Salmon Teriyaki Bowls",
    "sourceUrl": "https://thewoksoflife.com/salmon-teriyaki-bowls/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2016/04/salmon-teriyaki-6.jpg",
    "cuisine": "Japanese",
    "cookTime": 25,
    "servings": 4,
    "flavorProfile": [
      "sweet",
      "umami",
      "glazed"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "miso-glaze",
        "label": "Teriyaki glaze",
        "note": "Add honey and reduced mirin; thicken with cornstarch if needed",
        "extras": [
          {
            "item": "Honey",
            "amount": "1 tbsp",
            "note": ""
          },
          {
            "item": "Fresh ginger",
            "amount": "1 tbsp",
            "note": "grated"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Salmon bowl",
        "ingredients": [
          {
            "item": "Salmon fillets",
            "amount": "4",
            "note": "skin-on"
          },
          {
            "item": "Cooked rice",
            "amount": "4 servings",
            "note": ""
          },
          {
            "item": "Steamed broccoli or veg",
            "amount": "2 cups",
            "note": ""
          },
          {
            "item": "Scallions and sesame seeds",
            "amount": "for garnish",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Heat oven to 400°F (200°C). Season salmon, dry the skin, and sear skin-down in an oiled ovenproof skillet until it crackles, ~3 min (don’t force if it sticks).",
      "Brush glaze on the fish, not bare pan; bake ~8 min, basting once or twice, until centers just set—or pull earlier for rarer fillets.",
      "Rest briefly, then serve over rice and veg with your garnishes."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Salmon",
          "amount": "4 fillets",
          "note": ""
        },
        {
          "item": "Soy, mirin, honey, ginger",
          "amount": "",
          "note": ""
        },
        {
          "item": "Rice and vegetables",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Make glaze; cook salmon.",
        "Build bowls."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-kung-pao-chicken",
    "title": "Kung Pao Chicken",
    "sourceTitle": "Kung Pao Chicken",
    "sourceUrl": "https://thewoksoflife.com/kung-pao-chicken/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2019/05/kung-pao-chicken-14.jpg",
    "cuisine": "Sichuan",
    "cookTime": 25,
    "servings": 4,
    "flavorProfile": [
      "spicy",
      "tangy",
      "savory"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "chili-oil",
        "label": "Aromatics",
        "note": "Fry whole dried chilies in oil",
        "extras": [
          {
            "item": "Dried red chilies",
            "amount": "8–12",
            "note": "whole"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Kung pao sauce",
        "note": "Balance with vinegar and sugar",
        "extras": [
          {
            "item": "Black vinegar or rice vinegar",
            "amount": "1 tbsp",
            "note": ""
          },
          {
            "item": "Sugar",
            "amount": "1 tsp",
            "note": ""
          },
          {
            "item": "Cornstarch",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken and peanuts",
        "ingredients": [
          {
            "item": "Chicken thigh",
            "amount": "500 g",
            "note": "cubes"
          },
          {
            "item": "Roasted peanuts",
            "amount": "½ cup",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "4",
            "note": "chunks"
          }
        ]
      }
    ],
    "steps": [
      "Velvet or marinate the chicken until well seasoned.",
      "Fry dried chilies and aromatics in hot oil until fragrant.",
      "Return the chicken to the wok and stir-fry until nearly cooked through, then add the sauce and cook until glossy and coating everything.",
      "Fold in roasted peanuts and scallion pieces."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken",
          "amount": "500 g",
          "note": ""
        },
        {
          "item": "Peanuts",
          "amount": "",
          "note": ""
        },
        {
          "item": "Dried chilies, soy, vinegar, sugar",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Stir-fry chicken.",
        "Combine with sauce and peanuts."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-tom-kha-gai",
    "title": "Tom Kha Gai (Thai Coconut Chicken Soup)",
    "sourceTitle": "Tom Kha Gai (Thai Coconut Chicken Soup)",
    "sourceUrl": "https://thewoksoflife.com/tom-kha-gai-thai-coconut-chicken-soup/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2025/03/tom-kha-gai-thai-coconut-soup-recipe.jpg",
    "cuisine": "Thai",
    "cookTime": 35,
    "servings": 4,
    "flavorProfile": [
      "rich",
      "sour",
      "aromatic"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "coconut-curry-base",
        "label": "Broth base",
        "note": "Omit curry paste; use lemongrass, galangal, lime leaves",
        "extras": [
          {
            "item": "Lemongrass",
            "amount": "2 stalks",
            "note": "bruised"
          },
          {
            "item": "Galangal",
            "amount": "5 slices",
            "note": ""
          },
          {
            "item": "Kaffir lime leaves",
            "amount": "4",
            "note": "torn"
          },
          {
            "item": "Chicken stock",
            "amount": "400 ml",
            "note": ""
          },
          {
            "item": "Coconut milk",
            "amount": "400 ml",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Soup",
        "ingredients": [
          {
            "item": "Chicken thigh",
            "amount": "400 g",
            "note": "sliced"
          },
          {
            "item": "Mushrooms",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Fish sauce",
            "amount": "2–3 tbsp",
            "note": ""
          },
          {
            "item": "Lime juice",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Cilantro and Thai chili",
            "amount": "to taste",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Gently simmer lemongrass, galangal (a firm rhizome sold near ginger), and lime leaves in coconut milk and stock until the broth is fragrant and full-flavored.",
      "Slide in sliced chicken and mushrooms and poach them quietly until the chicken is opaque and the mushrooms yield.",
      "Balance the pot with fish sauce and a generous squeeze of lime until the soup hums between rich, sour, and salty.",
      "Ladle into bowls and shower with cilantro and sliced chili for freshness and bite."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Coconut milk and stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Chicken",
          "amount": "",
          "note": ""
        },
        {
          "item": "Lemongrass, galangal, lime leaves",
          "amount": "",
          "note": ""
        },
        {
          "item": "Fish sauce and lime",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Infuse broth.",
        "Cook chicken.",
        "Season and serve."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-hainanese-chicken-rice",
    "title": "Hainanese Chicken Rice",
    "sourceTitle": "Hainanese Chicken Rice",
    "sourceUrl": "https://thewoksoflife.com/hainanese-chicken-rice/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2023/07/hainan-chicken-rice-7.jpg",
    "cuisine": "Singaporean",
    "cookTime": 150,
    "servings": 6,
    "flavorProfile": [
      "aromatic",
      "clean",
      "comforting"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "aromatic-base",
        "label": "Poaching liquid",
        "note": "12–14 cups water; keep the fat from inside the bird for the rice (see first step)",
        "extras": [
          {
            "item": "Water",
            "amount": "12–14 cups",
            "note": ""
          },
          {
            "item": "Fresh ginger",
            "amount": "4–5 slices",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "2 whole",
            "note": ""
          },
          {
            "item": "Kosher salt",
            "amount": "1 tbsp",
            "note": "for rubbing the chicken"
          },
          {
            "item": "Ice",
            "amount": "lots",
            "note": "large ice bath"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Ginger–garlic oil sauce",
        "note": "Fry minced ginger and garlic in oil until fragrant, not paste-thick",
        "extras": [
          {
            "item": "Neutral oil",
            "amount": "3 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken, rice, and remaining sauces",
        "ingredients": [
          {
            "item": "Whole chicken",
            "amount": "3–3½ lb / ~1.5 kg",
            "note": "Buddhist-style or organic if possible"
          },
          {
            "item": "Chicken fat from inside the bird",
            "amount": "2 oz",
            "note": "melt in the pan with a little oil"
          },
          {
            "item": "Jasmine rice",
            "amount": "3 cups raw",
            "note": "washed; cook in poaching broth"
          },
          {
            "item": "Garlic",
            "amount": "4 cloves",
            "note": "minced for rice"
          },
          {
            "item": "Rock sugar, dark soy, fresh chilies, lime, rice vinegar",
            "amount": "as recipe",
            "note": "sweet soy + chili sauces"
          },
          {
            "item": "Cucumber",
            "amount": "optional",
            "note": "sliced, for serving"
          }
        ]
      }
    ],
    "steps": [
      "Rinse and dry the chicken. Pull off any loose lump of fat from inside the body cavity (the hollow between the legs) and set it aside—you will melt that for the rice. Rub salt all over the skin.",
      "Bring water, ginger, and scallions to a boil. Lower the chicken breast-side up and add or remove water so the surface barely exposes the breast—this keeps the white meat from overcooking.",
      "When the liquid boils again, lift the chicken, tilt it so cooler poaching liquid trapped inside the body cavity pours out, then lower it back in. After one more boil, cover, reduce to the barest simmer, and cook 30–35 min (~10–11 min/lb), or 40–50 min if the bird is over 3½ lb.",
      "Check the thigh by piercing to the bone—the juices should run clear. While you wait, fill a large bowl with ice water.",
      "Lift the chicken, drain the cavity again, and submerge it in the ice water 15 min without tearing the skin. Drain and cover until carving. Simmer the broth uncovered if you want it more concentrated for the rice.",
      "For the rice, melt that reserved chicken fat with a little oil, fry garlic briefly, add rinsed rice, and stir ~2 min until the grains look dry and matte at the edges. Cook with poaching broth and salt in a rice cooker, or soak stovetop rice 20 min then simmer covered on low ~15 min.",
      "Make the sauces: gently fry minced ginger and garlic in oil; simmer rock sugar with water to a syrup and stir in dark soy; blend chiles with ginger, garlic, lime, and vinegar, thinning with broth to a spoonable consistency.",
      "Carve the chicken and serve at cool room temperature with rice, all three sauces, cucumber if you like, and small bowls of hot seasoned broth."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Whole chicken, water, ginger, scallions, salt, ice",
          "amount": "",
          "note": ""
        },
        {
          "item": "Rice, chicken fat, garlic, poaching broth",
          "amount": "",
          "note": ""
        },
        {
          "item": "Ginger–garlic oil, sweet dark soy, chili–lime sauce",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Rub salt on the bird; save interior fat for rice; poach; dump liquid from inside the bird; simmer 30–35 min; thigh juices clear.",
        "Ice bath 15 min; drain; optionally reduce broth for rice.",
        "Toast rice in melted fat; cook in broth; prepare three sauces.",
        "Carve and serve with rice, sauces, and broth."
      ]
    },
    "notes": ""
  },
  {
    "id": "wol-char-siu",
    "title": "Char Siu (Chinese BBQ Pork)",
    "sourceTitle": "Char Siu (Chinese BBQ Pork)",
    "sourceUrl": "https://thewoksoflife.com/chinese-bbq-pork-cha-siu/",
    "image": "https://thewoksoflife.com/wp-content/uploads/2019/04/char-siu-recipe-15.jpg",
    "cuisine": "Cantonese",
    "cookTime": 50,
    "servings": 6,
    "flavorProfile": [
      "sweet",
      "smoky",
      "savory"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "miso-glaze",
        "label": "Char siu marinade",
        "note": "Add hoisin, honey, five-spice",
        "extras": [
          {
            "item": "Hoisin sauce",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Honey or maltose",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Five-spice powder",
            "amount": "½ tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Pork",
        "ingredients": [
          {
            "item": "Pork shoulder butt",
            "amount": "1 kg",
            "note": "strips"
          },
          {
            "item": "Shaoxing wine",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Marinate the pork overnight or up to a full day.",
      "Roast on a rack, basting often, until the edges curl and caramelize.",
      "Turn the oven or broiler high for a final glaze pass until the surface looks shiny with a little char.",
      "Let the meat rest, then carve paper-thin slices for serving."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Pork",
          "amount": "1 kg",
          "note": ""
        },
        {
          "item": "Hoisin, soy, honey, five-spice",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Marinate.",
        "Roast and baste until charred edges."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-baked-ziti",
    "title": "My Old-School Baked Ziti",
    "sourceTitle": "My Old-School Baked Ziti",
    "sourceUrl": "https://smittenkitchen.com/2015/10/my-old-school-baked-ziti/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2015/10/my-old-school-baked-ziti1.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Italian-American",
    "cookTime": 75,
    "servings": 8,
    "flavorProfile": [
      "rich",
      "cheesy",
      "comforting"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato layer",
        "note": "Add crushed tomatoes and sausage if using",
        "extras": [
          {
            "item": "Sweet Italian sausage",
            "amount": "350 g",
            "note": "casings removed, optional"
          },
          {
            "item": "Crushed tomatoes",
            "amount": "700–800 g",
            "note": ""
          },
          {
            "item": "Dried oregano",
            "amount": "1½ tsp",
            "note": ""
          },
          {
            "item": "Kosher salt",
            "amount": "to taste",
            "note": "for the sauce"
          },
          {
            "item": "Black pepper",
            "amount": "freshly ground",
            "note": "to taste"
          },
          {
            "item": "Red pepper flakes",
            "amount": "pinch",
            "note": "optional"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Pasta and cheeses",
        "ingredients": [
          {
            "item": "Ziti or rigatoni",
            "amount": "450 g",
            "note": "par-cooked"
          },
          {
            "item": "Mozzarella",
            "amount": "250 g",
            "note": ""
          },
          {
            "item": "Parmesan",
            "amount": "80 g",
            "note": "grated"
          },
          {
            "item": "Fresh spinach or ricotta",
            "amount": "as recipe",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Brown sausage if using; simmer tomatoes until deep and sweet, scraping the pan as needed.",
      "Boil ziti until almost al dente (still slightly firm in the center), drain, and toss with a scoop of sauce.",
      "Layer pasta, sauce, mozzarella, and parmesan in a deep dish, pressing lightly.",
      "Bake uncovered ~375°F/190°C until bubbling through and the top is well browned."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Ziti or rigatoni, crushed tomatoes, onion, garlic, olive oil",
          "amount": "",
          "note": ""
        },
        {
          "item": "Dried oregano, salt, black pepper, red pepper flakes",
          "amount": "",
          "note": ""
        },
        {
          "item": "Mozzarella and parmesan",
          "amount": "",
          "note": ""
        },
        {
          "item": "Italian sausage",
          "amount": "optional",
          "note": ""
        }
      ],
      "steps": [
        "Simmer sauce with sausage if using.",
        "Par-boil pasta; toss with some sauce.",
        "Layer pasta, sauce, cheeses.",
        "Bake until bubbling and golden."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-buttermilk-roast-chicken",
    "title": "Buttermilk Roast Chicken",
    "sourceTitle": "Buttermilk Roast Chicken",
    "sourceUrl": "https://smittenkitchen.com/2012/01/buttermilk-roast-chicken/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2012/01/buttermilk-roast-chicken.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "American",
    "cookTime": 60,
    "servings": 4,
    "flavorProfile": [
      "tangy",
      "juicy",
      "golden"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Buttermilk brine",
        "note": "Use buttermilk instead of lemon; add paprika and salt",
        "extras": [
          {
            "item": "Buttermilk",
            "amount": "2 cups",
            "note": ""
          },
          {
            "item": "Kosher salt",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Smoked or sweet paprika",
            "amount": "2 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken",
        "ingredients": [
          {
            "item": "Whole chicken or parts",
            "amount": "1.5–1.8 kg",
            "note": ""
          },
          {
            "item": "Neutral oil or butter",
            "amount": "for roasting",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Soak the chicken at least 8 hours in seasoned buttermilk so it seasons through.",
      "About an hour before roasting, take the chicken out to lose the chill; drain marinade and pat the skin very dry.",
      "Roast hot (~425°F/220°C) on a rack until deeply golden and an instant-read thermometer reads 165°F (74°C) at the thigh, not touching bone.",
      "Rest ~15 minutes before carving."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken",
          "amount": "whole",
          "note": ""
        },
        {
          "item": "Buttermilk, salt, garlic, paprika",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Buttermilk brine 8+ hours.",
        "Dry skin; roast hot until 165°F at thigh.",
        "Rest; carve."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-cream-tomato-soup",
    "title": "Cream of Tomato Soup (with Grilled Cheese)",
    "sourceTitle": "Cream of Tomato Soup with Classic Grilled Cheese",
    "sourceUrl": "https://smittenkitchen.com/2006/11/cream-of-tomato-soup-classic-grilled-cheese/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/11/cream-of-tomato-soup-and-classic-grilled-cheese1.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "American",
    "cookTime": 45,
    "servings": 6,
    "flavorProfile": [
      "creamy",
      "tangy",
      "nostalgic"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato soup",
        "note": "Finish with cream",
        "extras": [
          {
            "item": "Heavy cream",
            "amount": "120 ml",
            "note": ""
          },
          {
            "item": "tomato paste",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Grilled cheese",
        "ingredients": [
          {
            "item": "Sandwich bread",
            "amount": "8 slices",
            "note": ""
          },
          {
            "item": "Sharp cheddar",
            "amount": "200 g",
            "note": "sliced"
          },
          {
            "item": "Butter",
            "amount": "3 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Simmer the tomato base to a jammy red; season, then purée until silky.",
      "Off heat (or over low), stir in cream until plush but still bright; loosen with stock if needed.",
      "Griddle buttered sandwiches until bronze and molten in the middle.",
      "Serve soup with grilled cheese for dunking."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Tomatoes, onion, garlic, stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Cream",
          "amount": "",
          "note": ""
        },
        {
          "item": "Bread and cheese",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Simmer; purée; season.",
        "Fold in cream; adjust consistency.",
        "Griddle sandwiches.",
        "Serve together."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-roasted-tomato-soup",
    "title": "Roasted Tomato Soup with Broiled Cheddar",
    "sourceTitle": "Roasted Tomato Soup with Broiled Cheddar",
    "sourceUrl": "https://smittenkitchen.com/2011/09/roasted-tomato-soup-with-broiled-cheddar/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2011/09/roasted-tomato-soup-with-broiled-cheddar1.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "American",
    "cookTime": 60,
    "servings": 6,
    "flavorProfile": [
      "roasty",
      "savory",
      "cheesy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Roasted tomato base",
        "note": "Roast tomatoes, onion, and garlic first",
        "extras": [
          {
            "item": "Plum tomatoes",
            "amount": "2 kg",
            "note": "halved"
          },
          {
            "item": "Thyme",
            "amount": "few sprigs",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Finish",
        "ingredients": [
          {
            "item": "Vegetable or chicken stock",
            "amount": "500 ml",
            "note": ""
          },
          {
            "item": "Sharp cheddar",
            "amount": "120 g",
            "note": "for topping crocks"
          },
          {
            "item": "Crusty bread",
            "amount": "for cheese melts",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Roast tomatoes, onion, and garlic until concentrated; scrape all the browned bits from the pan into the pot.",
      "Simmer with stock 15–20 min, then blend until smooth; strain if you want it finer.",
      "Adjust salt; add sugar only if the tomatoes are harsh.",
      "Ladle into heatproof crocks or bowls, top with bread and cheddar, and broil until blistered and brown."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Tomatoes, onion, garlic, thyme, olive oil",
          "amount": "",
          "note": ""
        },
        {
          "item": "Stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Cheddar and bread",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Roast veg; scrape pan.",
        "Simmer with stock; blend; strain optional.",
        "Adjust seasoning.",
        "Broil cheesy tops on crocks."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-simplest-mushroom-pasta",
    "title": "Simplest Mushroom Pasta",
    "sourceTitle": "Simplest Mushroom Pasta",
    "sourceUrl": "https://smittenkitchen.com/2022/04/simplest-mushroom-pasta/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/04/simplest-mushroom-pasta-8-scaled.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Italian",
    "cookTime": 35,
    "servings": 4,
    "flavorProfile": [
      "earthy",
      "rich",
      "herby"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "herb-garlic-oil",
        "label": "Mushrooms",
        "note": "Sauté mixed mushrooms until golden",
        "extras": [
          {
            "item": "Mixed mushrooms",
            "amount": "600 g",
            "note": "sliced"
          },
          {
            "item": "White wine",
            "amount": "60 ml",
            "note": "optional"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Pasta",
        "ingredients": [
          {
            "item": "Long pasta (linguine)",
            "amount": "350 g",
            "note": ""
          },
          {
            "item": "Butter",
            "amount": "2 tbsp",
            "note": "to finish"
          },
          {
            "item": "Parmesan",
            "amount": "80 g",
            "note": ""
          },
          {
            "item": "Parsley",
            "amount": "handful",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Boil the pasta until shy of al dente and reserve a mug of the starchy water.",
      "Sizzle the mushrooms in herb and garlic oil until they lose their squeak and turn mahogany at the edges.",
      "Toss the noodles with mushrooms, butter, parmesan, and just enough pasta water to gloss the strands.",
      "Scatter parsley over the top so the bowl tastes green and bright at the finish."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Pasta",
          "amount": "",
          "note": ""
        },
        {
          "item": "Mushrooms, garlic, herbs",
          "amount": "",
          "note": ""
        },
        {
          "item": "Parmesan",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Sauté mushrooms.",
        "Toss with pasta and cheese."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-pasta-e-ceci",
    "title": "Pasta e Ceci (Pasta with Chickpeas)",
    "sourceTitle": "Pasta and Chickpeas",
    "sourceUrl": "https://smittenkitchen.com/2017/10/quick-pasta-and-chickpeas-pasta-e-ceci/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2017/10/quick-pasta-e-ceci-pasta-with-chickpeas1.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Italian",
    "cookTime": 35,
    "servings": 4,
    "flavorProfile": [
      "hearty",
      "savory",
      "tomato"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Brothy tomato",
        "note": "Add rosemary and chickpeas",
        "extras": [
          {
            "item": "Cooked chickpeas",
            "amount": "800 g",
            "note": "two cans, drained"
          },
          {
            "item": "Rosemary",
            "amount": "2 sprigs",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Pasta",
        "ingredients": [
          {
            "item": "Small pasta (ditalini)",
            "amount": "250 g",
            "note": ""
          },
          {
            "item": "Vegetable or chicken stock",
            "amount": "1 L",
            "note": ""
          },
          {
            "item": "\"Optional pancetta\"",
            "amount": "80 g",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Simmer tomatoes with chickpeas, stock, and rosemary; mash a few chickpeas for body if you like.",
      "Add pasta; simmer until tender, stirring and splashing in water if it dries out.",
      "Remove and discard the woody rosemary stems.",
      "Adjust seasoning and serve with a drizzle of olive oil and grated parmesan."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chickpeas, tomato, pasta, stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Rosemary and garlic",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Simmer chickpeas in tomato broth.",
        "Cook pasta; stir; thin if needed.",
        "Remove rosemary.",
        "Finish with oil and cheese."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-zucchini-butter-spaghetti",
    "title": "Zucchini Butter Spaghetti",
    "sourceTitle": "Zucchini Butter Spaghetti",
    "sourceUrl": "https://smittenkitchen.com/2021/06/zucchini-butter-spaghetti/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/06/zucchini-butter-spaghetti-1-scaled.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Italian",
    "cookTime": 40,
    "servings": 4,
    "flavorProfile": [
      "melty",
      "savory",
      "light"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "herb-garlic-oil",
        "label": "Zucchini butter",
        "note": "Cook shredded zucchini very slowly until jammy",
        "extras": [
          {
            "item": "Zucchini",
            "amount": "900 g",
            "note": "coarsely shredded"
          },
          {
            "item": "Butter",
            "amount": "4 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Pasta",
        "ingredients": [
          {
            "item": "Spaghetti",
            "amount": "350 g",
            "note": ""
          },
          {
            "item": "Lemon zest",
            "amount": "1",
            "note": ""
          },
          {
            "item": "Parmesan",
            "amount": "60 g",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Cook shredded zucchini low with garlic oil and butter until jammy and the pan is mostly dry.",
      "Boil spaghetti a minute shy of al dente; reserve starchy water.",
      "Toss pasta with zucchini, parmesan, and just enough water to coat.",
      "Finish with zest and lemon juice."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Zucchini, butter, garlic, olive oil",
          "amount": "",
          "note": ""
        },
        {
          "item": "Spaghetti",
          "amount": "",
          "note": ""
        },
        {
          "item": "Lemon and parmesan",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Reduce zucchini slowly to a jammy base.",
        "Par-cook pasta; save water.",
        "Toss with parmesan and water.",
        "Finish with zest and lemon."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-spanakopita",
    "title": "Spanakopita",
    "sourceTitle": "Spanakopita",
    "sourceUrl": "https://smittenkitchen.com/2022/01/spanakopita/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/01/spanakopita-15-scaled.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Greek",
    "cookTime": 90,
    "servings": 8,
    "flavorProfile": [
      "tangy",
      "herby",
      "flaky"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "herb-garlic-oil",
        "label": "Spinach filling base",
        "note": "Wilt spinach with garlic",
        "extras": [
          {
            "item": "Spinach or mixed greens",
            "amount": "900 g",
            "note": "chopped"
          },
          {
            "item": "Scallions",
            "amount": "1 bunch",
            "note": "sliced"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Feta mix",
        "note": "Use lemon juice in filling",
        "extras": [
          {
            "item": "Feta",
            "amount": "300 g",
            "note": "crumbled"
          },
          {
            "item": "Dill",
            "amount": "½ cup",
            "note": "chopped"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Phyllo",
        "ingredients": [
          {
            "item": "Phyllo dough",
            "amount": "450 g",
            "note": "thawed"
          },
          {
            "item": "Melted butter or olive oil",
            "amount": "150 ml",
            "note": "for brushing"
          }
        ]
      }
    ],
    "steps": [
      "Wilt the spinach, cool it, then squeeze out as much water as you can before mixing with feta, dill, scallions, and lemon.",
      "Work quickly: keep phyllo under a damp towel; butter between sheets and drape with overhang.",
      "Fill, fold or top with more phyllo, then cut shallow diamond slits through only the top layers so steam can escape.",
      "Bake until deep gold and crisp, rotating once if needed."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Spinach, feta, dill, phyllo",
          "amount": "",
          "note": ""
        },
        {
          "item": "Butter and lemon",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Wring spinach dry; mix filling.",
        "Butter and layer phyllo; fill.",
        "Score top; bake until deep gold."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-chicken-tortilla-soup",
    "title": "Simple Chicken Tortilla Soup",
    "sourceTitle": "Simple Chicken Tortilla Soup",
    "sourceUrl": "https://smittenkitchen.com/2022/03/simple-chicken-tortilla-soup/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/03/simple-chicken-tortilla-soup-09-scaled.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Mexican-American",
    "cookTime": 50,
    "servings": 6,
    "flavorProfile": [
      "smoky",
      "bright",
      "spicy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "aromatic-base",
        "label": "Soup aromatics",
        "note": "Add cumin and chipotle in adobo",
        "extras": [
          {
            "item": "Chipotle in adobo",
            "amount": "1–2",
            "note": "minced"
          },
          {
            "item": "Ground cumin",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato broth",
        "note": "Thin with stock",
        "extras": [
          {
            "item": "Chicken stock",
            "amount": "1.5 L",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken and toppings",
        "ingredients": [
          {
            "item": "Shredded chicken",
            "amount": "400 g",
            "note": "cooked"
          },
          {
            "item": "Tortilla strips",
            "amount": "2 cups",
            "note": "fried or baked"
          },
          {
            "item": "Lime, avocado, cilantro",
            "amount": "to serve",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Sauté onion and garlic with cumin and minced chipotle until the kitchen fills with smoke and warmth.",
      "Pour in the tomato base and stock, then simmer until the soup tastes cohesive and bold.",
      "Fold in shredded chicken, season thoughtfully, and adjust heat and salt.",
      "Serve in deep bowls with crisp tortillas, lime, avocado, and whatever bright garnish you crave."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken, tomatoes, chipotle, cumin, stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Tortillas and garnishes",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Build smoky broth.",
        "Shred chicken in.",
        "Top with crispy tortillas."
      ]
    },
    "notes": ""
  },
  {
    "id": "sk-miso-chicken-rice",
    "title": "Miso Chicken and Rice",
    "sourceTitle": "Miso Chicken and Rice",
    "sourceUrl": "https://smittenkitchen.com/2026/02/miso-chicken-and-rice/",
    "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2026/02/miso-chicken-and-rice-10-scaled.jpg?fit=1200%2C800&ssl=1",
    "cuisine": "Japanese-inspired",
    "cookTime": 55,
    "servings": 4,
    "flavorProfile": [
      "umami",
      "savory",
      "one-pot"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "miso-glaze",
        "label": "Miso marinade",
        "note": "Add sake or white wine if desired",
        "extras": [
          {
            "item": "White miso",
            "amount": "3 tbsp",
            "note": ""
          },
          {
            "item": "Honey",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken and rice",
        "ingredients": [
          {
            "item": "Bone-in chicken thighs",
            "amount": "6",
            "note": ""
          },
          {
            "item": "Jasmine rice",
            "amount": "1.5 cups",
            "note": "rinsed"
          },
          {
            "item": "Chicken stock",
            "amount": "2¼ cups",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "3",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Coat the chicken evenly in miso glaze.",
      "Sear skin-side down until deep golden brown and the skin releases from the pan on its own.",
      "Add rice and stock, cover, and bake until the chicken is cooked through and the rice has absorbed the liquid.",
      "Let rest, then fluff the rice with a fork and scatter sliced scallions on top."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken thighs, rice, stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "Miso, mirin, soy, honey",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Sear chicken.",
        "Bake with rice and broth.",
        "Rest and serve."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-chicken-tikka-masala",
    "title": "Chicken Tikka Masala",
    "sourceTitle": "Chicken Tikka Masala for the Grill",
    "sourceUrl": "https://www.seriouseats.com/chicken-tikka-masala-for-the-grill-recipe",
    "image": "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
    "cuisine": "Indian",
    "cookTime": 75,
    "servings": 6,
    "flavorProfile": [
      "spicy",
      "creamy",
      "smoky"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "warm-spice-blend",
        "label": "Tikka spice blend",
        "note": "Masala spice blend plus Kashmiri chili for this dish (see below).",
        "extras": [
          {
            "item": "Kashmiri chili powder",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato base",
        "note": "Simmer until glossy and the oil separates; then finish with cream and butter below.",
        "extras": [
          {
            "item": "Heavy cream",
            "amount": "120 ml",
            "note": ""
          },
          {
            "item": "Butter",
            "amount": "2 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken",
        "ingredients": [
          {
            "item": "Boneless chicken thighs",
            "amount": "900 g",
            "note": ""
          },
          {
            "item": "Full-fat yogurt",
            "amount": "1 cup",
            "note": "marinade"
          },
          {
            "item": "Garlic ginger paste",
            "amount": "2 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Marinate chicken in yogurt, Tikka spice blend (Masala spice blend + Kashmiri chili—see ingredients), and garlic–ginger paste; grill or broil until blistered at the edges.",
      "Simmer Tomato base until the oil separates and you see a slick on the surface.",
      "Add chicken, heavy cream, and butter; simmer gently until tender and the sauce clings.",
      "Serve over basmati with cilantro."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken thighs",
          "amount": "900 g",
          "note": ""
        },
        {
          "item": "Yogurt marinade with spices",
          "amount": "",
          "note": ""
        },
        {
          "item": "Tomatoes, cream, butter",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Char chicken.",
        "Simmer in spiced tomato cream sauce."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-french-onion-soup",
    "title": "French Onion Soup",
    "sourceTitle": "French Onion Soup",
    "sourceUrl": "https://www.seriouseats.com/french-onion-soup-recipe",
    "image": "https://www.seriouseats.com/thmb/xo2aRvBxNaMMxMSTT_od8UUDuME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-french-onion-soup-recipe-hero-01-cbeea4db88344d00bc2254d4d2df602e.jpg",
    "cuisine": "French",
    "cookTime": 120,
    "servings": 6,
    "flavorProfile": [
      "sweet",
      "rich",
      "umami"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "caramelized-onions",
        "label": "Onions",
        "note": "Use all of your batch",
        "extras": []
      },
      {
        "type": "dish",
        "label": "Soup and gratin",
        "ingredients": [
          {
            "item": "Beef or chicken stock",
            "amount": "1.5 L",
            "note": ""
          },
          {
            "item": "Dry sherry or white wine",
            "amount": "120 ml",
            "note": ""
          },
          {
            "item": "Thyme",
            "amount": "few sprigs",
            "note": ""
          },
          {
            "item": "Baguette and Gruyère",
            "amount": "for topping",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Deglaze onions with wine, add stock and thyme, simmer 20–30 min, skimming if you want a clear soup.",
      "Taste and salt boldly—onion soups often need more than you think.",
      "Top crocks with toast and a thick layer of cheese.",
      "Broil until blistered; mind the hot bowls."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Onions",
          "amount": "lots",
          "note": "slow cooked"
        },
        {
          "item": "Stock, wine, herb sachet",
          "amount": "",
          "note": ""
        },
        {
          "item": "Bread and Gruyère",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Caramelize onions deeply.",
        "Deglaze; simmer with stock.",
        "Taste; adjust salt.",
        "Top with bread and cheese; broil."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-dan-dan-noodles",
    "title": "Dan Dan Noodles",
    "sourceTitle": "Dan Dan Noodles",
    "sourceUrl": "https://www.seriouseats.com/dan-dan-noodles-recipe",
    "image": "https://www.seriouseats.com/thmb/MDAmsY3X1Tv1VAvlIKDhy0vtH04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20110406-chinese-appetizers-dan-dan-noodle-5-2af33cd5faa24bb7919bce845f012c7e.jpg",
    "cuisine": "Sichuan",
    "cookTime": 40,
    "servings": 4,
    "flavorProfile": [
      "numbing",
      "nutty",
      "spicy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Sauce",
        "note": "Whisk in tahini and sichuan pepper oil",
        "extras": [
          {
            "item": "Chinese sesame paste or tahini",
            "amount": "3 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "chili-oil",
        "label": "Chili finishing oil",
        "note": "",
        "extras": []
      },
      {
        "type": "dish",
        "label": "Pork and noodles",
        "ingredients": [
          {
            "item": "Ground pork",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Fresh wheat noodles",
            "amount": "400 g",
            "note": ""
          },
          {
            "item": "Baby bok choy",
            "amount": "200 g",
            "note": "halved or quartered lengthwise"
          },
          {
            "item": "Ya cai or preserved veg",
            "amount": "2 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Brown the ground pork with ya cai (Sichuan preserved mustard greens) until the meat is crisp at the edges.",
      "Bring a large pot of well-salted water to a rolling boil and cook the noodles for exactly the time the package suggests.",
      "During the final minute or two, tuck in baby bok choy until the leaves turn vivid and tender-crisp, then drain the noodles with care.",
      "Whisk the sauce into each bowl, twist in the hot noodles, and toss lightly so every strand carries sesame and heat.",
      "Top with the pork, scallions, and as much chili oil as your conscience allows."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Noodles, pork, preserved mustard",
          "amount": "",
          "note": ""
        },
        {
          "item": "Soy, sesame, chili oil, sichuan pepper",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Make sauce base.",
        "Cook pork.",
        "Boil noodles; finish greens; drain.",
        "Assemble bowls."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-channa-masala",
    "title": "Channa Masala",
    "sourceTitle": "Channa Masala (Chickpea Curry)",
    "sourceUrl": "https://www.seriouseats.com/channa-masala-recipe",
    "image": "https://www.seriouseats.com/thmb/YIZ-JlXSyjZQgSPw4ocvgXn5IM0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/channa-masala-recipe-hero-20685037447b471c8f69f6873087de3a.JPG",
    "cuisine": "Indian",
    "cookTime": 45,
    "servings": 6,
    "flavorProfile": [
      "warm",
      "tangy",
      "earthy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "aromatic-base",
        "label": "Masala base",
        "note": "Bloom with cumin and coriander",
        "extras": [
          {
            "item": "Garam masala",
            "amount": "1 tsp",
            "note": ""
          },
          {
            "item": "Amchur (dry mango)",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato gravy",
        "note": "Mash some chickpeas to thicken",
        "extras": []
      },
      {
        "type": "dish",
        "label": "Chickpeas",
        "ingredients": [
          {
            "item": "Cooked chickpeas",
            "amount": "900 g",
            "note": ""
          },
          {
            "item": "Fresh ginger",
            "amount": "1 tbsp",
            "note": "grated"
          },
          {
            "item": "Cilantro",
            "amount": "handful",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Simmer the chickpeas in spiced tomato gravy until the spices taste mellow and the chickpeas swell softly.",
      "Mash a handful against the pot wall so the sauce clings like a proper curry.",
      "Brighten with lemon or amchur and a handful of cilantro so the pot finishes tangy and fresh.",
      "Serve with rice or warm roti for scooping."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chickpeas, tomatoes, onion, garlic, ginger",
          "amount": "",
          "note": ""
        },
        {
          "item": "Whole and ground spices",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Build curry base.",
        "Simmer chickpeas until thick."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-crispy-smashed-potatoes",
    "title": "Crispy Smashed Potatoes",
    "sourceTitle": "Crispy Smashed Potatoes",
    "sourceUrl": "https://www.seriouseats.com/crispy-smashed-potatoes-recipe",
    "image": "https://www.seriouseats.com/thmb/YsF4L7917yyBuaNUrEq5uYl2Ic0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-smashed-potatoes-recipe-hero-01_1-446dea5818264057bef4bef06e5358eb.JPG",
    "cuisine": "American",
    "cookTime": 50,
    "servings": 4,
    "flavorProfile": [
      "crispy",
      "buttery",
      "comforting"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "herb-garlic-oil",
        "label": "Potatoes",
        "note": "Boil baby potatoes until tender",
        "extras": [
          {
            "item": "Baby potatoes",
            "amount": "1 kg",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Roast",
        "ingredients": [
          {
            "item": "Olive oil or duck fat",
            "amount": "¼ cup",
            "note": ""
          },
          {
            "item": "Coarse salt",
            "amount": "generous",
            "note": ""
          },
          {
            "item": "Black pepper",
            "amount": "to taste",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Boil potatoes in salted water until tender; drain and steam-dry briefly.",
      "Oil a hot sheet pan, add potatoes, and smash to ragged coins.",
      "Roast hot, flipping once, until deeply crisp.",
      "Salt and pepper while hot."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Small potatoes",
          "amount": "1 kg",
          "note": ""
        },
        {
          "item": "Fat",
          "amount": "",
          "note": ""
        },
        {
          "item": "Salt and pepper",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Boil until tender; steam-dry.",
        "Pre-heat pan; smash.",
        "Roast until crisp.",
        "Season hot."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-detroit-pizza",
    "title": "Detroit-Style Pizza",
    "sourceTitle": "Detroit-Style Pizza",
    "sourceUrl": "https://www.seriouseats.com/detroit-style-pizza-recipe",
    "image": "https://www.seriouseats.com/thmb/c9291mRIx6n1mtaxIRuypUe4mhs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2017__02__20170216-detroit-style-pizza-47-1500x1125-1-233d75e6021048b3bf3cf28bd59d310b.jpg",
    "cuisine": "American",
    "cookTime": 180,
    "servings": 10,
    "flavorProfile": [
      "cheesy",
      "crispy",
      "tangy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Sauce stripe",
        "note": "Keep sauce on top in stripes",
        "extras": [
          {
            "item": "Brick cheese or low-moisture mozzarella",
            "amount": "400 g",
            "note": "edge-to-edge"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Dough and pepperoni",
        "ingredients": [
          {
            "item": "High-hydration pizza dough",
            "amount": "1 batch",
            "note": ""
          },
          {
            "item": "Pepperoni cups",
            "amount": "100 g",
            "note": ""
          },
          {
            "item": "Butter for pan",
            "amount": "for steel pan",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Stretch the dough into a well-oiled Detroit pan, coaxing it into the corners like a relaxed focaccia.",
      "Cover the dough with cheese edge to edge so a crisp ring of fried cheese can form against the pan.",
      "Stripe the sauce across the top, scatter pepperoni that will curl into cups, and slide the pan into a hot oven.",
      "Bake until the rim is crisp with fried cheese and the center is set and blistery."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Pizza dough",
          "amount": "",
          "note": ""
        },
        {
          "item": "Cheese, sauce, pepperoni",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Pan proof.",
        "Layer cheese then sauce.",
        "Bake until crisp cheese rim."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-oyakodon",
    "title": "Oyakodon",
    "sourceTitle": "Oyakodon (Japanese Chicken & Egg Rice Bowl)",
    "sourceUrl": "https://www.seriouseats.com/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe",
    "image": "https://www.seriouseats.com/thmb/t2cbi4d-LeZGu__DP5dF1gBuzsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.JPG",
    "cuisine": "Japanese",
    "cookTime": 30,
    "servings": 2,
    "flavorProfile": [
      "savory",
      "comforting",
      "soft"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Dashi broth",
        "note": "Season with mirin and sugar",
        "extras": [
          {
            "item": "Dashi or chicken stock",
            "amount": "200 ml",
            "note": ""
          },
          {
            "item": "Mirin",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Sugar",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Chicken and egg",
        "ingredients": [
          {
            "item": "Skinless chicken thighs",
            "amount": "300 g",
            "note": "sliced"
          },
          {
            "item": "Eggs",
            "amount": "3",
            "note": "lightly beaten"
          },
          {
            "item": "Cooked short-grain rice",
            "amount": "2 bowls",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Simmer seasoned dashi with chicken in one layer, covered, until the meat is opaque and cooked through—keep it below a rolling boil.",
      "Pour in the beaten eggs in a loose figure eight, cover, and let them set 1–2 minutes until softly set and still a little jiggly in the middle.",
      "Slide the chicken and egg over hot rice, spoon any broth from the pan on top, and finish with sliced scallions."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken, eggs, dashi, soy, mirin",
          "amount": "",
          "note": ""
        },
        {
          "item": "Rice",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Simmer chicken gently in seasoned dashi until done.",
        "Add eggs; cover; set softly.",
        "Serve over hot rice with scallions."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-korean-fried-chicken",
    "title": "Korean Fried Chicken",
    "sourceTitle": "Korean Fried Chicken",
    "sourceUrl": "https://www.seriouseats.com/korean-fried-chicken-recipe",
    "image": "https://www.seriouseats.com/thmb/wSwNeEM8dRqjIG1SY1VPr6GZEMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2012__10__20200513-korean-fried-chicken-reshoot-vicky-wasik-1-5-9cfbe30c4a494e9ab386b3e83a3af7d1.jpg",
    "cuisine": "Korean",
    "cookTime": 60,
    "servings": 4,
    "flavorProfile": [
      "crunchy",
      "sweet-heat",
      "sticky"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Chicken marinade",
        "note": "Light cornstarch dredge after marinade",
        "extras": [
          {
            "item": "Gochujang",
            "amount": "2 tbsp",
            "note": "for optional glaze"
          },
          {
            "item": "Honey",
            "amount": "2 tbsp",
            "note": "glaze"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Fry",
        "ingredients": [
          {
            "item": "Chicken wings or drumettes",
            "amount": "1 kg",
            "note": ""
          },
          {
            "item": "Potato starch or cornstarch",
            "amount": "for dredging",
            "note": ""
          },
          {
            "item": "Neutral frying oil",
            "amount": "as needed",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Marinate well; drip dry, then dust lightly with starch for a thin crust.",
      "Fry once at moderate heat to cook through, rest, then fry hotter until the crust is hollow and shatteringly crisp.",
      "Optional: toss off heat in gochujang-honey glaze; shower with sesame."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken",
          "amount": "",
          "note": ""
        },
        {
          "item": "Starch coating",
          "amount": "",
          "note": ""
        },
        {
          "item": "Sweet-spicy glaze",
          "amount": "optional",
          "note": ""
        }
      ],
      "steps": [
        "Marinate; starch-dredge.",
        "Double-fry.",
        "Glaze; sesame."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-korean-fried-cauliflower",
    "title": "Korean-Style Fried Cauliflower",
    "sourceTitle": "Crispy Korean-Style Fried Cauliflower",
    "sourceUrl": "https://www.seriouseats.com/korean-fried-cauliflower-recipe",
    "image": "https://www.seriouseats.com/thmb/8FkRLOgXSpwoQ0Pw3JvuCtGwYF0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__02__20130220-cauliflower-korean-fried-buffalo-vegan-4-166c0175460e4b5597b46d5fb635e3cd.jpg",
    "cuisine": "Korean-inspired",
    "cookTime": 40,
    "servings": 4,
    "flavorProfile": [
      "spicy",
      "crunchy",
      "tangy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Buffalo-style glaze",
        "note": "Add gochujang and maple",
        "extras": [
          {
            "item": "Gochujang",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Maple syrup",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Cauliflower",
        "ingredients": [
          {
            "item": "Cauliflower florets",
            "amount": "1 head",
            "note": ""
          },
          {
            "item": "Rice flour batter",
            "amount": "as recipe",
            "note": ""
          },
          {
            "item": "Sesame seeds",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Heat the oil to the temperature given in your recipe, and fry in batches so it does not cool down too much.",
      "Fry until the crust crackles and a skewer meets little resistance in the thickest part of a floret.",
      "Drain the cauliflower briefly, then toss with glaze while everything is still hot so the sauce clings without sogging the crust.",
      "Finish with toasted sesame seeds and sliced scallions."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Cauliflower",
          "amount": "",
          "note": ""
        },
        {
          "item": "Batter and fry oil",
          "amount": "",
          "note": ""
        },
        {
          "item": "Spicy gochujang sauce",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Heat oil; fry in batches.",
        "Fry until crisp.",
        "Glaze hot.",
        "Sesame and scallion."
      ]
    },
    "notes": ""
  },
  {
    "id": "se-fish-tacos",
    "title": "Fish Tacos",
    "sourceTitle": "Fish Tacos",
    "sourceUrl": "https://www.seriouseats.com/fish-tacos-recipe",
    "image": "https://www.seriouseats.com/thmb/o0UFTByQkk1bX0NmpMS9F1T9ebQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__201010930-tilapia-fish-tacos-7512fc42b0bb4969b0dde7491be7f3b1.jpg",
    "cuisine": "Mexican",
    "cookTime": 35,
    "servings": 4,
    "flavorProfile": [
      "bright",
      "crispy",
      "fresh"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Cabbage slaw",
        "note": "Thin with a little mayo or crema",
        "extras": [
          {
            "item": "Green cabbage",
            "amount": "2 cups",
            "note": "shredded"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Fish and tortillas",
        "ingredients": [
          {
            "item": "White fish fillets",
            "amount": "500 g",
            "note": ""
          },
          {
            "item": "Beer batter or spice rub",
            "amount": "as recipe",
            "note": ""
          },
          {
            "item": "Corn tortillas",
            "amount": "8",
            "note": "warmed"
          },
          {
            "item": "Hot sauce",
            "amount": "",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Pat fish dry, season; keep beer batter cold and barely mixed.",
      "Shallow-fry in batches or blacken in a ripping-hot pan until edges char.",
      "Cook until the thickest part flakes but stays moist—thin fillets finish fast.",
      "Warm tortillas; fill with fish, slaw, crema, lime, and hot sauce."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Fish, tortillas, cabbage, lime",
          "amount": "",
          "note": ""
        },
        {
          "item": "Batter or rub",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Dry fish; cold batter if using.",
        "Fry or blacken in batches.",
        "Check flaking at thickest part.",
        "Warm tortillas; assemble."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-miso-salmon",
    "title": "Miso Roasted Salmon",
    "sourceTitle": "Miso Roasted Salmon",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1025204-miso-roasted-salmon",
    "image": "https://static01.nyt.com/images/2024/04/28/dining/28EATrex-miso-salmon/28EATrex-miso-salmon-threeByTwoMediumAt2X.jpg",
    "cuisine": "Japanese",
    "cookTime": 30,
    "servings": 4,
    "flavorProfile": [
      "umami",
      "caramelized",
      "bright"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "miso-glaze",
        "label": "Miso marinade",
        "note": "Whisk in lemon zest and juice",
        "extras": [
          {
            "item": "Lemon",
            "amount": "1",
            "note": "zest and juice"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Salmon",
        "ingredients": [
          {
            "item": "Salmon fillets",
            "amount": "4",
            "note": "skin-on, similar thickness"
          },
          {
            "item": "Toasted sesame",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Coat the salmon with miso paste and refrigerate up to overnight, or as little as 30 minutes.",
      "Scrape excess if needed; roast or broil until the glaze chars a little and the centers yield—flake to your taste.",
      "Rest a few minutes off the heat.",
      "Serve with lemon and toasted sesame."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Salmon",
          "amount": "4 fillets",
          "note": ""
        },
        {
          "item": "White miso, mirin, sugar, lemon",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Marinate 30 min–overnight.",
        "Roast or broil to doneness.",
        "Brief rest.",
        "Lemon and sesame."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-chicken-shawarma",
    "title": "Oven-Roasted Chicken Shawarma",
    "sourceTitle": "Oven-Roasted Chicken Shawarma",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1017161-oven-roasted-chicken-shawarma",
    "image": "https://static01.nyt.com/images/2023/03/19/multimedia/SS-Oven-Roasted-Chicken-Shawarma-phmt/SS-Oven-Roasted-Chicken-Shawarma-phmt-threeByTwoMediumAt2X.jpg",
    "cuisine": "Middle Eastern",
    "cookTime": 60,
    "servings": 6,
    "flavorProfile": [
      "warm",
      "garlicky",
      "herb"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "warm-spice-blend",
        "label": "Shawarma rub",
        "note": "Include turmeric and cinnamon",
        "extras": [
          {
            "item": "Turmeric",
            "amount": "1 tsp",
            "note": ""
          },
          {
            "item": "Cinnamon",
            "amount": "¼ tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Citrus marinade",
        "note": "Use lemon, garlic, olive oil",
        "extras": []
      },
      {
        "type": "dish",
        "label": "Serve with",
        "ingredients": [
          {
            "item": "Chicken thighs",
            "amount": "1 kg",
            "note": "boneless"
          },
          {
            "item": "Pita",
            "amount": "8",
            "note": ""
          },
          {
            "item": "Tomatoes, pickles, yogurt sauce",
            "amount": "as you like",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Marinate at least 1 hour (or overnight), working paste under the skin if you can.",
      "Roast on a rack over a sheet pan until edges curl and char; baste if the recipe says to.",
      "When the chicken hits temp or juices run clear, rest briefly before slicing.",
      "Slice the chicken thin and serve stuffed in pitas with salad and cool sauces."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Chicken thighs",
          "amount": "",
          "note": ""
        },
        {
          "item": "Spices, lemon, garlic, oil",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Marinate deeply.",
        "Roast on rack until colored.",
        "Rest briefly.",
        "Slice thin into pitas."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-bulgogi",
    "title": "Bulgogi (Korean Grilled Beef)",
    "sourceTitle": "Bulgogi",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1017444-bulgogi",
    "image": "https://static01.nyt.com/images/2023/11/14/multimedia/JM-Bulgogi-qmfj/JM-Bulgogi-qmfj-threeByTwoMediumAt2X.jpg",
    "cuisine": "Korean",
    "cookTime": 60,
    "servings": 4,
    "flavorProfile": [
      "sweet",
      "savory",
      "garlicky"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Bulgogi marinade",
        "note": "Grate Asian pear into marinade",
        "extras": [
          {
            "item": "Asian pear",
            "amount": "½",
            "note": "grated"
          },
          {
            "item": "Toasted sesame oil",
            "amount": "1 tbsp",
            "note": ""
          },
          {
            "item": "Brown sugar",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Beef",
        "ingredients": [
          {
            "item": "Ribeye or sirloin",
            "amount": "600 g",
            "note": "thinly sliced frozen slightly"
          },
          {
            "item": "Scallions",
            "amount": "4",
            "note": ""
          },
          {
            "item": "Lettuce cups",
            "amount": "for wrapping",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Marinate sliced beef 30 min to overnight.",
      "Shake off drips; sear in screaming-hot batches so each piece chars.",
      "Garnish with scallion or sesame if you like.",
      "Serve with rice, lettuce, and pickles."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Sliced beef",
          "amount": "",
          "note": ""
        },
        {
          "item": "Soy, sesame, garlic, pear, sugar",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Marinate.",
        "Shake off liquid; sear in batches.",
        "Garnish.",
        "Serve with rice and lettuce."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-dal-makkhani",
    "title": "Madhur Jaffrey’s Dal Makkhani",
    "sourceTitle": "Madhur Jaffrey’s Pressure Cooker Dal (Dal Makkhani)",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1020469-madhur-jaffreys-pressure-cooker-dal-dal-makkhani",
    "image": "https://static01.nyt.com/images/2019/09/25/dining/kc-buttery-dal/merlin_161002911_021cc13f-b34d-4748-a06a-4026265dea68-threeByTwoMediumAt2X.jpg",
    "cuisine": "Indian",
    "cookTime": 90,
    "servings": 6,
    "flavorProfile": [
      "creamy",
      "smoky",
      "rich"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "aromatic-base",
        "label": "Dal base",
        "note": "Cook onion and tomato with spices",
        "extras": [
          {
            "item": "Whole urad dal",
            "amount": "200 g",
            "note": "soaked"
          },
          {
            "item": "Kidney beans",
            "amount": "50 g",
            "note": "soaked"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "tomato-base",
        "label": "Tomato gravy",
        "note": "Simmer with cream",
        "extras": [
          {
            "item": "Heavy cream",
            "amount": "120 ml",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Tarka",
        "ingredients": [
          {
            "item": "Ghee",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Kashmiri chili",
            "amount": "½ tsp",
            "note": ""
          },
          {
            "item": "Thinly sliced onion",
            "amount": "1 small",
            "note": "for finishing"
          }
        ]
      }
    ],
    "steps": [
      "Pressure- or slow-cook the lentils with spices and tomato until the dal is creamy and patient with itself.",
      "Mash a portion against the pot so the gravy gains body without losing whole beans for texture.",
      "Stir in cream until the pot looks glossy and indulgent.",
      "Sizzle the tarka seasonings in hot ghee (the finishing spiced oil) and pour it over the dal at the table."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Black urad, kidney beans, tomato, cream",
          "amount": "",
          "note": ""
        },
        {
          "item": "Ginger, garlic, spices",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Cook dal.",
        "Simmer with tomato purée and cream.",
        "Top with spiced onions."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-green-goddess-pasta-salad",
    "title": "Green Goddess Pasta Salad",
    "sourceTitle": "Green Goddess Pasta Salad",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1020264-green-goddess-pasta-salad",
    "image": "https://static01.nyt.com/images/2019/06/12/dining/07apperex2/merlin_155266893_3780fb73-591f-412a-b8b6-de17a7b5d5fe-threeByTwoMediumAt2X.jpg",
    "cuisine": "American",
    "cookTime": 35,
    "servings": 8,
    "flavorProfile": [
      "herbaceous",
      "creamy",
      "fresh"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "tahini-sauce",
        "label": "Green dressing",
        "note": "Blend with basil, chives, and white wine vinegar",
        "extras": [
          {
            "item": "Fresh basil",
            "amount": "1 cup",
            "note": ""
          },
          {
            "item": "Sugar snap peas",
            "amount": "200 g",
            "note": "halved"
          }
        ]
      },
      {
        "type": "dish",
        "label": "Salad",
        "ingredients": [
          {
            "item": "Cheese tortellini or pasta",
            "amount": "450 g",
            "note": "cooked and cooled"
          },
          {
            "item": "Fennel",
            "amount": "1 bulb",
            "note": "shaved"
          }
        ]
      }
    ],
    "steps": [
      "Boil pasta to al dente; cool in a single layer (rinse only if the recipe says so).",
      "Whisk dressing until smooth and pourable; thin if stiff.",
      "Toss pasta with peas and fennel; dress lightly and taste for salt and acid.",
      "Chill the salad 20–30 minutes, then toss once more right before serving."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Pasta or tortellini",
          "amount": "",
          "note": ""
        },
        {
          "item": "Green goddess style dressing with herbs",
          "amount": "",
          "note": ""
        },
        {
          "item": "Crunchy vegetables",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Cook and cool pasta.",
        "Blend dressing; adjust.",
        "Toss with vegetables.",
        "Chill; re-toss; serve."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-sheet-pan-feta",
    "title": "Sheet-Pan Baked Feta With Broccolini, Tomatoes and Lemon",
    "sourceTitle": "Sheet-Pan Baked Feta With Broccolini, Tomatoes and Lemon",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1021277-sheet-pan-baked-feta-with-broccolini-tomatoes-and-lemon",
    "image": "https://static01.nyt.com/images/2021/12/28/dining/yf-baked-feta/yf-baked-feta-threeByTwoMediumAt2X.jpg",
    "cuisine": "Mediterranean",
    "cookTime": 30,
    "servings": 4,
    "flavorProfile": [
      "tangy",
      "jammy",
      "vegetal"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Roasting marinade",
        "note": "Use lemon slices with olive oil",
        "extras": [
          {
            "item": "Broccolini",
            "amount": "2 bunches",
            "note": ""
          },
          {
            "item": "Cherry tomatoes",
            "amount": "400 g",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Feta",
        "ingredients": [
          {
            "item": "Block feta",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Cooked grain or orzo",
            "amount": "to serve",
            "note": ""
          },
          {
            "item": "Warm spices",
            "amount": "optional pinch",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Toss the vegetables and lemon with oil, salt, and pepper; tuck the feta block where tomato juices will run under it without burning.",
      "Roast until tomatoes slump and broccolini tips color; feta should slump when poked.",
      "Mash feta into the veg on the tray; loosen with a splash of water or stock if needed.",
      "Spoon over grains or orzo while hot."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Feta, tomatoes, broccolini, lemon, olive oil",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Prep sheet; season.",
        "Roast until jammy and tender.",
        "Mash feta into veg.",
        "Serve over grains."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-lemon-ricotta-pancakes",
    "title": "Lemon Ricotta Pancakes",
    "sourceTitle": "Lemon Ricotta Pancakes",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1022931-lemon-ricotta-pancakes",
    "image": "https://static01.nyt.com/images/2024/01/22/multimedia/22LemonRicottaPancakes-rex-twjh/22LemonRicottaPancakes-rex-twjh-threeByTwoMediumAt2X.jpg",
    "cuisine": "American",
    "cookTime": 25,
    "servings": 4,
    "flavorProfile": [
      "bright",
      "fluffy",
      "rich"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Wet mix",
        "note": "Fold ricotta with buttermilk and zest",
        "extras": [
          {
            "item": "Ricotta",
            "amount": "1 cup",
            "note": ""
          },
          {
            "item": "Buttermilk",
            "amount": "¾ cup",
            "note": ""
          },
          {
            "item": "Eggs",
            "amount": "2",
            "note": ""
          },
          {
            "item": "Vanilla",
            "amount": "1 tsp",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Dry mix",
        "ingredients": [
          {
            "item": "Flour",
            "amount": "1 cup",
            "note": ""
          },
          {
            "item": "Baking powder",
            "amount": "1½ tsp",
            "note": ""
          },
          {
            "item": "Sugar",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Butter for griddle",
            "amount": "as needed",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Whisk the dry ingredients, breaking up any lumps of baking powder.",
      "Beat ricotta, buttermilk, eggs, zest, and vanilla; fold into dries; fold in whites last if using—stop when just combined.",
      "Butter a griddle over medium; drop small rounds with space to spread.",
      "Cook until lacy at the edge and bubbled on top; flip once and stack while centers are still a little soft."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Flour, ricotta, buttermilk, eggs, lemon",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Whisk dries.",
        "Fold in wet ricotta mix (and whites).",
        "Butter griddle; drop batter.",
        "Flip when set; stack."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-chocolate-chip-cookies",
    "title": "David Leite’s Chocolate Chip Cookies",
    "sourceTitle": "David Leite’s Chocolate Chip Cookies",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1015819-chocolate-chip-cookies",
    "image": "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-threeByTwoMediumAt2X.jpg",
    "cuisine": "American",
    "cookTime": 45,
    "servings": 24,
    "flavorProfile": [
      "buttery",
      "chocolate",
      "salty-sweet"
    ],
    "groups": [
      {
        "type": "dish",
        "label": "Dough",
        "ingredients": [
          {
            "item": "Cake flour",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Bread flour",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Butter",
            "amount": "250 g",
            "note": "softened"
          },
          {
            "item": "Light brown sugar",
            "amount": "280 g",
            "note": ""
          },
          {
            "item": "Granulated sugar",
            "amount": "200 g",
            "note": ""
          },
          {
            "item": "Eggs",
            "amount": "2 large",
            "note": ""
          },
          {
            "item": "Vanilla",
            "amount": "2 tsp",
            "note": ""
          },
          {
            "item": "Baking soda",
            "amount": "1¼ tsp",
            "note": ""
          },
          {
            "item": "Sea salt",
            "amount": "1½ tsp",
            "note": ""
          },
          {
            "item": "Bittersweet chocolate",
            "amount": "600 g",
            "note": "discs or chunks"
          }
        ]
      }
    ],
    "steps": [
      "Cream softened butter with both sugars until the mixture looks like damp sand, then beat in eggs and vanilla until silky.",
      "Whisk the flours, baking soda, and salt, then mix into the butter base until the dough just comes together.",
      "Fold in the chocolate and chill the dough a full day when you can—patience rewards you with depth.",
      "Scoop generous mounds and bake until the edges spread into brown lace and the centers still look slightly underdone."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Mixed flours, butter, sugars, chocolate",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Mix dough.",
        "Rest overnight.",
        "Bake."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-onion-fennel-risotto",
    "title": "Caramelized Onion and Fennel Risotto",
    "sourceTitle": "Caramelized Onion and Fennel Risotto",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1016978-caramelized-onion-and-fennel-risotto",
    "image": "https://static01.nyt.com/images/2014/11/05/science/05VEGTHANKSGIVING1/05VEGTHANKSGIVING1-superJumbo.jpg",
    "cuisine": "Italian",
    "cookTime": 75,
    "servings": 6,
    "flavorProfile": [
      "sweet",
      "herbaceous",
      "creamy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "caramelized-onions",
        "label": "Onion–fennel melt",
        "note": "Cook sliced fennel alongside onions until jammy",
        "extras": [
          {
            "item": "Fennel bulb",
            "amount": "1 large",
            "note": "thinly sliced"
          }
        ]
      },
      {
        "type": "component",
        "componentId": "herb-garlic-oil",
        "label": "White wine deglaze",
        "note": "Use before adding stock",
        "extras": [
          {
            "item": "Dry white wine",
            "amount": "120 ml",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Risotto",
        "ingredients": [
          {
            "item": "Arborio rice",
            "amount": "320 g",
            "note": ""
          },
          {
            "item": "Vegetable or chicken stock",
            "amount": "1.5 L",
            "note": "warm"
          },
          {
            "item": "Butter",
            "amount": "2 tbsp",
            "note": ""
          },
          {
            "item": "Parmesan",
            "amount": "60 g",
            "note": "grated"
          },
          {
            "item": "Fresh parsley",
            "amount": "handful",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Slow-cook onions and fennel until they collapse into something jammy and wine-dark sweet.",
      "Toast the rice in that aromatic base, deglaze with wine, and stir until the pan smells like a trattoria.",
      "Add warm stock in patient ladlefuls, stirring often, until the rice is creamy but still has a heartbeat.",
      "Swirl in butter, parmesan, and parsley so the risotto finishes glossy and assertively savory."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Onions, fennel, Arborio rice, stock",
          "amount": "",
          "note": ""
        },
        {
          "item": "White wine, butter, parmesan",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Caramelize vegetables.",
        "Risotto method to doneness.",
        "Finish with cheese."
      ]
    },
    "notes": ""
  },
  {
    "id": "nyt-greek-meatballs",
    "title": "Greek Meatballs",
    "sourceTitle": "Greek Meatballs",
    "sourceUrl": "https://cooking.nytimes.com/recipes/1025486-greek-meatballs",
    "image": "https://static01.nyt.com/images/2024/07/16/multimedia/greek-meatballs-zbtk/greek-meatballs-zbtk-threeByTwoMediumAt2X-v2.jpg",
    "cuisine": "Greek",
    "cookTime": 45,
    "servings": 4,
    "flavorProfile": [
      "herb",
      "juicy",
      "tangy"
    ],
    "groups": [
      {
        "type": "component",
        "componentId": "warm-spice-blend",
        "label": "Meatball seasoning",
        "note": "Add cumin and oregano to blend",
        "extras": [
          {
            "item": "Dried oregano",
            "amount": "1 tbsp",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "citrus-acid",
        "label": "Binding",
        "note": "Soak breadcrumbs in lemon and milk",
        "extras": [
          {
            "item": "Fresh mint and parsley",
            "amount": "1 cup",
            "note": "chopped"
          },
          {
            "item": "Breadcrumbs",
            "amount": "½ cup",
            "note": ""
          }
        ]
      },
      {
        "type": "dish",
        "label": "Meat and serve",
        "ingredients": [
          {
            "item": "Ground beef and lamb blend",
            "amount": "700 g",
            "note": ""
          },
          {
            "item": "Grated onion and tomato",
            "amount": "as recipe",
            "note": ""
          },
          {
            "item": "Tzatziki, pita, salad",
            "amount": "for serving",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Mix beef, lamb, herbs, soaked crumbs, and spices until combined but light.",
      "Roll the mixture into meatballs and let them rest a few minutes so they hold together in the pan.",
      "Broil or pan-fry until browned outside and cooked through with clear juices.",
      "Serve with tzatziki, pita, and salad."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Beef/lamb, herbs, tomato, onion, breadcrumbs",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Mix and shape.",
        "Cook until browned.",
        "Serve with yogurt sauce."
      ]
    },
    "notes": ""
  }
];
