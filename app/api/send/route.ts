import { WelcomeEmailTemplate } from "@/components/emails/welcome-email";
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: "PetConnect <contact@your-pc-parts.fr>",
            to: ["mathchambaud2000@gmail.com"],
            subject: "Welcome to PetConnect",
            react: WelcomeEmailTemplate({ firstname: "Mathieu" })
        });

        if (error) {
            return Response.json({ data })
        }

        return Response.json({ data });
    } catch (e) {
        return Response.json({ e });
    }
}