// backend/scripts/seedProducts.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';
import Product from '../models/Product.js';

dotenv.config();

// Diverse food categories and multiple images per category
const imageMap = {
  Pizza: [
    "https://blog.swiggy.com/wp-content/uploads/2025/01/Image-10_-veggie-pizza-1024x538.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluqEalDNU2NTPs2a5XUbjsDrlJdlggynlvA&s" 
  ],
  Burger: [
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    "https://blog.swiggy.com/wp-content/uploads/2025/01/Image-1_-cheese-burger-1024x538.png"
  ],
  Salad: [
    "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2019/07/salad.jpg",
    "https://www.allrecipes.com/thmb/mlI2Q6MYZ_M7uiNK0MuOu1A7PjQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2433745-44c6996c71b24326b6d31ed694bb738e.jpg",
    "https://www.mariaushakova.com/wp-content/uploads/2013/11/Red-and-Green-Cabbage-Salad.jpg",
    "https://happilyunprocessed.com/wp-content/uploads/2019/07/Summer-Bean-Salad-1.jpg.jpg"
  ],
  Dessert: [
    "https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg",
    "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/02/Classic-French-Macarons-2.jpg"
  ],
  Beverage: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ463l5agnH6bUifrccL0EIhM_jyqpTay4R1Q&s",
    "https://image.made-in-china.com/202f0j00SsKkcYhIELpM/Cold-Hot-Drinks-Restaurant-Single-Tank-Juice-Beverage-Dispenser.webp"
  ],
  Rice: [
    "https://www.budgetbytes.com/wp-content/uploads/2023/10/Scrambled-Eggs-With-Rice-Plated.jpg",
    "https://www.thespruceeats.com/thmb/kUoSjpktuKuTQpxkm-OFgOxl8s4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-basic-white-rice-2355883-10-5b0da96eba6177003622896e.jpg"
  ],
  Starter: [
    "https://images.immediate.co.uk/production/volatile/sites/2/2024/05/GurdeepBacalhausaltCodFrittersSaffron-076-f07f1be.gif?quality=90&resize=700,466",
    "https://saffronrestaurant.co.in/wp-content/uploads/2022/03/Starter1.jpg"
  ],
  Wrap: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeL_obgyHM-EZfmh30myp-AxWhbGNCMgIJoA&s",
    "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fc721c214e1623fc0fdfa4d4bcb4617652f783fb3"
  ],
  Snacks: [
    "https://assets.cntraveller.in/photos/60ba21161fa22668f025a41e/16:9/w_1024%2Cc_limit/Potato-recipe-1366x768.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2025/02/onion-bhaji-768x1152.webp",
    "https://assets.gqindia.com/photos/5e8c51fe0b0ce700084bd5f0/16:9/w_2560%2Cc_limit/7-best-and-easy-Indian-recipes-you-can-make-at-home-right-now-with-one-ingredient-Bread.jpg",
  ]
  
};

const categoryDescriptions = {
  Pizza: "Handcrafted with artisanal dough and premium ingredients",
  Burger: "Juicy patty with fresh vegetables and signature sauces",
  Salad: "Freshly prepared with organic greens and seasonal produce",
  Dessert: "Decadent treat made with high-quality ingredients",
  Beverage: "Refreshing drink crafted with natural flavors",
  Rice: "Aromatic grains cooked to perfection with authentic spices",
  Starter: "Perfect beginning to your meal experience",
  Wrap: "Fresh ingredients wrapped in handmade flatbread",
  Snacks: "Irresistible bite-sized delights for any occasion",
};

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    const categories = Object.keys(imageMap);
    const products = [];

    for (let i = 0; i < 150; i++) {
      const category = faker.helpers.arrayElement(categories);
      const imageArr = imageMap[category];
      const image = faker.helpers.arrayElement(imageArr);

      products.push({
        name: faker.commerce.productName(),
        category,
        image,
        // Whole number price between 50 and 500
        price: faker.number.int({ min: 50, max: 500 }),
        description: `${categoryDescriptions[category]}. ${faker.lorem.sentence()}`
      });
    }

    await Product.insertMany(products);
    console.log(`Inserted ${products.length} products`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding products:', err);
    process.exit(1);
  }
}

seedProducts();
