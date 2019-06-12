
const lenet = require('./data/lenet_0.001_val_acc')
const newbnet_0001 = require('./data/newbnet_0.0001_val_acc')
const newbnet_0005 = require('./data/newbnet_0.0005_val_acc')
const newbnet_001 = require('./data/newbnet_0.001_val_acc')

var x_axis = []
var y_lenet = []
var y_newb_1e4 = []
var y_newb_1e3 = []
var y_newb_5e4 = []

for (i=0; i<=2000; i++) {
    x_axis.push(i)
}

lenet.forEach(element => {
    y_lenet.push(element[2])
});
newbnet_0001.forEach(element => {
    y_newb_1e4.push(element[2])
});
newbnet_001.forEach(element => {
    y_newb_1e3.push(element[2])
});
newbnet_0005.forEach(element => {
    y_newb_5e4.push(element[2])
});

console.log(x_axis.length)
console.log(y_lenet.length)
console.log(y_newb_1e4.length)
console.log(y_newb_1e3.length)
console.log(y_newb_5e4.length)

export default {
    x_axis,
    y_lenet,
    y_newb_1e4,
    y_newb_1e3,
    y_newb_5e4
}
