import { getCPUs } from "@/actions/cpu/cpu.action"
import { CPU } from "@prisma/client"


export async function CPUList() {

  const data: CPU[] = await getCPUs()

  return (
    <div>CPUList</div>
  )
}
