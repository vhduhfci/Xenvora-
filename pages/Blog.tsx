import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Blog: React.FC = () => {
  // Use the first post (AI Agents) as the featured one
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="py-12 md:py-24">
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Tech <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-gray-400">
              Thoughts on technology, design, and the future.
            </p>
          </div>
          
          <div className="relative w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full md:w-80 bg-surface border border-white/10 rounded-full py-3 px-6 pl-12 text-white focus:border-primary focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {['All', 'Web Dev', 'Design', 'AI', 'Automation', 'Business'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-white text-dark border-white' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-6 mb-16">
          <div className="bg-card border border-white/5 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group">
            <div className="h-64 md:h-auto relative overflow-hidden">
               <img 
                src={featuredPost.imageUrl} 
                alt={featuredPost.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Featured</span>
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Raj Verma</span>
              </div>
              <NavLink 
                to={`/blog/${featuredPost.id}`} 
                className="self-start inline-flex items-center gap-2 text-white font-semibold border-b border-primary pb-1 hover:text-primary transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </section>
      )}

      {/* Post List */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <NavLink to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer block">
              <article>
                <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-6 relative border border-white/5">
                   <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/10">
                     {post.category}
                   </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
              </article>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;