import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Posts({posts}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex justify-between items-center'>
                                <h1 className='text-2xl font-bold' >Blog Posts</h1>
                                <Link href="/posts/create" className='bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600'>Create Post</Link>
                            </div>
                            <br />
                            <div className='overflow-x-auto'>
                                <table className='w-full table-auto shadow-lg bg-white dark:bg-neutral-800 rounded-lg'>
                                     <thead>
                                        <tr className='bg-neutral-500 dark:bg-neutral-700'>
                                            <th className='px-4 py-2'>ID</th>
                                            <th className='px-4 py-2'>Title</th>
                                            <th className='px-4 py-2'>Content</th>
                                            <th className='px-4 py-2'>Created At</th>
                                            <th className='px-4 py-2'>Update At</th>
                                            <th className='px-4 py-2'>Actions</th>
                                        </tr>
                                     </thead>
                                     <tbody>
                                       { posts.map((post) => (
                                        <tr key={post.id} className='border-b hover:bg-gray-100 dark:hover:bg-neutral-600'>
                                            <td className='px-4 py-2 text-center'>{post.id}</td>
                                            <td className='px-4 py-2'>{post.title}</td>
                                            <td className='px-4 py-2'>{post.content}</td>
                                            <td className='px-4 py-2'>{new Date(post.created_at).toLocaleDateString()}</td>
                                            <td className='px-4 py-2'>{new Date(post.updated_at).toLocaleDateString()}</td>
                                            <td className='px-4 py-2'>
                                                <Link href={`/posts/${post.id}/edit`} className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2'>Edit</Link>
                                                <Link href={`/posts/${post.id}`} method="delete" as="button" 
                                                onClick={(e) => { 
                                               
                                                    if(!confirm('Are you sure you want to delete this post?'))
                                                    {
                                                       e.preventDefault(); 
                                                    } 
                                        }
                                    }
                                    href={`/posts/${post.id}`}
                                                className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'>Delete</Link>
                                            </td>
                                        </tr>
                                       ))}
                                     </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
