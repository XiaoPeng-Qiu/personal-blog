import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultgif from "@/assets/default.gif"
//拿到每一个dom对象
let imgs = [];
//该图片是否在视口范围内
function setImage(img) {
    img.dom.src = defaultgif;
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 100;
    if (rect.top > -height && rect.top < clientHeight) {
        //在视口范围内
        // img.dom.src = img.src;
        const tempImage = new Image();
        tempImage.onload = function () {
            //当真实图片加载完成之后
            img.dom.src = img.src;
        }
        tempImage.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

//调用函数，设置图片
function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}
function handleScroll() {
    setImages();
}

eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        };
        imgs.push(img)
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}