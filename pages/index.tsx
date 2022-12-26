
import Link from 'next/link'
import { Typography } from '@mui/material'



export default function Home() {
  return (
    <>
      <Link href={'/about'}>
        <button>go to about</button>
      </Link>
      <Typography variant='h1'>hello hello heloo</Typography>
    </>
  )
}
