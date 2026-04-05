import { useState, useRef, useEffect } from "react";

const T = {
  bg:"#FFFFFF", surface:"#FFFFFF", border:"#E8E8E4",
  text:"#0033A0", muted:"rgba(0,51,160,0.5)", faint:"rgba(0,51,160,0.28)",
  accent:"#0033A0", font:"'Poppins', sans-serif",
  fontTitle:"'Poppins', sans-serif",
};

// ─── Component Library ────────────────────────────────────────────────────────
const COMPONENT_LIBRARY = {
  "aromatic-base":{id:"aromatic-base",name:"Aromatic base",category:"foundation",cookTime:15,days:3,storage:"Airtight container, refrigerated.",description:"Sweat onion, garlic, and ginger in butter or oil over medium heat until deep golden, 12–15 min.",ingredients:[{item:"Onion",amount:"1 large",note:"finely diced"},{item:"Garlic",amount:"5 cloves",note:"minced"},{item:"Fresh ginger",amount:"1 tbsp",note:"grated"},{item:"Neutral oil",amount:"2 tbsp",note:"or butter"}]},
  "tomato-base":{id:"tomato-base",name:"Tomato base",category:"sauce",cookTime:30,days:4,storage:"Airtight container, refrigerated.",description:"Cook onion and garlic in olive oil until soft. Add crushed tomatoes, simmer 20–25 min until thick and deep red.",ingredients:[{item:"Crushed tomatoes",amount:"400g",note:"canned"},{item:"Onion",amount:"1 medium",note:"diced"},{item:"Garlic",amount:"4 cloves",note:"minced"},{item:"Olive oil",amount:"2 tbsp",note:""}]},
  "warm-spice-blend":{id:"warm-spice-blend",name:"Warm spice blend",category:"seasoning",cookTime:5,days:30,storage:"Airtight jar, room temperature.",description:"Dry-toast cumin, paprika, and garam masala in a pan 2–3 min until fragrant. Cool then combine.",ingredients:[{item:"Cumin",amount:"2 tsp",note:"ground"},{item:"Smoked paprika",amount:"1 tsp",note:""},{item:"Garam masala",amount:"1 tsp",note:""},{item:"Coriander",amount:"1 tsp",note:"ground"}]},
  "herb-garlic-oil":{id:"herb-garlic-oil",name:"Herb & garlic oil",category:"oil/fat",cookTime:10,days:5,storage:"Covered jar, refrigerated.",description:"Warm olive oil with smashed garlic and thyme over low heat 8–10 min until fragrant. Do not boil.",ingredients:[{item:"Olive oil",amount:"80ml",note:"good quality"},{item:"Garlic",amount:"4 cloves",note:"smashed"},{item:"Fresh thyme",amount:"4 sprigs",note:""},{item:"Fresh rosemary",amount:"2 sprigs",note:"optional"}]},
  "citrus-acid":{id:"citrus-acid",name:"Citrus acid base",category:"acid",cookTime:5,days:3,storage:"Airtight container, refrigerated.",description:"Whisk citrus juice with oil and a pinch of salt. Use as marinade base, dressing, or brightener.",ingredients:[{item:"Lemon or lime",amount:"3",note:"juiced"},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Garlic",amount:"2 cloves",note:"minced"}]},
  "miso-glaze":{id:"miso-glaze",name:"Miso glaze",category:"sauce",cookTime:5,days:7,storage:"Jar, refrigerated.",description:"Whisk miso, mirin, and soy together until smooth.",ingredients:[{item:"White miso",amount:"3 tbsp",note:""},{item:"Mirin",amount:"2 tbsp",note:""},{item:"Soy sauce",amount:"1 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""}]},
  "soy-ginger-base":{id:"soy-ginger-base",name:"Soy & ginger base",category:"sauce",cookTime:5,days:5,storage:"Jar, refrigerated.",description:"Combine soy, garlic, ginger, and sesame. Use as stir-fry sauce, marinade, or noodle dressing.",ingredients:[{item:"Soy sauce",amount:"4 tbsp",note:""},{item:"Fresh ginger",amount:"1 tbsp",note:"grated"},{item:"Garlic",amount:"3 cloves",note:"minced"},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Rice vinegar",amount:"1 tbsp",note:""}]},
  "chili-oil":{id:"chili-oil",name:"Chili oil",category:"oil/fat",cookTime:10,days:14,storage:"Jar, refrigerated.",description:"Heat oil with chili flakes and garlic until sizzling, 3–4 min. Cool completely.",ingredients:[{item:"Neutral oil",amount:"80ml",note:""},{item:"Chili flakes",amount:"2 tbsp",note:""},{item:"Garlic",amount:"3 cloves",note:"thinly sliced"},{item:"Sichuan peppercorn",amount:"1 tsp",note:"optional"}]},
  "soffritto":{id:"soffritto",name:"Soffritto",category:"foundation",cookTime:25,days:4,storage:"Airtight container, refrigerated.",description:"Cook onion, carrot, and celery in olive oil over medium-low heat until very soft and sweet, 20–25 min.",ingredients:[{item:"Onion",amount:"1 large",note:"finely diced"},{item:"Carrot",amount:"2 medium",note:"finely diced"},{item:"Celery",amount:"2 stalks",note:"finely diced"},{item:"Olive oil",amount:"3 tbsp",note:""}]},
  "tahini-sauce":{id:"tahini-sauce",name:"Tahini sauce",category:"sauce",cookTime:5,days:5,storage:"Airtight container, refrigerated.",description:"Whisk tahini with lemon and garlic. Add cold water to loosen to a pourable consistency.",ingredients:[{item:"Tahini",amount:"4 tbsp",note:""},{item:"Lemon",amount:"1",note:"juiced"},{item:"Garlic",amount:"1 clove",note:"minced"},{item:"Cold water",amount:"3–4 tbsp",note:"to loosen"}]},
  "coconut-curry-base":{id:"coconut-curry-base",name:"Coconut curry base",category:"sauce",cookTime:10,days:3,storage:"Airtight container, refrigerated.",description:"Fry curry paste in oil until fragrant, 2 min. Add coconut milk and simmer 5 min.",ingredients:[{item:"Coconut milk",amount:"400ml",note:"full fat"},{item:"Curry paste",amount:"3 tbsp",note:"red or green"},{item:"Garlic",amount:"3 cloves",note:"minced"},{item:"Fresh ginger",amount:"1 tbsp",note:"grated"},{item:"Neutral oil",amount:"1 tbsp",note:""}]},
  "caramelized-onions":{id:"caramelized-onions",name:"Caramelized onions",category:"foundation",cookTime:60,days:5,storage:"Airtight container, refrigerated.",description:"Cook sliced onions in butter over medium-low heat, stirring occasionally, 45–60 min until deep amber.",ingredients:[{item:"Onion",amount:"4 large",note:"thinly sliced"},{item:"Butter",amount:"3 tbsp",note:""},{item:"Fresh thyme",amount:"3 sprigs",note:""}]},
};

const SOURCE_NAMES = {
  "thewoksoflife.com":"The Woks of Life",
  "seriouseats.com":"Serious Eats",
  "smittenkitchen.com":"Smitten Kitchen",
  "cooking.nytimes.com":"NYT Cooking",
  "bonappetit.com":"Bon Appétit",
  "food52.com":"Food52",
};
const sourceName = (url) => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return SOURCE_NAMES[host] || host;
  } catch { return ""; }
};

// ─── Dish model
// groups: array of group objects, each one of:
//   {type:"component", componentId, label, extras:[], note}   — references canonical component
//   {type:"dish",      label,       ingredients:[]}            — standalone group
// original: {ingredients:[{item,amount,note}], steps:[]} — verbatim recipe
// ─────────────────────────────────────────────────────────────────────────────
const INITIAL_DISHES = [
  {
    id:"chicken-tikka-masala", title:"Chicken Tikka Masala", sourceTitle:"Chicken Tikka Masala",
    sourceUrl:"https://www.seriouseats.com", cuisine:"Indian", cookTime:25, servings:4,
    flavorProfile:["spicy","rich","savory"],
    groups:[
      {type:"component",componentId:"aromatic-base",label:"Masala base",note:"Use butter, not oil",extras:[]},
      {type:"component",componentId:"warm-spice-blend",label:"Tikka spice blend",note:"Add ½ tsp cayenne",extras:[]},
      {type:"component",componentId:"tomato-base",label:"Masala sauce",note:"Simmer extra 5 min to concentrate",extras:[]},
      {type:"dish",label:"Chicken & dairy",ingredients:[
        {item:"Chicken thighs",amount:"600g",note:"cubed"},
        {item:"Plain yogurt",amount:"½ cup",note:"for marinating"},
        {item:"Heavy cream",amount:"150ml",note:"stirred in at end"},
      ]},
    ],
    steps:["Marinate chicken in yogurt and half the warm spice blend 30 min.","Sear chicken in batches until charred. Set aside.","Warm your masala base over medium heat.","Add remaining spice blend. Cook stirring 2 min.","Add your masala sauce. Simmer 5 min.","Stir in cream. Return chicken. Simmer 10 min.","Season and serve over basmati rice."],
    original:{
      ingredients:[{item:"Chicken thighs",amount:"600g",note:"cubed"},{item:"Plain yogurt",amount:"½ cup",note:"for marinating"},{item:"Onion",amount:"1 large",note:"diced"},{item:"Garlic",amount:"4 cloves",note:"minced"},{item:"Fresh ginger",amount:"2 tbsp",note:"grated"},{item:"Garam masala",amount:"2 tsp",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Smoked paprika",amount:"1 tsp",note:""},{item:"Crushed tomatoes",amount:"400g",note:"canned"},{item:"Heavy cream",amount:"150ml",note:""},{item:"Butter",amount:"2 tbsp",note:""}],
      steps:["Marinate chicken in yogurt, garlic, ginger, and half the spices 30 min.","Sear chicken until charred. Set aside.","Melt butter, sauté onion 12 min until golden.","Add garlic, ginger, and remaining spices. Cook 2 min.","Add crushed tomatoes. Simmer 15 min.","Stir in cream. Return chicken. Simmer 10 min."],
    },
    notes:"",
  },
  {
    id:"shakshuka", title:"Shakshuka", sourceTitle:"Shakshuka with Feta",
    sourceUrl:"https://food52.com", cuisine:"Middle Eastern", cookTime:20, servings:4,
    flavorProfile:["spicy","savory","earthy"],
    groups:[
      {type:"component",componentId:"tomato-base",label:"Shakshuka sauce",note:"Add red pepper and chili flakes when heating",extras:[{item:"Red bell pepper",amount:"1",note:"diced"},{item:"Chili flakes",amount:"½ tsp",note:""}]},
      {type:"dish",label:"Eggs & finish",ingredients:[
        {item:"Eggs",amount:"6 large",note:""},
        {item:"Feta cheese",amount:"100g",note:"crumbled"},
        {item:"Fresh parsley",amount:"handful",note:""},
      ]},
    ],
    steps:["Heat your shakshuka sauce in a large skillet. Add red pepper and chili flakes. Simmer 5 min.","Make 6 wells. Crack an egg into each.","Cover and cook 5–7 min until whites set.","Top with feta and parsley."],
    original:{
      ingredients:[{item:"Olive oil",amount:"2 tbsp",note:""},{item:"Onion",amount:"1 medium",note:"diced"},{item:"Red bell pepper",amount:"1",note:"diced"},{item:"Garlic",amount:"4 cloves",note:"minced"},{item:"Cumin",amount:"1 tsp",note:""},{item:"Smoked paprika",amount:"1 tsp",note:""},{item:"Chili flakes",amount:"½ tsp",note:""},{item:"Crushed tomatoes",amount:"800g",note:""},{item:"Eggs",amount:"6 large",note:""},{item:"Feta",amount:"100g",note:"crumbled"}],
      steps:["Heat oil. Sauté onion and pepper until soft, 7 min.","Add garlic and spices. Cook 1 min.","Add tomatoes. Simmer 10 min.","Make wells, crack eggs. Cover 5–7 min.","Top with feta and parsley."],
    },
    notes:"",
  },
  {
    id:"chow-fun", title:"Beef Chow Fun", sourceTitle:"Chow Fun",
    sourceUrl:"https://thewoksoflife.com", cuisine:"Cantonese", cookTime:15, servings:4,
    flavorProfile:["umami","savory","smoky"],
    groups:[
      {type:"component",componentId:"soy-ginger-base",label:"Chow fun sauce",note:"Add oyster sauce and dark soy",extras:[{item:"Oyster sauce",amount:"1 tbsp",note:""},{item:"Dark soy sauce",amount:"1 tsp",note:""}]},
      {type:"dish",label:"Noodles & beef",ingredients:[
        {item:"Wide rice noodles",amount:"300g",note:"fresh or soaked"},
        {item:"Beef chuck",amount:"300g",note:"thinly sliced"},
        {item:"Bean sprouts",amount:"100g",note:""},
        {item:"Scallions",amount:"4",note:"2in pieces"},
        {item:"Baking soda",amount:"¼ tsp",note:"for velveting"},
      ]},
    ],
    steps:["Velvet beef: toss with baking soda and 1 tsp soy. Rest 15 min, rinse.","Sear beef over very high heat until colored. Remove.","Add noodles to wok. Char 1 min, toss.","Add your chow fun sauce. Toss to coat.","Return beef with bean sprouts and scallions. Toss 1 min."],
    original:{
      ingredients:[{item:"Wide rice noodles",amount:"300g",note:""},{item:"Beef chuck",amount:"300g",note:"thinly sliced"},{item:"Soy sauce",amount:"4 tbsp",note:""},{item:"Oyster sauce",amount:"1 tbsp",note:""},{item:"Dark soy sauce",amount:"1 tsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Fresh ginger",amount:"1 tbsp",note:"grated"},{item:"Garlic",amount:"3 cloves",note:"minced"},{item:"Bean sprouts",amount:"100g",note:""},{item:"Scallions",amount:"4",note:""}],
      steps:["Velvet beef in baking soda and soy 15 min, rinse.","Mix soy, oyster sauce, dark soy, sesame into sauce.","Sear beef over high heat. Remove.","Char noodles in wok. Add sauce.","Return beef with sprouts and scallions."],
    },
    notes:"",
  },
  {
    id:"miso-salmon", title:"Miso Salmon", sourceTitle:"Miso-Glazed Salmon",
    sourceUrl:"https://cooking.nytimes.com", cuisine:"Japanese", cookTime:15, servings:4,
    flavorProfile:["umami","savory","sweet"],
    groups:[
      {type:"component",componentId:"miso-glaze",label:"Miso glaze",note:"",extras:[]},
      {type:"dish",label:"Salmon",ingredients:[
        {item:"Salmon fillets",amount:"4 pieces",note:"skin-on"},
        {item:"Sesame seeds",amount:"1 tbsp",note:""},
        {item:"Scallions",amount:"2",note:"sliced"},
      ]},
    ],
    steps:["Coat salmon in your miso glaze. Rest 15 min.","Broil 8–10 min until caramelized.","Garnish with sesame seeds and scallions."],
    original:{
      ingredients:[{item:"Salmon fillets",amount:"4 pieces",note:"skin-on"},{item:"White miso",amount:"3 tbsp",note:""},{item:"Mirin",amount:"2 tbsp",note:""},{item:"Soy sauce",amount:"1 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Sesame seeds",amount:"1 tbsp",note:""},{item:"Scallions",amount:"2",note:"sliced"}],
      steps:["Whisk miso, mirin, soy, sesame oil into glaze.","Coat salmon. Marinate 15 min.","Broil 8–10 min until caramelized.","Garnish and serve."],
    },
    notes:"",
  },
  {
    id:"dan-dan-noodles", title:"Dan Dan Noodles", sourceTitle:"Dan Dan Noodles",
    sourceUrl:"https://www.seriouseats.com", cuisine:"Sichuan", cookTime:20, servings:4,
    flavorProfile:["spicy","umami","rich"],
    groups:[
      {type:"component",componentId:"soy-ginger-base",label:"Dan dan sauce",note:"Whisk in tahini until smooth",extras:[{item:"Tahini",amount:"3 tbsp",note:"whisked in"}]},
      {type:"component",componentId:"chili-oil",label:"Finishing chili oil",note:"Use generously",extras:[]},
      {type:"dish",label:"Pork & noodles",ingredients:[
        {item:"Ground pork",amount:"300g",note:""},
        {item:"Chinese noodles",amount:"350g",note:""},
        {item:"Bok choy",amount:"2",note:"halved"},
        {item:"Scallions",amount:"4",note:"sliced"},
      ]},
    ],
    steps:["Whisk tahini into your soy & ginger base. This is the dan dan sauce.","Cook pork in a dry skillet until crispy. Splash of soy.","Boil noodles. Add bok choy last 2 min. Drain.","Divide dan dan sauce between bowls. Add noodles.","Top with pork, scallions, and your chili oil."],
    original:{
      ingredients:[{item:"Chinese noodles",amount:"350g",note:""},{item:"Ground pork",amount:"300g",note:""},{item:"Tahini",amount:"3 tbsp",note:""},{item:"Soy sauce",amount:"4 tbsp",note:""},{item:"Chili oil",amount:"2 tbsp",note:""},{item:"Rice vinegar",amount:"1 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Fresh ginger",amount:"1 tbsp",note:""},{item:"Garlic",amount:"3 cloves",note:""},{item:"Bok choy",amount:"2",note:""},{item:"Scallions",amount:"4",note:""}],
      steps:["Whisk tahini, soy, chili oil, vinegar, sesame into sauce.","Cook pork until crispy. Add garlic and ginger.","Boil noodles with bok choy.","Divide sauce in bowls, add noodles.","Top with pork, scallions, chili oil."],
    },
    notes:"",
  },
  {
    id:"mushroom-risotto", title:"Mushroom Risotto", sourceTitle:"Mushroom Risotto",
    sourceUrl:"https://www.bonappetit.com", cuisine:"Italian", cookTime:30, servings:4,
    flavorProfile:["umami","rich","earthy"],
    groups:[
      {type:"component",componentId:"herb-garlic-oil",label:"Mushroom sauté",note:"Sauté mushrooms in this over high heat",extras:[{item:"Mixed mushrooms",amount:"400g",note:"sliced"}]},
      {type:"component",componentId:"soffritto",label:"Risotto base",note:"Toast arborio rice directly in the soffritto",extras:[]},
      {type:"dish",label:"Risotto",ingredients:[
        {item:"Arborio rice",amount:"320g",note:""},
        {item:"Dry white wine",amount:"150ml",note:""},
        {item:"Vegetable stock",amount:"1.2L",note:"warm"},
        {item:"Parmesan",amount:"80g",note:"grated"},
        {item:"Cold butter",amount:"2 tbsp",note:""},
      ]},
    ],
    steps:["Sauté mushrooms in your herb & garlic oil over high heat until golden. Set aside.","Heat your soffritto. Add arborio rice, toast 2 min.","Add wine and stir until absorbed.","Add warm stock one ladle at a time, stirring constantly, 20 min.","Fold in mushrooms, cold butter, and parmesan. Rest 2 min."],
    original:{
      ingredients:[{item:"Mixed mushrooms",amount:"400g",note:"sliced"},{item:"Shallots",amount:"2",note:"diced"},{item:"Garlic",amount:"3 cloves",note:""},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Fresh thyme",amount:"3 sprigs",note:""},{item:"Arborio rice",amount:"320g",note:""},{item:"White wine",amount:"150ml",note:""},{item:"Vegetable stock",amount:"1.2L",note:"warm"},{item:"Parmesan",amount:"80g",note:""},{item:"Butter",amount:"4 tbsp",note:""}],
      steps:["Sauté mushrooms in butter and thyme. Set aside.","Cook shallots and garlic in oil until soft.","Add rice, toast 2 min. Add wine.","Add stock ladle by ladle, stirring 20 min.","Fold in mushrooms, butter, parmesan."],
    },
    notes:"",
  },
  {
    id:"herb-chicken", title:"Herb Roast Chicken", sourceTitle:"Lemon Herb Chicken",
    sourceUrl:"https://smittenkitchen.com", cuisine:"Mediterranean", cookTime:35, servings:4,
    flavorProfile:["herbaceous","savory","bright"],
    groups:[
      {type:"component",componentId:"herb-garlic-oil",label:"Herb marinade base",note:"Combine with citrus acid",extras:[]},
      {type:"component",componentId:"citrus-acid",label:"Citrus marinade",note:"Add 1 tsp dijon mustard",extras:[{item:"Dijon mustard",amount:"1 tsp",note:""}]},
      {type:"dish",label:"Chicken",ingredients:[
        {item:"Bone-in chicken thighs",amount:"8 pieces",note:"skin-on"},
      ]},
    ],
    steps:["Combine your herb & garlic oil and citrus acid base as marinade. Add dijon.","Coat chicken. Rest 30 min.","Sear skin-side down 5 min until golden.","Roast at 220°C for 25–30 min.","Rest 5 min. Spoon pan juices over."],
    original:{
      ingredients:[{item:"Bone-in chicken thighs",amount:"8 pieces",note:"skin-on"},{item:"Lemon",amount:"2",note:"zested and juiced"},{item:"Garlic",amount:"6 cloves",note:"smashed"},{item:"Fresh thyme",amount:"5 sprigs",note:""},{item:"Fresh rosemary",amount:"3 sprigs",note:""},{item:"Dijon mustard",amount:"1 tbsp",note:""},{item:"Smoked paprika",amount:"1 tsp",note:""},{item:"Olive oil",amount:"4 tbsp",note:""}],
      steps:["Whisk lemon, garlic, herbs, mustard, paprika, oil into marinade.","Coat chicken. Marinate 30 min.","Sear skin-side down 5 min.","Roast 220°C, 25–30 min.","Rest 5 min."],
    },
    notes:"",
  },
  {
    id:"grain-bowl", title:"Grain Bowl", sourceTitle:"Grain Bowl with Tahini",
    sourceUrl:"", cuisine:"Middle Eastern", cookTime:10, servings:4,
    flavorProfile:["nutty","bright","fresh"],
    groups:[
      {type:"component",componentId:"herb-garlic-oil",label:"Roasting oil",note:"Toss vegetables before roasting",extras:[]},
      {type:"component",componentId:"tahini-sauce",label:"Tahini dressing",note:"Thin with extra lemon to dressing consistency",extras:[]},
      {type:"component",componentId:"citrus-acid",label:"Finishing acid",note:"Drizzle over assembled bowl",extras:[]},
      {type:"dish",label:"Bowl",ingredients:[
        {item:"Farro or quinoa",amount:"300g",note:"cooked"},
        {item:"Roasted vegetables",amount:"2 cups",note:"any combination"},
        {item:"Chickpeas",amount:"400g",note:"roasted or canned"},
        {item:"Fresh herbs",amount:"handful",note:"parsley, mint"},
      ]},
    ],
    steps:["Toss vegetables in your herb & garlic oil. Roast 220°C, 25 min.","Thin tahini sauce with extra lemon.","Build bowls: grain, veg, chickpeas.","Drizzle with tahini and citrus. Finish with fresh herbs."],
    original:{
      ingredients:[{item:"Farro",amount:"300g",note:""},{item:"Roasted vegetables",amount:"2 cups",note:""},{item:"Chickpeas",amount:"400g",note:""},{item:"Tahini",amount:"4 tbsp",note:""},{item:"Lemon",amount:"2",note:"juiced"},{item:"Garlic",amount:"1 clove",note:""},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Fresh herbs",amount:"handful",note:""}],
      steps:["Cook grain. Roast vegetables with olive oil.","Make tahini dressing: whisk tahini, lemon, garlic, water.","Build bowls. Drizzle with tahini and olive oil."],
    },
    notes:"",
  },
,{id:"cacio-e-pepe",title:"Cacio e Pepe",sourceTitle:"Cacio e Pepe",sourceUrl:"https://www.seriouseats.com",cuisine:"Italian",cookTime:20,servings:4,flavorProfile:["savory","rich","peppery"],groups:[{type:"dish",label:"Pasta",ingredients:[{item:"Spaghetti",amount:"400g",note:""},{item:"Pecorino romano",amount:"100g",note:"finely grated"},{item:"Parmesan",amount:"50g",note:"finely grated"},{item:"Black pepper",amount:"2 tsp",note:"toasted and coarsely ground"},{item:"Pasta water",amount:"1 cup",note:"reserved, starchy"}]}],steps:["Toast black pepper in a dry pan 2 min.","Cook pasta al dente. Reserve 1 cup starchy water.","Off heat, combine cheeses and pepper with water to make a paste.","Toss pasta vigorously, adding water until glossy and creamy.","Serve immediately."],original:{ingredients:[{item:"Spaghetti",amount:"400g",note:""},{item:"Pecorino romano",amount:"100g",note:""},{item:"Parmesan",amount:"50g",note:""},{item:"Black pepper",amount:"2 tsp",note:""}],steps:["Cook pasta. Reserve water.","Off heat make cheese paste.","Toss pasta with paste and water."]},notes:""}
  ,{id:"french-onion-soup",title:"French Onion Soup",sourceTitle:"French Onion Soup",sourceUrl:"https://www.seriouseats.com",cuisine:"French",cookTime:30,servings:4,flavorProfile:["rich","savory","sweet","umami"],groups:[{type:"component",componentId:"caramelized-onions",label:"Onion base",note:"The foundation — don't rush it",extras:[]},{type:"dish",label:"Soup & gratin",ingredients:[{item:"Beef stock",amount:"1.5L",note:""},{item:"Dry white wine",amount:"100ml",note:""},{item:"Fresh thyme",amount:"4 sprigs",note:""},{item:"Baguette",amount:"8 slices",note:"toasted"},{item:"Gruyère",amount:"200g",note:"grated"}]}],steps:["Warm caramelized onions. Add wine, reduce. Add stock and thyme. Simmer 20 min.","Ladle into oven-safe bowls. Top with baguette and gruyère.","Broil 3–5 min until bubbling and brown."],original:{ingredients:[{item:"Yellow onions",amount:"4 large",note:"thinly sliced"},{item:"Butter",amount:"3 tbsp",note:""},{item:"Beef stock",amount:"1.5L",note:""},{item:"White wine",amount:"100ml",note:""},{item:"Baguette",amount:"8 slices",note:""},{item:"Gruyère",amount:"200g",note:""}],steps:["Caramelize onions in butter 45–60 min.","Add wine, stock. Simmer 20 min.","Ladle into bowls, top with bread and cheese. Broil."]},notes:""}
  ,{id:"roast-chicken",title:"Perfect Roast Chicken",sourceTitle:"Roast Chicken",sourceUrl:"https://smittenkitchen.com",cuisine:"French",cookTime:65,servings:4,flavorProfile:["savory","herbaceous","rich"],groups:[{type:"component",componentId:"herb-garlic-oil",label:"Herb butter",note:"Mix with softened butter, rub under and over skin",extras:[{item:"Butter",amount:"2 tbsp",note:"softened, mixed in"}]},{type:"dish",label:"Chicken & aromatics",ingredients:[{item:"Whole chicken",amount:"1.5kg",note:"patted very dry"},{item:"Lemon",amount:"1",note:"halved, in cavity"},{item:"Onion",amount:"1",note:"quartered, for pan"},{item:"Salt",amount:"generously",note:""}]}],steps:["Mix herb & garlic oil with butter. Rub under and over skin. Rest 30 min.","Set on onion in roasting pan. Stuff with lemon.","Roast 230°C 50–60 min until juices run clear.","Rest 15 min before carving."],original:{ingredients:[{item:"Whole chicken",amount:"1.5kg",note:""},{item:"Butter",amount:"3 tbsp",note:"softened"},{item:"Garlic",amount:"4 cloves",note:""},{item:"Fresh thyme",amount:"4 sprigs",note:""},{item:"Lemon",amount:"1",note:""}],steps:["Mix butter with garlic and thyme. Rub all over chicken.","Rest 30 min. Roast 230°C 50–60 min.","Rest 15 min, carve."]},notes:""}
  ,{id:"mapo-tofu",title:"Mapo Tofu",sourceTitle:"Mapo Tofu",sourceUrl:"https://thewoksoflife.com",cuisine:"Sichuan",cookTime:20,servings:4,flavorProfile:["spicy","umami","numbing"],groups:[{type:"component",componentId:"chili-oil",label:"Sichuan chili base",note:"Add doubanjiang for depth",extras:[{item:"Doubanjiang",amount:"2 tbsp",note:"fermented bean paste"},{item:"Sichuan peppercorn",amount:"1 tsp",note:"ground"}]},{type:"component",componentId:"soy-ginger-base",label:"Sauce",note:"Thin with chicken stock",extras:[{item:"Chicken stock",amount:"200ml",note:""},{item:"Cornstarch",amount:"1 tbsp",note:"dissolved in water"}]},{type:"dish",label:"Tofu & pork",ingredients:[{item:"Silken tofu",amount:"600g",note:"2cm cubes"},{item:"Ground pork",amount:"150g",note:""},{item:"Scallions",amount:"4",note:"sliced"}]}],steps:["Heat chili base with doubanjiang and peppercorn. Fry 2 min.","Add pork, cook through.","Add sauce base with stock. Simmer 2 min.","Add tofu gently. Simmer 3 min. Thicken with cornstarch slurry.","Top with scallions."],original:{ingredients:[{item:"Silken tofu",amount:"600g",note:""},{item:"Ground pork",amount:"150g",note:""},{item:"Doubanjiang",amount:"2 tbsp",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Ginger",amount:"1 tbsp",note:""},{item:"Soy sauce",amount:"2 tbsp",note:""},{item:"Chicken stock",amount:"200ml",note:""},{item:"Sichuan peppercorn",amount:"1 tsp",note:""},{item:"Chili oil",amount:"2 tbsp",note:""}],steps:["Fry doubanjiang and peppercorn. Add pork.","Add garlic, ginger, soy, stock. Add tofu. Simmer.","Thicken. Top with scallions."]},notes:""}
  ,{id:"pasta-pomodoro",title:"Pasta al Pomodoro",sourceTitle:"Pasta Pomodoro",sourceUrl:"https://www.seriouseats.com",cuisine:"Italian",cookTime:20,servings:4,flavorProfile:["bright","savory","fresh"],groups:[{type:"component",componentId:"tomato-base",label:"Pomodoro sauce",note:"Finish with torn basil",extras:[{item:"Fresh basil",amount:"handful",note:"torn"}]},{type:"dish",label:"Pasta",ingredients:[{item:"Rigatoni or spaghetti",amount:"400g",note:""},{item:"Parmesan",amount:"60g",note:"grated"},{item:"Olive oil",amount:"2 tbsp",note:"to finish"}]}],steps:["Warm your pomodoro sauce. Tear in basil.","Cook pasta 2 min shy of al dente.","Transfer pasta into sauce with pasta water. Toss over heat until glossy.","Finish with parmesan and olive oil."],original:{ingredients:[{item:"Spaghetti",amount:"400g",note:""},{item:"San Marzano tomatoes",amount:"800g",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Olive oil",amount:"4 tbsp",note:""},{item:"Fresh basil",amount:"handful",note:""},{item:"Parmesan",amount:"60g",note:""}],steps:["Sauté garlic. Add tomatoes, simmer 20 min.","Cook pasta. Toss in sauce with pasta water. Finish with parmesan."]},notes:""}
  ,{id:"chicken-shawarma",title:"Chicken Shawarma",sourceTitle:"Chicken Shawarma",sourceUrl:"https://cooking.nytimes.com",cuisine:"Middle Eastern",cookTime:25,servings:4,flavorProfile:["warm","savory","herbaceous"],groups:[{type:"component",componentId:"warm-spice-blend",label:"Shawarma spice",note:"Add turmeric and cinnamon",extras:[{item:"Turmeric",amount:"½ tsp",note:""},{item:"Cinnamon",amount:"¼ tsp",note:""}]},{type:"component",componentId:"citrus-acid",label:"Marinade",note:"Use lemon, mix with shawarma spice",extras:[]},{type:"component",componentId:"tahini-sauce",label:"Tahini sauce",note:"Serve alongside",extras:[]},{type:"dish",label:"Chicken & wrap",ingredients:[{item:"Chicken thighs",amount:"800g",note:"boneless"},{item:"Flatbread or pita",amount:"4",note:""},{item:"Tomato",amount:"2",note:"sliced"},{item:"Pickled turnip",amount:"handful",note:"optional"}]}],steps:["Combine shawarma spice with citrus marinade. Coat chicken. Marinate 1 hr.","Roast 220°C 20–25 min. Rest 5 min. Slice thinly.","Serve in flatbread with tomato, pickled turnip, and tahini sauce."],original:{ingredients:[{item:"Chicken thighs",amount:"800g",note:""},{item:"Cumin",amount:"2 tsp",note:""},{item:"Paprika",amount:"1 tsp",note:""},{item:"Turmeric",amount:"½ tsp",note:""},{item:"Lemon",amount:"2",note:"juiced"},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Garlic",amount:"4 cloves",note:""}],steps:["Mix spices, lemon, oil. Marinate chicken 1 hr.","Roast 220°C 25 min. Slice. Serve in flatbread."]},notes:""}
  ,{id:"fried-rice",title:"Egg Fried Rice",sourceTitle:"The Best Fried Rice",sourceUrl:"https://thewoksoflife.com",cuisine:"Chinese",cookTime:15,servings:4,flavorProfile:["savory","umami","smoky"],groups:[{type:"component",componentId:"soy-ginger-base",label:"Fried rice sauce",note:"Add in two stages for layered flavor",extras:[]},{type:"dish",label:"Rice & mix-ins",ingredients:[{item:"Day-old cooked rice",amount:"4 cups",note:"cold, broken up"},{item:"Eggs",amount:"3",note:"beaten"},{item:"Scallions",amount:"4",note:"sliced"},{item:"Frozen peas",amount:"100g",note:""},{item:"Neutral oil",amount:"3 tbsp",note:""}]}],steps:["Heat wok until smoking. Add oil.","Add eggs, scramble briefly. Push aside.","Add cold rice, spread flat. Char 2 min without stirring.","Add half the sauce. Toss. Repeat with rest.","Add scallions and peas. Toss 1 min. Serve immediately."],original:{ingredients:[{item:"Day-old rice",amount:"4 cups",note:""},{item:"Eggs",amount:"3",note:""},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Scallions",amount:"4",note:""},{item:"Neutral oil",amount:"3 tbsp",note:""}],steps:["Scramble eggs in hot wok. Remove.","Char rice 2 min.","Add soy and sesame. Toss.","Return eggs, add scallions."]},notes:""}
  ,{id:"baked-ziti",title:"Baked Ziti",sourceTitle:"Baked Ziti",sourceUrl:"https://smittenkitchen.com",cuisine:"Italian-American",cookTime:45,servings:6,flavorProfile:["rich","savory","comforting"],groups:[{type:"component",componentId:"tomato-base",label:"Tomato-sausage sauce",note:"Brown sausage first and add to the sauce",extras:[{item:"Italian sausage",amount:"300g",note:"casings removed"}]},{type:"dish",label:"Pasta & cheese",ingredients:[{item:"Ziti or rigatoni",amount:"450g",note:"cooked al dente"},{item:"Ricotta",amount:"400g",note:""},{item:"Mozzarella",amount:"300g",note:"torn"},{item:"Parmesan",amount:"60g",note:"grated"},{item:"Egg",amount:"1",note:"mixed into ricotta"}]}],steps:["Brown sausage. Add to your tomato sauce. Simmer 10 min.","Mix ricotta with egg and half the parmesan.","Toss cooked pasta with most of the sauce.","Layer pasta, ricotta, mozzarella in a baking dish. Top with remaining sauce and parmesan.","Bake covered 190°C 20 min, uncovered 15 min until bubbling."],original:{ingredients:[{item:"Ziti",amount:"450g",note:""},{item:"Italian sausage",amount:"300g",note:""},{item:"Crushed tomatoes",amount:"800g",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Ricotta",amount:"400g",note:""},{item:"Mozzarella",amount:"300g",note:""},{item:"Parmesan",amount:"60g",note:""},{item:"Egg",amount:"1",note:""}],steps:["Make tomato-sausage sauce.","Mix ricotta with egg.","Layer pasta, sauce, cheeses. Bake 190°C 35 min."]},notes:""}
  ,{id:"beef-bulgogi",title:"Beef Bulgogi",sourceTitle:"Korean Beef Bulgogi",sourceUrl:"https://cooking.nytimes.com",cuisine:"Korean",cookTime:15,servings:4,flavorProfile:["savory","sweet","umami"],groups:[{type:"component",componentId:"soy-ginger-base",label:"Bulgogi marinade",note:"Add pear for tenderizing",extras:[{item:"Asian pear",amount:"½",note:"grated"},{item:"Brown sugar",amount:"1 tbsp",note:""},{item:"Toasted sesame seeds",amount:"1 tbsp",note:""}]},{type:"dish",label:"Beef",ingredients:[{item:"Ribeye or sirloin",amount:"600g",note:"very thinly sliced"},{item:"Scallions",amount:"4",note:""},{item:"Lettuce leaves",amount:"handful",note:"for wrapping"}]}],steps:["Combine bulgogi marinade with pear and sugar. Marinate beef 30 min.","Cook in batches over very high heat.","Serve with rice and lettuce for wrapping."],original:{ingredients:[{item:"Ribeye",amount:"600g",note:"thinly sliced"},{item:"Soy sauce",amount:"4 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Ginger",amount:"1 tbsp",note:""},{item:"Asian pear",amount:"½",note:"grated"},{item:"Brown sugar",amount:"1 tbsp",note:""}],steps:["Marinate beef in soy, sesame, garlic, ginger, pear, sugar 30 min.","Cook in batches over high heat."]},notes:""}
  ,{id:"green-goddess-salad",title:"Green Goddess Salad",sourceTitle:"Viral Green Goddess Salad",sourceUrl:"https://cooking.nytimes.com",cuisine:"American",cookTime:10,servings:4,flavorProfile:["bright","herbaceous","fresh"],groups:[{type:"component",componentId:"tahini-sauce",label:"Green goddess dressing",note:"Blend with fresh herbs and vinegar",extras:[{item:"Fresh basil",amount:"1 cup",note:""},{item:"Fresh chives",amount:"½ cup",note:""},{item:"White wine vinegar",amount:"2 tbsp",note:""}]},{type:"dish",label:"Salad",ingredients:[{item:"Napa cabbage",amount:"½ head",note:"shredded"},{item:"English cucumber",amount:"1",note:"diced"},{item:"Scallions",amount:"4",note:"sliced"},{item:"Hemp seeds",amount:"2 tbsp",note:""}]}],steps:["Blend tahini sauce with basil, chives, and vinegar until smooth.","Combine cabbage, cucumber, scallions.","Pour dressing over and toss. Top with seeds."],original:{ingredients:[{item:"Napa cabbage",amount:"½ head",note:""},{item:"Cucumber",amount:"1",note:""},{item:"Scallions",amount:"4",note:""},{item:"Basil",amount:"1 cup",note:""},{item:"Chives",amount:"½ cup",note:""},{item:"Tahini",amount:"4 tbsp",note:""},{item:"Lemon",amount:"1",note:""},{item:"White wine vinegar",amount:"2 tbsp",note:""}],steps:["Blend tahini, herbs, lemon, vinegar into dressing.","Toss with cabbage, cucumber, scallions."]},notes:""}
  ,{id:"bibimbap",title:"Bibimbap",sourceTitle:"Bibimbap",sourceUrl:"https://thewoksoflife.com",cuisine:"Korean",cookTime:30,servings:4,flavorProfile:["savory","spicy","umami"],groups:[{type:"component",componentId:"soy-ginger-base",label:"Bibimbap sauce",note:"Add gochujang",extras:[{item:"Gochujang",amount:"2 tbsp",note:""},{item:"Honey",amount:"1 tsp",note:""}]},{type:"component",componentId:"chili-oil",label:"Finishing chili oil",note:"Drizzle over bowls",extras:[]},{type:"dish",label:"Bowl",ingredients:[{item:"Short grain rice",amount:"2 cups",note:"cooked"},{item:"Ground beef",amount:"200g",note:"seasoned"},{item:"Spinach",amount:"200g",note:"blanched"},{item:"Carrots",amount:"2",note:"julienned and sautéed"},{item:"Bean sprouts",amount:"150g",note:"blanched"},{item:"Eggs",amount:"4",note:"fried sunny-side up"},{item:"Sesame seeds",amount:"1 tbsp",note:""}]}],steps:["Season and cook beef with a splash of soy.","Prepare each vegetable separately.","Arrange rice in bowls. Fan vegetables around the edge.","Top with beef, fried egg, bibimbap sauce and chili oil."],original:{ingredients:[{item:"Short grain rice",amount:"2 cups",note:""},{item:"Ground beef",amount:"200g",note:""},{item:"Spinach",amount:"200g",note:""},{item:"Carrots",amount:"2",note:""},{item:"Bean sprouts",amount:"150g",note:""},{item:"Eggs",amount:"4",note:""},{item:"Gochujang",amount:"2 tbsp",note:""},{item:"Soy sauce",amount:"2 tbsp",note:""}],steps:["Prep each component. Cook beef.","Make gochujang sauce.","Assemble bowls. Add sauce."]},notes:""}
  ,{id:"carbonara",title:"Spaghetti Carbonara",sourceTitle:"Spaghetti Carbonara",sourceUrl:"https://www.seriouseats.com",cuisine:"Italian",cookTime:20,servings:4,flavorProfile:["rich","savory","umami"],groups:[{type:"dish",label:"Egg & cheese sauce",ingredients:[{item:"Egg yolks",amount:"4",note:"room temperature"},{item:"Whole egg",amount:"1",note:""},{item:"Pecorino romano",amount:"80g",note:"finely grated"},{item:"Parmesan",amount:"40g",note:"finely grated"},{item:"Black pepper",amount:"2 tsp",note:"coarsely ground"}]},{type:"dish",label:"Pasta & guanciale",ingredients:[{item:"Spaghetti",amount:"400g",note:""},{item:"Guanciale or pancetta",amount:"200g",note:"diced"}]}],steps:["Render guanciale in a cold pan until crispy. Off heat.","Whisk egg yolks, egg, cheeses, and pepper.","Cook pasta al dente. Reserve 1 cup pasta water.","Off heat, toss pasta with guanciale. Add egg sauce, tossing vigorously with water until glossy.","Serve immediately with extra pepper."],original:{ingredients:[{item:"Spaghetti",amount:"400g",note:""},{item:"Guanciale",amount:"200g",note:""},{item:"Egg yolks",amount:"4",note:""},{item:"Whole egg",amount:"1",note:""},{item:"Pecorino",amount:"80g",note:""},{item:"Parmesan",amount:"40g",note:""},{item:"Black pepper",amount:"2 tsp",note:""}],steps:["Render guanciale. Whisk eggs with cheese and pepper.","Cook pasta. Reserve water.","Off heat toss everything together with water until creamy."]},notes:""}
  ,{id:"dal-makhani",title:"Dal Makhani",sourceTitle:"Dal Makhani",sourceUrl:"https://cooking.nytimes.com",cuisine:"Indian",cookTime:40,servings:6,flavorProfile:["rich","savory","earthy"],groups:[{type:"component",componentId:"aromatic-base",label:"Dal base",note:"Use butter, cook until very dark golden",extras:[]},{type:"component",componentId:"tomato-base",label:"Tomato base",note:"Simmer with cooked lentils",extras:[]},{type:"component",componentId:"warm-spice-blend",label:"Spice blend",note:"Add ½ tsp cayenne",extras:[{item:"Cayenne",amount:"½ tsp",note:""}]},{type:"dish",label:"Lentils & cream",ingredients:[{item:"Black lentils (urad dal)",amount:"250g",note:"soaked overnight"},{item:"Kidney beans",amount:"100g",note:"cooked or canned"},{item:"Heavy cream",amount:"100ml",note:""},{item:"Butter",amount:"2 tbsp",note:"to finish"}]}],steps:["Cook soaked lentils until soft, 45–60 min.","Warm your dal base. Add spice blend, cook 2 min.","Add tomato base and lentils. Simmer 20 min, stirring often.","Add kidney beans and cream. Simmer 10 min until silky.","Finish with butter. Serve with naan."],original:{ingredients:[{item:"Black lentils",amount:"250g",note:"soaked"},{item:"Kidney beans",amount:"100g",note:""},{item:"Onion",amount:"1",note:""},{item:"Garlic",amount:"5 cloves",note:""},{item:"Ginger",amount:"1 tbsp",note:""},{item:"Crushed tomatoes",amount:"400g",note:""},{item:"Garam masala",amount:"1 tsp",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Heavy cream",amount:"100ml",note:""},{item:"Butter",amount:"4 tbsp",note:""}],steps:["Cook lentils. Make tomato-onion masala.","Combine. Simmer 20 min. Add cream and butter."]},notes:""}
  ,{id:"pho-bo",title:"Beef Pho",sourceTitle:"Pho Bo",sourceUrl:"https://thewoksoflife.com",cuisine:"Vietnamese",cookTime:30,servings:4,flavorProfile:["savory","aromatic","clean"],groups:[{type:"component",componentId:"aromatic-base",label:"Pho aromatics",note:"Char onion and ginger over flame first",extras:[{item:"Star anise",amount:"3",note:""},{item:"Cinnamon stick",amount:"1",note:""},{item:"Cloves",amount:"4",note:""}]},{type:"dish",label:"Broth & noodles",ingredients:[{item:"Beef stock",amount:"2L",note:""},{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Rice noodles",amount:"400g",note:"soaked"},{item:"Beef sirloin",amount:"300g",note:"very thinly sliced raw"},{item:"Bean sprouts",amount:"150g",note:""},{item:"Fresh basil",amount:"handful",note:""},{item:"Lime",amount:"2",note:"wedges"}]}],steps:["Char onion and ginger over open flame. Add to pot with your pho aromatics and spices.","Add stock. Simmer 20 min. Season with fish sauce. Strain.","Place soaked noodles in bowls. Lay raw beef slices over.","Pour boiling broth over — it cooks the beef. Top with sprouts, basil, lime."],original:{ingredients:[{item:"Beef stock",amount:"2L",note:""},{item:"Onion",amount:"2",note:"charred"},{item:"Ginger",amount:"3in",note:"charred"},{item:"Star anise",amount:"3",note:""},{item:"Cinnamon",amount:"1 stick",note:""},{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Rice noodles",amount:"400g",note:""},{item:"Beef sirloin",amount:"300g",note:"thinly sliced raw"}],steps:["Char onion and ginger. Simmer with stock and spices 20 min. Strain.","Season with fish sauce. Pour boiling over noodles and raw beef."]},notes:""}
  ,{id:"chicken-larb",title:"Chicken Larb",sourceTitle:"Larb Gai",sourceUrl:"https://www.seriouseats.com",cuisine:"Thai",cookTime:20,servings:4,flavorProfile:["bright","spicy","herbaceous"],groups:[{type:"component",componentId:"citrus-acid",label:"Larb dressing",note:"Use lime only. Add fish sauce and chili",extras:[{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Chili flakes",amount:"1 tsp",note:""},{item:"Palm sugar",amount:"1 tsp",note:""}]},{type:"dish",label:"Chicken & herbs",ingredients:[{item:"Ground chicken",amount:"500g",note:""},{item:"Shallots",amount:"3",note:"thinly sliced"},{item:"Fresh mint",amount:"large handful",note:""},{item:"Fresh cilantro",amount:"handful",note:""},{item:"Toasted rice powder",amount:"2 tbsp",note:""},{item:"Lettuce",amount:"1 head",note:"leaves separated"}]}],steps:["Cook ground chicken in a dry pan, breaking up finely. Don't brown.","Off heat, add your larb dressing. Toss.","Add shallots, herbs, and toasted rice powder.","Serve immediately in lettuce cups."],original:{ingredients:[{item:"Ground chicken",amount:"500g",note:""},{item:"Lime juice",amount:"3 limes",note:""},{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Shallots",amount:"3",note:""},{item:"Mint",amount:"handful",note:""},{item:"Cilantro",amount:"handful",note:""},{item:"Toasted rice powder",amount:"2 tbsp",note:""},{item:"Chili flakes",amount:"1 tsp",note:""}],steps:["Cook chicken finely.","Dress with lime, fish sauce, chili.","Add shallots, herbs, rice powder. Serve in lettuce cups."]},notes:""}
  ,{id:"lamb-kofta",title:"Lamb Kofta",sourceTitle:"Grilled Lamb Kofta",sourceUrl:"https://cooking.nytimes.com",cuisine:"Middle Eastern",cookTime:20,servings:4,flavorProfile:["savory","warm","herbaceous"],groups:[{type:"component",componentId:"warm-spice-blend",label:"Kofta spice",note:"Add allspice and cinnamon",extras:[{item:"Allspice",amount:"½ tsp",note:""},{item:"Cinnamon",amount:"¼ tsp",note:""}]},{type:"component",componentId:"tahini-sauce",label:"Tahini sauce",note:"Serve alongside",extras:[]},{type:"dish",label:"Kofta",ingredients:[{item:"Ground lamb",amount:"600g",note:""},{item:"Onion",amount:"1 small",note:"grated"},{item:"Fresh parsley",amount:"½ cup",note:"finely chopped"},{item:"Flatbread",amount:"4",note:""},{item:"Tomato",amount:"2",note:"sliced"}]}],steps:["Combine lamb, onion, parsley, and kofta spice. Mix well.","Shape onto skewers. Rest 20 min in fridge.","Grill or broil 8–10 min turning once.","Serve with flatbread, tomato, and tahini sauce."],original:{ingredients:[{item:"Ground lamb",amount:"600g",note:""},{item:"Onion",amount:"1",note:"grated"},{item:"Parsley",amount:"½ cup",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Paprika",amount:"1 tsp",note:""},{item:"Allspice",amount:"½ tsp",note:""}],steps:["Mix all. Shape onto skewers. Chill 20 min.","Grill 8–10 min. Serve with tahini."]},notes:""}
  ,{id:"vegetable-soup",title:"Simple Vegetable Soup",sourceTitle:"The Best Vegetable Soup",sourceUrl:"https://smittenkitchen.com",cuisine:"Any",cookTime:30,servings:6,flavorProfile:["savory","clean","herbaceous"],groups:[{type:"component",componentId:"soffritto",label:"Soup base",note:"Cook extra long until very sweet",extras:[]},{type:"component",componentId:"tomato-base",label:"Tomato broth",note:"Thin with stock",extras:[{item:"Vegetable stock",amount:"1.5L",note:""}]},{type:"dish",label:"Vegetables",ingredients:[{item:"Zucchini",amount:"2",note:"diced"},{item:"Green beans",amount:"150g",note:""},{item:"Cannellini beans",amount:"400g",note:"drained"},{item:"Fresh basil",amount:"handful",note:""},{item:"Parmesan rind",amount:"1 piece",note:"optional"}]}],steps:["Warm your soup base in a large pot.","Add tomato broth and stock. Add parmesan rind. Bring to a simmer.","Add zucchini and green beans. Simmer 10 min.","Add cannellini beans. Simmer 5 min more.","Finish with basil. Remove rind. Season well."],original:{ingredients:[{item:"Onion",amount:"1",note:""},{item:"Carrot",amount:"2",note:""},{item:"Celery",amount:"2 stalks",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Crushed tomatoes",amount:"400g",note:""},{item:"Vegetable stock",amount:"1.5L",note:""},{item:"Zucchini",amount:"2",note:""},{item:"Cannellini beans",amount:"400g",note:""},{item:"Basil",amount:"handful",note:""}],steps:["Sauté onion, carrot, celery, garlic.","Add tomatoes and stock. Simmer 15 min.","Add zucchini and beans. Simmer 10 min."]},notes:""}
  ,{id:"teriyaki-salmon",title:"Teriyaki Salmon",sourceTitle:"Easy Teriyaki Salmon",sourceUrl:"https://thewoksoflife.com",cuisine:"Japanese",cookTime:15,servings:4,flavorProfile:["sweet","savory","umami"],groups:[{type:"component",componentId:"miso-glaze",label:"Teriyaki glaze",note:"Add brown sugar for sweetness",extras:[{item:"Brown sugar",amount:"1 tbsp",note:""},{item:"Extra mirin",amount:"1 tbsp",note:""}]},{type:"dish",label:"Salmon",ingredients:[{item:"Salmon fillets",amount:"4 pieces",note:"skin-on"},{item:"Scallions",amount:"3",note:"sliced"},{item:"Sesame seeds",amount:"1 tbsp",note:""}]}],steps:["Pat salmon dry. Season with salt.","Sear skin-side down 4 min over medium-high.","Flip. Brush with teriyaki glaze. Cook 3 min.","Brush again. Broil 1–2 min until caramelized.","Serve over rice with scallions and sesame seeds."],original:{ingredients:[{item:"Salmon fillets",amount:"4",note:""},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Mirin",amount:"3 tbsp",note:""},{item:"Brown sugar",amount:"2 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Ginger",amount:"1 tsp",note:""}],steps:["Mix soy, mirin, sugar, sesame, ginger into glaze.","Sear salmon. Brush with glaze and cook through."]},notes:""}
  ,{id:"braised-short-ribs",title:"Braised Short Ribs",sourceTitle:"Red Wine Braised Short Ribs",sourceUrl:"https://smittenkitchen.com",cuisine:"American",cookTime:180,servings:4,flavorProfile:["rich","savory","deep"],groups:[{type:"component",componentId:"soffritto",label:"Braise base",note:"Brown deeply before adding liquid",extras:[]},{type:"component",componentId:"tomato-base",label:"Tomato braise",note:"Use with red wine and stock",extras:[{item:"Red wine",amount:"350ml",note:"full bodied"},{item:"Beef stock",amount:"500ml",note:""}]},{type:"dish",label:"Short ribs",ingredients:[{item:"Bone-in short ribs",amount:"1.5kg",note:""},{item:"Fresh thyme",amount:"5 sprigs",note:""},{item:"Bay leaves",amount:"2",note:""}]}],steps:["Season ribs. Sear in a hot Dutch oven until deeply browned all over. Remove.","Cook braise base in the same pot until soft.","Add wine. Reduce by half. Add tomato braise and stock.","Return ribs. Add thyme and bay. Braise covered 160°C 2.5–3 hr until fork-tender.","Rest 20 min. Skim fat. Serve with braising liquid."],original:{ingredients:[{item:"Short ribs",amount:"1.5kg",note:""},{item:"Onion",amount:"1",note:""},{item:"Carrot",amount:"2",note:""},{item:"Celery",amount:"2",note:""},{item:"Red wine",amount:"350ml",note:""},{item:"Beef stock",amount:"500ml",note:""},{item:"Crushed tomatoes",amount:"200g",note:""},{item:"Thyme",amount:"5 sprigs",note:""},{item:"Bay leaves",amount:"2",note:""}],steps:["Sear ribs. Sauté vegetables.","Deglaze with wine. Add stock and tomatoes.","Braise 160°C 2.5–3 hr."]},notes:""}
,{id:"caesar-salad",title:"Caesar Salad",sourceTitle:"Classic Caesar Salad",sourceUrl:"https://www.seriouseats.com",cuisine:"American",cookTime:15,servings:4,flavorProfile:["savory","tangy","rich"],groups:[{type:"component",componentId:"herb-garlic-oil",label:"Caesar dressing base",note:"Whisk in anchovy, lemon, mustard and parmesan",extras:[{item:"Anchovy fillets",amount:"4",note:"minced to paste"},{item:"Dijon mustard",amount:"1 tsp",note:""},{item:"Lemon",amount:"1",note:"juiced"},{item:"Parmesan",amount:"30g",note:"finely grated"},{item:"Worcestershire",amount:"1 tsp",note:""}]},{type:"dish",label:"Salad",ingredients:[{item:"Romaine lettuce",amount:"2 heads",note:"torn"},{item:"Parmesan",amount:"50g",note:"shaved"},{item:"Croutons",amount:"2 cups",note:""}]}],steps:["Whisk your herb & garlic oil with anchovy, lemon, mustard, parmesan and worcestershire into a dressing.","Toss romaine with dressing until evenly coated.","Top with croutons and shaved parmesan."],original:{ingredients:[{item:"Romaine",amount:"2 heads",note:""},{item:"Parmesan",amount:"80g",note:""},{item:"Croutons",amount:"2 cups",note:""},{item:"Garlic",amount:"2 cloves",note:""},{item:"Anchovy",amount:"4",note:""},{item:"Lemon",amount:"1",note:""},{item:"Olive oil",amount:"60ml",note:""}],steps:["Make dressing: blend garlic, anchovy, lemon, oil, parmesan.","Toss with romaine. Add croutons and parmesan."]},notes:""}
  ,{id:"mujaddara",title:"Mujaddara",sourceTitle:"Mujaddara (Lentils and Rice)",sourceUrl:"https://food52.com",cuisine:"Middle Eastern",cookTime:40,servings:4,flavorProfile:["earthy","savory","sweet"],groups:[{type:"component",componentId:"caramelized-onions",label:"Crispy onions",note:"Cook until very dark and jammy — they are the star",extras:[]},{type:"dish",label:"Lentils and rice",ingredients:[{item:"Green or brown lentils",amount:"200g",note:""},{item:"Long grain rice",amount:"200g",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Cinnamon",amount:"½ tsp",note:""},{item:"Olive oil",amount:"2 tbsp",note:""}]}],steps:["Cook lentils until just tender, about 20 min. Drain.","Cook rice separately until fluffy.","Combine lentils and rice with cumin and cinnamon. Season.","Top generously with your caramelized onions. Drizzle with olive oil."],original:{ingredients:[{item:"Green lentils",amount:"200g",note:""},{item:"Long grain rice",amount:"200g",note:""},{item:"Onions",amount:"4 large",note:"thinly sliced"},{item:"Olive oil",amount:"4 tbsp",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Cinnamon",amount:"½ tsp",note:""}],steps:["Caramelize onions deeply in oil, 45 min.","Cook lentils and rice separately.","Combine with spices. Top with onions."]},notes:""}
  ,{id:"gong-bao-chicken",title:"Gong Bao Chicken",sourceTitle:"Kung Pao Chicken",sourceUrl:"https://thewoksoflife.com",cuisine:"Sichuan",cookTime:20,servings:4,flavorProfile:["spicy","savory","sweet"],groups:[{type:"component",componentId:"chili-oil",label:"Sichuan chili base",note:"Add dried chilies whole",extras:[{item:"Dried red chilies",amount:"8",note:"whole"}]},{type:"component",componentId:"soy-ginger-base",label:"Kung pao sauce",note:"Add vinegar, sugar and cornstarch",extras:[{item:"Rice vinegar",amount:"1 tbsp",note:""},{item:"Sugar",amount:"1 tsp",note:""},{item:"Cornstarch",amount:"1 tsp",note:""}]},{type:"dish",label:"Chicken and peanuts",ingredients:[{item:"Chicken thighs",amount:"500g",note:"cubed"},{item:"Roasted peanuts",amount:"80g",note:""},{item:"Scallions",amount:"4",note:"cut into pieces"}]}],steps:["Marinate chicken in a splash of soy and cornstarch 10 min.","Heat chili base with dried chilies until fragrant.","Add chicken, stir-fry until cooked through.","Add kung pao sauce. Toss.","Add peanuts and scallions. Serve immediately."],original:{ingredients:[{item:"Chicken thighs",amount:"500g",note:""},{item:"Peanuts",amount:"80g",note:""},{item:"Dried chilies",amount:"8",note:""},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Rice vinegar",amount:"1 tbsp",note:""},{item:"Sugar",amount:"1 tsp",note:""},{item:"Ginger",amount:"1 tbsp",note:""},{item:"Garlic",amount:"3 cloves",note:""}],steps:["Marinate chicken. Fry chilies in oil.","Add chicken. Add garlic, ginger.","Add sauce. Toss with peanuts."]},notes:""}
  ,{id:"ribollita",title:"Ribollita",sourceTitle:"Tuscan Ribollita",sourceUrl:"https://smittenkitchen.com",cuisine:"Italian",cookTime:45,servings:6,flavorProfile:["savory","earthy","rich"],groups:[{type:"component",componentId:"soffritto",label:"Ribollita base",note:"Cook deeper than usual — until quite golden",extras:[]},{type:"component",componentId:"tomato-base",label:"Tomato broth",note:"Thin with stock and add parmesan rind",extras:[{item:"Vegetable stock",amount:"1L",note:""},{item:"Parmesan rind",amount:"1",note:""}]},{type:"dish",label:"Beans and greens",ingredients:[{item:"Cannellini beans",amount:"800g",note:"drained"},{item:"Cavolo nero or kale",amount:"300g",note:"roughly chopped"},{item:"Day-old bread",amount:"4 thick slices",note:"torn"},{item:"Rosemary",amount:"2 sprigs",note:""}]}],steps:["Warm your ribollita base. Add tomato broth with stock and parmesan rind. Simmer 10 min.","Add beans and cavolo nero. Simmer 15 min.","Stir in torn bread — it should thicken the soup. Simmer 10 more min.","Remove rind. Drizzle olive oil. Season aggressively."],original:{ingredients:[{item:"Onion",amount:"1",note:""},{item:"Carrot",amount:"2",note:""},{item:"Celery",amount:"2 stalks",note:""},{item:"Cannellini beans",amount:"800g",note:""},{item:"Kale",amount:"300g",note:""},{item:"Crushed tomatoes",amount:"400g",note:""},{item:"Vegetable stock",amount:"1L",note:""},{item:"Day-old bread",amount:"4 slices",note:""}],steps:["Sauté soffritto. Add tomatoes and stock.","Add beans and kale. Simmer 20 min.","Stir in bread. Simmer until thick."]},notes:""}
  ,{id:"chicken-marsala",title:"Chicken Marsala",sourceTitle:"Chicken Marsala",sourceUrl:"https://www.seriouseats.com",cuisine:"Italian-American",cookTime:30,servings:4,flavorProfile:["savory","rich","earthy"],groups:[{type:"component",componentId:"herb-garlic-oil",label:"Mushroom pan sauce base",note:"Sauté mushrooms in this then deglaze with Marsala",extras:[{item:"Mixed mushrooms",amount:"300g",note:"sliced"},{item:"Marsala wine",amount:"150ml",note:""},{item:"Chicken stock",amount:"150ml",note:""},{item:"Butter",amount:"2 tbsp",note:"to finish"}]},{type:"dish",label:"Chicken",ingredients:[{item:"Chicken breasts",amount:"4",note:"pounded thin"},{item:"Flour",amount:"4 tbsp",note:"for dredging"},{item:"Fresh parsley",amount:"handful",note:""}]}],steps:["Dredge chicken in flour. Sear in a hot pan until golden. Set aside.","Sauté mushrooms in your herb & garlic oil until golden.","Add Marsala. Reduce by half. Add stock. Simmer 5 min.","Swirl in butter. Return chicken. Simmer 3 min.","Garnish with parsley."],original:{ingredients:[{item:"Chicken breasts",amount:"4",note:"pounded"},{item:"Mushrooms",amount:"300g",note:""},{item:"Marsala wine",amount:"150ml",note:""},{item:"Chicken stock",amount:"150ml",note:""},{item:"Butter",amount:"3 tbsp",note:""},{item:"Garlic",amount:"3 cloves",note:""},{item:"Fresh thyme",amount:"3 sprigs",note:""}],steps:["Dredge and sear chicken. Remove.","Cook mushrooms with garlic and thyme.","Deglaze with Marsala and stock. Simmer.","Finish with butter. Return chicken."]},notes:""}
  ,{id:"tom-kha-gai",title:"Tom Kha Gai",sourceTitle:"Thai Coconut Chicken Soup",sourceUrl:"https://thewoksoflife.com",cuisine:"Thai",cookTime:25,servings:4,flavorProfile:["rich","sour","aromatic"],groups:[{type:"component",componentId:"coconut-curry-base",label:"Tom kha broth",note:"Skip curry paste; add lemongrass, galangal and kaffir lime leaves instead",extras:[{item:"Lemongrass",amount:"2 stalks",note:"bruised and cut"},{item:"Galangal or ginger",amount:"5 slices",note:""},{item:"Kaffir lime leaves",amount:"4",note:"torn"}]},{type:"dish",label:"Chicken and veg",ingredients:[{item:"Chicken thighs",amount:"400g",note:"thinly sliced"},{item:"Mushrooms",amount:"200g",note:"halved"},{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Lime",amount:"2",note:"juiced"},{item:"Fresh cilantro",amount:"handful",note:""},{item:"Thai chili",amount:"2",note:"sliced"}]}],steps:["Simmer your tom kha broth with lemongrass, galangal and lime leaves 10 min.","Add chicken and mushrooms. Simmer until cooked, 8 min.","Season with fish sauce and lime. Adjust to taste.","Serve topped with cilantro and chili."],original:{ingredients:[{item:"Coconut milk",amount:"400ml",note:""},{item:"Chicken stock",amount:"400ml",note:""},{item:"Chicken thighs",amount:"400g",note:""},{item:"Mushrooms",amount:"200g",note:""},{item:"Lemongrass",amount:"2 stalks",note:""},{item:"Galangal",amount:"5 slices",note:""},{item:"Kaffir lime leaves",amount:"4",note:""},{item:"Fish sauce",amount:"3 tbsp",note:""},{item:"Lime",amount:"2",note:""}],steps:["Simmer coconut milk, stock, lemongrass, galangal, lime leaves.","Add chicken and mushrooms. Cook 8 min.","Season with fish sauce and lime."]},notes:""}
  ,{id:"shakshuka-green",title:"Green Shakshuka",sourceTitle:"Green Shakshuka",sourceUrl:"https://food52.com",cuisine:"Middle Eastern",cookTime:20,servings:4,flavorProfile:["bright","savory","herbaceous"],groups:[{type:"component",componentId:"herb-garlic-oil",label:"Green herb base",note:"Add leeks and spinach to the herb oil",extras:[{item:"Leek",amount:"1 large",note:"thinly sliced"},{item:"Baby spinach",amount:"200g",note:""},{item:"Cumin",amount:"1 tsp",note:""}]},{type:"dish",label:"Eggs and cheese",ingredients:[{item:"Eggs",amount:"6 large",note:""},{item:"Feta",amount:"100g",note:"crumbled"},{item:"Fresh dill",amount:"handful",note:""},{item:"Chili flakes",amount:"pinch",note:""}]}],steps:["Cook leeks in your herb & garlic oil until soft, 8 min. Add cumin.","Add spinach. Cook until wilted.","Make wells, crack in eggs. Cover and cook 5–6 min.","Top with feta, dill and chili flakes."],original:{ingredients:[{item:"Leek",amount:"1",note:""},{item:"Spinach",amount:"200g",note:""},{item:"Garlic",amount:"3 cloves",note:""},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Eggs",amount:"6",note:""},{item:"Feta",amount:"100g",note:""}],steps:["Cook leeks and garlic in oil. Add spinach.","Make wells, crack eggs. Cover 5 min.","Top with feta and dill."]},notes:""}
  ,{id:"pasta-arrabiata",title:"Pasta all'Arrabbiata",sourceTitle:"Pasta Arrabbiata",sourceUrl:"https://www.seriouseats.com",cuisine:"Italian",cookTime:20,servings:4,flavorProfile:["spicy","bright","savory"],groups:[{type:"component",componentId:"tomato-base",label:"Arrabbiata sauce",note:"Add generous chili flakes for heat",extras:[{item:"Chili flakes",amount:"1½ tsp",note:"or more to taste"}]},{type:"dish",label:"Pasta",ingredients:[{item:"Rigatoni or penne",amount:"400g",note:""},{item:"Fresh parsley",amount:"handful",note:"roughly chopped"},{item:"Parmesan",amount:"40g",note:"optional"}]}],steps:["Warm your arrabbiata sauce with chili flakes. Simmer 5 min.","Cook pasta until 2 min shy of al dente.","Transfer pasta into sauce with pasta water. Toss until coated.","Finish with fresh parsley."],original:{ingredients:[{item:"Rigatoni",amount:"400g",note:""},{item:"Crushed tomatoes",amount:"400g",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Chili flakes",amount:"1½ tsp",note:""},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Parsley",amount:"handful",note:""}],steps:["Sauté garlic and chili in oil. Add tomatoes. Simmer 15 min.","Cook pasta. Toss with sauce and pasta water."]},notes:""}
  ,{id:"hainanese-chicken",title:"Hainanese Chicken Rice",sourceTitle:"Hainanese Chicken Rice",sourceUrl:"https://thewoksoflife.com",cuisine:"Singaporean",cookTime:60,servings:4,flavorProfile:["clean","savory","aromatic"],groups:[{type:"component",componentId:"aromatic-base",label:"Chicken poaching aromatics",note:"Add ginger slices and whole scallions to the base",extras:[{item:"Scallions",amount:"4",note:"whole"},{item:"Ginger",amount:"6 slices",note:"thick"}]},{type:"component",componentId:"soy-ginger-base",label:"Dipping sauce",note:"Use as ginger-scallion dipping sauce",extras:[{item:"Neutral oil",amount:"2 tbsp",note:"hot, poured over"}]},{type:"dish",label:"Chicken and rice",ingredients:[{item:"Whole chicken",amount:"1.5kg",note:""},{item:"Jasmine rice",amount:"2 cups",note:"cooked in chicken fat"},{item:"Sesame oil",amount:"1 tbsp",note:"to finish"}]}],steps:["Bring a pot of water to a boil with your aromatic base, scallions and ginger.","Submerge chicken. Poach on lowest heat 40–45 min. Remove and ice bath immediately.","Skim fat from broth. Use it to fry rice before adding liquid.","Cook rice in chicken broth. Slice chicken. Drizzle sesame oil.","Serve with your dipping sauce on the side."],original:{ingredients:[{item:"Whole chicken",amount:"1.5kg",note:""},{item:"Jasmine rice",amount:"2 cups",note:""},{item:"Ginger",amount:"6 slices",note:""},{item:"Scallions",amount:"4",note:""},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Sesame oil",amount:"1 tbsp",note:""}],steps:["Poach chicken with ginger and scallion 40 min.","Cook rice in chicken fat and broth.","Slice chicken. Serve with soy dipping sauce."]},notes:""}
  ,{id:"spiced-lamb-shoulder",title:"Slow-Roasted Spiced Lamb",sourceTitle:"Spiced Lamb Shoulder",sourceUrl:"https://cooking.nytimes.com",cuisine:"Middle Eastern",cookTime:240,servings:6,flavorProfile:["rich","warm","savory"],groups:[{type:"component",componentId:"warm-spice-blend",label:"Lamb spice rub",note:"Add extra cumin and coriander, press into slits all over the lamb",extras:[{item:"Extra cumin",amount:"1 tsp",note:""},{item:"Turmeric",amount:"½ tsp",note:""}]},{type:"component",componentId:"citrus-acid",label:"Marinade",note:"Use lemon, combine with the spice rub",extras:[]},{type:"dish",label:"Lamb",ingredients:[{item:"Bone-in lamb shoulder",amount:"2kg",note:""},{item:"Onions",amount:"3",note:"quartered, for roasting pan"},{item:"Fresh mint",amount:"handful",note:"to serve"}]}],steps:["Combine spice rub with citrus marinade. Score lamb deeply and press marinade in.","Rest overnight in fridge or at least 2 hr.","Set on onions in a roasting pan. Cover tightly with foil.","Roast at 160°C 3.5–4 hr until falling off the bone.","Rest 20 min. Shred. Serve with fresh mint."],original:{ingredients:[{item:"Lamb shoulder",amount:"2kg",note:""},{item:"Cumin",amount:"2 tsp",note:""},{item:"Coriander",amount:"1 tsp",note:""},{item:"Turmeric",amount:"½ tsp",note:""},{item:"Lemon",amount:"2",note:""},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Garlic",amount:"6 cloves",note:""}],steps:["Rub spices, lemon, oil all over lamb. Marinate overnight.","Roast covered 160°C 4 hr.","Rest, shred and serve."]},notes:""}
  ,{id:"japanese-curry",title:"Japanese Curry",sourceTitle:"Japanese Beef Curry",sourceUrl:"https://thewoksoflife.com",cuisine:"Japanese",cookTime:40,servings:4,flavorProfile:["mild","savory","sweet"],groups:[{type:"component",componentId:"aromatic-base",label:"Curry base",note:"Add diced apple for sweetness",extras:[{item:"Apple",amount:"1 small",note:"grated"},{item:"Worcestershire",amount:"1 tbsp",note:""}]},{type:"dish",label:"Beef and veg",ingredients:[{item:"Beef chuck",amount:"500g",note:"cubed"},{item:"Potato",amount:"2 large",note:"cubed"},{item:"Carrot",amount:"2",note:"sliced"},{item:"Japanese curry roux",amount:"100g",note:"3–4 blocks"},{item:"Beef stock",amount:"600ml",note:""}]}],steps:["Brown beef in batches. Set aside.","Warm your curry base. Add beef, potato, carrot and stock.","Simmer covered 20 min until veg is tender.","Off heat, add curry roux blocks. Stir until dissolved.","Simmer 5 min until thick. Serve over rice."],original:{ingredients:[{item:"Beef chuck",amount:"500g",note:""},{item:"Onion",amount:"1 large",note:""},{item:"Potato",amount:"2",note:""},{item:"Carrot",amount:"2",note:""},{item:"Japanese curry roux",amount:"100g",note:""},{item:"Beef stock",amount:"600ml",note:""},{item:"Apple",amount:"1",note:"grated"}],steps:["Brown beef. Sauté onion.","Add veg and stock. Simmer 20 min.","Add roux. Simmer until thick."]},notes:""}
  ,{id:"khao-man-gai",title:"Thai Chicken Rice",sourceTitle:"Khao Man Gai",sourceUrl:"https://www.seriouseats.com",cuisine:"Thai",cookTime:50,servings:4,flavorProfile:["clean","savory","aromatic"],groups:[{type:"component",componentId:"aromatic-base",label:"Poaching liquid",note:"Add lemongrass and galangal to the base",extras:[{item:"Lemongrass",amount:"1 stalk",note:"bruised"},{item:"Galangal",amount:"3 slices",note:""}]},{type:"component",componentId:"soy-ginger-base",label:"Dipping sauce",note:"Add fermented soybean paste and chili",extras:[{item:"Fermented soybean paste",amount:"1 tbsp",note:""},{item:"Fresh chili",amount:"1",note:"minced"}]},{type:"dish",label:"Chicken and rice",ingredients:[{item:"Whole chicken legs",amount:"4",note:""},{item:"Jasmine rice",amount:"2 cups",note:""},{item:"Cucumber",amount:"1",note:"sliced"},{item:"Fresh cilantro",amount:"handful",note:""}]}],steps:["Simmer aromatic base with lemongrass and galangal. Add chicken legs. Poach 30–35 min.","Remove chicken. Skim fat. Use broth to cook rice.","Slice chicken. Arrange over rice with cucumber.","Serve with dipping sauce and fresh cilantro."],original:{ingredients:[{item:"Chicken legs",amount:"4",note:""},{item:"Jasmine rice",amount:"2 cups",note:""},{item:"Lemongrass",amount:"1 stalk",note:""},{item:"Galangal",amount:"3 slices",note:""},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Ginger",amount:"1 tbsp",note:""}],steps:["Poach chicken with aromatics 30 min.","Cook rice in broth.","Serve chicken over rice with dipping sauce."]},notes:""}
  ,{id:"eggs-in-purgatory",title:"Eggs in Purgatory",sourceTitle:"Uova in Purgatorio",sourceUrl:"https://food52.com",cuisine:"Italian",cookTime:20,servings:4,flavorProfile:["spicy","savory","bright"],groups:[{type:"component",componentId:"tomato-base",label:"Purgatory sauce",note:"Add chili flakes and a pinch of sugar",extras:[{item:"Chili flakes",amount:"1 tsp",note:""},{item:"Anchovy",amount:"2 fillets",note:"optional, melted in"}]},{type:"dish",label:"Eggs and finish",ingredients:[{item:"Eggs",amount:"6 large",note:""},{item:"Parmesan",amount:"40g",note:"grated"},{item:"Fresh basil",amount:"handful",note:""},{item:"Crusty bread",amount:"to serve",note:""}]}],steps:["Heat your purgatory sauce with chili and anchovy. Simmer 5 min.","Make wells, crack in eggs. Cover and cook 5–7 min.","Top with parmesan and basil. Serve with bread."],original:{ingredients:[{item:"Crushed tomatoes",amount:"400g",note:""},{item:"Garlic",amount:"3 cloves",note:""},{item:"Chili flakes",amount:"1 tsp",note:""},{item:"Olive oil",amount:"2 tbsp",note:""},{item:"Eggs",amount:"6",note:""},{item:"Parmesan",amount:"40g",note:""}],steps:["Make spicy tomato sauce.","Crack eggs in. Cover 5–7 min.","Top with parmesan and basil."]},notes:""}
  ,{id:"char-siu",title:"Char Siu Pork",sourceTitle:"Char Siu BBQ Pork",sourceUrl:"https://thewoksoflife.com",cuisine:"Cantonese",cookTime:35,servings:4,flavorProfile:["sweet","savory","smoky"],groups:[{type:"component",componentId:"miso-glaze",label:"Char siu marinade",note:"Add hoisin, honey and five spice",extras:[{item:"Hoisin sauce",amount:"2 tbsp",note:""},{item:"Honey",amount:"2 tbsp",note:""},{item:"Five spice powder",amount:"½ tsp",note:""},{item:"Red food colouring",amount:"few drops",note:"optional"}]},{type:"dish",label:"Pork",ingredients:[{item:"Pork shoulder or tenderloin",amount:"700g",note:""},{item:"Scallions",amount:"2",note:"to serve"}]}],steps:["Combine char siu marinade. Coat pork thoroughly. Marinate overnight.","Roast at 200°C on a rack 25 min. Flip and brush with more marinade.","Roast another 10 min until caramelized and slightly charred at edges.","Rest 5 min. Slice thinly. Serve with scallions."],original:{ingredients:[{item:"Pork shoulder",amount:"700g",note:""},{item:"Hoisin sauce",amount:"2 tbsp",note:""},{item:"Soy sauce",amount:"2 tbsp",note:""},{item:"Honey",amount:"2 tbsp",note:""},{item:"Five spice",amount:"½ tsp",note:""},{item:"Mirin",amount:"1 tbsp",note:""}],steps:["Mix marinade. Coat pork. Marinate overnight.","Roast 200°C 35 min, basting. Slice."]},notes:""}
  ,{id:"roasted-cauliflower",title:"Roasted Cauliflower with Tahini",sourceTitle:"Whole Roasted Cauliflower",sourceUrl:"https://smittenkitchen.com",cuisine:"Middle Eastern",cookTime:45,servings:4,flavorProfile:["nutty","savory","bright"],groups:[{type:"component",componentId:"tahini-sauce",label:"Tahini dressing",note:"Thin slightly and add extra lemon",extras:[]},{type:"component",componentId:"warm-spice-blend",label:"Roasting spice",note:"Toss cauliflower in the spice blend with olive oil",extras:[{item:"Olive oil",amount:"4 tbsp",note:""}]},{type:"dish",label:"Cauliflower and garnish",ingredients:[{item:"Cauliflower",amount:"1 large head",note:"cut into florets"},{item:"Fresh parsley",amount:"handful",note:"roughly chopped"},{item:"Pomegranate seeds",amount:"handful",note:""},{item:"Toasted pine nuts",amount:"2 tbsp",note:""}]}],steps:["Toss cauliflower in your warm spice blend with olive oil. Season.","Roast at 220°C 35–40 min until deeply caramelized.","Arrange on a platter. Drizzle with your tahini dressing.","Top with parsley, pomegranate and pine nuts."],original:{ingredients:[{item:"Cauliflower",amount:"1 head",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Paprika",amount:"1 tsp",note:""},{item:"Olive oil",amount:"4 tbsp",note:""},{item:"Tahini",amount:"4 tbsp",note:""},{item:"Lemon",amount:"1",note:""},{item:"Garlic",amount:"1 clove",note:""}],steps:["Spice and roast cauliflower 220°C 40 min.","Make tahini sauce. Drizzle over. Garnish."]},notes:""}
  ,{id:"nasi-goreng",title:"Nasi Goreng",sourceTitle:"Indonesian Fried Rice",sourceUrl:"https://thewoksoflife.com",cuisine:"Indonesian",cookTime:15,servings:4,flavorProfile:["savory","sweet","smoky"],groups:[{type:"component",componentId:"soy-ginger-base",label:"Nasi goreng sauce",note:"Add kecap manis and shrimp paste",extras:[{item:"Kecap manis",amount:"2 tbsp",note:"sweet soy sauce"},{item:"Shrimp paste",amount:"½ tsp",note:""}]},{type:"dish",label:"Rice and toppings",ingredients:[{item:"Day-old jasmine rice",amount:"4 cups",note:"cold, broken up"},{item:"Eggs",amount:"4",note:"fried sunny-side up"},{item:"Shrimp or chicken",amount:"200g",note:""},{item:"Scallions",amount:"3",note:""},{item:"Cucumber",amount:"1",note:"sliced"},{item:"Crispy shallots",amount:"handful",note:""}]}],steps:["Fry shrimp or chicken over high heat. Remove.","Add cold rice to wok. Press flat and char 2 min.","Add nasi goreng sauce. Toss vigorously.","Return protein. Toss with scallions.","Top each bowl with a fried egg, cucumber and crispy shallots."],original:{ingredients:[{item:"Jasmine rice",amount:"4 cups",note:""},{item:"Shrimp",amount:"200g",note:""},{item:"Eggs",amount:"4",note:""},{item:"Kecap manis",amount:"2 tbsp",note:""},{item:"Soy sauce",amount:"2 tbsp",note:""},{item:"Shrimp paste",amount:"½ tsp",note:""},{item:"Scallions",amount:"3",note:""}],steps:["Fry protein. Add rice, char 2 min.","Add sauce. Toss. Top with fried egg."]},notes:""}
  ,{id:"lentil-soup",title:"Red Lentil Soup",sourceTitle:"Red Lentil Soup",sourceUrl:"https://cooking.nytimes.com",cuisine:"Middle Eastern",cookTime:35,servings:6,flavorProfile:["earthy","warm","savory"],groups:[{type:"component",componentId:"aromatic-base",label:"Soup base",note:"Use olive oil; cook until very deep golden",extras:[]},{type:"component",componentId:"warm-spice-blend",label:"Spice bloom",note:"Toast spices directly in the aromatic base",extras:[{item:"Turmeric",amount:"1 tsp",note:""},{item:"Cayenne",amount:"¼ tsp",note:""}]},{type:"dish",label:"Lentils and finish",ingredients:[{item:"Red lentils",amount:"300g",note:""},{item:"Vegetable stock",amount:"1.2L",note:""},{item:"Lemon",amount:"1",note:"juiced"},{item:"Fresh cilantro",amount:"handful",note:""},{item:"Olive oil",amount:"drizzle",note:"to finish"}]}],steps:["Warm your soup base. Add spice blend and toast 1 min.","Add red lentils and stock. Simmer 20–25 min until lentils collapse.","Blend partially or fully. Season with salt and lemon.","Serve with a drizzle of good olive oil and fresh cilantro."],original:{ingredients:[{item:"Red lentils",amount:"300g",note:""},{item:"Onion",amount:"1 large",note:""},{item:"Garlic",amount:"4 cloves",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Turmeric",amount:"1 tsp",note:""},{item:"Vegetable stock",amount:"1.2L",note:""},{item:"Lemon",amount:"1",note:""}],steps:["Sauté onion and garlic. Add spices.","Add lentils and stock. Simmer 25 min.","Blend. Season with lemon."]},notes:""}
  ,{id:"honey-garlic-chicken",title:"Honey Garlic Chicken",sourceTitle:"Sticky Honey Garlic Chicken",sourceUrl:"https://smittenkitchen.com",cuisine:"American",cookTime:25,servings:4,flavorProfile:["sweet","savory","sticky"],groups:[{type:"component",componentId:"soy-ginger-base",label:"Honey garlic glaze",note:"Add honey and apple cider vinegar",extras:[{item:"Honey",amount:"3 tbsp",note:""},{item:"Apple cider vinegar",amount:"1 tbsp",note:""}]},{type:"dish",label:"Chicken",ingredients:[{item:"Chicken thighs",amount:"8 pieces",note:"bone-in skin-on"},{item:"Fresh thyme",amount:"4 sprigs",note:""},{item:"Sesame seeds",amount:"1 tbsp",note:"to garnish"}]}],steps:["Sear chicken skin-side down in a hot oven-safe pan 8 min until golden. Flip.","Pour your honey garlic glaze over. Add thyme.","Roast at 200°C 15–18 min until cooked through and lacquered.","Baste once more with pan juices. Garnish with sesame seeds."],original:{ingredients:[{item:"Chicken thighs",amount:"8",note:"bone-in"},{item:"Soy sauce",amount:"3 tbsp",note:""},{item:"Honey",amount:"3 tbsp",note:""},{item:"Garlic",amount:"5 cloves",note:""},{item:"Ginger",amount:"1 tsp",note:""},{item:"Apple cider vinegar",amount:"1 tbsp",note:""}],steps:["Mix soy, honey, garlic, ginger, vinegar into glaze.","Sear chicken. Pour glaze over.","Roast 200°C 15 min. Baste and serve."]},notes:""}
  ,{id:"tacos-al-pastor",title:"Tacos al Pastor",sourceTitle:"Al Pastor Tacos",sourceUrl:"https://www.seriouseats.com",cuisine:"Mexican",cookTime:25,servings:4,flavorProfile:["spicy","savory","bright"],groups:[{type:"component",componentId:"citrus-acid",label:"Al pastor marinade",note:"Use lime, add achiote and chipotle",extras:[{item:"Achiote paste",amount:"2 tbsp",note:""},{item:"Chipotle in adobo",amount:"2",note:"minced"},{item:"Apple cider vinegar",amount:"1 tbsp",note:""}]},{type:"component",componentId:"warm-spice-blend",label:"Pork spice",note:"Add oregano and cloves to the blend",extras:[{item:"Dried oregano",amount:"1 tsp",note:""},{item:"Ground cloves",amount:"¼ tsp",note:""}]},{type:"dish",label:"Tacos",ingredients:[{item:"Pork shoulder",amount:"700g",note:"thinly sliced"},{item:"Pineapple",amount:"½",note:"cubed"},{item:"Corn tortillas",amount:"12",note:""},{item:"White onion",amount:"½",note:"finely diced"},{item:"Fresh cilantro",amount:"handful",note:""},{item:"Lime",amount:"2",note:"wedges"}]}],steps:["Combine al pastor marinade with pork spice. Coat pork slices. Marinate 1 hr.","Grill or broil pork over high heat until charred at edges, 3–4 min per side.","Rest, then chop finely.","Warm tortillas. Fill with pork, pineapple, onion and cilantro. Serve with lime."],original:{ingredients:[{item:"Pork shoulder",amount:"700g",note:""},{item:"Achiote paste",amount:"2 tbsp",note:""},{item:"Chipotle",amount:"2",note:""},{item:"Lime",amount:"3",note:""},{item:"Cumin",amount:"1 tsp",note:""},{item:"Oregano",amount:"1 tsp",note:""},{item:"Pineapple",amount:"½",note:""},{item:"Corn tortillas",amount:"12",note:""}],steps:["Marinate pork in spices and lime overnight.","Grill or broil until charred.","Chop and serve in tortillas with pineapple."]},notes:""}
  ,{id:"congee",title:"Chicken Congee",sourceTitle:"Cantonese Congee (Jook)",sourceUrl:"https://thewoksoflife.com",cuisine:"Cantonese",cookTime:60,servings:4,flavorProfile:["clean","savory","comforting"],groups:[{type:"component",componentId:"aromatic-base",label:"Congee aromatics",note:"Add to the rice at the start — ginger is key",extras:[{item:"Ginger",amount:"6 slices",note:"thin"},{item:"Scallions",amount:"3",note:"tied in a bundle"}]},{type:"component",componentId:"soy-ginger-base",label:"Dipping and drizzle sauce",note:"Use as finishing drizzle",extras:[]},{type:"dish",label:"Rice and toppings",ingredients:[{item:"Jasmine rice",amount:"1 cup",note:"rinsed"},{item:"Chicken stock",amount:"1.5L",note:""},{item:"Chicken breast",amount:"2",note:"poached and shredded"},{item:"White pepper",amount:"½ tsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"Scallions",amount:"3",note:"sliced"},{item:"Fried shallots",amount:"handful",note:""},{item:"Century egg",amount:"2",note:"optional, quartered"}]}],steps:["Combine rice, stock, congee aromatics. Bring to boil then low simmer 45–60 min until rice breaks down to porridge consistency.","Remove ginger and scallion bundle. Stir in chicken.","Season with white pepper, sesame oil.","Serve topped with scallions, fried shallots, century egg, and a drizzle of your sauce."],original:{ingredients:[{item:"Jasmine rice",amount:"1 cup",note:""},{item:"Chicken stock",amount:"1.5L",note:""},{item:"Chicken breast",amount:"2",note:""},{item:"Ginger",amount:"6 slices",note:""},{item:"Soy sauce",amount:"2 tbsp",note:""},{item:"Sesame oil",amount:"1 tsp",note:""},{item:"White pepper",amount:"½ tsp",note:""}],steps:["Simmer rice in stock with ginger 1 hr until broken down.","Add shredded chicken. Season.","Top with scallions, fried shallots."]},notes:""}
];

// ─── Utilities ────────────────────────────────────────────────────────────────
const buildPrepPlan = (weekDishIds, dishes) => {
  const weekDishes = dishes.filter(d=>weekDishIds.includes(d.id));
  const compUsage = {};
  weekDishes.forEach(d=>{
    (d.groups||[]).filter(g=>g.type==="component").forEach(g=>{
      if(!compUsage[g.componentId]) compUsage[g.componentId]={usedIn:[],extrasByDish:[]};
      compUsage[g.componentId].usedIn.push(d.title);
      if(g.extras?.length) compUsage[g.componentId].extrasByDish.push({dish:d.title,extras:g.extras});
    });
  });
  return Object.entries(compUsage)
    .map(([cid,{usedIn,extrasByDish}])=>({...COMPONENT_LIBRARY[cid],usedIn,extrasByDish}))
    .filter(c=>c.id)
    .sort((a,b)=>b.cookTime-a.cookTime);
};

// ─── Aisle classifier ─────────────────────────────────────────────────────────
const AISLES = [
  { label: "Produce", keywords: ["onion","garlic","ginger","shallot","leek","scallion","spring onion","carrot","celery","tomato","pepper","chili","chile","lemon","lime","orange","apple","spinach","kale","cabbage","lettuce","romaine","arugula","cucumber","zucchini","courgette","eggplant","aubergine","potato","sweet potato","mushroom","broccoli","cauliflower","corn","peas","beans","avocado","mango","pineapple","cilantro","parsley","basil","mint","thyme","rosemary","dill","sage","bay","herb","fresh","bok choy","pak choi","fennel","radish","beet","squash","pumpkin","jalapeño","serrano","habanero","banana","berry","grape","pomegranate"] },
  { label: "Meat & Seafood", keywords: ["chicken","beef","pork","lamb","turkey","duck","veal","bacon","sausage","prosciutto","pancetta","chorizo","ground","mince","steak","chop","fillet","thigh","breast","wing","shrimp","prawn","salmon","tuna","cod","halibut","sea bass","anchovy","crab","lobster","clam","mussel","squid","fish","seafood","bone","rib","short rib","brisket","tenderloin","sirloin","flank","chuck","shoulder","leg","rack"] },
  { label: "Dairy & Eggs", keywords: ["egg","milk","cream","butter","cheese","parmesan","mozzarella","ricotta","feta","cheddar","gruyere","gouda","brie","yogurt","sour cream","creme fraiche","ghee","half and half","heavy cream","double cream","whipping cream","mascarpone","cottage cheese","cream cheese","kefir"] },
  { label: "Pantry", keywords: ["oil","olive oil","sesame oil","vegetable oil","neutral oil","coconut oil","vinegar","soy sauce","fish sauce","oyster sauce","hoisin","worcestershire","kecap manis","mirin","sake","rice wine","tomato","crushed tomato","canned tomato","tomato paste","coconut milk","stock","broth","flour","cornstarch","corn starch","tapioca","breadcrumb","panko","sugar","salt","honey","maple syrup","molasses","tahini","peanut butter","almond butter","miso","shrimp paste","anchovy paste","mustard","ketchup","hot sauce","sriracha","sambal","gochujang","harissa","adobo","chipotle","curry paste","lentil","chickpea","bean","lentil","rice","noodle","pasta","quinoa","bulgur","farro","couscous","oat","dried","canned","jar","bottle","can","water"] },
  { label: "Spices & Dry Goods", keywords: ["cumin","coriander","turmeric","paprika","cayenne","chili powder","cinnamon","cardamom","clove","nutmeg","allspice","star anise","fennel seed","mustard seed","fenugreek","sumac","za'atar","ras el hanout","garam masala","five spice","curry","pepper","peppercorn","bay leaf","dried","powder","ground","flake","spice","herb","seasoning","achiote","saffron","vanilla","cocoa","chocolate"] },
  { label: "Bakery & Bread", keywords: ["bread","bun","roll","pita","tortilla","naan","flatbread","baguette","sourdough","crouton","toast","wrap","taco","dumpling","wonton","spring roll"] },
  { label: "Frozen", keywords: ["frozen","ice"] },
];

const getAisle = (itemName) => {
  const name = (itemName||"").toLowerCase();
  for(const aisle of AISLES) {
    if(aisle.keywords.some(k => name.includes(k))) return aisle.label;
  }
  return "Other";
};

const groupByAisle = (items) => {
  const groups = {};
  items.forEach(item => {
    const aisle = getAisle(item.item);
    if(!groups[aisle]) groups[aisle] = [];
    groups[aisle].push(item);
  });
  // Return in aisle order
  return AISLES.map(a => a.label)
    .concat(["Other"])
    .filter(label => groups[label])
    .map(label => ({ label, items: groups[label] }));
};

// Normalise ingredient name: lowercase, strip prep notes in parens, trim
const normIngName = (name) => (name||"").toLowerCase()
  .replace(/\([^)]*\)/g,"")
  .replace(/\b(fresh|dried|ground|minced|sliced|diced|chopped|grated|crushed|whole|thick|thin|large|small|medium|boneless|skinless|skin-on|bone-in|ripe|raw|cooked|toasted|packed|heaped|leveled?|finely|roughly|thinly|thickly)\b/g,"")
  .replace(/\s+/g," ").trim();

// Try to sum two amount strings — returns summed string or "see recipe" if incompatible
const sumAmounts = (a, b) => {
  if(!a) return b||"";
  if(!b) return a;
  // Parse: number + optional fraction + optional unit
  const parse = (s) => {
    const m = s.trim().match(/^([\d./½¼¾⅓⅔⅛]+)\s*(.*)$/);
    if(!m) return null;
    let num = m[1]
      .replace("½","0.5").replace("¼","0.25").replace("¾","0.75")
      .replace("⅓","0.333").replace("⅔","0.667").replace("⅛","0.125");
    if(num.includes("/")) { const [n,d]=num.split("/"); num=parseFloat(n)/parseFloat(d); }
    return { n: parseFloat(num), unit: m[2].trim().toLowerCase() };
  };
  const pa = parse(a), pb = parse(b);
  if(!pa || !pb) return a + " + " + b;
  if(pa.unit !== pb.unit) return a + " + " + b;
  const total = pa.n + pb.n;
  const rounded = Math.round(total*4)/4;
  const frac = rounded%1===0.5?"½":rounded%1===0.25?"¼":rounded%1===0.75?"¾":"";
  const whole = Math.floor(rounded);
  const display = (whole>0?whole:"") + frac || String(rounded);
  return display + (pa.unit?" "+pa.unit:"");
};

const buildShoppingList = (weekDishIds, dishes) => {
  const weekDishes = dishes.filter(d=>weekDishIds.includes(d.id));
  const seenCompIds = new Set();
  const merged = {}; // normalised name → {item, amount, _type}

  const addItem = (ing, type) => {
    const key = normIngName(ing.item);
    if(!key) return;
    if(merged[key]) {
      merged[key].amount = sumAmounts(merged[key].amount, ing.amount);
    } else {
      // Use the first (base) name encountered, capitalised
      const display = ing.item.replace(/\([^)]*\)/g,"").trim();
      merged[key] = { item: display, amount: ing.amount||"", _type: type };
    }
  };

  weekDishes.forEach(d=>{
    (d.groups||[]).forEach(g=>{
      if(g.type==="component") {
        const comp = COMPONENT_LIBRARY[g.componentId];
        if(comp&&!seenCompIds.has(g.componentId)) {
          seenCompIds.add(g.componentId);
          comp.ingredients.forEach(ing=>addItem(ing,"base"));
        }
        (g.extras||[]).forEach(ing=>addItem(ing,"dish"));
      } else {
        (g.ingredients||[]).forEach(ing=>addItem(ing,"dish"));
      }
    });
  });

  const all = Object.values(merged);
  return { compItems: all.filter(i=>i._type==="base"), dishItems: all.filter(i=>i._type==="dish") };
};

const findSharedIngredients = (weekDishIds, dishes) => {
  const weekDishes = dishes.filter(d=>weekDishIds.includes(d.id));
  const compIngNames = new Set(
    weekDishes.flatMap(d=>(d.groups||[]).filter(g=>g.type==="component")
      .flatMap(g=>(COMPONENT_LIBRARY[g.componentId]?.ingredients||[]).map(i=>i.item.toLowerCase())))
  );
  const map = {};
  weekDishes.forEach(d=>{
    (d.groups||[]).filter(g=>g.type==="dish").forEach(g=>{
      (g.ingredients||[]).forEach(ing=>{
        const k=ing.item.toLowerCase();
        if(compIngNames.has(k)) return;
        if(!map[k]) map[k]={item:ing.item,recipes:[]};
        if(!map[k].recipes.includes(d.title)) map[k].recipes.push(d.title);
      });
    });
  });
  return Object.values(map).filter(m=>m.recipes.length>=2);
};

// ─── Shared UI atoms ──────────────────────────────────────────────────────────
const Ck = ({checked,onClick,size=18}) => (
  <div onClick={onClick} style={{width:size,height:size,flexShrink:0,marginTop:2,borderRadius:4,border:`1.5px solid ${checked?T.text:T.border}`,background:checked?T.text:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease",cursor:"pointer"}}>
    {checked&&<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke={T.surface} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
  </div>
);
const ClockIcon = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

// ─── Import Sheet ─────────────────────────────────────────────────────────────
const ImportSheet = ({onClose, onAdd, activeDishes}) => {
  const [mode, setMode] = useState(null); // null | "url" | "manual" | "photo"
  const [photoLoading, setPhotoLoading] = useState(false);
  const [photoError, setPhotoError] = useState("");
  const fileInputRef = useRef(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({title:"",cuisine:"",cookTime:"",servings:"4",sourceUrl:"",ingredients:[{item:"",amount:""},{item:"",amount:""},{item:"",amount:""}],steps:["","",""]});
  const sf = (k,v) => setForm(p=>({...p,[k]:v}));

  const activeCompIds = [...new Set(activeDishes.flatMap(d=>(d.groups||[]).filter(g=>g.type==="component").map(g=>g.componentId)))];

  const importFromUrl = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      var compLines = Object.keys(COMPONENT_LIBRARY).map(function(id) {
        var c = COMPONENT_LIBRARY[id];
        return id + " = " + c.name + " (" + c.ingredients.map(function(i){ return i.item; }).join(", ") + ")";
      }).join("\n");

      var activeList = activeCompIds.length
        ? "\nActive this week: " + activeCompIds.map(function(id){ return COMPONENT_LIBRARY[id] ? COMPONENT_LIBRARY[id].name : id; }).join(", ")
        : "";

      var prompt = "Adapt the recipe at this URL into a component-based dish format. Use your training knowledge.\n\n"
        + "URL: " + url.trim() + "\n\n"
        + "Component library (use exact id values as componentId):\n"
        + compLines + activeList + "\n\n"
        + "Return ONLY a JSON object, no markdown, no explanation. Fields: "
        + "id (slug), title, sourceTitle, sourceUrl, cuisine, cookTime (number), servings (number), "
        + "flavorProfile (string array), "
        + "groups (array: each item is either "
        + "{type:'component', componentId, label, note, extras:[{item,amount,note}]} "
        + "or {type:'dish', label, ingredients:[{item,amount,note}]}), "
        + "steps (string array), "
        + "original ({ingredients:[{item,amount,note}], steps:[string]}), "
        + "image (empty string), notes (empty string). "
        + "Every ingredient must appear in exactly one group.";

      var resp = await fetch("https://yellow-block-9415.paulingford.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }]
        }),
      });

      var data = await resp.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      if (!data.content || !data.content[0]) throw new Error("No content: " + JSON.stringify(data).slice(0, 200));

      var raw = data.content[0].text || "";
      var j0 = raw.indexOf("{");
      var j1 = raw.lastIndexOf("}");
      if (j0 === -1) throw new Error("No JSON in response: " + raw.slice(0, 200));
      var parsed = JSON.parse(raw.slice(j0, j1 + 1));
      if (!parsed.sourceUrl) parsed.sourceUrl = url.trim();
      setResult(parsed);
    } catch (err) {
      setError(err.message ? err.message.slice(0, 200) : "Unknown error");
    }
    setLoading(false);
  };

  const saveManual = () => {
    const cleanIngs = form.ingredients.filter(i=>i.item.trim());
    const cleanSteps = form.steps.filter(s=>s.trim());
    const dish = {
      id:`custom-${Date.now()}`,title:form.title,sourceTitle:form.title,sourceUrl:form.sourceUrl,
      cuisine:form.cuisine||"Custom",cookTime:parseInt(form.cookTime)||30,servings:parseInt(form.servings)||4,
      flavorProfile:[],
      groups:[{type:"dish",label:"Ingredients",ingredients:cleanIngs}],
      steps:cleanSteps,
      original:{ingredients:cleanIngs,steps:cleanSteps},
      image:"", notes:"",
    };
    onAdd(dish); onClose();
  };

  const inputStyle = {width:"100%",boxSizing:"border-box",border:`1px solid ${T.border}`,borderRadius:8,padding:"8px 12px",fontSize:14,fontFamily:T.font,color:T.text,outline:"none",marginBottom:10,background:"#fff"};
  const labelStyle = {fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.muted,fontFamily:T.font,fontWeight:600,display:"block",marginBottom:4};

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,51,160,0.25)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{background:T.surface,width:"100%",maxWidth:680,borderRadius:"14px 14px 0 0",maxHeight:"92vh",display:"flex",flexDirection:"column",paddingBottom:"env(safe-area-inset-bottom,0px)",animation:"slideUp 0.35s cubic-bezier(0.32,0.72,0,1)"}}>
            <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
        <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
        {/* Header */}
        <div style={{padding:"12px 16px 12px 0",flexShrink:0}}>
          <div style={{width:36,height:4,borderRadius:100,background:T.border,margin:"0 auto 14px"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              {mode&&<button onClick={()=>setMode(null)} style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>}
              {!mode&&<div style={{fontSize:16,fontWeight:600,color:T.text,fontFamily:T.font}}>Add dish</div>}
            </div>
            <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:20,color:T.muted,padding:0,lineHeight:1}}>×</button>
          </div>
        </div>

        <div style={{overflowY:"auto",padding:"0 24px 0 0",flex:1}}>
          {/* Photo loading overlay */}
          {mode==="photo"&&photoLoading&&(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 16px 60px 0",gap:16}}>
              <div style={{width:40,height:40,borderRadius:"50%",border:`3px solid ${T.border}`,borderTopColor:T.text,animation:"spin 0.8s linear infinite"}}/>
              <div style={{fontSize:14,color:T.muted,fontFamily:T.font}}>Reading recipe…</div>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}
          {photoError&&mode===null&&<div style={{fontSize:13,color:"#c0392b",padding:"0 0 12px",fontFamily:T.font}}>{photoError}</div>}
          {/* Mode picker */}
          {mode===null&&(
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <button onClick={()=>setMode("url")} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 24px 16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>Import from URL</div>
                  <div style={{fontSize:12,color:T.muted,fontFamily:T.font,marginTop:2}}>Adapted to use shared bases</div>
                </div>
              </button>
              <button onClick={()=>setMode("manual")} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 24px 16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>Write manually</div>
                  <div style={{fontSize:12,color:T.muted,fontFamily:T.font,marginTop:2}}>Type in your own recipe</div>
                </div>
              </button>
              <button onClick={()=>fileInputRef.current&&fileInputRef.current.click()} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 24px 16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>Scan a recipe</div>
                  <div style={{fontSize:12,color:T.muted,fontFamily:T.font,marginTop:2}}>Take or upload a photo from a book</div>
                </div>
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={async (e)=>{
                const file = e.target.files?.[0];
                if(!file) return;
                setPhotoLoading(true);
                setPhotoError("");
                setMode("photo");
                try {
                  const base64 = await new Promise((res,rej)=>{
                    const r = new FileReader();
                    r.onload=()=>res(r.result.split(",")[1]);
                    r.onerror=()=>rej(new Error("Read failed"));
                    r.readAsDataURL(file);
                  });
                  const mediaType = file.type||"image/jpeg";
                  const resp = await fetch("https://yellow-block-9415.paulingford.workers.dev/",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({messages:[{role:"user",content:[
                      {type:"image",source:{type:"base64",media_type:mediaType,data:base64}},
                      {type:"text",text:"Extract the recipe from this image. Return ONLY a JSON object with these fields: title (string), cuisine (string), cookTime (number in minutes), servings (number), ingredients (array of {item,amount,note}), steps (array of strings). No markdown, no explanation."}
                    ]}]})
                  });
                  const data = await resp.json();
                  const raw = data?.content?.[0]?.text||"";
                  const j0=raw.indexOf("{"), j1=raw.lastIndexOf("}");
                  if(j0===-1) throw new Error("No JSON found");
                  const parsed = JSON.parse(raw.slice(j0,j1+1));
                  sf("title", parsed.title||"");
                  sf("cuisine", parsed.cuisine||"");
                  sf("cookTime", String(parsed.cookTime||""));
                  sf("servings", String(parsed.servings||"4"));
                  sf("ingredients", (parsed.ingredients||[]).length ? parsed.ingredients : [{item:"",amount:""}]);
                  sf("steps", (parsed.steps||[]).length ? parsed.steps : [""]);
                  setMode("manual");
                } catch(err) {
                  setPhotoError(err.message||"Couldn't read recipe");
                  setMode(null);
                }
                setPhotoLoading(false);
                e.target.value="";
              }}/>
            </div>
          )}

          {/* URL import */}
          {mode==="url"&&!result&&(
            <div>
              {activeCompIds.length>0&&(
                <div style={{marginBottom:14}}>
                  <div style={{fontSize:11,color:T.muted,fontFamily:T.font,marginBottom:8,letterSpacing:"0.04em",textTransform:"uppercase"}}>Active this week — will be prioritized</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                    {activeCompIds.map(id=><span key={id} style={{fontSize:11,color:T.text,background:"#F5F5F3",border:`1px solid ${T.border}`,borderRadius:4,padding:"4px 8px",fontFamily:T.font}}>{COMPONENT_LIBRARY[id]?.name}</span>)}
                  </div>
                </div>
              )}
              <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://thewoksoflife.com/chow-fun" style={inputStyle}/>
              <button onClick={importFromUrl} disabled={!url.trim()||loading} style={{width:"100%",background:url.trim()&&!loading?T.text:"#ccc",color:"#fff",border:"none",borderRadius:100,padding:"0 16px 0 0",height:36,cursor:url.trim()&&!loading?"pointer":"default",fontSize:14,fontFamily:T.font,fontWeight:600,marginTop:4}}>
                {loading?"Adapting…":"Adapt & import"}
              </button>
              {error&&<div style={{fontSize:12,color:"#c0392b",marginTop:8,fontFamily:T.font}}>{error}</div>}
            </div>
          )}

          {/* URL result */}
          {mode==="url"&&result&&(
            <div>
              <div style={{fontSize:20,fontWeight:600,color:T.text,marginBottom:4,fontFamily:T.fontTitle}}>{result.title}</div>
              <div style={{fontSize:12,color:T.muted,marginBottom:14,fontFamily:T.font}}>{result.cuisine} · {result.cookTime} min active</div>
              {(result.groups||[]).map((g,i)=>(
                <div key={i} style={{marginBottom:10}}>
                  <div style={{fontSize:12,fontWeight:600,color:g.type==="component"?T.text:T.muted,fontFamily:T.font,marginBottom:4,letterSpacing:"0.03em"}}>
                    {g.label}{g.type==="component"&&<span style={{fontSize:11,color:T.muted,fontWeight:400,marginLeft:6}}>← {COMPONENT_LIBRARY[g.componentId]?.name||g.componentId}</span>}
                  </div>
                  {g.type==="component"&&(COMPONENT_LIBRARY[g.componentId]?.ingredients||[]).concat(g.extras||[]).map((ing,ii)=>(
                    <div key={ii} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${T.border}`,fontSize:12,color:T.text,fontFamily:T.font}}>
                      <span>{ing.item}</span><span style={{color:T.muted}}>{ing.amount}</span>
                    </div>
                  ))}
                  {g.type==="dish"&&(g.ingredients||[]).map((ing,ii)=>(
                    <div key={ii} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:`1px solid ${T.border}`,fontSize:12,color:T.text,fontFamily:T.font}}>
                      <span>{ing.item}</span><span style={{color:T.muted}}>{ing.amount}</span>
                    </div>
                  ))}
                </div>
              ))}
              <button onClick={()=>{onAdd(result);onClose();}} style={{width:"100%",background:T.text,color:"#fff",border:"none",borderRadius:100,padding:"0 16px 0 0",height:36,cursor:"pointer",fontSize:14,fontFamily:T.font,fontWeight:600,marginTop:8}}>
                Add to library
              </button>
            </div>
          )}

          {/* Manual entry */}
          {mode==="manual"&&(
            <div>
              <label style={labelStyle}>Title</label>
              <input value={form.title} onChange={e=>sf("title",e.target.value)} placeholder="My grandmother's bolognese" style={inputStyle}/>
              <div style={{display:"flex",gap:8}}>
                <div style={{flex:1}}><label style={labelStyle}>Cuisine</label><input value={form.cuisine} onChange={e=>sf("cuisine",e.target.value)} placeholder="Italian" style={inputStyle}/></div>
                <div style={{flex:1}}><label style={labelStyle}>Cook time (min)</label><input value={form.cookTime} onChange={e=>sf("cookTime",e.target.value)} type="number" placeholder="45" style={inputStyle}/></div>
              </div>
              <label style={labelStyle}>Source URL (optional)</label>
              <input value={form.sourceUrl} onChange={e=>sf("sourceUrl",e.target.value)} placeholder="https://…" style={inputStyle}/>

              <label style={labelStyle}>Ingredients</label>
              <div style={{display:"flex",gap:8,marginBottom:5}}>
                <span style={{flex:3,fontSize:11,color:T.muted,fontFamily:T.font,textTransform:"uppercase",letterSpacing:"0.04em"}}>Ingredient</span>
                <span style={{flex:2,fontSize:11,color:T.muted,fontFamily:T.font,textTransform:"uppercase",letterSpacing:"0.04em"}}>Amount</span>
                <span style={{width:20}}/>
              </div>
              {form.ingredients.map((ing,i)=>(
                <div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"center"}}>
                  <input value={ing.item} onChange={e=>sf("ingredients",form.ingredients.map((r,ri)=>ri===i?{...r,item:e.target.value}:r))} placeholder={["Garlic","Onion","Tomatoes"][i]||"Ingredient"} style={{...inputStyle,flex:3,marginBottom:0}}/>
                  <input value={ing.amount} onChange={e=>sf("ingredients",form.ingredients.map((r,ri)=>ri===i?{...r,amount:e.target.value}:r))} placeholder={["4 cloves","1 large","400g"][i]||"Amount"} style={{...inputStyle,flex:2,marginBottom:0}}/>
                  <button onClick={()=>sf("ingredients",form.ingredients.filter((_,ri)=>ri!==i))} style={{width:20,height:20,background:"none",border:"none",cursor:"pointer",color:T.text,fontSize:16,padding:0,flexShrink:0}}>×</button>
                </div>
              ))}
              <button onClick={()=>sf("ingredients",[...form.ingredients,{item:"",amount:""}])} style={{background:"none",border:`1px dashed ${T.border}`,borderRadius:100,padding:"0 16px 0 0",height:36,fontSize:12,fontFamily:T.font,color:T.muted,cursor:"pointer",marginBottom:16,width:"100%"}}>+ Add ingredient</button>

              <label style={labelStyle}>Instructions</label>
              {form.steps.map((step,i)=>(
                <div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:12,color:T.muted,fontWeight:600,fontFamily:T.font,width:22,paddingTop:10,flexShrink:0,textAlign:"center"}}>{String(i+1).padStart(2,"0")}</span>
                  <textarea value={step} onChange={e=>sf("steps",form.steps.map((s,si)=>si===i?e.target.value:s))} placeholder={["Sauté onion and garlic until soft.","Add tomatoes and simmer 15 min.","Season and serve."][i]||"Next step…"} rows={2} style={{...inputStyle,flex:1,resize:"vertical",lineHeight:1.5,marginBottom:0}}/>
                  <button onClick={()=>sf("steps",form.steps.filter((_,si)=>si!==i))} style={{width:20,height:20,background:"none",border:"none",cursor:"pointer",color:T.text,fontSize:16,padding:0,flexShrink:0,marginTop:8}}>×</button>
                </div>
              ))}
              <button onClick={()=>sf("steps",[...form.steps,""])} style={{background:"none",border:`1px dashed ${T.border}`,borderRadius:100,padding:"0 16px 0 0",height:36,fontSize:12,fontFamily:T.font,color:T.muted,cursor:"pointer",marginBottom:16,width:"100%"}}>+ Add step</button>

              <button onClick={saveManual} disabled={!form.title.trim()||!form.ingredients.some(i=>i.item.trim())} style={{width:"100%",background:form.title.trim()&&form.ingredients.some(i=>i.item.trim())?T.text:"#ccc",color:"#fff",border:"none",borderRadius:100,padding:"0 16px 0 0",height:36,cursor:"pointer",fontSize:14,fontFamily:T.font,fontWeight:600}}>Save recipe</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Dish Row ─────────────────────────────────────────────────────────────────
const DishRow = ({dish, inWeek, onToggleWeek, onClick}) => (
  <div style={{display:"flex",gap:16,alignItems:"center",padding:"16px 16px 16px 0",borderBottom:`1px solid ${T.border}`}}>
    {(()=>{
      const PHOTOS = {
        "chicken-tikka-masala":"photo-1603894584373-5ac82b2ae398",
        "shakshuka":"photo-1582169505937-b9992bd01ed9",
        "butter-chicken":"photo-1565557623262-b51c2513a641",
        "chow-fun":"photo-1569718212165-3a8278d5f624",
        "miso-salmon":"photo-1519708227418-c8fd9a32b7a2",
        "herb-chicken":"photo-1598103442097-8b74394b95c2",
        "coconut-curry":"photo-1455619452474-d2be8b1e70cd",
        "dan-dan-noodles":"photo-1569718212165-3a8278d5f624",
        "mushroom-risotto":"photo-1476124369491-e7addf5db371",
        "lamb-chops":"photo-1558030006-450675393462",
        "grain-bowl":"photo-1512621776951-a57141f2eefd",
        "pad-thai":"photo-1559314809-0d155014e29e",
        "cacio-e-pepe":"photo-1621996346565-e3dbc646d9a9",
        "french-onion-soup":"photo-1547592180-85f173990554",
        "roast-chicken":"photo-1598103442097-8b74394b95c2",
        "mapo-tofu":"photo-1569718212165-3a8278d5f624",
        "pasta-pomodoro":"photo-1621996346565-e3dbc646d9a9",
        "chicken-shawarma":"photo-1593560708920-61dd98c46a4e",
        "fried-rice":"photo-1603133872878-684f208fb84b",
        "baked-ziti":"photo-1621996346565-e3dbc646d9a9",
        "beef-bulgogi":"photo-1558030006-450675393462",
        "green-goddess-salad":"photo-1512621776951-a57141f2eefd",
        "bibimbap":"photo-1590301157890-4810ed352733",
        "carbonara":"photo-1621996346565-e3dbc646d9a9",
        "dal-makhani":"photo-1565557623262-b51c2513a641",
        "pho-bo":"photo-1557872943-16a5ac26437e",
        "chicken-larb":"photo-1455619452474-d2be8b1e70cd",
        "lamb-kofta":"photo-1536489897308-8b4c8e0b0b6a",
        "vegetable-soup":"photo-1547592180-85f173990554",
        "teriyaki-salmon":"photo-1519708227418-c8fd9a32b7a2",
        "braised-short-ribs":"photo-1558030006-450675393462",
      };
      const photoId = PHOTOS[dish.id];
      const imgSrc = dish.image || (photoId ? `https://images.unsplash.com/${photoId}?w=160&h=160&fit=crop&crop=center&auto=format` : null);
      return (
        <div onClick={onClick} style={{width:80,height:80,borderRadius:8,flexShrink:0,cursor:"pointer",overflow:"hidden",position:"relative"}}>
          {(()=>{
            // Tomine palette: flat graphic novel tones — dusty rose, slate blue, pale yellow, sage, terracotta, lavender, bone, teal, denim, rust
            const PALETTE = ["#E8B4A0","#C97B6A","#8C4A40","#A8C0CC","#6A8FA0","#3A5F70","#D8D4B0","#B0A870","#7A7048","#B8C4A8","#7A9870","#445840","#D4C4C0","#A88890","#6A5060","#E0D4B8","#C0A868","#805830","#B4C8C8","#5A8888"];
            // Deterministic index from dish id
            const h = (dish.id||"x").split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
            const c1 = PALETTE[Math.abs(h)%20];
            const c2 = PALETTE[Math.abs(h*3+7)%20];
            const c3 = PALETTE[Math.abs(h*7+13)%20];
            const p1x = Math.abs(h*11)%80, p1y = Math.abs(h*17)%80;
            const p2x = Math.abs(h*13)%80, p2y = Math.abs(h*19)%80;
            const p3x = Math.abs(h*23)%80, p3y = Math.abs(h*29)%80;
            return (
              <>
                <div style={{position:"absolute",inset:0,background:c3}}/>
                <div style={{position:"absolute",width:70,height:70,borderRadius:"50%",background:c1,filter:"blur(18px)",top:p1y-20,left:p1x-20,opacity:0.85}}/>
                <div style={{position:"absolute",width:60,height:60,borderRadius:"50%",background:c2,filter:"blur(14px)",top:p2y-10,left:p2x-10,opacity:0.75}}/>
                <div style={{position:"absolute",width:50,height:50,borderRadius:"50%",background:c3,filter:"blur(12px)",top:p3y-5,left:p3x-5,opacity:0.65}}/>
                {imgSrc&&<img src={imgSrc} alt={dish.title} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={e=>{e.currentTarget.style.display="none";}}/>}
              </>
            );
          })()}
        </div>
      );
    })()}
    <div onClick={onClick} style={{flex:1,minWidth:0,cursor:"pointer"}}>
      <div style={{fontSize:14,fontWeight:600,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontFamily:T.font}}>{dish.title}</div>
      {dish.sourceUrl&&<div style={{fontSize:12,color:T.muted,marginTop:0,fontFamily:T.font}}>{sourceName(dish.sourceUrl)}</div>}
      <div style={{fontSize:12,color:T.muted,marginTop:0,fontFamily:T.font,display:"flex",alignItems:"center",gap:8}}><ClockIcon/>{dish.cookTime} min</div>
    </div>
    <button onClick={()=>onToggleWeek(dish.id)} style={{border:`1.5px solid ${T.text}`,borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,padding:0,transition:"all 0.2s ease",color:inWeek?"#fff":T.text,background:inWeek?T.text:"transparent"}}>
      {inWeek?<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
    </button>
  </div>
);

// ─── Dish Detail ──────────────────────────────────────────────────────────────
const DishDetail = ({dish, inWeek, onBack, onToggleWeek, weekDishIds, allDishes, onShowOriginal, onShowToast, onTagSelect}) => {
  const [checked, setChecked] = useState({});
  const ck = k => setChecked(p=>({...p,[k]:!p[k]}));
  const [notes, setNotes] = useState(dish.notes||"");
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [view, setView] = useState("ingredients");

  const activeCompIds = new Set(
    allDishes.filter(d=>weekDishIds.includes(d.id))
      .flatMap(d=>(d.groups||[]).filter(g=>g.type==="component").map(g=>g.componentId))
  );
  const hasOriginal = dish.original?.ingredients?.length > 0;

  return (
    <div style={{height:"100%",background:"#fff",fontFamily:T.font,overflowY:"auto",position:"relative"}} onScroll={e=>setScrollY(e.currentTarget.scrollTop)}>

      {/* Cook this week pill — top right */}
      <div style={{position:"fixed",top:0,right:0,zIndex:120,pointerEvents:"none",padding:"16px 16px 0 0"}}>
        <button onClick={()=>{if(!inWeek&&onShowToast)onShowToast(dish);onToggleWeek(dish.id);}} style={{pointerEvents:"all",background:inWeek?"rgba(0,51,160,0.9)":"rgba(255,255,255,0.85)",color:inWeek?"#fff":T.text,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",borderRadius:100,padding:"0 16px",height:36,cursor:"pointer",fontSize:12,fontFamily:T.font,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.12)",transition:"all 0.2s ease"}}>
          {inWeek?"✓ This week":"Cook this week"}
        </button>
      </div>

      {/* Hero photo — touches top, floats header over it */}
      {(()=>{
        const PHOTOS = {"chicken-tikka-masala":"photo-1603894584373-5ac82b2ae398","shakshuka":"photo-1582169505937-b9992bd01ed9","butter-chicken":"photo-1565557623262-b51c2513a641","chow-fun":"photo-1569718212165-3a8278d5f624","miso-salmon":"photo-1519708227418-c8fd9a32b7a2","herb-chicken":"photo-1598103442097-8b74394b95c2","coconut-curry":"photo-1455619452474-d2be8b1e70cd","dan-dan-noodles":"photo-1569718212165-3a8278d5f624","mushroom-risotto":"photo-1476124369491-e7addf5db371","lamb-chops":"photo-1558030006-450675393462","grain-bowl":"photo-1512621776951-a57141f2eefd","pad-thai":"photo-1559314809-0d155014e29e","cacio-e-pepe":"photo-1621996346565-e3dbc646d9a9","french-onion-soup":"photo-1547592180-85f173990554","roast-chicken":"photo-1598103442097-8b74394b95c2","mapo-tofu":"photo-1569718212165-3a8278d5f624","pasta-pomodoro":"photo-1621996346565-e3dbc646d9a9","chicken-shawarma":"photo-1593560708920-61dd98c46a4e","fried-rice":"photo-1603133872878-684f208fb84b","baked-ziti":"photo-1621996346565-e3dbc646d9a9","beef-bulgogi":"photo-1558030006-450675393462","green-goddess-salad":"photo-1512621776951-a57141f2eefd","bibimbap":"photo-1590301157890-4810ed352733","carbonara":"photo-1621996346565-e3dbc646d9a9","dal-makhani":"photo-1565557623262-b51c2513a641","pho-bo":"photo-1557872943-16a5ac26437e","chicken-larb":"photo-1455619452474-d2be8b1e70cd","lamb-kofta":"photo-1558030006-450675393462","vegetable-soup":"photo-1547592180-85f173990554","teriyaki-salmon":"photo-1519708227418-c8fd9a32b7a2","braised-short-ribs":"photo-1558030006-450675393462"};
        const photoId = PHOTOS[dish.id];
        const heroSrc = dish.image || (photoId ? `https://images.unsplash.com/${photoId}?w=480&h=400&fit=crop&crop=center&auto=format` : null);
        const PALETTE = ["#E8B4A0","#C97B6A","#8C4A40","#A8C0CC","#6A8FA0","#3A5F70","#D8D4B0","#B0A870","#7A7048","#B8C4A8","#7A9870","#445840","#D4C4C0","#A88890","#6A5060","#E0D4B8","#C0A868","#805830","#B4C8C8","#5A8888"];
        const h = (dish.id||"x").split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
        const c1 = PALETTE[Math.abs(h)%20];
        const c2 = PALETTE[Math.abs(h*3+7)%20];
        const c3 = PALETTE[Math.abs(h*7+13)%20];
        return (
          <div style={{position:"relative",aspectRatio:"3/2",overflow:"hidden",background:c3}}>
            <div style={{position:"absolute",inset:0,transform:`translateY(${scrollY*0.4}px)`,willChange:"transform"}}>
              <div style={{position:"absolute",width:320,height:320,borderRadius:"50%",background:c1,filter:"blur(80px)",top:-80,left:-60,opacity:0.9}}/>
              <div style={{position:"absolute",width:280,height:280,borderRadius:"50%",background:c2,filter:"blur(64px)",top:60,right:-60,opacity:0.8}}/>
              <div style={{position:"absolute",width:240,height:240,borderRadius:"50%",background:c3,filter:"blur(56px)",bottom:-80,left:"20%",opacity:0.7}}/>
              {heroSrc&&<img src={heroSrc} alt="" aria-label={dish.title} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}} onError={e=>{e.currentTarget.style.display="none";}}/>}
            </div>
          </div>
        );
      })()}

      {/* Meta */}
      <div style={{padding:"16px 16px 16px 0"}}>
        {/* Recipe type label */}
        <div style={{fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.text,fontFamily:T.font,marginBottom:6,fontWeight:400}}>
          {dish.original?.ingredients?.length>0?"Adapted recipe":"Original recipe"}
        </div>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:8}}>
          <div style={{fontSize:32,fontWeight:600,color:T.text,lineHeight:1.15,letterSpacing:"-0.01em",fontFamily:T.fontTitle,flex:1}}>{dish.title}</div>
          <div style={{display:"flex",gap:8,flexShrink:0,paddingTop:0}}>
            <button style={{width:36,height:36,borderRadius:"50%",border:`1.5px solid ${T.text}`,background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            <button style={{width:36,height:36,borderRadius:"50%",border:`1.5px solid ${T.text}`,background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill={T.text} stroke="none"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
            </button>
          </div>
        </div>
        <div style={{fontSize:12,color:T.muted,display:"flex",gap:16,marginBottom:8}}>
          <span>{dish.cuisine}</span>
          <span style={{display:"flex",alignItems:"center",gap:4}}><ClockIcon/>{dish.cookTime} min</span>
          <span>{dish.servings} servings</span>
        </div>
        {dish.sourceUrl&&(
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            {/* Source logo placeholder circle */}
            <div style={{width:24,height:24,borderRadius:"50%",background:T.border,flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontSize:11,color:T.muted,fontFamily:T.font,fontWeight:600,letterSpacing:"0.02em"}}>
                {sourceName(dish.sourceUrl)?.slice(0,2).toUpperCase()}
              </span>
            </div>
            <span style={{fontSize:12,color:T.muted,fontFamily:T.font}}>{sourceName(dish.sourceUrl)||dish.sourceTitle}</span>
          </div>
        )}
      </div>
      {/* Tab bar — matching week page style */}
      <div style={{position:"sticky",top:0,zIndex:10,background:"#fff",borderBottom:`1px solid ${T.border}`,padding:"0 16px 0 0",display:"flex",gap:8}}>
        {[{id:"ingredients",label:"Ingredients"},{id:"instructions",label:"Instructions"}].map(t=>(
          <button key={t.id} onClick={()=>setView(t.id)} style={{flex:1,padding:"14px 0",background:"none",border:"none",borderBottom:`2px solid ${view===t.id?T.accent:"transparent"}`,color:view===t.id?T.accent:T.muted,fontSize:12,fontFamily:T.font,fontWeight:view===t.id?600:400,cursor:"pointer",transition:"color 0.2s ease",textAlign:"left"}}>{t.label}</button>
        ))}
      </div>

      {/* ── Ingredients view ── */}
      {view==="ingredients"&&(
        <div style={{padding:"24px 16px 24px 0"}}>
          {(dish.groups||[]).map((group,gi)=>{
            const gk="g"+gi;
            const gChecked=!!checked[gk];
            const comp = group.type==="component" ? COMPONENT_LIBRARY[group.componentId] : null;
            const isShared = comp && inWeek && activeCompIds.has(group.componentId);
            const heading = group.label || comp?.name || "Ingredients";
            const compIngs = comp?.ingredients||[];
            const extraIngs = group.extras||[];
            const dishIngs = group.ingredients||[];

            return (
              <div key={gi} style={{marginBottom:8}}>
                {/* Group header */}
                <div onClick={()=>ck(gk)} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"12px 0",borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                  <Ck checked={gChecked} onClick={()=>ck(gk)}/>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontSize:14,fontWeight:600,color:gChecked?T.faint:T.text,textDecoration:gChecked?"line-through":"none",fontFamily:T.font}}>{heading}</span>
                      {isShared&&<span style={{fontSize:11,color:T.surface,background:T.muted,borderRadius:4,padding:"2px 8px",letterSpacing:"0.04em",textTransform:"uppercase",fontFamily:T.font}}>prepped</span>}
                    </div>
                    {group.note&&<div style={{fontSize:12,color:T.muted,marginTop:0,fontFamily:T.font}}>{group.note}</div>}
                  </div>
                </div>

                {/* Sub-ingredients */}
                <div style={{paddingLeft:40}}>
                  {group.type==="component"&&(
                    <>
                      {compIngs.map((ing,ii)=>{
                        const k=gk+"c"+ii; const kChecked=!!checked[k];
                        return(
                          <div key={ii} onClick={()=>ck(k)} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"8px 0",minHeight:40,borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                            <Ck checked={kChecked} onClick={()=>ck(k)}/>
                            <span style={{flex:1,fontSize:14,color:kChecked?T.faint:isShared?T.muted:T.text,textDecoration:kChecked?"line-through":"none",fontFamily:T.font}}>{ing.item}{ing.note?<span style={{color:T.text,fontSize:12}}> — {ing.note}</span>:""}</span>
                            <span style={{fontSize:12,color:T.muted,fontFamily:T.font,flexShrink:0}}>{ing.amount}</span>
                          </div>
                        );
                      })}
                      {extraIngs.map((ing,ii)=>{
                        const k=gk+"e"+ii; const kChecked=!!checked[k];
                        return(
                          <div key={ii} onClick={()=>ck(k)} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"8px 0",minHeight:40,borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                            <Ck checked={kChecked} onClick={()=>ck(k)}/>
                            <span style={{flex:1,fontSize:14,color:kChecked?T.faint:T.text,textDecoration:kChecked?"line-through":"none",fontFamily:T.font}}>{ing.item}{ing.note?<span style={{color:T.text,fontSize:12}}> — {ing.note}</span>:""}</span>
                            <span style={{fontSize:12,color:T.muted,fontFamily:T.font,flexShrink:0}}>{ing.amount}</span>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {group.type==="dish"&&dishIngs.map((ing,ii)=>{
                    const k=gk+"d"+ii; const kChecked=!!checked[k];
                    return(
                      <div key={ii} onClick={()=>ck(k)} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"8px 0",minHeight:40,borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                        <Ck checked={kChecked} onClick={()=>ck(k)}/>
                        <span style={{flex:1,fontSize:14,color:kChecked?T.faint:T.text,textDecoration:kChecked?"line-through":"none",fontFamily:T.font}}>{ing.item}{ing.note?<span style={{color:T.text,fontSize:12}}> — {ing.note}</span>:""}</span>
                        <span style={{fontSize:12,color:T.muted,fontFamily:T.font,flexShrink:0}}>{ing.amount}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      )}

      {/* ── Instructions view ── */}
      {view==="instructions"&&(
        <div style={{padding:"24px 16px 24px 0"}}>
          {/* Base instructions — shown for cooks who want to cook inline */}
          {(dish.groups||[]).filter(g=>g.type==="component"&&COMPONENT_LIBRARY[g.componentId]?.instructions?.length).map((g,gi)=>{
            const comp = COMPONENT_LIBRARY[g.componentId];
            return (
              <div key={gi} style={{marginBottom:28}}>
                <div style={{fontSize:12,fontWeight:600,color:T.text,fontFamily:T.font,marginBottom:10}}>{comp.name}</div>
                {comp.instructions.map((step,i)=>(
                  <div key={i} style={{display:"flex",gap:16,marginBottom:16}}>
                    <span style={{fontSize:12,color:T.muted,fontWeight:600,width:18,flexShrink:0,paddingTop:2,textAlign:"center"}}>{String(i+1).padStart(2,"0")}</span>
                    <p style={{fontSize:14,color:T.text,lineHeight:1.7,margin:0,flex:1}}>{step}</p>
                  </div>
                ))}
              </div>
            );
          })}
          {/* Dish steps */}
          {(dish.groups||[]).some(g=>g.type==="component"&&COMPONENT_LIBRARY[g.componentId]?.instructions?.length)&&dish.steps?.length>0&&(
            <div style={{fontSize:12,fontWeight:600,color:T.text,fontFamily:T.font,marginBottom:10}}>Finishing the dish</div>
          )}
          {(dish.steps||[]).map((step,i)=>(
            <div key={i} style={{display:"flex",gap:16,marginBottom:20}}>
              <span style={{fontSize:12,color:T.muted,fontWeight:600,width:18,flexShrink:0,paddingTop:2,textAlign:"center"}}>{String(i+1).padStart(2,"0")}</span>
              <p style={{fontSize:14,color:T.text,lineHeight:1.7,margin:0,flex:1}}>{step}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── Original view ── */}

      {/* Notes */}
      <div style={{padding:"28px 16px 80px 0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
          <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,fontWeight:600}}>Notes</div>
          <div style={{display:"flex",gap:8}}>
            {!editing&&<button onClick={()=>{setDraft(notes);setEditing(true);}} style={{background:"none",border:"none",fontSize:12,color:T.accent,cursor:"pointer",fontFamily:T.font,fontWeight:400,padding:0}}>Edit</button>}
            {editing&&<><button onClick={()=>setEditing(false)} style={{background:"none",border:"none",fontSize:12,color:T.muted,cursor:"pointer",fontFamily:T.font,padding:0}}>Cancel</button><button onClick={()=>{setNotes(draft);setEditing(false);}} style={{background:"none",border:"none",fontSize:12,color:T.accent,cursor:"pointer",fontFamily:T.font,fontWeight:600,padding:0}}>Save</button></>}
          </div>
        </div>
        {editing?<textarea value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Notes…" style={{width:"100%",boxSizing:"border-box",minHeight:80,border:`1px solid ${T.border}`,borderRadius:8,padding:"10px 12px",fontSize:14,fontFamily:T.font,color:T.text,resize:"vertical",outline:"none",lineHeight:1.6}}/>:notes?<p style={{fontSize:14,color:T.text,lineHeight:1.7,margin:0}}>{notes}</p>:<p style={{fontSize:14,color:T.text,margin:0,fontStyle:"italic"}}>No notes yet.</p>}
        {(dish.original?.ingredients?.length>0||dish.original?.steps?.length>0)&&(
          <button onClick={onShowOriginal} style={{display:"block",width:"100%",marginTop:24,border:`1px solid ${T.border}`,borderRadius:100,padding:"0 16px 0 0",height:36,fontSize:12,fontFamily:T.font,color:T.text,background:"none",cursor:"pointer",textAlign:"center"}}>
            View original recipe{dish.sourceUrl?` from ${sourceName(dish.sourceUrl)||dish.sourceTitle}`:""}
          </button>
        )}
      </div>
        {/* Tags */}
        {(()=>{
          const dishTags = TAGS.filter(t=>t.match(dish));
          if(!dishTags.length) return null;
          return (
            <div style={{marginTop:20}}>
              <div style={{fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.muted,fontWeight:600,marginBottom:8}}>Tags</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {dishTags.map(t=>(
                  <TagChip key={t.label} label={t.label} active={false} onClick={()=>onTagSelect&&onTagSelect(t.label)}/>
                ))}
              </div>
            </div>
          );
        })()}


    </div>
  );
};

// ─── Tag system ───────────────────────────────────────────────────────────────
const TAGS = [
  {label:"Vegetarian", match: d => !(d.groups||[]).some(g=>(g.ingredients||[]).concat(g.extras||[]).some(i=>/chicken|beef|pork|lamb|turkey|duck|salmon|shrimp|prawn|fish|anchovy|sausage|pancetta|bacon|chorizo|prosciutto/i.test(i.item))) && !/(chicken|beef|pork|lamb|turkey|duck|salmon|shrimp|fish)/i.test(d.cuisine)},
  {label:"Chicken", match: d => /chicken/i.test(JSON.stringify(d.groups||[]))},
  {label:"Beef", match: d => /beef|steak|brisket|bulgogi|short rib/i.test(JSON.stringify(d.groups||[]))},
  {label:"Pork", match: d => /pork|bacon|pancetta|chorizo|char siu|ham/i.test(JSON.stringify(d.groups||[]))},
  {label:"Seafood", match: d => /salmon|shrimp|prawn|fish|seafood|cod|tuna/i.test(JSON.stringify(d.groups||[]))},
  {label:"Pasta", match: d => /pasta|noodle|spaghetti|penne|rigatoni|carbonara|cacio/i.test(JSON.stringify(d))},
  {label:"Soup", match: d => /soup|broth|congee|pho|ramen|ribollita/i.test(JSON.stringify(d))},
  {label:"Rice", match: d => /rice|risotto|bibimbap|fried rice|congee/i.test(JSON.stringify(d))},
  {label:"Quick", match: d => (d.cookTime||60) <= 20},
  {label:"Italian", match: d => /italian/i.test(d.cuisine)},
  {label:"Asian", match: d => /chinese|japanese|korean|thai|vietnamese|singaporean|cantonese|sichuan|indonesian/i.test(d.cuisine)},
  {label:"Indian", match: d => /indian/i.test(d.cuisine)},
  {label:"Middle Eastern", match: d => /middle eastern|lebanese|persian|turkish/i.test(d.cuisine)},
  {label:"Mexican", match: d => /mexican/i.test(d.cuisine)},
  {label:"American", match: d => /american/i.test(d.cuisine)},
];

const TagChip = ({label, active, onClick}) => (
  <button onClick={onClick} style={{
    padding:"6px 12px", borderRadius:100,
    border:`1px solid ${active?"#0033A0":"rgba(0,51,160,0.2)"}`,
    background:active?"#0033A0":"transparent",
    color:active?"#fff":"rgba(0,51,160,0.7)",
    fontSize:11, fontFamily:"'Poppins', sans-serif",
    fontWeight:active?600:400,
    cursor:"pointer", whiteSpace:"nowrap",
    transition:"all 0.15s ease",
    flexShrink:0,
  }}>{label}</button>
);

// ─── Recipes Tab ──────────────────────────────────────────────────────────────
const SORT_OPTIONS = [
  {id:"recent", label:"Recent"},
  {id:"alpha",  label:"A–Z"},
  {id:"time",   label:"Cook time"},
];

const RecipesTab = ({weekDishIds, onToggleWeek, onViewDish, dishes, initialTag, onTagApplied}) => {
  const [search, setSearch] = useState("");
  const [sort, setSort]     = useState("recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [activeTag, setActiveTag] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const inputRef = useRef(null);
  useEffect(()=>{if(initialTag){setActiveTag(initialTag);if(onTagApplied)onTagApplied();}}, [initialTag]);
  const [shown, setShown]   = useState(true);
  const lastY = useRef(0);

  const activeTagObj = TAGS.find(t=>t.label===activeTag);
  const filtered = dishes
    .filter(d=>(!search||d.title.toLowerCase().includes(search.toLowerCase())||d.cuisine.toLowerCase().includes(search.toLowerCase()))&&(!activeTagObj||activeTagObj.match(d)))
    .slice()
    .sort((a,b)=>{
      if(sort==="alpha")  return a.title.localeCompare(b.title);
      if(sort==="time")   return (a.cookTime||0)-(b.cookTime||0);
      return 0;
    });

  const sortLabel = SORT_OPTIONS.find(o=>o.id===sort)?.label||"Sort";

  const onScroll = (e) => {
    if(inputRef.current) inputRef.current.blur();
    const y = e.currentTarget.scrollTop;
    const dy = y - lastY.current;
    if(dy > 8 && y > 60) setShown(false);
    else if(dy < -8) setShown(true);
    lastY.current = y;
  };

  return (
    <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"}} onScroll={onScroll} onClick={(e)=>{if(e.target!==inputRef.current&&inputRef.current)inputRef.current.blur();}}>
      {/* Sticky search + sort button */}
      <div style={{position:"sticky",top:0,zIndex:10,background:T.surface,borderBottom:`1px solid ${T.border}`,transition:"transform 0.28s cubic-bezier(0.4,0,0.2,1)",transform:shown?"translateY(0)":"translateY(-110%)",padding:"12px 16px 12px 0"}}>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <div style={{position:"relative",flex:1}}>
            <svg style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)",color:T.text}} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input ref={inputRef} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search dishes…" onFocus={()=>setSearchFocused(true)} onBlur={()=>setTimeout(()=>setSearchFocused(false),150)} style={{width:"100%",border:`1px solid ${T.border}`,borderRadius:100,padding:"0 32px 0 32px",fontSize:16,fontFamily:T.font,color:T.text,background:"#fff",outline:"none",height:36,boxSizing:"border-box"}}/>
            {(searchFocused||search||activeTag)&&(
              <button onMouseDown={e=>{e.preventDefault();setSearch("");setActiveTag(null);setSearchFocused(false);}} style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:2,display:"flex",alignItems:"center",justifyContent:"center",color:T.muted}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            )}
          </div>
          <button onClick={()=>setSortOpen(true)} style={{display:"flex",alignItems:"center",gap:4,padding:"0 12px",height:36,borderRadius:100,border:`1px solid ${sort!=="recent"?T.text:T.border}`,background:sort!=="recent"?T.text:"transparent",color:sort!=="recent"?"#fff":T.text,fontSize:12,fontFamily:T.font,fontWeight:500,cursor:"pointer",flexShrink:0,transition:"all 0.15s ease"}}>
            {sortLabel}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        </div>
        {/* Tag chips — inside sticky header, two wrapping rows */}
        {(searchFocused||search||activeTag)&&(
          <div style={{
            display:"flex",flexWrap:"wrap",gap:6,
            padding:"8px 16px 8px 0",
            maxHeight:"80px",overflow:"hidden",
          }}>
            {TAGS.map(t=>(
              <TagChip key={t.label} label={t.label} active={activeTag===t.label} onClick={()=>{setActiveTag(activeTag===t.label?null:t.label);}}/>
            ))}
          </div>
        )}
      </div>
      <div style={{padding:"4px 16px 8px 0",fontSize:12,color:T.muted}}>{filtered.length} dish{filtered.length!==1?"es":""}</div>
      {filtered.map(d=><DishRow key={d.id} dish={d} inWeek={weekDishIds.includes(d.id)} onToggleWeek={onToggleWeek} onClick={()=>onViewDish(d)}/>)}
      <div style={{height:140}}/>

      {/* Sort sheet */}
      {sortOpen&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,51,160,0.25)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}} onClick={()=>setSortOpen(false)}>
          <div onClick={e=>e.stopPropagation()} style={{background:T.surface,width:"100%",maxWidth:680,borderRadius:"16px 16px 0 0",paddingBottom:"env(safe-area-inset-bottom,0px)",animation:"slideUp 0.35s cubic-bezier(0.32,0.72,0,1)"}}>
            <div style={{width:36,height:4,borderRadius:100,background:T.border,margin:"12px auto 8px"}}/>
            <div style={{padding:"8px 24px 4px 0",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.muted,fontWeight:600}}>Sort by</div>
            {SORT_OPTIONS.map(o=>(
              <button key={o.id} onClick={()=>{setSort(o.id);setSortOpen(false);}} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"16px 24px 16px 0",background:"none",border:"none",borderTop:`1px solid ${T.border}`,cursor:"pointer",fontFamily:T.font,fontSize:14,color:T.text,textAlign:"left"}}>
                {o.label}
                {sort===o.id&&<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </button>
            ))}
            <div style={{height:16}}/>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── This Week Tab ────────────────────────────────────────────────────────────
const ThisWeekTab = ({weekDishIds, setWeekDishIds, onViewDish, dishes}) => {
  const [subTab, setSubTab] = useState("dishes");
  const scrollRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({});
  const ckItem = k => setCheckedItems(p=>({...p,[k]:!p[k]}));

  const weekDishes = dishes.filter(d=>weekDishIds.includes(d.id));
  const prepPlan = buildPrepPlan(weekDishIds, dishes);
  const {compItems, dishItems} = buildShoppingList(weekDishIds, dishes);
  const sharedIngs = findSharedIngredients(weekDishIds, dishes);
  const activeCompIds = new Set(weekDishes.flatMap(d=>(d.groups||[]).filter(g=>g.type==="component").map(g=>g.componentId)));

  // Build a shared ingredient set from week dishes (dish-specific ingredients)
  const weekIngredients = new Set(
    weekDishes.flatMap(d=>(d.groups||[]).filter(g=>g.type==="dish")
      .flatMap(g=>(g.ingredients||[]).map(i=>i.item.toLowerCase())))
  );
  const weekCuisines = weekDishes.map(d=>d.cuisine);

  const suggestions = weekDishes.length>0 ? (() => {
    const scored = dishes
      .filter(d=>!weekDishIds.includes(d.id))
      .map(d=>{
        const compOverlap = (d.groups||[]).filter(g=>g.type==="component"&&activeCompIds.has(g.componentId)).length;
        const ingOverlap = (d.groups||[]).filter(g=>g.type==="dish")
          .flatMap(g=>(g.ingredients||[]).map(i=>i.item.toLowerCase()))
          .filter(i=>weekIngredients.has(i)).length;
        // Penalize same cuisine as already-added dishes
        const cuisinePenalty = weekCuisines.filter(c=>c===d.cuisine).length * 2;
        const score = compOverlap * 3 + Math.min(ingOverlap, 3) - cuisinePenalty;
        return {d, score, compOverlap, ingOverlap};
      })
      .filter(({score})=>score>0)
      .sort((a,b)=>b.score-a.score);
    // Enforce cuisine variety — at most 2 of same cuisine in suggestions
    const seen = {}; const result = [];
    for(const item of scored) {
      const c = item.d.cuisine;
      if((seen[c]||0) >= 2) continue;
      seen[c] = (seen[c]||0) + 1;
      result.push(item);
      if(result.length >= 6) break;
    }
    return result;
  })() : [];

  // ── Build themed groups of 3 dishes by shared components ──────────────────
  const buildGroups = () => {
    const used = new Set();
    const groups = [];
    // Score all dish pairs by component overlap
    const allDishList = dishes.filter(d=>!weekDishIds.includes(d.id));
    // Try to form groups of 3 with maximum shared components and cuisine variety
    const getCompIds = d => new Set((d.groups||[]).filter(g=>g.type==="component").map(g=>g.componentId));
    const overlap = (a,b) => [...getCompIds(a)].filter(id=>getCompIds(b).has(id)).length;
    // Get all dish-specific ingredients for a dish
    const getDishIngs = d => new Set((d.groups||[]).filter(g=>g.type==="dish")
      .flatMap(g=>(g.ingredients||[]).map(i=>i.item.toLowerCase())));

    const trioScore = (trio) => {
      const compIds = trio.map(getCompIds);
      const commonComps = [...compIds[0]].filter(id=>compIds[1].has(id)&&compIds[2].has(id)).length;
      const pairCompOverlap = (
        [...compIds[0]].filter(id=>compIds[1].has(id)).length +
        [...compIds[0]].filter(id=>compIds[2].has(id)).length +
        [...compIds[1]].filter(id=>compIds[2].has(id)).length
      );
      // Shared dish ingredients (e.g. garlic, ginger) across pairs
      const ings = trio.map(getDishIngs);
      const ingOverlap = (
        [...ings[0]].filter(i=>ings[1].has(i)).length +
        [...ings[0]].filter(i=>ings[2].has(i)).length +
        [...ings[1]].filter(i=>ings[2].has(i)).length
      );
      const uniqueCuisines = new Set(trio.map(d=>d.cuisine)).size;
      // Heavily penalise all-same-cuisine trios
      const cuisinePenalty = uniqueCuisines === 1 ? 8 : uniqueCuisines === 2 ? 2 : 0;
      return commonComps * 5 + pairCompOverlap * 2 + Math.min(ingOverlap, 4) + uniqueCuisines * 3 - cuisinePenalty;
    };
    // Theme names based on dominant shared component
    const themeFor = (trio) => {
      const counts = {};
      trio.forEach(d=>[...getCompIds(d)].forEach(id=>{counts[id]=(counts[id]||0)+1;}));
      const top = Object.entries(counts).sort(([,a],[,b])=>b-a)[0]?.[0];
      const cuisines = [...new Set(trio.map(d=>d.cuisine))];
      const themesByCuisine = {
        "Italian":"La Cucina","Italian-American":"Sunday Gravy","French":"Bistro Night",
        "Japanese":"Tokyo Table","Chinese":"Wok Night","Cantonese":"Dim Sum Energy",
        "Sichuan":"Fire and Numbing","Korean":"Banchan Week","Thai":"Bangkok Kitchen",
        "Indian":"Curry Night","Vietnamese":"Pho Real","Middle Eastern":"The Mezze",
        "Mediterranean":"Sun-Drenched","American":"Back Pocket Classics",
      };
      if(cuisines.length===1&&themesByCuisine[cuisines[0]]) return themesByCuisine[cuisines[0]];
      const themes = {
        "aromatic-base":"Built from the Base",
        "tomato-base":"Everything Tomato",
        "soy-ginger-base":"The Umami Thread",
        "chili-oil":"For the Heat Lovers",
        "herb-garlic-oil":"Olive Oil and Patience",
        "miso-glaze":"Deep and Savory",
        "citrus-acid":"Acidic and Alive",
        "tahini-sauce":"The Tahini Arc",
        "soffritto":"Low and Slow Sunday",
        "coconut-curry-base":"Creamy and Bright",
        "warm-spice-blend":"Warming the Kitchen",
        "caramelized-onions":"Worth the Wait",
      };
      return themes[top] || "A Week Worth Cooking";
    };

    // Shuffle available dishes to randomize groups each render
    const shuffle = (arr) => {
      const a = [...arr];
      for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
      return a;
    };
    const shuffled = shuffle(allDishList);
    const maxGroups = 9;
    for(let attempt=0; attempt<60&&groups.length<maxGroups; attempt++) {
      const avail = shuffled.filter(d=>!used.has(d.id));
      if(avail.length < 3) break;
      let best = null, bestScore = -Infinity;
      // Sample random trios rather than exhaustive search for speed + variety
      const tries = Math.min(80, avail.length*(avail.length-1)/2);
      for(let t=0;t<tries;t++) {
        const i=Math.floor(Math.random()*avail.length);
        let j=Math.floor(Math.random()*(avail.length-1)); if(j>=i)j++;
        let k=Math.floor(Math.random()*(avail.length-2));
        const idxs=[i,j,k].sort((a,b)=>a-b);
        if(idxs[2]>=avail.length||new Set(idxs).size<3) continue;
        const trio=[avail[idxs[0]],avail[idxs[1]],avail[idxs[2]]];
        const sc=trioScore(trio);
        if(sc>bestScore){bestScore=sc;best=trio;}
      }
      if(!best||bestScore<0) break;
      best.forEach(d=>used.add(d.id));
      groups.push({dishes:best, theme:themeFor(best), sharedComps:[...new Set(best.flatMap(d=>[...getCompIds(d)]))]
        .filter(id=>best.every(d=>getCompIds(d).has(id))).map(id=>COMPONENT_LIBRARY[id]?.name).filter(Boolean)});
    }
    return groups;
  };
  const recGroups = buildGroups();

  return (
    <div ref={scrollRef} style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",background:"#fff"}}>
      <div style={{position:"sticky",top:0,zIndex:10,background:"#fff",borderBottom:`1px solid ${T.border}`,padding:"0 16px 0 0",display:"flex",flexShrink:0,gap:8}}>
        {[{id:"dishes",label:"Recipes"},{id:"prep",label:"Mise en place"},{id:"shopping",label:"Shopping list"}].map(t=>(
          <button key={t.id} onClick={()=>{setSubTab(t.id);if(scrollRef.current)scrollRef.current.scrollTop=0;}} style={{flex:1,padding:"14px 0",background:"none",border:"none",borderBottom:`2px solid ${subTab===t.id?T.accent:"transparent"}`,color:subTab===t.id?T.accent:T.muted,fontSize:12,fontFamily:T.font,fontWeight:subTab===t.id?600:400,cursor:"pointer",transition:"color 0.2s ease",textAlign:"left"}}>{t.label}</button>
        ))}
      </div>

      {subTab==="dishes"&&(
        <div>
          {/* Banner — shown when no recipes selected */}
          {weekDishes.length===0&&(
            <div style={{position:"relative",overflow:"hidden",borderBottom:`1px solid ${T.border}`,minHeight:180,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <style>{`
                @keyframes blob1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.1)}66%{transform:translate(-20px,15px) scale(0.95)}}
                @keyframes blob2{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-25px,20px) scale(1.05)}66%{transform:translate(20px,-10px) scale(1.1)}}
                @keyframes blob3{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(15px,25px) scale(0.9)}66%{transform:translate(-15px,-20px) scale(1.05)}}
              `}</style>
              <div style={{position:"absolute",inset:0,background:"#fff2e8"}}/>
              <div style={{position:"absolute",width:220,height:220,borderRadius:"50%",background:"rgba(255,180,80,0.55)",filter:"blur(48px)",top:-40,left:-40,animation:"blob1 7s ease-in-out infinite"}}/>
              <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:"rgba(255,100,80,0.4)",filter:"blur(48px)",top:20,right:-30,animation:"blob2 9s ease-in-out infinite"}}/>
              <div style={{position:"absolute",width:180,height:180,borderRadius:"50%",background:"rgba(255,160,200,0.5)",filter:"blur(40px)",bottom:-40,left:"30%",animation:"blob3 8s ease-in-out infinite"}}/>
              <div style={{position:"relative",zIndex:2,textAlign:"left",padding:"40px 16px 40px 0"}}>
                <div style={{fontSize:20,fontWeight:600,color:"rgba(60,30,10,0.75)",lineHeight:1.4,fontFamily:T.font}}>Less time cooking.</div>
                <div style={{fontSize:20,fontWeight:600,color:"rgba(60,30,10,0.75)",lineHeight:1.4,fontFamily:T.font}}>More time eating well.</div>
              </div>
            </div>
          )}
          {/* Selected recipes */}
          {weekDishes.map(d=><DishRow key={d.id} dish={d} inWeek={true} onToggleWeek={id=>setWeekDishIds(ids=>ids.filter(i=>i!==id))} onClick={()=>onViewDish(d)}/>)}
          {/* Suggestions */}
          {weekDishes.length>0&&suggestions.length>0&&(
            <div>
              <div style={{padding:"16px 16px 8px 0",borderTop:`1px solid ${T.border}`}}>
                <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Shared bases and ingredients</div>
              </div>
              {suggestions.map(({d})=>(
                <DishRow key={d.id} dish={d} inWeek={false} onToggleWeek={id=>setWeekDishIds(ids=>[...ids,id])} onClick={()=>onViewDish(d)}/>
              ))}
            </div>
          )}
          {/* Suggested recipe groups — always shown */}
          <div style={{borderTop:`1px solid ${T.border}`,padding:"16px 16px 8px 0"}}>
            <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Suggested recipes for the week</div>
          </div>
          {recGroups.map((group,gi)=>(
            <div key={gi}>
              <div style={{padding:"16px 16px 8px 0",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:`1px solid ${T.border}`}}>
                <div style={{fontSize:20,fontWeight:600,color:T.text,fontFamily:T.fontTitle}}>{group.theme}</div>
                <button onClick={()=>{
                  setWeekDishIds(ids=>[...new Set([...ids,...group.dishes.map(d=>d.id)])]);
                  if(scrollRef.current) scrollRef.current.scrollTop=0;
                }} style={{background:"none",border:`1px solid ${T.border}`,borderRadius:100,padding:"0 12px",height:36,fontSize:12,fontFamily:T.font,color:T.text,cursor:"pointer",fontWeight:400,flexShrink:0}}>Add all 3</button>
              </div>
              {group.dishes.map(d=><DishRow key={d.id} dish={d} inWeek={weekDishIds.includes(d.id)} onToggleWeek={id=>setWeekDishIds(ids=>ids.includes(id)?ids.filter(i=>i!==id):[...ids,id])} onClick={()=>onViewDish(d)}/>)}
            </div>
          ))}
          <div style={{height:140}}/>
        </div>
      )}

      {subTab==="shopping"&&(
        <div style={{padding:"24px 16px 100px 0"}}>
          {(()=>{
            const allItems = [
              ...compItems.map((i,idx)=>({...i,_type:"base",_key:"c"+idx})),
              ...dishItems.map((i,idx)=>({...i,_type:"dish",_key:"d"+idx}))
            ];
            const aisleGroups = groupByAisle(allItems);
            return aisleGroups.map((group,gi)=>(
              <div key={gi} style={{marginBottom:32}}>
                <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,marginBottom:12}}>{group.label}</div>
                {group.items.map((item,i)=>{
                  const k=item._key;
                  const ck=!!checkedItems[k];
                  return(
                    <div key={i} onClick={()=>ckItem(k)} style={{display:"flex",gap:16,padding:"8px 0",minHeight:40,alignItems:"flex-start",borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                      <Ck checked={ck} onClick={()=>ckItem(k)}/>
                      <div style={{flex:1}}>
                        <span style={{fontSize:14,color:ck?T.faint:T.text,textDecoration:ck?"line-through":"none",fontFamily:T.font}}>{item.item}</span>
                        {item.note&&<span style={{fontSize:12,color:T.muted,marginLeft:8}}>{item.note}</span>}
                      </div>
                      <span style={{fontSize:12,color:T.text,fontFamily:T.font,flexShrink:0}}>{item.amount}</span>
                    </div>
                  );
                })}
              </div>
            ));
          })()}
        </div>
      )}

      {subTab==="prep"&&(
        <div style={{paddingBottom:100}}>
          {prepPlan.length===0&&sharedIngs.length===0&&(
            <div style={{color:T.muted,fontSize:14,textAlign:"left",padding:"60px 16px 60px 0",fontFamily:T.font}}>No shared bases to prep.</div>
          )}
          {prepPlan.length>0&&(
            <div style={{padding:"0 16px 0 0"}}>
              <div style={{paddingTop:24,paddingBottom:14}}>
                <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Bases to make</div>
                
              </div>
              {prepPlan.map((comp,ci)=>{
                const k="p"+ci; const ck=!!checkedItems[k];
                return(
                  <div key={comp.id} style={{borderBottom:`1px solid ${T.border}`,padding:"16px 0"}}>
                    <div onClick={()=>ckItem(k)} style={{display:"flex",alignItems:"flex-start",gap:16,cursor:"pointer",marginBottom:8}}>
                      <Ck checked={ck} onClick={()=>ckItem(k)}/>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14,fontWeight:600,color:ck?T.faint:T.text,textDecoration:ck?"line-through":"none",fontFamily:T.font,marginBottom:4}}>{comp.name}</div>
                        <div style={{fontSize:12,color:T.muted,fontFamily:T.font,lineHeight:1.5,marginBottom:8}}>{comp.description}</div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:5}}>
                          {comp.usedIn.map((t,i)=><span key={i} style={{fontSize:11,color:T.muted,background:"#F5F5F3",border:`1px solid ${T.border}`,borderRadius:4,padding:"4px 8px",fontFamily:T.font}}>{t}</span>)}
                        </div>
                        <div style={{display:"flex",gap:8}}>
                          <span style={{fontSize:11,color:T.text,fontFamily:T.font,textTransform:"uppercase",letterSpacing:"0.06em"}}>{comp.cookTime} min</span>
                          <span style={{color:T.border}}>·</span>
                          <span style={{fontSize:11,color:T.text,fontFamily:T.font}}>Up to {comp.days} day{comp.days!==1?"s":""} ahead</span>
                        </div>
                      </div>
                    </div>
                    <div style={{paddingLeft:40}}>
                      {comp.ingredients.map((ing,ii)=>{const ik=k+"i"+ii;const ikCk=!!checkedItems[ik];return(
                        <div key={ii} onClick={()=>ckItem(ik)} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"8px 0",minHeight:40,borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                          <Ck checked={ikCk} onClick={()=>ckItem(ik)}/>
                          <span style={{flex:1,fontSize:12,color:ikCk?T.faint:T.text,textDecoration:ikCk?"line-through":"none",fontFamily:T.font}}>{ing.item}</span>
                          <span style={{fontSize:12,color:T.muted,fontFamily:T.font,flexShrink:0}}>{ing.amount}</span>
                        </div>
                      );})}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {sharedIngs.length>0&&(
            <div style={{padding:"0 16px 0 0",borderTop:`1px solid ${T.border}`}}>
              <div style={{padding:"24px 0 12px"}}>
                <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Shared ingredients</div>
                
              </div>
              {sharedIngs.map((ing,i)=>{const k="si"+i;const ck=!!checkedItems[k];return(
                <div key={i} onClick={()=>ckItem(k)} style={{display:"flex",alignItems:"flex-start",gap:16,padding:"12px 0",borderBottom:`1px solid ${T.border}`,cursor:"pointer"}}>
                  <Ck checked={ck} onClick={()=>ckItem(k)}/>
                  <div style={{flex:1}}>
                    <span style={{fontSize:14,fontWeight:600,color:ck?T.faint:T.text,textDecoration:ck?"line-through":"none",fontFamily:T.font}}>{ing.item}</span>
                    <div style={{display:"flex",gap:4,flexWrap:"wrap",marginTop:4}}>
                      {ing.recipes.map((r,ri)=><span key={ri} style={{fontSize:11,color:T.muted,background:"#F5F5F3",border:`1px solid ${T.border}`,borderRadius:4,padding:"2px 8px",fontFamily:T.font}}>{r}</span>)}
                    </div>
                  </div>
                </div>
              );})}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Profile Tab ──────────────────────────────────────────────────────────────
const ProfileTab = ({dishes}) => (
  <div style={{flex:1,overflowY:"auto"}}>
    <div style={{borderBottom:`1px solid ${T.border}`,padding:"28px 16px 28px 0"}}>
      <div style={{width:48,height:48,borderRadius:"50%",background:T.border,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:16,color:T.muted}}>P</span></div>
      <div style={{fontSize:20,fontWeight:600,color:T.text,fontFamily:T.font}}>Paul</div>
    </div>
    <div style={{padding:"24px 16px 12px 0"}}><div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,fontWeight:600}}>Base library</div></div>
    {Object.values(COMPONENT_LIBRARY).map(comp=>(
      <div key={comp.id} style={{borderBottom:`1px solid ${T.border}`,padding:"16px 16px 16px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:2}}>
          <span style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>{comp.name}</span>
          <span style={{fontSize:11,color:T.muted,fontFamily:T.font,textTransform:"capitalize"}}>{comp.category}</span>
        </div>
        <div style={{fontSize:12,color:T.muted,fontFamily:T.font}}>{comp.ingredients.map(i=>i.item).join(" · ")}</div>
        <div style={{fontSize:11,color:T.text,marginTop:0,fontFamily:T.font}}>{comp.cookTime} min · up to {comp.days} day{comp.days!==1?"s":""}</div>
      </div>
    ))}
    <div style={{padding:"24px 16px 12px 0"}}><div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,fontWeight:600}}>Library</div></div>
    {[{label:"Dishes",value:String(dishes.length)},{label:"Components",value:String(Object.keys(COMPONENT_LIBRARY).length)},{label:"Version",value:"2.0"}].map((r,i)=>(
      <div key={i} style={{borderBottom:`1px solid ${T.border}`,padding:"16px 16px 16px 0",display:"flex",justifyContent:"space-between"}}>
        <span style={{fontSize:14,color:T.text,fontFamily:T.font}}>{r.label}</span>
        <span style={{fontSize:14,color:T.muted,fontFamily:T.font}}>{r.value}</span>
      </div>
    ))}
    <div style={{height:140}}/>
  </div>
);

const MISE_STORAGE_KEY = "mise-app-state";
const loadPersistedState = () => {
  try {
    if (typeof localStorage === "undefined") return null;
    const raw = localStorage.getItem(MISE_STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p || !Array.isArray(p.dishes)) return null;
    return {
      dishes: p.dishes,
      weekDishIds: Array.isArray(p.weekDishIds) ? p.weekDishIds.filter((id) => typeof id === "string") : [],
    };
  } catch {
    return null;
  }
};

const __miseHydrated = (() => {
  const p = loadPersistedState();
  return p ? { dishes: p.dishes, weekDishIds: p.weekDishIds } : { dishes: INITIAL_DISHES, weekDishIds: [] };
})();

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dishes, setDishes] = useState(__miseHydrated.dishes);
  const [weekDishIds, setWeekDishIds] = useState(__miseHydrated.weekDishIds);
  const [activeTab, setActiveTab] = useState("recipes");
  const mainScrollRef = useRef(null);
  const [detailDish, setDetailDish] = useState(null);
  const [originalDish, setOriginalDish] = useState(null);
  const [recipeActiveTag, setRecipeActiveTag] = useState(null);
  const [importOpen, setImportOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (dish) => {
    if(toastTimer.current) clearTimeout(toastTimer.current);
    setToast(dish);
    toastTimer.current = setTimeout(()=>setToast(null), 3000);
  };

  const handleToggleWeek = id => {
    const adding = !weekDishIds.includes(id);
    setWeekDishIds(ids=>ids.includes(id)?ids.filter(i=>i!==id):[...ids,id]);
    if(adding) {
      const dish = dishes.find(d=>d.id===id);
      if(dish) showToast(dish);
    }
  };
  const handleAddDish = dish => { setDishes(prev=>[...prev.filter(d=>d.id!==dish.id),dish]); };

  const tabs = [
    {id:"recipes",label:"Recipes",icon:a=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>},
    {id:"week",label:"This Week",icon:a=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>},
    {id:"profile",label:"Profile",icon:a=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={a?2.2:1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>},
  ];



  useEffect(()=>{
    let meta = document.querySelector("meta[name=viewport]");
    if(!meta){meta=document.createElement("meta");meta.name="viewport";document.head.appendChild(meta);}
    meta.content="width=device-width, initial-scale=1, maximum-scale=1";
    return ()=>{meta.content="width=device-width, initial-scale=1";};
  },[]);

  useEffect(() => {
    try {
      localStorage.setItem(MISE_STORAGE_KEY, JSON.stringify({ dishes, weekDishIds }));
    } catch {
      /* private mode / quota */
    }
  }, [dishes, weekDishIds]);

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100vh",background:"#fff",fontFamily:T.font,width:"100%",maxWidth:680,margin:"0 auto",position:"relative",overflow:"hidden",boxShadow:"0 0 0 1px rgba(0,0,0,0.06), 0 8px 40px rgba(0,0,0,0.08)"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { font-size: clamp(14px, 1.6vw, 16px); font-family: 'Poppins', sans-serif; }
        body { background: #F5F4F0; margin: 0; }
        input, textarea, button { font-family: inherit; font-size: 16px; }
        input::placeholder { font-size: 14px; opacity: 0.5; }
        img { max-width: 100%; }
        ::-webkit-scrollbar { display: none; }
        scrollbar-width: none;
      `}</style>
      <div style={{background:T.surface,padding:"16px 16px 16px 80px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,position:"relative",opacity:detailDish?0:1,transition:"opacity 0.25s ease",pointerEvents:detailDish?"none":"all"}}>
        <div style={{fontSize:32,fontWeight:600,letterSpacing:"-0.01em",color:T.text,lineHeight:1,fontFamily:T.fontTitle}}>
          {activeTab==="recipes"?"Recipes":activeTab==="week"?"This Week":"Profile"}
        </div>
        <div style={{position:"absolute",bottom:0,left:80,right:0,height:1,background:T.border}}/>
        {activeTab==="recipes"&&<button onClick={()=>setImportOpen(true)} style={{background:T.text,color:"#fff",border:"none",borderRadius:100,padding:"0 16px",height:36,fontSize:12,fontFamily:T.font,fontWeight:600,cursor:"pointer"}}>+ Add</button>}
        {activeTab==="week"&&<span style={{fontSize:12,color:T.muted}}>{weekDishIds.length} dish{weekDishIds.length!==1?"es":""}</span>}
      </div>
      <div ref={mainScrollRef} style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",paddingLeft:80,opacity:detailDish?0:1,transition:"opacity 0.25s ease",pointerEvents:detailDish?"none":"all"}}>
        {activeTab==="recipes"&&<RecipesTab weekDishIds={weekDishIds} onToggleWeek={handleToggleWeek} onViewDish={setDetailDish} dishes={dishes} initialTag={recipeActiveTag} onTagApplied={()=>setRecipeActiveTag(null)}/>}
        {activeTab==="week"&&<ThisWeekTab weekDishIds={weekDishIds} setWeekDishIds={setWeekDishIds} onViewDish={setDetailDish} dishes={dishes}/>}
        {activeTab==="profile"&&<ProfileTab dishes={dishes}/>}
      </div>
      <div style={{
        position:"fixed",
        left:0,
        top:0,
        bottom:0,
        width:80,
        zIndex:150,
        pointerEvents:"none",
      }}>
        {/* Back button — centered in the 80px top zone */}
        <div style={{position:"absolute",top:0,left:0,right:0,height:64,display:"flex",alignItems:"center",justifyContent:"center"}}>
          {(detailDish||originalDish)&&(
            <button onClick={()=>{
              if(originalDish){setOriginalDish(null);}
              else{setDetailDish(null);setOriginalDish(null);}
            }} style={{pointerEvents:"all",width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.10)",transition:"all 0.2s ease"}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          )}
        </div>
        {/* Tab labels — start at 80px from top */}
        <div style={{position:"absolute",top:64,left:0,right:0,display:"flex",flexDirection:"column",alignItems:"center",gap:32,pointerEvents:"none"}}>
        {tabs.map(t=>{
          const active = activeTab===t.id;
          return (
            <button key={t.id} onClick={()=>{setDetailDish(null);setOriginalDish(null);setActiveTab(t.id);if(mainScrollRef.current)mainScrollRef.current.scrollTop=0;setRecipeActiveTag(null);}} style={{
              background:"none", border:"none", cursor:"pointer",
              padding:0, margin:0,
              width:80,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              pointerEvents:"all",
              WebkitTapHighlightColor:"transparent",
            }}>
              <span style={{
                fontSize:12, fontFamily:T.font,
                fontWeight: active ? 700 : 400,
                letterSpacing:"0.12em",
                textTransform:"uppercase",
                color: active ? T.text : "rgba(0,51,160,0.28)",
                transition:"color 0.2s ease",
                writingMode:"vertical-lr",
                transform:"rotate(180deg)",
                display:"block",
              }}>{t.label}</span>
            </button>
          );
        })}
        </div>
      </div>
      {importOpen&&<ImportSheet onClose={()=>setImportOpen(false)} onAdd={handleAddDish} activeDishes={dishes.filter(d=>weekDishIds.includes(d.id))}/>}

      {/* DishDetail overlay — slides in from right, starts at 80px to show nav */}
      <div style={{
        position:"absolute", top:0, bottom:0, left:80, right:0, zIndex:100,
        transform: detailDish ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1), opacity 0.2s ease",
        opacity: originalDish ? 0 : 1,
        pointerEvents: (detailDish && !originalDish) ? "all" : "none",
        background:"#fff",
        willChange:"transform",
      }}>
        {detailDish&&<DishDetail dish={detailDish} inWeek={weekDishIds.includes(detailDish.id)} onBack={()=>{setDetailDish(null);setOriginalDish(null);}} onToggleWeek={handleToggleWeek} weekDishIds={weekDishIds} allDishes={dishes} onShowOriginal={()=>setOriginalDish(detailDish)} onShowToast={showToast} onTagSelect={tag=>{setDetailDish(null);setOriginalDish(null);setRecipeActiveTag(tag);}}/>}
      </div>
      {/* Original recipe overlay — third layer */}
      <div style={{
        position:"absolute",top:0,bottom:0,left:80,right:0,zIndex:200,
        transform:originalDish?"translateX(0)":"translateX(100%)",
        transition:"transform 0.35s cubic-bezier(0.32,0.72,0,1)",
        pointerEvents:originalDish?"all":"none",
        background:"#fff",
        willChange:"transform",
        overflowY:"auto",
      }}>
        {originalDish&&(()=>{
          const d = originalDish;
          return (
            <>

              {/* Hero blobs */}
              {(()=>{
                const PALETTE2 = ["#E8B4A0","#C97B6A","#8C4A40","#A8C0CC","#6A8FA0","#3A5F70","#D8D4B0","#B0A870","#7A7048","#B8C4A8","#7A9870","#445840","#D4C4C0","#A88890","#6A5060","#E0D4B8","#C0A868","#805830","#B4C8C8","#5A8888"];
                const h2 = (d.id||"x").split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
                const d1 = PALETTE2[Math.abs(h2)%20];
                const d2 = PALETTE2[Math.abs(h2*3+7)%20];
                const d3 = PALETTE2[Math.abs(h2*7+13)%20];
                return (
                  <div style={{position:"relative",height:180,overflow:"hidden",background:d3}}>
                    <div style={{position:"absolute",width:240,height:240,borderRadius:"50%",background:d1,filter:"blur(64px)",top:-60,left:-40,opacity:0.9}}/>
                    <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:d2,filter:"blur(52px)",top:40,right:-40,opacity:0.8}}/>
                    <div style={{position:"absolute",width:180,height:180,borderRadius:"50%",background:d3,filter:"blur(44px)",bottom:-60,left:"25%",opacity:0.7}}/>
                  </div>
                );
              })()}
              {/* Title and source */}
              <div style={{padding:"16px 16px 16px 0"}}>
                <div style={{fontSize:24,fontWeight:600,color:T.text,fontFamily:T.fontTitle,marginBottom:4}}>{d.sourceTitle||d.title}</div>
                {d.sourceUrl&&<a href={d.sourceUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:12,color:T.text,fontFamily:T.font,textDecoration:"underline",textDecorationColor:T.faint}}>{sourceName(d.sourceUrl)||d.sourceTitle} ↗</a>}
              </div>
              {/* Content */}
              <div style={{padding:"24px 16px 140px 0"}}>
                {(d.original?.ingredients||[]).length>0&&(
                  <>
                    <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,fontWeight:600,marginBottom:12}}>Ingredients</div>
                    {(d.original.ingredients||[]).map((ing,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:`1px solid ${T.border}`,fontSize:14,color:T.text,fontFamily:T.font}}>
                        <span>{ing.item}{ing.note?<span style={{color:T.muted,fontSize:12}}> — {ing.note}</span>:""}</span>
                        <span style={{color:T.muted,flexShrink:0,marginLeft:16}}>{ing.amount}</span>
                      </div>
                    ))}
                  </>
                )}
                {(d.original?.steps||[]).length>0&&(
                  <div style={{marginTop:32}}>
                    <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.muted,fontWeight:600,marginBottom:16}}>Instructions</div>
                    {(d.original.steps||[]).map((step,i)=>(
                      <div key={i} style={{display:"flex",gap:16,marginBottom:20}}>
                        <span style={{fontSize:12,color:T.muted,fontWeight:600,width:18,flexShrink:0,paddingTop:2,textAlign:"center"}}>{String(i+1).padStart(2,"0")}</span>
                        <p style={{fontSize:14,color:T.text,lineHeight:1.7,margin:0,flex:1,fontFamily:T.font}}>{step}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          );
        })()}
      </div>

      {/* Toast */}
      <div style={{position:"fixed",bottom:toast?90:-80,left:"50%",transform:"translateX(-50%)",transition:"bottom 0.4s cubic-bezier(0.34,1.56,0.64,1)",zIndex:400,maxWidth:400,width:"calc(min(100%, 680px) - 40px)"}}>
        {toast&&(
          <div style={{background:"#FFE534",color:"#0033A0",borderRadius:12,padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 4px 20px rgba(0,51,160,0.2)"}}>
            <span style={{fontSize:14,fontFamily:T.font,fontWeight:400}}>{toast.title} added</span>
            <button onClick={()=>{setActiveTab("week");setToast(null);setDetailDish(null);setOriginalDish(null);}} style={{background:"none",border:"1px solid rgba(0,51,160,0.35)",borderRadius:100,padding:"0 8px",height:36,color:"#0033A0",fontSize:12,fontFamily:T.font,cursor:"pointer",flexShrink:0,marginLeft:12}}>View week</button>
          </div>
        )}
      </div>
    </div>
  );
}

