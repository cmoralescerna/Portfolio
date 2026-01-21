import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl med:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I will soon be a new grad and am very interested in finding a Software Engineering
                    position. Do my skills align with what you are looking for? Please contact me!
                </p>
                <div className="grid grid-cols-1gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a 
                                        href="mailto:cmoralescerna22@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        cmoralescerna22@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a 
                                        href="tel:+18483734612" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (848) 373-4612
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaLinkedin  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Linkedin </h4>
                                    <a 
                                        href="https://www.linkedin.com/in/catherinemoralesc/" 
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        www.linkedin.com/in/catherinemoralesc
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};