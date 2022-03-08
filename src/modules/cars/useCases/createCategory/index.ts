import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export function createCategoryController() {

  const categoriesRepository = new CategoriesRepository();
  
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  return new CreateCategoryController(createCategoryUseCase);
  
}
