"use client"

import { Button } from "../ui/button"
import Link from "next/link"

const NewConfigurationButton = () => {

  return (
    <Button asChild className="p-5 rounded-xl bg-secondary">
      <Link href="/configurator">
        <p>Make a new configuration with this component</p>
      </Link>
    </Button>
  )
}

export default NewConfigurationButton