// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mockPosts from '@/data/mockPosts';

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body

  if (!body.title || !body.description) {
    return res.status(400).json({ message: 'Title and description are required' })
  }

  const id = body.title.toLowerCase().split(' ').join('-')
  const isAlready = mockPosts.find((item:any) => item.id === id)
  if (isAlready) {
    return res.status(400).json({message: 'Post with same title already exists'})
  }
  const data = { 
    title: body.title,
    description: body.description,
    id
  }
  mockPosts.push(data)

  res.status(200).json({ message: 'Post is created', id })
}
