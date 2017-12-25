export default(val)=>{
    var num = parseFloat(val);
    if (num) {
        return num.toFixed(2);
    }
    return val;
}