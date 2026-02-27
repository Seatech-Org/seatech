import { Building2 } from "lucide-react";

export interface Client {
  name: string;
  category: string;
  logo?: string;
  icon?: any;
  color?: string;
  description?: string;
}

export const CLIENTS: Client[] = [
  // Universities & Education
  {
    name: "Dr. Shakuntala Misra National Rehabilitation University",
    category: "Education",
    logo: "/clients logo/Dr. Shakuntala Misra National Rehabilitation University.jpg",
    description: "Empowering differently-abled individuals through higher education."
  },
  {
    name: "University of Lucknow",
    category: "Education",
    logo: "/clients logo/University of Lucknow.jpeg",
    description: "A premier center of learning and research in Uttar Pradesh."
  },
  {
    name: "Khwaja Moinuddin Chishti Language University",
    category: "Education",
    logo: "/clients logo/Khwaja Moinuddin Chishti Language University.png",
    description: "Specializing in languages and cultural studies."
  },
  {
    name: "Higher Education Uttar Pradesh",
    category: "Government",
    logo: "/clients logo/Higher Education Uttar Pradesh.jpg",
    description: "Overseeing the development of higher education across the state."
  },
  
  // Medical & Health
  {
    name: "Tata 1mg",
    category: "Healthcare",
    logo: "/clients logo/Tata 1mg.jpeg",
    description: "India's leading digital healthcare platform."
  },
  {
    name: "ICMR",
    category: "Healthcare",
    logo: "/clients logo/ICMR.jpg",
    description: "The apex body in India for the formulation, coordination and promotion of biomedical research."
  },
  {
    name: "ASMC Pratapgarh",
    category: "Medical College",
    logo: "/clients logo/ASMC Pratapgarh.jpeg",
    description: "Autonomous State Medical College, serving regional healthcare needs."
  },
  {
    name: "ASMC Sultanpur",
    category: "Medical College",
    logo: "/clients logo/ASMC Sultanpur.png",
    description: "Dedicated to medical excellence and education in Sultanpur."
  },
  {
    name: "ASMC Hardoi",
    category: "Medical College",
    logo: "/clients logo/ASMC Hardoi.png",
    description: "Providing quality medical education and healthcare services in Hardoi."
  },

  // Government & Judiciary
  {
    name: "Judiciary U.P.",
    category: "Government",
    logo: "/clients logo/Judiciary U.P..jpg",
    description: "Ensuring justice and upholding the rule of law in Uttar Pradesh."
  },
  {
    name: "Uttar Pradesh Police",
    category: "Defense",
    logo: "/clients logo/Uttar Pradesh Police.png",
    description: "Law enforcement agency for the state of Uttar Pradesh."
  },
  {
    name: "Panchayat Raj Department U.P.",
    category: "Government",
    logo: "/clients logo/Panchayat Raj Department U.P..jpg",
    description: "Strengthening local governance and rural development."
  },
  {
    name: "U.P. Wireless",
    category: "Defense",
    logo: "/clients logo/U.P. Wireless.png",
    description: "Police Telecommunication Department of Uttar Pradesh."
  },
  {
    name: "UPPAC",
    category: "Defense",
    logo: "/clients logo/UPPAC.jpg",
    description: "Uttar Pradesh Police Avas Nigam."
  },
  
  // Corporate / Others
  {
    name: "Raj Ratan",
    category: "Corporate",
    icon: Building2,
    color: "text-emerald-600",
    description: "Infrastructure and development partner."
  }
];