// === 1. ДІАЛОГ З КОРИСТУВАЧЕМ ===
function userDialog() {
    alert("Ласкаво просимо до нашого магазину!");
    const name = prompt("Як вас звати?");
    const isAdult = confirm("Вам є 18 років?");

    if (!isAdult) {
        alert("Вибачте, доступ лише для повнолітніх.");
        location.href = "https://google.com";
        return;
    }

    alert(`Привіт, ${name}! Гарного перегляду.`);

    // Цикл для прикладу
    for (let i = 1; i <= 3; i++) {
        console.log(`Підказка №${i}`);
    }
}

// === 2. ІНФОРМАЦІЯ ПРО РОЗРОБНИКА ===
function showDeveloperInfo(surname, name, position = "Розробник") {
    alert(`Розробник: ${surname} ${name}, посада: ${position}`);
}

// === 3. ПОРІВНЯННЯ РЯДКІВ ===
function compareUserStrings() {
    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");

    if (str1 === null || str2 === null) {
        alert("Скасовано.");
        return;
    }

    if (str1 > str2) {
        alert(`"${str1}" більший.`);
    } else if (str2 > str1) {
        alert(`"${str2}" більший.`);
    } else {
        alert("Рядки однакові.");
    }
}

// === 4. ЗМІНА ФОНУ НА 30 СЕКУНД ===
document.body.style.background = "#e0ffe0";
setTimeout(() => {
    document.body.style.background = "";
}, 30000);

// === 5. МАНІПУЛЯЦІЇ З DOM ===
window.onload = function () {
    // getElementById
    const title = document.getElementById("main-title");
    title.textContent = "🏋️ Магазин спортивного харчування";
    title.style.color = "#004488";

    // querySelectorAll
    document.querySelectorAll(".nav-link").forEach(link => {
        link.style.borderBottom = "2px dashed blue";
    });

    // innerHTML, outerHTML, textContent, nodeValue
    const promo = document.querySelector(".promo");
    if (promo) {
        console.log("innerHTML:", promo.innerHTML);
        console.log("outerHTML:", promo.outerHTML);
        console.log("textContent:", promo.textContent);
        if (promo.firstChild) {
            console.log("nodeValue/data:", promo.firstChild.nodeValue || promo.firstChild.data);
        }
    }

    // createElement + createTextNode + append
    const info = document.createElement("p");
    const text = document.createTextNode("💬 Новини: безкоштовна доставка при замовленні від 500 грн!");
    info.appendChild(text);
    document.body.append(info);

    // prepend
    const promoLabel = document.createElement("span");
    promoLabel.textContent = "🚀 Новинка!";
    promo.prepend(promoLabel);

    // after
    const afterText = document.createElement("div");
    afterText.textContent = "🛒 Додано нові товари!";
    promo.after(afterText);

    // replaceWith (останній елемент списку)
    const lastItem = document.querySelector("ul.product-list li:last-child");
    const replacement = document.createElement("li");
    replacement.textContent = "🔁 Передтрен";
    lastItem.replaceWith(replacement);

    // remove
    const toRemove = document.querySelector(".old-banner");
    if (toRemove) {
        toRemove.remove();
    }
};

// === ВИКЛИК ФУНКЦІЙ ===
userDialog();
showDeveloperInfo("Голуб", "Даніл");
compareUserStrings();
