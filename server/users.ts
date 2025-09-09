"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInUsername({
    body: {
      username: "tester",
      password: "test123456",
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "test@test.com",
      name: "Test 2",
      password: "test123456",
      username: "tester",
    },
  });
};
