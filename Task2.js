// Преобразовать текущую дату и время в понятный человеку 
//формат: 08:05 01/01/2018. Используя шаблонные строки.



let time = new Date();
(function template() {
    return `${time.getHours()}:${time.getMinutes()} ` +
        `${time.getDate()}/${month()}/${time.getFullYear()}`;
})();

function month() {
    return (new Date().getMonth() < 9) ? `${`0${(new Date().getMonth()+1)}`}` :
        `${(new Date().getMonth()+1)}`;
}
