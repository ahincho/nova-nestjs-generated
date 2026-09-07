import type { Buildings } from '../../domain/buildings';

/**
 * Lo que este feature sabe hacer, dicho sin mencionar como.
 */
export interface GetBuildingsUseCase {
  execute(id: string): Promise<Buildings>;
}

export const GET_BUILDINGS_USE_CASE = Symbol('GET_BUILDINGS_USE_CASE');
