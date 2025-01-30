// {
//     "count": 4,
//     "next": null,
//     "previous": null,
//     "results": [
//         {
//             "id": 1,
//             "name": "Emily Roberts",
//             "testimonial": "<p><strong>Finding a rental in Austin was so easy with YetiPM!</strong> The platform is user-friendly, and I loved how I could filter properties based on my needs. I applied for an apartment in minutes, and the landlord responded within a day. Highly recommend for hassle-free renting!</p>",
//             "image": "https://yetipm.baliyoventures.com/media/YetiPM_3vV7Txj.jpg",
//             "source": "Other"
//         },
//         {
//             "id": 2,
//             "name": "kapil dev sapkota",
//             "testimonial": "<p>Yeti PM has been a fantastic partner in managing my properties. They&rsquo;re professional, responsive, and make everything run smoothly. I can trust them to handle the details, so I don&rsquo;t have to worry. Highly recommend!</p>",
//             "image": "https://yetipm.baliyoventures.com/media/globe.svg",
//             "source": "Google"
//         },
//         {
//             "id": 3,
//             "name": "Jason Turner",
//             "testimonial": "<p><strong>YetiPM made my apartment search stress-free.</strong> I was able to book a virtual tour before applying, which saved me time. The landlord was responsive, and I signed my lease entirely online. Definitely the best rental experience I&rsquo;ve had!</p>",
//             "image": "https://yetipm.baliyoventures.com/media/download.jpeg",
//             "source": "Facebook"
//         },
//         {
//             "id": 4,
//             "name": "Samantha Wilson",
//             "testimonial": "<p><strong>Great website for finding rental properties!</strong> I needed a pet-friendly apartment in Dallas, and YetiPM had tons of options. The application process was smooth, and I loved being able to pay rent online through the platform. Highly recommended!</p>",
//             "image": "https://yetipm.baliyoventures.com/media/download_1.jpeg",
//             "source": "Other"
//         }
//     ]
// }

export type Testimonial = {
  id: string | number;
  name: string;
  testimonial: string;
  image?: string;
  source?: string;
};

export interface TestimonialsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Testimonial[];
}
