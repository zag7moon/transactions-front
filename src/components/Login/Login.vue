<template>
  <el-card class="auth-form-container">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="Телефон" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Вход</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { AUTH } from '../../vuex/types'

export default {
  name: 'login',
  data: () => ({
    form: {
      username: null,
      password: null
    },
    rules: {
      username: { required: true, trigger: 'blur' },
      password: { required: true, trigger: 'blur' }
    }
  }),
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.authenticate()
          return true
        }
        return false;
      });
    },
    async authenticate () {
      try {
        await this.$store.dispatch(AUTH, this.form)
        this.$router.push({name: 'transactions'})
      } catch (e) {
        throw(e)
      }
    }
  }
}
</script>

<style lang="scss">
  .auth-form-container {
    width: 500px;
    margin: 0 auto;
  }
</style>

