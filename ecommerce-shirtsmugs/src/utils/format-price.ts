export const formatPrice = (valueInCents: number | undefined) => {
   if (valueInCents !== undefined) {
     var convertion = valueInCents / 100;
     var newPrice = convertion.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     return newPrice;
   }
   return 0;
}