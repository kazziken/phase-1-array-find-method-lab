function getTheW(obj){
    return obj.result === "W"
  }
function superbowlWin(array){
    const data = array.find(getTheW);
    if (data){
        return data.year;
    }
  }
  console.log(superbowlWin(record));

  