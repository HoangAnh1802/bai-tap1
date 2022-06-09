<template>
  <div class="total">
    <div>
      <p>Tong so lop: {{totalClass}}</p>
    </div>

    <div>
      <p>Tong so hoc sinh: {{totalStudent}} </p>
    </div>

  </div>

</template>

<script>
export default {
    name: 'About',
    computed: {
      totalClass() {
      return this.$store.state.tableData.length
    },
    totalStudent() {
      return this.$store.state.listStudent.length
    }
  }

}
</script>

<style scoped>
.total{
  margin-left: 80px;
  margin-top: 100px;
}
.el-link {
 
  
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>