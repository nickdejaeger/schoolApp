  <template>
    <div>
      <h1>Student Database</h1>
      <ul>
        <li v-for="student in students" :key="student.id">
          {{ student.name }} - Age: {{ student.age }}, Grade: {{ student.grade }}
        </li>
      </ul>
    </div>
  </template>

  <script setup>
  const { $supabase } = useNuxtApp()
  const students = ref([])

  onMounted(async () => {
    const { data, error } = await $supabase
      .from('students')
      .select('*')
  
    if (error) {
      console.error('Error fetching students:', error)
    } else {
      students.value = data
    }
  })
  </script>
