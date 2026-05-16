/**
 * Ciclo de vida de um pedido no Kommanda
 */
export type OrderStatus = 
  | 'PENDING'    // Cliente acabou de enviar
  | 'CONFIRMED'  // Restaurante aceitou
  | 'PREPARING'  // Está na cozinha
  | 'READY'      // Pronto para ser levado à mesa
  | 'DELIVERED'  // Cliente já recebeu
  | 'CANCELED';  // Pedido cancelado