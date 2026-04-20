import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Target, 
  Share2, 
  FileText, 
  MessageCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Camera,
  Play
} from 'lucide-react';
import logo from './assets/v.png';
import { blogPosts } from './blogData';

// Social Media SVGs for brand icons removed from Lucide
const SocialIcons = {
  Instagram: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  Facebook: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  ),
  Linkedin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Youtube: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
  )
};

const images = {
  hero: '/hero_marketing_team_1776364881187.png',
  webDev: '/web_development_service_1776365236415.png',
  seo: '/seo_service_image_1776365378251.png',
  ads: '/ads_service_image_1776365525954.png',
  social: '/social_media_service_1776365956501.png',
  content: '/content_brand_service_1776366221729.png',
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="Vronestudio Logo" style={{ height: '70px', width: 'auto' }} />
        </Link>
        
        <div className="nav-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/strategy" className={location.pathname === '/strategy' ? 'active' : ''}>Strategy</Link>
          <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 25px' }}>Free Consultation</Link>
        </div>
      </nav>
    </header>
  );
};

// Content components remain the same but wrapped in Page layouts if needed
const PageWrapper = ({ children, title, subtitle, isLanding }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }} 
    style={{ paddingTop: isLanding ? '40px' : '120px', minHeight: isLanding ? 'auto' : '80vh' }}
  >
    {(title || subtitle) && (
      <div className="container" style={{ textAlign: 'center', marginBottom: isLanding ? '40px' : '60px' }}>
        {title && <h2 style={{ fontSize: isLanding ? '3rem' : '3.5rem', marginBottom: '15px' }}>{title}</h2>}
        {subtitle && <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>{subtitle}</p>}
      </div>
    )}
    {children}
  </motion.div>
);

const Hero = () => (
  <section id="home" className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#020617' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <img src={images.hero} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'blur(3px)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 20%, rgba(18, 85, 191, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%)' }}></div>
    </div>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gradient" style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Hyderabad's Leading Digital Marketing Agency
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '20px 0', lineHeight: '1.1' }}>
          Grow Your Business with <span className="text-gradient">Data-Driven</span> Marketing
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
          We drive traffic, leads, and revenue through futuristic strategies tailored for business growth in Hyderabad.
        </p>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/contact" className="btn-primary">Get Free Consultation</Link>
          <Link to="/services" className="btn-secondary">View Services</Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ 
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          x: { duration: 0.8 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(75, 205, 248, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
        <img src={images.hero} alt="Digital Marketing Team" style={{ width: '100%', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }} />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="glass" style={{ margin: '40px 0 40px 2%', padding: '100px 0 100px 2%', scrollMarginTop: '100px', overflow: 'hidden' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '40px', alignItems: 'center' }}>
      <div>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Helping Brands <span className="text-gradient">Scale</span> Online</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.15rem', marginBottom: '40px', lineHeight: '1.8', maxWidth: '1000px' }}>
          Vronestudio is a growing digital marketing agency in Hyderabad focused on helping brands scale online. We combine creativity, strategy, and data to deliver impactful campaigns that drive real growth.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px' }}>
          {[
            '🌱 Growing Brands Daily',
            '🚀 Scaling Businesses Online',
            '🤝 Building Long-Term Partnerships',
            '📈 Focused on Real Results'
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.07)', fontSize: '1rem', fontWeight: '500' }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ display: 'flex', gap: '30px', overflow: 'hidden' }}>
          <motion.div 
            animate={{ x: [-800, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '30px' }}
          >
            {[images.webDev, images.seo, images.ads, images.social, images.webDev, images.seo].map((img, i) => (
              <img key={i} src={img} alt="Marketing Visual" style={{ width: '450px', height: '350px', objectFit: 'cover', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const servicesList = [
    { title: 'Website Development', desc: 'We build fast, responsive, and visually stunning websites designed to convert.', img: images.webDev, icon: <Globe size={32} /> },
    { title: 'SEO Services', desc: 'Improve your Google rankings and drive organic traffic with our proven SEO strategies.', img: images.seo, icon: <Search size={32} /> },
    { title: 'Google & Meta Ads', desc: 'Maximize ROI with highly targeted ad campaigns on Google and social media.', img: images.ads, icon: <Target size={32} /> },
    { title: 'Social Media Marketing', desc: 'Engage your audience and grow your brand with creative social media campaigns.', img: images.social, icon: <Share2 size={32} /> },
    { title: 'Content & Brand Marketing', desc: 'We craft compelling content and brand strategies that build trust and authority.', img: images.content, icon: <FileText size={32} /> },
    { title: 'WhatsApp & Email Marketing', desc: 'Boost conversions with personalized messaging campaigns effectively.', img: images.webDev, icon: <MessageCircle size={32} /> }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="services-grid">
          {servicesList.map((service, i) => (
            <motion.div key={i} className="service-card glass" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <img src={service.img} alt={service.title} />
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Strategy = () => (
  <section id="strategy" style={{ background: 'rgba(18, 85, 191, 0.03)', padding: '80px 0' }}>
    <div className="container">
      <div className="timeline">
        {['Research & Analysis', 'Strategy Planning', 'Campaign Execution', 'Optimization', 'Growth Scaling'].map((title, i) => (
          <motion.div key={i} className="timeline-item" initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="timeline-dot"></div>
            <div className="glass" style={{ padding: '30px' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>0{i+1}. {title}</h3>
              <p style={{ color: 'var(--text-dim)' }}>Implementing the highest standards of marketing execution for your growth.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Blog = () => {
  const blogs = [
    { id: 'instagram-strategy', title: 'Instagram Marketing Strategy 2026 (Grow Fast Organically)', desc: 'Master the art of organic growth and engagement on Instagram.', img: images.social },
    { id: 'lead-generation', title: 'How to Generate 100+ Leads Per Month Using Digital Marketing', desc: 'A proven strategy for scaling your business lead generation.', img: images.ads },
    { id: 'marketing-trends', title: 'Top Digital Marketing Trends in Hyderabad 2026', desc: 'Stay ahead with AI, hyperlocal SEO, and short-form video content.', img: images.webDev },
    { id: 'seo-tools-adda', title: 'SEO Tools Adda: Affordable Access to Premium SEO Tools', desc: 'A complete guide to accessing premium SEO tools affordably.', img: images.seo },
    { id: 'hospital-marketing', title: 'Healthcare Marketing: Rank Your Hospital #1 in Hyderabad', desc: 'A guide to affordable digital marketing for hospitals using low-competition SEO.', img: images.hero },
    { id: 'onpage-vs-offpage', title: 'On-Page vs Off-Page SEO: What Matters More in 2026?', desc: 'Discover the key differences and strategies between On-Page and Off-Page SEO.', img: images.seo },
  ];

  return (
    <section id="blog">
      <div className="container">
        <div className="blogs-grid">
          {blogs.map((blog, i) => (
            <motion.div key={i} className="blog-card" whileHover={{ y: -10 }}>
              <Link to={`/blog/${blog.id}`}>
                <div className="blog-image-wrapper">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>{blog.title}</h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px' }}>{blog.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Read Full Story</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" style={{ padding: '80px 0' }}>
    <div className="container">
      <div className="contact-container">
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Let's <span className="text-gradient">Connect</span></h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '40px' }}>Ready to scale your business? Get in touch with us today.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="glass" style={{ padding: '15px', color: 'var(--secondary)' }}><Phone size={24} /></div>
              <div><p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Phone</p><p style={{ fontWeight: 600 }}>+91 98765 43210</p></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="glass" style={{ padding: '15px', color: 'var(--secondary)' }}><Mail size={24} /></div>
              <div><p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Email</p><p style={{ fontWeight: 600 }}>hello@vronestudio.com</p></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="glass" style={{ padding: '15px', color: 'var(--secondary)' }}><MapPin size={24} /></div>
              <div><p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Location</p><p style={{ fontWeight: 600 }}>Hitech City, Hyderabad, India</p></div>
            </div>
          </div>
        </div>
        <form className="glass" style={{ padding: '40px' }}>
          <div className="form-group"><input type="text" placeholder="Full Name" required /></div>
          <div className="form-group"><input type="email" placeholder="Email Address" required /></div>
          <div className="form-group"><input type="tel" placeholder="Phone Number" /></div>
          <div className="form-group"><textarea placeholder="Tell us about your project" rows="4" required></textarea></div>
          <button className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>Post not found.</div>;
  }

  return (
    <div className="blog-post-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="blog-post-header">
          <Link to="/blog" style={{ color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Back to All Blogs
          </Link>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '20px' }}>{post.title}</h1>
          <p style={{ color: 'var(--text-dim)' }}>Published on {post.date}</p>
        </div>
        <img src={post.img.startsWith('/') ? post.img : `/${post.img}`} alt={post.title} className="blog-post-image" />
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

const Footer = () => (
  <footer style={{ padding: '60px 5% 40px', background: '#020617' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
      <div>
        <div style={{ marginBottom: '20px' }}><img src={logo} alt="Vronestudio Logo" style={{ height: '40px', width: 'auto' }} /></div>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Growing businesses in Hyderabad through data-driven digital marketing excellence.</p>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 style={{ marginBottom: '20px' }}>Social Media</h4>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" className="glass" style={{ padding: '10px' }}><SocialIcons.Instagram /></a>
          <a href="#" className="glass" style={{ padding: '10px' }}><SocialIcons.Facebook /></a>
          <a href="#" className="glass" style={{ padding: '10px' }}><SocialIcons.Linkedin /></a>
          <a href="#" className="glass" style={{ padding: '10px' }}><SocialIcons.Youtube /></a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Hero />
                <About />
                <PageWrapper isLanding title="Our Services That Drive Results" subtitle="Tailored marketing solutions for businesses in Hyderabad.">
                  <Services />
                </PageWrapper>
                <PageWrapper isLanding title="Our Growth Strategy" subtitle="A step-by-step roadmap to scaling your business.">
                  <Strategy />
                </PageWrapper>
                <PageWrapper isLanding title="Latest Insights" subtitle="Stay updated with the latest in digital marketing.">
                  <Blog />
                </PageWrapper>
                <Contact />
              </motion.div>
            } />
            <Route path="/about" element={
              <PageWrapper title="About Vronestudio" subtitle="Learn about our mission to scale brands in Hyderabad.">
                <About />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper title="Our Services That Drive Results" subtitle="Tailored marketing solutions for businesses in Hyderabad.">
                <Services />
              </PageWrapper>
            } />
            <Route path="/strategy" element={
              <PageWrapper title="Our Growth Strategy" subtitle="A step-by-step roadmap to scaling your business.">
                <Strategy />
              </PageWrapper>
            } />
            <Route path="/blog" element={
              <PageWrapper title="Latest Insights" subtitle="Stay updated with the latest in digital marketing.">
                <Blog />
              </PageWrapper>
            } />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
        <a href="https://wa.me/919876543210" className="whatsapp-float animate-float"><MessageCircle size={32} /></a>
      </div>
    </Router>
  );
}

export default App;
