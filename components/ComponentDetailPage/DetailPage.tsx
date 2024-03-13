import Image from "next/image";

type DetailPageProps = {
  title: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
}

const DetailPage = ({ title, imageUrl, amazonLink, category }: DetailPageProps) => {
  return (
    <div className="flex flex-row w-full">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg w-1/2"
      />
      <div className="flex flex-col w-1/2">

      </div>
    </div>
  )
}

export default DetailPage