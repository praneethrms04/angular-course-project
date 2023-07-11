const item = "apple";


const solotion = (item) => {
  let arr = item.split("");
  console.log(arr)
  let res = [];
  for (let i = 0; i < item.length; i++) {
    console.log(arr.indexOf(arr[i]))
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      res.push(arr[i]);
    }
}
console.log(res);
};
solotion(item);
