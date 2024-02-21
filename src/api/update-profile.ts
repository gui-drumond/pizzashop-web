import { api } from '@/lib/axios'

interface updateProfileBody {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: updateProfileBody) {
  await api.put('/profile', { name, description })
}
