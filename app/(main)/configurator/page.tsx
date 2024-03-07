import FollowListComponent from "@/components/ConfiguratorPage/components/FollowListComponent";
import ConfiguratorStepper from "@/components/ConfiguratorPage/stepper";

export default function ConfiguratorHomePage() {
  return (
    <div className="flex flex-row px-5">
      <ConfiguratorStepper />
      <FollowListComponent />
    </div>
  )
}
