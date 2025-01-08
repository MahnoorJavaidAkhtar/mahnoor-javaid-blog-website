import { client } from "@/sanity/lib/client";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";

interface Blog {
  title: string;
  slug: { current: string };
  authorName: string;
  authorImage: {
    asset: { url: string };
  };
  publishDate: string;
  mainImage: {
    asset: { url: string };
  };
  content: Array<{ _type: string; children?: Array<{ text: string }> }>;
}

interface BlogDetailsProps {
  params: { slug: string };
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const { slug } = params;

  const blog: Blog | null = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      slug,
      authorName,
      authorImage {
        asset-> { url }
      },
      publishDate,
      mainImage {
        asset-> { url }
      },
      content
    }`,
    { slug }
  );

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          {blog.mainImage?.asset?.url && (
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded"
            />
          )}
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            By {blog.authorName} on {new Date(blog.publishDate).toDateString()}
          </p>
          {blog.authorImage?.asset?.url && (
            <Image
              src={blog.authorImage.asset.url}
              alt={blog.authorName}
              width={50}
              height={50}
              className="rounded-full mb-4"
            />
          )}
          <div>
            {blog.content?.map((block, index) =>
              block.children?.map((child, idx) => (
                <p key={`${index}-${idx}`}>{child.text}</p>
              ))
            )}
          </div>
        </article>
        <CommentSection />
      </main>
    </div>
  );
}
