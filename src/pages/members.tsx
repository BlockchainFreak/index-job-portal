import { Container, Grid, Title } from '@mantine/core'
import MemberCard from "@/components/MemberCard";
import { createClient } from 'contentful';
import { IMemberSkeleton } from '@/types/content';
import { InferGetStaticPropsType } from 'next';

const dummy = Array(5).fill({
    name: 'John Doe',
    position: 'Vice President',
    batch: '23-24',
})

export default function MembersPage({ ec, directorate }: InferGetStaticPropsType<typeof getStaticProps>) {

    // const _ec = [...dummy, ...ec]
    // const _directorate = [...dummy, ...directorate]

    return (
        <main>
            <Container size="lg" className='flex flex-col gap-12'>
                <section className='py-8 flex flex-col gap-8 rounded-3xl'>
                    <header>
                        <h1 className='text-emerald-700 flex justify-center'>
                            Meet Our Team
                        </h1>
                        <h2 className='flex justify-center'>
                            Executive Council
                        </h2>
                    </header>
                    <Grid>
                        {ec.map((item, i) => (<Grid.Col key={i} xs={12} md={6} lg={4} className='flex justify-center'>
                            <MemberCard
                                name={item.name}
                                position={item.position}
                                batch={item.batch}
                                image={item.image?.fields?.file?.url}
                            />
                        </Grid.Col>))}
                    </Grid>
                </section>
                <section className="py-8 flex flex-col gap-8 rounded-3xl">
                    <header>
                        <Title order={2} align='center' className='text-emerald-500'>
                            Directorate
                        </Title>
                    </header>
                    <Grid>
                        {directorate.map((item, i) => (<Grid.Col key={i} xs={12} sm={6} md={4} lg={3} className='flex justify-center'>
                            <MemberCard
                                name={item.name}
                                position={item.position}
                                batch={item.batch}
                                image={item.image?.fields?.file?.url}
                            />
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

    const ec = fields
        .sort((a, b) => a.order - b.order)
        .filter(entry => entry.level === 'Executive Council')
    const directorate = fields
        .sort((a, b) => a.order - b.order)
        .filter(entry => entry.level === 'Director' || entry.level === 'AD')

    return {
        props: {
            ec, directorate
        },
        revalidate: 1
    }
}