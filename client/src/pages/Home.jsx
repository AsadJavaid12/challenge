import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import useAxiosPrivate from '../hooks/usePrivate';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser();
    const [ethumBalence , setEthumBalence] = useState() 
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        getUser()
        if (user?.email !== undefined) {
           const getEthumBalance = async () => {
               const response = await axiosPrivate.get('auth/home')
               setEthumBalence(response.data.ether_balance)
             
           }
           getEthumBalance()
        }
    }, [])


    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? <><div>List user Ethereum balance</div>
                        <div>{ethumBalence}</div>
                        </> : 'Please login first'}
                    </div>
               
                </div>
            </h2>
        </div>
    )
}
