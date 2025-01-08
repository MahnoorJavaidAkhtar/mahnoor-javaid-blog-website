// components/Blogs.tsx
import Link from 'next/link';
import { fetchBlogs } from '../sanity/lib/sanity';

export default async function Blogs() {
  const blogs = await fetchBlogs();

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Blogs</h2>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog._id} className="mb-4">
            <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p>by - {blog.author}</p>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="text-blue-500">Read more...</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
