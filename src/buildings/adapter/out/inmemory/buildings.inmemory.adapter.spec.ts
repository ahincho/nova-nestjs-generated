import { BuildingsInMemoryAdapter } from './buildings.inmemory.adapter';

describe('BuildingsInMemoryAdapter', () => {
  // Se prueba aunque sea un marcador de posición, porque el contrato que tiene
  // que cumplir su reemplazo es exactamente este: devolver null cuando no hay
  // nada, y nunca lanzar por eso.
  it('no encuentra nada, y lo dice con null', async () => {
    await expect(
      new BuildingsInMemoryAdapter().findById('1'),
    ).resolves.toBeNull();
  });
});
