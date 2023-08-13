import { Container, Grid, Title } from '@mantine/core'
import ECCard from '@/components/ECCard'
import DirectorateCard from '@/components/DirectorateCard'
import { createClient } from 'contentful';
import { IMemberSkeleton } from '@/types/content';
import { InferGetStaticPropsType } from 'next';

const dummy = Array(5).fill({
    name: 'John Doe',
    position: 'Vice President',
    batch: '23-24',
})

export default function MembersPage({ ec, directorate }: InferGetStaticPropsType<typeof getStaticProps>) {

    const _ec = [...dummy, ...ec]
    const _directorate = [...dummy, ...directorate]

    return (
        <main>
            <Container size="lg" className='flex flex-col gap-12'>
                <section className='py-8 flex flex-col gap-8 bg-emerald-200 rounded-3xl'>
                    <header>
                        <Title order={2} align='center' className='text-emerald-700'>
                            Meet Our Team
                        </Title>
                        <Title order={3} align='center' color='black'>
                            Executive Council
                        </Title>
                    </header>
                    <Grid>
                        {_ec.map((item, i) => (<Grid.Col key={i} xs={12} md={6} lg={4} className='flex justify-center'>
                            <ECCard  {...item} />
                        </Grid.Col>))}
                    </Grid>
                </section>
                <section className="py-8 flex flex-col gap-8 bg-emerald-200 rounded-3xl">
                    <header>
                        <Title order={2} align='center' className='text-emerald-500'>
                            Directorate
                        </Title>
                    </header>
                    <Grid>
                        {_directorate.map((item, i) => (<Grid.Col key={i} xs={12} sm={6} md={4} lg={3} className='flex justify-center'>
                            <DirectorateCard {...item} />
                        </Grid.Col>))}
                    </Grid>
                </section>
            </Container>
        </main>
    )
}


export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.withoutUnresolvableLinks.getEntries<IMemberSkeleton>({ content_type: 'member' });

    const fields = entries.items.map(entry => entry.fields)

    const ec = fields.filter(entry => entry.level === 'Executive Council')
    const directorate = fields.filter(entry => entry.level === 'Directorate')

    return {
        props: {
            ec, directorate
        },
    }
}