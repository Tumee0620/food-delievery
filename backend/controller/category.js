import categoryModel from "../model/category.js";
import UserModel from "../model/category.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await categoryModel.create({
      name: name,
    });
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, err);
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    return res
      .status(200)
      .send({
        categories: categories,
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

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, err);
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    return res
      .status(200)
      .send({
        success: true,
        category: category,
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

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(id, req.body);
    return res.status(200).send({
      success: true,
      category: category,
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
