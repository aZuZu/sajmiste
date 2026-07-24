import { useQuery, UseQueryResult } from '@tanstack/react-query'

export interface Listing {
  id: number
  title: string
  price: string
  location: string
  time: string
  img: string
}

// Mock data — replace with real API call
const mockListings: Listing[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Prodajem proizvod ${i + 1}`,
  price: `${(i + 1) * 1500} €`,
  location: 'Zagreb',
  time: `${i + 1}h`,
  img: '/assets/listing-sample.jpg'
}))

async function fetchListings(): Promise<Listing[]> {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => resolve(mockListings), 300)
  })
}

export function useListings(): UseQueryResult<Listing[], Error> {
  return useQuery({
    queryKey: ['listings'],
    queryFn: fetchListings,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
