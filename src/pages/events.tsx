import { createClient } from 'contentful';
import { IEventSkeleton } from '@/types/content';
import { InferGetStaticPropsType } from 'next';
import { Container, Grid, Table, Title } from '@mantine/core';
import EventCard from '@/components/EventCard';
import { useRouter } from 'next/navigation';

export default function EventsPage({ events }: InferGetStaticPropsType<typeof getStaticProps>) {



    return (
        <div className='rounded-xl bg-opacity-50 bg-secondary my-16 mx-auto w-5/6 sm:w-2/3 px-8 py-12'>
            <div className="text-6xl text-white font-bold mb-16 flex justify-center">Our Events</div>
            {/* <hr className="border-solid border-white border-t border-b-0 mb-16" /> */}
            <div className="flex flex-col gap-12">
                {
                    events.map((event, index) => (
                        <EventCard key={event.slug} {...event.fields} slug={event.slug} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.withoutUnresolvableLinks.getEntries<IEventSkeleton>({ content_type: 'event' });

    const events = entries.items.map(entry => ({
        fields: {
            ...entry.fields,
            coverURL: entry.fields.cover?.fields.file?.url || "images.ctfassets.net/example.png"
        },
        slug: entry.sys.id,
        publishedDate: entry.sys.createdAt
    }));

    return {
        props: {
            events
        },
        revalidate: 1
    }
}