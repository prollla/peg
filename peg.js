const PEG = require('pegjs');

// Определение грамматики
const grammar = `
    start = expression
    expression = term "+" expression / term
    term = factor "*" term / factor
    factor = number / "(" expression ")"
    number = [0-9]+
`;

// Создание парсера
const parser = PEG.generate(grammar);

// Тестовые данные с исправленным выражением
const input = "2+3*(4+5)";

// Парсинг входных данных
const result = parser.parse(input);
console.log(result);
