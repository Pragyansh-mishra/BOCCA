/* ==========================================================================
   DA MARIA - DATA STORE
   ========================================================================== */

const PANTRY_PRODUCTS = [
  {
    id: 'wine',
    title: 'Artisan Tuscan Red Wine',
    desc: 'Full-bodied Sangiovese blend aged in oak barrels from Chianti Classico.',
    price: 38.00,
    image: 'assets/media/684ae6e8eb36d732f07cb259_BottleWine.avif'
  },
  {
    id: 'olive-oil',
    title: 'Da Maria Extra Virgin Olive Oil',
    desc: 'Cold-pressed early harvest Leccino olives from the Roman hills.',
    price: 24.00,
    image: 'assets/media/682cb874b6013f7a2cea8bc0_OliveOil.avif'
  },
  {
    id: 'pesto',
    title: 'Genovese Basil Pesto',
    desc: 'Stone-ground with sweet basil, pine nuts, and 24-month aged Parmigiano.',
    price: 14.00,
    image: 'assets/media/684ae6dbdc44f7eb627d8ef3_Pesto.avif'
  },
  {
    id: 'rigatoni',
    title: 'Bronze-Die Rigatoni Pasta',
    desc: 'Rough-textured 100% durum semolina, extruded slowly for the ideal al dente.',
    price: 12.00,
    image: 'assets/media/684838358c072ceea141cdf3_Pasta.avif'
  },
  {
    id: 'tomato-sauce',
    title: 'San Marzano Pomodoro Sauce',
    desc: 'Sun-drenched Campania plum tomatoes simmered with fresh basil and garlic.',
    price: 16.00,
    image: 'assets/media/684837ea51422ee258358e52_TomatoSauce.avif'
  },
  {
    id: 'olives',
    title: 'Cerignola Green Olives',
    desc: 'Hand-picked Puglia green olives, naturally cured in herb-infused brine.',
    price: 11.00,
    image: 'assets/media/6850033b6aa91ca538be3781_OlivesJar.webp'
  }
];

const MENU_CATEGORIES = [
  {
    category: 'Antipasti',
    items: [
      { name: 'Bruschetta Romana', desc: 'Toasted rustic bread, heirloom tomatoes, fresh garlic, basil', price: '€12' },
      { name: 'Carpaccio di Manzo', desc: 'Thinly sliced beef tenderloin, arugula, capers, shaved parmigiano', price: '€18' },
      { name: 'Burrata Pugliese', desc: 'Creamy burrata, prosciutto di Parma, roasted figs, vincotto', price: '€16' }
    ]
  },
  {
    category: 'Primi Piatti',
    items: [
      { name: 'Cacio e Pepe', desc: 'Handcrafted tonnarelli, Pecorino Romano D.O.P., toasted black pepper', price: '€19' },
      { name: 'Carbonara Tradizionale', desc: 'Spaghettoni, crispy guanciale, organic egg yolk, pecorino', price: '€21' },
      { name: 'Ravioli alla Nonna', desc: 'Ricotta and spinach handmade pillows, browned sage butter', price: '€23' }
    ]
  },
  {
    category: 'Secondi',
    items: [
      { name: 'Saltimbocca alla Romana', desc: 'Veal cutlets, fresh sage, prosciutto, white wine reduction', price: '€28' },
      { name: 'Branzino al Forno', desc: 'Mediterranean sea bass, capers, kalamata olives, cherry tomatoes', price: '€32' }
    ]
  },
  {
    category: 'Dolci & Cocktails',
    items: [
      { name: 'Tiramisù della Casa', desc: 'Savoiardi biscuits, espresso, mascarpone cream, dark cocoa', price: '€10' },
      { name: 'Classic Bellini', desc: 'White peach purée, Prosecco di Valdobbiadene, fresh peach slice', price: '€14' }
    ]
  }
];
