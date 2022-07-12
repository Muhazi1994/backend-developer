var pdf = require("pdf-creator-node");
var fs = require("fs");
const path = require('path')

// Read HTML Template
var html = fs.readFileSync(path.resolve(__dirname+'/template.html'), "utf8");

module.exports = (data) => {
  try {
    const { invoice, orders } = data
    var document = {
      html: html,
      data: { orders: orders },
      path: `./${invoice}.pdf`,
      type: "",
    };
    
    pdf
      .create(document)
      .then( data => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  catch(err) {
    throw err
  }
}
