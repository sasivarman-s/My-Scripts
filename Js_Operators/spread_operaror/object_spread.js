let marks = {
    maths : 80,
    tamil : 90
};
let total = {
    tot : 160
};
let value = {
    ...marks,
    ...total
};
console.log(value);
