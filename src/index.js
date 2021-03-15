
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix)
    {
      var arr = new Array;
      for (var i=0; i<matrix.length; i++)
      {
          if (i%2 == 0)
            {
              matrix[i].forEach(element => {
                arr.push(element);
              });          
            }
          else
            {
              matrix[i].reverse();
              matrix[i].forEach(element => {
                arr.push(element);
              }); 
            }
        }
      return arr;
    }
  else
    {
      return [];
    } 

}
