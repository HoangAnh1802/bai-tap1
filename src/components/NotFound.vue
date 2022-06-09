<template>
<div>
    <div class="table">
         <div class="btn">
            <el-button class="el-btn" plain @click="toggle">Thêm Học Sinh</el-button> 
        </div>
        <el-table :data="listStudent" border class="el-table">
          <el-table-column type="index" label="STT" width="150" />
          <el-table-column prop="nameId" label="TenHocSinh" width="320" />
          <el-table-column prop="dateId" label="Ngaysinh" width="320" />
          <el-table-column prop="value" label="TenLop" />
          <el-table-column label="Delete">
              <template #default="scope">
                <el-button plain @click="editRow(scope.row)">Edit</el-button> 
                <button class="btd" @click="deleteStudent(scope.row.id)">X</button>
              </template>
          </el-table-column>
        </el-table>
    </div>

    <el-dialog v-model="awesome" title="Topup nhập thông tin lớp" width="30%">
      <input class="ip" type="text" name="ten" placeholder="Nhập tên học sinh..." v-model="formStudents.nameId">
      <input class="ip2" type="text" name="ten" placeholder="Nhập ngày sinh học sinh..." v-model="formStudents.dateId">
      <div>
        <el-select class="ip3" v-model="formStudents.value" placeholder="Chọn lớp...">
          <el-option
            v-for="item in classList"
            :key="item.id"
            :label="item.TenLop"
            :value="item.TenLop"
            :disabled="item.disabled"
          />
        </el-select>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="addStudent(formStudents)">Đồng ý</el-button>
          <el-button @click="awesome = false">Hủy bỏ</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog v-model="edits" title="Topup nhập thông tin học sinh" width="30%">
      <input class="ip" type="text" name="ten" placeholder="Sửa tên học sinh..." v-model="formEdit.nameId">
      <input class="ip2" type="text" name="ten" placeholder="Sửa ngày sinh học sinh..." v-model="formEdit.dateId">
      <div>
        <el-select class="ip3" v-model="formEdit.value" placeholder="Chọn lớp...">
          <el-option
            v-for="item in classList"
            :key="item.id"
            :label="item.TenLop"
            :value="item.TenLop"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="editStudent(this.formEdit)">Đồng ý</el-button>
          <el-button @click="edits = false">Hủy bỏ</el-button>
        </span>
      </template>
    </el-dialog>

</div>
</template>
 
<script>
import { ref } from 'vue'
export default {
  computed: {
    classList() {
      return this.$store.state.tableData
    },
    listStudent() {
      return this.$store.state.listStudent
    },
  },
  data() {
    return {
      awesome: false,
      formStudents: {
        nameId: "",
        dateId: "",
        value: "",
      },
      value: ref(''),
      title: '',
      edits: false,
      formEdit: {
        id: null,
        nameId: null,
        dateId: null,
        value: null
      }
    };   
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome;
    },
    addStudent(formStudents) {
      this.$store.commit('ADD_STUDENT', formStudents)
      this.awesome = false
      this.formStudents.nameId = ''
      this.formStudents.dateId = ''
      this.formStudents.value = ''
    },
    deleteStudent(ID) {
      this.$store.commit('DELETE_STUDENT', ID)
    },
    editRow(thisStudent) {
      this.edits = !this.edits;
      this.formEdit = thisStudent
      // this.formEdit.id = thisStudent.id;
      // this.formEdit.editName = thisStudent.nameId;
      // this.formEdit.editDate = thisStudent.dateId;
      // this.formEdit.editValue = thisStudent.value;
    },
    editStudent(formEdit) {
      this.$store.commit('EDIT_STUDENT', formEdit)
      this.edits = false
    }
  },
};
</script>
<style>
    .el-table{
        width: 100%;
        border-width: 3px;
        margin-bottom: 20px;
    }
    .table{
        height: 250px;
        width: 80%;
        margin-left: 10%;
    }
    .btn{
    }
    .el-btn{
        float: right;
    }
    .ip2{
      border: 1px double #808080;
      border-radius: 3px;
      width: 80%;
      height: 25px;
      margin-top: 10px;
    }
    .ip3{
    width: 82%;
    margin-top: 10px;
    }
    .btd{
      margin-left: 20px;
    }
</style>