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

$(document).ready(() => {
    modalWindow.init($(".login-button"));
});