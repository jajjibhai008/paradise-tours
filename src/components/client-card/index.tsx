import { Card } from "@/components/ui/card"

export interface ClientInfo {
  id: number
  logoUrl: string
  companyName: string
}

interface ClientCardProps {
  client: ClientInfo
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <Card
      className="shrink-0 w-[200px] h-[140px] mx-2 my-2 overflow-hidden cursor-pointer shadow-md p-2 sm:w-[240px] sm:h-[160px] md:w-[280px] md:h-[200px] md:mx-4"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <img
            src={client.logoUrl}
            alt={`${client.companyName} logo`}
            className="w-full h-full object-contain p-2"
          />
        </div>
      </div>
    </Card>
  )
}

