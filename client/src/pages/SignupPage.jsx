import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use } from "react";
export default function SignupPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const name = event.target.elements.name.value;
    const username = event.target.elements.username.value;

    const data = {
      email,
      password,
      username,
      name,
    };
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = response.json();
    console.log(result);
  };
  return (
    <div>
      <div className="w-130 mx-auto pt-20 ">
        <h1 className="text-xl" font-medium>
          Get started on Instagram
        </h1>
        <h2 className="text-sm">
          A meta account lets you access multiple meta tech such as instagram
          easily ans securely
        </h2>

        <form className="space-y-5 pt-5" onSubmit={handleSubmit}>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email"
              name="email"
              placeholder="Enter Email Address"
              type="email"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              placeholder="Enter password"
              type="password"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" name="name" placeholder="Enter Name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              name="username"
              placeholder="Enter username"
              required
            />
          </Field>
          <div className="space-y-2 pt-5">
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <Button variant="secondary" type="button" className="w-full">
              I already have an account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
