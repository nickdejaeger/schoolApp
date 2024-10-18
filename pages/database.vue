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

    studentName = ref('')
    studentAge = ref(0)
    studentGrade = ref('')
  }

  async function deleteStudent(id) {
    const { data } = await $supabase.from('students')
    .delete()
    .eq('id', id)
    getStudents()
  }
</script>

<template>
  <PageContent>
    <PageHeader>Studenten</PageHeader>
    <div class="flex flex-row">
      <FlexRowGroup>
        <Input 
          :modelValue="studentName"
          placeholder="name"
          @update:modelValue="(value) => studentName = value"
        />
        <Input 
          type="number"
          :modelValue="studentAge"
          @update:modelValue="(value) => studentAge = value"
        />
        <Input 
          :modelValue="studentGrade"
          placeholder="grade"
          @update:modelValue="(value) => studentGrade = value"
        />
        <Button @click="submitStudent()">Add new student</Button>
      </FlexRowGroup>
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
          <td><Button @click="deleteStudent(student.id)" class="secondary">delete</Button></td>
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
      padding: .5rem .5rem;
    }
  }
  thead {
    tr {
      td {
        font-weight: 600;
      }
    }
  }
  tbody {
    tr:nth-of-type(odd) {
      td {
        background-color: #DDD;
      }
    }
  }
}
</style>