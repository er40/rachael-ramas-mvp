import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  date: string;
  site: string;
  url: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "As the Backpacks Get Bigger",
    date: "September 15, 2023",
    site: "Motherly",
    url: "https://www.mother.ly/back-to-school/as-the-backpacks-get-bigger/",
    image: "/lovable-uploads/as-the-backpacks-get-bigger.jpg"
  },
  {
    title: "Daughter, Always Trust Your Intuition",
    date: "August 20, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/daughter-always-trust-your-intuition/",
    image: "/lovable-uploads/daughter-always-trust-your-intuition.webp"
  },
  {
    title: "Dear Moms, Keep Your Table Open",
    date: "July 10, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/dear-moms-keep-your-table-open/",
    image: "/lovable-uploads/dear-moms-keep-your-table-open.webp"
  },
  {
    title: "I'm Halfway Through Raising Little Kids",
    date: "June 25, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/im-halfway-through-raising-little-kids/",
    image: "/lovable-uploads/im-halfway-through-raising-little-kids.webp"
  },
  {
    title: "I Hope This Brother-Sister Bond Lasts a Lifetime",
    date: "May 18, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/i-hope-this-brother-sister-bond-lasts-a-lifetime/",
    image: "/lovable-uploads/i-hope-this-brother-sister-bond-lasts-a-lifetime.webp"
  },
  {
    title: "I'll Never Be Perfect, But I'll Love You With Everything I Am",
    date: "April 12, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/ill-never-be-perfect-but-ill-love-you-with-everything-i-am/",
    image: "/lovable-uploads/ill-never-be-perfect-but-ill-love-you-with-everything-i-am.webp"
  },
  {
    title: "God Made Mothers to Be There for Each Other",
    date: "March 22, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/god-made-mothers-to-be-there-for-each-other/",
    image: "/lovable-uploads/god-made-mothers-to-be-there-for-each-other.webp"
  },
  {
    title: "How Much Your Mother Loved You",
    date: "February 14, 2023",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/how-much-your-mother-loved-you/",
    image: "/lovable-uploads/how-much-your-mother-loved-you.webp"
  },
  {
    title: "The Joy of Giving",
    date: "December 20, 2022",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/the-joy-of-giving/",
    image: "/lovable-uploads/the-joy-of-giving.jpg"
  },
  {
    title: "The Little Drummer Boy This Christmas",
    date: "December 1, 2022",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/the-little-drummer-boy-this-christmas/",
    image: "/lovable-uploads/the-little-drummer-boy-this-christmas.webp"
  },
  {
    title: "Motherhood: Good Mom",
    date: "November 15, 2022",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/motherhood-good-mom/",
    image: "/lovable-uploads/motherhood-good-mom.png"
  },
  {
    title: "Faith: I Had Cheerios with Jesus Today",
    date: "October 28, 2022",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/faith-i-had-cheerios-with-jesus-today/",
    image: "/lovable-uploads/faith-i-had-cheerios-with-jesus-today.jpg"
  },
  {
    title: "Child Not the Baby of Family Anymore",
    date: "September 30, 2022",
    site: "Her View From Home",
    url: "https://herviewfromhome.com/child-not-the-baby-of-family-anymore/",
    image: "/lovable-uploads/child-not-the-baby-of-family-anymore.jpg"
  },
  {
    title: "Kindness: Help a Mom Out",
    date: "August 15, 2022",
    site: "Scary Mommy",
    url: "https://www.scarymommy.com/kindness-help-a-mom-out",
    image: "/lovable-uploads/kindness-help-a-mom-out.jpg"
  },
  {
    title: "Second Child Changed Relationship with Firstborn",
    date: "July 20, 2022",
    site: "Scary Mommy",
    url: "https://www.scarymommy.com/second-child-changed-relationship-with-firstborn",
    image: "/lovable-uploads/second-child-changed-relationship-with-first-born.jpg"
  },
  {
    title: "Be a Good Mom, They Said",
    date: "June 10, 2022",
    site: "Blunt Moms",
    url: "https://bluntmoms.com/be-a-good-mom-they-said/",
    image: "/lovable-uploads/be-a-good-mom-they-said.jpg"
  },
  {
    title: "Are You Okay Mom? How to Be Intentional About Self Care",
    date: "May 25, 2022",
    site: "Blunt Moms",
    url: "https://bluntmoms.com/are-you-okay-mom-how-to-be-intentional-about-self-care/",
    image: "/lovable-uploads/are-you-okay-mom-how-to-be-intentional-about-self-care.jpeg"
  },
  {
    title: "Moms Deserve It All This Year",
    date: "April 18, 2022",
    site: "Blunt Moms",
    url: "https://bluntmoms.com/moms-deserve-it-all-this-year/",
    image: "/lovable-uploads/moms-deserve-it-all-this-year.jpg"
  },
  {
    title: "The Littlest Piggy Bank: It's Truly Better to Give Than Receive",
    date: "March 14, 2022",
    site: "Blunt Moms",
    url: "https://bluntmoms.com/the-littlest-piggy-bank-its-truly-better-to-give-than-receive/",
    image: "/lovable-uploads/the-littlest-piggy-bank-its-truly-better-to-give-than-receive.jpg"
  },
  {
    title: "To the Woman at Costco Who Threatened to Steal My Husband",
    date: "February 20, 2022",
    site: "Blunt Moms",
    url: "https://bluntmoms.com/to-the-woman-at-costco-who-threatened-to-steal-my-husband/",
    image: "/lovable-uploads/to-the-woman-at-costco-who-threatened-to-steal-my-husband.jpg"
  },
  {
    title: "Mom with Autoimmune Diseases Shares How She Took Her Life Back",
    date: "January 15, 2022",
    site: "Love What Matters",
    url: "https://www.lovewhatmatters.com/mom-with-autoimmune-diseases-shares-how-she-took-her-life-back/",
    image: "/lovable-uploads/mom-with-autoimmune-diseases-shares-how-she-took-her-life-back.jpg"
  }
];

const ReflectionsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Reflections
          </h2>
          <p className="text-xl text-muted-foreground">
            Thoughts on motherhood, faith, and life's beautiful moments from various publications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center md:block bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl ml-4 md:ml-0 md:w-full md:h-auto md:aspect-[4/3] md:rounded-t-2xl md:rounded-b-none">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-base font-medium text-secondary">
                  {post.site === "Motherly" && (
                    <img 
                      src="/lovable-uploads/motherly.png" 
                      alt="Motherly logo" 
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {post.site === "Her View From Home" && (
                    <img 
                      src="/lovable-uploads/her-view-from-home.png" 
                      alt="Her View From Home logo" 
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {post.site === "Scary Mommy" && (
                    <img 
                      src="/lovable-uploads/scary-mommy.jpeg" 
                      alt="Scary Mommy logo" 
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {post.site === "Blunt Moms" && (
                    <img 
                      src="/lovable-uploads/blunt-moms.png" 
                      alt="Blunt Moms logo" 
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {post.site === "Love What Matters" && (
                    <img 
                      src="/lovable-uploads/love-what-matters.jpeg" 
                      alt="Love What Matters logo" 
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {post.site}
                </div>
              </div>
            </a>
          ))}
        </div>

        {blogPosts.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg"
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReflectionsSection;