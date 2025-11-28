import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { renderProductsGrid } from './amazon.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';

async function loadPage(){
  try{
    await loadProductsFetch();

    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  } catch(error){
    console.log('Unexpected Error. Try again later.');
  }
  

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
