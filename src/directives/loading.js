import loadingUrl from "@/assets/loading.svg";
import loading from "./loading.module.less"
function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
}
function createImage() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = loading.center;
    return img;
}
export default function (el, binding) {
    //根据binding.value的值，决定创建或删除img元素
    const curimg = getLoadingImage(el);
    if (binding.value) {
        if (!curimg) {
            const img = createImage();
            el.appendChild(img);
        }
    } else {
        if(curimg){
            curimg.remove();
        }
    }
}
