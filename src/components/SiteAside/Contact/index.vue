<template>
  <div class="contact-container">
    <ul>
        <li>
        <a>
          <Icon type="github" />
          <span class="contact-span">{{data && data.githubName}}</span>
        </a>
      </li>
      <li>
        <a :href="`mailto:${data && data.mail}`">
          <Icon type="mail" />
          <span class="contact-span">{{data && data.mail}}</span>
        </a>
      </li>
      <li>
        <a :href="`tencent://message/?Menu=yes&uin=${data && data.mail}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
          <Icon type="qq" />
          <span class="contact-span">{{data && data.qq}}</span>
        </a>
        <div class="contact-eject">
          <img src="../../../img/qrcode_gimg2.baidu.com.png" alt="" />
        </div>
      </li>
      <li>
        <a>
          <Icon type="weixin" />
          <span class="contact-span">{{data && data.weixin}}</span>
        </a>
        <div class="contact-eject">
          <img src="../../../img/qrcode_gimg2.baidu.com.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex"
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("settings",["data"])
  }
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.contact-container {
  color: @gray;
  padding: 20px;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      height: 35px;
      line-height: 35px;
      position: relative;
      margin: 14px 0;
      &:hover .contact-eject{
          transform: scaleY(1);
      }
      a {
        display: flex;
        font-size: 14px;
        cursor: pointer;
            .icon-container {
            font-size: 23px;
            width: 30px;
            }
      }
      .contact-eject {
        width: 200px;
        height: 200px;
        box-sizing: border-box;
        padding: 10px;
        background: #fff;
        position: absolute;
        bottom: 40px;
        transform: scaleY(0);
        transition: all 0.3s;
        transform-origin: center bottom;
        border-radius: 3px;
        &::after {
          content: "";
          width: 8px;
          height: 8px;
          background: #fff;
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform:translateX(-50%) rotate(45deg);
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>