import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"
/**
 * 消息弹出
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info error success warn 
 * @param {Number} duration 消失间隔时间
 * @param {*} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中 
 */
export default function (gather = {}) {
    const content = gather.content || "";
    const type = gather.type || "info";
    const duration = gather.duration || 2000;
    const container = gather.container || document.body;
    //创建消息元素
    const div = document.createElement("div");
    //添加类样式
    div.className = `${styles.message} ${styles["message-" + type]}`;

    const iconDom = getComponentRootDom(Icon, {
        type
    });
    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`
    //判断container中是否有relative
    if (gather.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }
    container.appendChild(div);
    div.offsetHeight; //强制渲染页面，触发reflow
    div.style.transform = `translate(-50%, -50%) translateY(0)`;
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.style.opacity = 0;
        //动画完全结束后
        div.addEventListener("transitionend", function () {
            div.remove();
            gather.callback && gather.callback();
        }, { once: true })
    }, duration);

}