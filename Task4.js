//Напишите функцию, которая удаляет дубликаты из массива. 
//Например, входной массив: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6],
// массив который возвращает функция [1, 2, 4, 5, 7, 8, 3, 6]


let cfg = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
(function delDuplicate() {
   let result = [];
    cfg.forEach(function (item) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    })
    return result 
})()