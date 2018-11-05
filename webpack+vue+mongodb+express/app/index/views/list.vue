<style lang="stylus">
  #list-container 
    width 100%
</style>
<template>
  <div id="list-container">
    <el-form ref="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="sex">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        name: '',
        age: '',
        sex: '',
        options2: [
          {
            value: '1',
            label: '男'
          }, {
            value: '2',
            label: '女'
          }
        ]
      }
    }
  }
</script>