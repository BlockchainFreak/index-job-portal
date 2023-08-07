import { createClient } from "contentful";
import { IJobSkeleton } from "@/types/content";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { Badge, Container, Divider } from "@mantine/core";
import { richTextToHtml } from "@/utils"

export default function JobPostPage({ fields, publishedDate }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main>
            <Container className="bg-zinc-800 rounded-xl my-12 px-8 py-12">
                <h1 className="text-4xl font-bold">{fields.title}</h1>
                <Badge color="pink" variant="light" className="mt-2">{fields.mode}</Badge>
                <p className="text-gray-400 text-sm mt-2">Published on {new Date(publishedDate).toLocaleDateString()}</p>
                <Divider/>
                <div dangerouslySetInnerHTML={{ "__html": richTextToHtml(fields.description) }} />
            </Container>
        </main>
    )
}


export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entry = await client.withoutUnresolvableLinks.getEntry<IJobSkeleton>(params?.slug as string);

    return {
        props: {
            publishedDate: entry.sys.createdAt,
            fields: entry.fields
        }
    }
}

export async function getStaticPaths() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const entries = await client.getEntries<IJobSkeleton>({ content_type: 'job' });
    const paths = entries.items.map((item) => `/jobs/${item.sys.id}`);

    return { paths, fallback: false };
}