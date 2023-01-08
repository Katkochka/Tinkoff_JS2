const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('Экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });
        it('добавляет слово', () => {
            const dic = new core.Dictionary();
            dic.add(
                'Кошка',
                'домашнее животное, одно из наиболее популярных «животных-компаньонов»'
            );
            assert.strictEqual(dic.map.get('Кошка'), 'домашнее животное, одно из наиболее популярных «животных-компаньонов»' );
        });
        it('удаляет слово', () => {
            const dic = new core.Dictionary();
            dic.add(
                'Кошка',
                'домашнее животное, одно из наиболее популярных «животных-компаньонов»'
            );

            dic.delete('Кошка')
            assert.strictEqual(dic.get('Кошка'), 'Кошка no founded in the dictionary');
        });
        it('выводит все слова', () => {
            const dic = new core.Dictionary();
            dic.add(
                'Кошка',
                'домашнее животное, одно из наиболее популярных «животных-компаньонов»'
            );
            dic.add(
                'Котик',
                'домашнее животное, аналогично кошке»'
            );

            assert.strictEqual(dic.getAllWords(), 'Кошка,Котик,');
        });

    });
});