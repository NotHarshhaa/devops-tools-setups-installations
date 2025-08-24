"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldIcon, EyeIcon, LockIcon, UserIcon } from "lucide-react";

interface PrivacyDialogProps {
  children: React.ReactNode;
}

export function PrivacyDialog({ children }: PrivacyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <ShieldIcon className="size-6 text-primary" />
            Privacy Policy
          </DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <EyeIcon className="size-5 text-primary" />
              Information We Collect
            </h3>
            <p className="text-muted-foreground mb-3">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Account information (name, email, username)</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
              <li>Technical information about your device</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <LockIcon className="size-5 text-primary" />
              How We Use Your Information
            </h3>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to provide, maintain, and improve our services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide and maintain our DevOps tools documentation</li>
              <li>Send you technical updates and announcements</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our website and user experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <UserIcon className="size-5 text-primary" />
              Your Rights and Choices
            </h3>
            <p className="text-muted-foreground mb-3">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access and update your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your data</li>
              <li>Control cookie preferences</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Data Security</h3>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@devops-tools.com" className="text-primary hover:underline">
                privacy@devops-tools.com
              </a>
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
} 