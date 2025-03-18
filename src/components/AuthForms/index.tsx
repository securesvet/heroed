import { useForm, UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formDefaultSchema = {
  username: z.string().min(3, {
    message: "at least 3 characters long",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "at least 8 characters long",
  }),
};

const formRegisterSchema = z.object({
  ...formDefaultSchema,
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
  });

  const [isRequestSent, setIsRequestSent] = useState(false);
  function onSubmit(data: z.infer<typeof formRegisterSchema>) {
    localStorage.setItem("user", JSON.stringify(data));
    setIsRequestSent(true);
    toast("You have successfully registered", {
      description: `${new Date().toLocaleString()}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    console.log(data);
  }

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full justify-between"
        >
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isRequestSent} type="submit">
            {isRequestSent && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

const loginFormSchema = z.object({
  userIdentificator: z
    .string()
    .min(3, { message: "at least 3 characters long" }),
  password: formDefaultSchema.password,
});

export function LoginForm() {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  function onSubmit(data: z.infer<typeof loginFormSchema>) {
    setIsRequestSent(true);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col h-full justify-between"
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="userIdentificator"
            render={({ field }) => (
              <FormItem>
                <div className="min-h-[20px]">
                  <FormMessage />
                </div>
                <FormLabel>Username or Email</FormLabel>
                <FormControl>
                  <Input placeholder="username or email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <div className="min-h-[20px]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isRequestSent} type="submit">
          {isRequestSent && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
