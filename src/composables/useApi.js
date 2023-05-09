// /* eslint-disable prettier/prettier */
// import { ref } from 'vue'
// import axios from 'axios'

// const characters = ref([])
// const pages = ref(1)
// const loading = ref(false)
// const activePage = ref(1)
// const pageSize = ref(8)

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   auth: {
//     username: import.meta.env.VITE_API_USERNAME,
//     password: import.meta.env.VITE_API_PASSWORD,
//   },
// })

// const getCharacters = async () => {
//   loading.value = true
//   const { data, headers } = await api.get('/api/dndcharacters', {})
//   characters.value = data
//   loading.value = false
// }

// const useAPI = () => {
//   return { getCharacters, loading }
// }

// export default useAPI
