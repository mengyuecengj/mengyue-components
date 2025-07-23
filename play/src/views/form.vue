<template>
  <div class="form-test-container">
    <h2>表单功能测试</h2>
    <MYForm
      ref="formRef"
      v-model="formData"
      :rules="rules"
      label-width="120"
      :inline="false"
      size="medium"
    >
      <MYFormItem label="用户名" prop="username">
        <MYInput v-model="formData.username" placeholder="请输入用户名" />
      </MYFormItem>

      <MYFormItem label="年龄" prop="age">
        <MYInput
          v-model="formData.age"
          type="number"
          placeholder="请输入年龄"
        />
      </MYFormItem>

      <MYFormItem label="备注" prop="remark">
        <MYInput
          v-model="formData.remark"
          type="textarea"
          placeholder="请输入备注"
        />
      </MYFormItem>

      <MYFormItem>
        <div class="button-group">
          <MYButton type="primary" @click="onValidate">校验表单</MYButton>
          <MYButton @click="onReset" type="info">重置表单</MYButton>
          <MYButton @click="onClear" type="warning">清除校验</MYButton>
        </div>
      </MYFormItem>
    </MYForm>

    <pre class="output">
{{ resultMessage }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineOptions({ name: 'FormTest' })

const formRef = ref()
const formData = reactive({
  username: '',
  age: '',
  remark: ''
})

const rules = {
  username: [
    { required: true, message: '用户名不能为空' }
  ],
  age: [
    { required: true, message: '年龄不能为空' },
    { validator: async (_: any, value: any) => {
        const v = Number(value)
        return v > 0 && v < 150
      }, message: '请输入 1-149 的年龄'
    }
  ]
}

const resultMessage = ref('')

// 校验整个表单
async function onValidate() {
  try {
    await formRef.value.validate()
    resultMessage.value = '验证通过 🎉'
  } catch (err) {
    resultMessage.value = `验证失败: ${(err as Error).message}`
  }
}

// 重置表单
function onReset() {
  formRef.value.resetFields()
  resultMessage.value = '表单已重置'
}

// 清除所有校验状态
function onClear() {
  formRef.value.clearValidate()
  resultMessage.value = '校验信息已清除'
}
</script>

<style scoped>
.form-test-container {
  max-width: 600px;
  margin: 20px auto;
  background: #fafafa;
  padding: 20px;
  border-radius: 8px;
}

h2 {
  margin-bottom: 16px;
  font-size: 20px;
}

.button-group {
  display: flex;
  gap: 12px;
}

.output {
  margin-top: 16px;
  background: #fff;
  padding: 12px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  font-family: monospace;
  white-space: pre-wrap;
}
</style>
