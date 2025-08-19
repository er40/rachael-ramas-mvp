import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faGoodreads, faImdb } from '@fortawesome/free-brands-svg-icons';

const IntroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex items-center justify-center px-4 bg-background" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Author Photo */}
          <div className="flex justify-center relative">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/lovable-uploads/rach.png"
                  alt="Rachael Ramas - Author, Producer, and Storyteller"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-accent rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-2">
                Rachael Ramas
              </h1>
              <p className="text-xl lg:text-3xl text-muted-foreground">
                AUTHOR • PRODUCER • STORYTELLER
              </p>
            </div>

            <p className="text-xl leading-relaxed text-foreground/80 max-w-lg mx-auto lg:mx-0">
              Rachael Ramas is a multi-faceted storytelling force whose creative pursuits span novels, screenwriting, and film production. As both a published author and active member of prestigious writing organizations, Ramas continues pushing boundaries in thriller literature while advocating for authentic representation.
            </p>

            <div className="flex flex-col lg:flex-row   items-center lg:items-start gap-6">
              <Button 
                onClick={scrollToContact}
                size="xl"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-xl font-medium"
              >
                Get in Touch
              </Button>

              <div className="flex items-center gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;