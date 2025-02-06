// {
//             "id": 1,
//             "name": "Manoj Sigdel",
//             "role": "Co-Founder",
//             "description": "<p>Manoj Sigdel is an experienced leader with over 18 years in real estate, property management, and business innovation. With a proven track record at industry-leading organizations like RealPage and LeaseLock, Manoj has dedicated his career to streamlining operations and delivering exceptional client experiences.<br>Driven by a passion for simplifying property management, he co-founded Yeti Property Management to provide tailored solutions that empower owners and tenants. Manoj combines strategic vision with deep industry expertise to create seamless, efficient processes, making property ownership and leasing stress-free and rewarding for everyone involved.</p>",
//             "email": null,
//             "profile_picture": "https://yetipm.baliyoventures.com/media/manoj.jpg",
//             "profile_picture_alt_description": null,
//             "facebook_link": null,
//             "instagram_link": null,
//             "twitter_link": null,
//             "linkedin_link": null,
//             "created_at": "2025-01-29T07:31:47.225584Z",
//             "updated_at": "2025-02-05T06:24:21.206071Z"
//         },
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  email: string | null;
  profile_picture: string | null;
  profile_picture_alt_description: string | null;
  facebook_link: string | null;
  instagram_link: string | null;
  twitter_link: string | null;
  linkedin_link: string | null;
  created_at: string;
  updated_at: string;
}
