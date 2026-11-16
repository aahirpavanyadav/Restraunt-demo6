export const CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: '🍽️', count: 24 },
  { id: 'burgers', name: 'Gourmet Burgers', icon: '🍔', count: 5 },
  { id: 'pizza', name: 'Artisan Pizzas', icon: '🍕', count: 4 },
  { id: 'biryani', name: 'Dum Biryani Pots', icon: '🍚', count: 4 },
  { id: 'wraps', name: 'Toasted Wraps', icon: '🌯', count: 3 },
  { id: 'combos', name: 'Saver Combos', icon: '🍱', count: 3 },
  { id: 'beverages', name: 'Shakes & Coolers', icon: '🥤', count: 3 },
  { id: 'desserts', name: 'Hot Desserts', icon: '🍰', count: 2 },
];

export const MENU_ITEMS = [
  // BURGERS
  {
    id: 'b1',
    name: 'The Beast Double Smash Burger',
    category: 'burgers',
    price: 349,
    originalPrice: 429,
    description: 'Two smashed premium beef-style crisp patties, double aged melted cheddar, caramelized onions, house truffle crave-sauce on a toasted brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 1,
    serves: 'Serves 1',
    rating: 4.9,
    reviewsCount: 384,
    customizable: true,
    addonGroups: [
      {
        name: 'Extra Toppings',
        type: 'multiple',
        options: [
          { id: 'cheese', name: 'Extra Cheddar Slice', price: 35 },
          { id: 'bacon', name: 'Crispy Smoked Strips', price: 60 },
          { id: 'jalapeno', name: 'Pickled Jalapenos', price: 20 },
        ]
      },
      {
        name: 'Sides & Fries',
        type: 'single',
        options: [
          { id: 'none', name: 'No Side', price: 0 },
          { id: 'peri-fries', name: 'Peri-Peri Crinkle Fries', price: 89 },
          { id: 'onion-rings', name: 'Golden Onion Rings (4 pcs)', price: 99 },
        ]
      }
    ]
  },
  {
    id: 'b2',
    name: 'Nashville Hot Crunchy Chicken Burger',
    category: 'burgers',
    price: 299,
    originalPrice: 359,
    description: 'Crispy buttermilk battered chicken breast tossed in cayenne oil glaze, cooling creamy coleslaw, dill pickle spears, brioche bun.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 3,
    serves: 'Serves 1',
    rating: 4.8,
    reviewsCount: 290,
    customizable: true,
    addonGroups: [
      {
        name: 'Spice Level',
        type: 'single',
        options: [
          { id: 'med', name: 'Medium Zing', price: 0 },
          { id: 'hot', name: 'Nashville Hot 🔥', price: 0 },
          { id: 'fire', name: 'Ghost Pepper Fire 🔥🔥', price: 25 },
        ]
      },
      {
        name: 'Add-on Dip',
        type: 'multiple',
        options: [
          { id: 'garlic-mayo', name: 'Smoked Garlic Mayo', price: 25 },
          { id: 'ranch', name: 'Herb Buttermilk Ranch', price: 30 }
        ]
      }
    ]
  },
  {
    id: 'b3',
    name: 'Truffle Mushroom Swiss Burger',
    category: 'burgers',
    price: 319,
    originalPrice: 379,
    description: 'Herb-sautéed wild button and shiitake mushrooms, melted Swiss cheese, crispy fried onion strings, and roasted garlic aioli.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 0,
    serves: 'Serves 1',
    rating: 4.7,
    reviewsCount: 156,
    customizable: true,
    addonGroups: [
      {
        name: 'Extras',
        type: 'multiple',
        options: [
          { id: 'extra-cheese', name: 'Extra Swiss Cheese', price: 40 },
          { id: 'fries', name: 'Salted Fries Basket', price: 69 }
        ]
      }
    ]
  },
  {
    id: 'b4',
    name: 'Fiery Peri-Peri Paneer Crunch Burger',
    category: 'burgers',
    price: 249,
    originalPrice: 299,
    description: 'Thick marinated cottage cheese steak crumb-fried to golden perfection, shredded iceberg, chipotle mayo, and fresh tomato.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 1',
    rating: 4.8,
    reviewsCount: 215,
    customizable: true,
    addonGroups: [
      {
        name: 'Choice of Sauce',
        type: 'single',
        options: [
          { id: 'chipotle', name: 'Signature Chipotle Mayo', price: 0 },
          { id: 'mint-mayo', name: 'Desi Mint Mayo', price: 0 },
        ]
      }
    ]
  },
  {
    id: 'b5',
    name: 'Smoky BBQ Pulled Chicken Burger',
    category: 'burgers',
    price: 289,
    originalPrice: 349,
    description: 'Slow-cooked hickory smoked shredded chicken breast drenched in sweet tangy BBQ glaze, purple cabbage slaw, toasted potato bun.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: false,
    spiceLevel: 1,
    serves: 'Serves 1',
    rating: 4.6,
    reviewsCount: 118,
    customizable: false
  },

  // PIZZA
  {
    id: 'p1',
    name: 'Woodfire Pepperoni Explosion (11")',
    category: 'pizza',
    price: 499,
    originalPrice: 599,
    description: 'Fermented 48-hour sourdough crust, San Marzano tomato sauce, generous spicy pork pepperoni cups, whole milk mozzarella, hot honey drizzle.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 2',
    rating: 4.9,
    reviewsCount: 420,
    customizable: true,
    addonGroups: [
      {
        name: 'Crust Upgrade',
        type: 'single',
        options: [
          { id: 'regular', name: 'Classic Hand-Tossed', price: 0 },
          { id: 'cheese-burst', name: 'Cheese Burst Crust', price: 95 },
        ]
      },
      {
        name: 'Dips',
        type: 'multiple',
        options: [
          { id: 'cheddar-dip', name: 'Warm Creamy Cheddar Dip', price: 35 },
          { id: 'hot-honey', name: 'Chilli Hot Honey Cup', price: 40 }
        ]
      }
    ]
  },
  {
    id: 'p2',
    name: 'Wild Truffle & Mushroom Bianca (11")',
    category: 'pizza',
    price: 469,
    originalPrice: 549,
    description: 'White garlic base, shredded fior di latte mozzarella, sautéed cremini & oyster mushrooms, fresh thyme, and white truffle oil emulsion.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 0,
    serves: 'Serves 2',
    rating: 4.8,
    reviewsCount: 172,
    customizable: true,
    addonGroups: [
      {
        name: 'Crust Upgrade',
        type: 'single',
        options: [
          { id: 'classic', name: 'Hand-Stretched Sourdough', price: 0 },
          { id: 'cheese-burst', name: 'Cheese Burst Edge', price: 95 }
        ]
      }
    ]
  },
  {
    id: 'p3',
    name: 'Butter Chicken Supreme Pizza (11")',
    category: 'pizza',
    price: 479,
    originalPrice: 569,
    description: 'Rich makhani gravy sauce, clay-oven tandoori chicken tikka chunks, charred red onions, capsicum, fresh coriander, mozzarella.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 2',
    rating: 4.9,
    reviewsCount: 310,
    customizable: true,
    addonGroups: [
      {
        name: 'Extra Topping',
        type: 'multiple',
        options: [
          { id: 'extra-tikka', name: 'Double Chicken Tikka', price: 75 },
          { id: 'extra-cheese', name: 'Extra Mozzarella Layer', price: 65 }
        ]
      }
    ]
  },
  {
    id: 'p4',
    name: 'Farmhouse Loaded Garden Pizza (11")',
    category: 'pizza',
    price: 399,
    originalPrice: 479,
    description: 'Herb tomato sauce, mozzarella, bell peppers, English corn, black olives, red paprika, mushrooms, and fresh basil leaves.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 1,
    serves: 'Serves 2',
    rating: 4.6,
    reviewsCount: 198,
    customizable: false
  },

  // BIRYANI
  {
    id: 'bi1',
    name: 'Hyderabadi Dum Chicken Biryani Pot',
    category: 'biryani',
    price: 349,
    originalPrice: 429,
    description: 'Slow-cooked layered basmati rice with succulent bone-in chicken marinated in saffron, caramelized onions, mint, and whole fragrant spices. Served with Mirchi Ka Salan & Raita.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 1-2',
    rating: 4.9,
    reviewsCount: 650,
    customizable: true,
    addonGroups: [
      {
        name: 'Accompaniments',
        type: 'multiple',
        options: [
          { id: 'extra-raita', name: 'Extra Burani Garlic Raita', price: 29 },
          { id: 'extra-salan', name: 'Extra Mirchi Ka Salan', price: 35 },
          { id: 'boiled-egg', name: 'Spiced Boiled Egg (2 pcs)', price: 40 }
        ]
      }
    ]
  },
  {
    id: 'bi2',
    name: 'Nawabi Mutton Dum Biryani Claypot',
    category: 'biryani',
    price: 499,
    originalPrice: 599,
    description: 'Tender baby mutton shanks slow-simmered for 4 hours in sealed clay handi with aged long-grain basmati, brown onions, and pure desi ghee.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 1-2',
    rating: 4.9,
    reviewsCount: 440,
    customizable: true,
    addonGroups: [
      {
        name: 'Add-ons',
        type: 'multiple',
        options: [
          { id: 'boiled-egg', name: 'Spiced Boiled Egg', price: 20 },
          { id: 'extra-ghee', name: 'Tadkewala Desi Ghee Drizzle', price: 30 }
        ]
      }
    ]
  },
  {
    id: 'bi3',
    name: 'Shahi Malai Paneer Dum Biryani',
    category: 'biryani',
    price: 319,
    originalPrice: 389,
    description: 'Soft malai paneer cubes marinated in yogurt and aromatic spices, layered with fragrant saffron rice, fried cashews, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e9a?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 1,
    serves: 'Serves 1-2',
    rating: 4.7,
    reviewsCount: 230,
    customizable: true,
    addonGroups: [
      {
        name: 'Add-ons',
        type: 'multiple',
        options: [
          { id: 'extra-raita', name: 'Cucumber Mint Raita', price: 25 },
          { id: 'gulab-jamun', name: 'Hot Gulab Jamun (2 pcs)', price: 60 }
        ]
      }
    ]
  },
  {
    id: 'bi4',
    name: 'Egg Biryani with Guntur Masala',
    category: 'biryani',
    price: 279,
    originalPrice: 329,
    description: '3 golden fried eggs roasted in fiery Andhra spices, served over aromatic dum cooked basmati rice with raita.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: false,
    spiceLevel: 3,
    serves: 'Serves 1',
    rating: 4.6,
    reviewsCount: 180,
    customizable: false
  },

  // WRAPS
  {
    id: 'w1',
    name: 'Crispy Fried Chicken Shawarma Wrap',
    category: 'wraps',
    price: 229,
    originalPrice: 279,
    description: 'Crispy fried tenders, crunchy pickled turnip, fries tucked inside, creamy Lebanese toum garlic sauce, rolled in a toasted rumali flatbread.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 1',
    rating: 4.8,
    reviewsCount: 310,
    customizable: true,
    addonGroups: [
      {
        name: 'Extras',
        type: 'multiple',
        options: [
          { id: 'extra-cheese', name: 'Melted Mozzarella Inside', price: 30 },
          { id: 'extra-toum', name: 'Extra Garlic Toum Dip', price: 25 }
        ]
      }
    ]
  },
  {
    id: 'w2',
    name: 'Paneer Tikka Masala Kathi Roll',
    category: 'wraps',
    price: 199,
    originalPrice: 249,
    description: 'Char-grilled cottage cheese tossed in tandoori spices, laccha onions, green mint chutney, and chaat masala wrapped in a flaky lachha paratha.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 1',
    rating: 4.7,
    reviewsCount: 245,
    customizable: true,
    addonGroups: [
      {
        name: 'Roll Style',
        type: 'single',
        options: [
          { id: 'paratha', name: 'Flaky Desi Paratha', price: 0 },
          { id: 'wholewheat', name: 'Whole Wheat Roti', price: 0 },
        ]
      }
    ]
  },
  {
    id: 'w3',
    name: 'BBQ Smoked Chicken Burrito Wrap',
    category: 'wraps',
    price: 239,
    originalPrice: 289,
    description: 'Grilled shredded chicken, seasoned cilantro lime rice, black beans, sweet corn, salsa roja, and cheddar cheese rolled in a large toasted tortilla.',
    image: 'https://images.unsplash.com/photo-1584031036380-3fb6f2d51880?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: false,
    spiceLevel: 1,
    serves: 'Serves 1',
    rating: 4.6,
    reviewsCount: 162,
    customizable: false
  },

  // COMBOS
  {
    id: 'c1',
    name: 'Solo Crave Box: Beast Burger + Peri Fries + Coke',
    category: 'combos',
    price: 449,
    originalPrice: 578,
    description: '1 Beast Double Smash Burger + 1 Regular Peri-Peri Crinkle Fries + 1 Chilled Coca-Cola Can (330ml) + 1 Garlic Dip.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 1,
    serves: 'Serves 1-2',
    rating: 4.9,
    reviewsCount: 512,
    customizable: false
  },
  {
    id: 'c2',
    name: 'Biryani Party Pot Combo for 2',
    category: 'combos',
    price: 699,
    originalPrice: 899,
    description: '1 Large Dum Chicken Biryani Pot (Double Meat) + 2 Boiled Eggs + 2 Spiced Buttermilks + 2 Hot Choco Lava Cakes + Salan & Raita.',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=900&auto=format&fit=crop',
    isVeg: false,
    isBestSeller: true,
    spiceLevel: 2,
    serves: 'Serves 2-3',
    rating: 4.9,
    reviewsCount: 430,
    customizable: false
  },
  {
    id: 'c3',
    name: 'Veggie Feast: Farmhouse Pizza + Paneer Roll + Drink',
    category: 'combos',
    price: 549,
    originalPrice: 698,
    description: '1 Farmhouse 11" Loaded Pizza + 1 Paneer Tikka Kathi Roll + 1 Lemon Iced Tea (350ml). Save ₹149 instantly!',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 1,
    serves: 'Serves 2',
    rating: 4.7,
    reviewsCount: 220,
    customizable: false
  },

  // BEVERAGES
  {
    id: 'bv1',
    name: 'Belgian Dark Chocolate Fudge Shake',
    category: 'beverages',
    price: 189,
    originalPrice: 229,
    description: 'Rich 70% dark Belgian cocoa blended with whole milk ice cream, topped with chocolate vermicelli and fudge drizzle.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: true,
    spiceLevel: 0,
    serves: 'Serves 1 (350ml)',
    rating: 4.9,
    reviewsCount: 280,
    customizable: false
  },
  {
    id: 'bv2',
    name: 'Classic Lemon Mint Virgin Mojito',
    category: 'beverages',
    price: 139,
    originalPrice: 169,
    description: 'Freshly muddled Persian mint leaves, fresh lime juice, cane sugar syrup, and chilled sparkling soda.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 0,
    serves: 'Serves 1 (350ml)',
    rating: 4.7,
    reviewsCount: 165,
    customizable: false
  },
  {
    id: 'bv3',
    name: 'Nutella Brownie Thickshake',
    category: 'beverages',
    price: 209,
    originalPrice: 249,
    description: 'Warm fudge brownie pieces blended with creamy Nutella spread, cold milk, and whipped vanilla topping.',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: true,
    spiceLevel: 0,
    serves: 'Serves 1 (350ml)',
    rating: 4.8,
    reviewsCount: 198,
    customizable: false
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Molten Choco Lava Cake',
    category: 'desserts',
    price: 129,
    originalPrice: 169,
    description: 'Baked to order warm chocolate cake with an oozing liquid chocolate center. Delivered in thermal foil box.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: true,
    spiceLevel: 0,
    serves: 'Serves 1',
    rating: 4.9,
    reviewsCount: 480,
    customizable: false
  },
  {
    id: 'd2',
    name: 'New York Baked Cheesecake Slice',
    category: 'desserts',
    price: 199,
    originalPrice: 249,
    description: 'Velvety smooth cream cheese custard on a buttery graham cracker crust, topped with wild blueberry compote.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=900&auto=format&fit=crop',
    isVeg: true,
    isBestSeller: false,
    spiceLevel: 0,
    serves: 'Serves 1',
    rating: 4.8,
    reviewsCount: 210,
    customizable: false
  }
];
