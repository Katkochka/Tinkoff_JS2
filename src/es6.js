"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия

function fioToName(fio) {

    let fioMas = [];
    fioMas = fio.split(' ');

    return (fioMas[1]+ ' ' + fioMas[0]);
}


// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"

function filterUnique(array) {
    const numberSet = new Set(array);
    const newArray = Array.from(numberSet);
    return newArray; 
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce

function calculateSalaryDifference(array) {
    return (Math.max(...array)/Math.min(...array));
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами

class Dictionary {
    map = new Map();

    add(word,description){
        if ( (typeof(word) === 'string') && (typeof(description) === 'string') ){
            this.map.set(word,description);
            return true;
        }
        else return false;
    }

}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};