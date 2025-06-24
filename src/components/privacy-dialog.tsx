"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PrivacyDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground">Introduction</h3>
              <p className="mt-2">
                Welcome to DevOps Tools Guide. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Information We Collect</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Usage Data</h4>
                  <p>We collect anonymous usage data to improve our services, including:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Cookies</h4>
                  <p>
                    We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">How We Use Your Information</h3>
              <ul className="list-disc pl-6 mt-2">
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To maintain and enhance security</li>
                <li>To provide technical support</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Data Security</h3>
              <p className="mt-2">
                We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Third-Party Services</h3>
              <p className="mt-2">
                We may use third-party services that collect information. These services have their own privacy policies and terms of service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Your Rights</h3>
              <p className="mt-2">You have the right to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
              <p className="mt-2">
                If you have any questions about this Privacy Policy, please contact us at privacy@devopstools.guide
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 