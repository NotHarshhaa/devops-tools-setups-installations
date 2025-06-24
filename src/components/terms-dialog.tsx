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

export function TermsDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h3>
              <p className="mt-2">
                By accessing and using DevOps Tools Guide, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">2. Use License</h3>
              <div className="mt-2 space-y-4">
                <p>
                  Permission is granted to temporarily access and use the materials (information or software) on DevOps Tools Guide for personal, non-commercial purposes only.
                </p>
                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">3. Disclaimer</h3>
              <div className="mt-2 space-y-4">
                <p>
                  The materials on DevOps Tools Guide are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:
                </p>
                <ul className="list-disc pl-6">
                  <li>Merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">4. Limitations</h3>
              <p className="mt-2">
                In no event shall DevOps Tools Guide or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">5. Content Accuracy</h3>
              <p className="mt-2">
                The materials appearing on DevOps Tools Guide could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">6. Links</h3>
              <p className="mt-2">
                DevOps Tools Guide has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">7. Modifications</h3>
              <p className="mt-2">
                We may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">8. Governing Law</h3>
              <p className="mt-2">
                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <p className="mt-2">
                If you have any questions about these Terms of Service, please contact us at terms@devopstools.guide
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 