import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  brand: {
    type: String,
  },
  series: {
    type: String,
  },
  images: {
    type: Array,
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: [
      "Каталог ножей",
      "Клинковое оружие",
      "Сувенирные изделия",
      "Фонари ARMYTEK",
      "Сопуствующие товары",
    ],

    required: true,
    default: "Сопуствующие товары",
  },
  subcategory: {
    type: String,
    enum: [
      "Разделочные ножи",
      "Туристические ножи",
      "Ножи охотничьи",
      "Булатные ножи",
      "Ножи из дамаска",
      "Тактического назначения",
      "Метательные ножи",
      "Мачете и кукри",
      "Ножи кухонные",
    ],
    default: null
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}],
reviewsCount: {
  type: Number,
  default: 0
},
  bonus_percent: {
    type: Number,
  },
  delivery: [
    {
      region: {
        type: String,
      },
      city: {
        type: String,
      },
      method: [
        {
          image: {
            type: String,
          },
          time: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
    },
  ],
  sku: {
    type: String,
    // required: true,
    // unique: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
