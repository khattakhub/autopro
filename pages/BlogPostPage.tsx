
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
                <Link to="/blog" className="mt-4 inline-block text-primary dark:text-accent hover:underline">
                    &larr; Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <article className="max-w-4xl mx-auto bg-white dark:bg-dark-card p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl">
                <div className="mb-8">
                    <Link to="/blog" className="text-primary dark:text-accent hover:underline text-sm font-semibold">
                        &larr; Back to Blog
                    </Link>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary dark:text-white mb-4 leading-tight">{post.title}</h1>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                    <p>By {post.author}</p>
                    <span className="mx-2">&bull;</span>
                    <p>{post.date}</p>
                </div>
                <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8" />
                
                <div 
                    className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </article>
        </div>
    );
};

export default BlogPostPage;
