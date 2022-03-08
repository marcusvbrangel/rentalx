import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export function importCategoryController() {
  
  const categoriesRepository = null;
  
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
  
  return new ImportCategoryController(importCategoryUseCase);
  
}
