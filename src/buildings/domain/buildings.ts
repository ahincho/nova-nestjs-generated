/**
 * El modelo de dominio de buildings.
 *
 * No conoce ni al transporte ni al upstream: si manana la respuesta del
 * upstream cambia de forma, cambia el traductor y esto queda igual. Esa es toda
 * la razon por la que existe un ACL.
 */
export type Buildings = {
  readonly id: string;
};
