<template>
  <form
    class="data-form-conatainer"
    @submit.prevent="handleSubmit"
    ref="container"
    id="comment-Number-container"
  >
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="请输入用户名"
          v-model="formData.nickname"
          maxlength="10"
        />
        <span>{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          placeholder="请输入内容"
          v-model.trim="formData.content"
          maxlength="300"
        ></textarea>
        <span>{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting ? "提交中..." : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请输入用户名";
      this.error.content = this.formData.content ? "" : "请输入内容";
      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true;
      this.$emit("submit", this.formData, (message) => {
        this.$showMessage({
          content: message,
          type: "success",
          container: this.$refs.container,
          callback: () => {
            this.isSubmiting = false;
            this.formData.nickname = "";
            this.formData.content = "";
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.data-form-conatainer {
  width: 100%;
  //   padding: 10px;
  box-sizing: border-box;
  .form-item {
    margin-top: 15px;
    span {
      color: @gray;
      font-size: 12px;
    }
  }
  .input-area {
    width: 350px;
    height: 35px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      border: 1px dotted;
      outline-color: #000;
      padding: 5px 10px;
      box-sizing: border-box;
      border-radius: 3px;
    }
    span {
      position: absolute;
      right: 5px;
      bottom: 4px;
    }
  }
  .text-area {
    width: 700px;
    position: relative;
    box-sizing: border-box;
    textarea {
      width: 100%;
      height: 100%;
      resize: none;
      border: 1px dotted #000;
      border-radius: 3px;
      padding: 10px;
      box-sizing: border-box;
      font-size: 13px;
    }
    span {
      position: absolute;
      right: 5px;
      bottom: 8px;
    }
  }
  .button-area {
    button {
      width: 100px;
      height: 40px;
      background-color: @primary;
      border: none;
      color: #fff;
      cursor: pointer;
      text-align: center;
      box-shadow: 1px 2px 5px #0b486b;
      &:hover {
        background-color: darken(@primary, 10%);
      }
      &:disabled {
        background-color: lighten(@primary, 10%);
        box-shadow: none;
        cursor: text;
      }
    }
  }
  .error {
    color: @danger;
    font-size: 12px;
  }
}
</style>