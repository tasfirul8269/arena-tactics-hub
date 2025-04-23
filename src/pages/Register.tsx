
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] py-12 px-4">
        <Card className="w-full max-w-md border border-border/50 bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center">Create an Account</CardTitle>
            <CardDescription className="text-center text-foreground/70">
              Enter your details to create your Arena Tactics Hub account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
            <div className="mt-4 text-center text-sm">
              <span className="text-foreground/70">Already have an account?</span>{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border/30 pt-5">
            <div className="text-xs text-foreground/50">
              By registering, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
