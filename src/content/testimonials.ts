export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

/**
 * Real client quotes only. Leave empty until you have permissioned testimonials.
 * The Testimonials section hides itself when this array is empty.
 */
export const testimonials: Testimonial[] = [];
