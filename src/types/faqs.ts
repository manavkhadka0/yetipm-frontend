// {
//     "count": 5,
//     "next": null,
//     "previous": null,
//     "results": [
//         {
//             "id": 2,
//             "question": "What is YetiPM?",
//             "answer": "<p>YetiPM is a Texas-based property rental website that helps tenants find rental properties and assists landlords in managing their listings. We provide a seamless online experience for property searching, lease applications, and property management.</p>"
//         },
//         {
//             "id": 3,
//             "question": "How does YetiPM work?",
//             "answer": "<p>YetiPM connects tenants with landlords by providing a platform where landlords can list their rental properties, and tenants can browse, apply, and communicate directly with property owners or managers.</p>"
//         },
//         {
//             "id": 4,
//             "question": "Is YetiPM only for Texas properties?",
//             "answer": "<p>Yes, YetiPM specializes in rental properties located in Texas, covering major cities such as Austin, Dallas, Houston, and San Antonio.</p>"
//         },
//         {
//             "id": 5,
//             "question": "How do I search for rental properties on YetiPM?",
//             "answer": "<p>You can search for rental properties by entering your preferred location, budget, and property type in our search bar. Filters like pet-friendly, furnished, and amenities can help you refine your search.</p>"
//         },
//         {
//             "id": 6,
//             "question": "How do I apply for a rental property?",
//             "answer": "<p>Once you find a property you're interested in, click on the \"Apply Now\" button and fill out the online rental application. Some properties may require an application fee.</p>"
//         }
//     ]
// }

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface FaqsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Faq[];
}
