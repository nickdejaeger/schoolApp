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
      { name: studentName.value, age: studentAge.value, grade: studentGrade.value }
    ])
    .select()
    getStudents()//students.value = data
  }
</script>

<template>
  <div>
    <h1>Student Database</h1>

    <div class="flex flex-row">
      <input v-model="studentName" type="text" placeholder="name">
      <input v-model="studentAge" type="number" value="0">
      <input v-model="studentGrade" type="text" placeholder="grade">
      <Button class="button--primary" @click="submitStudent()">Add new student</Button>
    </div>

    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} - Age: {{ student.age }}, Grade: {{ student.grade }}
      </li>
    </ul>
  </div>
</template>

  
