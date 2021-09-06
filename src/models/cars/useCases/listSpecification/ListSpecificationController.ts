import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private ListSpecificationUseCase: ListSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.ListSpecificationUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecificationController };
