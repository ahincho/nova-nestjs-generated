import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { Buildings } from '../domain/buildings';
import type { GetBuildingsUseCase } from '../port/in/get-buildings.use-case';
import {
  FIND_BUILDINGS_PORT,
  type FindBuildingsPort,
} from '../port/out/find-buildings.port';

@Injectable()
export class BuildingsService implements GetBuildingsUseCase {
  constructor(
    @Inject(FIND_BUILDINGS_PORT)
    private readonly findBuildings: FindBuildingsPort,
  ) {}

  async execute(id: string): Promise<Buildings> {
    const found = await this.findBuildings.findById(id);

    // El puerto devuelve null cuando no existe, y es el servicio quien decide
    // que eso es un 404. El adaptador no conoce codigos HTTP.
    if (found === null) {
      throw new NotFoundException(`Buildings ${id} no encontrado`);
    }

    return found;
  }
}
