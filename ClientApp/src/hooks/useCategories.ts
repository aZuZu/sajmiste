import { useQuery, UseQueryResult } from '@tanstack/react-query'

export interface Category {
  name: string
  emoji: string
  count: number
}

const mockCategories: Category[] = [
  { name: 'Vozila', emoji: '🚗', count: 1240 },
  { name: 'Nekretnine', emoji: '🏠', count: 860 },
  { name: 'Elektronika', emoji: '📱', count: 2300 },
  { name: 'Gaming', emoji: '🎮', count: 540 },
  { name: 'Moda', emoji: '👕', count: 1280 },
  { name: 'Poslovi', emoji: '💼', count: 420 }
]

async function fetchCategories(): Promise<Category[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockCategories), 200)
  })
}

export function useCategories(): UseQueryResult<Category[], Error> {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 30 // 30 minutes
  })
}
