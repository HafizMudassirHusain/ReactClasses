import { createRoot } from 'react-dom/client'
import './index.css'
import Routing from './Routing.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
       
       <QueryClientProvider client={queryClient}>
              <Routing />
       </QueryClientProvider>
)

//mutation-> data ko add/update krne ke lye
//query-> data ko get krne ke lye
//stale => cache
// unvalidate stale => cache ko khatam krne ke lye