/* BOCCA - shared menu data */

const PANTRY_PRODUCTS = [];

const MENU_CATEGORIES = [
  ['Fries and Starters', ['Dirty Nachos', 'Salted Fries', 'Garlic Potato Bites', 'Loaded Cheese Fries', 'Mushroom Croquettes', 'Onion Rings', 'Peri Peri Fries', 'Potato Wedges']],
  ['Sandwiches', ['Cheese Sandwich', 'Corn & Cheese Sandwich', 'Paneer Masala Sandwich', 'Potato Sandwich', 'Veg Sandwich']],
  ['Burgers', ['Cheese Burger', 'Fatty Burger', 'Mushroom & Cheese Burger', 'Paneer Tikka Burger', 'Veg Burger']],
  ['Pasta', ['Alfredo Pasta', 'Aglio Olio Pasta', 'Arrabbiata Pasta', 'Pesto Cherry Tomato Pasta', 'Pesto Pasta', 'Pink Pasta']],
  ['Open Toast', ['Avocado Toast', 'Basil Pesto Open Toast', 'Cheese Chilli Toast', 'Cheese Garlic Toast', 'Chilli Cheese Toast', 'Chilli Garlic Toast', 'Creamy Mushroom Open Toast', 'Garlic Bread Toast', 'Pizza Bread Toast']],
  ['Pizza', ['Bocca Special Pizza', 'Corn & Cheese Pizza', 'Margherita Pizza', 'Paneer Pizza', 'Paneer Tikka Pizza', 'Truffle Mushroom Pizza', 'Truffle Mushroom Premium Pizza', 'Veggies Overloaded Pizza']],
  ['Wraps and Bites', ['AOP Spicy Wrap', 'Cheese Cigar Rolls', 'Mushroom Wrap', 'Paneer Wrap', 'Veg Shawarma Wrap']],
  ['Hot Coffee', ['Americano', 'Espresso', 'Honey Cinnamon Cappuccino', 'Latte', 'Macchiato']],
  ['Iced Coffee', ['Iced Americano', 'Iced Café Mocha', 'Iced Latte', 'Iced Spanish Latte', 'Iced Tiramisu Creamy Latte']],
  ['Iced Tea', ['Bocca Special Hibiscus Iced Tea', 'Cranberry Iced Tea', 'Lemon Iced Tea', 'Peach Iced Tea', 'Strawberry Iced Tea']],
  ['Frappes', ['Classic Frappe', 'Nutella Frappe']],
  ['Milkshakes', ['Bocca Special Ferrero Rocher Shake', 'Chocolate Milkshake', 'KitKat Milkshake', 'Lotus Biscoff Shake', 'Nutella Shake', 'Oreo Milkshake', 'Strawberry Milkshake', 'Vanilla Milkshake']],
  ['Mocktails and Coolers', ['Bocca Special Red Bull Mojito', 'Classic Lemonade', 'Mint Mojito', 'Passion Fruit Cooler', 'Piña Colada Mocktail', 'Strawberry Cooler', 'Sunrise Cooler', 'Watermelon Mojito']],
  ['Hot Chocolate', ['Bocca Special Thick Hot Chocolate', 'Dark Hot Chocolate', 'Marshmallow Hot Chocolate', 'Nutella Hot Chocolate']],
  ['Cakes', ['Black Forest Cake', 'Blueberry Cake', 'Butterscotch Cake', 'Chocolate Cake', 'Chocolate Cake — 1 kg', 'Dark Chocolate Cake', 'Fresh Fruit Cake', 'Hazelnut Chocolate Cake', 'Lotus Biscoff Cake', 'Mix Fruit Cake', 'Pento Cake', 'Pineapple Cake', 'Vanilla Cake', 'White Forest Cake']],
  ['Cheesecakes and Pastries', ['Berry Cheesecake', 'Biscoff Cheesecake', 'Blueberry Cheesecake', 'Dark Chocolate Pastry']],
  ['Additional Items', ['Butter Cookies', 'Bottled Water']]
].map(([category, names]) => ({
  category,
  items: names.map(name => ({ name }))
}));
