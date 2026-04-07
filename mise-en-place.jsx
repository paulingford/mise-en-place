import { useState, useRef, useEffect } from "react";
import { INITIAL_DISHES } from "./src/initial-dishes.js";

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
  "citrus-acid":{id:"citrus-acid",name:"Citrus acid base",category:"acid",cookTime:5,days:3,storage:"Airtight container, refrigerated.",description:"Whisk citrus juice with oil and a pinch of salt. Use as marinade base, dressing, or brightener. Add garlic only when the recipe calls for it (use extras on this component).",ingredients:[{item:"Lemon or lime",amount:"3",note:"juiced"},{item:"Olive oil",amount:"3 tbsp",note:""},{item:"Salt",amount:"pinch",note:""}]},
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
};
const sourceName = (url) => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return SOURCE_NAMES[host] || host;
  } catch { return ""; }
};

/** Normalize recipe image hrefs from imports (absolute URL or resolve relative to recipe page). */
const resolveRecipeImageUrl = (image, pageUrl) => {
  if (!image || typeof image !== "string") return "";
  const u = image.trim();
  if (!u) return "";
  try {
    if (u.startsWith("//")) return `https:${u}`;
    if (/^https?:\/\//i.test(u)) return u;
    return new URL(u, pageUrl).href;
  } catch {
    return "";
  }
};

/** Stable key for matching a saved dish's sourceUrl to the bundled catalog. */
const normalizeRecipePageKey = (url) => {
  if (!url || typeof url !== "string") return "";
  try {
    const u = new URL(url.trim());
    u.search = "";
    u.hash = "";
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    let path = u.pathname || "/";
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    return `${host}${path}`;
  } catch {
    return "";
  }
};

// ─── Dish model
// groups: array of group objects, each one of:
//   {type:"component", componentId, label, extras:[], note}   — references canonical component
//   {type:"dish",      label,       ingredients:[]}            — standalone group
// original: {ingredients:[{item,amount,note}], steps:[]} — verbatim recipe
// Seed data: see ./src/initial-dishes.js (40 publisher recipes).
// ─────────────────────────────────────────────────────────────────────────────

// ─── Utilities ────────────────────────────────────────────────────────────────
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

/**
 * Prep plan for this week: shared component core + merged extras.
 * Extras that do not apply to every week recipe using that component get `_onlyForRecipes`.
 */
const buildPrepPlan = (weekDishIds, dishes) => {
  const weekDishes = dishes.filter((d) => weekDishIds.includes(d.id));
  const compUsage = {};
  weekDishes.forEach((d) => {
    (d.groups || []).filter((g) => g.type === "component").forEach((g) => {
      if (!compUsage[g.componentId]) compUsage[g.componentId] = { usedInSet: new Set(), pairs: [] };
      compUsage[g.componentId].usedInSet.add(d.title);
      for (const ing of g.extras || []) compUsage[g.componentId].pairs.push({ dish: d.title, ing });
    });
  });
  return Object.entries(compUsage)
    .map(([cid, { usedInSet, pairs }]) => {
      const lib = COMPONENT_LIBRARY[cid];
      if (!lib) return null;
      const usedIn = [...usedInSet].sort();
      const nUsers = usedIn.length;
      const extraByNorm = {};
      for (const { dish, ing } of pairs) {
        const key = normIngName(ing.item);
        if (!key) continue;
        if (!extraByNorm[key])
          extraByNorm[key] = { item: ing.item, note: ing.note || "", amounts: [], recipes: new Set() };
        extraByNorm[key].recipes.add(dish);
        extraByNorm[key].amounts.push(ing.amount || "");
      }
      const mergedExtras = Object.values(extraByNorm).map((x) => {
        const amt = x.amounts.reduce((a, b) => sumAmounts(a, b), "");
        const recipeList = [...x.recipes].sort();
        return {
          item: x.item,
          amount: amt,
          note: x.note,
          ...(recipeList.length < nUsers ? { _onlyForRecipes: recipeList } : {}),
        };
      });
      return { ...lib, usedIn, ingredients: [...(lib.ingredients || []), ...mergedExtras] };
    })
    .filter(Boolean)
    .sort((a, b) => b.cookTime - a.cookTime);
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

      var prompt = "Adapt the recipe at this URL into a component-based dish format. Use your training knowledge of the page.\n\n"
        + "URL: " + url.trim() + "\n\n"
        + "SOURCE RULES (critical):\n"
        + "- Ingredients: copy ONLY lines from the article's main recipe **Ingredients** section (the publisher's list: bullets, checkboxes, or structured ingredient list). Do not add items from comments, reviews, reader tips, substitutions, forum replies, or discussion threads.\n"
        + "- Instructions: use ONLY steps from the article's main **Instructions** / **Method** / **Directions** section written by the publisher. Do not paste advice, variations, or steps from comments or user Q&A.\n"
        + "- Ignore all other page text: blog intros, headnotes, stories, personal anecdotes, general tips callouts, equipment or technique essays, serving or pairing commentary, SEO blurbs, and any narrative that sits outside the structured ingredient list or numbered/bulleted instruction steps.\n"
        + "- If text could be either the real recipe or a comment, exclude it.\n"
        + "- Herbs: use exactly the herb the source lists (mint vs basil vs parsley, etc.). Do not swap one herb for another unless the source gives an explicit alternative.\n"
        + "- Components: the library lists a shared core for each component id. Put every ingredient line from the source that is not in that core into this dish's component \"extras\" (even single items). That keeps each recipe faithful; when several week recipes share a component, extras needed by only some of them are flagged in prep.\n"
        + "- Do not add extras that the source ingredient list does not include.\n\n"
        + "Component library (use exact id values as componentId):\n"
        + compLines + activeList + "\n\n"
        + "Return ONLY a JSON object, no markdown, no explanation. Fields: "
        + "id (slug), title, sourceTitle, sourceUrl, cuisine, cookTime (number), servings (number), "
        + "flavorProfile (string array), "
        + "groups (array: each item is either "
        + "{type:'component', componentId, label, note, extras:[{item,amount,note}]} "
        + "or {type:'dish', label, ingredients:[{item,amount,note}]}), "
        + "steps (string array), "
        + "original ({ingredients:[{item,amount,note}], steps:[string]} — must match only the official ingredient list and instruction steps above), "
        + "image (string: direct URL of the recipe's main hero/lead photo from the source page — the primary dish image shown with the recipe "
        + "(e.g. og:image or featured image in the article body), as https or protocol-relative; not a gallery page or HTML URL; "
        + "same domain as the recipe when possible; empty string only if there is no appropriate photo), "
        + "notes (empty string). "
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
      parsed.image = resolveRecipeImageUrl(parsed.image || "", parsed.sourceUrl || url.trim());
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
      <div onClick={e=>e.stopPropagation()} style={{background:T.surface,width:"100%",maxWidth:"none",borderRadius:"14px 14px 0 0",maxHeight:"92vh",display:"flex",flexDirection:"column",padding:"0 24px env(safe-area-inset-bottom, 0px)",boxSizing:"border-box",animation:"slideUp 0.35s cubic-bezier(0.32,0.72,0,1)"}}>
            <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
        <style>{`@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>
        {/* Header */}
        <div style={{padding:"12px 0",flexShrink:0}}>
          <div style={{width:36,height:4,borderRadius:100,background:T.border,margin:"0 auto 14px"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              {mode&&<button onClick={()=>setMode(null)} style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.85)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>}
              {!mode&&<div style={{fontSize:16,fontWeight:600,color:T.text,fontFamily:T.font}}>Add dish</div>}
            </div>
            <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:20,color:T.muted,padding:0,lineHeight:1}}>×</button>
          </div>
        </div>

        <div style={{overflowY:"auto",padding:0,flex:1}}>
          {/* Photo loading overlay */}
          {mode==="photo"&&photoLoading&&(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"60px 0",gap:16}}>
              <div style={{width:40,height:40,borderRadius:"50%",border:`3px solid ${T.border}`,borderTopColor:T.text,animation:"spin 0.8s linear infinite"}}/>
              <div style={{fontSize:14,color:T.muted,fontFamily:T.font}}>Reading recipe…</div>
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}
          {photoError&&mode===null&&<div style={{fontSize:13,color:"#c0392b",padding:"0 0 12px",fontFamily:T.font}}>{photoError}</div>}
          {/* Mode picker */}
          {mode===null&&(
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <button onClick={()=>setMode("url")} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>Import from URL</div>
                  <div style={{fontSize:12,color:T.muted,fontFamily:T.font,marginTop:2}}>Adapted to use shared bases</div>
                </div>
              </button>
              <button onClick={()=>setMode("manual")} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
                <div>
                  <div style={{fontSize:14,fontWeight:600,color:T.text,fontFamily:T.font}}>Write manually</div>
                  <div style={{fontSize:12,color:T.muted,fontFamily:T.font,marginTop:2}}>Type in your own recipe</div>
                </div>
              </button>
              <button onClick={()=>fileInputRef.current&&fileInputRef.current.click()} style={{display:"flex",alignItems:"center",gap:16,padding:"16px 0",border:`1px solid ${T.border}`,borderRadius:100,background:"#fff",cursor:"pointer",textAlign:"left"}}>
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
                      {type:"text",text:"Extract the recipe from this image. Use ONLY the printed ingredient list and instruction steps for the recipe itself. Ignore headnotes, intro paragraphs, chef's letter-style commentary, tips outside those two blocks, margins, and scribbles. Return ONLY a JSON object with these fields: title (string), cuisine (string), cookTime (number in minutes), servings (number), ingredients (array of {item,amount,note}), steps (array of strings). No markdown, no explanation."}
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
const DishRow = ({dish, inWeek, onToggleWeek, onClick}) => {
  const PHOTOS = {};
  const photoId = PHOTOS[dish.id];
  const imgSrc =
    dish.image ||
    (photoId ? `https://images.unsplash.com/${photoId}?w=640&h=426&fit=crop&crop=center&auto=format` : null);
  const PALETTE = ["#E8B4A0","#C97B6A","#8C4A40","#A8C0CC","#6A8FA0","#3A5F70","#D8D4B0","#B0A870","#7A7048","#B8C4A8","#7A9870","#445840","#D4C4C0","#A88890","#6A5060","#E0D4B8","#C0A868","#805830","#B4C8C8","#5A8888"];
  const h = (dish.id||"x").split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
  const c1 = PALETTE[Math.abs(h)%20];
  const c2 = PALETTE[Math.abs(h*3+7)%20];
  const c3 = PALETTE[Math.abs(h*7+13)%20];
  const p1x = Math.abs(h*11)%80, p1y = Math.abs(h*17)%80;
  const p2x = Math.abs(h*13)%80, p2y = Math.abs(h*19)%80;
  const p3x = Math.abs(h*23)%80, p3y = Math.abs(h*29)%80;
  return (
    <div className="mise-dish-row">
      <div className="mise-dish-media" onClick={onClick} role="presentation">
        <div className="mise-dish-media-bg" style={{position:"absolute",inset:0,background:c3}}/>
        <div className="mise-dish-blob mise-dish-blob-a" style={{position:"absolute",width:70,height:70,borderRadius:"50%",background:c1,filter:"blur(18px)",top:p1y-20,left:p1x-20,opacity:0.85}}/>
        <div className="mise-dish-blob mise-dish-blob-b" style={{position:"absolute",width:60,height:60,borderRadius:"50%",background:c2,filter:"blur(14px)",top:p2y-10,left:p2x-10,opacity:0.75}}/>
        <div className="mise-dish-blob mise-dish-blob-c" style={{position:"absolute",width:50,height:50,borderRadius:"50%",background:c3,filter:"blur(12px)",top:p3y-5,left:p3x-5,opacity:0.65}}/>
        {imgSrc&&(
          <img src={imgSrc} alt="" decoding="async" referrerPolicy="no-referrer" className="mise-dish-img" onError={e=>{e.currentTarget.style.display="none";}}/>
        )}
      </div>
      <div className="mise-dish-footer">
        <div className="mise-dish-text" onClick={onClick} role="presentation">
          <div className="mise-dish-title">{dish.title}</div>
          {dish.sourceUrl&&<div className="mise-dish-source">{sourceName(dish.sourceUrl)}</div>}
          <div className="mise-dish-meta"><ClockIcon/>{dish.cookTime} min</div>
        </div>
        <button type="button" className="mise-dish-cta" onClick={(e)=>{e.stopPropagation();onToggleWeek(dish.id);}} aria-label={inWeek?"Remove from this week":"Add to this week"} style={{border:`1.5px solid ${T.text}`,borderRadius:"50%",width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,padding:0,transition:"all 0.2s ease",color:inWeek?"#fff":T.text,background:inWeek?T.text:"transparent"}}>
          {inWeek?<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>:<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
        </button>
      </div>
    </div>
  );
};

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

  const heroBlock = (() => {
    const PHOTOS = {};
    const photoId = PHOTOS[dish.id];
    const heroSrc = dish.image || (photoId ? `https://images.unsplash.com/${photoId}?w=480&h=400&fit=crop&crop=center&auto=format` : null);
    const PALETTE = ["#E8B4A0","#C97B6A","#8C4A40","#A8C0CC","#6A8FA0","#3A5F70","#D8D4B0","#B0A870","#7A7048","#B8C4A8","#7A9870","#445840","#D4C4C0","#A88890","#6A5060","#E0D4B8","#C0A868","#805830","#B4C8C8","#5A8888"];
    const h = (dish.id||"x").split("").reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0),0);
    const c1 = PALETTE[Math.abs(h)%20];
    const c2 = PALETTE[Math.abs(h*3+7)%20];
    const c3 = PALETTE[Math.abs(h*7+13)%20];
    const actionBtnStyle = {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: `1.5px solid ${T.text}`,
      background: "rgba(255,255,255,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    };
    return (
      <div className="mise-detail-hero-visual-inner" style={{position:"relative",aspectRatio:"3/2",overflow:"hidden",background:c3}}>
        <div className="mise-detail-hero-parallax" style={{position:"absolute",inset:0,transform:`translateY(${scrollY*0.4}px)`,willChange:"transform"}}>
          <div style={{position:"absolute",width:320,height:320,borderRadius:"50%",background:c1,filter:"blur(80px)",top:-80,left:-60,opacity:0.9}}/>
          <div style={{position:"absolute",width:280,height:280,borderRadius:"50%",background:c2,filter:"blur(64px)",top:60,right:-60,opacity:0.8}}/>
          <div style={{position:"absolute",width:240,height:240,borderRadius:"50%",background:c3,filter:"blur(56px)",bottom:-80,left:"20%",opacity:0.7}}/>
          {heroSrc&&<img src={heroSrc} alt="" aria-label={dish.title} referrerPolicy="no-referrer" decoding="async" style={{position:"absolute",inset:0,zIndex:1,width:"100%",height:"100%",maxWidth:"none",objectFit:"cover",display:"block"}} onError={e=>{e.currentTarget.style.display="none";}}/>}
        </div>
        <div className="mise-detail-hero-toolbar" style={{position:"absolute",top:0,left:0,right:0,zIndex:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-end",gap:8,padding:16,pointerEvents:"none"}}>
          <button
            type="button"
            onClick={()=>{if(!inWeek&&onShowToast)onShowToast(dish);onToggleWeek(dish.id);}}
            className="mise-detail-hero-toolbar-week"
            style={{
              pointerEvents:"all",
              background:inWeek?"rgba(0,51,160,0.92)":"rgba(255,255,255,0.92)",
              color:inWeek?"#fff":T.text,
              backdropFilter:"blur(12px)",
              WebkitBackdropFilter:"blur(12px)",
              border:"none",
              borderRadius:100,
              padding:"0 16px",
              height:36,
              cursor:"pointer",
              fontSize:12,
              fontFamily:T.font,
              fontWeight:600,
              boxShadow:"0 2px 8px rgba(0,0,0,0.12)",
              transition:"all 0.2s ease",
            }}
          >
            {inWeek?"✓ This week":"Cook this week"}
          </button>
          <button type="button" aria-label="Save recipe" style={{...actionBtnStyle,pointerEvents:"all"}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button type="button" aria-label="More options" style={{...actionBtnStyle,pointerEvents:"all"}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill={T.text} stroke="none"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
          </button>
        </div>
      </div>
    );
  })();

  return (
    <div className="mise-detail-scroll" style={{height:"100%",background:"#fff",fontFamily:T.font,overflowY:"auto",position:"relative"}} onScroll={e=>setScrollY(e.currentTarget.scrollTop)}>

      {/* Cook this week — fixed top-right on narrow viewports only */}
      <div className="mise-detail-week-pill-wrap" style={{position:"fixed",top:0,right:0,zIndex:120,pointerEvents:"none",padding:"16px 16px 0 0"}}>
        <button onClick={()=>{if(!inWeek&&onShowToast)onShowToast(dish);onToggleWeek(dish.id);}} style={{pointerEvents:"all",background:inWeek?"rgba(0,51,160,0.9)":"rgba(255,255,255,0.85)",color:inWeek?"#fff":T.text,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"none",borderRadius:100,padding:"0 16px",height:36,cursor:"pointer",fontSize:12,fontFamily:T.font,fontWeight:600,boxShadow:"0 2px 8px rgba(0,0,0,0.12)",transition:"all 0.2s ease"}}>
          {inWeek?"✓ This week":"Cook this week"}
        </button>
      </div>

      <div className="mise-detail-hero">
        <div className="mise-detail-hero-visual">
          {heroBlock}
        </div>
        <div className="mise-detail-hero-copy" style={{padding:"16px 16px 16px 0",boxSizing:"border-box"}}>
          <div style={{fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.text,fontFamily:T.font,marginBottom:6,fontWeight:400}}>
            {dish.original?.ingredients?.length>0?"Adapted recipe":"Original recipe"}
          </div>
          <div className="mise-detail-title-row" style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:8}}>
            <div className="mise-detail-title" style={{fontSize:32,fontWeight:600,color:T.text,lineHeight:1.15,letterSpacing:"-0.01em",fontFamily:T.fontTitle,flex:1,minWidth:0}}>{dish.title}</div>
            <div className="mise-detail-title-side-actions" style={{display:"flex",gap:8,flexShrink:0,paddingTop:0}}>
              <button type="button" aria-label="Save recipe" style={{width:36,height:36,borderRadius:"50%",border:`1.5px solid ${T.text}`,background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.text} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
              <button type="button" aria-label="More options" style={{width:36,height:36,borderRadius:"50%",border:`1.5px solid ${T.text}`,background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0,flexShrink:0}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill={T.text} stroke="none"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
              </button>
            </div>
          </div>
          <div style={{fontSize:12,color:T.muted,display:"flex",flexWrap:"wrap",gap:16,marginBottom:8}}>
            <span>{dish.cuisine}</span>
            <span style={{display:"flex",alignItems:"center",gap:4}}><ClockIcon/>{dish.cookTime} min</span>
            <span>{dish.servings} servings</span>
          </div>
          {dish.sourceUrl&&(
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <div style={{width:24,height:24,borderRadius:"50%",background:T.border,flexShrink:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontSize:11,color:T.muted,fontFamily:T.font,fontWeight:600,letterSpacing:"0.02em"}}>
                  {sourceName(dish.sourceUrl)?.slice(0,2).toUpperCase()}
                </span>
              </div>
              <span style={{fontSize:12,color:T.muted,fontFamily:T.font}}>{sourceName(dish.sourceUrl)||dish.sourceTitle}</span>
            </div>
          )}
        </div>
      </div>
      {/* Tab bar — matching week page style */}
      <div className="mise-detail-tabbar" style={{position:"sticky",top:0,zIndex:10,background:"#fff",borderBottom:`1px solid ${T.border}`,padding:"0 16px 0 0",display:"flex",gap:8}}>
        {[{id:"ingredients",label:"Ingredients"},{id:"instructions",label:"Instructions"}].map(t=>(
          <button key={t.id} onClick={()=>setView(t.id)} style={{flex:1,padding:"14px 0",background:"none",border:"none",borderBottom:`2px solid ${view===t.id?T.accent:"transparent"}`,color:view===t.id?T.accent:T.muted,fontSize:12,fontFamily:T.font,fontWeight:view===t.id?600:400,cursor:"pointer",transition:"color 0.2s ease",textAlign:"left"}}>{t.label}</button>
        ))}
      </div>

      {/* ── Ingredients view ── */}
      {view==="ingredients"&&(
        <div className="mise-detail-ingredients" style={{padding:"24px 16px 24px 0"}}>
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
        <div className="mise-detail-instructions" style={{padding:"24px 16px 24px 0"}}>
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
      <div className="mise-detail-notes" style={{padding:"28px 16px 80px 0"}}>
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
  const filtersOpen = searchFocused || Boolean(search?.trim()) || Boolean(activeTag);

  const onScroll = (e) => {
    if(inputRef.current) inputRef.current.blur();
    const y = e.currentTarget.scrollTop;
    const dy = y - lastY.current;
    if(dy > 8 && y > 60) setShown(false);
    else if(dy < -8) setShown(true);
    lastY.current = y;
  };

  return (
    <div className="mise-recipes-tab" style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"}} onScroll={onScroll} onClick={(e)=>{if(e.target!==inputRef.current&&inputRef.current)inputRef.current.blur();}}>
      {/* Sticky search + sort button */}
      <div className="mise-recipes-sticky" style={{position:"sticky",top:0,zIndex:10,background:T.surface,transition:"transform 0.28s cubic-bezier(0.4,0,0.2,1)",transform:shown?"translateY(0)":"translateY(-110%)",padding:"12px 16px 12px 0"}}>
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
        {/* Tag chips — animated reveal when search is focused or filters active */}
        <div className={`mise-recipes-filters ${filtersOpen ? "mise-recipes-filters--open" : ""}`}>
          {TAGS.map(t=>(
            <TagChip key={t.label} label={t.label} active={activeTag===t.label} onClick={()=>{setActiveTag(activeTag===t.label?null:t.label);}}/>
          ))}
        </div>
      </div>
      <div className="mise-recipe-grid">
        {filtered.map(d=><DishRow key={d.id} dish={d} inWeek={weekDishIds.includes(d.id)} onToggleWeek={onToggleWeek} onClick={()=>onViewDish(d)}/>)}
      </div>
      <div style={{height:140}}/>

      {/* Sort sheet */}
      {sortOpen&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,51,160,0.25)",zIndex:300,display:"flex",alignItems:"flex-end",justifyContent:"center"}} onClick={()=>setSortOpen(false)}>
          <div onClick={e=>e.stopPropagation()} style={{background:T.surface,width:"100%",maxWidth:"none",borderRadius:"16px 16px 0 0",padding:"0 24px env(safe-area-inset-bottom, 0px)",boxSizing:"border-box",animation:"slideUp 0.35s cubic-bezier(0.32,0.72,0,1)"}}>
            <div style={{width:36,height:4,borderRadius:100,background:T.border,margin:"12px auto 8px"}}/>
            <div style={{padding:"8px 0 4px",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:T.muted,fontWeight:600}}>Sort by</div>
            {SORT_OPTIONS.map(o=>(
              <button key={o.id} onClick={()=>{setSort(o.id);setSortOpen(false);}} style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"16px 0",background:"none",border:"none",borderTop:`1px solid ${T.border}`,cursor:"pointer",fontFamily:T.font,fontSize:14,color:T.text,textAlign:"left"}}>
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
    <div ref={scrollRef} className="mise-week-tab" style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",background:"#fff"}}>
      <div className="mise-week-subtabs" style={{position:"sticky",top:0,zIndex:10,background:"#fff",borderBottom:`1px solid ${T.border}`,padding:"0 16px 0 0",display:"flex",flexShrink:0,gap:8}}>
        {[{id:"dishes",label:"Recipes"},{id:"prep",label:"Mise en place"},{id:"shopping",label:"Shopping list"}].map(t=>(
          <button key={t.id} onClick={()=>{setSubTab(t.id);if(scrollRef.current)scrollRef.current.scrollTop=0;}} style={{flex:1,padding:"14px 0",background:"none",border:"none",borderBottom:`2px solid ${subTab===t.id?T.accent:"transparent"}`,color:subTab===t.id?T.accent:T.muted,fontSize:12,fontFamily:T.font,fontWeight:subTab===t.id?600:400,cursor:"pointer",transition:"color 0.2s ease",textAlign:"left"}}>{t.label}</button>
        ))}
      </div>

      {subTab==="dishes"&&(
        <div className="mise-week-dishes-sub">
          {/* Banner — shown when no recipes selected */}
          {weekDishes.length===0&&(
            <div className="mise-week-banner" style={{position:"relative",overflow:"hidden",borderBottom:`1px solid ${T.border}`,minHeight:180,display:"flex",alignItems:"center",justifyContent:"center"}}>
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
                <div style={{fontSize:20,fontWeight:600,color:"rgba(60,30,10,0.75)",lineHeight:1.4,fontFamily:T.font}}>Pick a recipe to get started.</div>
              </div>
            </div>
          )}
          {/* Selected recipes */}
          {weekDishes.map(d=><DishRow key={d.id} dish={d} inWeek={true} onToggleWeek={id=>setWeekDishIds(ids=>ids.filter(i=>i!==id))} onClick={()=>onViewDish(d)}/>)}
          {/* Suggestions */}
          {weekDishes.length>0&&suggestions.length>0&&(
            <div>
              <div className="mise-week-hr-top" style={{padding:"16px 16px 8px 0",borderTop:`1px solid ${T.border}`}}>
                <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Shared bases and ingredients</div>
              </div>
              {suggestions.map(({d})=>(
                <DishRow key={d.id} dish={d} inWeek={false} onToggleWeek={id=>setWeekDishIds(ids=>[...ids,id])} onClick={()=>onViewDish(d)}/>
              ))}
            </div>
          )}
          {/* Suggested recipe groups — always shown */}
          <div className="mise-week-hr-top" style={{borderTop:`1px solid ${T.border}`,padding:"16px 16px 8px 0"}}>
            <div style={{fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",color:T.text,fontWeight:600,fontFamily:T.font}}>Suggested recipes for the week</div>
          </div>
          {recGroups.map((group,gi)=>(
            <div key={gi}>
              <div className="mise-week-group-header mise-week-hr-top" style={{padding:"16px 16px 8px 0",display:"flex",alignItems:"center",gap:12,borderTop:`1px solid ${T.border}`}}>
                <div style={{fontSize:20,fontWeight:600,color:T.text,fontFamily:T.fontTitle,flex:1,minWidth:0}}>{group.theme}</div>
                <button type="button" className="mise-week-add-all-btn" onClick={()=>{
                  setWeekDishIds(ids=>[...new Set([...ids,...group.dishes.map(d=>d.id)])]);
                  if(scrollRef.current) scrollRef.current.scrollTop=0;
                }} style={{background:"none",border:`1px solid ${T.border}`,borderRadius:100,padding:"0 12px",height:36,fontSize:12,fontFamily:T.font,color:T.text,cursor:"pointer",fontWeight:400,flexShrink:0}}>Add all 3</button>
              </div>
              <div className="mise-week-rec-group-dishes">
                {group.dishes.map(d=><DishRow key={d.id} dish={d} inWeek={weekDishIds.includes(d.id)} onToggleWeek={id=>setWeekDishIds(ids=>ids.includes(id)?ids.filter(i=>i!==id):[...ids,id])} onClick={()=>onViewDish(d)}/>)}
              </div>
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
                          <div style={{flex:1,minWidth:0}}>
                            <span style={{fontSize:12,color:ikCk?T.faint:T.text,textDecoration:ikCk?"line-through":"none",fontFamily:T.font}}>
                              {ing.item}{ing.note?<span style={{color:T.muted}}> — {ing.note}</span>:""}
                            </span>
                            {ing._onlyForRecipes?.length>0&&(
                              <div style={{fontSize:11,color:T.muted,fontFamily:T.font,marginTop:2}}>
                                Only needed for: {ing._onlyForRecipes.join(" · ")}
                              </div>
                            )}
                          </div>
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
  <div className="mise-profile-tab" style={{flex:1,overflowY:"auto"}}>
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

const CATALOG_BY_ID = Object.fromEntries(INITIAL_DISHES.map((d) => [d.id, d]));
const CATALOG_BY_SOURCE = (() => {
  const m = {};
  for (const d of INITIAL_DISHES) {
    const k = normalizeRecipePageKey(d.sourceUrl || "");
    if (k) m[k] = d;
  }
  return m;
})();

/**
 * Point catalog dishes at bundled hero URLs. Always prefer the catalog image (by id or sourceUrl)
 * so stale/broken URLs in localStorage or imports don’t hide the photo.
 */
const enrichDishesFromCatalog = (dishes) =>
  dishes.map((d) => {
    let canon = CATALOG_BY_ID[d.id];
    if (!canon && d.sourceUrl) {
      const key = normalizeRecipePageKey(d.sourceUrl);
      if (key) canon = CATALOG_BY_SOURCE[key];
    }
    if (!canon?.image) return d;
    return { ...d, image: canon.image };
  });

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
  return p
    ? { dishes: enrichDishesFromCatalog(p.dishes), weekDishIds: p.weekDishIds }
    : { dishes: INITIAL_DISHES, weekDishIds: [] };
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

  useEffect(() => {
    setDishes((prev) => enrichDishesFromCatalog(prev));
  }, []);

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
    <div className="mise-app-shell" style={{display:"flex",flexDirection:"column",height:"100vh",background:"#fff",fontFamily:T.font,width:"100%",position:"relative",overflow:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { font-size: clamp(14px, 1.6vw, 16px); font-family: 'Poppins', sans-serif; }
        body { margin: 0; background: #fff; }
        input, textarea, button { font-family: inherit; font-size: 16px; }
        input::placeholder { font-size: 14px; opacity: 0.5; }
        img { max-width: 100%; }
        ::-webkit-scrollbar { display: none; }
        scrollbar-width: none;

        .mise-app-shell {
          max-width: none;
          margin: 0;
          width: 100%;
          box-shadow: none;
        }
        .mise-app-header {
          width: 100%;
          box-sizing: border-box;
        }
        .mise-app-main {
          width: 100%;
          box-sizing: border-box;
        }

        .mise-recipes-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          padding: 0 16px 0 0;
          box-sizing: border-box;
          pointer-events: none;
          transition: max-height 0.42s cubic-bezier(0.32, 0.72, 0, 1),
            opacity 0.28s ease,
            padding-top 0.42s cubic-bezier(0.32, 0.72, 0, 1),
            padding-bottom 0.42s cubic-bezier(0.32, 0.72, 0, 1);
        }
        .mise-recipes-filters--open {
          max-height: 200px;
          opacity: 1;
          padding-top: 8px;
          padding-bottom: 8px;
          pointer-events: auto;
        }
        @media (prefers-reduced-motion: reduce) {
          .mise-recipes-filters {
            transition: none;
          }
        }

        .mise-dish-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          padding: 16px 16px 16px 0;
          border-bottom: 1px solid #E8E8E4;
        }
        .mise-dish-media {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          flex-shrink: 0;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }
        .mise-dish-img {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          display: block;
        }
        .mise-dish-footer {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .mise-dish-text { flex: 1; min-width: 0; cursor: pointer; }
        .mise-dish-title {
          font-size: 14px;
          font-weight: 600;
          color: #0033A0;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .mise-dish-source {
          font-size: 12px;
          color: rgba(0,51,160,0.5);
          margin-top: 0;
          font-family: 'Poppins', sans-serif;
        }
        .mise-dish-meta {
          font-size: 12px;
          color: rgba(0,51,160,0.5);
          margin-top: 0;
          font-family: 'Poppins', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mise-app-header-rule {
          position: absolute;
          bottom: 0;
          left: 80px;
          right: 0;
          height: 1px;
          background: #E8E8E4;
        }
        .mise-detail-overlay,
        .mise-original-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 80px;
          right: 0;
        }
        .mise-detail-hero-toolbar {
          display: none;
        }
        .mise-detail-title {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (min-width: 768px) {
          .mise-detail-hero-copy .mise-detail-title {
            overflow-wrap: anywhere;
          }
        }
        .mise-detail-title-row,
        .mise-detail-hero-copy {
          min-width: 0;
        }

        @media (min-width: 768px) {
          .mise-nav-rail {
            border-right: 1px solid #E8E8E4;
            background: #fff;
          }
          .mise-app-header {
            width: 100%;
            padding-left: calc(80px + 64px) !important;
            padding-right:64px !important;
            box-sizing: border-box;
          }
          .mise-app-header-rule {
            left: calc(80px + 64px);
            right: 64px;
          }
          .mise-app-main {
            padding-left: calc(80px + 64px) !important;
            padding-right: 64px !important;
          }
          .mise-recipes-sticky { padding: 12px 0 !important; }
          .mise-recipes-filters,
          .mise-recipes-filters--open {
            padding-right: 0 !important;
          }
          .mise-recipe-grid {
            display: grid;
            gap: 16px;
            padding: 0 0 24px 0;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: stretch;
          }
          .mise-week-rec-group-dishes {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
            padding: 0 0 8px 0;
            align-items: stretch;
          }
          .mise-week-tab .mise-week-subtabs {
            margin-bottom: 16px;
          }
          .mise-week-dishes-sub .mise-week-banner {
            margin-bottom: 16px;
          }
          .mise-week-dishes-sub .mise-week-hr-top {
            margin-top: 16px;
          }
          .mise-week-dishes-sub .mise-week-group-header .mise-week-add-all-btn {
            margin-left: auto;
          }
          .mise-week-tab,
          .mise-profile-tab {
            padding-right: 0;
            box-sizing: border-box;
          }
          .mise-detail-overlay,
          .mise-original-overlay {
            left: calc(80px + 64px);
            right: 64px;
          }
          .mise-detail-week-pill-wrap {
            right: 64px !important;
            display: none !important;
          }
          .mise-detail-hero {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
            gap: 24px;
            align-items: end;
            box-sizing: border-box;
            padding-left: 16px;
            padding-right: 16px;
            width: 100%;
          }
          .mise-detail-hero-visual {
            grid-column: 2;
            grid-row: 1;
            min-width: 0;
          }
          .mise-detail-hero-copy {
            grid-column: 1;
            grid-row: 1;
            min-width: 0;
            max-width: none;
            width: 100%;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            overflow-wrap: break-word;
          }
          .mise-detail-tabbar {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .mise-detail-ingredients,
          .mise-detail-instructions {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .mise-detail-notes {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .mise-detail-title-side-actions {
            display: none !important;
          }
          .mise-detail-hero-toolbar {
            display: flex !important;
          }
          .mise-recipe-grid .mise-dish-row,
          .mise-week-rec-group-dishes .mise-dish-row {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            height: 100%;
            min-height: 0;
            gap: 0;
            padding: 0;
            border: 1px solid #E8E8E4;
            border-radius: 12px;
            overflow: hidden;
            background: #fff;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04);
            border-bottom: none;
          }
          .mise-recipe-grid .mise-dish-media,
          .mise-week-rec-group-dishes .mise-dish-media {
            width: 100%;
            height: auto;
            aspect-ratio: 3 / 2;
            flex-shrink: 0;
            border-radius: 0;
            cursor: pointer;
          }
          .mise-recipe-grid .mise-dish-blob,
          .mise-week-rec-group-dishes .mise-dish-blob { display: none; }
          .mise-recipe-grid .mise-dish-footer,
          .mise-week-rec-group-dishes .mise-dish-footer {
            flex: 1 1 auto;
            min-height: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
            align-items: flex-start;
            gap: 16px;
          }
          .mise-recipe-grid .mise-dish-title,
          .mise-week-rec-group-dishes .mise-dish-title {
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 1.35;
          }
          .mise-recipe-grid .mise-dish-source,
          .mise-week-rec-group-dishes .mise-dish-source { margin-top: 4px; }
          .mise-recipe-grid .mise-dish-meta,
          .mise-week-rec-group-dishes .mise-dish-meta { margin-top: 2px; }
        }
        @media (min-width: 920px) {
          .mise-recipe-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1180px) {
          .mise-recipe-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (min-width: 1440px) {
          .mise-recipe-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
      `}</style>
      <div className="mise-app-header" style={{background:T.surface,padding:"16px 16px 16px 80px",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,position:"relative",opacity:detailDish?0:1,transition:"opacity 0.25s ease",pointerEvents:detailDish?"none":"all"}}>
        <div style={{fontSize:32,fontWeight:600,letterSpacing:"-0.01em",color:T.text,lineHeight:1,fontFamily:T.fontTitle}}>
          {activeTab==="recipes"?"Recipes":activeTab==="week"?"This Week":"Profile"}
        </div>
        <div className="mise-app-header-rule" aria-hidden="true"/>
        {activeTab==="recipes"&&<button onClick={()=>setImportOpen(true)} style={{background:T.text,color:"#fff",border:"none",borderRadius:100,padding:"0 16px",height:36,fontSize:12,fontFamily:T.font,fontWeight:600,cursor:"pointer"}}>+ Add</button>}
        {activeTab==="week"&&<span style={{fontSize:12,color:T.muted}}>{weekDishIds.length} dish{weekDishIds.length!==1?"es":""}</span>}
      </div>
      <div ref={mainScrollRef} className="mise-app-main" style={{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",paddingLeft:80,opacity:detailDish?0:1,transition:"opacity 0.25s ease",pointerEvents:detailDish?"none":"all"}}>
        {activeTab==="recipes"&&<RecipesTab weekDishIds={weekDishIds} onToggleWeek={handleToggleWeek} onViewDish={setDetailDish} dishes={dishes} initialTag={recipeActiveTag} onTagApplied={()=>setRecipeActiveTag(null)}/>}
        {activeTab==="week"&&<ThisWeekTab weekDishIds={weekDishIds} setWeekDishIds={setWeekDishIds} onViewDish={setDetailDish} dishes={dishes}/>}
        {activeTab==="profile"&&<ProfileTab dishes={dishes}/>}
      </div>
      <div className="mise-nav-rail" style={{
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

      {/* DishDetail overlay — slides in from right; inset matches main column */}
      <div className="mise-detail-overlay" style={{
        zIndex:100,
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
      <div className="mise-original-overlay" style={{
        zIndex:200,
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
      <div style={{position:"fixed",bottom:toast?90:-80,left:"50%",transform:"translateX(-50%)",transition:"bottom 0.4s cubic-bezier(0.34,1.56,0.64,1)",zIndex:400,maxWidth:400,width:"min(400px, calc(100vw - 32px))"}}>
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

