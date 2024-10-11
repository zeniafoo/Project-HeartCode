import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import{ Alert, AlertDescription, } from "@/components/ui/alert";


export default function aboutme() {
    
    return (
      <div className="p-3.5">
        
        <div className="text-3xl">
            Hi! im zenia, I'm a chinchilla that took a dust bath in baby powder. 
            
            Also, I'm full of shit.
            <img src="https://proxy.imagearchive.com/e81/e81d81153b3ac9b2e3e9157715e9475f.jpg"/>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Zenia
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUbYq3hjRYDs9-cpNREGYppdwl9BlavxuOsgeSd_AhI6Xpsul"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Zenia
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Alert>
        <AlertDescription>
            MEOW!
        </AlertDescription>

        </Alert>
        

        </div>

      );
  }