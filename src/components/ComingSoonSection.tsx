import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, BookOpen, Tag, Building } from "lucide-react";
// Using uploaded images as base64 or fallback to placeholder
const bookCover = "/lovable-uploads/book-stack.png";
const blurBg = "/lovable-uploads/e07e3a5f-cdba-4927-8ca5-8de09c31d121.png";

// Array of retailer data
const retailers = [
  { 
    name: "Amazon", 
    url: "https://www.amazon.com/exec/obidos/ASIN/1998672387", 
    logoSrc: "/lovable-uploads/amazon.svg" 
  },
  { 
    name: "Barnes & Noble", 
    url: "https://www.barnesandnoble.com/w/?ean=9781998672387", 
    logoSrc: "/lovable-uploads/barnesandnoble.svg" 
  },
  { 
    name: "Books-A-Million", 
    url: "https://www.booksamillion.com/p/9781998672387", 
    logoSrc: "/lovable-uploads/BAM.svg"
  },
  { 
    name: "Bookshop.org", 
    url: "https://bookshop.org/a/1688/9781998672387", 
    logoSrc: "/lovable-uploads/bookshop.svg" 
  },
  { 
    name: "Hudson Booksellers", 
    url: "httpss://www.hudsonbooksellers.com/book/9781998672387", 
    logoSrc: "/lovable-uploads/hudson.svg" 
  },
  { 
    name: "Target", 
    url: "httpss://www.target.com/s?searchTerm=9781998672387", 
    logoSrc: "/lovable-uploads/target.svg" 
  },
  { 
    name: "Walmart", 
    url: "httpss://www.walmart.com/search?query=9781998672387", 
    logoSrc: "/lovable-uploads/walmart.svg" 
  },
];


const ComingSoonSection = () => {
  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url(${blurBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            Available for Pre-order Now!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Book Cover & Pre-order */}
          <div className="flex flex-col items-center">
            
            {/* Book Cover */}
            <div className="relative">
              <div className="w-96 h-auto rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src={bookCover}
                  alt="Objects in Lakes - A Novel by Rachael Ramas"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 blur-xl -z-10"></div>
            </div>

            {/* NEW: Pre-order Section */}
            <div className="mt-8 w-full max-w-lg text-left">
              <h3 className="text-2xl font-bold text-slate-50 mb-6">
                Pre-order Available Now
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {retailers.map((retailer) => (
                  <a
                    key={retailer.name}
                    href={retailer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pre-order from ${retailer.name}`}
                    className="bg-card/90 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg flex justify-center items-center transition-transform hover:scale-105"
                  >
                    <img
                      src={retailer.logoSrc}
                      alt={`${retailer.name} logo`}
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Book Description, Details, & Email Form */}
          <div className="space-y-8">
            <div className="space-y-6 text-xl leading-relaxed text-white">
              <p>
                Seven years after her daughter's tragic drowning during a Fourth of July celebration in Duck Lake, Olive Wentworth is still haunted by that night. While her husband Richie, a renowned oncologist, has buried himself in his career, Olive numbs her pain with pills and unanswered questions.
              </p>
              
              <p>
                As another Fourth of July nears, a neighbor's body is discovered in the same lake—forcing Olive to confront the possibility that her daughter's death wasn't an accident. Her search for the truth threatens to expose sinister secrets lurking beneath Duck Lake's wholesome facade and could destroy everything she's known. 
              </p>
              
              <p>
                In a town where "Midwestern nice" conceals deadly sins, Olive must ask the unthinkable: who would harm a child? Because in Duck Lake, the truth never stays buried. Secrets always have a way of resurfacing.
              </p>
            </div>

            {/* UPDATED: Book Details (Condensed, no bg/border, white text) */}
            <div className="p-0">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {/* Release Date */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">Release</span>
                  </div>
                  <p className="text-lg font-semibold text-white">June 2nd, 2026</p>
                </div>
                
                {/* Page Length */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-white">Length</span>
                  </div>
                  <p className="text-lg font-semibold text-white">352 pages</p>
                </div>
                
                {/* Genre */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-white">Genre</span>
                  </div>
                  <p className="text-lg font-semibold text-white">Psychological Thriller</p>
</div>
                
                {/* Publisher */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-white">Publisher</span>
                  </div>
                  <p className="text-lg font-semibold text-white">Simon & Schuster</p>
                </div>
              </div>
            </div>
            
            {/* Email Signup Form */}
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join the Newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
                Be among the first to read "Objects in Lakes" and get exclusive behind-the-scenes content about the writing process.
              </p>
              
              <form 
                action="https://app.kit.com/forms/8825589/subscriptions"
                method="post"
                data-sv-form="8825589"
                data-uid="9a91cf5bfc"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"httpss://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                className="space-y-4"
              >
                <ul
                  className="formkit-alert hidden p-3 rounded-md border text-sm text-center"
                  data-element="errors"
                  data-group="alert"
                ></ul>
                <Input
                  type="email"
                  name="email_address"
                  placeholder="Enter your email for early access"
                  required
                  className="w-full text-lg"
                />
                <Button 
                  type="submit" 
                  data-element="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;