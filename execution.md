# Here we discuss how to implement certain things , such that we have a plan

## /projects/{project_name} page
- This page will be a dynamic route in Next.js, where {project_name} corresponds to the unique identifier for each project.

### Component used : 
1. Header (common)
2. StickyScroll - This component will be used to create the sticky scroll effect, when the user scrolls , details about the project will be revealed in a sticky manner on the left side of the screen, while the right side will have the images related to the project.
3. CTA Section - This will be a section at the end of the page, which will have a call to action for the user, like "Contact Me" or "View More Projects".

### Changes needed in the component
1. design should be according to the @design_updated.md file, which is the latest design file.
2. this scroll reveal component will handle two use cases :
    1. multiple images - in this case, as the user scrolls, different images will be revealed on the right side, while the left side will have the details about the project. in this projects like shopify apps , which can have multiple images for pages like dashboard, settings page, etc, this will be useful.
    2. single image - in this case, there will only 1 long image , such as landing page of a website, and as the user scrolls, different sections of the image will be revealed, while the left side will have the details about the project. this will be useful for projects like websites, where we can have a long image of the landing page, and as the user scrolls, different sections of the landing page will be revealed, while the left side will have the details about the project.

### Projects to display : list
1. Shopify App 1 : Ai related product and upsell : multiple images
2. Shopify App 2 : Pairly Bundles and upsell : multiple images
3. Fun Circle : website : single long image and multiple images 
4. Tweeto : social media platform : single long image and multiple images
5. Recoverx - ecommece website : multiple long images for home page , product page, cart page, etc.
6. delhibookmarket - book ecommerce : multiple long images for home page , product page, cart page, etc.
7. NextJs landing pages - real_estate and others : single long image and multiple images
8. 1 to 2 more ecommerce websites : maison luxe and iron crate : multiple long images for home page , product page, cart page, etc.
9. blog app : single long image and multiple images
10. giftbu : custom customization 
11. social draw