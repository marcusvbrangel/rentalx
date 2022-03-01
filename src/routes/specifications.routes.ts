import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";

const specificationsRoutes = Router();

const specificationsReposytory = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {

  // const { name, description } = request.body;

  // const createSpecificationService = new CreateSpecificationService(specificationsReposytory);

  // createSpecificationService.execute({ name, description });

  return response.status(201).send();

});

export { specificationsRoutes }
