import assets from "./assets";

const Offers = [
  {
    id: 'O-01',
    name: 'My Box',
    price: 89,
    description:
      '1 square pizza and 2 sides of the following (buffalo wings or fire wings, chicken BBQ spin rolls, garlic bread supreme, potato wedges)',
    image: assets.MyBox,
  },
  {
    id: 'O-02',
    name: 'Ranch Box',
    price: 240,
    description:
      'Get it all in the new ranch box: medium ranch, medium pan, wedges, 5 chicken wings, 2 sauces',
    image: assets.RanchBox,
  },
  {
    id: 'O-03',
    name: 'Large Hat-Trick',
    price: 374,
    description: 'Enjoy 3 large pizza of your choice',
    image: assets.LargeHatTrick,
  },
  {
    id: 'O-04',
    name: 'Party Meal',
    price: 323,
    description:
      '3 medium pizza (pan, thin or classic), potato wedges, supreme salad and soft drink liter',
    image: assets.PartyMeal,
  },
  {
    id: 'O-05',
    name: 'Supreme Meal',
    price: 157,
    description:
      'Medium pizza (pan, thin or classic), potato wedges, duet salad and soft drink liter',
    image: assets.SupremeMeal,
  },
  {
    id: 'O-06',
    name: 'Hut Saver Deal Pan Pizza',
    price: 195,
    description: '2 medium pizzas of your choice',
    image: assets.HutSaverDealPanPizza,
  },
  {
    id: 'O-07',
    name: 'Solo Meal',
    price: 85,
    description:
      'Small pizza (pan, thin, classic), potato wedges and soft drink',
    image: assets.SoloMeal,
  },
];

const Resturants = [
  {
    id: 'R-01',
    name: 'Pizza Hut',
    rating: 4.25,
    description: 'Fast Food Pizza',
    image: assets.PizzaHut,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.BuffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-02',
    name: 'TBS The Bakery Shop',
    rating: 3,
    description: 'Bakeries Desserts Sandwiches',
    image: assets.TBS,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-03',
    name: 'Papa Johns Pizza',
    rating: 3.74,
    description: 'Fast Food Italian Pizza',
    image: assets.PapaJohnsPizza,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-04',
    name: 'Kinwa',
    rating: 4.85,
    description: 'Fast Food International Sandwiches',
    image: assets.Kinwa,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-05',
    name: 'The Crepe Company',
    rating: 5.92,
    description: 'Crepe Fast Food Sandwiches',
    image: assets.TheCrepeCompany,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-06',
    name: 'Ovio',
    rating: 3.2,
    description: 'Coffee & Drinks European',
    image: assets.Ovio,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
  {
    id: 'R-07',
    name: 'Crumbs',
    rating: 1.8,
    description: 'Italian Pizza',
    image: assets.Crumbs,
    meals: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
      {
        id: 'M-06',
        name: 'Chicken BBQ Spin Rolls',
        price: 47.99,
        description: 'Tortilla rolls stuffed with chicken BBQ and BBQ sauce',
        image: assets.ChickenBBQSpinRolls,
      },
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
    ],
  },
];

const PastOrders = [
  {
    id: 'Or-01',
    number: '75820223',
    total: 161,
    items: [
      {
        id: 'M-07',
        name: 'Chicken Tenders',
        price: 52,
        description: '4 chicken pieces coated in a crispy breading',
        image: assets.ChickenTenders,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
    ],
  },
  {
    id: 'Or-02',
    number: '123987432',
    total: 161,
    items: [
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
    ],
  },
  {
    id: 'Or-03',
    number: '1230984',
    total: 161,
    items: [
      {
        id: 'M-01',
        name: 'Buffalo Wings',
        price: 51,
        description:
          'Juicy chicken wings coated and baked to perfection. served with our special BBQ sauce',
        image: assets.buffaloWings,
      },
      {
        id: 'M-02',
        name: 'Garlic Bread Supreme',
        price: 24,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese & herbs',
        image: assets.GarlicBreadSupreme,
      },
    ],
  },
];
const ActiveOrders = [
  {
    id: 'Or-02',
    number: '3489283',
    total: 161,
    items: [
      {
        id: 'M-03',
        name: 'Garlic Bread Super Supreme',
        price: 29,
        description:
          'Freshly baked French bread with garlic butter, melted mozzarella cheese, herbs & slices of beef pepper',
        image: assets.GarlicBreadSuperSupreme,
      },
      {
        id: 'M-04',
        name: 'Potato Wedges',
        price: 54.2536,
        description: 'Crispy, oven baked potato wedges',
        image: assets.PotatoWedges,
      },
      {
        id: 'M-05',
        name: 'Trio',
        price: 95,
        description:
          'Chicken BBQ spin rolls, chicken wings original or hot and potato wedges served with our special BBQ sauce',
        image: assets.Trio,
      },
    ],
  },
];


export { Resturants, Offers, PastOrders, ActiveOrders };
