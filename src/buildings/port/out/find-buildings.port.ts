import type { Buildings } from '../../domain/buildings';

/**
 * Lo que este feature necesita de afuera, dicho en terminos del dominio.
 *
 * El puerto habla de Buildings, no de la respuesta del upstream:
 * el adaptador es quien traduce, y por eso un cambio alla no llega hasta aca.
 */
export interface FindBuildingsPort {
  findById(id: string): Promise<Buildings | null>;
}

export const FIND_BUILDINGS_PORT = Symbol('FIND_BUILDINGS_PORT');
