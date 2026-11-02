# Helou Technical Services — website proposal

Open `index.html` in a browser. The homepage and 18 internal pages are plain HTML files. Edit the text directly in each page's `index.html`; shared styles are in `styles.css` and `internal-pages.css`. For a Spanish walkthrough of where each part lives, read `GUIA-DE-EDICION.md`.

This is a design proposal published for review at https://baezgonzalo.github.io/webpage-technicalservicesbusiness/. It does not replace heloutechnicalservices.com. Service, monitoring, trailer, DIR and footer links stay within this proposal. Social, Google, government and email links go outside it. Use `python check_site.py` to verify the internal links after editing.

The gate scene between Who We Serve and Services opens as visitors scroll. It uses CSS, a small JavaScript scroll handler, and an automatic gate photo from HTS's website. Reduced-motion settings show the scene open without animation. Service cards and service pages now use different images from the HTS website. See `PHOTO-SOURCES.md` for provenance and `OWNER-REVIEW.md` for the review checklist.

## Before launch

- Connect the estimate form to a secure backend, deliver requests to `info@heloutechnicalservices.com` and also `dir@heloutechnicalservices.com` for government/school requests, store them in a CRM or database, add spam protection, and create a real `/thank-you` page. The current form validates fields and prepares an email in the visitor's mail app; it does not silently claim delivery.
- The homepage shows the supplied Google rating (5.0/5 from 41 reviews). Recheck the count before delivery, and insert only real, approved review text.
- Add approved case-study details and customer reviews if HTS wants to show specific results. The current equipment gallery uses images from the HTS website without claiming project outcomes. Add an approved portrait of Joseph Helou if available.
- Confirm business hours, estimate response time, installation lead time, repair call fee, monitoring terms, insurance details, trailer sales/rental options, SMS consent wording, contract status, and permission for third-party logos.
- Supply a high-resolution Open Graph image and Google Tag Manager/Search Console IDs.
- Confirm that the supplied HTS logo and images may be reused in the final site. The supplied logo now appears in the header, founder section and footer.
- Check the Google Maps embed on the final hosting platform.
- Review and approve the draft Privacy Policy for the actual hosting, analytics, form and SMS setup before publication.

## Sources checked

- https://www.heloutechnicalservices.com/
- https://www.heloutechnicalservices.com/about-us
- https://www.heloutechnicalservices.com/security-camera-systems
- https://www.heloutechnicalservices.com/alarm-systems
- https://www.heloutechnicalservices.com/access-control
- https://www.heloutechnicalservices.com/automatic-gate-systems
- https://www.heloutechnicalservices.com/business-phones-and-voip
- https://www.heloutechnicalservices.com/point-of-sale-pos-solutions
- https://www.heloutechnicalservices.com/services/installation-service-and-support
- https://www.heloutechnicalservices.com/security-camera-systems/proactive-video-monitoring
- https://www.heloutechnicalservices.com/security-camera-systems/mobile-security-camera-trailers
- https://www.heloutechnicalservices.com/cooperative-contracts
- https://www.heloutechnicalservices.com/employment-and-contractors
- https://www.heloutechnicalservices.com/referral-partner-program
- https://www.heloutechnicalservices.com/about-us/privacy-policy
- User-provided business brief and Instagram screenshot.

The owner-supplied screenshot showed a 5.0/5 Google rating from 41 reviews. No testimonial text, project results, response times, warranties or contract dates were invented.
