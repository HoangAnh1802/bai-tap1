<template>
  <div>
      <el-button @click="ElDialog = true">Open</el-button>
    <el-dialog v-model="ElDialog" title="Topup nhập thông tin lớp" width="30%">
      <input class="ip" type="text" name="ten" placeholder="Nhập tên học sinh..." v-model="formStudents.name"/>
      <input class="ip2" type="text" name="ten" placeholder="Nhập ngày sinh học sinh..." v-model="formStudents.date"/>
      <div>
        <el-select class="ip3" v-model="formStudents.class" placeholder="Chọn lớp...">
          <el-option
            v-for="item in classList"
            :key="item.id"
            :label="item.TenLop"
            :value="item.TenLop"
          />
        </el-select>
      </div>
      <template #footer>    
        <span class="dialog-footer">
          <el-button type="primary" @click="addStudent">Đồng ý</el-button>
          <el-button @click="awesome = false">Hủy bỏ</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        ElDialog : false,
        formStudents: {
        name: "",
        class: "",
        date: "",
      },
      classList: [
        {
          id: "1",
          TenLop: "Lop A",
        },
        {
          id: "2",
          TenLop: "Lop B",
        },
        {
          id: "3",
          TenLop: "Lop C",
        },
        {
          id: "4",
          TenLop: "Lop D",
        },
      ],
    };
  },
  methods:{
      addStudent(){
        console.log(this.formStudents)
      }
  }
};
</script>

<style>
</style>