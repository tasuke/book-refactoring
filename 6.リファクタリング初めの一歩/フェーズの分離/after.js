function priceOrder(product, quantity, shippingMethod) {
    const priceDate = calculatePricingDate(product, quantity);
    return applyShipping(priceDate, shippingMethod);


    // 前半部分を、中間データ構造を返すように関数の抽出
    function calculatePricingDate(product, quantity) {
        const basePrice = product.basePrice * quantity;
        const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
        return {basePrice:basePrice, quantity:quantity, discount:discount};
    }

    // 後半部分の関数の抽出
    function applyShipping(priceDate, shippingMethod) {
        const shippingPerCase = (priceDate.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
        const shippingCost = priceDate.quantity * shippingPerCase;
        return priceDate.basePrice - priceDate.discount + shippingCost;
    }
}