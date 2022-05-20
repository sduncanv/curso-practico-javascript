const calcularPrecioConDescuento = (precio, descuento) => {
    return ((precio * (100 - descuento)) / 100);
}

const coupons = [
    {name: "uno", discount: 15},
    {name: "dos", discount: 30},
    {name: "tres", discount: 25}
];

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    /* if (valueCoupon === "uno") {
        descuento = 15;
    } else if (valueCoupon === "dos") {
        descuento = 30;
    } else if (valueCoupon === "tres") {
        descuento = 25;
    } */

    const isCouponValueValid = function (coupon) {
        return coupon.name === valueCoupon;
    }
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + valueCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);
        const resultP = document.getElementById("ResultP");
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento; 
    }
}
