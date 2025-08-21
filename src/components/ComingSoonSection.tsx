import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, BookOpen, Tag, Building } from "lucide-react";
// Using uploaded images as base64 or fallback to placeholder
const bookCover = "/lovable-uploads/book-stack.png";
const blurBg = "/lovable-uploads/e07e3a5f-cdba-4927-8ca5-8de09c31d121.png";

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
            Coming Soon!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Book Cover and Details */}
          <div className="flex flex-col items-center">
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
            
            {/* Book Details - Always below the cover */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Release</span>
                </div>
                <p className="text-lg font-semibold text-foreground">June 2026</p>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-muted-foreground">Length</span>
                </div>
                <p className="text-lg font-semibold text-foreground">~320 pages</p>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">Genre</span>
                </div>
                <p className="text-lg font-semibold text-foreground">Psychological Thriller</p>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Publisher</span>
                </div>
                <p className="text-lg font-semibold text-foreground">Simon & Schuster</p>
              </div>
            </div>
          </div>

          {/* Right Column - Book Description & Email Form */}
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

            {/* Email Signup Form */}
            <div className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join the Newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
                Be among the first to read "Objects in Lakes" and get exclusive behind-the-scenes content about the writing process.
              </p>
              
              <form 
                action="https://app.kit.com/forms/8425589/subscriptions"
                method="post"
                data-sv-form="8425589"
                data-uid="9a91cf5bfc"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
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