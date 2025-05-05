import { foodOrderModel } from "../model/food-order-model.js";

export const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;
  try {
    const foodOrder = await foodOrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
      status: status,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const getFoodOrder = async (req, res) => {
  try {
    const fooderOrder = await foodOrderModel.find().populate("food");
    return res
      .status(200)
      .send({
        foodOrder: fooderOrder,
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

export const getFoodOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await foodOrderModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const deleteFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await foodOrderModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const updateFoodOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const foodOrder = await foodOrderModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      foodOrder: foodOrder,
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
