import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-pink/30">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-card p-12 rounded-2xl shadow-lg text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Message Sent Successfully!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for reaching out. Your message has been received and someone will get back to you soon.
          </p>
          
          <Button 
            onClick={goHome}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;