//Из данного массива удалить значение «technics». 
//Все остальное превратить в строку формата «foods, fruits…»
// преобразование в строку выполнить с помощью одного метода.
 
let goods = ['foods', 'fruits', 'technics', 'phones', 'computers']

function task(good) {
           good.splice(2,1);
    return good.join(', ');
}

task(goods);