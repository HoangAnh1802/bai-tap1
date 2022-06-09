import { createStore } from 'vuex'
export default createStore({
  state: {
    tableData: [
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
    listStudent: [
      {
        id: '1',
        nameId: 'Nguyen Van A',
        dateId: '1/2/2000',
        value: 'Lop A',
      },
      {
        id: '2',
        nameId: 'Nguyen Van B',
        dateId: '6/2/2000',
        value: 'Lop B',
      },
      {
        id: '3',
        nameId: 'Nguyen Van C',
        dateId: '1/12/2000',
        value: 'Lop C',
      },
      {
        id: '4',
        nameId: 'Nguyen Van D',
        dateId: '3/8/2000',
        value: 'Lop D',
      },
    ],
  },
  getters: {
  },
  mutations: {
    ADD_CLASS(state, newClass) {
      let newId = state.tableData.length + 1
      let obj = {id: newId, TenLop: newClass}
      state.tableData.push(obj)
    },
    DELETE_CLASS(state, ID) {
      state.tableData = state.tableData.filter(t => t.id !== ID)
    },
    DELETE_STUDENT(state, ID) {
      console.log(ID)
      state.listStudent = state.listStudent.filter(t => t.id !== ID)
    },
    ADD_STUDENT(state, formStudents) {
      const newId = state.listStudent.length + 1
      let obj = {id: newId, nameId: formStudents.nameId, dateId: formStudents.dateId, value: formStudents.value}
      state.listStudent.push(obj)
    },
    EDIT_STUDENT(state, formEdit) {
      console.log(formEdit)
      // const findEdit = state.listStudent.find(el => el.id == formEdit.id)
      // console.log('2',findEdit)
      const indexEdit = state.listStudent.indexOf(formEdit.id)
      // state.listStudent[indexEdit] = formEdit
      // console.log(indexEdit)
    },
  },
  actions: {

  },
  modules: {
  }
})
