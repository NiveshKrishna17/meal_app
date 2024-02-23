import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    data: [],
    getMealData: async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            set({ data: response.data.categories })
        } catch (e) {
            console.error('Error in Fetching Data: ', e)
        }
    }
}))

export default useStore;