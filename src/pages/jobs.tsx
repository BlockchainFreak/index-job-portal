import { createClient } from 'contentful';
import { IJobSkeleton } from '@/types/content';
import { InferGetStaticPropsType } from 'next';
import { Container, Grid, Title } from '@mantine/core';
import JobListings from '@/components/JobListing';
import { useRouter } from 'next/navigation';

export default function JobsPage({ jobs }: InferGetStaticPropsType<typeof getStaticProps>) {

    const router = useRouter();

    return (
        <main>
            <Container className='rounded-xl bg-zinc-900 my-8 px-8 py-12'>
            <Title order={1} mb={24}>Jobs</Title>
                <Grid>
                    {
                        jobs.map((job, index) => (
                            <Grid.Col key={index} xs={12} md={6} lg={4} onClick={() => router.push(`/jobs/${job.slug}`)}>
                                <JobListings {...job.fields} />
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

    const entries = await client.withoutUnresolvableLinks.getEntries<IJobSkeleton>({ content_type: 'job' });

    const jobs = entries.items.map(entry => ({
        fields: entry.fields,
        slug: entry.sys.id,
        publishedDate: entry.sys.createdAt
    }));

    return {
        props: {
            jobs
        },
        revalidate: 1
    }
}