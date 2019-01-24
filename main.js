(() => {
   var btn = document.getElementById("play");
   let newData = [...data];
   let newArr = [];
   let filtr;

   function transform() {
      cutElement(newData);
      getNewArr(newData);
      filtr = filterArrow(getModified(newArr));
      printResult(filtr);
   }
   
   function cutElement(param) {
      param.splice(6, 1)
   }

   function getNewArr(value) {
      value.forEach(function (item, index) {
         newArr.push({
            index,
            url: item.url,
            name: item.name,
            params: item.params,
            description: item.description,
            date: item.date
         })
      })
   }

   function getModified(array) {
      return array.map(function (arr) {
         return {
            url: newUrl(arr),
            name: newName(arr),
            description: newDescription(arr),
            params: newParams(arr),
            isVisible: newIsVisible(arr),
            date: newDate(arr)
         }
      })
   }

   function newUrl(param) {
      return (param.url.startsWith('http://')) ?
         `${param.url}` : `${'http://'}${param.url}`;
   }

   function newDescription(param) {
      return (param.description.length > 15) ?
         `${param.description.substring(0,15)}...` :
         param.description;
   }

   let newParams = param => `${param.params.status} => ${param.params.progress}`;
   let newIsVisible = param => param.params.status;
   let newDate = param => moment(param.date).format('YYYY/MM/DD, hh:mm a');
   let newName = param => `${param.name[0].toUpperCase()}${param.name.substring(1).toLowerCase()}`;

   function filterArrow(item) {
      return item.filter(item => item.isVisible === true);

   }
   let printResult = fltArr => console.log(newData, fltArr);
   btn.addEventListener("click", transform);
})()