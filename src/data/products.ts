// ==========================================
// 1. INTERFACES
// ==========================================
export interface ProductSpecification {
  name: string;
  value: string;
  category: string;
}

export interface ProductImage {
  main: string;
  thumbnail: string;
}

export interface SellerInfo {
  name: string;
  verified: boolean;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  availability: number;
  minQty: number;
  images: ProductImage[];
  specifications: ProductSpecification[];
  discount: number;
  seller: SellerInfo;
  countryOfOrigin: string;
}

// ==========================================
// 2. PRODUCT DATA
// ==========================================
export const products: Product[] = [
  // --- Category: Auditorium Chair (V2) ---
  {
    id: "5116877-34097804961",
    name: "Auditorium Chair Auto Seat Tip Up without Push Back",
    brand: "Seatech OEM",
    model: "SEATECH AUDI03",
    category: "Auditorium Chair (V2)",
    price: 4100,
    availability: 3000,
    minQty: 100,
    discount: 68,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.5 },
    images: [
      { main: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-B.jpg", thumbnail: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-S.jpg" },
      { main: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-B copy.jpg", thumbnail: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-S copy.jpg" },
      { main: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-B copy 2.jpg", thumbnail: "/categories/Auditorium Chair (V2)-1/Auditorium Chair (V2)-S copy 2.jpg" }
    ],
    specifications: [{ category: "Seat Mechanism", name: "Type", value: "Auto Seat Tip Up" }, { category: "Seat Mechanism", name: "Push Back", value: "No" }, { category: "Material", name: "Seat Upholstery", value: "Fabric with PU Foam" }]
  },
  {
    id: "5116877-68500433874",
    name: "Auditorium Chair Auto Seat Tip Up with Sliding Seat & Push Back",
    brand: "Seatech OEM",
    model: "SEATECH AUDI01",
    category: "Auditorium Chair (V2)",
    price: 4500,
    availability: 5000,
    minQty: 100,
    discount: 67,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.5 },
    images: [
      { main: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-B.jpg", thumbnail: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-S.jpg" },
      { main: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-B copy.jpg", thumbnail: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-S copy.jpg" },
      { main: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-B copy 2.jpg", thumbnail: "/categories/Auditorium Chair (V2)-2/Auditorium Chair (V2)-S copy 2.jpg" }
    ],
    specifications: [{ category: "Seat Mechanism", name: "Type", value: "Auto Seat Tip Up" }, { category: "Seat Mechanism", name: "Feature", value: "Sliding Seat with Push Back" }]
  },
  {
    id: "5116877-98703837844",
    name: "Auditorium Chair Auto Seat Tip Up with Writing Pad",
    brand: "Seatech OEM",
    model: "SEATECH AUDI02",
    category: "Auditorium Chair (V2)",
    price: 6500,
    availability: 2000,
    minQty: 100,
    discount: 58,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.5 },
    images: [
      { main: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-B.jpg", thumbnail: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-S.jpg" },
      { main: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-B copy.jpg", thumbnail: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-S copy.jpg" },
      { main: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-B copy 2.jpg", thumbnail: "/categories/Auditorium Chair (V2)-3/Auditorium Chair (V2)-S copy 2.jpg" }
    ],
    specifications: [{ category: "Seat Mechanism", name: "Type", value: "Auto Seat Tip Up" }, { category: "Components", name: "Writing Pad", value: "Foldable (Right Side)" }]
  },
  {
    id: "5116877-14202137000",
    name: "Auditorium Chair Sliding Seat with Fabric Back Cover",
    brand: "Seatech OEM",
    model: "SEATECH AUDI08",
    category: "Auditorium Chair (V2)",
    price: 9100,
    availability: 2500,
    minQty: 40,
    discount: 39,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-B.jpg", thumbnail: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-S.jpg" },
      { main: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-B copy.jpg", thumbnail: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-S copy.jpg" },
      { main: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-B copy 2.jpg", thumbnail: "/categories/Auditorium Chair (V2)-4/Auditorium Chair (V2)-S copy 2.jpg" }
    ],
    specifications: [{ category: "Seat Mechanism", name: "Type", value: "Auto Seat Tip Up" }, { category: "Construction", name: "Back Cover", value: "Fabric Upholstered" }]
  },
  {
    id: "5116877-42201428071",
    name: "Auditorium Chair Auto Seat Tip Up with Plastic Back Cover",
    brand: "Seatech OEM",
    model: "AUDI 11",
    category: "Auditorium Chair (V2)",
    price: 19500,
    availability: 1000,
    minQty: 40,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-B.jpg", thumbnail: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-S.jpg" },
      { main: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-B copy.jpg", thumbnail: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-S copy.jpg" },
      { main: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-B copy 2.jpg", thumbnail: "/categories/Auditorium Chair (V2)-5/Auditorium Chair (V2)-S copy 2.jpg" }
    ],
    specifications: [{ category: "Seat Mechanism", name: "Type", value: "Auto Seat Tip Up" }, { category: "Construction", name: "Back Cover", value: "Plastic Moulded" }]
  },
  
  // --- Category: Bunk Beds ---
  {
    id: "5116877-3948376833",
    name: "Tier bunk beds (Fixed) for Adult",
    brand: "Seatech OEM",
    model: "SEATECH BBD02",
    category: "Bunk Beds as per IS 17636",
    price: 7500,
    availability: 1200,
    minQty: 30,
    discount: 35,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.5 },
    images: [
      { main: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-B.jpg", thumbnail: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-S.jpg" },
      { main: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-B copy.jpg", thumbnail: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-S copy.jpg" },
      { main: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-B copy 2.jpg", thumbnail: "/categories/Bunk Beds as per IS 17636/Bunk Beds as per IS 17636-S copy 2.jpg" }
    ],
    specifications: [{ category: "General", name: "Type", value: "Double Tier (Fixed)" }, { category: "Material", name: "Construction", value: "Metal" }]
  },

  // --- Category: Chair for General Purpose ---
  {
    id: "5116877-5238369627",
    name: "Low-back Chair With Without Armrest",
    brand: "Seatech OEM",
    model: "SEATECHCWV06",
    category: "Chair for General Purpose",
    price: 1900,
    availability: 5000,
    minQty: 200,
    discount: 75,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-1/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-1/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-1/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-1/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-1/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-1/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Without Armrest" }]
  },
  {
    id: "5116877-198263522",
    name: "Mid-back Chair With Fixed armrest with Padding",
    brand: "Seatech OEM",
    model: "SEATECH CWV05",
    category: "Chair for General Purpose",
    price: 1950,
    availability: 1000,
    minQty: 40,
    discount: 74,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-2/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-2/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-2/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-2/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-2/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-2/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Padding" }]
  },
  {
    id: "5116877-35771148436",
    name: "Mid-back Chair With Without Armrest",
    brand: "Seatech OEM",
    model: "SEATECH CWV04",
    category: "Chair for General Purpose",
    price: 3500,
    availability: 1000,
    minQty: 12,
    discount: 46,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-3/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-3/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-3/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-3/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-3/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-3/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Without Armrest" }]
  },
  {
    id: "5116877-61038404328",
    name: "Low-back Chair With Fixed armrest with Padding",
    brand: "Seatech OEM",
    model: "SEATECH CWV01",
    category: "Chair for General Purpose",
    price: 3500,
    availability: 1000,
    minQty: 10,
    discount: 63,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-4/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-4/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-4/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-4/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-4/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-4/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Padding" }]
  },
  {
    id: "5116877-20313114705",
    name: "Low-back Chair With Without Armrest",
    brand: "Seatech OEM",
    model: "SEATECH LWV01",
    category: "Chair for General Purpose",
    price: 4100,
    availability: 1000,
    minQty: 21,
    discount: 57,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-5/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-5/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-5/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-5/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-5/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-5/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Without Armrest" }]
  },
  {
    id: "5116877-69216713632",
    name: "Low-back Chair With Fixed armrest with Cushion",
    brand: "Seatech OEM",
    model: "Seatech CWV10",
    category: "Chair for General Purpose",
    price: 4500,
    availability: 5000,
    minQty: 20,
    discount: 53,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-6/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-6/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-6/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-6/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-6/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-6/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Cushion" }]
  },
  {
    id: "5116877-10867581211",
    name: "Mid-back Chair With Fixed armrest without cushion",
    brand: "Seatech OEM",
    model: "SEATECH CWV02",
    category: "Chair for General Purpose",
    price: 4900,
    availability: 1000,
    minQty: 12,
    discount: 53,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-7/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-7/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-7/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-7/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-7/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-7/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest without cushion" }, { category: "Features", name: "Lumbar Support", value: "Yes" }]
  },
  {
    id: "5116877-4226670578",
    name: "Low-back Chair With Fixed armrest with Padding",
    brand: "Seatech OEM",
    model: "SEATECH CWV03",
    category: "Chair for General Purpose",
    price: 6500,
    availability: 1000,
    minQty: 12,
    discount: 38,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-8/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-8/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-8/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-8/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-8/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-8/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Padding" }]
  },
  {
    id: "5116877-19625345869",
    name: "Mid-back Chair With Fixed armrest without cushion",
    brand: "Seatech OEM",
    model: "CGP301A",
    category: "Chair for General Purpose",
    price: 7500,
    availability: 500,
    minQty: 10,
    discount: 57,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-9/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-9/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-9/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-9/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-9/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-9/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest without cushion" }]
  },
  {
    id: "5116877-71226237740",
    name: "Mid-back Chair With Fixed armrest without cushion",
    brand: "Seatech OEM",
    model: "CWV MB301",
    category: "Chair for General Purpose",
    price: 8500,
    availability: 500,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-10/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-10/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-10/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-10/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-10/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-10/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest without cushion" }]
  },
  {
    id: "5116877-9668864051",
    name: "Low-back Chair With Fixed armrest with Cushion",
    brand: "Seatech OEM",
    model: "SEATECH CWTLBR07",
    category: "Chair for General Purpose",
    price: 9100,
    availability: 500,
    minQty: 10,
    discount: 41,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-11/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-11/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-11/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-11/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-11/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-11/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Low-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Cushion" }, { category: "Features", name: "Lumbar Support", value: "Yes" }]
  },
  {
    id: "5116877-96367899695",
    name: "Mid-back Chair With Fixed armrest with Cushion",
    brand: "Seatech OEM",
    model: "Seatech CWV07",
    category: "Chair for General Purpose",
    price: 10000,
    availability: 500,
    minQty: 10,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-12/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-12/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-12/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-12/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-12/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-12/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Cushion" }, { category: "Features", name: "Lumbar Support", value: "Yes" }]
  },
  {
    id: "5116877-29477886754",
    name: "Mid-back Chair With Without Armrest",
    brand: "Seatech OEM",
    model: "CWV MB11",
    category: "Chair for General Purpose",
    price: 9990,
    availability: 1000,
    minQty: 40,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-13/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-13/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-13/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-13/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-13/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-13/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Without Armrest" }, { category: "Features", name: "Lumbar Support", value: "Yes" }]
  },
  {
    id: "5116877-53488041209",
    name: "Mid-back Chair With Fixed armrest with Cushion",
    brand: "Seatech OEM",
    model: "CWV MB12",
    category: "Chair for General Purpose",
    price: 9995,
    availability: 1500,
    minQty: 40,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Chair for General Purpose-14/Chair for General Purpose-B.jpg", thumbnail: "/categories/Chair for General Purpose-14/Chair for General Purpose-S.jpg" },
      { main: "/categories/Chair for General Purpose-14/Chair for General Purpose-B copy.jpg", thumbnail: "/categories/Chair for General Purpose-14/Chair for General Purpose-S copy.jpg" },
      { main: "/categories/Chair for General Purpose-14/Chair for General Purpose-B copy 2.jpg", thumbnail: "/categories/Chair for General Purpose-14/Chair for General Purpose-S copy 2.jpg" }
    ],
    specifications: [{ category: "Dimensions", name: "Backrest Height", value: "Mid-back" }, { category: "Features", name: "Armrest", value: "Fixed armrest with Cushion" }, { category: "Features", name: "Lumbar Support", value: "Yes" }]
  },

  // --- Category: Classroom Stools ---
  {
    id: "5116877-81663803194",
    name: "Primer coated and Painted Square Classroom Stools (100 Kg)",
    brand: "Seatech OEM",
    model: "SEATECH CLS02",
    category: "Classroom Stools",
    price: 950,
    availability: 2000,
    minQty: 50,
    discount: 62,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Classroom Stools-1/Classroom Stools-B.jpg", thumbnail: "/categories/Classroom Stools-1/Classroom Stools-S.jpg" },
      { main: "/categories/Classroom Stools-1/Classroom Stools-B copy.jpg", thumbnail: "/categories/Classroom Stools-1/Classroom Stools-S copy.jpg" },
      { main: "/categories/Classroom Stools-1/Classroom Stools-B copy 2.jpg", thumbnail: "/categories/Classroom Stools-1/Classroom Stools-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Dimensions", name: "Size (LxBxH)", value: "350mm x 350mm x 500mm" },
      { category: "Material", name: "Top Material", value: "Ply wood (13mm)" },
      { category: "Material", name: "Frame Material", value: "MS pipe heavy duty" },
      { category: "Performance", name: "Load Capacity", value: "100 Kg" },
      { category: "Finish", name: "Paint", value: "Primer coated and Painted" }
    ]
  },
  {
    id: "5116877-94001835796",
    name: "Powder coated Square Classroom Stools (100 Kg)",
    brand: "Seatech OEM",
    model: "SEATECH CLS03",
    category: "Classroom Stools",
    price: 1500,
    availability: 100,
    minQty: 50,
    discount: 67,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Classroom Stools-2/Classroom Stools-B.jpg", thumbnail: "/categories/Classroom Stools-2/Classroom Stools-S.jpg" },
      { main: "/categories/Classroom Stools-2/Classroom Stools-B copy.jpg", thumbnail: "/categories/Classroom Stools-2/Classroom Stools-S copy.jpg" },
      { main: "/categories/Classroom Stools-2/Classroom Stools-B copy 2.jpg", thumbnail: "/categories/Classroom Stools-2/Classroom Stools-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Dimensions", name: "Size (LxBxH)", value: "400mm x 400mm x 550mm" },
      { category: "Material", name: "Top Material", value: "MDF Board (SBG II)" },
      { category: "Material", name: "Frame Material", value: "MS pipe heavy duty" },
      { category: "Performance", name: "Load Capacity", value: "100 Kg" },
      { category: "Finish", name: "Paint", value: "Powder coated" }
    ]
  },
  {
    id: "5116877-17349111611",
    name: "Primer coated and Painted Square Classroom Stools (75 Kg)",
    brand: "Seatech OEM",
    model: "SEATECH CLS01",
    category: "Classroom Stools",
    price: 2500,
    availability: 1000,
    minQty: 25,
    discount: 29,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Classroom Stools-3/Classroom Stools-B.jpg", thumbnail: "/categories/Classroom Stools-3/Classroom Stools-S.jpg" },
      { main: "/categories/Classroom Stools-3/Classroom Stools-B copy.jpg", thumbnail: "/categories/Classroom Stools-3/Classroom Stools-S copy.jpg" },
      { main: "/categories/Classroom Stools-3/Classroom Stools-B copy 2.jpg", thumbnail: "/categories/Classroom Stools-3/Classroom Stools-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Dimensions", name: "Size (LxBxH)", value: "400mm x 400mm x 600mm" },
      { category: "Material", name: "Top Material", value: "Block Board (BWP grade)" },
      { category: "Material", name: "Frame Material", value: "Wood" },
      { category: "Performance", name: "Load Capacity", value: "75 Kg" },
      { category: "Finish", name: "Paint", value: "Primer coated and Painted" }
    ]
  },
  // --- Composite Office Tables confirming to IS 8126 (V2) ---
  {
    id: "5116877-46642373865",
    name: "Composite Office Table with Locker Unit (1200x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH CST07",
    category: "Composite Office Tables confirming to IS 8126 (V2)",
    price: 9500,
    availability: 105,
    minQty: 10,
    discount: 55,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-B.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-S.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-B copy.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-S copy.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-B copy 2.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-1/Composite Office Tables confirming to IS 8126 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Storage Type", value: "Locker unit" },
      { category: "Dimensions", name: "Size (LxWxT)", value: "1200mm x 600mm x 20mm" },
      { category: "Material", name: "Table Top", value: "Particle Boards" },
      { category: "Construction", name: "Pedestal", value: "Mild Steel Tubular" },
      { category: "Finish", name: "Color", value: "Brown" },
      { category: "Warranty", name: "Period", value: "3 Years" }
    ]
  },
  {
    id: "5116877-36072246766",
    name: "Composite Office Table with Drawer & Filing Unit (1200x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH",
    category: "Composite Office Tables confirming to IS 8126 (V2)",
    price: 17000,
    availability: 1000,
    minQty: 19,
    discount: 11,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-B.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-S.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-B copy.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-S copy.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-B copy 2.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-2/Composite Office Tables confirming to IS 8126 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Storage Type", value: "Drawer and filing unit" },
      { category: "Dimensions", name: "Size (LxWxT)", value: "1200mm x 600mm x 20mm" },
      { category: "Material", name: "Table Top", value: "Particle Boards" },
      { category: "Construction", name: "Pedestal", value: "Mild Steel Tubular" },
      { category: "Finish", name: "Color", value: "Black" },
      { category: "Warranty", name: "Period", value: "2 Years" }
    ]
  },
  {
    id: "5116877-36318751233",
    name: "Composite Office Table with Three-Drawer Unit (1200x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH CST03",
    category: "Composite Office Tables confirming to IS 8126 (V2)",
    price: 21000,
    availability: 100,
    minQty: 10,
    discount: 28,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-B.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-S.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-B copy.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-S copy.jpg" },
      { main: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-B copy 2.jpg", thumbnail: "/categories/Composite Office Tables confirming to IS 8126 (V2)-3/Composite Office Tables confirming to IS 8126 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Storage Type", value: "Three-drawer unit" },
      { category: "Dimensions", name: "Size (LxWxT)", value: "1200mm x 600mm x 20mm" },
      { category: "Material", name: "Table Top", value: "Particle Boards" },
      { category: "Construction", name: "Pedestal", value: "Mild Steel Tubular" },
      { category: "Finish", name: "Color", value: "Brown" },
      { category: "Warranty", name: "Period", value: "1 Year" }
    ]
  },
  // --- Computer Table (V2) ---
  {
    id: "5116877-1278088971",
    name: "Modular Table with MR Ply Table Top and Metal Understructure (600x750mm)",
    brand: "Seatech OEM",
    model: "MT SIDH8125",
    category: "Computer Table (V2)",
    price: 4700,
    availability: 5000,
    minQty: 100,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-1/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-1/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-1/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-1/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-1/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-1/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MR Ply (Moisture Resistant)" },
      { category: "Dimensions", name: "Size (WxD)", value: "600mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-77799422812",
    name: "Modular Table with Marine Ply Top and Wooden Understructure (900x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH MTW01",
    category: "Computer Table (V2)",
    price: 4900,
    availability: 1000,
    minQty: 45,
    discount: 66,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-2/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-2/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-2/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-2/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-2/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-2/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Marine Ply" },
      { category: "Dimensions", name: "Size (WxD)", value: "900mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-32323298921",
    name: "Modular Table with Particle Board Top and Metal Understructure (1800x750mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT04",
    category: "Computer Table (V2)",
    price: 12500,
    availability: 791,
    minQty: 11,
    discount: 34,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-3/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-3/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-3/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-3/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-3/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-3/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-92767341034",
    name: "Modular Table with Particle Board Top and Metal Understructure (900x600mm)",
    brand: "Seatech OEM",
    model: "MT LK01",
    category: "Computer Table (V2)",
    price: 12500,
    availability: 500,
    minQty: 41,
    discount: 14,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-4/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-4/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-4/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-4/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-4/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-4/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "900mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (50x50mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-2155067800",
    name: "Modular Table with Particle Board Top and Metal Understructure (900x600mm)",
    brand: "Seatech OEM",
    model: "Seatech MT09",
    category: "Computer Table (V2)",
    price: 14000,
    availability: 5000,
    minQty: 10,
    discount: 26,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-5/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-5/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-5/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-5/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-5/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-5/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "900mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-49315880640",
    name: "Modular Table with Particle Board Top and Metal Understructure (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT11",
    category: "Computer Table (V2)",
    price: 14200,
    availability: 1000,
    minQty: 40,
    discount: 25,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-6/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-6/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-6/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-6/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-6/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-6/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (50x50mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-74516472909",
    name: "Modular Table with MDF Top and Wooden Understructure (1200x750mm)",
    brand: "Seatech OEM",
    model: "Seatech MT10",
    category: "Computer Table (V2)",
    price: 14500,
    availability: 1000,
    minQty: 40,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-7/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-7/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-7/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-7/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-7/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-7/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MDF Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1200mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "MDF Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-92566180604",
    name: "Modular Table with Particle Board Top and Metal Understructure (900x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT07",
    category: "Computer Table (V2)",
    price: 14500,
    availability: 5000,
    minQty: 40,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-8/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-8/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-8/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-8/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-8/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-8/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "900mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-71436442294",
    name: "Modular Table with Particle Board Top and Metal Understructure (1200x750mm)",
    brand: "Seatech OEM",
    model: "Seatech MT12",
    category: "Computer Table (V2)",
    price: 15000,
    availability: 350,
    minQty: 7,
    discount: 21,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-9/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-9/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-9/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-9/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-9/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-9/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1200mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-72462684731",
    name: "Modular Table with MDF Top and Wooden Understructure (1050x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT08",
    category: "Computer Table (V2)",
    price: 15500,
    availability: 5000,
    minQty: 40,
    discount: 18,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-10/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-10/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-10/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-10/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-10/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-10/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MDF Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1050mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "MDF Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-81482850688",
    name: "Modular Table with Particle Board Top and Metal Understructure (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT15",
    category: "Computer Table (V2)",
    price: 16665,
    availability: 60,
    minQty: 60,
    discount: 66,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },
    images: [
      { main: "/categories/Computer Table (V2)-11/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-11/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-11/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-11/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-11/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-11/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-17792425477",
    name: "Modular Table with Particle Board Top and Wooden Understructure (1800x900mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT14A",
    category: "Computer Table (V2)",
    price: 19000,
    availability: 500,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-12/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-12/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-12/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-12/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-12/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-12/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-99456516683",
    name: "Modular Table with Particle Board Top and Wooden Understructure (600x750mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT03",
    category: "Computer Table (V2)",
    price: 19000,
    availability: 1000,
    minQty: 10,
    discount: 34,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-13/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-13/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-13/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-13/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-13/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-13/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "600mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-27221498491",
    name: "Modular Table with BWP Ply Top and Metal Understructure (1200x600mm)",
    brand: "Seatech OEM",
    model: "Seatech MT19",
    category: "Computer Table (V2)",
    price: 19000,
    availability: 1000,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-14/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-14/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-14/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-14/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-14/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-14/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "BWP Ply" },
      { category: "Dimensions", name: "Size (WxD)", value: "1200mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-2399884314",
    name: "Modular Table with Particle Board Top and Metal Understructure (1200x900mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT01",
    category: "Computer Table (V2)",
    price: 19500,
    availability: 1000,
    minQty: 20,
    discount: 22,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-15/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-15/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-15/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-15/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-15/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-15/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1200mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-72323100072",
    name: "Modular Table with BWP Ply Top and Wooden Understructure (1200x750mm)",
    brand: "Seatech OEM",
    model: "Seatech MT17",
    category: "Computer Table (V2)",
    price: 21500,
    availability: 351,
    minQty: 4,
    discount: 56,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-16/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-16/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-16/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-16/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-16/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-16/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "BWP Ply" },
      { category: "Dimensions", name: "Size (WxD)", value: "1200mm x 750mm" },
      { category: "Construction", name: "Understructure", value: "BWP Ply (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-97694322079",
    name: "Modular Table with Particle Board Top and Wooden Understructure (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT18",
    category: "Computer Table (V2)",
    price: 24500,
    availability: 51,
    minQty: 3,
    discount: 49,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-17/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-17/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-17/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-17/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-17/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-17/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-58195571908",
    name: "Modular Table with Particle Board Top and Wooden Understructure (600x600mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT5",
    category: "Computer Table (V2)",
    price: 25000,
    availability: 500,
    minQty: 10,
    discount: 36,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-18/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-18/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-18/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-18/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-18/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-18/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "600mm x 600mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-99347438720",
    name: "Modular Table with Particle Board Top and Metal Understructure (1800x1200mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT21",
    category: "Computer Table (V2)",
    price: 26659,
    availability: 500,
    minQty: 20,
    discount: 15,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V2)-19/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-19/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-19/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-19/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-19/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-19/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "1800mm x 1200mm" },
      { category: "Construction", name: "Understructure", value: "Mild Steel (60x30mm)" },
      { category: "Features", name: "Modesty Panel", value: "No" },
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-49512639890",
    name: "Modular Table with Particle Board Top and Wooden Understructure (2100x900mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT23",
    category: "Computer Table (V2)",
    price: 33500,
    availability: 100,
    minQty: 10,
    discount: 32,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },
    images: [
      { main: "/categories/Computer Table (V2)-20/Computer Table (V2)-B.jpg", thumbnail: "/categories/Computer Table (V2)-20/Computer Table (V2)-S.jpg" },
      { main: "/categories/Computer Table (V2)-20/Computer Table (V2)-B copy.jpg", thumbnail: "/categories/Computer Table (V2)-20/Computer Table (V2)-S copy.jpg" },
      { main: "/categories/Computer Table (V2)-20/Computer Table (V2)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V2)-20/Computer Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Size (WxD)", value: "2100mm x 900mm" },
      { category: "Construction", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  // --- Computer Table (V3) ---
  {
    id: "5116877-41508926487",
    name: "Computer Table with Footrest (900mm)",
    brand: "Seatech OEM",
    model: "CT FB01",
    category: "Computer Table (V3)",
    price: 6500,
    availability: 500,
    minQty: 10,
    discount: 74,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V3)-1/Computer Table (V3)-B.jpg", thumbnail: "/categories/Computer Table (V3)-1/Computer Table (V3)-S.jpg" },
      { main: "/categories/Computer Table (V3)-1/Computer Table (V3)-B copy.jpg", thumbnail: "/categories/Computer Table (V3)-1/Computer Table (V3)-S copy.jpg" },
      { main: "/categories/Computer Table (V3)-1/Computer Table (V3)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V3)-1/Computer Table (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Computer table with footrest" },
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Length", value: "900mm" },
      { category: "Features", name: "Keyboard Tray", value: "Wood" },
      { category: "Features", name: "Modesty Panel", value: "Yes" }
    ]
  },
  {
    id: "5116877-95895699406",
    name: "Computer Table with Storage Unit (1350mm)",
    brand: "Seatech OEM",
    model: "CT LK1",
    category: "Computer Table (V3)",
    price: 9500,
    availability: 100,
    minQty: 21,
    discount: 62,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V3)-2/Computer Table (V3)-B.jpg", thumbnail: "/categories/Computer Table (V3)-2/Computer Table (V3)-S.jpg" },
      { main: "/categories/Computer Table (V3)-2/Computer Table (V3)-B copy.jpg", thumbnail: "/categories/Computer Table (V3)-2/Computer Table (V3)-S copy.jpg" },
      { main: "/categories/Computer Table (V3)-2/Computer Table (V3)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V3)-2/Computer Table (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Computer table with Storage unit" },
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Length", value: "1350mm" },
      { category: "Features", name: "Keyboard Tray", value: "Wood" },
      { category: "Features", name: "Modesty Panel", value: "Yes" }
    ]
  },
  {
    id: "5116877-53936961386",
    name: "Computer Table with Storage Unit (1500mm)",
    brand: "Seatech OEM",
    model: "SEATECH CTV3 01",
    category: "Computer Table (V3)",
    price: 19000,
    availability: 150,
    minQty: 10,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V3)-3/Computer Table (V3)-B.jpg", thumbnail: "/categories/Computer Table (V3)-3/Computer Table (V3)-S.jpg" },
      { main: "/categories/Computer Table (V3)-3/Computer Table (V3)-B copy.jpg", thumbnail: "/categories/Computer Table (V3)-3/Computer Table (V3)-S copy.jpg" },
      { main: "/categories/Computer Table (V3)-3/Computer Table (V3)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V3)-3/Computer Table (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Computer table with Storage unit" },
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Length", value: "1500mm" },
      { category: "Features", name: "Keyboard Tray", value: "Wood" },
      { category: "Features", name: "Modesty Panel", value: "No" }
    ]
  },
  {
    id: "5116877-45479357914",
    name: "Computer Table with Storage Unit & Footrest (900mm)",
    brand: "Seatech OEM",
    model: "CT SIDH8125",
    category: "Computer Table (V3)",
    price: 21500,
    availability: 500,
    minQty: 10,
    discount: 14,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Computer Table (V3)-4/Computer Table (V3)-B.jpg", thumbnail: "/categories/Computer Table (V3)-4/Computer Table (V3)-S.jpg" },
      { main: "/categories/Computer Table (V3)-4/Computer Table (V3)-B copy.jpg", thumbnail: "/categories/Computer Table (V3)-4/Computer Table (V3)-S copy.jpg" },
      { main: "/categories/Computer Table (V3)-4/Computer Table (V3)-B copy 2.jpg", thumbnail: "/categories/Computer Table (V3)-4/Computer Table (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Computer table with Storage & footrest" },
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Dimensions", name: "Length", value: "900mm" },
      { category: "Features", name: "Keyboard Tray", value: "Wood" },
      { category: "Features", name: "Modesty Panel", value: "Yes" }
    ]
  },
    // --- Desk and Bench Set for ClassroomTraining Area ---
  {
    id: "5116877-9261606252",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 1 Seater",
    brand: "Seatech OEM",
    model: "DBZAZM03",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 6500,
    availability: 5000,
    minQty: 70,
    discount: 32,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-1/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "No" },
      { category: "Features", name: "Backrest", value: "No" }
    ]
  },
  {
    id: "5116877-41362814138",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 2 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS03",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 6500,
    availability: 3000,
    minQty: 50,
    discount: 58,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-2/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "2 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Backrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-863236840",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 1 Seater",
    brand: "Seatech OEM",
    model: "DBS1SMU230",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 6800,
    availability: 400,
    minQty: 40,
    discount: 35,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-3/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half)" },
      { category: "Features", name: "Backrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-63749315022",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 4 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBSLAKHI",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 7500,
    availability: 5000,
    minQty: 71,
    discount: 29,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-4/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "4 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half)" },
      { category: "Features", name: "Backrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-26697548727",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "DBS CHN731",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 7800,
    availability: 1900,
    minQty: 41,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-5/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Full)" },
      { category: "Features", name: "Backrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-72341968197",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 1 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBSAZM01",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 7881,
    availability: 5000,
    minQty: 40,
    discount: 49,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-6/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Backrest", value: "No" }
    ]
  },
  {
    id: "5116877-56024116725",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "DBS AME1577",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 7900,
    availability: 5000,
    minQty: 41,
    discount: 49,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-7/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Backrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-93365235234",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS06",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8100,
    availability: 5000,
    minQty: 45,
    discount: 48,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-8/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 2.0mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-97055325307",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "DBS CHN730",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8150,
    availability: 2000,
    minQty: 40,
    discount: 47,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-9/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "BWP Ply" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 1.0mm)" },
      { category: "Features", name: "Backrest", value: "Yes (MR Ply)" }
    ]
  },
  {
    id: "5116877-22891377833",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS07",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8500,
    availability: 5000,
    minQty: 45,
    discount: 45,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-10/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Quarter, 1.6mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-1259303855",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS10",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8700,
    availability: 2000,
    minQty: 40,
    discount: 44,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-11/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 0.8mm)" },
      { category: "Features", name: "Backrest", value: "Yes (MDF Board)" }
    ]
  },
  {
    id: "5116877-3869700198",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS11",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8800,
    availability: 500,
    minQty: 40,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-12/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 0.8mm)" },
      { category: "Features", name: "Backrest", value: "Yes (MDF Board)" }
    ]
  },
  {
    id: "5116877-68605736717",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "DBS SKN1564",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8815,
    availability: 3000,
    minQty: 71,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-13/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 2.0mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-424544967",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "DBS LK1337",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8890,
    availability: 3500,
    minQty: 41,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-14/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Quarter, 18mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-70794293807",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 2 Seater",
    brand: "Seatech OEM",
    model: "DBS 2SMU230",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8900,
    availability: 500,
    minQty: 40,
    discount: 23,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-15/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "2 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 1.6mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-20021925527",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS12",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8900,
    availability: 11000,
    minQty: 100,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-16/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 0.8mm)" },
      { category: "Features", name: "Backrest", value: "Yes (MDF Board)" }
    ]
  },
  {
    id: "5116877-57862418109",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 1 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBSAZM02",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 8971,
    availability: 6000,
    minQty: 41,
    discount: 15,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-17/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Quarter, 0.8mm)" },
      { category: "Features", name: "Backrest", value: "Yes (Particle Board)" }
    ]
  },
  {
    id: "5116877-27699644210",
    name: "SEATECH Desk and Bench (Integrated) for Age Group for 2 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DBS02",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 13900,
    availability: 5000,
    minQty: 40,
    discount: 10,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk and Bench Set for ClassroomTraining Area-18/Desk and Bench Set for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Bench (Integrated)" },
      { category: "Capacity", name: "Seating", value: "2 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Frame", value: "Mild Steel" },    
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 1.6mm)" },
      { category: "Features", name: "Backrest", value: "Yes (MDF Board)" }
    ]
  },
  {
    id: "5116877-44559365121",
    name: "SEATECH Desk and Chair (Separate) for 1 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DCS01",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 2500,
    availability: 5000,
    minQty: 70,
    discount: 74,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-B.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-S.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-B copy.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-S copy.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-B copy 2.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-1/Desk and Chair Set for Classroom Training Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Chair (Separate)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Desk Frame", value: "Mild Steel" },
      { category: "Material", name: "Chair Seat", value: "Mild Steel (No Cushion)" },
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Construction", name: "Chair Frame", value: "Legs" } 
    ]
  },
  {
    id: "5116877-52141136248",
    name: "SEATECH Desk and Chair (Separate) for 1 Seater",
    brand: "Seatech OEM",
    model: "Seatech DCS09",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 9990,
    availability: 500,
    minQty: 40,
    discount: 66,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-B.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-S.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-B copy.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-S copy.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-B copy 2.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-2/Desk and Chair Set for Classroom Training Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Chair (Separate)" },
      { category: "Capacity", name: "Seating", value: "1 Seater" },    
      { category: "Material", name: "Desk Top", value: "Marine Ply" }, 
      { category: "Material", name: "Desk Frame", value: "Mild Steel" },
      { category: "Material", name: "Chair Seat", value: "Wood/Engineer Wood" },
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Construction", name: "Chair Frame", value: "Legs" } 
    ]
  },
  {
    id: "5116877-48283685870",
    name: "SEATECH Desk and Chair (Integrated) for 2 Seater",
    brand: "Seatech OEM",
    model: "SEATECH DCS12",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 15000,
    availability: 1000,
    minQty: 40,
    discount: 23,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-B.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-S.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-B copy.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-S copy.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-B copy 2.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-3/Desk and Chair Set for Classroom Training Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Chair (Integrated)" },
      { category: "Capacity", name: "Seating", value: "2 Seater" },    
      { category: "Material", name: "Desk Top", value: "MDF Board" },  
      { category: "Material", name: "Desk Frame", value: "MDF Board" },
      { category: "Material", name: "Chair Seat", value: "Wood/Engineer Wood" },
      { category: "Features", name: "Shelf (Under Storage)", value: "No" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 15mm)" },
      { category: "Construction", name: "Chair Frame", value: "Legs" } 
    ]
  },
  {
    id: "5116877-66864934711",
    name: "SEATECH Desk and Chair (Separate) for 3 Seater",
    brand: "Seatech OEM",
    model: "SEATECH02",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 21500,
    availability: 3500,
    minQty: 40,
    discount: 27,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-B.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-S.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-B copy.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-S copy.jpg" },
      { main: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-B copy 2.jpg", thumbnail: "/categories/Desk and Chair Set for Classroom Training Area-4/Desk and Chair Set for Classroom Training Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Desk and Chair (Separate)" },
      { category: "Capacity", name: "Seating", value: "3 Seater" },    
      { category: "Material", name: "Desk Top", value: "Particle Board" },
      { category: "Material", name: "Desk Frame", value: "Mild Steel" },
      { category: "Material", name: "Chair Seat", value: "PU Foam (With Cushion)" },
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Construction", name: "Chair Frame", value: "Cantilever" }
    ]
  },
  {
    id: "5116877-22009813879",
    name: "SEATECH 1 Seater Classroom Desk (12+ Years)",
    brand: "Seatech OEM",
    model: "SEATECH DOC02",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 2500,
    availability: 2000,
    minQty: 50,
    discount: 74,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-1/Desk Only for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Suitable for Age Group", value: "12+" },
      { category: "General", name: "Seating Capacity", value: "1 Seater" },
      { category: "Material", name: "Frame Material", value: "Mild Steel" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Features", name: "Shelf (Under Storage)", value: "No" },
      { category: "Features", name: "Modesty Panel", value: "No" }     
    ]
  },
  {
    id: "5116877-32013941782",
    name: "SEATECH 1 Seater Classroom Desk with Storage",
    brand: "Seatech OEM",
    model: "SEATECH DOC01",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 4500,
    availability: 1000,
    minQty: 40,
    discount: 53,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-2/Desk Only for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Suitable for Age Group", value: "3 TO 4 ,4 TO 6 ,6 TO 9 ,9 TO 12 ,12+" },
      { category: "General", name: "Seating Capacity", value: "1 Seater" },
      { category: "Material", name: "Frame Material", value: "Mild Steel" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Features", name: "Shelf (Under Storage)", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes (Half, 18mm)" }
    ]
  },
  {
    id: "5116877-5192937937",
    name: "SEATECH 1 Seater Classroom Desk (All Ages)",
    brand: "Seatech OEM",
    model: "Seatech DOC03",
    category: "Desk and Bench Set for ClassroomTraining Area",
    price: 13500,
    availability: 5000,
    minQty: 50,
    discount: 13,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-B.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-S.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-B copy.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-S copy.jpg" },
      { main: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-B copy 2.jpg", thumbnail: "/categories/Desk Only for ClassroomTraining Area-3/Desk Only for ClassroomTraining Area-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Suitable for Age Group", value: "3 TO 4 ,4 TO 6 ,6 TO 9 ,9 TO 12" },
      { category: "General", name: "Seating Capacity", value: "1 Seater" },
      { category: "Material", name: "Frame Material", value: "Mild Steel" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Features", name: "Shelf (Under Storage)", value: "No" },
      { category: "Features", name: "Modesty Panel", value: "No" }     
    ]
  },
  // --- Executive Table (V4) ---
  {
    id: "5116877-32740980811",
    name: "SEATECH Rectangle Executive Table with Pedestal Unit",      
    brand: "Seatech OEM",
    model: "EXT KNT1",
    category: "Executive Table (V4)",
    price: 40000,
    availability: 40,
    minQty: 2,
    discount: 58,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Executive Table (V4)-1/Executive Table (V4)-B.jpg", thumbnail: "/categories/Executive Table (V4)-1/Executive Table (V4)-S.jpg" },
      { main: "/categories/Executive Table (V4)-1/Executive Table (V4)-B copy.jpg", thumbnail: "/categories/Executive Table (V4)-1/Executive Table (V4)-S copy.jpg" },
      { main: "/categories/Executive Table (V4)-1/Executive Table (V4)-B copy 2.jpg", thumbnail: "/categories/Executive Table (V4)-1/Executive Table (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Executive Table with Pedestal Unit" },
      { category: "Dimensions", name: "Table Top Size", value: "1800mm x 750mm x 25mm" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "MDF Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "ERU Type", value: "Without Storage (Left Aligned)" },
      { category: "Features", name: "Pedestal Unit", value: "Yes" }    
    ]
  },
  {
    id: "5116877-94081752034",
    name: "SEATECH Rectangle Executive Table",
    brand: "Seatech OEM",
    model: "SEATECH EXTM01",
    category: "Executive Table (V4)",
    price: 45000,
    availability: 50,
    minQty: 2,
    discount: 53,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Executive Table (V4)-2/Executive Table (V4)-B.jpg", thumbnail: "/categories/Executive Table (V4)-2/Executive Table (V4)-S.jpg" },
      { main: "/categories/Executive Table (V4)-2/Executive Table (V4)-B copy.jpg", thumbnail: "/categories/Executive Table (V4)-2/Executive Table (V4)-S copy.jpg" },
      { main: "/categories/Executive Table (V4)-2/Executive Table (V4)-B copy 2.jpg", thumbnail: "/categories/Executive Table (V4)-2/Executive Table (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Executive Table" }, 
      { category: "Dimensions", name: "Table Top Size", value: "1800mm x 900mm x 25mm" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (Metal)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "ERU Type", value: "With Storage (Left Aligned)" },
      { category: "Features", name: "Pedestal Unit", value: "No" }     
    ]
  },
  {
    id: "5116877-59586570244",
    name: "SEATECH Rectangle Executive Table with Pedestal Unit",      
    brand: "Seatech OEM",
    model: "EXT BK336",
    category: "Executive Table (V4)",
    price: 45000,
    availability: 200,
    minQty: 2,
    discount: 19,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Executive Table (V4)-3/Executive Table (V4)-B.jpg", thumbnail: "/categories/Executive Table (V4)-3/Executive Table (V4)-S.jpg" },
      { main: "/categories/Executive Table (V4)-3/Executive Table (V4)-B copy.jpg", thumbnail: "/categories/Executive Table (V4)-3/Executive Table (V4)-S copy.jpg" },
      { main: "/categories/Executive Table (V4)-3/Executive Table (V4)-B copy 2.jpg", thumbnail: "/categories/Executive Table (V4)-3/Executive Table (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Executive Table with Pedestal Unit" },
      { category: "Dimensions", name: "Table Top Size", value: "1800mm x 900mm x 25mm" },
      { category: "Material", name: "Top Material", value: "MR (Moisture Resistant) Ply" },
      { category: "Material", name: "Understructure", value: "MR (Moisture Resistant) Ply" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "ERU Type", value: "With Storage (Left Aligned)" },
      { category: "Features", name: "Pedestal Unit", value: "Yes" }    
    ]
  },
  {
    id: "5116877-95964079497",
    name: "SEATECH Rectangle Executive Table with Pedestal Unit",
    brand: "Seatech OEM",
    model: "SEATECH EXT01",
    category: "Executive Table (V4)",
    price: 75000,
    availability: 50,
    minQty: 2,
    discount: 21,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Executive Table (V4)-4/Executive Table (V4)-B.jpg", thumbnail: "/categories/Executive Table (V4)-4/Executive Table (V4)-S.jpg" },
      { main: "/categories/Executive Table (V4)-4/Executive Table (V4)-B copy.jpg", thumbnail: "/categories/Executive Table (V4)-4/Executive Table (V4)-S copy.jpg" },
      { main: "/categories/Executive Table (V4)-4/Executive Table (V4)-B copy 2.jpg", thumbnail: "/categories/Executive Table (V4)-4/Executive Table (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Executive Table with Pedestal Unit" },
      { category: "Dimensions", name: "Table Top Size", value: "2400mm x 1200mm x 25mm" },
      { category: "Material", name: "Top Material", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board (Wooden)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "ERU Type", value: "With Storage (Left Aligned)" },
      { category: "Features", name: "Pedestal Unit", value: "Yes" }    
    ]
  },
  // --- High-end Office Furniture Set (V2) ---
  {
    id: "5116877-16964388661",
    name: "SEATECH High-end Office Furniture Set (Table, Pedestal, Cabinet)",
    brand: "Seatech OEM",
    model: "Seatech HEOF01",
    category: "High-end Office Furniture Set (V2)",
    price: 249000,
    availability: 11,
    minQty: 1,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-B.jpg", thumbnail: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-S.jpg" },   
      { main: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-B copy.jpg", thumbnail: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-S copy.jpg" },
      { main: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-B copy 2.jpg", thumbnail: "/categories/High-end Office Furniture Set (V2)-1/High-end Office Furniture Set (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Components", name: "Set Includes", value: "Executive Table, Pedestal, Wooden Shelf / Cabinet" },
      { category: "Dimensions", name: "Table Size", value: "1800mm x 900mm (36mm thick)" },
      { category: "Dimensions", name: "ERU Size", value: "1050mm x 450mm x 750mm" },
      { category: "Dimensions", name: "Cabinet Size", value: "1750-1800mm (H) x 850-900mm (W)" },
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Wooden/Engineer Wood" },
      { category: "Features", name: "ERU Position", value: "Right Hand Side (With Storage)" },
      { category: "Features", name: "Modesty Panel", value: "Yes" }    
    ]
  },
  // --- Metal Bed ---
  {
    id: "5116877-54188992736",
    name: "SEATECH Metal Bed with Headboard Only (Black)",
    brand: "Seatech OEM",
    model: "SEATECH MB01",
    category: "Metal Bed",
    price: 16500,
    availability: 1000,
    minQty: 20,
    discount: 15,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Bed-1/Metal Bed-B.jpg", thumbnail: "/categories/Metal Bed-1/Metal Bed-S.jpg" },
      { main: "/categories/Metal Bed-1/Metal Bed-B copy.jpg", thumbnail: "/categories/Metal Bed-1/Metal Bed-S copy.jpg" },
      { main: "/categories/Metal Bed-1/Metal Bed-B copy 2.jpg", thumbnail: "/categories/Metal Bed-1/Metal Bed-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Metal bed with Headboard only" },
      { category: "Dimensions", name: "Size Category", value: "Single" },
      { category: "Dimensions", name: "Length", value: "1950 - 2000 mm" },
      { category: "Dimensions", name: "Width", value: "900 - 1050 mm (3 to 3.5 ft)" },
      { category: "Dimensions", name: "Height", value: "550 - 600 mm" },
      { category: "Material", name: "Bed Frame", value: "Mild Steel" },
      { category: "Material", name: "Mattress Support", value: "Horizontal Beams (Mild Steel)" },
      { category: "Features", name: "Headboard", value: "Yes (Mild Steel)" },
      { category: "Features", name: "Footboard", value: "No" }
    ]
  },
  // --- Metal Shelving Racks (Adjustable Type) ---
  {
    id: "5116877-35855066996",
    name: "SEATECH Metal Shelving Rack Open-type (975x400mm)",
    brand: "Seatech OEM",
    model: "SEATECH MSR08",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 6000,
    availability: 1000,
    minQty: 10,
    discount: 65,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-1/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Open-type (No side/back sheets)" },
      { category: "Dimensions", name: "Overall Height", value: "975 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "400 mm" },
      { category: "Material", name: "Shelves", value: "Steel Sheet (CR1)" },
      { category: "Features", name: "Strips", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  {
    id: "5116877-57267968030",
    name: "SEATECH Metal Shelving Rack Open-type (1275x300mm)",        
    brand: "Seatech OEM",
    model: "SEATECH MSR01",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 7900,
    availability: 1000,
    minQty: 50,
    discount: 12,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-2/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Open-type (No side/back sheets)" },
      { category: "Dimensions", name: "Overall Height", value: "1275 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "300 mm" },
      { category: "Material", name: "Shelves", value: "Steel Sheet (CR1)" },
      { category: "Features", name: "Strips", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  {
    id: "5116877-59274888854",
    name: "SEATECH Metal Shelving Rack Open-type (975x400mm)",
    brand: "Seatech OEM",
    model: "Seatech MSR06",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 9000,
    availability: 1000,
    minQty: 40,
    discount: 53,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-3/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Open-type (No side/back sheets)" },
      { category: "Dimensions", name: "Overall Height", value: "975 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "400 mm" },
      { category: "Material", name: "Shelves", value: "Steel Sheet (HR1)" },
      { category: "Features", name: "Strips", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  {
    id: "5116877-55251506432",
    name: "SEATECH Metal Shelving Rack Closed Type (975x300mm)",       
    brand: "Seatech OEM",
    model: "SEATECH MSR04",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 11500,
    availability: 1000,
    minQty: 21,
    discount: 75,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-4/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Closed Type (with side & back)" },
      { category: "Dimensions", name: "Overall Height", value: "975 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "300 mm" },
      { category: "Material", name: "Shelves/Sides", value: "Steel Sheet (CR1)" },
      { category: "Features", name: "Strips", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  {
    id: "5116877-46964780486",
    name: "SEATECH Metal Shelving Rack Semi-Open Type (2175x500mm)",   
    brand: "Seatech OEM",
    model: "SEATECH MSR01",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 19000,
    availability: 1900,
    minQty: 21,
    discount: 27,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-5/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Semi-Open (Sides only, no back)" },
      { category: "Dimensions", name: "Overall Height", value: "2175 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "500 mm" },
      { category: "Material", name: "Shelves", value: "Steel Sheet (HR1)" },
      { category: "Material", name: "Sides", value: "Steel Sheet (CR1)" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  {
    id: "5116877-90537851318",
    name: "SEATECH Metal Shelving Rack Closed Type (1275x300mm)",      
    brand: "Seatech OEM",
    model: "SEATECH MSR02",
    category: "Metal Shelving Racks (Adjustable Type)",
    price: 24500,
    availability: 999,
    minQty: 21,
    discount: 47,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-B.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-S.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-B copy.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-S copy.jpg" },
      { main: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-B copy 2.jpg", thumbnail: "/categories/Metal Shelving Racks (Adjustable Type)-6/Metal Shelving Racks (Adjustable Type)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Closed Type (with side & back)" },
      { category: "Dimensions", name: "Overall Height", value: "1275 mm" },
      { category: "Dimensions", name: "Overall Depth", value: "300 mm" },
      { category: "Material", name: "Shelves/Sides", value: "Steel Sheet (CR1)" },
      { category: "Standard", name: "Conformity", value: "IS 1883" }   
    ]
  },
  // --- Metal Storage Cabinet ---
  {
    id: "5116877-10142047364",
    name: "SEATECH Wall Mounted Storage Unit With Door",
    brand: "Seatech OEM",
    model: "SEATECH MSC01",
    category: "Metal Storage Cabinet",
    price: 14500,
    availability: 200,
    minQty: 10,
    discount: 26,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-B.jpg", thumbnail: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-S.jpg" },
      { main: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-B copy.jpg", thumbnail: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-S copy.jpg" },
      { main: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-B copy 2.jpg", thumbnail: "/categories/Metal Storage Cabinet-1/Metal Storage Cabinet-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Storage Unit With door" },
      { category: "Mounting", name: "Positioning", value: "Wall Mounted" },
      { category: "Storage", name: "Number of Shelves", value: "2 (Mild Steel)" },
      { category: "Storage", name: "Drawers", value: "No" },
      { category: "Material", name: "Frame/Body", value: "Mild Steel" },
      { category: "Material", name: "Door", value: "Mild Steel" },     
      { category: "Finish", name: "Exterior", value: "Painted" }       
    ]
  },
  // --- Modular Table Meeting Table Centre Table (V2) ---
  {
    id: "5116877-1278088971",
    name: "SEATECH Modular Table with MR Ply Top and Metal Understructure",
    brand: "Seatech OEM",
    model: "MT SIDH8125",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 4700,
    availability: 5000,
    minQty: 100,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-1/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MR (Moisture Resistant) Ply" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "600mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-77799422812",
    name: "SEATECH Modular Table with Marine Ply Top and Wooden Understructure",
    brand: "Seatech OEM",
    model: "SEATECH MTW01",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 4900,
    availability: 1000,
    minQty: 45,
    discount: 66,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-2/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Marine Ply" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "900mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-92767341034",
    name: "SEATECH Modular Table with Particle Board Top and Metal Understructure",
    brand: "Seatech OEM",
    model: "MT LK01",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 11500,
    availability: 500,
    minQty: 10,
    discount: 21,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-3/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (50x50mm)" },
      { category: "Dimensions", name: "Size", value: "900mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-32323298921",
    name: "SEATECH Modular Table with Particle Board Top (1800x750mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT04",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 12500,
    availability: 791,
    minQty: 11,
    discount: 34,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-4/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1800mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-2155067800",
    name: "SEATECH Modular Table with Storage (900x600mm)",
    brand: "Seatech OEM",
    model: "Seatech MT09",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 14000,
    availability: 5000,
    minQty: 10,
    discount: 26,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-5/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "900mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-49315880640",
    name: "SEATECH Modular Table with Particle Board Top (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT11",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 14200,
    availability: 1000,
    minQty: 40,
    discount: 25,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-6/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (50x50mm)" },
      { category: "Dimensions", name: "Size", value: "1800mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-74516472909",
    name: "SEATECH Modular Table with MDF Top and Wooden Understructure",
    brand: "Seatech OEM",
    model: "Seatech MT10",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 14500,
    availability: 1000,
    minQty: 40,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-7/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MDF Board" }, 
      { category: "Material", name: "Understructure", value: "MDF Board" },
      { category: "Dimensions", name: "Size", value: "1200mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-92566180604",
    name: "SEATECH Modular Table with Particle Board Top (900x600mm)", 
    brand: "Seatech OEM",
    model: "SEATECH MT07",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 14500,
    availability: 5000,
    minQty: 40,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-8/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "900mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-71436442294",
    name: "SEATECH Modular Table with Particle Board Top (1200x750mm)",
    brand: "Seatech OEM",
    model: "Seatech MT12",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 15000,
    availability: 350,
    minQty: 7,
    discount: 21,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-9/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1200mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-72462684731",
    name: "SEATECH Modular Table with MDF Top and Wooden Understructure",
    brand: "Seatech OEM",
    model: "SEATECH MT08",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 15500,
    availability: 5000,
    minQty: 40,
    discount: 18,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-10/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MDF Board" }, 
      { category: "Material", name: "Understructure", value: "MDF Board" },
      { category: "Dimensions", name: "Size", value: "1050mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-81482850688",
    name: "SEATECH Modular Table with Storage (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT15",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 16665,
    availability: 60,
    minQty: 60,
    discount: 66,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-11/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1800mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-4538655433",
    name: "SEATECH Modular Table with MR Ply Top and Wooden Understructure",
    brand: "Seatech OEM",
    model: "MT BK168",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 17500,
    availability: 500,
    minQty: 40,
    discount: 10,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-12/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "MR Ply (Moisture Resistant)" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "1500mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" },
      { category: "Features", name: "Height Adjustable", value: "Yes" }
    ]
  },
  {
    id: "5116877-17792425477",
    name: "SEATECH Modular Table with Particle Board Top and Wooden Understructure",
    brand: "Seatech OEM",
    model: "SEATECH MT14A",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 19000,
    availability: 500,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-13/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "1800mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-27221498491",
    name: "SEATECH Modular Table with BWP Ply Top and Metal Understructure",
    brand: "Seatech OEM",
    model: "Seatech MT19",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 19000,
    availability: 1000,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-14/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "BWP Ply" },   
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1200mm x 600mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-58195571908",
    name: "SEATECH Modular Table with Particle Board Top (Height Adjustable)",
    brand: "Seatech OEM",
    model: "SEATECH MT5",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 19000,
    availability: 200,
    minQty: 10,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-15/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "600mm x 600mm" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-99456516683",
    name: "SEATECH Modular Table with Particle Board Top (600x750mm)", 
    brand: "Seatech OEM",
    model: "SEATECH MT03",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 19000,
    availability: 1000,
    minQty: 10,
    discount: 34,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-16/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "600mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-2399884314",
    name: "SEATECH Modular Table with Particle Board Top and Metal Understructure",
    brand: "Seatech OEM",
    model: "SEATECH MT01",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 19500,
    availability: 1000,
    minQty: 20,
    discount: 22,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-17/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1200mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-52409802913",
    name: "SEATECH Modular Table with Particle Board Top (1200x750mm)",
    brand: "Seatech OEM",
    model: "Seatech MT13",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 21000,
    availability: 150,
    minQty: 6,
    discount: 28,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-18/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "1200mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-72323100072",
    name: "SEATECH Modular Table with BWP Ply Top (1200x750mm)",       
    brand: "Seatech OEM",
    model: "Seatech MT17",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 21500,
    availability: 351,
    minQty: 4,
    discount: 56,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-19/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "BWP Ply" },   
      { category: "Material", name: "Understructure", value: "BWP Ply" },
      { category: "Dimensions", name: "Size", value: "1200mm x 750mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-97694322079",
    name: "SEATECH Modular Table with Particle Board Top (1800x900mm)",
    brand: "Seatech OEM",
    model: "Seatech MT18",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 24500,
    availability: 51,
    minQty: 3,
    discount: 49,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-20/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "1800mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-99347438720",
    name: "SEATECH Modular Table with Particle Board Top and Metal Understructure",
    brand: "Seatech OEM",
    model: "SEATECH MT21",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 26658,
    availability: 198,
    minQty: 28,
    discount: 15,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-21/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (60x30mm)" },
      { category: "Dimensions", name: "Size", value: "1800mm x 1200mm" },
      { category: "Features", name: "Modesty Panel", value: "No" },    
      { category: "Features", name: "Storage", value: "No" }
    ]
  },
  {
    id: "5116877-40937886451",
    name: "SEATECH Modular Table with Particle Board Top (Height Adjustable)",
    brand: "Seatech OEM",
    model: "MT15 T120",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 27500,
    availability: 500,
    minQty: 12,
    discount: 44,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-22/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Mild Steel (40x40mm)" },
      { category: "Dimensions", name: "Size", value: "1800mm x 900mm" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  {
    id: "5116877-49512639890",
    name: "SEATECH Modular Table with Particle Board Top (2100x900mm)",
    brand: "Seatech OEM",
    model: "SEATECH MT23",
    category: "Modular Table Meeting Table Centre Table (V2)",
    price: 33500,
    availability: 100,
    minQty: 10,
    discount: 32,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-B.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-S.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-B copy.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-S copy.jpg" },
      { main: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-B copy 2.jpg", thumbnail: "/categories/Modular Table Meeting Table Centre Table (V2)-23/Modular Table Meeting Table Centre Table (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Material", name: "Table Top", value: "Particle Board" },
      { category: "Material", name: "Understructure", value: "Particle Board" },
      { category: "Dimensions", name: "Size", value: "2100mm x 900mm" },
      { category: "Features", name: "Modesty Panel", value: "Yes" },   
      { category: "Features", name: "Storage", value: "Yes" }
    ]
  },
  // --- Modular Work Stations (V3) ---
  {
    id: "5116877-8369679080",
    name: "SEATECH Tile Based System (Shape Fit Tiles) Modular Work Station",
    brand: "Seatech OEM",
    model: "SEATECH MWS04",
    category: "Modular Work Stations (V3)",
    price: 0, // Price - Bid Only
    availability: 150,
    minQty: 6,
    discount: 0,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-B.jpg", thumbnail: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-S.jpg" },
      { main: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-B copy.jpg", thumbnail: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-S copy.jpg" },
      { main: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-B copy 2.jpg", thumbnail: "/categories/Modular Work Stations (V3)-1/Modular Work Stations (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "System Type", value: "Tile based system (Shape fit tiles)" },
      { category: "General", name: "Usage", value: "Modular Work Station" },
      { category: "Pricing", name: "Type", value: "Bid Only / Per Seat" }
    ]
  },
  {
    id: "5116877-98791422811",
    name: "SEATECH Tile Based System (Shape Fit Tiles) Modular Work Station",
    brand: "Seatech OEM",
    model: "SEATECH MWS02",
    category: "Modular Work Stations (V3)",
    price: 0, // Price - Bid Only
    availability: 50,
    minQty: 12,
    discount: 0,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-B.jpg", thumbnail: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-S.jpg" },
      { main: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-B copy.jpg", thumbnail: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-S copy.jpg" },
      { main: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-B copy 2.jpg", thumbnail: "/categories/Modular Work Stations (V3)-2/Modular Work Stations (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "System Type", value: "Tile based system (Shape fit tiles)" },
      { category: "General", name: "Usage", value: "Modular Work Station" },
      { category: "Pricing", name: "Type", value: "Bid Only / Per Seat" }
    ]
  },
  {
    id: "5116877-18379740079",
    name: "SEATECH Panel Based System Modular Work Station",
    brand: "Seatech OEM",
    model: "SEATECH MWS03",
    category: "Modular Work Stations (V3)",
    price: 0, // Price - Bid Only
    availability: 101,
    minQty: 8,
    discount: 0,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-B.jpg", thumbnail: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-S.jpg" },
      { main: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-B copy.jpg", thumbnail: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-S copy.jpg" },
      { main: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-B copy 2.jpg", thumbnail: "/categories/Modular Work Stations (V3)-3/Modular Work Stations (V3)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "System Type", value: "Panel based system" },
      { category: "General", name: "Usage", value: "Modular Work Station" },
      { category: "Pricing", name: "Type", value: "Bid Only / Per Seat" }
    ]
  },
  // --- Reception Table ---
  {
    id: "5116877-32011828849",
    name: "SEATECH Rectangular (Straight) Reception Table",
    brand: "Seatech OEM",
    model: "SEATECH RT01",
    category: "Reception Table",
    price: 29000,
    availability: 10,
    minQty: 1,
    discount: 91,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Reception Table-1/Reception Table-B.jpg", thumbnail: "/categories/Reception Table-1/Reception Table-S.jpg" },       
      { main: "/categories/Reception Table-1/Reception Table-B copy.jpg", thumbnail: "/categories/Reception Table-1/Reception Table-S copy.jpg" },
      { main: "/categories/Reception Table-1/Reception Table-B copy 2.jpg", thumbnail: "/categories/Reception Table-1/Reception Table-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Rectangular (Straight)" },
      { category: "Dimensions", name: "Primary Table Size", value: "1500mm x 750mm (18mm Thick)" },
      { category: "Dimensions", name: "Secondary Table Size", value: "1500mm x 450mm (U-Shaped)" },
      { category: "Material", name: "Table Top", value: "MDF Board" }, 
      { category: "Material", name: "Understructure", value: "Wooden/Engineer Wood" },
      { category: "Features", name: "Side Storage Unit", value: "Yes" },
      { category: "Features", name: "Logo Display Area", value: "Yes (MDF Board)" }
    ]
  },
  // --- Revolving Chair (V5) ---
  {
    id: "5116877-30245523181",
    name: "SEATECH Low-back Revolving Chair (Polyester)",
    brand: "Seatech OEM",
    model: "SEATECH LBR01",
    category: "Revolving Chair (V5)",
    price: 4100,
    availability: 100,
    minQty: 11,
    discount: 57,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-1/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Polyester Fabric" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-75452011118",
    name: "SEATECH Low-back Revolving Chair (Mesh)",
    brand: "Seatech OEM",
    model: "SEATECH LBR06",
    category: "Revolving Chair (V5)",
    price: 4100,
    availability: 1000,
    minQty: 10,
    discount: 84,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-2/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Mesh Fabrics" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-34906301301",
    name: "SEATECH Low-back Revolving Chair (Mesh)",
    brand: "Seatech OEM",
    model: "SEATECH LBR05",
    category: "Revolving Chair (V5)",
    price: 4500,
    availability: 1000,
    minQty: 5,
    discount: 82,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-3/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Mesh Fabrics" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-31981559481",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "Seatech HBR01",
    category: "Revolving Chair (V5)",
    price: 8900,
    availability: 351,
    minQty: 7,
    discount: 57,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },
    images: [
      { main: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-4/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "Yes" },        
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-71417879343",
    name: "SEATECH Low-back Revolving Chair (Leather)",
    brand: "Seatech OEM",
    model: "SEATECH LBR04",
    category: "Revolving Chair (V5)",
    price: 11000,
    availability: 1000,
    minQty: 25,
    discount: 57,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-5/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leather" },  
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "No" },
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-9120412407",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR LF05",
    category: "Revolving Chair (V5)",
    price: 15100,
    availability: 500,
    minQty: 10,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-6/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "Yes" },        
      { category: "Features", name: "Armrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-3843495870",
    name: "SEATECH High-back Revolving Chair (Mesh)",
    brand: "Seatech OEM",
    model: "HBR MF08",
    category: "Revolving Chair (V5)",
    price: 16000,
    availability: 600,
    minQty: 10,
    discount: 48,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-7/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Mesh Fabrics" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "No" },
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-65127712647",
    name: "SEATECH High-back Revolving Chair (Polyester)",
    brand: "Seatech OEM",
    model: "HBR PF09",
    category: "Revolving Chair (V5)",
    price: 17150,
    availability: 601,
    minQty: 10,
    discount: 44,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-8/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Polyester Fabric" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "No" },
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-93742010384",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "SEATECH HBR03",
    category: "Revolving Chair (V5)",
    price: 17500,
    availability: 50,
    minQty: 10,
    discount: 15,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-9/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "Yes" },        
      { category: "Features", name: "Armrest", value: "Yes" }
    ]
  },
  {
    id: "5116877-44435338088",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR LL07",
    category: "Revolving Chair (V5)",
    price: 17500,
    availability: 501,
    minQty: 10,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-10/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Armrest", value: "No" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-51497114370",
    name: "SEATECH Low-back Revolving Chair (Leather)",
    brand: "Seatech OEM",
    model: "SEATECH LBR02",
    category: "Revolving Chair (V5)",
    price: 18000,
    availability: 150,
    minQty: 5,
    discount: 29,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-11/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leather" },  
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-33436703867",
    name: "SEATECH Low-back Revolving Chair (Polyester)",
    brand: "Seatech OEM",
    model: "SEATECH LBR03",
    category: "Revolving Chair (V5)",
    price: 19000,
    availability: 500,
    minQty: 10,
    discount: 25,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-12/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Low-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Polyester Fabric" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-5655802807",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR LL08",
    category: "Revolving Chair (V5)",
    price: 19500,
    availability: 100,
    minQty: 4,
    discount: 52,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-13/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-13137108129",
    name: "SEATECH High-back Revolving Chair (Mesh)",
    brand: "Seatech OEM",
    model: "HBR MB06",
    category: "Revolving Chair (V5)",
    price: 19500,
    availability: 500,
    minQty: 10,
    discount: 52,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-14/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Mesh Fabrics" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "No" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-77217588195",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR KNT1",
    category: "Revolving Chair (V5)",
    price: 22500,
    availability: 100,
    minQty: 10,
    discount: 12,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-15/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "No" },
      { category: "Features", name: "Armrest", value: "Yes" },
      { category: "Features", name: "Lumbar Support", value: "No" }    
    ]
  },
  {
    id: "5116877-12639674672",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR LR240A",
    category: "Revolving Chair (V5)",
    price: 26500,
    availability: 500,
    minQty: 10,
    discount: 42,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-16/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "Yes" },        
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-2205881098",
    name: "SEATECH High-back Revolving Chair (Leatherette)",
    brand: "Seatech OEM",
    model: "HBR LR240",
    category: "Revolving Chair (V5)",
    price: 27500,
    availability: 500,
    minQty: 10,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-17/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leatherette" },
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "Yes" },        
      { category: "Features", name: "Lumbar Support", value: "Yes" }   
    ]
  },
  {
    id: "5116877-64565549857",
    name: "SEATECH High-back Revolving Chair (Leather)",
    brand: "Seatech OEM",
    model: "HBR AY04",
    category: "Revolving Chair (V5)",
    price: 33000,
    availability: 200,
    minQty: 5,
    discount: 41,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-B.jpg", thumbnail: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-S.jpg" },
      { main: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-B copy.jpg", thumbnail: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-S copy.jpg" },
      { main: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-B copy 2.jpg", thumbnail: "/categories/Revolving Chair (V5)-18/Revolving Chair (V5)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "High-back Revolving Chair" },
      { category: "Material", name: "Upholstery", value: "Leather" },  
      { category: "Features", name: "Height Adjustable", value: "Yes" },
      { category: "Features", name: "Locking Mechanism", value: "Yes" },
      { category: "Features", name: "Headrest", value: "No" },
      { category: "Features", name: "Armrest", value: "No" }
    ]
  },
  // --- Steel Almirah Cabinets conforming to IS 3312 (V4) ---
  {
    id: "5116877-65376912740",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL01",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 15000,
    availability: 444111,
    minQty: 2,
    discount: 70,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 3.8 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-1/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-62500054009",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL02",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 15000,
    availability: 250,
    minQty: 50,
    discount: 70,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-2/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-12941715387",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL08",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24100,
    availability: 301,
    minQty: 2,
    discount: 51,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-3/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-99635340034",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "AL PML181",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24600,
    availability: 500,
    minQty: 10,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-4/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-629089386",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "AL UPM180",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24690,
    availability: 300,
    minQty: 10,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-5/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-81906839378",
    name: "SEATECH Red Colored Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL06",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24781,
    availability: 125,
    minQty: 1,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-6/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Red" },
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-48661170744",
    name: "SEATECH Blue Colored Steel Shelving Cabinet (Large)",       
    brand: "Seatech OEM",
    model: "SEATECH AL9",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24798,
    availability: 150,
    minQty: 6,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-7/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Blue" },
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-85444176663",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "Seatech AL07",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24900,
    availability: 509,
    minQty: 8,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-8/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-66975921660",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL05",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24921,
    availability: 500,
    minQty: 6,
    discount: 95,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },     
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-9/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }  
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-33609758552",
    name: "SEATECH Red Colored Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL04",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24921,
    availability: 150,
    minQty: 7,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },   
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-10/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Red" },
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-33834996941",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Large)",        
    brand: "Seatech OEM",
    model: "SEATECH AL03",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 24990,
    availability: 500,
    minQty: 6,
    discount: 50,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },   
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-11/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "No" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-81807768751",
    name: "SEATECH Silver Grey Steel Shelving Cabinet (Small)",        
    brand: "Seatech OEM",
    model: "SEATECH ALS01",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 25000,
    availability: 500,
    minQty: 6,
    discount: 49,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },   
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-12/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Small (1150 x 760 x 430 mm)" },
      { category: "General", name: "Color", value: "Silver Grey" },    
      { category: "Features", name: "Drawers", value: "No" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  {
    id: "5116877-1248884017",
    name: "SEATECH Blue Colored Steel Shelving Cabinet (Large)",       
    brand: "Seatech OEM",
    model: "AL 3D01",
    category: "Steel Almirah Cabinets conforming to IS 3312 (V4)",
    price: 31000,
    availability: 50,
    minQty: 2,
    discount: 37,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-B.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-S.jpg" },
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy.jpg" },   
      { main: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-B copy 2.jpg", thumbnail: "/categories/Steel Almirah Cabinets conforming to IS 3312 (V4)-13/Steel Almirah Cabinets conforming to IS 3312 (V4)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Large (1855 x 910 x 480 mm)" },
      { category: "General", name: "Color", value: "Blue" },
      { category: "Features", name: "Drawers", value: "Yes" },
      { category: "Features", name: "Lockers", value: "Yes" },
      { category: "Standard", name: "Conformity", value: "IS 3312" }   
    ]
  },
  // --- Steel Bookcases confirming to IS 7761 (V2) ---
  {
    id: "5116877-12602065991",
    name: "SEATECH Steel Bookcase (IS 1079 Grade 0)",
    brand: "Seatech OEM",
    model: "SEATECH SBC03",
    category: "Steel Bookcases confirming to IS 7761 (V2)",
    price: 16000,
    availability: 500,
    minQty: 25,
    discount: 48,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-B.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-S.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-B copy.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-S copy.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-B copy 2.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-1/Steel Bookcases confirming to IS 7761 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Standard", name: "Conformity", value: "IS 7761" },  
      { category: "Material", name: "Sheet Type", value: "Mild Steel" },
      { category: "Material", name: "Grade", value: "Grade 0 of IS 1079" }
    ]
  },
  {
    id: "5116877-54865717033",
    name: "SEATECH Steel Bookcase (IS 513 Grade 0)",
    brand: "Seatech OEM",
    model: "SBC UPM60",
    category: "Steel Bookcases confirming to IS 7761 (V2)",
    price: 17500,
    availability: 150,
    minQty: 7,
    discount: 43,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-B.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-S.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-B copy.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-S copy.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-B copy 2.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-2/Steel Bookcases confirming to IS 7761 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Standard", name: "Conformity", value: "IS 7761" },  
      { category: "Material", name: "Sheet Type", value: "Mild Steel" },
      { category: "Material", name: "Grade", value: "Grade 0 of IS 513" }
    ]
  },
  {
    id: "5116877-22500417504",
    name: "SEATECH Steel Bookcase (IS 1079 Grade 0)",
    brand: "Seatech OEM",
    model: "SBC SIDH8125",
    category: "Steel Bookcases confirming to IS 7761 (V2)",
    price: 19500,
    availability: 150,
    minQty: 9,
    discount: 36,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-B.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-S.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-B copy.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-S copy.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-B copy 2.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-3/Steel Bookcases confirming to IS 7761 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Standard", name: "Conformity", value: "IS 7761" },  
      { category: "Material", name: "Sheet Type", value: "Mild Steel" },
      { category: "Material", name: "Grade", value: "Grade 0 of IS 1079" }
    ]
  },
  {
    id: "5116877-93584433087",
    name: "SEATECH Steel Bookcase (IS 513 Grade 0)",
    brand: "Seatech OEM",
    model: "SEATECH SBC01",
    category: "Steel Bookcases confirming to IS 7761 (V2)",
    price: 21000,
    availability: 1000,
    minQty: 7,
    discount: 31,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-B.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-S.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-B copy.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-S copy.jpg" },
      { main: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-B copy 2.jpg", thumbnail: "/categories/Steel Bookcases confirming to IS 7761 (V2)-4/Steel Bookcases confirming to IS 7761 (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "Standard", name: "Conformity", value: "IS 7761" },  
      { category: "Material", name: "Sheet Type", value: "Mild Steel" },
      { category: "Material", name: "Grade", value: "Grade 0 of IS 513" }
    ]
  },
  // --- Steel Filing Cabinets for General Office Purpose ---
  {
    id: "5116877-41183818274",
    name: "SEATECH Two-Drawer Steel Filing Cabinet",
    brand: "Seatech OEM",
    model: "SEATECH SFC01",
    category: "Steel Filing Cabinets for General Office Purpose",
    price: 15000,
    availability: 150,
    minQty: 10,
    discount: 64,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-B.jpg", thumbnail: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-S.jpg" },
      { main: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-B copy.jpg", thumbnail: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-S copy.jpg" },
      { main: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-B copy 2.jpg", thumbnail: "/categories/Steel Filing Cabinets for General Office Purpose-1/Steel Filing Cabinets for General Office Purpose-S copy 2.jpg" }      
    ],
    specifications: [
      { category: "General", name: "Type", value: "Two-Drawer Type" }, 
      { category: "General", name: "Color", value: "Grey" },
      { category: "Dimensions", name: "Height", value: "750 mm" },     
      { category: "Material", name: "Sheet Material", value: "Hot Rolled Carbon Steel (HR0 Grade)" },
      { category: "Features", name: "Suspension", value: "Ball-bearing" },
      { category: "Features", name: "Lock Type", value: "6-Lever Automatic Unit" },
      { category: "Finish", name: "Coating", value: "Enamel Paint (IS:2933-1975)" }
    ]
  },
  // --- Wooden Almirah Wardrobe (V2) ---
  {
    id: "5116877-9404854358",
    name: "SEATECH Wooden Almirah (3 Shelves)",
    brand: "Seatech OEM",
    model: "SEATECH WALW04",
    category: "Wooden Almirah Wardrobe (V2)",
    price: 19000,
    availability: 50,
    minQty: 4,
    discount: 24,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-B.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-S.jpg" },
      { main: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-B copy.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-S copy.jpg" },
      { main: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-B copy 2.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-1/Wooden Almirah Wardrobe (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Wooden Almirah / Wardrobe without Mirror" },
      { category: "Dimensions", name: "Height", value: "1400 - 1450 mm" },
      { category: "Dimensions", name: "Width", value: "1000 - 1050 mm" },
      { category: "Dimensions", name: "Depth", value: "300 - 325 mm" },
      { category: "Material", name: "Body", value: "Particle Board" }, 
      { category: "Finish", name: "Exterior", value: "PVC Edge Banding" },
      { category: "Features", name: "Door Handle", value: "Yes (Metal)" },
      { category: "Features", name: "Mirror/Lock", value: "No" }       
    ]
  },
  {
    id: "5116877-69365478425",
    name: "SEATECH Wooden Almirah (4 Shelves)",
    brand: "Seatech OEM",
    model: "SEATECH WALW02",
    category: "Wooden Almirah Wardrobe (V2)",
    price: 21500,
    availability: 40,
    minQty: 6,
    discount: 14,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-B.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-S.jpg" },
      { main: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-B copy.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-S copy.jpg" },
      { main: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-B copy 2.jpg", thumbnail: "/categories/Wooden Almirah Wardrobe (V2)-2/Wooden Almirah Wardrobe (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Wooden Almirah / Wardrobe without Mirror" },
      { category: "Dimensions", name: "Height", value: "1400 - 1450 mm" },
      { category: "Dimensions", name: "Width", value: "1050 - 1100 mm" },
      { category: "Dimensions", name: "Depth", value: "325 - 350 mm" },
      { category: "Material", name: "Body", value: "Particle Board" }, 
      { category: "Finish", name: "Exterior", value: "Standard" },     
      { category: "Features", name: "Door Handle", value: "Yes (Metal)" },
      { category: "Features", name: "Mirror/Lock", value: "No" }       
    ]
  }, 
  // --- Wooden Shelf Case Rack Credenza Modular Storage (V2) ---      
  {
    id: "5116877-44350040030",
    name: "SEATECH Floor Standing Storage Unit (2 Doors)",
    brand: "Seatech OEM",
    model: "SEATECH WSRC02",
    category: "Wooden Shelf Case Rack Credenza Modular Storage (V2)",
    price: 9000,
    availability: 500,
    minQty: 10,
    discount: 64,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S.jpg" },   
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy.jpg" },
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy 2.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-1/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Case or Storage Unit (with door)" },
      { category: "Mounting", name: "Positioning", value: "Floor Standing" },
      { category: "Dimensions", name: "Height", value: "550 - 600 mm" },
      { category: "Dimensions", name: "Width", value: "550 - 600 mm" },
      { category: "Dimensions", name: "Depth", value: "300 - 325 mm" },
      { category: "Material", name: "Top/Bottom", value: "Particle Board" },
      { category: "Features", name: "Doors", value: "Yes (2 Doors)" }, 
      { category: "Features", name: "Lock/Drawers", value: "No" }      
    ]
  },
  {
    id: "5116877-96956237804",
    name: "SEATECH Floor Standing Storage Unit (2 Doors)",
    brand: "Seatech OEM",
    model: "SEATECH WSRC03",
    category: "Wooden Shelf Case Rack Credenza Modular Storage (V2)",
    price: 9500,
    availability: 500,
    minQty: 25,
    discount: 62,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S.jpg" },   
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy.jpg" },
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy 2.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-2/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Case or Storage Unit (with door)" },
      { category: "Mounting", name: "Positioning", value: "Floor Standing" },
      { category: "Dimensions", name: "Height", value: "450 - 500 mm" },
      { category: "Dimensions", name: "Width", value: "450 - 500 mm" },
      { category: "Dimensions", name: "Depth", value: "300 - 325 mm" },
      { category: "Material", name: "Top/Bottom", value: "Particle Board" },
      { category: "Features", name: "Doors", value: "Yes (2 Doors)" }, 
      { category: "Features", name: "Lock/Drawers", value: "No" }      
    ]
  },
  {
    id: "5116877-23230827204",
    name: "SEATECH Floor Standing Storage Unit (2 Doors)",
    brand: "Seatech OEM",
    model: "SEATECH WSRC01",
    category: "Wooden Shelf Case Rack Credenza Modular Storage (V2)",
    price: 15000,
    availability: 500,
    minQty: 10,
    discount: 40,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S.jpg" },   
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy.jpg" },
      { main: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-B copy 2.jpg", thumbnail: "/categories/Wooden Shelf Case Rack Credenza Modular Storage (V2)-3/Wooden Shelf Case Rack Credenza Modular Storage (V2)-S copy 2.jpg" }
    ],
    specifications: [
      { category: "General", name: "Type", value: "Case or Storage Unit (with door)" },
      { category: "Mounting", name: "Positioning", value: "Floor Standing" },
      { category: "Dimensions", name: "Height", value: "900 - 1000 mm" },
      { category: "Dimensions", name: "Width", value: "700 - 750 mm" },
      { category: "Dimensions", name: "Depth", value: "375 - 400 mm" },
      { category: "Material", name: "Top/Bottom", value: "Particle Board" },
      { category: "Features", name: "Doors", value: "Yes (2 Doors)" }, 
      { category: "Features", name: "Lock/Drawers", value: "No" }      
    ]
  },
  // --- Writing Pad Chair ---
  {
    id: "5116877-3519390899",
    name: "SEATECH Writing Pad Chair (Legs, Half Pad)",
    brand: "Seatech OEM",
    model: "SEATECH WPC01",
    category: "Writing Pad Chair",
    price: 2500,
    availability: 3000,
    minQty: 40,
    discount: 67,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-1/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-1/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-1/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-1/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-1/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-1/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Legs (Mild Steel)" },
      { category: "Seat", name: "Material", value: "Wood/Engineer Wood (No Cushion)" },
      { category: "Backrest", name: "Type", value: "Half Back (Wood)" },
      { category: "Writing Pad", name: "Type", value: "Half Pad (Fixed)" },
      { category: "Features", name: "Storage", value: "No" },
      { category: "Features", name: "Armrest", value: "One Side" }     
    ]
  },
  {
    id: "5116877-85942539440",
    name: "SEATECH Writing Pad Chair (Legs, Metal Seat)",
    brand: "Seatech OEM",
    model: "SEATECH WPC02",
    category: "Writing Pad Chair",
    price: 2700,
    availability: 3000,
    minQty: 40,
    discount: 64,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-2/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-2/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-2/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-2/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-2/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-2/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Legs (Mild Steel)" },
      { category: "Seat", name: "Material", value: "Mild Steel (No Cushion)" },
      { category: "Backrest", name: "Type", value: "Half Back (Mild Steel)" },
      { category: "Writing Pad", name: "Type", value: "Half Pad (Fixed)" },
      { category: "Features", name: "Storage", value: "No" },
      { category: "Features", name: "Armrest", value: "One Side" }     
    ]
  },
  {
    id: "5116877-81044355285",
    name: "SEATECH Cantilever Writing Pad Chair (Full Pad)",
    brand: "Seatech OEM",
    model: "WPC WC180",
    category: "Writing Pad Chair",
    price: 4260,
    availability: 320,
    minQty: 49,
    discount: 60,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.8 },      
    images: [
      { main: "/categories/Writing Pad Chair-3/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-3/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-3/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-3/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-3/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-3/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Cantilever (Stainless Steel)" },
      { category: "Seat", name: "Material", value: "Mild Steel (No Cushion)" },
      { category: "Backrest", name: "Type", value: "Half Back (Mild Steel)" },
      { category: "Writing Pad", name: "Type", value: "Full Pad (Foldable)" },
      { category: "Features", name: "Storage", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Both Sides" }   
    ]
  },
  {
    id: "5116877-20894028860",
    name: "SEATECH Cantilever Writing Pad Chair (Cushioned)",
    brand: "Seatech OEM",
    model: "WPC122",
    category: "Writing Pad Chair",
    price: 4980,
    availability: 500,
    minQty: 60,
    discount: 48,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-4/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-4/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-4/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-4/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-4/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-4/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Cantilever (Stainless Steel)" },
      { category: "Seat", name: "Material", value: "PU Foam (Cushioned)" },
      { category: "Backrest", name: "Type", value: "Full Back (Cushioned)" },
      { category: "Writing Pad", name: "Type", value: "Half Pad (Foldable)" },
      { category: "Features", name: "Storage", value: "Yes" },
      { category: "Features", name: "Armrest", value: "One Side" }     
    ]
  },
  {
    id: "5116877-74647939228",
    name: "SEATECH Cantilever Writing Pad Chair (Full Pad, Cushion)",  
    brand: "Seatech OEM",
    model: "WPC124",
    category: "Writing Pad Chair",
    price: 5200,
    availability: 601,
    minQty: 60,
    discount: 45,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-5/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-5/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-5/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-5/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-5/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-5/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Cantilever (Stainless Steel)" },
      { category: "Seat", name: "Material", value: "PU Foam (Cushioned)" },
      { category: "Backrest", name: "Type", value: "Full Back (Cushioned)" },
      { category: "Writing Pad", name: "Type", value: "Full Pad (Foldable)" },
      { category: "Features", name: "Storage", value: "Yes" },
      { category: "Features", name: "Armrest", value: "Both Sides" }   
    ]
  },
  {
    id: "5116877-87708700546",
    name: "SEATECH Writing Pad Chair (Legs, Full Pad)",
    brand: "Seatech OEM",
    model: "Seatech WPC03",
    category: "Writing Pad Chair",
    price: 6100,
    availability: 1000,
    minQty: 40,
    discount: 20,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-6/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-6/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-6/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-6/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-6/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-6/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Legs (Stainless Steel)" },
      { category: "Seat", name: "Material", value: "PU Foam (Cushioned)" },
      { category: "Backrest", name: "Type", value: "Full Back (Cushioned)" },
      { category: "Writing Pad", name: "Type", value: "Full Pad (Foldable)" },
      { category: "Features", name: "Storage", value: "No" },
      { category: "Features", name: "Armrest", value: "Both Sides" }   
    ]
  },
  {
    id: "5116877-95317641688",
    name: "SEATECH Writing Pad Chair (Legs, Metal Full Back)",
    brand: "Seatech OEM",
    model: "WPC WC200",
    category: "Writing Pad Chair",
    price: 6800,
    availability: 500,
    minQty: 40,
    discount: 35,
    countryOfOrigin: "India",
    seller: { name: "Seatech OEM", verified: true, rating: 4.2 },      
    images: [
      { main: "/categories/Writing Pad Chair-7/Writing Pad Chair-B.jpg", thumbnail: "/categories/Writing Pad Chair-7/Writing Pad Chair-S.jpg" },
      { main: "/categories/Writing Pad Chair-7/Writing Pad Chair-B copy.jpg", thumbnail: "/categories/Writing Pad Chair-7/Writing Pad Chair-S copy.jpg" },
      { main: "/categories/Writing Pad Chair-7/Writing Pad Chair-B copy 2.jpg", thumbnail: "/categories/Writing Pad Chair-7/Writing Pad Chair-S copy.jpg" }
    ],
    specifications: [
      { category: "General", name: "Frame Type", value: "Legs (Mild Steel)" },
      { category: "Seat", name: "Material", value: "Mild Steel (No Cushion)" },
      { category: "Backrest", name: "Type", value: "Full Back (Mild Steel)" },
      { category: "Writing Pad", name: "Type", value: "Half Pad (Fixed)" },
      { category: "Features", name: "Storage", value: "No" },
      { category: "Features", name: "Armrest", value: "One Side" }     
    ]
  }
];