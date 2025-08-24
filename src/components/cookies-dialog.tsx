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
import { CookieIcon, SettingsIcon, ShieldIcon, InfoIcon, CheckCircleIcon } from "lucide-react";

interface CookiesDialogProps {
  children: React.ReactNode;
}

export function CookiesDialog({ children }: CookiesDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <CookieIcon className="size-6 text-primary" />
            Cookie Policy
          </DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <InfoIcon className="size-5 text-primary" />
              What Are Cookies?
            </h3>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <SettingsIcon className="size-5 text-primary" />
              Types of Cookies We Use
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Essential Cookies</h4>
                <p className="text-muted-foreground mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation and access to secure areas of the website.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Authentication and security</li>
                  <li>Session management</li>
                  <li>Load balancing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2">Analytics Cookies</h4>
                <p className="text-muted-foreground mb-2">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Page views and time spent</li>
                  <li>Traffic sources and user behavior</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2">Preference Cookies</h4>
                <p className="text-muted-foreground mb-2">
                  These cookies allow the website to remember choices you make and provide enhanced, 
                  more personal features.
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Customized content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <ShieldIcon className="size-5 text-primary" />
              Third-Party Cookies
            </h3>
            <p className="text-muted-foreground mb-3">
              Some cookies on our website are set by third-party services that we use to enhance 
              functionality and user experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Google Analytics for website analytics</li>
              <li>GitHub for authentication and integration</li>
              <li>Social media platforms for sharing features</li>
              <li>Content delivery networks for performance</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircleIcon className="size-5 text-primary" />
              Managing Your Cookie Preferences
            </h3>
            <p className="text-muted-foreground mb-3">
              You have several options for managing cookies on our website:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
              <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
              <li><strong>Third-Party Opt-outs:</strong> Visit third-party websites to opt out of their cookies</li>
              <li><strong>Contact Us:</strong> Reach out if you need help managing your preferences</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Cookie Duration</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">Session Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies are temporary and are deleted when you close your browser. They are used 
                  to maintain your session and preferences during your visit.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Persistent Cookies</h4>
                <p className="text-muted-foreground">
                  These cookies remain on your device for a set period or until you delete them. They 
                  remember your preferences for future visits.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Updates to This Policy</h3>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the new policy on our website.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at{' '}
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
