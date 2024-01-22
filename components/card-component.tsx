import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

type CardProps = {
    title: string;
    category: string;
    image: string;
}

const CardComponent = ({ title, category, image }: CardProps) => {
    return (
        <Card className="w-[250px]">
            <CardHeader>
                <Image
                    src={image}
                    width={300}
                    height={200}
                    alt="card image"
                />
            </CardHeader>
            <CardContent>


                <h3 className="font-bold text-2xl">{title}</h3>
                <div className="p-1 bg-black text-white font-semibold rounded-full w-[3rem] text-center">
                    {category}
                </div>
            </CardContent>
        </Card>
    )
}

export default CardComponent