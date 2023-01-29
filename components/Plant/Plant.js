import Image from "next/image"

const Plant = ({name, ...props}) => {
    return (
        <>
            <Image 
                src={"/" + name} 
                width={128}
                height={128}
            />
        </>
    )
}

export default Plant