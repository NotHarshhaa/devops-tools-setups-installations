"use client";

import { AlertTriangleIcon, CheckCircleIcon, FileTextIcon, ScaleIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TermsDialogProps {
  children: React.ReactNode;
}

export function TermsDialog({ children }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <FileTextIcon className="size-6 text-primary" />
            Terms of Service
          </DialogTitle>
          <DialogDescription>
            Last updated: {new Date().toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircleIcon className="size-5 text-primary" />
              Acceptance of Terms
            </h3>
            <p className="text-muted-foreground">
              By accessing and using DevOps Tools Hub, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <ScaleIcon className="size-5 text-primary" />
              Use License
            </h3>
            <p className="text-muted-foreground mb-3">
              Permission is granted to temporarily download one copy of the materials on DevOps Tools Hub 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-muted-foreground mb-3">This license shall automatically terminate if you violate any of these restrictions and may be terminated by DevOps Tools Hub at any time.</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on the website</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <AlertTriangleIcon className="size-5 text-primary" />
              Disclaimer
            </h3>
            <p className="text-muted-foreground mb-3">
              The materials on DevOps Tools Hub are provided on an &apos;as is&apos; basis. DevOps Tools Hub makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Implied warranties of merchantability or fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property or other violation of rights</li>
              <li>Warranties that the website will be error-free or uninterrupted</li>
              <li>Warranties about the accuracy or reliability of the content</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Limitations</h3>
            <p className="text-muted-foreground">
              In no event shall DevOps Tools Hub or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on the website, even if DevOps Tools Hub or a DevOps Tools Hub authorized representative has been 
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Accuracy of Materials</h3>
            <p className="text-muted-foreground">
              The materials appearing on DevOps Tools Hub could include technical, typographical, or photographic errors. 
              DevOps Tools Hub does not warrant that any of the materials on its website are accurate, complete, or current. 
              DevOps Tools Hub may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Links</h3>
            <p className="text-muted-foreground">
              DevOps Tools Hub has not reviewed all of the sites linked to its website and is not responsible for the 
              contents of any such linked site. The inclusion of any link does not imply endorsement by DevOps Tools Hub 
              of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Modifications</h3>
            <p className="text-muted-foreground">
              DevOps Tools Hub may revise these terms of service for its website at any time without notice. By using this 
              website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@devops-tools.com" className="text-primary hover:underline">
                legal@devops-tools.com
              </a>
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
} 