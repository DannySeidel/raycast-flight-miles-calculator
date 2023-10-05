import { Detail } from "@raycast/api"

interface ResultViewProps {
    origin: string
    destination: string
    miles: string
}

export const ResultView = ({ origin, destination, miles }: ResultViewProps) => {
    return (
        <Detail
            markdown={`**Origin:** ${origin}\n**Destination:** ${destination}\n**Miles:** ${parseFloat(miles) * 100}%`}
        />
    )
}
