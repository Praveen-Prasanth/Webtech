function calculate() {
 let form = document.querySelector('#form')
 let consumedUnits = Number(document.querySelector('#consumedUnit').value);
 let result = document.getElementById('res')
 console.log(consumedUnits)
 

 form.addEventListener('submit',(e)=>{
     e.preventDefault();
     

 if(consumedUnits<=0 || isNaN(consumedUnits)){
     result.textContent =`Please Enter the Consumed Units To Calculate Your Bill`
     return
 }

 let totalAmount = 0;

 if (consumedUnits > 500) {
     totalAmount += Math.min(consumedUnits, 100) * 0;
     totalAmount += Math.max(Math.min(consumedUnits - 100, 300), 0) * 4.50;
     totalAmount += Math.max(Math.min(consumedUnits - 400, 100), 0) * 6.00;
     totalAmount += Math.max(Math.min(consumedUnits - 500, 100), 0) * 8.00;
     totalAmount += Math.max(Math.min(consumedUnits - 600, 200), 0) * 9.00;
     totalAmount += Math.max(Math.min(consumedUnits - 800, 200), 0) * 10.00;
     totalAmount += Math.max(consumedUnits - 1000, 0) * 11.00;
 }
 else {
     totalAmount += Math.min(consumedUnits, 100) * 0;
     totalAmount += Math.max(Math.min(consumedUnits - 100, 100), 0) * 2.25;
     totalAmount += Math.max(Math.min(consumedUnits - 200, 200), 0) * 4.50;
     totalAmount += Math.max(Math.min(consumedUnits - 400, 100), 0) * 6.00;
 }
 result.textContent = `Net Amount for the consumed units : Rs. ${totalAmount}`
})

}