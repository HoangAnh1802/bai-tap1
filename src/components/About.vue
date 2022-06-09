<template>
  <div>
    <div class="table">
      <div class="btn">
        <el-button class="el-btn" plain @click="toggle">Thêm Lớp</el-button>
      </div>
      <el-table :data="classList" border class="el-table">
        <el-table-column type="index" label="STT" width="500" />
        <el-table-column prop="TenLop" label="TenLop"/>
        <el-table-column label="Delete">
              <template   #default="scope">
              <button @click="deleteClass(scope.row.id)">X</button>
              </template>
        </el-table-column>
      </el-table>

    </div>
    <el-dialog v-model="awesome" title="Topup nhập thông tin lớp" width="30%">
      <input class="ip" type="text" name="ten" placeholder="Nhập tên lớp" v-model="title">
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="onSubmit(title)">Confirm</el-button>
          <el-button @click="awesome = false">Cancel</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      title: '',
      count : ''
    };
  },
  computed: {
    classList() {
      return this.$store.state.tableData
    },
    
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome;
    },
    deleteClass(ID) {
      console.log(ID)
      this.$store.commit('DELETE_CLASS', ID)
    },
    onSubmit() {
      const data = {
        // id : this.count,
      }
      // this.count++
      // console.log(this.count)
      // console.log(this.title)
      this.$store.commit('ADD_CLASS', this.title)
      this.title = ''
      this.awesome = false
    }
  },
  // setup() {
  //   const tableData = [
  //     {
  //       STT: "1",
  //       TenLop: "Lop A",
  //     },
  //     {
  //       STT: "2",
  //       TenLop: "Lop B",
  //     },
  //     {
  //       STT: "3",
  //       TenLop: "Lop C",
  //     },
  //     {
  //       STT: "4",
  //       TenLop: "...",
  //     },
  //   ];
  // },
};
</script>

<style>
.el-table {
  width: 100%;
  border-width: 3px;
  margin-bottom: 20px;
}
.table {
  height: 250px;
  width: 80%;
  margin-left: 10%;
}
.btn {
  
}
.el-btn {
  float: right;
  margin-bottom: 10px;
}
.ip{
  border: 1px double #808080;
  border-radius: 3px;
  width: 80%;
  height: 25px;
}
</style>