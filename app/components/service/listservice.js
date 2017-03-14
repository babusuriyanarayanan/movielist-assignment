const baseUrl = 'http://localhost:3000/data'

export const loadDatas = () => {

	return fetch(baseUrl).then(res => res.json())
}