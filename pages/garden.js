import { useState } from "react"
import User from "@/models/User"
import dbConnect from "@/lib/dbConnect"
import { Goal } from "@/components/Goal"
import { Canvas } from "@/components/Canvas"

const Garden = ({user}) => {
    return (
        <>
            <Canvas garden={user.garden} />
        </>
    )
}

export async function getServerSideProps() {
    await dbConnect()

    const result = await User.findById("63d599b03e52064b8b012e83")
    const user = JSON.parse(JSON.stringify(result))

    return { props: { user: user }}
}

export default Garden