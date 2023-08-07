import { Document } from "@contentful/rich-text-types"
import { Badge, Button, Card, Group, Spoiler, Text, Title } from "@mantine/core"

interface JobListingProps {
  title: string;
  mode: string;
  salary: number;
  description: Document;
}

export default function JobListing({ title, mode, salary, description }: JobListingProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Title order={3} weight={700}>{title}</Title>
        <Title order={5} weight={700}>Rs. {salary}</Title>
        <Badge color="pink" variant="light">
          {mode}
        </Badge>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View Details
      </Button>
    </Card>
  )
}