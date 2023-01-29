import { Goal } from "@/components/Goal"
import { Plant } from "@/components/Plant"

const Canvas = ({garden, ...props}) => {
    return (
        <div>
            {garden.map((meta, index) => {
                const pos = meta.position
                const plant = meta.plant
                return <Plant key={index} name={plant.filename} />
            })}
        </div>
    )
}

export default Canvas