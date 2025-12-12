import { useEffect } from 'react'
import {requst} from '@/utils'
const Layout = () => {
    useEffect(() => {
        requst.get('/user/profile')
    },[])
    return <div>this is Layout</div>
}
export default Layout