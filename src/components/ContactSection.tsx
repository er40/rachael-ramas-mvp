import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Film, Newspaper } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faGoodreads, faImdb } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  const representationInfo = [
    {
      category: "Literary Agent",
      name: "Sarah Mitchell",
      agency: "Mitchell Literary Agency",
      email: "sarah@mitchellliterary.com",
      phone: "(555) 123-4567",
      icon: BookOpen
    },
    {
      category: "Film & TV Rights",
      name: "David Chen",
      agency: "Creative Artists Agency",
      email: "dchen@caa.com",
      phone: "(555) 234-5678",
      icon: Film
    },
    {
      category: "Publicity & Media Inquiries",
      name: "Jane Doe",
      agency: "Publicity Solutions Inc.",
      email: "jane@publicitysolutions.com",
      phone: "(555) 345-6789",
      icon: Newspaper
    }
  ];

  return (
    <section id="contact" className="py-20 bg-soft-pink/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with me through various channels
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <a
              href="https://www.instagram.com/rachaelramasauthor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-soft-pink hover:bg-soft-pink/80 transition-colors"
              aria-label="Follow on Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-soft-pink-foreground" />
            </a>
            <a
              href="https://www.tiktok.com/@rachaelramasauthor"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-soft-pink hover:bg-soft-pink/80 transition-colors"
              aria-label="Follow on TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 text-soft-pink-foreground" />
            </a>
            <a
              href="https://www.goodreads.com/user/show/174127377-rachael-ramas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-soft-pink hover:bg-soft-pink/80 transition-colors"
              aria-label="Follow on Goodreads"
            >
              <FontAwesomeIcon icon={faGoodreads} className="w-5 h-5 text-soft-pink-foreground" />
            </a>
            <a
              href="https://www.imdb.com/name/nm14656797/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-soft-pink hover:bg-soft-pink/80 transition-colors"
              aria-label="View on IMDb"
            >
              <FontAwesomeIcon icon={faImdb} className="w-5 h-5 text-soft-pink-foreground" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/success"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Do not fill this out if you're human: 
                  <input name="bot-field" />
                </label>
              </div>
              
              {/* Message container for Netlify feedback */}
              <div 
                id="form-messages" 
                className="hidden p-3 rounded-md border text-sm text-center"
              ></div>
              
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full resize-none min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right Column - Professional Representation */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Professional Representation
            </h3>
            
            <div className="space-y-6">
              {representationInfo.map((rep, index) => {
                const IconComponent = rep.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {rep.category}
                        </h4>
                        <p className="text-foreground text-lg">
                          {rep.name}  <span className="text-muted-foreground text-lg mb-3"> • {rep.agency}</span>
                        </p>
                       
                        
                        <div className="space-y-1">
                          <a
                            href={`mailto:${rep.email}`}
                            className="block text-primary hover:text-primary/80 transition-colors"
                          >
                            {rep.email}
                          </a>
                          <a
                            href={`tel:${rep.phone}`}
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {rep.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;