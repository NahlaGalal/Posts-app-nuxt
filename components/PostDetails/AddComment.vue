<template >
  <el-form :model="addCommentForm" class="Addition" @submit.prevent="$emit('addComment')" :rules="rules">
    <el-form-item>
      <el-input placeholder="Name" :model-value="addCommentForm.name"
        @input="$emit('update:modelValue', $event.target.value)" />
      <el-input placeholder="Email" :model-value="addCommentForm.email"
        @input="$emit('update:modelValue', $event.target.value)" />
    </el-form-item>

    <el-form-item>
      <el-input type="textarea" placeholder="Message" :model-value="addCommentForm.message"
        @input="$emit('update:modelValue', $event.target.value)" @focus="expandInputHandler" :class="{
          expanded:
            isExpand
        }" data-test="comment-textarea" />
    </el-form-item>

    <el-alert data-test="comment-success" class="Addition__success" type="success" show-icon
      title="Comment added successfully" />

    <div class="Addition__btns" v-if="isExpand">
      <el-button native-type="submit" type="success" data-test="submit-comment">Submit</el-button>
      <el-button native-type="reset" type="info" data-test="cancel-comment" class="Addition__btns__cancel"
        @click="collapsenputHandler">Cancel</el-button>
    </div>
  </el-form>
</template>

<script setup>
import { ref, reactive } from "vue";

defineProps({
  addCommentForm: {
    type: Object,
    required: true
  }
})

defineEmits(["addComment"])

const rules = reactive({
  name: [{
    required: true,
    message: "Name input is required",
  }],
  email: [{ type: "email", required: true, message: "Email input is required" }],
  message: [{
    required: true, message: "Message input is required"
  }]
})

const isExpand = ref(false);

const expandInputHandler = () => isExpand.value = true;
const collapsenputHandler = () => isExpand.value = false;
</script>

<style lang="scss">
.Addition {
  margin: 24px 0;
  padding-left: 56px;

  .el-form {
    &-item__content {
      gap: 16px;

      .el-input {
        flex: 1;
        min-width: 200px;

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