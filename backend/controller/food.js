import categoryModel from "../model/category.js";
import UserModel from "../model/category.js";
import foodModel from "../model/food.js";

export const createFood = async (req, res) => {
  const { foodname, price, image, ingredients, category } = req.body;
  try {
    const food = await foodModel.create({
      foodname: foodname,
      price: price,
      image: image,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ingredients: ingredients,
      categories: category,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const getFoodByCategoryId = async (req, res) => {
  try {
    const food = await categoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "categories",
          as: "result",
        },
      },
      { $project: { name: 1, result: 1 } },
    ]);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getFood = async (req, res) => {
  try {
    const food = await foodModel.find().populate("categories");
    return res
      .status(201)
      .send({
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        message: error,
      })
      .end();
  }
};

export const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
      })
      .end();
  } catch (error) {
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      food: food,
    });
  } catch (error) {
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
