<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class PostController extends Controller
{
    //post with user// 
    public function index()
    {
        // Logic to list all posts
       return Inertia::render('Posts/Index', [
            'posts' => Post::with('user')->get(),
       ]);
    }

    public function create()
    {
        // Logic to show form to create a new post
        return Inertia::render('Posts/Create');
    }

    public function store(Request $request)
    {
        // Logic to store a new post
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post = Post::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'user_id' => \Illuminate\Support\Facades\Auth::user()->id,
        ]);

        return redirect()->route('posts.index');
    }
    public function edit(Post $post)
    {
        // Logic to show form to edit an existing post
        return Inertia::render('Posts/Edit', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, Post $post)
    {
        // Logic to update an existing post
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post->update($validated);

        return redirect()->route('posts.index');
    }

    public function destroy(Post $post)
    {
        // Logic to delete a post
        $post->delete();

        return redirect()->route('posts.index');
    }
}
