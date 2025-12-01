import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';




export default function EditPost({post}) {

    const { data, setData, put, processing, errors, reset } = useForm({
        title: post.title,
        content: post.content,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('posts.update', post.id), {
            onSuccess: () => reset(),
        });
    }

    return  (
<AuthenticatedLayout>
    <Head title='Edit Post' />


    <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">



            <div className='Container ms-auto p-4'>
                <h1 className='text-2xl font-bold mb-4'>Edit Post</h1>
                <Link href='/posts' >
                </Link>
            </div>
            <form onSubmit={submit} method='post'>
            <div className='mb-4'>
                <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Title</label>
                <input type="text" name='title' id='title'
                value={data.title}
                onChange={e => setData('title', e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
                <label htmlFor="content" className='block text-sm font-medium text-gray-700'>Content</label>
                <textarea name='content' id='content'
                value={data.content}
                onChange={e => setData('content', e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
            </div>
            <div>
                <button type='submit' className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700'>
                   {processing ? 'Updating...' : 'Update Post'}
                    </button>
            </div> 

            </form>

            </div>  
                          </div>  
                          </div>  
                          </div>  
</AuthenticatedLayout>
    );
}