const midtrans = require("midtrans-client");

const midtransSnap = new midtrans.Snap({
  isProduction: false,
  serverKey: "Mid-client-K95Dc4mTH1-vXzT8",
  clientKey: "Mid-server-CC8VlzpY2MKNl0gkASvap8sM",
});

module.exports = { midtransSnap };
