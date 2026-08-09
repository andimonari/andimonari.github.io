import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'Andi Monari — Writing',
    description: 'Essays on building with AI, product thinking, and learning in public.',
    site: context.site || 'https://andimonari.github.io',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.subtitle || '',
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
