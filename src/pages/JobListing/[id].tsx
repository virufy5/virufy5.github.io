import { useRouter } from "next/router"

const IdJob = () => {

  const router = useRouter()

  return (
    <div className="text-center text-6xl m-12">
      Job #{router.query.id}
    </div>
  )
}

export default IdJob