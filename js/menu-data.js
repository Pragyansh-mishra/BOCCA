/* ==========================================================================
   BOCCA ITALIAN COFFEE & PIZZA HOUSE
   Complete Structured Menu Database
   Dungarpur, Rajasthan, India
   ========================================================================== */

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: '✦' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
  { id: 'starters', name: 'Fries & Starters', icon: '🍟' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
  { id: 'open-toast', name: 'Open Toast', icon: '🍞' },
  { id: 'wraps', name: 'Wraps & Bites', icon: '🌯' },
  { id: 'hot-coffee', name: 'Hot Coffee', icon: '☕' },
  { id: 'iced-coffee', name: 'Iced Coffee', icon: '🧊' },
  { id: 'iced-tea', name: 'Iced Tea', icon: '🧋' },
  { id: 'frappes', name: 'Frappes', icon: '🥤' },
  { id: 'milkshakes', name: 'Milkshakes', icon: '🥛' },
  { id: 'mocktails', name: 'Mocktails & Coolers', icon: '🍹' },
  { id: 'hot-chocolate', name: 'Hot Chocolate', icon: '🍫' },
  { id: 'cakes', name: 'Cakes', icon: '🎂' },
  { id: 'cheesecakes', name: 'Cheesecakes & Pastries', icon: '🍰' },
  { id: 'additional', name: 'Other Items', icon: '🍪' }
];

const MENU_ITEMS = [
  // ------------------------------------------------------------------------
  // CATEGORY 1: FRIES AND STARTERS
  // ------------------------------------------------------------------------
  {
    id: 'starter-1',
    name: 'Dirty Nachos',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Crisp tortilla chips baked with spiced beans, gooey cheese sauce, pickled jalapeños, and tangy salsa.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Popular',
    price: null
  },
  {
    id: 'starter-2',
    name: 'Salted Fries',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Classic golden shoestring potato fries, lightly salted and fried to crisp perfection.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'starter-3',
    name: 'Garlic Potato Bites',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Crispy herb-crusted potato nuggets infused with roasted garlic and fragrant Italian spices.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'starter-4',
    name: 'Loaded Cheese Fries',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Crispy golden fries smothered under a decadent layer of warm melted cheddar and mozzarella cheese sauce.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'House Favorite',
    price: null
  },
  {
    id: 'starter-5',
    name: 'Mushroom Croquettes',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Golden breaded croquettes stuffed with creamy sautéed mushrooms, herbs, and melted cheese.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'starter-6',
    name: 'Onion Rings',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Crisp, golden-battered sweet onion rings served with our signature house dipping dip.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'starter-7',
    name: 'Peri Peri Fries',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Crunchy French fries generously tossed in fiery and tangy African bird’s eye peri-peri spice dust.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Spicy',
    price: null
  },
  {
    id: 'starter-8',
    name: 'Potato Wedges',
    categoryId: 'starters',
    categoryName: 'Fries & Starters',
    desc: 'Thick skin-on russet potato wedges seasoned with cracked black pepper and Mediterranean herbs.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 2: SANDWICHES
  // ------------------------------------------------------------------------
  {
    id: 'sand-1',
    name: 'Cheese Sandwich',
    categoryId: 'sandwiches',
    categoryName: 'Sandwiches',
    desc: 'Grilled buttery bread packed with gooey melted cheese, toasted to a golden crisp crunch.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'sand-2',
    name: 'Corn & Cheese Sandwich',
    categoryId: 'sandwiches',
    categoryName: 'Sandwiches',
    desc: 'Sweet golden corn kernels paired with creamy spiced cheese between toasted artisan sandwich bread.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Popular',
    price: null
  },
  {
    id: 'sand-3',
    name: 'Paneer Masala Sandwich',
    categoryId: 'sandwiches',
    categoryName: 'Sandwiches',
    desc: 'Spiced cottage cheese cubes sautéed with onions, capsicum, and aromatic herbs in toasted bread.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Desi Twist',
    price: null
  },
  {
    id: 'sand-4',
    name: 'Potato Sandwich',
    categoryId: 'sandwiches',
    categoryName: 'Sandwiches',
    desc: 'Savory spiced potato mash layered with fresh greens and mint chutney in crisp grilled slices.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'sand-5',
    name: 'Veg Sandwich',
    categoryId: 'sandwiches',
    categoryName: 'Sandwiches',
    desc: 'Freshly sliced cucumber, vine-ripened tomatoes, lettuce, and seasoning on soft bakery bread.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 3: BURGERS
  // ------------------------------------------------------------------------
  {
    id: 'burger-1',
    name: 'Cheese Burger',
    categoryId: 'burgers',
    categoryName: 'Burgers',
    desc: 'Crisp vegetable patty tucked inside a buttered brioche bun with cheddar slice, lettuce, and mayo.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'burger-2',
    name: 'Fatty Burger',
    categoryId: 'burgers',
    categoryName: 'Burgers',
    desc: 'Double-decker loaded vegetable patty burger packed with caramelized onions, double cheese, and house sauce.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Loaded',
    price: null
  },
  {
    id: 'burger-3',
    name: 'Mushroom & Cheese Burger',
    categoryId: 'burgers',
    categoryName: 'Burgers',
    desc: 'Pan-seared button mushrooms, garlic butter glaze, crisp lettuce, and melting cheese in a warm bun.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'burger-4',
    name: 'Paneer Tikka Burger',
    categoryId: 'burgers',
    categoryName: 'Burgers',
    desc: 'Char-grilled tandoori spiced paneer steak with crunchy onions, tomatoes, and spicy mint mayo.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'burger-5',
    name: 'Veg Burger',
    categoryId: 'burgers',
    categoryName: 'Burgers',
    desc: 'Seasoned spiced vegetable cutlet, crisp iceberg lettuce, tomato slice, and creamy burger relish.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 4: PASTA
  // ------------------------------------------------------------------------
  {
    id: 'pasta-1',
    name: 'Alfredo Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'Penne pasta tossed in rich, velvety white cream sauce with garlic butter, parmesan, and herbs.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'pasta-2',
    name: 'Aglio Olio Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'Spaghetti gently tossed in extra virgin olive oil, toasted garlic slivers, chili flakes, and fresh parsley.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    badge: 'Classic',
    price: null
  },
  {
    id: 'pasta-3',
    name: 'Arrabbiata Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'Penne in fiery tomato sauce made with crushed red peppers, garlic, and fresh sweet basil.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    badge: 'Spicy',
    price: null
  },
  {
    id: 'pasta-4',
    name: 'Pesto Cherry Tomato Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'Fragrant stone-ground basil pesto pasta tossed with blistered sweet cherry tomatoes and pine nuts.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    price: null
  },
  {
    id: 'pasta-5',
    name: 'Pesto Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'Italian pasta folded with vibrant green Genovese basil pesto, extra virgin olive oil, and parmesan.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    price: null
  },
  {
    id: 'pasta-6',
    name: 'Pink Pasta',
    categoryId: 'pasta',
    categoryName: 'Pasta',
    desc: 'The best of both worlds: a luscious blend of rich Alfredo cream and zesty pomodoro tomato sauce.',
    image: 'assets/media/bocca_pasta_artisan.jpg',
    badge: 'House Favorite',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 5: OPEN TOAST
  // ------------------------------------------------------------------------
  {
    id: 'toast-1',
    name: 'Avocado Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Crushed ripe avocado on toasted artisan sourdough, finished with sea salt, chili flakes, and olive oil drizzle.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Café Special',
    price: null
  },
  {
    id: 'toast-2',
    name: 'Basil Pesto Open Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Toasted baguette slathered in fragrant basil pesto, sliced tomatoes, and melted mozzarella.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-3',
    name: 'Cheese Chilli Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Toasted bread topped with sharp melted cheese, fiery chopped green chilies, and aromatic herbs.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-4',
    name: 'Cheese Garlic Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Crusty bread brushed with garlic-infused butter and layered with bubbling golden mozzarella.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-5',
    name: 'Chilli Cheese Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Golden crisp toast crowned with spicy melted cheese and bell pepper mix.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-6',
    name: 'Chilli Garlic Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Bold roasted garlic butter spread, chili flakes, and fresh parsley toasted until fragrant and crispy.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-7',
    name: 'Creamy Mushroom Open Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Sautéed buttered button mushrooms in garlic cream sauce piled over crusty warm bread.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-8',
    name: 'Garlic Bread Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Classic Italian style toasted bread with aromatic garlic herb butter.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'toast-9',
    name: 'Pizza Bread Toast',
    categoryId: 'open-toast',
    categoryName: 'Open Toast',
    desc: 'Thick toasted slice spread with rich pizza sauce, diced vegetables, oregano, and bubbling cheese.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 6: PIZZA
  // ------------------------------------------------------------------------
  {
    id: 'pizza-1',
    name: 'Bocca Special Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Our house specialty: hand-tossed artisan crust loaded with signature herb sauce, exotic veggies, paneer, olives, and premium mozzarella.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'pizza-2',
    name: 'Corn & Cheese Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Sweet golden sweetcorn over spiced tomato sauce with generous molten mozzarella cheese.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    price: null
  },
  {
    id: 'pizza-3',
    name: 'Margherita Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'The timeless Neapolitan classic: San Marzano style tomato sauce, rich mozzarella, fresh sweet basil, and extra virgin olive oil.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Classic',
    price: null
  },
  {
    id: 'pizza-4',
    name: 'Paneer Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Soft spiced cottage cheese cubes, sweet bell peppers, red onions, and mozzarella on stone-baked dough.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    price: null
  },
  {
    id: 'pizza-5',
    name: 'Paneer Tikka Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Marinated tandoori paneer tikka, crunchy onions, capsicum, coriander, and spiced tomato base.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Popular',
    price: null
  },
  {
    id: 'pizza-6',
    name: 'Truffle Mushroom Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Sautéed earth mushrooms, aromatic truffle oil essence, garlic herbs, and melted fior di latte mozzarella.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Gourmet',
    price: null
  },
  {
    id: 'pizza-7',
    name: 'Truffle Mushroom Premium Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'Premium blend of wild mushrooms, rich truffle glaze, caramelized onions, herbs, and double cheese blend.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Premium',
    price: null
  },
  {
    id: 'pizza-8',
    name: 'Veggies Overloaded Pizza',
    categoryId: 'pizza',
    categoryName: 'Pizza',
    desc: 'A vibrant garden feast: bell peppers, sweet corn, mushrooms, black olives, onions, and jalapenos on bubbling mozzarella.',
    image: 'assets/media/bocca_pizza_hero.jpg',
    badge: 'Loaded',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 7: WRAPS AND BITES
  // ------------------------------------------------------------------------
  {
    id: 'wrap-1',
    name: 'AOP Spicy Wrap',
    categoryId: 'wraps',
    categoryName: 'Wraps & Bites',
    desc: 'Flavors inspired by Aglio Olio Peperoncino: sautéed veggies, garlic chili glaze, and spiced dressing in a toasted tortilla.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'wrap-2',
    name: 'Cheese Cigar Rolls',
    categoryId: 'wraps',
    categoryName: 'Wraps & Bites',
    desc: 'Crispy fried golden pastry rolls bursting with warm seasoned mozzarella and herb filling.',
    image: 'assets/media/bocca_burger_starters.jpg',
    badge: 'Snack Favorite',
    price: null
  },
  {
    id: 'wrap-3',
    name: 'Mushroom Wrap',
    categoryId: 'wraps',
    categoryName: 'Wraps & Bites',
    desc: 'Sautéed garlic mushrooms, crisp salad greens, and creamy house dressing rolled in warm flatbread.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'wrap-4',
    name: 'Paneer Wrap',
    categoryId: 'wraps',
    categoryName: 'Wraps & Bites',
    desc: 'Pan-seared spiced paneer strips, crunchy peppers, shredded lettuce, and tangy mint mayo in a soft wrap.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },
  {
    id: 'wrap-5',
    name: 'Veg Shawarma Wrap',
    categoryId: 'wraps',
    categoryName: 'Wraps & Bites',
    desc: 'Middle-Eastern inspired spiced vegetable and paneer mix, pickled cucumbers, and garlic tahini mayo.',
    image: 'assets/media/bocca_burger_starters.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 8: HOT COFFEE
  // ------------------------------------------------------------------------
  {
    id: 'coffee-1',
    name: 'Americano',
    categoryId: 'hot-coffee',
    categoryName: 'Hot Coffee',
    desc: 'Freshly extracted double espresso shot drawn over hot water, creating a clean, rich, and aromatic cup.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'coffee-2',
    name: 'Espresso',
    categoryId: 'hot-coffee',
    categoryName: 'Hot Coffee',
    desc: 'Intense single-origin roasted coffee shot crowned with velvety hazelnut crema.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Classic',
    price: null
  },
  {
    id: 'coffee-3',
    name: 'Honey Cinnamon Cappuccino',
    categoryId: 'hot-coffee',
    categoryName: 'Hot Coffee',
    desc: 'Rich espresso, steamed milk foam, natural forest honey, and freshly ground Ceylon cinnamon.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'coffee-4',
    name: 'Latte',
    categoryId: 'hot-coffee',
    categoryName: 'Hot Coffee',
    desc: 'Smooth espresso combined with silky micro-foamed milk, poured with elegant barista latte art.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'coffee-5',
    name: 'Macchiato',
    categoryId: 'hot-coffee',
    categoryName: 'Hot Coffee',
    desc: 'Bold espresso gently marked with a dollop of warm textured milk foam.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 9: ICED COFFEE
  // ------------------------------------------------------------------------
  {
    id: 'iced-1',
    name: 'Iced Americano',
    categoryId: 'iced-coffee',
    categoryName: 'Iced Coffee',
    desc: 'Chilled espresso poured over crystal ice cubes and cold filtered water. Crisp, bold, and refreshing.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'iced-2',
    name: 'Iced Café Mocha',
    categoryId: 'iced-coffee',
    categoryName: 'Iced Coffee',
    desc: 'Cold espresso blended with rich chocolate ganache, chilled milk, and served over ice.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'iced-3',
    name: 'Iced Latte',
    categoryId: 'iced-coffee',
    categoryName: 'Iced Coffee',
    desc: 'Chilled whole milk poured over ice, crowned with a freshly pulled espresso shot.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'iced-4',
    name: 'Iced Spanish Latte',
    categoryId: 'iced-coffee',
    categoryName: 'Iced Coffee',
    desc: 'Our bestselling iced coffee: velvety condensed milk, cold whole milk, and bold espresso over ice cubes.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'iced-5',
    name: 'Iced Tiramisu Creamy Latte',
    categoryId: 'iced-coffee',
    categoryName: 'Iced Coffee',
    desc: 'Espresso infused with Italian mascarpone essence, chilled milk, and dusted with bittersweet cocoa.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Indulgent',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 10: ICED TEA
  // ------------------------------------------------------------------------
  {
    id: 'tea-1',
    name: 'Bocca Special Hibiscus Iced Tea',
    categoryId: 'iced-tea',
    categoryName: 'Iced Tea',
    desc: 'Brewed ruby-red wild hibiscus flower tea, lightly sweetened with citrus notes and served ice cold.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    badge: 'Signature',
    price: null
  },
  {
    id: 'tea-2',
    name: 'Cranberry Iced Tea',
    categoryId: 'iced-tea',
    categoryName: 'Iced Tea',
    desc: 'Crisp black tea steeped with tart cranberry juice, mint leaves, and chilled ice.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'tea-3',
    name: 'Lemon Iced Tea',
    categoryId: 'iced-tea',
    categoryName: 'Iced Tea',
    desc: 'The classic refresher: brisk Ceylon tea, freshly squeezed lemon juice, and pure cane sweetness.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'tea-4',
    name: 'Peach Iced Tea',
    categoryId: 'iced-tea',
    categoryName: 'Iced Tea',
    desc: 'Fragrant summer peach purée infused with chilled iced tea and fresh lemon wheels.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'tea-5',
    name: 'Strawberry Iced Tea',
    categoryId: 'iced-tea',
    categoryName: 'Iced Tea',
    desc: 'Sweet ripe strawberry essence blended with freshly brewed cold tea and crushed ice.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 11: FRAPPES
  // ------------------------------------------------------------------------
  {
    id: 'frappe-1',
    name: 'Classic Frappe',
    categoryId: 'frappes',
    categoryName: 'Frappes',
    desc: 'Rich espresso blended with vanilla cream, whole milk, and crushed ice, finished with whipped topping.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'frappe-2',
    name: 'Nutella Frappe',
    categoryId: 'frappes',
    categoryName: 'Frappes',
    desc: 'Creamy roasted hazelnut cocoa Nutella blended with iced espresso, milk, and chocolate swirls.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Popular',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 12: MILKSHAKES
  // ------------------------------------------------------------------------
  {
    id: 'shake-1',
    name: 'Bocca Special Ferrero Rocher Shake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Crushed Ferrero Rocher chocolates blended with hazelnut cream, vanilla ice cream, and chocolate fudge.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'shake-2',
    name: 'Chocolate Milkshake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Classic thick milkshake made with rich Belgian cocoa sauce, chocolate cream, and chilled milk.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'shake-3',
    name: 'KitKat Milkshake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Crispy chocolate wafer fingers blended into a thick milkshake, topped with crunchy KitKat chunks.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'shake-4',
    name: 'Lotus Biscoff Shake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Decadent spiced Belgian speculoos cookie butter blended with milk, crowned with whipped cream and biscoff crumble.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'shake-5',
    name: 'Nutella Shake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Generous spoonfuls of Italian Nutella whipped with cold milk and rich dairy ice cream.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'shake-6',
    name: 'Oreo Milkshake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Dark chocolate cookies and cream blended until thick, served with cookie crumble topping.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'shake-7',
    name: 'Strawberry Milkshake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Sweet strawberry puree swirled with chilled dairy milk and creamy vanilla bean ice cream.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'shake-8',
    name: 'Vanilla Milkshake',
    categoryId: 'milkshakes',
    categoryName: 'Milkshakes',
    desc: 'Timeless Madagascar vanilla bean shake made thick, velvety, and delightfully comforting.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 13: MOCKTAILS AND COOLERS
  // ------------------------------------------------------------------------
  {
    id: 'mock-1',
    name: 'Bocca Special Red Bull Mojito',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Energizing Red Bull poured over muddled garden mint, lime wedges, and sparkling soda on crushed ice.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    badge: 'Signature',
    price: null
  },
  {
    id: 'mock-2',
    name: 'Classic Lemonade',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Freshly hand-squeezed yellow lemons, organic sugar syrup, and chilled sparkling or still water.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'mock-3',
    name: 'Mint Mojito',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Fresh garden spearmint leaves, lime wedges, brown sugar syrup, and fizzy chilled club soda.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    badge: 'Classic',
    price: null
  },
  {
    id: 'mock-4',
    name: 'Passion Fruit Cooler',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Exotic tropical passion fruit pulp, crushed ice, mint leaves, and refreshing bubbly soda.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'mock-5',
    name: 'Piña Colada Mocktail',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Creamy coconut cream blended with sweet pineapple juice and crushed ice.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'mock-6',
    name: 'Strawberry Cooler',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Sweet crushed strawberries, lime juice, fresh mint, and fizzy soda water.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'mock-7',
    name: 'Sunrise Cooler',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Layered citrus juice blend with ruby grenadine syrup, resembling a glowing morning sunrise.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },
  {
    id: 'mock-8',
    name: 'Watermelon Mojito',
    categoryId: 'mocktails',
    categoryName: 'Mocktails & Coolers',
    desc: 'Crisp fresh watermelon juice muddled with garden mint and lime, finished with chilled soda.',
    image: 'assets/media/68496b860d8ac42e0320f334_BelliniPeach.avif',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 14: HOT CHOCOLATE
  // ------------------------------------------------------------------------
  {
    id: 'choco-1',
    name: 'Bocca Special Thick Hot Chocolate',
    categoryId: 'hot-chocolate',
    categoryName: 'Hot Chocolate',
    desc: 'Italian style dense cioccolata calda crafted with real melted dark chocolate and rich cream.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'choco-2',
    name: 'Dark Hot Chocolate',
    categoryId: 'hot-chocolate',
    categoryName: 'Hot Chocolate',
    desc: '70% bittersweet dark cocoa melted into steamed whole milk for an intense chocolate warmth.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'choco-3',
    name: 'Marshmallow Hot Chocolate',
    categoryId: 'hot-chocolate',
    categoryName: 'Hot Chocolate',
    desc: 'Velvety hot chocolate topped with fluffy toasted mini marshmallows that melt into the cup.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    price: null
  },
  {
    id: 'choco-4',
    name: 'Nutella Hot Chocolate',
    categoryId: 'hot-chocolate',
    categoryName: 'Hot Chocolate',
    desc: 'Rich hot chocolate enriched with roasted hazelnut Nutella spread and cocoa powder.',
    image: 'assets/media/bocca_coffee_craft.jpg',
    badge: 'Popular',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 15: CAKES
  // ------------------------------------------------------------------------
  {
    id: 'cake-1',
    name: 'Black Forest Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Layers of moist chocolate sponge, sweet cherry compote, whipped vanilla cream, and chocolate shavings.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-2',
    name: 'Blueberry Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Light vanilla sponge layered with luscious blueberry preserve and smooth cream cheese frosting.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-3',
    name: 'Butterscotch Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Soft golden sponge dressed in caramel praline sauce and crunchy butterscotch nuggets.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-4',
    name: 'Chocolate Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Classic moist dark chocolate cake layered with silky chocolate buttercream.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-5',
    name: 'Chocolate Cake — 1 kg',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Whole celebratory 1 kg gourmet chocolate fudge cake, perfect for birthdays and special gatherings.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Full Cake',
    price: null
  },
  {
    id: 'cake-6',
    name: 'Dark Chocolate Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Intense bittersweet dark chocolate ganache draped over tender cocoa sponge.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-7',
    name: 'Fresh Fruit Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Feather-light sponge decorated with seasonal fresh fruits and delicate whipped cream.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-8',
    name: 'Hazelnut Chocolate Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Roasted hazelnut praline layered between chocolate sponge and rich gianduja cream.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Popular',
    price: null
  },
  {
    id: 'cake-9',
    name: 'Lotus Biscoff Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Our signature dessert: spiced Biscoff cookie spread layered with sponge, cream, and crunchy crumbles.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'cake-10',
    name: 'Mix Fruit Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Loaded with a vibrant medley of juicy fruits, light vanilla custard, and airy sponge.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-11',
    name: 'Pento Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Miniature boutique cake decorated with artisan frosting, ideal for quick café cravings.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-12',
    name: 'Pineapple Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Classic tropical pineapple tidbits and fresh whipped cream nestled in delicate vanilla sponge.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-13',
    name: 'Vanilla Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Fragrant pure vanilla sponge with silky vanilla bean frosting.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cake-14',
    name: 'White Forest Cake',
    categoryId: 'cakes',
    categoryName: 'Cakes',
    desc: 'Vanilla sponge, sweet red cherries, fluffy whipped cream, and delicate white chocolate curls.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 16: CHEESECAKES AND PASTRIES
  // ------------------------------------------------------------------------
  {
    id: 'cheese-1',
    name: 'Berry Cheesecake',
    categoryId: 'cheesecakes',
    categoryName: 'Cheesecakes & Pastries',
    desc: 'New York style velvety baked cream cheese filling over buttery biscuit crust with mixed berry coulis.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },
  {
    id: 'cheese-2',
    name: 'Biscoff Cheesecake',
    categoryId: 'cheesecakes',
    categoryName: 'Cheesecakes & Pastries',
    desc: 'Creamy cheesecake infused with caramelized Lotus Biscoff spread and a buttery speculoos base.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Signature',
    price: null
  },
  {
    id: 'cheese-3',
    name: 'Blueberry Cheesecake',
    categoryId: 'cheesecakes',
    categoryName: 'Cheesecakes & Pastries',
    desc: 'Rich baked cheesecake crowned with wild blueberry compote and buttery graham cracker crust.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    badge: 'Popular',
    price: null
  },
  {
    id: 'cheese-4',
    name: 'Dark Chocolate Pastry',
    categoryId: 'cheesecakes',
    categoryName: 'Cheesecakes & Pastries',
    desc: 'Individual slice of decadent multi-layered chocolate sponge with rich dark chocolate glaze.',
    image: 'assets/media/bocca_shakes_dessert.jpg',
    price: null
  },

  // ------------------------------------------------------------------------
  // CATEGORY 17: ADDITIONAL ITEMS
  // ------------------------------------------------------------------------
  {
    id: 'add-1',
    name: 'Butter Cookies',
    categoryId: 'additional',
    categoryName: 'Other Items',
    desc: 'Crisp, golden-baked European style butter cookies, perfect alongside hot espresso or cappuccino.',
    image: 'assets/media/6825ca886886ff428cd3a726_Wheat.avif',
    price: null
  },
  {
    id: 'add-2',
    name: 'Bottled Water',
    categoryId: 'additional',
    categoryName: 'Other Items',
    desc: 'Packaged premium drinking water bottle, sealed and chilled.',
    image: 'assets/media/684ae6e8eb36d732f07cb259_BottleWine.avif',
    price: null
  }
];

// Highlighted candidates for homepage featured selections
const SIGNATURE_SELECTIONS = [
  'pizza-1',   // Bocca Special Pizza
  'pizza-3',   // Margherita Pizza
  'pizza-5',   // Paneer Tikka Pizza
  'pasta-1',   // Alfredo Pasta
  'iced-4',    // Iced Spanish Latte
  'shake-1',   // Bocca Special Ferrero Rocher Shake
  'shake-4',   // Lotus Biscoff Shake
  'choco-1',   // Bocca Special Thick Hot Chocolate
  'cake-9'     // Lotus Biscoff Cake
];

// Major featured category tiles for homepage
const FEATURED_CATEGORIES = [
  { id: 'pizza', name: 'Pizza', count: '8 Varieties', image: 'assets/media/bocca_pizza_hero.jpg' },
  { id: 'pasta', name: 'Pasta', count: '6 Varieties', image: 'assets/media/bocca_pasta_artisan.jpg' },
  { id: 'burgers', name: 'Burgers', count: '5 Varieties', image: 'assets/media/bocca_burger_starters.jpg' },
  { id: 'sandwiches', name: 'Sandwiches', count: '5 Varieties', image: 'assets/media/bocca_burger_starters.jpg' },
  { id: 'hot-coffee', name: 'Coffee', count: '5 Varieties', image: 'assets/media/bocca_coffee_craft.jpg' },
  { id: 'iced-coffee', name: 'Iced Coffee', count: '5 Varieties', image: 'assets/media/bocca_coffee_craft.jpg' },
  { id: 'milkshakes', name: 'Milkshakes', count: '8 Varieties', image: 'assets/media/bocca_shakes_dessert.jpg' },
  { id: 'cakes', name: 'Desserts & Cakes', count: '18 Varieties', image: 'assets/media/bocca_shakes_dessert.jpg' }
];

// Expose globally
if (typeof window !== 'undefined') {
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.MENU_ITEMS = MENU_ITEMS;
  window.SIGNATURE_SELECTIONS = SIGNATURE_SELECTIONS;
  window.FEATURED_CATEGORIES = FEATURED_CATEGORIES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MENU_CATEGORIES, MENU_ITEMS, SIGNATURE_SELECTIONS, FEATURED_CATEGORIES };
}
