import { Request, Response } from "express";
import { container } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {

  async handle(request: Request, response: Response): Promise<Response>{

    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase);

    const specifications = await listSpecificationsUseCase.execute();
    
    return response.json(specifications).send();

  }

}

export { ListSpecificationsController }
