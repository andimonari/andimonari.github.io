import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export async function getStaticPaths() {
  const posts = await getCollection('writing');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export async function GET({ props }: { props: { post: any } }) {
  const { post } = props;
  const title = post.data.title;
  const subtitle = post.data.subtitle || 'Andi Monari — Builder, AI Products';
  const dateStr = new Date(post.data.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const fontData = await fetch('https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-sans@latest/latin-400-normal.ttf')
    .then((res) => res.arrayBuffer());

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          backgroundColor: '#0b0a09',
          color: '#efe9e0',
          fontFamily: 'IBM Plex Sans',
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: '12px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#ff6a2c',
                    },
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '24px', fontWeight: 'bold', color: '#ff6a2c', letterSpacing: '-0.5px' },
                    children: 'andi.monari',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '16px' },
              children: [
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '18px', color: '#b9b1a4', textTransform: 'uppercase', letterSpacing: '1px' },
                    children: dateStr,
                  },
                },
                {
                  type: 'h1',
                  props: {
                    style: { fontSize: '46px', fontWeight: 'bold', lineHeight: '1.2', color: '#ffffff', margin: 0 },
                    children: title,
                  },
                },
                {
                  type: 'p',
                  props: {
                    style: { fontSize: '22px', color: '#ded7cc', lineHeight: '1.4', margin: 0 },
                    children: subtitle,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' },
              children: [
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '18px', color: '#b9b1a4' },
                    children: 'Building with AI · Cambridge, UK',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '18px', color: '#ff6a2c' },
                    children: 'andimonari.github.io',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'IBM Plex Sans',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const pngBuffer = resvg.render().asPng();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
}
