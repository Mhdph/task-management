import React, { useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/board");
    }
  }, [session]);

  return (
    <div>
      <Card className="login-card">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
            <Button variant="primary" type="submit" onClick={() => signIn()}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
