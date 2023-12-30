import {
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Html,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface Props {
    senderEmail: string;
    message: string;
};

const ContactFormEmail = ({
    message,
    senderEmail,
}: Props) => {
    return (
        <Html>
        <Head />
        <Preview>New message from portfolio site</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                            You received the following message from the portfolio contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
        </Html>
    );
}

export default ContactFormEmail;