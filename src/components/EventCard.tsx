import { Document } from "@contentful/rich-text-types";
import { Badge, Button, Card, Group, Spoiler, Text, Title } from "@mantine/core"

interface EventCardProps {
    title: string;
    location: string;
    time: string;
    description: Document;
}

export default function EventCard({ title, location, time, description }: EventCardProps) {
    console.log(location)
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            {/* <Card.Section></Card.Section> */}
            <Group position="apart" mt="md" mb="xs">
                <Title order={3} weight={700}>{title}</Title>
                {/* <Title order={5} weight={700}>{location}</Title> */}
                <Badge color="pink" variant="light">
                {new Date(time).toDateString()}
                </Badge>
            </Group>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                View Details
            </Button>
        </Card>
    )
}
