import dbConnect from '@/lib/dbConnect'
import User from '@/models/User'

import { Hero } from '@/components/Hero'

const Index = ({ users }) => {
    return (
        <>
            <Hero />
        </>
    )
}

export async function getServerSideProps() {
    await dbConnect()

    const result = await User.find({})
    const users = JSON.parse(JSON.stringify(result))

    return { props: { users: users }}
}

export default Index
