import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },
    size: {
      type: String,
      enum: ["S", "L", "M", "XL", "XXL"],
      default: "S",
    },
    images: {
      type: [String],
      default: ["img"],
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);
const productData = [
  {
    name: "The Prompt Magazine",
    price: 120000,
    images: ["/image.png"],
    quantity: 50,
    discount: 10,
    isNew: true,
    category: "64a9f57e8a0b2c6f5a1e5b4d",
  },
  {
    name: "Chunky Glyph Tee",
    price: 120000,
    images: ["/image2.png"],
    quantity: 30,
    discount: 5,
    isNew: true,
    category: "64a9f57e8a0b2c6f5a1e5b4d",
  },
  {
    name: "All Smiles Nalgene",
    price: 120000,
    images: ["/image3.png"],
    quantity: 25,
    discount: 0,
    isNew: false,
    category: "64a9f57e8a0b2c6f5a1e5b4d",
  },
  {
    name: "Wildflower Hoodie",
    price: 108000,
    images: ["/image4.png"],
    quantity: 10,
    discount: 15,
    isNew: true,
    category: "64a9f57e8a0b2c6f5a1e5b4d",
  },
];
export const insertProducts = async () => {
  try {
    await Product.insertMany(productData);
    console.log("Products inserted successfully!");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
};

const Product = model<IProduct>("product", productSchema);
export default Product;
