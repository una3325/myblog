import { useRouter } from 'next/router'
export default function Profile() {
  const router = useRouter()
  const { yyn } = router.query
  return (
    <div>
      <h1>Hello {yyn}!</h1>
      <p> Dynamic routing </p>
    </div>
  )
}
