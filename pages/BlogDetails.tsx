import React, { useEffect } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Helper to process newline characters in content
  const formatContent = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('**')) {
         // Simple bold handling for lines starting with bold
         return <p key={index} className="text-gray-300 leading-relaxed mb-4"><strong>{line.replace(/\*\*/g, '')}</strong></p>;
      }
      if (line.trim().startsWith('* ')) {
        return <li key={index} className="ml-6 text-gray-300 mb-2 list-disc">{line.replace('* ', '')}</li>;
      }
      // Basic paragraph
      return line.trim() ? <p key={index} className="text-gray-300 leading-relaxed mb-4">{line}</p> : <br key={index} />;
    });
  };

  return (
    <div className="py-12 md:py-24">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 container mx-auto">
          <NavLink to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </NavLink>
          <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl leading-tight shadow-black drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        
        {/* Main Content */}
        <article className="max-w-3xl">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-white/10 pb-8">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Raj Verma</span>
            <span className="flex items-center gap-2 ml-auto hover:text-white cursor-pointer transition-colors"><Share2 className="w-4 h-4" /> Share</span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300">
             {formatContent(post.content || post.excerpt)}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-card border border-white/5 rounded-2xl p-6 sticky top-28">
            <h3 className="text-lg font-bold text-white mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Technology', 'Coding', 'Career', 'Future', 'AI', 'Web3'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-xs text-gray-400 cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Get the latest insights delivered to your inbox.</p>
              <div className="space-y-2">
                <input type="email" placeholder="Your email" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm text-white focus:border-primary focus:outline-none" />
                <button className="w-full py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogDetails;