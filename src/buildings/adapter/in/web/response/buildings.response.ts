import { ApiProperty } from '@nestjs/swagger';
import type { Buildings } from '../../../../domain/buildings';

/**
 * Lo que ve quien llama. Separado del modelo de dominio a propósito: agregarle
 * un campo al dominio no debería cambiar el contrato público sin que alguien lo
 * decida.
 *
 * Es una clase y no un `type` porque OpenAPI se genera leyendo metadatos en
 * tiempo de ejecución, y un `type` de TypeScript no deja ninguno: un DTO de
 * respuesta declarado como tipo no se puede documentar.
 */
export class BuildingsResponse {
  @ApiProperty({ example: '1' })
  id: string;
}

export function toBuildingsResponse(buildings: Buildings): BuildingsResponse {
  return { id: buildings.id };
}
