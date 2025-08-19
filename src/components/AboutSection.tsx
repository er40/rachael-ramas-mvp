


const AboutSection = () => {
  return (
    <section className="py-20 bg-soft-pink/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              About Rachael
            </h2>
            
            <div className="space-y-6 text-xl leading-relaxed text-foreground/80">
              <p>
                Hailing from Michigan, Rachael Ramas is a proud graduate of Michigan State University with degrees in Advertising and Journalism. She now resides in sunny Boca Raton, Florida, with her husband and two children. Co-owning a law firm with her husband, she draws daily inspiration from the legal world—a rich source of compelling stories.
              </p>
              
              <p>
                Her debut thriller, <span class="italic">Objects in Lakes</span>, is slated for release in May 2026 through Simon & Schuster, followed by her second novel, <span class="italic">Meanwhile, in Florida</span>, set to be released in April 2027.
              </p>
              
              <p>
                Film and screenwriting have also been long-standing passions of Rachael's. In addition to her work as a novelist, she is a film producer, bringing compelling stories to life on screen.
              </p>
              
              <p>
                As a freelance writer, her work has appeared on well-known parenting platforms including Scary Mommy, Her View from Home, and Motherly.
              </p>
              
              <p>
                A member of both Mystery Writers of America and International Thriller Writers, Ramas channels her experiences living with a rare autoimmune disease that has caused partial hearing loss into her fiction. Through her work, she advocates for greater representation and inclusivity of characters with disabilities in literature and beyond.
              </p>
            </div>
          </div>

          {/* Right Column - Author Portrait */}
          <div className="flex justify-center lg:justify-start">

            <div className="relative w-full max-w-lg">
              {/* Background decorative circles */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-secondary/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/3 -left-16 w-20 h-20 bg-accent/20 rounded-full blur-lg"></div>
              
              {/* Floating geometric shapes */}
              <div className="absolute -top-4 right-8 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute top-16 -left-6 w-4 h-4 bg-secondary/40 rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 -right-8 w-8 h-8 border-2 border-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 left-4 w-3 h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Decorative lines/strokes */}
              <div className="absolute top-12 -right-4 w-16 h-0.5 bg-gradient-to-r from-primary/30 to-transparent rotate-12"></div>
              <div className="absolute bottom-32 -left-8 w-20 h-0.5 bg-gradient-to-r from-transparent to-secondary/40 -rotate-12"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-0.5 bg-gradient-to-r from-accent/40 to-transparent rotate-45"></div>
              
              {/* Main image container with enhanced styling */}
              <div className=" h-[28rem] rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
               
                <img
  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Rachael Ramas - Professional portrait"
  className="w-full h-full object-cover"
/>
               
              </div>
              
              {/* Enhanced decorative accents */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-accent/40 to-primary/30 rounded-full opacity-60 blur-sm"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent/50 rounded-full"></div>
              
              {/* Corner decorative elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-secondary/40 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-accent/40 rounded-bl-lg"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;