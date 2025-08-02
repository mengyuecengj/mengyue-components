<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="form-test">
    <MYForm ref="formRef" v-model="formData" :rules="rules" @validate="onValidate">
      <!-- Input -->
      <MYForm-item label="用户名" prop="username" :validateTrigger="'blur'">
        <MYInput v-model="formData.username" placeholder="请输入用户名" />
      </MYForm-item>

      <MYButton type="info" @click="handleReset">重置</MYButton>
      <MYButton type="button" @click="handleSubmit">提交</MYButton>

      <!-- Switch -->
      <MYForm-item label="是否启用" prop="enabled">
        <MYSwitch v-model="formData.enabled" />
      </MYForm-item>

      <!-- 单选框 -->
      <MYForm-item label="性别" prop="gender">
        <MYRadio-group v-model="formData.gender">
          <MYRadio value="1">男</MYRadio>
          <MYRadio value="2">女</MYRadio>
        </MYRadio-group>
      </MYForm-item>

      <!-- 多选框 -->
      <MYForm-item label="兴趣爱好" prop="hobbies">
        <MYCheckbox-group v-model="formData.hobbies">
          <MYCheckbox value="reading">阅读</MYCheckbox>
          <MYCheckbox value="gaming">游戏</MYCheckbox>
          <MYCheckbox value="coding">编程</MYCheckbox>
        </MYCheckbox-group>
      </MYForm-item>

      <!-- 展示当前数据 -->
      <pre>{{ formData }}</pre>
    </MYForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
const formRef = ref()

const formData = reactive({
  username: '',
  enabled: false,
  gender: '1',
  hobbies: [] as string[]
})

const rules = {
  username: [
    { required: true, message: '用户名不能为空' },
  ],
  gender: [
    { required: true, message: '请选择性别' }
  ],
  hobbies: [
    { required: true, message: '请选择至少一个兴趣爱好' }
  ]
}

function handleReset() {
  formData.username = ''
  formData.enabled = false
  formData.gender = ''
  formData.hobbies = []
  formRef.value?.clearValidate()
}

function onValidate(valid: boolean) {
  if (valid) {
    alert('验证通过，可以提交！')
  } else {
    alert('验证失败，请检查表单！')
  }
}

function handleSubmit() {
  formRef.value.validate()
    .then(() => {
      alert('提交成功！\n' + JSON.stringify(formData, null, 2))
    })
    .catch(() => {
      alert('提交失败，请检查输入项！')
    })
}
</script>

<style scoped>
.form-test {
  max-width: 400px;
  margin: 20px auto;
}
</style>
