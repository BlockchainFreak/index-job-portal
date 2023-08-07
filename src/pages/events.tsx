import { createClient } from 'contentful';
import { IEventSkeleton } from '@/types/content';
import { InferGetStaticPropsType } from 'next';
import { Container, Grid, Table, Title } from '@mantine/core';
import EventCard from '@/components/EventCard';
import { useRouter } from 'next/navigation';

export default function EventsPage({ events }: InferGetStaticPropsType<typeof getStaticProps>) {

    const router = useRouter();

    return (
        <main>
            <Container className='rounded-xl bg-zinc-900 my-8 px-8 py-12'>
                <Title order={1} mb={24}>Events</Title>
                <Grid>
                    {
                        events.map((event, index) => (
                            <Grid.Col key={index} xs={12} md={6} lg={4} onClick={() => router.push(`/events/${event.slug}`)}>
                                <EventCard {...event.fields} />
                            </Grid.Col>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    )
}

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.withoutUnresolvableLinks.getEntries<IEventSkeleton>({ content_type: 'event' });

    const events = entries.items.map(entry => ({
        fields: entry.fields,
        slug: entry.sys.id,
        publishedDate: entry.sys.createdAt
    }));

    return {
        props: {
            events
        },
    }
}