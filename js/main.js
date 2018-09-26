const siteNames = {
    "index":`<i>Зоошоп - Лапы вверх!</i>`,
    "blog":`<i>Наш блог</i>`,
    "contacts":"Контактная информация",
    "shop":"Интернет магазин",
    "order":"Интернет магазин - Заказ",
    "default":"Зоошоп - Лапы вверх!"
};

function getSiteName() {
    const url = document.location.pathname;
    let siteName = siteNames.default;
    for (let key in siteNames) {
        if (url.includes(key)) {
            siteName = siteNames[key];
            console.log("Совпадение найдено! URL: " + url + " ключ: " + key);
            break;
        }
    }
    return siteName;
}

function init1() {
    alert("Вы нажали на кнопку 1000-й раз, вы победитель лотерери!");
}


function init() {
    let element = document.getElementById("home-link");
    element.addEventListener("click", () => {
        element.setAttribute("href", "http://yandex.ru/");
    });
}

const menu = `
    <a href="index.html" id="home-link" name="link">Главная</a> |
            <a href="blog.html" name="link">Блог</a> |
            <a href="#" class="login-button" name="link">Вход</a>
`;

function getMenu() {
    return menu;
}

const modalWindow = {
    BLUR_CLASS: "blur",
    modal: '',
    contentBlock: '',

    init: (openButton) => {
        modalWindow.modal = $(".modal");
        modalWindow.contentBlock = $("div.content");
        modalWindow.initOpenListener(openButton);
        modalWindow.initCloseListener();
    },

    initOpenListener: (openButton) => {
        openButton.click(() => {
            modalWindow.modal.fadeIn(500);
            modalWindow.contentBlock.addClass(modalWindow.BLUR_CLASS);
        });
    },

    initCloseListener: () => {
        $(".modal > span").click(() => {
            modalWindow.modal.fadeOut(800);
            modalWindow.contentBlock.removeClass(modalWindow.BLUR_CLASS);
        });
    }
};

const sliderWidget = {
    components: '',

    init: (element) => {
        sliderWidget.components = element;

        sliderWidget.components.click((e) => {
            let target = $(e.currentTarget);
            target.find("div").slideToggle("fast");
        });
    }
};

$(document).ready(() => {
    modalWindow.init($(".login-button"));
    sliderWidget.init($(".slider-questions > div"));
    sliderWidget.init($(".slider-info > div"));
    sliderWidget.init($(".slider-qualities > div"));
});