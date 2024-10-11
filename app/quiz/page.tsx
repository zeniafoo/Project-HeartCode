"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";



const formSchema = z.object({
    username: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
    age: z.string()
    .min(2, {
      message: "You must be older than 15!",
    })
    .transform((val) => parseInt(val, 10))  // Transform string to integer
    .refine((val) => val > 15, {
      message: "You must be older than 15!",
    }),
    question1: z.string({
    	required_error: "Please select an option"
	}),
    
    
  })

  export default function quiz() {
    const { toast } = useToast(); //it pops up everytime you submit

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        age: undefined,
            },
        })

    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof formSchema>) {
        if (data.question1 === "yes") {
        	toast({
            	title: `Congratulations ${data.username}`,
            	description: `You are a drug dealer but you should not be because you are ${data.age}`,
        	})
    	} else {
        	toast({
            	title: `Thank you ${data.username}`,
            	description: `Unfortunately you are not a drug dealer but that's good because you are only ${data.age}`,
        	})
    	}
}

    
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                    <Input placeholder="meow" {...field} />
                    </FormControl>
                    <FormDescription>
                    What is your username?
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />

            {/* Age Field */}
            <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                    <Input placeholder="Enter your age" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />    

<FormField
                	control={form.control}
                	name="question1"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>Do you sell drugs?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="yes">Yes</SelectItem>
                                	<SelectItem value="no">No</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>

            <Button type="submit">Submit</Button>
            </form>
        </Form>
        )
        
    

    }


// export default function quiz() {
//     return (
//       <div>
//         Hello World! this is the quiz!
//         </div>
//       );
//   }