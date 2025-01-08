
import Header from '@/components/header';
import Banner from '@/components/banner';
import BannerBottom from '@/components/bannerbottom';
import Footer from '@/components/footer';
import CommentSection from '../components/CommentSection';
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define the interface for blog data
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

export default async function Page() {
  // Fetch blogs from Sanity
  const blogs: Blog[] = await client.fetch(
    `*[_type == "blog"] {
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
    }`
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <BannerBottom />

        {/* Display the blogs */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                {blog.mainImage?.asset?.url && (
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="rounded"
                  />
                )}
                <h2 className="text-xl font-semibold my-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  By {blog.authorName} on {new Date(blog.publishDate).toDateString()}
                </p>
                <Link href={`/blog/${blog.slug.current}`} className="text-blue-500 hover:underline">
                  Read More
                </Link>
              
              </div>
            ))}
            <h1 className="text-2xl font-bold text-center">Enjoyed this article?</h1>
            <CommentSection />
          </div>
        </div>
        
        {/* Uncomment if you want to display the comment section */}
        {/* <CommentSection /> */}
        
      </main>
      <Footer />
    </div>
  );
}

