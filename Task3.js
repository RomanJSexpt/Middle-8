//Напишите функцию, которая возвращает расширение файла.
// Например, getExt(«/home/user/project/script.js») вернет “js”.
// Функция должна принимать строкy
let exe = '/home/user/project/script.js'

function returnExtension (){
    return exe.substring(exe.lastIndexOf('.')+1);
}

returnExtension (exe);