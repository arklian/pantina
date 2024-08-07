package org.patinanetwork.patinawebsite.blogs.repo;

import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

/**
 * Implementation of BlogsRepo backed by PostgreSQL
 */
@Component(value = "TestBlogsRepo")
public class TestBlogsRepo implements BlogsRepo {
    HashMap<Integer, Blog> blogs = new HashMap<>();

    public TestBlogsRepo() {
    }

    @Override
    public void addBlog(Blog blog) {
        blogs.put(blog.getId(), blog);
    }


    @Override
    public Blog getBlogById(int id) {
        return blogs.get(id);
    }

    @Override
    public List<Blog> listAllBlogs() {
        return List.copyOf(blogs.values());
    }
}
