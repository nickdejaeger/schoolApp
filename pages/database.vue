<script setup>
  const { $supabase } = useNuxtApp()

  const students = ref([])
  const studentName = ref('')
  const studentAge = ref(0)
  const studentGrade = ref('')

  onMounted(() => {
    getStudents()
  })

  async function getStudents() {
    const { data } = await $supabase.from('students').select()
    students.value = data
  }

  async function submitStudent() {
    const { data } = await $supabase.from('students')
    .insert([
      { 
        name: studentName.value,
        age: studentAge.value,
        grade: studentGrade.value
      }
    ])
    .select()

    getStudents()
  }
</script>

<template>
  <PageContent>
    <PageHeader>Studenten</PageHeader>
    <div class="flex flex-row">
      <input v-model="studentName" type="text" placeholder="name">
      <input v-model="studentAge" type="number" value="0">
      <input v-model="studentGrade" type="text" placeholder="grade">
      <Button class="button--primary" @click="submitStudent()">Add new student</Button>
    </div>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.grade }}</td>
        </tr>
      </tbody>  
    </table>
  </PageContent>
</template>

<style scoped lang="scss">
table {
  background-color: rgba(0,0,0,.05);
  tr {
    td {
      padding: .25rem;
    }
  }
  thead {
    tr {
      td {
        font-weight: 600;
      }
    }
  }
}
</style>