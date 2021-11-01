import Home from './Home.tsx'
import Test from './Test.tsx'
// import { fetchPopularRepos } from './api'

const routes =  [
  {
	path: '/',
	exact: true,
	component: Home,
  },
  {
    path: '/test',
	exact: true,
	component: Test,
  }
  /*
  {
	path: '/popular/:id',
	component: Grid,
	fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
  */
]

export default routes