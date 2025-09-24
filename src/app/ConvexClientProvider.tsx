"use client";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import React from "react";
import LoadingLogo from "@/components/ui/shared/LoadingLogo";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <LoadingLogo />{" "}
      </AuthLoading>
    </ConvexProviderWithClerk>
  );
}
