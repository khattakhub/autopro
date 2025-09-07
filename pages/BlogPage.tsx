
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col">
        <Link to={`/blog/${post.slug}`}>
            <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
        </Link>
        <div className="p-6 flex flex-col flex-grow">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>{post.date}</span> &bull; <span>{post.author}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                    {post.title}
                </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="font-semibold text-primary dark:text-accent hover:underline mt-auto self-start">
                Read More &rarr;
            </Link>
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-secondary dark:text-white">The AutoPro Blog</h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Your source for automotive news, maintenance tips, and industry insights.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
