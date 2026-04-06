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
      "Fry doubanjiang in hot oil until oil turns red. Add pork; cook until crumbly.",
      "Add garlic, soy-ginger base, and stock. Simmer gently.",
      "Slide in tofu; simmer 4–5 min without breaking.",
      "Thicken with cornstarch slurry. Top with scallions and ground Sichuan pepper."
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
      "Velvet beef if desired; pat noodles dry.",
      "Heat wok until very hot. Sear beef; remove.",
      "Char noodles briefly; add sauce and toss.",
      "Return beef with sprouts and scallions; high heat toss 1 minute."
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
      "Scramble eggs in hot wok; set aside.",
      "Add rice; press and char without moving, then toss.",
      "Return eggs; add soy-ginger base and white pepper.",
      "Fold in peas and scallions; serve immediately."
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
      "Char onion and ginger; toast spices.",
      "Simmer bones and beef with spices for hours; skim; season with fish sauce.",
      "Strain broth; keep piping hot.",
      "Add noodles and raw beef to bowls; ladle boiling broth.",
      "Serve with herbs, sprouts, lime, and hoisin/sriracha."
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
      "Marinate and cook beef.",
      "Prepare vegetables separately.",
      "Mix sauce.",
      "Arrange rice in bowls; top with beef, veg, egg, and sauce."
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
      "Season salmon; sear skin-side down.",
      "Brush with teriyaki glaze; finish in oven or flip and baste.",
      "Serve over rice with vegetables; garnish."
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
      "Velvet or marinade chicken.",
      "Fry chilies and aromatics.",
      "Stir-fry chicken; add sauce.",
      "Toss with peanuts and scallions."
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
      "Simmer aromatics in coconut and stock.",
      "Add chicken and mushrooms; poach.",
      "Season with fish sauce and lime.",
      "Garnish with cilantro and chili."
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
    "cookTime": 90,
    "servings": 4,
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
        "note": "Add smashed ginger and scallion whites",
        "extras": [
          {
            "item": "Fresh ginger",
            "amount": "6 slices",
            "note": ""
          },
          {
            "item": "Scallions",
            "amount": "3",
            "note": "halved"
          },
          {
            "item": "Salt",
            "amount": "for water",
            "note": ""
          }
        ]
      },
      {
        "type": "component",
        "componentId": "soy-ginger-base",
        "label": "Ginger-scallion sauce",
        "note": "Pour hot oil over minced ginger and scallion",
        "extras": []
      },
      {
        "type": "dish",
        "label": "Chicken and rice",
        "ingredients": [
          {
            "item": "Whole chicken",
            "amount": "1.2–1.5 kg",
            "note": ""
          },
          {
            "item": "Jasmine rice",
            "amount": "2 cups raw",
            "note": "cooked with chicken fat and broth"
          },
          {
            "item": "Sesame oil and soy",
            "amount": "for drizzling",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Poach chicken gently with aromatics; ice bath for skin.",
      "Cook rice with chicken fat and poaching broth.",
      "Carve chicken; serve with rice, cucumber, and sauces."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Whole chicken",
          "amount": "",
          "note": ""
        },
        {
          "item": "Rice",
          "amount": "",
          "note": ""
        },
        {
          "item": "Ginger, scallion, oil",
          "amount": "",
          "note": ""
        }
      ],
      "steps": [
        "Poach chicken.",
        "Make aromatic rice.",
        "Serve with chili and ginger sauces."
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
      "Marinate pork 8–24 hours.",
      "Roast on a rack, basting with reserved marinade.",
      "Glaze at high heat until lacquered.",
      "Rest; slice thinly."
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
      "Brown sausage if using; simmer tomato layer.",
      "Toss par-cooked pasta with some sauce.",
      "Layer pasta, sauce, mozzarella, and parmesan in a baking dish.",
      "Bake until bubbling and golden on top."
    ],
    "original": {
      "ingredients": [
        {
          "item": "Ziti, tomatoes, garlic, olive oil",
          "amount": "",
          "note": ""
        },
        {
          "item": "Mozzarella and parmesan",
          "amount": "",
          "note": ""
        },
        {
          "item": "Italian sausage or mushrooms",
          "amount": "optional",
          "note": ""
        }
      ],
      "steps": [
        "Build a simple tomato sauce.",
        "Layer with pasta and cheeses.",
        "Bake until browned."
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
      "Brine chicken in seasoned buttermilk at least 8 hours.",
      "Drain; roast at high heat until skin is crisp and meat is cooked.",
      "Rest before carving."
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
        "Brine overnight.",
        "Roast until done.",
        "Rest and carve."
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
      "Simmer tomato base until deep red; blend; stir in cream.",
      "Butter bread; griddle sandwiches until golden and melted.",
      "Serve soup with grilled cheese."
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
        "Cook soup; purée.",
        "Make grilled cheeses.",
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
      "Roast tomatoes and aromatics until concentrated.",
      "Simmer with stock; blend until smooth.",
      "Top oven crocks with bread and cheddar; broil."
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
        "Roast vegetables.",
        "Blend soup.",
        "Broil cheesy tops."
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
      "Boil pasta; reserve water.",
      "Cook mushrooms in herb & garlic oil until deep golden.",
      "Toss pasta with mushrooms, butter, cheese, and pasta water.",
      "Finish with parsley."
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
      "Simmer tomato base with chickpeas, stock, and rosemary.",
      "Add pasta; cook until tender.",
      "Season; serve with olive oil and parmesan."
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
        "Cook pasta in the same pot.",
        "Finish with good olive oil."
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
      "Melt zucchini into a sauce with garlic oil and butter.",
      "Cook pasta; toss with zucchini mixture and parmesan.",
      "Add lemon zest and pasta water for gloss."
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
        "Cook zucchini until butter-soft.",
        "Toss with pasta."
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
      "Cook spinach; drain very well; mix with feta, dill, scallions, and lemon.",
      "Layer buttered phyllo in a pan; add filling; top with more phyllo.",
      "Bake until deep gold and crisp."
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
        "Make filling.",
        "Layer phyllo.",
        "Bake until crisp."
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
      "Sauté aromatics with cumin and chipotle.",
      "Add tomato base and stock; simmer.",
      "Add chicken; taste.",
      "Serve with crunchy tortillas and garnishes."
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
      "Marinate or brush chicken with miso glaze.",
      "Sear chicken skin-side down.",
      "Nestle rice and stock in the same pan; cover and bake until chicken and rice are done.",
      "Rest; fluff rice; garnish with scallions."
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
        "label": "Masala spices",
        "note": "Add Kashmiri chili and garam masala",
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
        "label": "Tomato masala",
        "note": "Finish with cream and butter",
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
      "Marinate chicken in yogurt and spices; grill or broil with char.",
      "Make tomato masala; simmer.",
      "Simmer grilled chicken in sauce with cream and butter.",
      "Serve with basmati and cilantro."
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
      "Deglaze onions with wine; add stock and thyme; simmer.",
      "Toast bread slices with cheese.",
      "Broil cheese-topped crocks until brown."
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
        "Simmer soup.",
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
            "item": "Ya cai or preserved veg",
            "amount": "2 tbsp",
            "note": ""
          }
        ]
      }
    ],
    "steps": [
      "Crisp pork with ya cai.",
      "Divide sauce in bowls; add noodles.",
      "Top with pork, scallions, and chili oil."
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
      "Simmer chickpeas in spiced tomato gravy.",
      "Mash a few chickpeas for body.",
      "Finish with lemon or amchur and cilantro.",
      "Serve with rice or roti."
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
      "Boil potatoes; drain; smash flat.",
      "Roast flipped once until shatteringly crisp.",
      "Season aggressively."
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
        "Boil.",
        "Smash.",
        "Roast hot until crisp."
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
      "Press dough into oiled rectangular pan.",
      "Add cheese to edges.",
      "Top sauce in stripes; add pepperoni.",
      "Bake until frico edge forms."
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
      "Simmer chicken in broth in a small covered pan.",
      "Drizzle in eggs; cover until softly set.",
      "Slide over rice; garnish with scallion."
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
        "Poach chicken in seasoned broth.",
        "Set eggs on top.",
        "Serve over rice."
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
      "Marinate chicken.",
      "Double-fry for shatter crust.",
      "Toss in gochujang-honey garlic glaze if desired."
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
        "Marinate.",
        "Fry twice.",
        "Glaze and serve."
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
      "Batter and fry cauliflower until crisp.",
      "Toss with glaze.",
      "Top with sesame and scallions."
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
        "Fry cauliflower.",
        "Glaze.",
        "Garnish."
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
      "Beer-batter or blacken fish.",
      "Fry or grill until cooked.",
      "Serve on tortillas with slaw and lime."
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
        "Cook fish.",
        "Warm tortillas.",
        "Assemble tacos."
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
      "Coat salmon in miso marinade; refrigerate overnight if possible.",
      "Roast or broil until edges caramelize and center is cooked.",
      "Garnish with lemon and sesame."
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
        "Marinate.",
        "Roast until glossy and caramelized."
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
      "Marinate chicken at least 1 hour.",
      "Roast high heat until edges darken.",
      "Slice thinly; stuff pitas with salads and sauces."
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
        "Marinate.",
        "Roast.",
        "Serve in flatbread."
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
      "Marinate beef 30 min up to overnight.",
      "Sear in screaming hot skillet in batches.",
      "Serve with rice and lettuce wraps."
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
        "Grill or sear."
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
      "Pressure- or slow-cook lentils with spices and tomato.",
      "Mash some dal for silkiness.",
      "Finish with cream.",
      "Bloom tarka in ghee; pour over."
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
      "Whisk dressing with herbs.",
      "Toss cold pasta with peas, fennel, and dressing.",
      "Chill briefly before serving."
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
        "Cook pasta.",
        "Blend dressing.",
        "Toss and chill."
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
      "Roast tomatoes, broccolini, lemon, and feta until tomatoes burst.",
      "Mash feta into vegetables.",
      "Serve over grains."
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
        "Roast everything on one sheet.",
        "Stir into creamy sauce."
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
      "Combine dry ingredients.",
      "Fold in ricotta mixture (and whipped whites if using).",
      "Griddle small pancakes until golden."
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
        "Make batter.",
        "Cook pancakes.",
        "Serve with syrup or fruit."
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
      "Cream butter with sugars; add eggs and vanilla.",
      "Mix flours, soda, salt; combine.",
      "Fold chocolate; chill dough 24–36 hours.",
      "Scoop and bake until edges brown."
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
      "Slow-cook onions and fennel until deeply sweet.",
      "Toast rice in the pan; deglaze with wine.",
      "Add stock in stages, stirring, until creamy.",
      "Finish with butter, parmesan, and parsley."
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
      "Mix meats with herbs, soaked breadcrumbs, and seasoning.",
      "Rest shaped meatballs.",
      "Broil or pan-fry until browned and cooked through.",
      "Serve with tzatziki and warm pita."
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
