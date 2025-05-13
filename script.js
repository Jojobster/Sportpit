// --- 1. Діалог з користувачем (alert, prompt, confirm, умови) ---
function userDialog() {
    alert("Ласкаво просимо до магазину спортивного харчування!");

    const name = prompt("Як вас звати?");
    const isAdult = confirm("Вам є 18 років?");

    if (!isAdult) {
        alert("Вибачте, доступ дозволено лише повнолітнім.");
        location.href = "https://google.com"; // Перенаправлення
        return;
    }

    alert(`Привіт, ${name}! Раді вас бачити у нашому магазині.`);
}

// --- 2. Інформація про розробника (функція з параметрами) ---
function showDeveloperInfo(surname, name, position = "Розробник") {
    alert(`Розробник: ${surname} ${name}, посада: ${position}`);
}

function compareUserStrings() {
    const str1 = prompt("Введіть перший рядок для порівняння:");
    const str2 = prompt("Введіть другий рядок для порівняння:");

    if (str1 === null || str2 === null) {
        alert("Скасовано порівняння.");
        return;
    }

    if (str1 > str2) {
        alert(`Рядок "${str1}" більший.`);
    } else if (str2 > str1) {
        alert(`Рядок "${str2}" більший.`);
    } else {
        alert("Рядки однакові.");
    }
}

// --- 4. Зміна фону сторінки на 30 секунд (document, setTimeout) ---
window.onload = function () {
    document.body.style.background = 'blue';
    setTimeout(() => {
        document.body.style.background = '';
    }, 3000);
};

// --- 5. Робота з DOM (getElementById, querySelectorAll) ---
function modifyDOM() {
    // getElementById
    const section = document.getElementById("unique-section");
    if (section) {
        const newParagraph = document.createElement("p");
        const textNode = document.createTextNode("Цей розділ оновлений за допомогою getElementById.");
        newParagraph.appendChild(textNode);
        section.appendChild(newParagraph);
    }

    // querySelectorAll
    const links = document.querySelectorAll("a.nav-link");
    links.forEach(link => {
        link.style.border = "2px dashed red";
    });
}

// --- 6. Властивості DOM-вузлів ---
function workWithNodeProperties() {
    const firstPromo = document.querySelector(".promo");
    if (firstPromo) {
        console.log("innerHTML:", firstPromo.innerHTML);
        console.log("outerHTML:", firstPromo.outerHTML);
        console.log("textContent:", firstPromo.textContent);
        if (firstPromo.firstChild) {
            console.log("nodeValue / data:", firstPromo.firstChild.nodeValue || firstPromo.firstChild.data);
        }
    }
}

// --- 7. Створення, вставка та видалення вузлів ---
function createModifyElements() {
    // Створення
    const newParagraph = document.createElement("p");
    const textNode = document.createTextNode("Цей елемент створено динамічно.");
    newParagraph.appendChild(textNode);

    // Вставка
    document.body.append(newParagraph);
    document.body.prepend(newParagraph.cloneNode(true));
    newParagraph.after("Після створеного параграфа");

    // Заміна
    const replaceTarget = document.querySelector("ul.product-list li:last-child");
    if (replaceTarget) {
        const replacement = document.createElement("li");
        replacement.textContent = "Замінено на цей елемент";
        replaceTarget.replaceWith(replacement);
    }

    // Видалення
    const removeTarget = document.querySelector(".label");
    if (removeTarget) {
        removeTarget.remove();
    }

    // document.write (лише для демонстрації)
    document.write("<p style='color:blue;'>Цей текст вставлено через document.write.</p>");
}

// === ВИКЛИКИ ===
userDialog();                          // 1. Діалог з користувачем
showDeveloperInfo("Голуб", "Даніл");   // 2. Інформація про розробника
compareUserStrings();  // 3. Порівняння рядків
modifyDOM();                           // 5. Зміна DOM
workWithNodeProperties();              // 6. Робота з властивостями вузлів
createModifyElements();                // 7. Створення/вставка/видалення елементів
