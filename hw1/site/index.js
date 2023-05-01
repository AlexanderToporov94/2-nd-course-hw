function game() {
    let userNum = prompt('Введите номер месяца');
    if (userNum >= 1 && userNum <=2) {
        alert ('Зима');
    } 
    
    else if (userNum >= 3 && userNum <=5) {
        alert ('Весна');
    } 
    
    else if (userNum >= 6 && userNum <=8) {
        alert ('Лето');
    }
    
    else if (userNum >= 9 && userNum <=11) {
        alert ('Осень');
    }
    
    else if (userNum == 12) {
        alert ('Зима');
    } 
    
    else if (userNum !== Number) {
        alert ('Дружище, введи число от одного до двенадцати :)');       
    }
}

function gameTwo() {
    const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    
    arr.sort(() => Math.random() - 0.5);
    
    alert(arr);
    
    let answearOne = prompt('Какое было первое слово?');
    
    let resultAnswearOne = answearOne.charAt(0).toUpperCase() + answearOne.slice(1)
    
    let answearTwo = prompt('Какое было последнее слово?');
    
    let resultAnswearTwo = answearTwo.charAt(0).toUpperCase() + answearTwo.slice(1)

    if (resultAnswearOne === arr[0] && resultAnswearTwo === arr[6]) {
        alert('Молодец, ты справился!');
    } else if (resultAnswearOne === arr[0] || resultAnswearTwo === arr[6]) {
        alert('Вы были близки к победе');
    } else {
        alert('Ответ не верный')
    }
}