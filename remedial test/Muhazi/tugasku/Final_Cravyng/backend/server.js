// let amountOrder = await order.findOne({
//   where: {
//     userId: +userId
//   },
//   include: [
//     {
//       model: discount,
//       attributes: ["title"],
//     },
//     {
//       model: discount,
//       attributes: ["minOrderValue"],
//     },
//     {
//       model: discount,
//       attributes: ["Code"],
//     },
//     {
//       model: discount,
//       attributes: ["disc"],
//     },
//   ]
// });

// let title= amountOrder.discount.title
// let min_orderValue = amountOrder.discount.min_orderValue;
// let voucherCode = amountOrder.discount.voucherCode;
// let disc = amountOrder.discount.disc;

//  if (amountOrder.length === 0) {
//    return res.status(404).json({ errors: ["Order not Found"] });
//  }

// const orderData = await ordermenu.findAll({
//   where: { userId: +userId },
//   attributes: {
//     exclude: ["userId"],
//   },
//   include: [
//     {
//       model: menu,
//       attributes: ["userId"],
//     },
//     {
//       model: menu,
//       attributes: ["categoryId"]
//     },
//     {
//       model: menu,
//       attributes: ["image"],
//     },
//     {
//       model: menu,
//       attributes: ["food"],
//     },
//     {
//       model: menu,
//       attributes: ["price"],
//     },
//   ],
// });

// const finalData = [];

// for (let i = 0; i < orderData.length; i++) {
//   const obj = {
//     food: orderData[i].menu.food,
//     price: orderData[i].menu.price,
//     image: orderData[i].menu.image,
//     quantity: 1,
//     total: orderData[i].menu.price,
//   };
//   const idx = finalData.findIndex(
//     (el) => el.food === orderData[i].menu.food
//   );
//   if (idx >= 0) {
//     finalData[idx].quantity++;
//     finalData[idx].total = finalData[idx].quantity * finalData[idx].price;
//   } else {
//     finalData.push(obj);
//   }
// }

// let allDescription = [];
// let finalAmount = [];
// for (let i = 0; i < finalData.length; i++) {
//   allDescription.push(
//     " " + finalData[i].title + " @ " + finalData[i].quantity + "pcs"
//   );
//   finalAmount.push(finalData[i].total);
// }

// let totalPrice = 0;
// for (let i = 0; i < finalAmount.length; i++) {
//   totalPrice += finalAmount[i];
// }
