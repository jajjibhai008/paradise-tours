"use client"

import { ClientCard, type ClientInfo } from "@/components/client-card"
import Title from "@/components/title"

const clients: ClientInfo[] = [
  {
    id: 1,
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzCijygN83oOJs1zsIctdg_Snroz-sBfd1w&s",
    companyName: "Arbisoft",
  },
  {
    id: 2,
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ7G1G-xmQ7ulgITtREbdq9Sm99ngslpsaw&s",
    companyName: "Contour Software",
  },
  {
    id: 3,
    logoUrl: "https://pps.services.adobe.com/api/profile/D7E34C9154C0E0AE0A4C98A5@AdobeID/image/91dab35f-3939-45c4-a077-89867b4a53c7/276",
    companyName: "Folio3",
  },
  {
    id: 4,
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyymx1rrATOCjQ0bsfffELeOMxcowlC7HIeQ&s",
    companyName: "Dubbizle Labs",
  },
  {
    id: 5,
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCxjPGx-YyZlk-AS4ikdSU-bZ7y6cXA9bXw&s",
    companyName: "i2c inc",
  },
  {
    id: 6,
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Bhmc36esvPB-xZrFCZ15XQykxRiWrJXvdg&s",
    companyName: "Netsol",
  }
]

export function OurClients() {
  return (
    <section className="overflow-hidden w-screen">
      <div className="w-full">
        <Title title="Our Clients" />

        <div className="relative w-full">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <ClientCard key={`${client.id}-${index}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${clients.length * 296}px);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

