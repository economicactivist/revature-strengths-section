// //import lightning web component
// import { LightningElement, api, track } from 'lwc';

// //class progessbar2 extends LightningElement {

// class ProgressBar2 extends LightningElement {
   
//     _value = 0;
//     _max = 100;
//     _percentage = 0;

//     @api
//     get value() {
//       this._value = this.template.querySelector('progress').value;
//         return this._value;
//     }
//     set value(value) {
//         this._value = value;
//         this.updatePercentage();
//     }
//     @api
//     get max() {
//         return this._max;
//     }
//     set max(max) {
//         this._max = max;
//         this.updatePercentage();
//     }
   
//     updatePercentage() {
//         console.log('updatePercentage');
//         console.log(this._value);
//         console.log(this._max);

//         this.value();
//         this.max();
        
//         this._percentage = Math.round((this._value / this._max) * 100);
//         console.log(this._percentage);

//         // const percentage = (this.value / this.max) * 100;
//         // this._percentage = percentage;
//     }

  


// }



// export default ProgressBar2;
