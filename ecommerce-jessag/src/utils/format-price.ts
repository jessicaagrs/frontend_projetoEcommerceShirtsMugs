export const formatPrice = (valueInCents: number) => {
    var convertion = valueInCents / 100;
    var newPrice = convertion.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return newPrice;
}