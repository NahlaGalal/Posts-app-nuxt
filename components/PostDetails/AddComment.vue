<template >
  <el-form :model="modelValue" class="Addition" @submit.prevent="$emit('addComment', ruleFormRef)" :rules="rules"
    novalidate ref="ruleFormRef">
    <el-row :gutter="16">
      <el-col :sm="12">
        <el-form-item prop="name">
          <el-input name="name" type="text" placeholder="Name" v-model="modelValue.name" />
        </el-form-item>
      </el-col>

      <el-col :sm="12">
        <el-form-item prop="email">
          <el-input name="email" type="email" placeholder="Email" v-model="modelValue.email" />
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item prop="comment">
      <el-input type="textarea" name="comment" placeholder="Comment" v-model="modelValue.comment"
        @focus="expandInputHandler" :class="{
          expanded:
            isExpand
        }" data-test="comment-textarea" />
    </el-form-item>

    <el-alert data-test="comment-success" class="Addition__success" type="success" show-icon
      title="Comment added successfully" v-if="isSuccess" />

    <div class="Addition__btns" v-if="isExpand">
      <el-button native-type="submit" type="success" data-test="submit-comment">Submit</el-button>
      <el-button native-type="reset" type="info" data-test="cancel-comment" class="Addition__btns__cancel"
        @click="collapsenputHandler">Cancel</el-button>
    </div>
  </el-form>
</template>

<script setup>
import { ref, reactive } from "vue";

const { handleSuccessFlag } = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  handleSuccessFlag: {
    type: Boolean,
    default: false
  }
});

defineEmits(["addComment"])

const ruleFormRef = ref();

const rules = reactive({
  name: [{
    required: true,
    message: "Name input is required",
  }],
  email: [
    {
      required: true,
      message: "Email input is required"
    }, {
      type: "email",
      message: "Email must be valid"
    }
  ],
  comment: [{
    required: true, message: "Message input is required"
  }]
})

let isExpand = ref(false);
let isSuccess = ref(false);

const expandInputHandler = () => isExpand.value = true;
const collapsenputHandler = () => isExpand.value = false;

watch(() => handleSuccessFlag, () => {
  isSuccess.value = true;
  isExpand.value = false;

  setTimeout(() => {
    isSuccess.value = false;
  }, 1000)
})
</script>

<style lang="scss">
.Addition {
  margin: 24px 0;
  padding-left: 56px;

  .el-form {
    &-item__content {
      .el-input {
        &__wrapper {
          border-radius: 8px;
          border: var(--el-border);
          box-shadow: none;
          padding: 0 14px;
          height: 40px;
        }

        &__inner {
          color: var(--el-color-black);
        }
      }

      .el-textarea {
        transition: all 0.3s ease-in-out;
        height: 64px;

        &__inner {
          border-radius: 8px;
          border: var(--el-border);
          box-shadow: none;
          padding: 10px 14px;
          color: var(--el-color-black);
          height: 100%;
        }

        &.expanded {
          height: 128px;
        }
      }
    }
  }

  &__btns {
    display: flex;
    gap: 8px;
    margin-top: 24px;

    &__cancel {
      background-color: var(--el-color-black);

      &:hover {
        background-color: var(--el-color-black);
      }
    }
  }
}
</style>