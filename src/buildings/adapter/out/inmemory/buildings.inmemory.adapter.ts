import { Injectable } from '@nestjs/common';
import type { Buildings } from '../../../domain/buildings';
import type { FindBuildingsPort } from '../../../port/out/find-buildings.port';

/**
 * El adaptador de salida con el que nace el feature, para que arranque.
 *
 * **Está para reemplazarse**, y el reemplazo es un cliente REST en
 * `adapter/out/restclient/` que hable con el sistema externo. Lo que no cambia
 * al reemplazarlo es nada más: el servicio depende de `FindBuildingsPort`,
 * no de esta clase, así que el cambio se queda dentro de esta carpeta.
 *
 * Existe porque un feature que no puede arrancar es peor que uno vacío. Sin
 * algo atado a `FIND_BUILDINGS_PORT`, Nest corta al
 * levantar con «can't resolve dependencies», y el primer contacto con el
 * generador es un error.
 */
@Injectable()
export class BuildingsInMemoryAdapter implements FindBuildingsPort {
  /**
   * Devuelve null a propósito: el servicio lo traduce a un 404, así que el
   * recorrido completo -controlador, servicio, puerto, adaptador, sobre de
   * error- queda ejercitado desde el primer día.
   */
  findById(_id: string): Promise<Buildings | null> {
    return Promise.resolve(null);
  }
}
