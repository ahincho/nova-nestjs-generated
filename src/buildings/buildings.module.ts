import { Module } from '@nestjs/common';
import { BuildingsInMemoryAdapter } from './adapter/out/inmemory/buildings.inmemory.adapter';
import { BuildingsController } from './adapter/in/web/buildings.controller';
import { GET_BUILDINGS_USE_CASE } from './port/in/get-buildings.use-case';
import { FIND_BUILDINGS_PORT } from './port/out/find-buildings.port';
import { BuildingsService } from './service/buildings.service';

/**
 * Las dos puntas se atan por token y no por clase, que es lo que hace que el
 * núcleo no conozca a ninguno de los dos bordes.
 */
@Module({
  controllers: [BuildingsController],
  providers: [
    { provide: GET_BUILDINGS_USE_CASE, useClass: BuildingsService },
    // Reemplazar por el cliente REST de `adapter/out/restclient/` cuando exista.
    // El servicio no se entera: depende del puerto, no de esta clase.
    {
      provide: FIND_BUILDINGS_PORT,
      useClass: BuildingsInMemoryAdapter,
    },
  ],
})
export class BuildingsModule {}
