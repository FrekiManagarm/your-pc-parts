"use client"
import { Button } from "@/components/ui/button";
import useConfiguration from "@/lib/providers/configuratorProvider";


function GPUStep() {

  const { nextStep } = useConfiguration()

  return (
    <div>
      GPU Step
      <Button
        className=""
        onClick={() => {
          nextStep()
        }}
      >
        Suivant
      </Button>
    </div>
  )
}

export default GPUStep