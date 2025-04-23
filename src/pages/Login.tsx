
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] py-12 px-4">
        <Card className="w-full max-w-md border border-border/50 bg-card/95 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center">Login</CardTitle>
            <CardDescription className="text-center text-foreground/70">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
            <div className="mt-4 text-center text-sm">
              <span className="text-foreground/70">Don't have an account?</span>{" "}
              <Link to="/register" className="text-primary hover:underline">
                Register
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-border/30 pt-5">
            <div className="text-xs text-foreground/50">
              By logging in, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
